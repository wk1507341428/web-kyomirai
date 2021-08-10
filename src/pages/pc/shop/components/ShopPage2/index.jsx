import React from 'react';
import $styles from './index.less'
import { PageContent } from '@/components'

export default () => {
  return (
    <PageContent>
      <div className={$styles.content}>

        <div className={$styles.icon1}></div>
        <div className={$styles.icon2}></div>

        <div className={$styles.container}>

          <div className={$styles.h2_box}>
            <div className={$styles.h2}>彩虹悦付提升您的品牌</div>
            <div className={$styles.desc}>建立品牌喜爱度 解锁更高的转化率和更大的平均订单价值</div>
          </div>

          <div className={$styles.text_wrapper}>
            <img src={require('@/assets/images/shop2_text.png')} alt="彩虹悦付" />
          </div>

        </div>
      </div>
    </PageContent>
  )
};
