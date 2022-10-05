import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Swipes } from './swipes';
import styles from './swipes.module.scss';
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
  <div className={styles.customIndicator}></div>
);
export const Primary = Template.bind({});
Primary.args = {};
export const AutoPlay = Template.bind({});
AutoPlay.args = { isAutoPlay: true, isLoop: true, trackOffset: 0 };
export const Loop = Template.bind({});
Loop.args = { isLoop: true };
export const NotAllowTouch = Template.bind({});
NotAllowTouch.args = { isAllowTouchMove: false };
export const CustomStyle = Template.bind({});
CustomStyle.args = { classnames: styles.border };
export const NotFullWidth = Template.bind({});
NotFullWidth.args = { slideSide: 80, trackOffset: 20, stuckAtBoundary: true };
export const IndicatorIndex = Template.bind({});
IndicatorIndex.args = {
  isAutoPlay: true,
  isLoop: true,
  indicator: indicatorNumber,
};
export const IndicatorDotCustom = Template.bind({});
IndicatorDotCustom.args = {
  isAutoPlay: true,
  isLoop: true,
  indicator: indicatorCus,
};
