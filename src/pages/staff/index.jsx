import React from 'react';
import $styles from './index.less'
import { Nav } from '@/components'
import { staff } from '@/core/var.js'
import { history } from 'umi'

export default () => {


  const StaffItem = ({
    item = {}
  } = {}) => {



    return (
      <div onClick={() => {
        item.id && history.push('/staffDetail?id=' + item.id)
      }} className={$styles.staffList}>
        <div className={$styles.top}>
          <img width={'580'} height={'779'} 
            src={item.imgs} 
              sizes={`(max-width: 580px) 100vw, 580px`} />
        </div>
        <div className={$styles.bottom}>
          <p className={$styles.name_ja}>{ item.name_ja }</p>
          <p className={$styles.name_en}>{ item.name_en }</p>
          <p className={$styles.affiliation}>{ item.affiliation }</p>
        </div>
      </div>
    )
  }

  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={$styles.section}>
        <div className={$styles.h}>
          <h1>STAFF</h1>
          <div className={$styles.tips}>将今日所想，转化为未来所成的，京未来的伙伴们。</div>
        </div>
        <div className={$styles.contentsArea}>
          <div className={$styles.inner}>
            {staff.map((item,i) => <StaffItem item={item} key={i} />)}
          </div>
        </div>
      </div>
    </div>
  )
};
