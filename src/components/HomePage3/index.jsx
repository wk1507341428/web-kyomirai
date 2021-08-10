import React from 'react';
import $styles from './index.less'
import { PageContent } from '../index'

export default () => {
  return (
    <PageContent>
      <div className={`${$styles.content}`}>
        <div className={`${$styles.icon1}`}></div>
        <div className={`${$styles.icon2}`}></div>
        <div className={`${$styles.icon3}`}></div>
        <div className={$styles.container}>
          <div className={$styles.title_wrap}>
            <div className={$styles.h2}>为什么选择彩虹悦付</div>
            <div className={$styles.h2_en}>Reasons to choose color pay</div>

            <div className={$styles.card_box}>
              <img src={require('@/assets/images/homePage3_card1.png')} alt="彩虹悦付" />
              <img src={require('@/assets/images/homePage3_card2.png')} alt="彩虹悦付" />
              <img src={require('@/assets/images/homePage3_card3.png')} alt="彩虹悦付" />
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  )
};
