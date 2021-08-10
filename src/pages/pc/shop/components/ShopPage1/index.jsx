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
          <h1>我们不仅是支付工具<br />更是营销利器</h1>

          <div className={$styles.desc}>
            彩虹悦付除了可以为客户提供一种新的支付方式
            <br />
            还能提高客户下单的转化率，提升店铺盈利能力
          </div>
        </div>
      </div>
    </PageContent>
  )
};
