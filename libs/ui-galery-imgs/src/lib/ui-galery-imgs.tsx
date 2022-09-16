import { FC, forwardRef, useRef, useState } from 'react';
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
const ImgStage: FC<ImgStageProps> = (props) => {
  const { data, indexCurrent = 1 } = props;
  return (
    <div className={styles['img-stage-container']}>
      {data.map((d: any, i: number) => (
        <img key={i} src={d} alt="" className={styles['img-stage']} />
      ))}
      <div className={styles['img-index']}>
        <span>{indexCurrent}/</span>
        <span>{data && data?.length}</span>
      </div>
    </div>
  );
};
interface ImgSmallProps {
  data: any;
}
const ImgSmall = forwardRef((props: ImgSmallProps, ref: any) => {
  const { data } = props;
  return (
    <div className={styles['img-small-container']}>
      {data.map((d: any, i: number) => (
        <img ref={ref} key={i} src={d} alt="" className={styles['img-small']} />
      ))}
    </div>
  );
});
/* eslint-disable-next-line */
export interface UiGaleryImgsProps {}

export function UiGaleryImgs(props: UiGaleryImgsProps) {
  const [indexCurrent, setIndexCurrent] = useState<number>(1);
  const imgRef = useRef<any>();
  console.log('imgRef', imgRef);
  return (
    <div className={styles['container']}>
      <ImgStage data={dataImgs} indexCurrent={indexCurrent} />
      <ImgSmall data={dataImgs} ref={imgRef} />
    </div>
  );
}

export default UiGaleryImgs;
