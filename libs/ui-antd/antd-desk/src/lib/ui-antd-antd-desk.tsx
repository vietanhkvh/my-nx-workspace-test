import styles from './ui-antd-antd-desk.module.scss';

/* eslint-disable-next-line */
export interface UiAntdAntdDeskProps {}

export function UiAntdAntdDesk(props: UiAntdAntdDeskProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiAntdAntdDesk!</h1>
    </div>
  );
}

export default UiAntdAntdDesk;
