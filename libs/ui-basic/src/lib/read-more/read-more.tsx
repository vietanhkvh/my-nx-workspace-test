import { useState } from 'react';
import styles from './read-more.module.scss';

const countWords = (content: string) => {
  const s = content.replace(/[,;.?!]/g, ' ');
  return s.split(' ').length;
};
export const str =
  'fdsfsd dfsdf dfsd fsdf fdsf fdsf.fsdf fsdf fsdfs fsdf fsfs fsdfs';
console.log(countWords(str));
/* eslint-disable-next-line */
export interface ReadMoreProps {
  content: string;
  min: number;
  showText: string;
  hiddenText: string;
}

export function ReadMore(props: ReadMoreProps) {
  const {
    content = 'default content',
    min = 10,
    showText = 'Show more',
    hiddenText = 'Show less',
  } = props;
  const numWord = countWords(content);
  const [contentLess, setContentLess] = useState<string>(content);
  let contenCurrent = content;
  const [isHidden, setIsHidden] = useState<boolean>(numWord <= min && true);

  const handleOnHidden = () => {
    const newContent = content.split(' ', min);
    // setContentLess(`${newContent.join(' ')}...`);
    contenCurrent = `${newContent.join(' ')}...`;
    console.log('contenCurrent:', contenCurrent);
    setIsHidden(true);
  };
  const handleOnShow = () => {
    // setContentLess(content);
    setIsHidden(false);
  };
  console.log(contenCurrent);
  return (
    <div className={styles.container}>
      <p className={styles.content}>{contenCurrent}</p>
      {isHidden ? (
        <span className={styles.btn} onClick={handleOnShow}>
          {showText}
        </span>
      ) : (
        <span className={styles.btn} onClick={handleOnHidden}>
          {hiddenText}
        </span>
      )}
    </div>
  );
}

export default ReadMore;
