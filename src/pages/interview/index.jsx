import React from 'react';
import { Nav, Footer } from '@/components';
import $styles from './index.less';
import { interview } from '@/core/var'
import { Link } from 'umi'

export default () => {
  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={`site-content ${$styles.section}`}>
        <div className={$styles.h2}>INTERVIEW</div>
        <div className={$styles.desc}>采访</div>
        <section className={$styles.contentsArea}>
          <ul className={$styles.inner}>
            { interview.map((item, index) => {
                return (
                  <li key={index} className={$styles.interviewList}>
                    <section>
                      <Link to={`/interview/detail?order=${index}`} href="javascript:;">
                        <div className={$styles.left}>
                          <img
                            width="1000"
                            height="667"
                            src={item.cover}
                            alt=""
                          />
                        </div>
                        <div className={$styles.center}>
                          <div className={$styles.right}>
                            <img src={item.icon} />
                          </div>
                          <h2>{ item.h2 }</h2>
                          <p>
                            { item.desc }
                          </p>
                          <p className={$styles.rm}>
                            <span>查看更多</span>
                          </p>
                        </div>
                      </Link>
                    </section>
                  </li>
                )
            }) }
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};
