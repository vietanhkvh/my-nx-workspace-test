/* eslint-disable @typescript-eslint/no-empty-function */
import styles from './ui-slider.module.scss';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { count } from 'console';

/* eslint-disable-next-line */
export interface UiSliderProps {}

const ImageContainer = (props: any) => {
  const {
    loading = true,
    offLoading = (f: any) => f,
    img = {},
    onPause = () => {},
  } = props;

  const [styleAnimation, setStyleAnimation] = useState('appear');
  useEffect(() => {
    offLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   prevImg.current = img;
  // }, [img]);

  useEffect(() => {
    setStyleAnimation('appear');
    return () => {
      setStyleAnimation('disappear');
    };
  });

  return (
    <div
      className={classNames(
        styles['image-container'],
        styles['member-container'],
        styles[styleAnimation]
      )}
      onMouseEnter={onPause}
      onMouseLeave={onPause}
    >
      {loading ? 'loading' : <img src={img.url} alt="" />}
    </div>
  );
};
const ButtonContainer = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const {
    onPause = () => {},
    paused,
    onPre = () => {},
    onNext = () => {},
    arrImg = [],
    current = 0,
  } = props;

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
          onClick={onPre}
        >
          {'<'}
        </button>
        <div className={classNames(styles['dot-container'])}>
          {arrImg.map((a: any) => (
            <span
              key={a.id}
              className={classNames(
                styles['dot-member'],
                a.id === current + 1 ? styles['current'] : ''
              )}
            ></span>
          ))}
        </div>
        <button
          className={classNames(styles['btn'], styles['btn-next'])}
          onClick={onNext}
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

export function UiSlider(props: UiSliderProps) {
  const [loading, setLoading] = useState<boolean>();
  const [paused, setPaused] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);
  const speedChange = 3000;
  const arrImg = [
    {
      id: 1,
      url: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/Halio_web.jpg?v=1660533507&width=1100',
    },
    {
      id: 2,
      url: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ONE_IN_A_MELON_BANNER.png?v=1660299007&width=1100',
    },
    {
      id: 3,
      url: 'https://cdn.shopify.com/s/files/1/0592/3369/7845/files/ORANGE_BANNER.jpg?v=1660529073&width=1100',
    },
  ];
  const offLoading = () => {
    setInterval(() => setLoading(false), 1000);
  };
  const onPause = () => {
    setPaused(!paused);
  };
  const onNext = useCallback(() => {
    current === arrImg.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }, [arrImg.length, current]);
  const onPre = () => {
    current === 0 ? setCurrent(arrImg.length - 1) : setCurrent(current - 1);
  };
  useEffect(() => {
    const sliderTimeOut = setInterval(onNext, speedChange);
    if (paused) clearInterval(sliderTimeOut);
    return () => clearInterval(sliderTimeOut);
  }, [onNext, paused, speedChange]);

  return (
    <div className={styles['slider-container']}>
      <ImageContainer
        loading={loading}
        offLoading={offLoading}
        img={arrImg[current]}
        onPause={onPause}
      />
      <ButtonContainer
        paused={paused}
        onPause={onPause}
        onNext={onNext}
        onPre={onPre}
        arrImg={arrImg}
        current={current}
      />
    </div>
  );
}

export default UiSlider;
