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
          link={'/interview'}
          title = {'INTERVIEW'}
          mark = {'采访'}
          tips = {'来自共同挑战<br />中国市场的合作伙伴们坦率的声音。'} />
      </div>
      <video ref={ref} 
        playsInline muted loop preload="true"
        src={require('@/assets/video/interview.mp4')}></video>
    </div>
  )
}