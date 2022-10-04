import styles from './swipes.module.scss';
import { Button, Space, Swiper, Toast } from 'antd-mobile';
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
export interface SwipesProps {}

export function Swipes(props: SwipesProps) {
  return (
    <div className={styles['container']}>
      {/* <Swiper>{items}</Swiper> */}
      <h1>dsfsd</h1>
    </div>
  );
}

export default Swipes;
