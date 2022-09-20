import { match } from 'assert';
import { FC, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import styles from './ui-img-galery-mobile.module.scss';

export const dataImgs = [
  'https://upload.lixibox.com/system/pictures/files/000/075/347/large/1662612004.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/592/large/1656058355.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/593/large/1656058383.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/071/134/large/1648711146.jpg?v=4',
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
  // onTouchStart: (par: any) => void;
  // onTouchMove: (par: any) => void;
  // onTouchEnd: () => void;
}
const ImgGalery = forwardRef((props: ImgGaleryProps, ref: any) => {
  const { data, onChangeImage, offsetLeftCur, setOffsetLeftCur } = props;
  // const isInViewport = useIsInViewport(ref?.current[1]);
  // console.log('isInViewport1: ', isInViewport);
  const handleScroll = (event: any) => {
    const scrollLeft = event.currentTarget.scrollLeft;
    const withElement = event.currentTarget.offsetWidth;
    const id = Math.floor(scrollLeft / withElement) + 1;
    onChangeImage(id);
  };
  return (
    <div className={styles['img-galery-container']} onScroll={handleScroll}>
      {data &&
        data.map((d: any, i: number) => (
          <img
            className={styles['img-galery']}
            key={i}
            src={d}
            alt={''}
            ref={(e) => (ref.current[i] = e)}
          />
        ))}
    </div>
  );
});
interface ImgIndexCounterProps {
  length: number;
  idCur: number;
}
const ImgIndexCounter: FC<ImgIndexCounterProps> = (props) => {
  const { length, idCur } = props;
  return (
    <div className={styles['img-id-counter']}>
      <span>{idCur}/</span>
      <span>{length}</span>
    </div>
  );
};
/* eslint-disable-next-line */
export interface UiImgGaleryMobileProps {
  data: Array<string>;
}

export function UiImgGaleryMobile(props: UiImgGaleryMobileProps) {
  const { data = dataImgs } = props;
  const [idCurrent, setIdCurrent] = useState<number>(1);
  // const [touchPosition, setTouchPosition] = useState(null);
  const [offSetLeftCur, setOffSetLeftCur] = useState<number>(0);
  // const onSwipeNext = () => {
  //   idCurrent === data.length
  //     ? setIdCurrent(data.length)
  //     : setIdCurrent((preId) => preId + 1);
  // };
  // const onSwipePre = () => {
  //   idCurrent === 0 ? setIdCurrent(0) : setIdCurrent((preId) => preId - 1);
  // };

  // const handleTouchStart = (e: any) => {
  //   const touchDown = e.touches[0].clientX;
  //   setTouchPosition(touchDown);
  // };
  // const handleTouchMove = (e: any) => {
  //   const touchDown = touchPosition;

  //   if (touchDown === null) {
  //     return;
  //   }

  //   const currentTouch = e.touches[0].clientX;
  //   const diff = touchDown - currentTouch;

  //   if (diff > 5) {
  //     onSwipeNext();
  //   }

  //   if (diff < -5) {
  //     onSwipePre();
  //   }

  //   setTouchPosition(null);
  // };
  const imgRef = useRef<any>([]);

  console.log('imgRef', imgRef);
  console.log('id', idCurrent);
  return (
    <div className={styles['container']}>
      <ImgGalery
        data={data}
        ref={imgRef}
        onChangeImage={setIdCurrent}
        offsetLeftCur={offSetLeftCur}
        setOffsetLeftCur={setOffSetLeftCur}
      />
      <ImgIndexCounter length={data?.length} idCur={idCurrent} />
    </div>
  );
}

export default UiImgGaleryMobile;
