import React from 'react';
import $styles from './index.less'

export default () => {
  return (
    <div className={$styles.footer}>
      <div className={$styles.footer_credits}>
        <ul>
          <li>ご利用規約</li>
          <li>個人情報保護方針</li>
        </ul>
        <p>© 2011 KYOMIRAI . All Rights Reserved.</p>
      </div>
    </div>
  )
};
