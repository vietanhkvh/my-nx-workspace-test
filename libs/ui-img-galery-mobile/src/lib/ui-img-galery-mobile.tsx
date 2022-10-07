/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames';
import _ from 'lodash';
import React from 'react';
import { FC, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import styles from './ui-img-galery-mobile.module.scss';
export const dataImgs = [
  'https://upload.lixibox.com/system/pictures/files/000/071/134/large/1648711146.jpg?v=4',
  'https://upload.lixibox.com/system/pictures/files/000/073/592/large/1656058355.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/593/large/1656058383.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
];

interface ImgGaleryProps {
  data: Array<string>;
  onChangeImage: (par: number) => void;
  openPopup: () => void;
  setIdCurPop: (par: number) => void;
}
const ImgGalery = React.memo(
  forwardRef((props: ImgGaleryProps, ref: any) => {
    const { data, onChangeImage, openPopup, setIdCurPop } = props;
    const handleEndScroll = useMemo(
      () => _.debounce((id: number) => onChangeImage(id), 300),
      [onChangeImage]
    );
    const handleScroll = (event: any) => {
      const scrollLeft = event.currentTarget.scrollLeft;
      const withElement = event.currentTarget.offsetWidth;
      const id = Math.floor(scrollLeft / withElement);
      handleEndScroll(id);
    };
    return (
      <div
        className={styles['img-galery-container']}
        onScroll={handleScroll}
        onClick={openPopup}
      >
        {data &&
          data.map((d: any, i: number) => (
            <img
              className={styles['img-galery']}
              key={i}
              src={d}
              alt={''}
              ref={(e) => (ref.current[i] = e)}
              onClick={() => {
                setIdCurPop(i);
              }}
            />
          ))}
      </div>
    );
  })
);
interface ImgIndexCounterProps {
  length: number;
  idCur: number;
  classnames?: {
    container?: string;
    wrapper?: string;
  };
}
const ImgIndexCounter: FC<ImgIndexCounterProps> = (props) => {
  const { length, idCur, classnames = {} } = props;
  return (
    <div
      className={classNames(styles['img-id-counter'], classnames?.container)}
    >
      <span>{idCur + 1}/</span>
      <span>{length}</span>
    </div>
  );
};

interface ImgPopUpProps {
  data: any;
  isPopup: boolean;
  closePopup: () => void;
  idCurPop: number;
  setIdCurPop: (par: number) => void;
  handleScrollIntoView: (par: number) => void;
  // onTouchEnd: (par: any) => void;
}
const ImgPopUp = forwardRef((props: ImgPopUpProps, ref: any) => {
  const {
    data,
    isPopup,
    closePopup,
    idCurPop,
    setIdCurPop,
    handleScrollIntoView,
  } = props;
  // const [lastScrollLeft, setLastScrollLeft] = useState<number>(0);
  const handleOnScroll = (e: any) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const widthElement = e.target.clientWidth;
    const id = Math.floor(scrollLeft / widthElement);
    handleEndScroll(id);
  };
  const handleEndScroll = useMemo(
    () => _.debounce((id: number) => setIdCurPop(id), 100),
    [setIdCurPop]
  );
  useEffect(() => {
    handleScrollIntoView(idCurPop);
    return () => {
      handleScrollIntoView(0);
    };
  }, [handleScrollIntoView]);
  // useEffect(() => {
  //   handleScrollIntoView(0);
  // }, []);
  console.log(idCurPop);
  return (
    <div
      className={classNames(
        styles['popup-container'],
        isPopup && styles['popup-active']
      )}
    >
      <button className={styles['popup-btn-close']} onClick={closePopup}>
        X
      </button>
      <div className={styles['img-container']} onScroll={handleOnScroll}>
        {data.map((d: any, i: number) => (
          <div
            className={styles['img-wrapper']}
            key={i}
            ref={(e) => (ref.current[i] = e)}
          >
            <img className={styles['img-popup']} src={d} alt="" />
          </div>
        ))}
      </div>
      <ImgIndexCounter
        length={data.length}
        idCur={idCurPop}
        classnames={{ container: styles['img-counter'] }}
      />
    </div>
  );
});
/* eslint-disable-next-line */
export interface UiImgGaleryMobileProps {
  data: Array<string>;
}

export function UiImgGaleryMobile(props: UiImgGaleryMobileProps) {
  const { data = dataImgs } = props;
  const [idCurrent, setIdCurrent] = useState<number>(0);
  const [idCurPop, setIdCurPop] = useState<number>(0);
  const [isPopup, setIsPopup] = useState<boolean>(false);
  // const [offSetLeftCur, setOffSetLeftCur] = useState<number>(0);

  const openPopup = () => {
    setIsPopup(true);
  };
  const closePopup = () => {
    setIsPopup(false);
    setIdCurPop(0);
  };
  const onChangeImgGal = (id: number) => {
    setIdCurrent(id);
  };
  // const onSwipeNext = () => {
  //   if (idCurPop === data?.length) setIdCurPop(data?.length);
  //   else if (idCurPop < data?.length) setIdCurPop((preId) => preId + 1);
  // };
  // const onSwipePre = () => {
  //   if (idCurPop === 1) setIdCurPop(1);
  //   else if (idCurPop > 0) setIdCurPop((preId) => preId - 1);
  // };

  // const handleTouchMove = (e: any) => {
  //   const touchDown = touchPosition;
  //   if (touchDown === null) {
  //     return;
  //   }
  //   const currentTouch = e.changedTouches[0].clientX;

  //   const diff = touchDown - currentTouch;
  //   console.log('diff', diff);
  //   if (diff >= 8) {
  //     onSwipeNext();
  //   } else if (diff < 8) {
  //     onSwipePre();
  //   }

  //   setTouchPosition(null);
  // };
  // const handleTouchEnd = (e: any) => {
  //   const touchUp = e.changedTouches[0].clientX;
  //   setUpPosition(touchUp);
  // };
  const handleScrollIntoView = (id: number) => {
    imgRefPopup.current[id].scrollIntoView({ behavior: 'smooth' });
  };
  const imgRef = useRef<any>([]);
  const imgRefPopup = useRef<any>([]);
  return (
    <div className={styles['container']}>
      <ImgGalery
        ref={imgRef}
        data={data}
        onChangeImage={onChangeImgGal}
        openPopup={openPopup}
        setIdCurPop={setIdCurPop}
      />
      <ImgIndexCounter length={data?.length} idCur={idCurrent} />
      <ImgPopUp
        ref={imgRefPopup}
        data={data}
        isPopup={isPopup}
        closePopup={closePopup}
        idCurPop={idCurPop}
        setIdCurPop={setIdCurPop}
        handleScrollIntoView={handleScrollIntoView}
      />
    </div>
  );
}

export default UiImgGaleryMobile;
