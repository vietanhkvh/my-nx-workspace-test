import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiImageRespondsiveSize } from './ui-image-respondsive-size';

export default {
  component: UiImageRespondsiveSize,
  title: 'UiImageRespondsiveSize',
} as ComponentMeta<typeof UiImageRespondsiveSize>;

const Template: ComponentStory<typeof UiImageRespondsiveSize> = (args) => (
  <UiImageRespondsiveSize {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
