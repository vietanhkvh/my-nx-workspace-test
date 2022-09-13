import classNames from 'classnames';
import styles from './ui-image-respondsive-size.module.scss';

/* eslint-disable-next-line */
interface IClassName {
  container: string;
  content: string;
}
export interface UiImageRespondsiveSizeProps {
  classnames?: IClassName;
  url: string;
}

export function UiImageRespondsiveSize(props: UiImageRespondsiveSizeProps) {
  const { classnames = { container: '', wrapper: '', content: '' }, url } =
    props;
  return (
    <div className={classNames(styles['img-container'], classnames.container)}>
      <img
        className={classNames(styles['img-content'], classnames.content)}
        alt=""
        src={url}
      />
    </div>
  );
}

export default UiImageRespondsiveSize;
