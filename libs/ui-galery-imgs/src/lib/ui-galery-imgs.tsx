import classNames from 'classnames';
import { stringify } from 'querystring';
import {
  FC,
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './ui-galery-imgs.module.scss';
export const dataImgs = [
  'https://upload.lixibox.com/system/pictures/files/000/075/347/large/1662612004.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/592/large/1656058355.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/593/large/1656058383.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/073/594/large/1656058429.png?v=2',
  'https://upload.lixibox.com/system/pictures/files/000/071/134/large/1648711146.jpg?v=4',
];

interface ImgStageProps {
  data: any;
  indexCurrent: number;
}
const ImgStage = forwardRef((props: ImgStageProps, ref: any) => {
  const { data, indexCurrent = 1 } = props;
  const onHover = useCallback(() => {
    ref.current[indexCurrent].scrollIntoView({ behavior: 'smooth' });
  }, [indexCurrent, ref]);
  useEffect(() => {
    onHover();
  }, [onHover]);
  return (
    <div className={styles['img-statge-parent-container']}>
      <div className={styles['img-statge-parent-wrapper']}>
        <div className={styles['img-statge-parent']}>
          <div className={styles['img-stage-container']}>
            {data.map((d: any, i: number) => (
              <img
                className={styles['img-stage']}
                ref={(e) => (ref.current[i] = e)}
                key={i}
                src={d}
                alt=""
              />
            ))}
          </div>
          <div className={styles['img-index']}>
            <span>{indexCurrent + 1}/</span>
            <span>{data && data?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
interface ImgSmallProps {
  data: any;
  idCur: number;
  setIndexCurrent: (par: number) => void;
  openPopup?: () => void;
  stopClose?: (e: any) => void;
  classnames?: {
    main?: string;
    member?: string;
  };
}
const ImgSmall = forwardRef((props: ImgSmallProps, ref: any) => {
  const { data, idCur, setIndexCurrent, openPopup, stopClose, classnames } =
    props;
  return (
    <div
      className={classNames(
        classnames?.main !== null && classnames?.main,
        styles['img-small-container']
      )}
    >
      {data.map((d: any, i: number) => (
        <img
          className={classNames(
            classnames?.member !== null && classnames?.member,
            styles['img-small'],
            i === idCur && styles['active']
          )}
          ref={(e) => (ref.current[i] = e)}
          key={i}
          src={d}
          alt=""
          onMouseEnter={() => setIndexCurrent(i)}
          onClick={(e) => {
            openPopup && openPopup();
            stopClose && stopClose(e);
          }}
        />
      ))}
    </div>
  );
});

interface ImgPopupStageProps {
  imgSrc: string;
  stopClose: (e: any) => void;
}
const ImgPopupStage: FC<ImgPopupStageProps> = (props) => {
  const { imgSrc, stopClose } = props;

  return (
    <div className={styles['popup-img-stage']}>
      <img src={imgSrc} alt="" onClick={(e) => stopClose(e)} />
    </div>
  );
};

interface ImgGaleryPopupProps {
  data: any;
  isPopup: boolean;
  closePopup: () => void;
  idCurPop: number;
  chooseCurrentIndex: (par: number) => void;
}
const ImgGaleryPopup = forwardRef((props: ImgGaleryPopupProps, ref?) => {
  const { data, idCurPop, chooseCurrentIndex, closePopup, isPopup } = props;
  const stopPropagation = (e: any) => {
    e.stopPropagation();
  };
  return (
    <div
      className={classNames(
        styles['popup-container'],
        isPopup && styles['popup-appear']
      )}
      onClick={closePopup}
    >
      <button onClick={closePopup}>X</button>
      {/* <div
        className={classNames(
          styles['modal-overlay'],
          isPopup && styles['overlay-appear']
        )}
      /> */}
      <ImgPopupStage imgSrc={data[idCurPop]} stopClose={stopPropagation} />
      <ImgSmall
        ref={ref}
        data={data}
        idCur={idCurPop}
        setIndexCurrent={chooseCurrentIndex}
        stopClose={stopPropagation}
        classnames={{
          main: styles['pop-img-small'],
          member: styles['pop-img-small-member'],
        }}
      />
    </div>
  );
});
/* eslint-disable-next-line */
export interface UiGaleryImgsProps {}

export function UiGaleryImgs(props: UiGaleryImgsProps) {
  const [indexCurrent, setIndexCurrent] = useState<number>(0);
  const [idCurPop, setIdCurPop] = useState<number>(1);
  const [isPopup, setIsPopup] = useState<boolean>(false);

  const imgRef = useRef<any>([]);
  const imgStageRef = useRef<any>([]);
  const changePopup = () => {
    setIsPopup((pre) => !pre);
  };
  const setPopupF = () => {
    setIsPopup(false);
  };
  const setPopupT = () => {
    setIsPopup(true);
  };
  console.log('imgRef', imgRef);
  return (
    <div className={styles['container']}>
      <ImgStage ref={imgStageRef} data={dataImgs} indexCurrent={indexCurrent} />
      <ImgSmall
        ref={imgRef}
        data={dataImgs}
        idCur={indexCurrent}
        setIndexCurrent={setIndexCurrent}
        openPopup={setPopupT}
      />
      <ImgGaleryPopup
        data={dataImgs}
        isPopup={isPopup}
        closePopup={setPopupF}
        idCurPop={indexCurrent}
        chooseCurrentIndex={setIndexCurrent}
        ref={imgRef}
      />
    </div>
  );
}

export default UiGaleryImgs;
