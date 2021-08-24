import $styles from './index.less'
import { Play } from '@/components'
import { Description } from '../index.js'
import { useEffect, useRef } from 'react'
import { useVideoDialog } from '@/hooks'

export default ({
  videoStart = false
}) => {

  const ref = useRef(null)

  useEffect(() => {
    if(videoStart) {
      ref.current.play()
    }else {
      ref.current.pause()
    }
  }, [videoStart])

  return (
    <div className={$styles.video_box}>
      <div onClick={useVideoDialog.show} className={$styles.modalArea}>
				<Play />
			</div>
      <div className={$styles.textArea}>
        <Description 
          title = {'PHILOSOPHY'} 
          mark = {'思想'}
          link = {'/philosophy'}
          tips = {'思今日所想、未来所成想'} />
      </div>
      <video ref={ref} 
        playsInline muted loop preload="true"
        src={require('@/assets/video/philosophy.mp4')}></video>
    </div>
  )
}