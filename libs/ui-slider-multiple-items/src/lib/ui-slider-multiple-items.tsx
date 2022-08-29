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

const ContentContainer = forwardRef(
  (
    props: {
      arrItems: Array<any>;
      sliderIndex: number;
      scrollToCurrent: (sliderIndex: number) => void;
      onNext: (arr: Array<any>) => void;
      paused: boolean;
      timeChange: number;
    },
    ref: any
  ) => {
    const sliderRef = useRef<any>();
    useEffect(() => {
      props.scrollToCurrent(props.sliderIndex);
    }, [props, props.sliderIndex]);
    useEffect(() => {
      const playSlider = setInterval(
        () => props.onNext(props.arrItems),
        props.timeChange
      );
      if (props.paused) {
        clearInterval(playSlider);
        props.scrollToCurrent(props.sliderIndex);
      }
      return () => clearInterval(playSlider);
    }, [props]);
    useEffect(() => {
      const slider = sliderRef.current;
      let isDown = false;
      let startX: number;
      let scrollLeft: number;
      const mouseDown = (e: MouseEvent) => {
        isDown = true;
        slider?.classList.add('active');
        startX = e.screenX - slider.clientLeft;
        scrollLeft = slider.scrollLeft;
      };
      const mouseLeave = () => {
        isDown = false;
        slider.classList.remove('active');
      };
      const mouseUp = () => {
        isDown = false;
        slider.classList.remove('active');
      };
      const mouseMove = (e: MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.screenX - slider.offsetLeft;
        const walk = x - startX; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
      };
      slider.addEventListener('mousedown', mouseDown);

      slider?.addEventListener('mouseleave', mouseLeave);

      slider?.addEventListener('mouseup', mouseUp);

      slider?.addEventListener('mousemove', mouseMove);

      return () => {
        slider?.removeEventListener('mousedown', mouseDown);
        slider?.removeEventListener('mouseleave', mouseLeave);
        slider?.removeEventListener('mouseup', mouseUp);
        slider?.removeEventListener('mousemove', mouseMove);
      };
    }, []);
    return (
      <div
        className={classNames(
          styles['content-container'],
          styles['member-container']
        )}
        ref={sliderRef}
      >
        {props.arrItems.map((a: any, i: number) => (
          <div
            key={a.id}
            className={classNames(
              styles['img-wrapper']
              // props.sliderIndex === i ? styles['active'] : styles['hidden']
            )}
            ref={(e) => (ref.current[i] = e)}
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
  scrollToCurrent: (index: number) => void;
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
    scrollToCurrent,
  } = props;

  const dotDisplay = (type: boolean) =>
    type ? (
      arrContent.map((a: any, i: any) => (
        <span
          key={a.id}
          className={classNames(
            styles['dot-member'],
            a.id === sliderIndex + 1 ? styles['current'] : ''
          )}
          onClick={() => scrollToCurrent(i)}
        ></span>
      ))
    ) : (
      <>
        <span>{sliderIndex + 1}</span>
        <span>/{arrContent.length}</span>
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
  const onPre = () => {
    slideIndex === 0
      ? setSlideIndex(arrItems.length - 1)
      : setSlideIndex((preSlideIndex) => preSlideIndex - 1);
  };
  const onNext = useCallback(
    (arrItems: Array<any>) => {
      slideIndex === arrItems?.length - 1
        ? setSlideIndex(0)
        : setSlideIndex((preSliderIndex) => preSliderIndex + 1);
    },
    [slideIndex]
  );
  const scrollToCurrent = (sliderIndex: number) => {
    sliderRef?.current[sliderIndex]?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className={styles['slider-mul-container']}>
      <ContentContainer
        arrItems={arrItems}
        sliderIndex={slideIndex}
        ref={sliderRef}
        scrollToCurrent={scrollToCurrent}
        paused={paused}
        onNext={onNext}
        timeChange={timeChange}
      />
      <BtnContainer
        paused={paused}
        onPause={onPause}
        onNext={onNext}
        onPre={onPre}
        arrItems={arrItems}
        sliderIndex={slideIndex}
        typeDot={typeDot}
        scrollToCurrent={scrollToCurrent}
      />
    </div>
  );
}

export default UiSliderMultipleItems;
