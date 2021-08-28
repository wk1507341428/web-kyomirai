import React from 'react';
import $s from './index.less'
import { Nav, Footer } from '@/components';

export default () => {
  return (
    <div className={$s.pages}>
      <Nav />
      <div className={$s.section}>
        <div className={$s.h2}>CONTACT</div>
        <div className={$s.desc}>联系我们</div>
        
        <div className={$s.article}>
          如有关于我司的意见或商谈，请联系我们。<br />
          根据咨询内容不同，我们可能不能及时回复或无法告知，敬请谅解。<br />
          如果您在周末，假日以及年末休息期间来信，我们会在下一个工作日以后进行回复。
        </div>

        <div className={$s.qrcode_box}>
          <div className={$s.img_box}>
            <img src={require('@/assets/images/DY.jpeg')} />
          </div>
          <div className={$s.img_box}>
            <img src={require('@/assets/images/WB.jpeg')} />
            <div className={$s.title}>官方微博号</div>
          </div>
          <div className={$s.img_box}>
            <img src={require('@/assets/images/WX.jpg')} />
            <div className={$s.title}>微信公众号</div>
          </div>
        </div>
      </div>
    </div>
  )
};
