import React from 'react';
import { Nav, Footer } from '@/components';
import $styles from './index.less';

export default () => {
  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={`site-content ${$styles.section}`}>
        <div className={$styles.h2}>PHILOSOPHY</div>
        <div className={$styles.desc}>思想</div>

        <article>
          <div className={`${$styles.sec0} ${$styles.sec}`}>
            <h2>経営理念</h2>
            <p>今日の想いを、未来のカタチへ</p>
            <h2>ミッション</h2>
            <p>
              人々の健康でありたい、美しくなりたいという想いを実現させ、
              <span>自分自身をもっと「好き」になることに寄与する。</span>
            </p>
            <div className={$styles.subsec}>
              <h2>価値観</h2>
              <div className={$styles.dfl}>
                <h3>1.うそをつかない</h3>
                <p>
                  <span>
                    他者に対してはもちろん、自分自身にも嘘をつかない。
                  </span>
                  <span>素直であること、正直であることが</span>
                  <span>自分の本来の力を引き出し、信頼を生む一歩になる。</span>
                </p>
              </div>
              <div className={$styles.dfl}>
                <h3>2.やりきる</h3>
                <p>
                  <span>一つのことを始めたら最後までやりきる。</span>
                  <span>
                    やっている中でぶつかる壁に挑むことが工夫を生み、成長をもたらす。
                  </span>
                  <span>やりきった経験が自信を生み、次の機会を創り出す。</span>
                </p>
              </div>
              <div className={$styles.dfl}>
                <h3>3.力を掛け合わせる</h3>
                <p>
                  <span>一人で出来ることには限界がある。</span>
                  <span>
                    自立した仲間同士がお互いを認め、力を掛け合わせ、支え合い、
                  </span>
                  <span>助け合うことで価値は最大化される。</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${$styles.sec1} ${$styles.sec}`}>
            <picture>
              <source
                media="(min-width: 768px)"
                srcset={require('@/assets/images/message.jpeg')}
              />
              <source
                media="(max-width: 767px)"
                srcset={require('@/assets/images/message_sp.jpeg')}
              />
              <img
                src={require('@/assets/images/message.jpeg')}
                alt="私たちは、新しい価値の提供に挑戦し続けます。"
              />
            </picture>
            <p>
              <span>
                KYOMIRAIは、今日の取引を明るい未来にするという挑戦の精神で、
              </span>
              <span>
                パートナーとなる企業の皆様の業績向上に携わってきました。
              </span>
              <span>私たちの思いの根底にあるのは、中国の女性たちに</span>
              <span>もっと美しくなれる、もっと健康になれる、</span>
              <span>日本の優れた商品を届け続けたいという思いです。</span>
              <span>
                中国には日本の高品質なビューティ＆ヘルスケア商品を利用し
              </span>
              <span>
                毎日の生活を豊かな笑顔が溢れるものへと変えていこうとする
              </span>
              <span>女性たちが大勢待っています。</span>
              <span>
                そんな中国人女性たちに、本当に効果のある優れた商品を届け続けたい。
              </span>
              <span>同時にそれは、世界中に優れた商品を届けたいと考える</span>
              <span>国内企業の方々の願いを実現することでもあります。</span>
              <span>そんなパートナー企業の皆様と</span>
              <span>中国人女性たちとの懸け橋となるために。</span>
              <span>私たちは、新しい価値の提供に挑戦し続けます。</span>
            </p>
          </div>
          <p id={$styles.rep}>
            京未来株式会社／CEO
            <img
              src={require('@/assets/images/img_philosophy_ag.png')}
              width="153"
              height="34"
              alt="七山 寛至"
            />
          </p>
        </article>
      </div>
      <Footer />
    </div>
  );
};
