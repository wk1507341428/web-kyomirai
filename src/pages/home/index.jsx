import { useEffect, useRef, useState } from 'react';
import $styles from './index.less';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.less';
import classnames from 'classnames'
import { Business, Philosophy, Company, Header, Interview, Staff } from './components'
import { Loading } from '@/components'
import { history } from 'umi'




export default () => {

  // const video
  const ref = useRef(null)
  const swiper = useRef(null)
  const [current, setCurrent] = useState(0)
  const [ visible, setVisible] = useState(true)

  useEffect(() => {
    ref.current.style.width = document.body.clientWidth + 'px'
    ref.current.style.height = document.body.clientHeight + 'px'
  }, [])

  const slideTo = (index) => {
    swiper.current?.swiper?.slideTo(index, 500, false);
    setCurrent(index)
  }

  const tabs = [
    {
      link: '/business',
      zh: '事业领域',
      en: 'BUSINESS',
    },
    {
      link: '/philosophy',
      zh: '思考',
      en: 'PHILOSOPHY',
    },
    {
      link: '/company',
      zh: '会社概要',
      en: 'COMPANY',
    },
    {
      link: '/interview',
      zh: '采访',
      en: 'INTERVIEW',
    },
    {
      link: '/staff',
      zh: '员工',
      en: 'STAFF',
    },
  ]

  return (
    <div className={$styles.pages}>
      { visible && <Loading hide={() => setVisible(false)} /> }
      <Header />
      <div ref={ref} className={$styles.screen_box}>
        <Swiper 
          noSwipingClass = 'stop-swiping'
          ref = {swiper}>
          <SwiperSlide className={'stop-swiping'}>
            <Business videoStart={current === 0} />
          </SwiperSlide>
          <SwiperSlide className={'stop-swiping'}>
            <Philosophy videoStart={current === 1} />
          </SwiperSlide>
          <SwiperSlide className={'stop-swiping'}>
            <Company videoStart={current === 2} />
          </SwiperSlide>
          <SwiperSlide className={'stop-swiping'}>
            <Interview videoStart={current === 3} />
          </SwiperSlide>
          <SwiperSlide className={'stop-swiping'}>
            <Staff  videoStart={current === 4} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={$styles.localNav}>
        <div className={$styles.stepWrap}>
          {tabs.map((item, index) => (
            <div onMouseEnter={() => slideTo(index)}
              onClick={() => history.push(item.link)}
              key={index} className={classnames({
              [$styles.step]: true,
              [$styles.current]: index === current
            })}>
              <div className={$styles.box}>
                <div className={$styles.en}>{item.en}</div>
                <div className={$styles.zh}>{item.zh}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
