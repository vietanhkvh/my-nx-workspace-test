/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-pattern */
import classNames from 'classnames';
import { FC, forwardRef, useEffect, useRef, useState } from 'react';
import styles from './ui-slider-multiple-items.module.scss';

export const arrContent = [
  {
    id: 1,
    src: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/Halio_web.jpg?v=1660533507&width=1100',
  },
  {
    id: 2,
    src: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ONE_IN_A_MELON_BANNER.png?v=1660299007&width=1100',
  },
  {
    id: 3,
    src: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100',
  },
];

interface ContentContainerProps {
  arrItems: Array<any>;
  sliderIndex: number;
  setSliderIndex: (index: number) => void;
  scrollToCurrent: (index: number) => void;
  onNext: () => void;
  onPre: () => void;
  paused: boolean;
  timeChange: number;
  onPlay: () => void;
  onStop: () => void;
  containerRef: any;
  // handleTouchStart: (par: any) => void;
  // handleTouchMove: (par: any) => void;
}
const ContentContainer = forwardRef(
  (props: ContentContainerProps, ref: any) => {
    const {
      arrItems = [],
      sliderIndex = 0,
      setSliderIndex = () => {},
      scrollToCurrent = (index = 0) => {},
      onNext = () => {},
      onPre,
      paused = true,
      timeChange = 0,
      onPlay = () => {},
      onStop = () => {},
      containerRef = {},
    } = props;

    const [touchPosition, setTouchPosition] = useState(null);
    const [upPosition, setUpPosition] = useState(null);

    const handleTouchStart = (e: any, type: string) => {
      e.preventDefault();
      const touchDown = type === 'touch' ? e?.touches[0].clientX : e.clientX;
      setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: any) => {
      e.preventDefault();
      const touchDown = touchPosition;
      if (touchDown === null) {
        return;
      }
      const currentTouch = e.changedTouches[0].clientX;

      const diff = touchDown - currentTouch;
      console.log('diff', diff);
      if (diff > 5) {
        onNext();
      } else if (diff < 5) {
        onPre();
      }

      setTouchPosition(null);
      setUpPosition(null);
    };

    const handleTouchEnd = (e: any, type: string) => {
      e.preventDefault();
      const touchUp =
        type === 'touch' ? e.changedTouches[0].clientX : e.clientX;
      setUpPosition(touchUp);
    };

    const handleMouseMove = (e: any) => {
      e.preventDefault();
      const touchDown = touchPosition;
      const touchUp = upPosition;
      if (touchDown === null || touchUp === null) {
        return;
      }

      const diff = touchDown - touchUp;
      console.log('event', e);
      console.log('containerRef', containerRef.current.scrollLeft);
      console.log('diff', diff);
      if (diff > 0) {
        onNext();
      } else if (diff < 0) {
        onPre();
      }

      setTouchPosition(null);
      setUpPosition(null);
    };

    const handleOnScroll = (e: any) => {
      e.preventDefault();
      e.stopPropagation();
      const idCur = arrItems.findIndex((a) => a.src === e.target.src);
      console.log('idCur', idCur);
      setSliderIndex(idCur);
    };

    useEffect(() => {
      scrollToCurrent(sliderIndex);
      const playSlider = setInterval(() => onNext(), timeChange);
      if (paused) {
        clearInterval(playSlider);
      }

      return () => clearInterval(playSlider);
    }, [onNext, paused, scrollToCurrent, sliderIndex, timeChange]);

    return (
      <div
        className={classNames(
          styles['content-container'],
          styles['member-container']
        )}
        ref={containerRef}
        onMouseEnter={onPlay}
        onMouseDown={(e) => {
          handleTouchStart(e, 'mouse');
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={(e) => handleTouchEnd(e, 'mouse')}
        // onScroll={handleOnScroll}
        // onScroll={() => console.log(1)
      >
        <button
          className={classNames(
            styles['btn-content'],
            styles['pre-btn-content']
          )}
          onClick={onPre}
        >
          {'<'}
        </button>
        {arrItems.map((a: any, i: number) => (
          <div
            key={a.id}
            className={classNames(styles['img-wrapper'])}
            ref={(e) => (ref.current[i] = e)}
            onTouchStart={(e) => {
              onPlay();
              handleTouchStart(e, 'touch');
            }}
            onTouchMove={handleTouchMove}
            onMouseEnter={handleOnScroll}
          >
            <img src={a.src} alt="" loading="lazy" />
          </div>
        ))}
        <button
          className={classNames(
            styles['btn-content'],
            styles['next-btn-content']
          )}
          onClick={onNext}
        >
          {'>'}
        </button>
      </div>
    );
  }
);

interface BtnContainerProps {
  paused: boolean;
  arrItems: Array<any>;
  onPause: () => void;
  onNext: () => void;
  onPre: () => void;
  sliderIndex: number;
  typeDot: boolean;
  setSliderIndex: (index: number) => void;
  onPlay: () => void;
}
const BtnContainer: FC<BtnContainerProps> = (props) => {
  const {
    paused,
    onPause,
    onNext = () => {},
    onPre = () => {},
    arrItems = [],
    sliderIndex = 0,
    typeDot = true,
    setSliderIndex,
    onPlay = () => {},
  } = props;

  const dotDisplay = (type: boolean) =>
    type ? (
      arrItems.map((a: any, i: any) => (
        <span
          key={a.id}
          className={classNames(
            styles['dot-member'],
            a.id === sliderIndex + 1 && styles['current']
          )}
          onClick={() => {
            setSliderIndex(i);
            onPlay();
          }}
        ></span>
      ))
    ) : (
      <>
        <span>{sliderIndex + 1}</span>
        <span>/{arrItems.length}</span>
      </>
    );
  return (
    <div
      className={classNames(
        styles['btn-container'],
        styles['member-container']
      )}
    >
      <div className={classNames(styles['btn-wrapper'])}>
        <button
          className={classNames(styles['btn'], styles['btn-pre'])}
          onClick={() => {
            onPre();
            onPlay();
          }}
        >
          {'<'}
        </button>
        <div className={classNames(styles['dot-container'])}>
          {dotDisplay(typeDot)}
        </div>
        <button
          className={classNames(styles['btn'], styles['btn-next'])}
          onClick={() => {
            onNext();
            onPlay();
          }}
        >
          {'>'}
        </button>
        <button
          className={classNames(styles['btn'], styles['btn-pause'])}
          onClick={onPause}
        >
          {paused ? 'Play' : 'Stop'}
        </button>
      </div>
    </div>
  );
};

/* eslint-disable-next-line */
export interface UiSliderMultipleItemsProps {
  arrItems: Array<any>;
  timeChange: number;
  typeDot: boolean;
}

export function UiSliderMultipleItems(props: UiSliderMultipleItemsProps) {
  const { arrItems = arrContent, timeChange = 3000, typeDot = true } = props;
  const [paused, setPaused] = useState<boolean>(false);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const containerRef = useRef<any>();
  const sliderRef = useRef<any>([]);
  const onPause = () => {
    setPaused((prevState) => !prevState);
  };
  const onPlay = () => {
    setPaused(true);
  };
  const onStop = () => {
    setPaused(false);
  };
  const onPre = () => {
    if (slideIndex === 0) setSlideIndex(arrItems?.length - 1);
    else if (slideIndex > 0)
      setSlideIndex((preSlideIndex) => preSlideIndex - 1);
  };
  const onNext = () => {
    if (slideIndex === arrItems?.length - 1) setSlideIndex(0);
    else if (slideIndex < arrItems?.length - 1)
      setSlideIndex((preSliderIndex) => preSliderIndex + 1);
  };

  const changeSlideIndex = (index: number) => {
    setSlideIndex(index);
  };
  const scrollToCurrent = (sliderIndex: number) => {
    setSlideIndex(sliderIndex);
    sliderRef?.current[sliderIndex]?.scrollIntoView({
      behavior: 'smooth',
    });
  };
  // console.log('containerRef', containerRef.current.scrollLeft);
  // console.log('sliderRef', sliderRef);
  return (
    <div className={styles['slider-mul-container']}>
      <ContentContainer
        ref={sliderRef}
        containerRef={containerRef}
        arrItems={arrItems}
        sliderIndex={slideIndex}
        scrollToCurrent={scrollToCurrent}
        setSliderIndex={changeSlideIndex}
        paused={paused}
        onNext={onNext}
        onPre={onPre}
        timeChange={timeChange}
        onPlay={onPlay}
        onStop={onStop}
      />
      <BtnContainer
        paused={paused}
        onPause={onPause}
        onPlay={onPlay}
        onNext={onNext}
        onPre={onPre}
        arrItems={arrItems}
        sliderIndex={slideIndex}
        typeDot={typeDot}
        setSliderIndex={changeSlideIndex}
      />
    </div>
  );
}

export default UiSliderMultipleItems;
