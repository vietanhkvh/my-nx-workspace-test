import styles from './ui-slider-multiple-items.module.scss';

/* eslint-disable-next-line */
export interface UiSliderMultipleItemsProps {}

export function UiSliderMultipleItems(props: UiSliderMultipleItemsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiSliderMultipleItems!</h1>
    </div>
  );
}

export default UiSliderMultipleItems;
