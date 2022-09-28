import { match } from 'assert';
import classNames from 'classnames';
import {
  FC,
  forwardRef,
  RefAttributes,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './ui-img-galery-mobile.module.scss';

export const dataImgs = [
  'https://upload.lixibox.com/system/pictures/files/000/071/134/large/1648711146.jpg?v=4',
  'https://upload.lixibox.com/system/pictures/files/000/073/592/large/1656058355.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/593/large/1656058383.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
];
const useIsInViewport = (ref: any, index?: number) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    // if (ref.current?.length) observer.observe(ref.current[index!]);
    observer.observe(ref?.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
};
interface ImgGaleryProps {
  data: Array<string>;
  onChangeImage: (par: number) => void;
  offsetLeftCur: number;
  setOffsetLeftCur: (par: number) => void;
  openPopup: () => void;
  setIdCurPop: (par: number) => void;
  // onTouchStart: (par: any) => void;
  // onTouchMove: (par: any) => void;
  // onTouchEnd: () => void;
}
const ImgGalery = forwardRef((props: ImgGaleryProps, ref: any) => {
  const { data, onChangeImage, openPopup, setIdCurPop } = props;
  // const isInViewport = useIsInViewport(ref?.current[1]);
  // console.log('isInViewport1: ', isInViewport);
  const handleScroll = (event: any) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const withElement = event.currentTarget.offsetWidth;
    const id = Math.floor(scrollLeft / withElement) + 1;
    onChangeImage(id);
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
            ref={(e) => (ref.current[i + 1] = e)}
            onClick={() => setIdCurPop(i + 1)}
          />
        ))}
    </div>
  );
});
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
      <span>{idCur}/</span>
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
}
const ImgPopUp = forwardRef((props: ImgPopUpProps, ref: any) => {
  const { data, isPopup, closePopup, idCurPop, setIdCurPop } = props;
  const handleOnScroll = (e: any) => {
    const clientWidth = e.currentTarget.clientWidth;
    const scrollLeft = e.currentTarget.scrollLeft;
    const id = Math.floor(scrollLeft / clientWidth) + 1;
    console.log('event', e);
    // setIdCurPop(id);
  };
  console.log('idCurPop', idCurPop);
  useEffect(() => {
    ref.current[idCurPop].scrollIntoView({ behavior: 'smooth' });
  }, [idCurPop, ref, setIdCurPop]);
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
            ref={(e) => (ref.current[i + 1] = e)}
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
  const [idCurrent, setIdCurrent] = useState<number>(1);
  const [idCurPop, setIdCurPop] = useState<number>(1);
  const [touchPosition, setTouchPosition] = useState(null);
  const [offSetLeftCur, setOffSetLeftCur] = useState<number>(0);
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const openPopup = () => {
    setIsPopup(true);
  };
  const closePopup = () => {
    setIsPopup(false);
  };
  const onChangeImgGal = (id: number) => {
    setIdCurrent(id);
  };
  // const onNext=()=>{
  //   idCurPop ===
  //   setIdCurPop(preId=> preId+1)
  // }
  const onSwipeNext = () => {
    idCurrent > 0 && setIdCurrent((preId) => preId + 1);
  };
  const onSwipePre = () => {
    idCurrent < data.length && setIdCurrent((preId) => preId - 1);
  };

  const handleTouchStart = (e: any) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove = (e: any) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      onSwipeNext();
    }

    if (diff < -5) {
      onSwipePre();
    }

    setTouchPosition(null);
  };
  const imgRef = useRef<any>([]);
  const imgRefPopup = useRef<any>([]);
  return (
    <div className={styles['container']}>
      <ImgGalery
        ref={imgRef}
        data={data}
        onChangeImage={onChangeImgGal}
        offsetLeftCur={offSetLeftCur}
        setOffsetLeftCur={setOffSetLeftCur}
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
      />
    </div>
  );
}

export default UiImgGaleryMobile;
