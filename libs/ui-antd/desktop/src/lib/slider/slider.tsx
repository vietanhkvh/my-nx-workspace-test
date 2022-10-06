import styles from './slider.module.scss';
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import React, { ReactNode } from 'react';
/* eslint-disable-next-line */
export interface SliderProps {
  dataInput: any;
  items: (...par: any) => ReactNode;
  dot: boolean | { className?: string };
}
const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export function Slider(props: SliderProps) {
  const { dataInput, items, dot } = props;
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel
      afterChange={onChange}
      autoplay
      className={styles.carouselContainer}
      dots={dot}
    >
      {dataInput.map((d: any, i: number) => items(d, i))}
      {/* <div style={{ color: 'red' }}>
        <span>4535</span>
      </div>
      <div>fsdhgf</div>
      <div>hfghf</div>
      <div>fjghjghsd</div>
      <div>jhgjfds</div> */}
    </Carousel>
  );
}

export default Slider;
