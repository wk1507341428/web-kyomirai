import React from 'react';
import $styles from './index.less'

export default () => {
  return (
    <div className={$styles.header_inner}>
      <h1>
        <img src={require('@/assets/images/logo.png')} />
      </h1>

      <div className={$styles.contactNav}>
        <span>CONTACT</span>
      </div>
    </div>
  );
};
