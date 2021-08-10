import React from 'react';
import $styles from './index.less'
import { PageContent } from '../index'

export default () => {
  return (
    <PageContent>
      <div className={`${$styles.content} container`}>
        <img className={$styles.mobile} src={require('@/assets/images/homePage2_mobile.png')} alt="彩虹悦付" />
        <img className={$styles.rightImg} src={require('@/assets/images/homePage2_right.png')} alt="彩虹悦付" />
      </div>
    </PageContent>
  )
};
