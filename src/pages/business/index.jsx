import React from 'react';
import { Nav, Footer } from '@/components'
import $styles from './index.less'

export default () => {
  return (
    <div className={$styles.pages}>
      <Nav />
      <div className={`site-content ${$styles.section}`}>
        <div className={$styles.h2}>BUSINESS</div>
        <div className={$styles.desc}>ビジネス</div>
        
        <article>
          <h2>
            <span>京未来は、国内市場に眠っている商品を</span>
            <span>“BAKUGAI”に変貌させます。</span>
          </h2>
          <div className={$styles.img}>
            <video 
              playsInline muted preload="true" 
              src={require('@/assets/video/illust01.mp4')} 
              autoPlay className={$styles.played} />
          </div>
          <p>私たちは日本国内のビューティ&amp;ヘルスケア商品を中心にそのブランド育成を支援し、中国市場における爆買いを創出する“BAKUGAI”インキュベーターとして事業展開しています。私たちが扱うパートナー企業様の数々の商品は、中国人女性たちの心を捉え、爆発的ヒットに結びついている例があとを絶ちません。新たな市場として世界最大級のマーケットである中国を検討している企業様は、中国事業戦略・マーケティング戦略の構築から、価格体系設計・広告・セールスプロモーション・販売などの実務まで実行する京未来にご期待ください。私たちは、国内ビューティ&amp;ヘルスケア商品の成長可能性を最大化する“BAKUGAI”インキュベーターです。</p>

          <div className={$styles.sec}>
            <h2>
              <span>数字が物語る</span>
              <span>“BAKUGAI”インキュベーターとしての</span>
              <span>圧倒的な実績。</span>
            </h2>
            <div className={$styles.img}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust02.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <div className={$styles.img}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust03.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <div className={`${$styles.img} ${$styles.illust_new1}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust_new1.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <div className={$styles.img}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust04.mp4')} 
                autoPlay className={$styles.played} />
            </div>

            <p>中国最大手ECサイト酵素カテゴリNO.1獲得のドッカンアブラダス、洗い流しパックカテゴリNO.1獲得の酒粕パック、足スプレーカテゴリNO.1獲得のFOOT PEELING SPRAYをはじめ、私たちが取り扱う商品は、中国市場においてカテゴリごとのヒット商品として成長しています。そこには、私たちならではの緻密な戦略があります。</p>
          </div>

          <div className={$styles.sec}>
            <h2>
              <span>ターゲットを絞り、商品を絞り、</span>
              <span>販売チャネルを絞り、プロモーションを絞る。</span>
              <span>独自の集中戦略が、“BAKUGAI”を生み出します。</span>
            </h2>
            <div className={`${$styles.img} ${$styles.img5}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust05.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <h3>ターゲットの集中</h3>
            <div className={`${$styles.img} ${$styles.img6}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust06.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <p className={$styles.sec3_p}>私たちはターゲットユーザーをビューティ＆ヘルスケアに関心の高い18歳～35歳の若年層の中国人女性に絞り、彼女たちの日常に不可欠なニーズを徹底的に調査し、彼女たちが必ず満足いくような商品・サービスを提供することに常に心がけています。</p>

            <div className={`${$styles.img} ${$styles.img7}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust07.mp4')} 
                autoPlay className={$styles.played} />
            </div>
            <p className={$styles.sec3_p}>ターゲットとなる中国人女性のインサイトを掴むためには、現地でのライフスタイルや流行を肌感覚で常に感じ取ることが重要です。そのために力となるのが社員の半数を占める中国人スタッフたちです。ターゲット層と同年代の社員たちは、それぞれのネットワークにより敏感にマーケットの変化を感じ取ります。私たちは強みを生かしたターゲティングでカスタマーの心を掴みます。</p>
          </div>

          <div className={`${$styles.concentration} ${$styles.con2}`}>
            <h3>商品の集中</h3>
            <div className={`${$styles.img} ${$styles.img8}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust08.mp4')} 
                autoPlay className={$styles.played} />
            </div>

            <p className={$styles.sec3_p}>私たちは“BAKUGAI”に成長する可能性を秘めた商品を慎重に見極めています。ターゲットとなる若年層中国人女性の気持ちを惹き付ける商品をセレクトするためには、その商品が科学的な根拠を持っていること、アピールポイントが明確なデザインであること、そして使用後にすぐに効果を実感できる体感性の高い商品であることが必須です。私たちはテクノロジー・デザイン性・体感性という三つの角度から厳選した商品のみに投資し、商品ブランドを育成しています。</p>

            <div className={`${$styles.img} ${$styles.img9}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust09.mp4')} 
                autoPlay className={$styles.played} />
            </div>

            <p className={$styles.sec3_p}>“BAKUGAI”インキュベーターを志向し続ける私たちは、すでに知名度も売り上げ規模も高いブランドを取り扱うのではなく、対象を知名度・売上げともにこれからの可能性を秘めたブランドに絞り、その商品を育て、大ヒットブランドにしていくことを得意としています。</p>

          </div>

          <div className={`${$styles.concentration} ${$styles.con3}`}>
            <h3>販売チャネルの集中</h3>
            <div className={`${$styles.img} ${$styles.img10}`}>
              <video 
                playsInline muted preload="true" 
                src={require('@/assets/video/illust10.mp4')} 
                autoPlay className={$styles.played} />
            </div>

            <p className={$styles.sec3_p}>中国には越境EC販売会社だけで2万社あり、オフラインのコスメストアは20万店舗もあると言われています。私たちはその中から、最も影響力の高い販売チャネルに集中的に商品供給を行い、投資効率を最大化しています。販売チャネルを絞り込むことで、それぞれのチャネルにおけるブランディングを丁寧にメンテナンスし、着実に成長軌道に乗せることが可能になります。</p>

          </div>

          <div className={`${$styles.concentration} ${$styles.con4}`}>
            <h3>プロモーションの集中</h3>
            <p className={$styles.sec3_p}>私たちは最も効果が高まるプロモーションにのみ集中的に広告資源を投下することで、売れるブランドを創り上げていきます。</p>

            <div className={$styles.flx}>
              <div className={$styles.right}>
                  <h4>売上に繋がる広告に集中的に投資します</h4>
                  <p>まだヒット商品とは呼べない商品をプロモーションしていくためには、限られた広告予算の中でいかに初期のユーザーを獲得するかが重要になります。私たちは抽象的なイメージ戦略ではなく、ダイレクトに販売に繋がるセールスプロモーションを実施していきます。</p>
              </div>
              <div className={`${$styles.img} ${$styles.left}`}>
                <video 
                  playsInline muted preload="true" 
                  src={require('@/assets/video/illust11.mp4')} 
                  autoPlay className={$styles.played} />
              </div>
            </div>
            <div className={$styles.flx}>
              <div className={$styles.right}>
                  <h4>ブランドの訴求ポイントを絞り込みます</h4>
                  <p>多くの機能を揃えている商品であっても、プロモーションにおいてはターゲットユーザーに対して最も訴求効果の高いメリットを絞り込み、徹底的にそこにフォーカスした打ち出しをすることが重要です。明確な訴求ポイントがソーシャルでの波及を生み出します。</p>
              </div>
              <div className={`${$styles.img} ${$styles.left}`}>
                <video 
                  playsInline muted preload="true" 
                  src={require('@/assets/video/illust12.mp4')} 
                  autoPlay className={$styles.played} />
              </div>
            </div>
            <div className={$styles.flx}>
              <div className={$styles.right}>
                  <h4>確実にリーチする宣伝チャネルに集中します</h4>
                  <p>情報をターゲットユーザーにリーチさせるためには、ターゲットが利用しているチャネルを厳格に見極めなければなりません。私たちは実際にユーザーが接している宣伝チャネル・KOL・タレントのみを厳選し、無駄な広告投資を徹底的に排除します。</p>
              </div>
              <div className={`${$styles.img} ${$styles.left}`}>
                <video 
                  playsInline muted preload="true" 
                  src={require('@/assets/video/illust13.mp4')} 
                  autoPlay className={$styles.played} />
              </div>
            </div>

          </div>



        </article>
      </div>
      <Footer />
    </div>
  )
};
