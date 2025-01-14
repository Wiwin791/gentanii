export const paths = {
  home: {
    path: '/',
    getHref: () => '/',
  },

  auth: {
    register: {
      path: '/auth/register',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
    login: {
      path: '/auth/login',
      getHref: (redirectTo?: string | null | undefined) =>
        `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
    },
  },

  // can be replaced with backend data
  app: {
    root: {
      path: '/',
      getHref: () => '/app',
    },
    dashboard: {
      path: '/dashboard',
      getHref: () => '/dashboard',
    },
    standardWork: {
      path: '/standard-work',
      getHref: () => '/standard-work',
    },
    profile: {
      path: 'app/profile',
      getHref: () => '/app/profile',
    },
    jobCategories: {
      path: 'app/jobCategories',
      getHref: () => '/app/jobCategories',
    },
    creationForm: {
      path: 'app/creationForm',
      getHref: () => '/app/creationForm',
    },
    approvalStatus: {
      path: 'app/approvalStatus',
      getHref: () => '/app/approvalStatus',
    },
  },
} as const;
