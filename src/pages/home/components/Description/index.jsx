import React from 'react';
import $styles from './index.less'
import { Link } from 'umi'

export default ({
  title = '',
  mark = '',
  tips = '',
  link = '/'
} = {}) => {

  
  return (
    <>
      <div className={$styles.border}></div>
      <div className={$styles.txtContents}>
        <div className={$styles.tt}>
          <p className={$styles.title}>{ title }<span>{ mark }</span></p>
          <p dangerouslySetInnerHTML={{ __html: tips }} 
            className={$styles.txt}></p>
        </div>
        <Link to={link}>
          <span className={$styles.rm}>READ MORE</span>
          <span className={$styles.circle}></span>
        </Link>
      </div>
    </>
  )
}
