import React from 'react';
import $styles from './index.less'
import { Link } from 'umi'

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
            <Link to={'/business'} className={$styles.menu_item}>BUSINESS</Link>
            <Link to={'/philosophy'} className={$styles.menu_item}>PHILOSOPHY</Link>
            <Link to={'/company'} className={$styles.menu_item}>COMPANY</Link>
            <Link to={'/interview'} className={$styles.menu_item}>INTERVIEW</Link>
          </div>
        </div>
        <div className={$styles.contactNav}>
          CONTACT
        </div>
      </div>
    </div>
  )
};
