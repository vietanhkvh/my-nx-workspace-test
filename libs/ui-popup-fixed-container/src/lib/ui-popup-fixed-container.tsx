import styles from './ui-popup-fixed-container.module.scss';

/* eslint-disable-next-line */
export interface UiPopupFixedContainerProps {}

export function UiPopupFixedContainer(props: UiPopupFixedContainerProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiPopupFixedContainer!</h1>
    </div>
  );
}

export default UiPopupFixedContainer;
