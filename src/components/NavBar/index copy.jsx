import React from 'react';
import $styles from './index.less'

function NavBar() {
  return (
    <div id="nav_bar_wrap" className={$styles.nav_bar_wrap}>
      <div className={`container ${$styles.nav_bar}`}>
        <div className={$styles.nav_logo}></div>
        <div className={$styles.navbar_menu}>
          <div className={$styles.navbar_item}>10期免息</div>
          <div className={$styles.navbar_item}>10期免息</div>
          <div className={$styles.navbar_item}>10期免息</div>
          <div className={$styles.navbar_item}>10期免息</div>
          <div className={$styles.navbar_item}>10期免息</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
