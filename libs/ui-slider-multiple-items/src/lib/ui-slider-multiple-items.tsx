/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty-pattern */
import classNames from 'classnames';
import {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './ui-slider-multiple-items.module.scss';

export const arrContent = [
  {
    id: 1,
    content: (
      <img
        src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/Halio_web.jpg?v=1660533507&width=1100"
        alt=""
        loading="lazy"
      />
    ),
  },
  {
    id: 2,
    content: (
      <img
        src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ONE_IN_A_MELON_BANNER.png?v=1660299007&width=1100"
        alt=""
        loading="lazy"
      />
    ),
  },
  {
    id: 3,
    content: (
      <img
        src="https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100"
        alt=""
        loading="lazy"
      />
    ),
  },
];

interface ContentContainerProps {
  arrItems: Array<any>;
  sliderIndex: number;
  scrollToCurrent: (index: number) => void;
  onNext: () => void;
  onPre: () => void;
  paused: boolean;
  timeChange: number;
  setSliderIndex: (index: number) => void;
  onPlay: () => void;
  onStop: () => void;
  // handleTouchStart: (par: any) => void;
  // handleTouchMove: (par: any) => void;
}
const ContentContainer = forwardRef(
  (props: ContentContainerProps, ref: any) => {
    const {
      arrItems = [],
      sliderIndex = 0,
      scrollToCurrent = (index = 0) => {},
      onNext = () => {},
      onPre,
      paused = true,
      timeChange = 0,
      onPlay = () => {},
      onStop = () => {},
    } = props;
    const sliderRef = useRef<any>();
    const [touchPosition, setTouchPosition] = useState(null);
    const [upPosition, setUpPosition] = useState(null);

    const handleTouchStart = (e: any) => {
      const touchDown = e?.touches[0].clientX;
      setTouchPosition(touchDown);
    };

    const handleTouchMove = (e: any) => {
      const touchDown = touchPosition;
      // const touchUp = upPosition;
      // if (touchDown === null || touchUp === null) {
      //   return;
      // }
      if (touchDown === null) {
        return;
      }
      const currentTouch = e.changedTouches[0].clientX;

      const diff = touchDown - currentTouch;
      console.log('diff', diff);
      if (diff > 0) {
        // setTimeout(() => onNext(), 500);
        onNext();
      } else if (diff < 0) {
        // setTimeout(() => onPre(), 500);
        onPre();
      }

      setTouchPosition(null);
      setUpPosition(null);
    };

    const handleTouchEnd = (e: any) => {
      const touchUp = e.changedTouches[0].clientX;
      setUpPosition(touchUp);
    };

    const handleMouseDown = (e: any) => {
      const touchDown = e.clientX;
      setTouchPosition(touchDown);
    };

    const handleMouseMove = (e: any) => {
      const touchDown = touchPosition;
      const touchUp = upPosition;
      if (touchDown === null || touchUp === null) {
        return;
      }

      const diff = touchDown - touchUp;
      if (diff > 0) {
        onNext();
      } else if (diff < 0) {
        onPre();
      }

      setTouchPosition(null);
      setUpPosition(null);
    };

    const handleMouseUp = (e: any) => {
      const touchUp = e.clientX;
      setUpPosition(touchUp);
    };
    useEffect(() => {
      scrollToCurrent(sliderIndex);
    }, [scrollToCurrent, sliderIndex]);

    useEffect(() => {
      const playSlider = setInterval(() => onNext(), timeChange);
      if (paused) {
        clearInterval(playSlider);
        scrollToCurrent(sliderIndex);
      }
      return () => clearInterval(playSlider);
    }, [arrItems, onNext, paused, scrollToCurrent, sliderIndex, timeChange]);

    return (
      <div
        className={classNames(
          styles['content-container'],
          styles['member-container']
        )}
        ref={sliderRef}
        onMouseEnter={onPlay}
        onMouseLeave={onStop}
        onMouseDown={(e) => {
          e.preventDefault();
          handleMouseDown(e);
        }}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}

        // onScroll={(e) => {
        //   console.log(e);
        // }}
      >
        {arrItems.map((a: any, i: number) => (
          <div
            key={a.id}
            className={classNames(
              styles['img-wrapper']
              // props.sliderIndex === i ? styles['active'] : styles['hidden']
            )}
            ref={(e) => (ref.current[i] = e)}
            onTouchStart={(e) => {
              onPlay();
              handleTouchStart(e);
            }}
            onTouchMove={handleTouchMove}
            // onTouchEnd={(e) => handleTouchEnd(e)}
          >
            {a.content}
          </div>
        ))}
      </div>
    );
  }
);

interface BtnContainerProps {
  paused: boolean;
  arrItems: Array<any>;
  onPause: () => void;
  onNext: (par: Array<any>) => void;
  onPre: (par: Array<any>) => void;
  sliderIndex: number;
  typeDot: boolean;
  setSliderIndex: (index: number) => void;
}
const BtnContainer: FC<BtnContainerProps> = (props) => {
  const {
    paused,
    onPause,
    onNext = ([]) => {},
    onPre = ([]) => {},
    arrItems = [],
    sliderIndex = 0,
    typeDot = true,
    setSliderIndex,
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
          onClick={() => setSliderIndex(i)}
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
          onClick={() => onPre(arrItems)}
        >
          {'<'}
        </button>
        <div className={classNames(styles['dot-container'])}>
          {dotDisplay(typeDot)}
        </div>
        <button
          className={classNames(styles['btn'], styles['btn-next'])}
          onClick={() => onNext(arrItems)}
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
    if (slideIndex > 0) setSlideIndex((preSlideIndex) => preSlideIndex - 1);
    else if (slideIndex === 0) setSlideIndex(arrItems?.length - 1);
  };
  const onNext = () => {
    if (slideIndex === arrItems?.length - 1) setSlideIndex(0);
    else if (slideIndex < arrItems?.length - 1)
      setSlideIndex((preSliderIndex) => preSliderIndex + 1);
  };

  console.log('slideIndex', slideIndex);
  const changeSlideIndex = (index: number) => {
    setSlideIndex(index);
  };
  const scrollToCurrent = (sliderIndex: number) => {
    sliderRef?.current[sliderIndex]?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles['slider-mul-container']}>
      <ContentContainer
        ref={sliderRef}
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
        // handleTouchStart={handleTouchStart}
        // handleTouchMove={handleTouchMove}
      />
      <BtnContainer
        paused={paused}
        onPause={onPause}
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
