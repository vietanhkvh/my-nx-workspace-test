import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiAntd } from './ui-antd';

export default {
  component: UiAntd,
  title: 'UiAntd',
} as ComponentMeta<typeof UiAntd>;

const Template: ComponentStory<typeof UiAntd> = (args) => <UiAntd {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
