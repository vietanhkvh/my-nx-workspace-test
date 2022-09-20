import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiImgGaleryMobile } from './ui-img-galery-mobile';

export default {
  component: UiImgGaleryMobile,
  title: 'UiImgGaleryMobile',
} as ComponentMeta<typeof UiImgGaleryMobile>;

const Template: ComponentStory<typeof UiImgGaleryMobile> = (args) => (
  <UiImgGaleryMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
