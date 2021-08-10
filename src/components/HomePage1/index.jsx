import React from 'react';
import $styles from './index.less'
import { PageContent } from '../index'

export default () => {
  return (
    <PageContent>
      <div className={`${$styles.content}`}>
        <div className={$styles.container}>
          <div className={$styles.h2}>
            <span>首付只需1/10</span>
            <span>拿来吧你</span>
          </div>
          <div className={$styles.tips}>
            <div>使用彩虹悦付小程序，在彩虹悦付任意合作商家下单</div>
            <div>只需支付10%首付款，即可享用您中意的商品或服务</div>
          </div>

          <div className={$styles.btn_box}>
            <img src={require('./imgs/qrcode.png')} alt="小程序码" />
            <div className={$styles.text_box}>
              <div className={$styles.text_box_h3}>生活添色彩 免息随心意</div>
              <div className={$styles.text_box_desc}>微信扫描二维码 打开彩虹悦付小程序</div>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  )
};
