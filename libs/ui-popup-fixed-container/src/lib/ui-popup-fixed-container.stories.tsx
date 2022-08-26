import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiPopupFixedContainer } from './ui-popup-fixed-container';

export default {
  component: UiPopupFixedContainer,
  title: 'UiPopupFixedContainer',
} as ComponentMeta<typeof UiPopupFixedContainer>;

const Template: ComponentStory<typeof UiPopupFixedContainer> = (args) => (
  <UiPopupFixedContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
