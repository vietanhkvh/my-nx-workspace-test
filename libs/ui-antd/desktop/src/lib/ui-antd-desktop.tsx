import styles from './ui-antd-desktop.module.scss';

/* eslint-disable-next-line */
export interface UiAntdDesktopProps {}

export function UiAntdDesktop(props: UiAntdDesktopProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiAntdDesktop!</h1>
    </div>
  );
}

export default UiAntdDesktop;
