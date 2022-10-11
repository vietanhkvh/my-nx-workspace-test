import { useState } from 'react';
import styles from './fade-in.module.scss';

/* eslint-disable-next-line */
export interface FadeInProps {
  style?: any;
  itemStyle?: any;
}

export function FadeIn(props: FadeInProps) {
  const [maxVisble, setMaxVisble] = useState<number>(0);
  return (
    <div className={styles['container']}>
      <h1>Welcome to FadeIn!</h1>
    </div>
  );
}

export default FadeIn;
