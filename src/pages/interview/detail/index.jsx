import React from 'react';
import $s from './index.less';
import { Nav, Footer } from '@/components';
import { interview } from '@/core/var'
import { history } from 'umi'

let Detail = interview[0].detail;

export default () => {

  const { order } = history.location.query

  Detail = interview[order].detail;
  

  const Article = ({ item }) => {
    return (
      <div className={`${$s.wp_block_group} ${$s.alignwide}`}>
        <div className={`${$s.wp_block_group__inner_container}`}>
          <div className={`${$s.wp_block_group} ${$s.alignwide}`}>
            <div className={`${$s.wp_block_group__inner_container}`}>
              <h3>
                <strong>{ item.title }</strong>
              </h3>

              <div className={`${$s.wp_block_media_text} ${$s.alignwide} ${$s.is_vertically_aligned_top}`}>
                <figure className={`${$s.wp_block_media_text__media}`}>
                  <img
                    src={item.img}
                    class="wp-image-420"
                    width="450"
                    height="300"
                  />
                </figure>
                <div className={$s.wp_block_media_text__content}>
                  <p dangerouslySetInnerHTML={{ __html: item.text }} className={$s.has_large_font_size}></p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={$s.pages}>
      <Nav />
      <main id={$s.site_content}>
        <section className={$s.headline}>
          <h1>INTERVIEW</h1>
          <p className={$s.txt}>采访</p>
        </section>

        <video controls src={Detail.videoUrl}></video>

        <article>
          <div className={`${$s.post_inner} ${$s.thin}`}>
            <div className={$s.entry_content}>
              <section className={`${$s.interviewees} ${$s.flex}`}>
                <h2>{ Detail.card.h3 }</h2>
                <div className={$s.flex}>
                  <div className={$s.left}>
                    <img
                      width="240"
                      height="240"
                      src={ Detail.card.icon }
                    />
                  </div>
                  <div className={$s.right}>
                    <div className={$s.interviewees}>
                      <p dangerouslySetInnerHTML={{ __html: Detail.card.h4 }}></p>
                    </div>
                    <div className={$s.description}>
                      <p>
                        { Detail.card.desc }
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {Detail.article.map((item, i) => <Article item={item} key={i} />)}

            </div>
          </div>
        </article>


        <div className={$s.pgNv}>
          <div className={$s.pgNvInr}>
            <div className={$s.dummy}>last</div>
            <div className={$s.list}>
              <img src={require('@/assets/images/icon_interview_index.png')} />
            </div>
            <div className={$s.nxt}>next</div>
          </div>
        </div>


      </main>
      <Footer />
    </div>
  );
};
