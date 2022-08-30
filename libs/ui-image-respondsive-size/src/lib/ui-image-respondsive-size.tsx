import classNames from 'classnames';
import styles from './ui-image-respondsive-size.module.scss';

/* eslint-disable-next-line */
interface IClassName {
  container: string;
  content: string;
}
export interface UiImageRespondsiveSizeProps {
  classnames: IClassName;
}

export function UiImageRespondsiveSize(props: UiImageRespondsiveSizeProps) {
  const { classnames = { container: '', wrapper: '', content: '' } } = props;
  return (
    <div className={classNames(styles['img-container'], classnames.container)}>
      <img
        className={classNames(styles['img-content'], classnames.content)}
        alt=""
        src="https://upload.lixibox.com/system/banners/covers/000/001/269/original/1660560523.jpg"
      />
    </div>
  );
}

export default UiImageRespondsiveSize;
