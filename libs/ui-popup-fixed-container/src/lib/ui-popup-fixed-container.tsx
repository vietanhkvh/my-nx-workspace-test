import classNames from 'classnames';
import { useState } from 'react';
import styles from './ui-popup-fixed-container.module.scss';

/* eslint-disable-next-line */
export interface UiPopupFixedContainerProps {
  content: { header: any; main: any };
}

export function UiPopupFixedContainer(props: UiPopupFixedContainerProps) {
  const { content } = props;
  const [isVertical, setIsVertical] = useState<boolean>(true);
  const onClickBtn = () => {
    setIsVertical((prevState) => !prevState);
  };
  const horizontalContainer = () => {
    return (
      <div className={classNames(styles['popup-fixed-container'])}>
        <div
          className={classNames(
            styles['main-form'],
            styles['member-container']
          )}
        >
          {content.header}
          {content.main}
        </div>
        <div
          className={classNames(
            styles['btn-container'],
            styles['member-container']
          )}
        >
          <button className={styles['btn-wrapper']} onClick={onClickBtn}>
            {'<'}
          </button>
        </div>
      </div>
    );
  };
  const verticalContainer = () => {
    return (
      <div
        className={classNames(
          styles['popup-fixed-container'],
          styles['popup-fixed-vertical']
        )}
      >
        <div
          className={classNames(
            styles['main-form'],
            styles['member-container']
          )}
        >
          {content.header}
        </div>
        <div
          className={classNames(
            styles['btn-container'],
            styles['member-container']
          )}
        >
          <button className={styles['btn-wrapper']} onClick={onClickBtn}>
            {'>'}
          </button>
        </div>
      </div>
    );
  };
  return isVertical ? verticalContainer() : horizontalContainer();
  // return content.title;
}

export default UiPopupFixedContainer;
