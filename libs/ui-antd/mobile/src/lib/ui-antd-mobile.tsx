import styles from './ui-antd-mobile.module.scss';

/* eslint-disable-next-line */
export interface UiAntdMobileProps {}

export function UiAntdMobile(props: UiAntdMobileProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiAntdMobile!</h1>
    </div>
  );
}

export default UiAntdMobile;
