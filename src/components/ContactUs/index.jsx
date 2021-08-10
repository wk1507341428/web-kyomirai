import React from 'react';
import $styles from './index.less'

export default () => {
  return (
    <div className={$styles.content}>
      <div className={$styles.wrapper}>
        <div className={$styles.l}>
          <img src={require('@/assets/images/logo2.png')} alt="彩虹悦付 生活添色彩 免息随心意" />
          <div className={$styles.h}></div>
        </div>
        <div className={$styles.c}>
          <div className={$styles.column}>
            <div>免息分期</div>
            <div>我是商家</div>
            <div>关于我们</div>
          </div>
          <div className={$styles.column}>
            <div>联系我们</div>
            <div>电话：400-0000-000</div>
            <div>邮箱：service@colorpay.cn</div>
            <div>地址：上海市自由贸易区民生路1403号2603室</div>
          </div>
        </div>
      </div>
      <div className={$styles.r}>
        <div className={$styles.box}>
          <img src={require('@/assets/images/wechat.png')} alt="彩虹悦付" />
          <div className={$styles.name}>微信小程序</div>
        </div>
        <div className={$styles.box}>
          <img src={require('@/assets/images/public_qrcode.png')} alt="彩虹悦付" />
          <div className={$styles.name}>微信公众号</div>
        </div>
      </div>
    </div>
  )
};
