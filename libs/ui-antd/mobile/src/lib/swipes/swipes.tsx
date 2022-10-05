import styles from './swipes.module.scss';
import { Swiper, Toast } from 'antd-mobile';
import { ReactNode } from 'react';
const colors = ['#ace0ff', '#bcffdd', '#e4fabd', '#ffcfac'];
const items = colors.map((c, i) => (
  <Swiper.Item>
    <div
      className={styles['content']}
      style={{ background: c }}
      onClick={() => {
        Toast.show(`image at index ${i + 1}`);
      }}
    >
      {i + 1}
    </div>
  </Swiper.Item>
));
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
  } = props;
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
        style={{ padding: '0 0 16px' }}
      >
        {items}
      </Swiper>
    </div>
  );
}

export default Swipes;
