import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Swipes } from './swipes';

export default {
  component: Swipes,
  title: 'UiAntd/Swipes',
} as ComponentMeta<typeof Swipes>;

const Template: ComponentStory<typeof Swipes> = (args) => <Swipes {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
