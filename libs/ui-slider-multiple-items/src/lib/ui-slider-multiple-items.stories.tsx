import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiSliderMultipleItems, arrContent } from './ui-slider-multiple-items';

export default {
  component: UiSliderMultipleItems,
  title: 'UiSliderMultipleItems',
} as ComponentMeta<typeof UiSliderMultipleItems>;

const Template: ComponentStory<typeof UiSliderMultipleItems> = (args) => (
  <UiSliderMultipleItems {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  arrItems: arrContent,
  timeChange: 3000,
};
