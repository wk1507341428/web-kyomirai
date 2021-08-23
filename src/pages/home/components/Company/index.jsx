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
				<Play/>
			</div>
      <div className={$styles.textArea}>
        <Description
          title={'COMPANY'}
          mark = {'公司简介'}
          tips = {'我们连接“人与人”，“企业与企业”<br />“日本与世界”，“今天与未来”。'}  />
      </div>
      <video ref={ref} 
        playsInline muted loop preload="true"
        src={require('@/assets/video/company.mp4')}></video>
    </div>
  )
}