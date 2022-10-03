import styles from './ui-antd.module.scss';

/* eslint-disable-next-line */
export interface UiAntdProps {}

export function UiAntd(props: UiAntdProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiAntd!</h1>
    </div>
  );
}

export default UiAntd;
