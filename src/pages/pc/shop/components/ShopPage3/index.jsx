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
            <div className={$styles.h2}>客户好评</div>
            <div className={$styles.desc}>CUSTOMER PRAISE</div>
          </div>

          <div className={$styles.text_wrapper}>
            
          </div>

        </div>
      </div>
    </PageContent>
  )
};
