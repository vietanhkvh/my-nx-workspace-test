import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from './slider';
import styles from './slider.module.scss';
export default {
  component: Slider,
  title: 'UiAntd/Slider',
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

const data = [
  {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  },
  {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#367968',
  },
  {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#367968',
  },
  {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#36794f',
  },
];
const items = (d: any, i: number) => (
  <div key={i} style={d} className={styles.items}>
    {d.background}
  </div>
);
export const Primary = Template.bind({});
Primary.args = {
  dataInput: data,
  items: items,
  dot: { className: styles.dot },
};
