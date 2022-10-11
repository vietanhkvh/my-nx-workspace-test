import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FadeIn } from './fade-in';

export default {
  component: FadeIn,
  title: 'FadeIn',
} as ComponentMeta<typeof FadeIn>;

const Template: ComponentStory<typeof FadeIn> = (args) => <FadeIn {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
