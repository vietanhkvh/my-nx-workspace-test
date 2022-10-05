import styles from './swipes.module.scss';
import { Swiper, Toast } from 'antd-mobile';
import { FC, ReactNode } from 'react';
export const colors = ['#ace0ff', '#bcffdd', '#e4fabd', '#ffcfac'];
/* eslint-disable-next-line */
export interface SwipesProps {
  isAutoPlay?: boolean;
  isLoop?: boolean;
  isAllowTouchMove?: boolean;
  classnames?: string;
  defaultIndexItem?: number;
  slideSide?: number;
  trackOffset?: number;
  stuckAtBoundary?: boolean;
  indicator?: (total: number, current: number) => ReactNode;
  classnameIn?: string;
  dataInput: any;
  items: (par1?: any, par2?: any) => ReactNode;
  onClick?: () => void;
}

export function Swipes(props: SwipesProps) {
  const {
    isAutoPlay = false,
    isLoop = false,
    isAllowTouchMove = true,
    classnames = '',
    slideSide = 100,
    trackOffset = 0,
    stuckAtBoundary = false,
    classnameIn = '',
    indicator,
    dataInput,
    items,
    onClick,
  } = props;
  const itemsMember = dataInput.map((d: any, i: number) => (
    <Swiper.Item key={i} onClick={onClick}>
      {items(d, i)}
    </Swiper.Item>
  ));
  return (
    <div className={styles['container']}>
      <Swiper
        autoplay={isAutoPlay}
        allowTouchMove={isAllowTouchMove}
        className={classnames}
        loop={isLoop}
        trackOffset={trackOffset}
        slideSize={slideSide}
        stuckAtBoundary={stuckAtBoundary}
        indicator={indicator}
      >
        {itemsMember}
      </Swiper>
    </div>
  );
}

export default Swipes;
