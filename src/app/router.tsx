import { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { paths } from '@/config/paths';
import { ProtectedRoute } from '@/lib/auth';

import { AppRoot, AppRootErrorBoundary } from './routes/app/root';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: paths.home.path,
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing');
        return { Component: LandingRoute };
      },
    },
    {
      path: paths.auth.register.path,
      lazy: async () => {
        const { RegisterRoute } = await import('./routes/auth/register');
        return { Component: RegisterRoute };
      },
    },
    {
      path: paths.auth.login.path,
      lazy: async () => {
        const { LoginRoute } = await import('./routes/auth/login');
        return { Component: LoginRoute };
      },
    },
    {
      path: paths.app.root.path,
      element: (
        <ProtectedRoute>
          <AppRoot />
        </ProtectedRoute>
      ),
      ErrorBoundary: AppRootErrorBoundary,
      children: [
        {
          path: paths.app.profile.path,
          lazy: async () => {
            const { ProfileRoute } = await import('./routes/app/profile');
            return {
              Component: ProfileRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.dashboard.path,
          lazy: async () => {
            const { DashboardRoute } = await import('./routes/app/dashboard');
            return {
              Component: DashboardRoute,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.standardWork.path,
          lazy: async () => {
            const { DocumentTable } = await import(
              './routes/app/standard-work'
            );
            return {
              Component: DocumentTable,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.jobCategories.path,
          lazy: async () => {
            const { JobCategoriesTable } = await import('./routes/app/jobCategories');
            return {
              Component: JobCategoriesTable,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.creationForm.path,
          lazy: async () => {
            const { CreationForm } = await import('./routes/app/creationForm');
            return {
              Component: CreationForm,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
        {
          path: paths.app.approvalStatus.path,
          lazy: async () => {
            const { ApprovalStatus } = await import('./routes/app/approvalStatus');
            return {
              Component: ApprovalStatus,
            };
          },
          ErrorBoundary: AppRootErrorBoundary,
        },
      ],
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./routes/not-found');
        return {
          Component: NotFoundRoute,
        };
      },
      ErrorBoundary: AppRootErrorBoundary,
    },
  ]);

export const AppRouter = () => {
  const router = useMemo(() => createAppRouter(), []);

  return <RouterProvider router={router} />;
};
