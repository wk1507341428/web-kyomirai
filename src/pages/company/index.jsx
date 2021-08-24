import React from 'react';
import { Nav, Footer } from '@/components';
import $styles from './index.less';

export default () => {
  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={`site-content ${$styles.section}`}>
        <div className={$styles.h2}>COMPANY</div>
        <div className={$styles.desc}>会社案内</div>
        <p id={$styles.cid}>
          <video
            playsInline
            muted
            preload="true"
            src={require('@/assets/video/company-logo.mp4')}
            autoPlay
            className={$styles.played}
          />
        </p>

        <div className={$styles.sec1}>
          <p>KYOMIRAI（京未来株式会社）の名前には、</p>
          <ul>
            <li>創業メンバーが出会った「京都」。</li>
            <li>大きな（京）未来を描きたいという想い。</li>
            <li>
              「未来」を切り開くためには、「今日（きょう）」この瞬間に全力で向き合い続けるという信念。
            </li>
          </ul>
          <p>以上の3つの由来が含まれています。</p>
          <p className={$styles.end}>
            また、ロゴマークには「人と人」「企業と企業」「日本と世界」「今日と未来」など、KYOMIRAIがあらゆるモノ・コトを繋ぐ「架け橋」になるという信念と情熱を「レッドアーチ」で表現しています。そして、技術の進歩が急激に発展する時代の中でも、決して機械的にならず仕事の中心にはいつも「人」がいるという事を忘れないよう、アーチの袂（たもと）には「i（人）とi（人）」が描かれています。
          </p>
        </div>

        <div className={$styles.sec2}>
          <h2>会社概要</h2>
          <dl>
            <dt>会社名</dt>
            <dd>京未来株式会社（Kyomirai Co., Ltd.）</dd>
            <dt>本社所在地</dt>
            <dd>
              〒105-6322 <br />
              東京都港区虎ノ門1丁目23番1号 虎ノ門ヒルズ森タワー22F
            </dd>
            <dt>TEL</dt>
            <dd>03-6268-8149</dd>
            <dt>FAX</dt>
            <dd>03-6268-8148</dd>
            <dt>代表者</dt>
            <dd>七山寛至</dd>
            <dt>設立</dt>
            <dd>2011年9月2日</dd>
            <dt>資本金</dt>
            <dd>1,000万円</dd>
            <dt>事業内容</dt>
            <dd className={$styles.ld}>
              ビューティ＆ヘルスケア商品のブランド育成支援・中国を中心とした海外マーケティング・販売事業
            </dd>
            <dt>アクセス</dt>
            <dd>
              <ul>
                <li>東京メトロ日比谷線「虎ノ門ヒルズ駅」直結</li>
                <li>東京メトロ銀座線「虎ノ門駅」1番出口より徒歩4分</li>
                <li>都営三田線「内幸町駅」A3出口より徒歩9分</li>
                <li>都営三田線「御成門駅」A5出口より徒歩11分</li>
                <li>JR山手線「新橋駅」烏森口より徒歩12分</li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <Footer />
    </div>
  );
};
