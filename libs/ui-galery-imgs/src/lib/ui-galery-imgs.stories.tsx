import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiGaleryImgs } from './ui-galery-imgs';
export default {
  component: UiGaleryImgs,
  title: 'UiGaleryImgs',
} as ComponentMeta<typeof UiGaleryImgs>;

const Template: ComponentStory<typeof UiGaleryImgs> = (args) => (
  <UiGaleryImgs {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
