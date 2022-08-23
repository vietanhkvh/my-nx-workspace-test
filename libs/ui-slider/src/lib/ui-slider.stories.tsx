import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiSlider } from './ui-slider';

export default {
  component: UiSlider,
  title: 'UiSlider',
} as ComponentMeta<typeof UiSlider>;

const Template: ComponentStory<typeof UiSlider> = (args) => (
  <UiSlider {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
