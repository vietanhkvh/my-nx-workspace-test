import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UiImageRespondsiveSize } from './ui-image-respondsive-size';
import styles from './ui-image-respondsive-size.stories.module.scss';
export default {
  component: UiImageRespondsiveSize,
  title: 'UiImageRespondsiveSize',
} as ComponentMeta<typeof UiImageRespondsiveSize>;

const Template: ComponentStory<typeof UiImageRespondsiveSize> = (args) => (
  <div className={styles['bigger-container']}>
    <UiImageRespondsiveSize {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  classnames: {
    container: styles['container'],
    content: styles['content'],
  },
  url: 'https://upload.lixibox.com/system/banners/covers/000/001/269/original/1660560523.jpg',
};
