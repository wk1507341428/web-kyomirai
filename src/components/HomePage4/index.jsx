import React from 'react';
import $styles from './index.less'
import { PageContent } from '../index'

export default () => {
  return (
    <PageContent>
      <div className={`${$styles.content}`}>
        <div className={`${$styles.icon1}`}></div>
        <div className={`${$styles.icon2}`}></div>
        <div className={`${$styles.container}`}>
          <div className={$styles.title_wrap}>
            <div className={$styles.h2}>我们专注在如下行业</div>
            <div className={$styles.h2_en}>We focus on the following industries</div>

            <div className={$styles.card_box}>
              <img src={require('@/assets/images/homePage4_card1.png')} alt="彩虹悦付" />
              <img src={require('@/assets/images/homePage4_card2.png')} alt="彩虹悦付" />
              <img src={require('@/assets/images/homePage4_card3.png')} alt="彩虹悦付" />
              <img src={require('@/assets/images/homePage4_card4.png')} alt="彩虹悦付" />
            </div>

            <div className={$styles.btn}>下载行业白皮书</div>
          </div>
        </div>
      </div>
    </PageContent>
  )
};
