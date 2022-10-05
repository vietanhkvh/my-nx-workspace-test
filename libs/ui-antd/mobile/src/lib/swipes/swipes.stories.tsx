import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Swipes, colors } from './swipes';
import styles from './swipes.module.scss';
import { StarOutline, StarFill } from 'antd-mobile-icons';
import { Toast } from 'antd-mobile';

export default {
  component: Swipes,
  title: 'UiAntd/Swipes',
} as ComponentMeta<typeof Swipes>;

const Template: ComponentStory<typeof Swipes> = (args) => <Swipes {...args} />;
const indicatorNumber = (total: number, current: number) => (
  <div className={styles.customIndicatorNum}>
    {current + 1}/{total}
  </div>
);
const indicatorCus = (total: number, current: number) => (
  <div className={styles.customIndicator}>
    {Array(total)
      .fill(0)
      .map((a, i) =>
        i === current ? <StarFill key={i} /> : <StarOutline key={i} />
      )}
  </div>
);
const itemsColor = (d: any, i: number) => (
  <div
    className={styles.content}
    style={{ background: d }}
    onClick={() => {
      Toast.show(`Index ${i + 1}`);
    }}
  >
    {i + 1}
  </div>
);
const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&h=250&q=80',
];
const itemsImg = (d: any) => <img src={d} alt={''} draggable={false} />;
export const Primary = Template.bind({});
Primary.args = { items: itemsColor, dataInput: colors };

export const AutoPlay = Template.bind({});
AutoPlay.args = {
  isAutoPlay: true,
  isLoop: true,
  trackOffset: 0,
  items: itemsColor,
  dataInput: colors,
};
export const Loop = Template.bind({});
Loop.args = { isLoop: true, items: itemsColor, dataInput: colors };

export const NotAllowTouch = Template.bind({});
NotAllowTouch.args = {
  isAllowTouchMove: false,
  items: itemsColor,
  dataInput: colors,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  classnames: styles.border,
  items: itemsColor,
  dataInput: colors,
};

export const NotFullWidth = Template.bind({});
NotFullWidth.args = {
  slideSide: 80,
  trackOffset: 20,
  stuckAtBoundary: true,
  items: itemsColor,
  dataInput: colors,
};

export const IndicatorIndex = Template.bind({});
IndicatorIndex.args = {
  items: itemsColor,
  dataInput: colors,
  isAutoPlay: true,
  isLoop: true,
  indicator: indicatorNumber,
};
export const IndicatorDotCustom = Template.bind({});
IndicatorDotCustom.args = {
  isAutoPlay: false,
  isLoop: true,
  indicator: indicatorCus,
  items: itemsColor,
  dataInput: colors,
};
export const BannerSwiper = Template.bind({});
BannerSwiper.args = {
  items: itemsImg,
  dataInput: demoImages,
  isLoop: true,
};
