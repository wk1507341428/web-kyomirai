import React, { useEffect, useState } from 'react';
import $styles from './index.less'

export default props => {

  const [navbarHeight, setNavbarHeight] = useState(84)
  const [footHeight, setFootHeight] = useState(50)
  // const [styles, setStyles] = useState({
  //   height: `calc(100vh - ${navbarHeight}px - ${footHeight}px)`,
  //   marginTop: `${navbarHeight}px`
  // })


  useEffect(() =>{
    const nav_bar_wrap = document.getElementById('nav_bar_wrap')
    const foot = document.getElementById('foot')
    setNavbarHeight(nav_bar_wrap.offsetHeight)
    setFootHeight(foot.offsetHeight)
  }, [])

  useEffect(() => {
    // setStyles({
    //   height: `calc(100vh - ${navbarHeight}px - ${footHeight}px)`,
    //   marginTop: `${navbarHeight}px`
    // })
  }, [navbarHeight, footHeight])


  return (
    <div className={$styles.page_content}>
      {props.children}
    </div>
  );
};
