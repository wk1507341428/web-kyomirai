import React from 'react';
import { Nav, Footer } from '@/components';
import $styles from './index.less';

export default () => {
  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={`site-content ${$styles.section}`}>
        <div className={$styles.h2}>INTERVIEW</div>
        <div className={$styles.desc}>インタビュー</div>
        <section className={$styles.contentsArea}>
          <ul className={$styles.inner}>
            <li className={$styles.interviewList}>
              <section>
                <a href="https://kyomirai.com/interview/01/">
                  <div className={$styles.left}>
                    <img
                      width="1000"
                      height="667"
                      src="https://i1.wp.com/kyomirai.com/wp-content/uploads/2020/04/pdc_thum.jpg?fit=1000%2C667&amp;ssl=1"
                      alt=""
                      srcSet="https://i1.wp.com/kyomirai.com/wp-content/uploads/2020/04/pdc_thum.jpg?w=1000&amp;ssl=1 1000w, https://i1.wp.com/kyomirai.com/wp-content/uploads/2020/04/pdc_thum.jpg?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/kyomirai.com/wp-content/uploads/2020/04/pdc_thum.jpg?resize=768%2C512&amp;ssl=1 768w"
                      sizes="(max-width: 1000px) 100vw, 1000px"
                    />
                  </div>
                  <div className={$styles.center}>
                    <div className={$styles.right}>
                      <img src="https://i2.wp.com/kyomirai.com/wp-content/uploads/2020/02/interview01_fb.png?fit=240%2C240&amp;ssl=1" />
                    </div>
                    <h2>株式会社ｐｄｃ</h2>
                    <p>
                      「酒粕パック」などのワフードメイドシリーズが中国マーケットでもヒット
                    </p>
                    <p className={$styles.rm}>
                      <span>READ MORE</span>
                    </p>
                  </div>
                </a>
              </section>
            </li>
            <li className={$styles.interviewList}>
              <section>
                <a href="https://kyomirai.com/interview/01/">
                  <div className={$styles.left}>
                    <img
                      width="1000"
                      height="667"
                      src="https://i0.wp.com/kyomirai.com/wp-content/uploads/2020/02/graphico_1.jpg?fit=1000%2C667&amp;ssl=1"
                      class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                      alt=""
                      srcset="https://i0.wp.com/kyomirai.com/wp-content/uploads/2020/02/graphico_1.jpg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/kyomirai.com/wp-content/uploads/2020/02/graphico_1.jpg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/kyomirai.com/wp-content/uploads/2020/02/graphico_1.jpg?resize=768%2C512&amp;ssl=1 768w"
                      sizes="(max-width: 1000px) 100vw, 1000px"
                    />
                  </div>
                  <div className={$styles.center}>
                    <div className={$styles.right}>
                      <img src="https://i1.wp.com/kyomirai.com/wp-content/uploads/2020/02/interview02_fb.png?fit=240%2C240&ssl=1" />
                    </div>
                    <h2>株式会社グラフィコ</h2>
                    <p>
                    ユニークな視点と気持ちを掴むパッケージで商品開発に挑む
                    </p>
                    <p className={$styles.rm}>
                      <span>READ MORE</span>
                    </p>
                  </div>
                </a>
              </section>
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};
