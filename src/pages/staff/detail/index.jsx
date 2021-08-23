import { useEffect, useState } from 'react';
import $styles from './index.less'
import { Nav } from '@/components'
import { staff } from '@/core/var.js'
import { history } from 'umi'

export default () => {
  const { id } = history.location.query
  let info = staff.find(item => item.id === id) || {}

  const Goto = () => {
    const index = staff.findIndex(item => item.id === id)
    let temp = staff.slice(index+1)
    temp.push(...staff.slice(0, index))
    console.log(temp, "<<")
    const target = temp.find(item => !!item.id)
    history.push('/staffDetail?id=' + target.id)
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    })
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
            <div className={$styles.left}>
              {info.detail?.coverList.map(pic => {
                return (
                  <div key={pic} className={$styles.wp_block_image}>
                    <img 
                      width="380" height="auto"
                      sizes="(max-width: 580px) 100vw, 580px"
                      src={pic} />
                  </div>
                )
              })}
            </div>
            <div className={$styles.right}>
              <div className={$styles.profile}>
                <div className={$styles.nameArea}>
                  <h2 className={$styles.nm}>{ info.name_ja }</h2>
                  <h2 className={$styles.alp}>{ info.name_en }</h2>
                  <h2 className={$styles.depr}>{ info.affiliation }</h2>
                </div>

                <div className={$styles.todays}>
                  <h3>我的今天</h3>
                  <p>{ info.detail.today }</p>
                </div>
                <div className={$styles.futures}>
                  <h3>我的未来</h3>
                  <p>{ info.detail.tomorrow }</p>
                </div>
              </div>
            </div>
          </div>

          <div className={$styles.pgNv}>
            <div className={$styles.pgNvInr}>
              <div onClick={Goto} 
                className={`${$styles.prv} ${$styles.goto}`}>
                <span>PREV</span>
              </div>
              <div onClick={() => { 
                history.push('/staff')
                window.scrollTo({
                  left: 0,
                  top: 0,
                  behavior: 'smooth'
                })
              }} className={`${$styles.list}`}>
                <img src={require('@/assets/images/icon_staff_index.png')}  />
              </div>
              <div onClick={Goto} 
                className={`${$styles.next} ${$styles.goto}`}>
                <span>NEXT</span>
              </div>
			      </div>
          </div>
        </div>
      </div>
    </div>
  )
};
