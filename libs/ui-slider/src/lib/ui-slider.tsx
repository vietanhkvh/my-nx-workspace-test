/* eslint-disable @typescript-eslint/no-empty-function */
import styles from './ui-slider.module.scss';
import classNames from 'classnames';
import React, { FC, useCallback, useEffect, useState } from 'react';

interface ContentContainerProps {
  loading: boolean;
  offLoading: () => void;
  onPause: () => void;
  onPlay: () => void;
  ContentComponent: () => any;
}
const ContentContainer: FC<ContentContainerProps> = (props) => {
  const {
    loading = true,
    offLoading = () => {},
    ContentComponent = () => {},
    onPause = () => {},
    onPlay = () => {},
  } = props;

  const [styleAnimation, setStyleAnimation] = useState('transform-0');
  useEffect(() => {
    offLoading();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   prevImg.current = img;
  // }, [img]);

  useEffect(() => {
    setStyleAnimation('transorm-100');
    return () => {
      setStyleAnimation('transform-0');
    };
  }, []);

  return (
    <div
      className={classNames(
        styles['content-container'],
        styles['member-container'],
        styles[styleAnimation]
      )}
      onMouseEnter={onPause}
      onMouseLeave={onPlay}
    >
      {loading ? 'loading' : <ContentComponent />}
    </div>
  );
};
interface ButtonContainerProps {
  onChangePause: () => void;
  paused: boolean;
  onPre: () => void;
  onNext: () => void;
  arrContent: Array<any>;
  current: number;
  type: string;
}
const ButtonContainer: FC<ButtonContainerProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const {
    onChangePause = () => {},
    paused,
    onPre = () => {},
    onNext = () => {},
    arrContent = [],
    current = 0,
    type = '',
  } = props;
  const dotDisplay = (type: string) =>
    type === 'dot' ? (
      arrContent.map((a: any) => (
        <span
          key={a.id}
          className={classNames(
            styles['dot-member'],
            a.id === current + 1 ? styles['current'] : ''
          )}
        ></span>
      ))
    ) : (
      <>
        <span>{current + 1}</span>
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
          onClick={onPre}
        >
          {'<'}
        </button>
        <div className={classNames(styles['dot-container'])}>
          {dotDisplay(type)}
        </div>
        <button
          className={classNames(styles['btn'], styles['btn-next'])}
          onClick={onNext}
        >
          {'>'}
        </button>
        <button
          className={classNames(styles['btn'], styles['btn-pause'])}
          onClick={onChangePause}
        >
          {paused ? 'Play' : 'Stop'}
        </button>
      </div>
    </div>
  );
};
/* eslint-disable-next-line */
export interface UiSliderProps {
  arrContent: Array<any>;
  timeChange: number;
  type: 'dot' | 'number';
}

const UiSlider: FC<UiSliderProps> = (props) => {
  const { arrContent, timeChange, type } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [paused, setPaused] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(0);

  const offLoading = () => {
    setInterval(() => setLoading(false), 1000);
  };
  const onChangePause = useCallback(() => {
    setPaused(!paused);
  }, [paused]);
  const onPause = useCallback(() => {
    setPaused(true);
  }, []);
  const onPlay = useCallback(() => {
    setPaused(false);
  }, []);
  const onNext = useCallback(() => {
    current === arrContent.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  }, [arrContent.length, current]);
  const onPre = () => {
    current === 0 ? setCurrent(arrContent.length - 1) : setCurrent(current - 1);
  };

  useEffect(() => {
    const sliderTimeOut = setInterval(onNext, timeChange);
    if (paused) clearInterval(sliderTimeOut);
    return () => clearInterval(sliderTimeOut);
  }, [onNext, paused, timeChange]);

  return (
    <React.StrictMode>
      <div className={styles['slider-container']}>
        <ContentContainer
          loading={loading}
          offLoading={offLoading}
          ContentComponent={arrContent[current].content}
          onPause={onPause}
          onPlay={onPlay}
        />
        <ButtonContainer
          paused={paused}
          onChangePause={onChangePause}
          onNext={onNext}
          onPre={onPre}
          arrContent={arrContent}
          current={current}
          type={type}
        />
      </div>
    </React.StrictMode>
  );
};

export default UiSlider;
