import React from 'react';
import $styles from './index.less'

export default () => {
  return (
    <div id={$styles.site_header} className={$styles.header_footer_group}>
      <div className={$styles.header_inner}>
        <div className={$styles.header_titles_wrapper}>
          <div className={$styles.header_titles}>
            <div className={`${$styles.site_logo} ${$styles.faux_heading}`}>
              <a href="/" 
                className={`${$styles.custom_logo_link}`} rel="home">
                  <img width="133" height="25"
                    src="https://i2.wp.com/kyomirai.com/wp-content/uploads/2020/02/logo.png"
                    className={$styles.custom_logo} alt="京未来株式会社" />
              </a>
            </div>
          </div>
        </div>
        <div className={$styles.header_navigation_wrapper}>
          <div className={$styles.menu}>
            <div className={$styles.menu_item}>BUSINESS</div>
            <div className={$styles.menu_item}>PHILOSOPHY</div>
            <div className={$styles.menu_item}>COMPANY</div>
            <div className={$styles.menu_item}>INTERVIEW</div>
          </div>
        </div>
        <div className={$styles.contactNav}>
          CONTACT
        </div>
      </div>
    </div>
  )
};
