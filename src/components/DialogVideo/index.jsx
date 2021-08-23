import React from 'react';
import $styles from './index.less'

export default ({
  hide = () => {},
}) => {

  return (
    <div className={$styles.overlay}>
      <div className={`${$styles.background} animate__animated animate__faster animate__fadeIn`}></div>
      <div className={`${$styles.wrapper}`}>
        <div className={`${$styles.container} ${$styles.movie} animate__animated animate__faster animate__zoomIn`}>
          <div id={$styles.ytplayer}>
            <video width="100%" height="100%" 
              src={require('@/assets/video/BUSINESS1.mp4')} 
              autoPlay controls></video>
          </div>
        </div>

        <a onClick={hide} className={`${$styles.close} `}>
          <span></span>
        </a>

      </div>
    </div>
  )
};
