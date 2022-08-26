import classNames from 'classnames';
import { FC, useEffect, useRef, useState, forwardRef } from 'react';
import styles from './ui-indexing.module.scss';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
export const alphabet = alpha.map((x) => String.fromCharCode(x));

interface IndexContainerProps {
  arrLetter: Array<string>;
  onHoverCharacter: (character: string) => void;
}
const IndexContainer: FC<IndexContainerProps> = (props) => {
  const { arrLetter, onHoverCharacter } = props;
  return (
    <div
      className={classNames(
        styles['alphabet-index-container'],
        styles['index-contaner-member']
      )}
    >
      {arrLetter.map((a, i) => (
        <span
          className={styles['alphabet-character']}
          key={i}
          onMouseEnter={() => onHoverCharacter(a)}
        >
          {a}
        </span>
      ))}
    </div>
  );
};

interface ContentContainerProps {
  content: Array<{ id: number; character: string; member: Array<string> }>;
  // heightContainer: any;
  character: string;
}
const ContentDisplay = forwardRef((props: any, ref: any) => (
  <div
    className={styles['content-wrapper']}
    ref={(e) => (ref.current[props.i] = e)}
  >
    <div className={styles['content-title']}>{props.character}</div>
    <ul className={styles['content-detail-container']}>
      {props.detail.map((d: any, i: number) => (
        <a
          className={styles['content-detail-link-container']}
          href="https://youtube.com/"
        >
          <li key={i}>{d}</li>
        </a>
      ))}
    </ul>
  </div>
));

const ContentContainer: FC<ContentContainerProps> = (props) => {
  const { content, character } = props;
  const contentRef = useRef<any>([]);
  const scrollWhenHover = (index: number) => {
    contentRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const idCharacter = content.findIndex((c) => c.character === character);
    scrollWhenHover(idCharacter);
  }, [character, content]);
  return (
    <div
      className={classNames(
        styles['content-container'],
        styles['index-contaner-member']
      )}
    >
      {content.map((c: any, i: number) => (
        <ContentDisplay
          key={c.id}
          character={c.character}
          detail={c.member}
          i={c.id}
          ref={contentRef}
        />
      ))}
    </div>
  );
};
/* eslint-disable-next-line */
export interface UiIndexingProps {
  arrLetter: Array<string>;
  content: any;
}

export function UiIndexing(props: UiIndexingProps) {
  const { arrLetter = alphabet, content = ['1', '2', '3'] } = props;
  const [character, setCharacter] = useState<string>('A');

  const onHoverCharacter = (character: string) => {
    setCharacter(character);
  };
  return (
    <div className={styles['container']}>
      <div className={styles['indexing-container']}>
        <IndexContainer
          arrLetter={arrLetter}
          onHoverCharacter={onHoverCharacter}
        />
        <ContentContainer content={content} character={character} />
      </div>
      <div className={styles['container-image-indexing']}>
        <a href="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100">
          <div
            className={styles['img-wrapper']}
            style={{
              backgroundImage: `url("https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100")`,
            }}
          />
        </a>
      </div>
    </div>
  );
}

export default UiIndexing;
