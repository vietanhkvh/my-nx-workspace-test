import React from 'react';
import { Swiper } from 'antd-mobile';
import styles from './swipes.module.scss';

const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac'];
const items = colors.map((color, i: number) => (
  <Swiper.Item key={i}>
    <div className="">{i + 1}</div>
  </Swiper.Item>
));
/* eslint-disable-next-line */
export interface SwipesProps {}

export function Swipes(props: SwipesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Swipes!</h1>
    </div>
  );
}

export default Swipes;
