import { useEffect } from 'react';
import $styles from './index.less'

export default ({
  hide = () => {}
} = {}) => {

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, 1800)
  }, [])

  return (
    <div className={$styles.loading}></div>
  )
};
