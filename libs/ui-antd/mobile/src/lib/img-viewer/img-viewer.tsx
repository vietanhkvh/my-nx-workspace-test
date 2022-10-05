import { ImageViewer } from 'antd-mobile';
import { useState } from 'react';
import styles from './img-viewer.module.scss';
export const demoImages = [
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80',
  'https://images.unsplash.com/photo-1601128533718-374ffcca299b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3128&q=80',
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3113&q=80',
  'https://images.unsplash.com/photo-1624993590528-4ee743c9896e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=1000&q=80',
];
export const demoImage = demoImages[0];
/* eslint-disable-next-line */
export interface ImgViewerProps {
  dataInput: any;
  isVisible: boolean;
  handlerOnClose: () => void;
  defaultIndex?: number;
}

export function ImgViewer(props: ImgViewerProps) {
  const {
    dataInput = demoImages,
    isVisible,
    handlerOnClose,
    defaultIndex,
  } = props;
  return (
    <div className={styles['imgviewer-container']}>
      {Array.isArray(dataInput) ? (
        <ImageViewer.Multi
          images={dataInput}
          visible={isVisible}
          defaultIndex={defaultIndex}
          onClose={handlerOnClose}
        />
      ) : (
        <ImageViewer
          image={dataInput}
          visible={isVisible}
          onClose={handlerOnClose}
        />
      )}
    </div>
  );
}

export default ImgViewer;
