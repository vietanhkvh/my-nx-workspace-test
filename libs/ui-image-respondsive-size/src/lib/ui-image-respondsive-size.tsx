import styles from './ui-image-respondsive-size.module.scss';

/* eslint-disable-next-line */
export interface UiImageRespondsiveSizeProps {}

export function UiImageRespondsiveSize(props: UiImageRespondsiveSizeProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiImageRespondsiveSize!</h1>
    </div>
  );
}

export default UiImageRespondsiveSize;
