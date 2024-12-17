import { Meta, StoryObj } from '@storybook/react';

import { Switch } from './switch';

const meta: Meta<typeof Switch> = {
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {}
};