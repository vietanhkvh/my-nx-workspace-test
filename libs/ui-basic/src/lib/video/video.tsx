import { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './video.module.scss';

/* eslint-disable-next-line */
export interface VideoProps {}

export function Video(props: VideoProps) {
  const canvasRef = useRef<any>();
  const videoRef = useRef<any>();

  function capture() {
    const videoWidth = videoRef.current.offsetWidth;
    const videoHeight = videoRef.current.offsetHeight;
    console.log('videoRef', videoRef);
    canvasRef.current
      .getContext('2d')
      .drawImage(videoRef.current, 0, 0, videoWidth, videoHeight);

    // /** Code to merge image **/
    // /** For instance, if I want to merge a play image on center of existing image **/
    const playImage = new Image();
    playImage.src = 'path to image asset';
    playImage.onload = () => {
      const startX = videoWidth - playImage.width;
      const startY = videoHeight - playImage.height;
      canvasRef.current
        .getContext('2d')
        .drawImage(
          playImage,
          startX,
          startY,
          playImage.width,
          playImage.height
        );

      canvasRef.current.toBlob((blob: any) => {
        const img = new Image();
        img.src = window.URL.createObjectURL(blob);
        console.log('url blob', window.URL.createObjectURL(blob));
      });
    };
    /** End **/
  }
  useLayoutEffect(() => {
    capture();
  }, []);
  return (
    <div className={styles['container']}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3AtDnEC4zak"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <video
        ref={videoRef}
        src={
          'https://upload.lixibox.com/system/videos/files/000/000/096/original/_E__Video___2022.07.29___HRC_HDSD_Triet_Tay_Compress.mp4'
        }
        controls
      />
      <button onClick={capture}>Capture</button>
      <canvas
        ref={canvasRef}
        id="canvas"
        // style={{
        //   width: 120,
        //   height: 300,
        // }}
      />
    </div>
  );
}

export default Video;
