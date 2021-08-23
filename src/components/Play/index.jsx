import $styles from './index.less'

export default () => {
  return (
    <div className={$styles.moviebtn}>
      <dl>
        <dt>PLAY <span>MOVIE</span></dt>
        <dd><img src={require('@/assets/images/play.png')} alt="" /></dd>
      </dl>
    </div>
  )
};
