import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReadMore, str } from './read-more';

export default {
  component: ReadMore,
  title: 'ReadMore',
} as ComponentMeta<typeof ReadMore>;

const Template: ComponentStory<typeof ReadMore> = (args) => (
  <ReadMore {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  content: str,
};
