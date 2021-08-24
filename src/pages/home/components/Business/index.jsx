import $styles from './index.less'
import { Play } from '@/components'
import { Description } from '../index.js'
import { useState, useEffect, useRef } from 'react'
import { useVideoDialog } from '@/hooks'

export default ({
  videoStart = false
}) => {
  const ref = useRef(null)

  const { show } = useVideoDialog

  useEffect(() => {
    if(videoStart) {
      ref.current.play()
    }else {
      ref.current.pause()
    }
  }, [videoStart])

  return (
    <div className={$styles.video_box}>
      <div onClick={show} className={$styles.modalArea}>
				<Play />
			</div>
      <div className={$styles.textArea}>
        <Description 
          link = {'business'}
          title = {'BUSINESS'} 
          mark = {'事业领域'}
          tips = {'京未来让在日本市场休眠中的<br />商品“蜕变”为爆品。'} />
      </div>
      <video ref={ref} 
        src={require('@/assets/video/business.mp4')} 
        playsInline muted loop preload="true"></video>
    </div>
  )
}