import { useEffect } from 'react';
import $styles from './index.less'

export default ({
  hide = () => {}
} = {}) => {

  useEffect(() => {
    setTimeout(() => {
      hide()
    }, 2000)
  }, [])

  return (
    <div className={$styles.loading}>
      <img src={require('@/assets/images/loading.svg')} />
    </div>
  )
};
