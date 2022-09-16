import classNames from 'classnames';
import {
  FC,
  useEffect,
  useRef,
  useState,
  forwardRef,
  useCallback,
} from 'react';
import styles from './ui-indexing.module.scss';

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
export const alphabet = alpha.map((x) => String.fromCharCode(x));

interface IndexContainerProps {
  arrLetter: Array<string>;
  onHoverCharacter: (character: string) => void;
  selectedCharacter: string;
}
const IndexContainer: FC<IndexContainerProps> = (props) => {
  const { arrLetter, onHoverCharacter, selectedCharacter = 'A' } = props;
  return (
    <div
      className={classNames(
        styles['alphabet-index-container'],
        styles['index-contaner-member']
      )}
    >
      {arrLetter.map((a, i) => (
        <span
          className={classNames(
            styles['alphabet-character'],
            selectedCharacter === a ? styles['active'] : ''
          )}
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
  setCharacter: (par: string) => void;
  scrollTop: number;
  setScrollTop: (par: number) => void;
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
          key={i}
        >
          <li key={i}>{d}</li>
        </a>
      ))}
    </ul>
  </div>
));

const ContentContainer: FC<ContentContainerProps> = (props) => {
  const { content, character, setCharacter, setScrollTop, scrollTop } = props;
  const contentRef = useRef<any>([]);
  const componentRef = useRef<any>([]);
  const scrollWhenHover = useCallback((index: number) => {
    contentRef.current[index + 1]?.scrollIntoView();

    // console.log('scrollIndex:', contentRef.current[index + 1]?.offsetTop);
  }, []);
  const onScroll = () => {
    const scrollTop = componentRef.current.scrollTop;
    setScrollTop(scrollTop);
  };
  const onHoverChange = useCallback(() => {
    const idCharacter = content.findIndex((c) => c.character === character);
    scrollWhenHover(idCharacter);
    setCharacter(content[idCharacter]?.character);
  }, [character, content, scrollWhenHover, setCharacter]);

  useEffect(() => {
    onHoverChange();
  }, [onHoverChange]);

  const onScrollChange = useCallback(() => {
    const idCharacterScroll = contentRef.current.findIndex(
      (cRef: any) =>
        cRef?.offsetTop <= scrollTop &&
        scrollTop <= cRef?.offsetTop + cRef?.offsetHeight
    );
    console.log('scrollTop', scrollTop);
    console.log('idCharacterScroll', idCharacterScroll);
    setCharacter(content[idCharacterScroll - 1]?.character);
  }, [content, scrollTop, setCharacter]);
  useEffect(() => {
    onScrollChange();
  }, [onScrollChange]);
  return (
    <div
      className={classNames(
        styles['content-container'],
        styles['index-contaner-member']
      )}
      ref={componentRef}
      onScroll={onScroll}
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
  const [character, setCharacter] = useState<string>('');
  const [scrollTop, setScrollTop] = useState<number>(0);
  const onHoverCharacter = (character: string) => {
    setCharacter(character);
  };
  // console.log('scrollTop', scrollTop);
  return (
    <div className={styles['container']}>
      <div className={styles['indexing-container']}>
        <IndexContainer
          arrLetter={arrLetter}
          selectedCharacter={character}
          onHoverCharacter={onHoverCharacter}
        />
        <ContentContainer
          content={content}
          character={character}
          setCharacter={setCharacter}
          scrollTop={scrollTop}
          setScrollTop={setScrollTop}
        />
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
