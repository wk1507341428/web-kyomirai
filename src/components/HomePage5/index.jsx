import React from 'react';
import $styles from './index.less'
import { PageContent, ContactUs } from '../index'
import classNames from 'classnames';

export default () => {
  return (
    <PageContent>
      <div className={$styles.content}>
        <div className={$styles.container}>
          <div className={$styles.header}>
            <div className={$styles.contain}>
              <div className={$styles.h2_box}>
                <div className={$styles.h2}>常见问题</div>
                <div className={$styles.desc}>帮助您更好了解彩虹悦付</div>
              </div>

              <div className={$styles.QA}>
                <div className={classNames({
                  [$styles.QA_item]: true,
                  [$styles.current]: true
                })}>
                  <div className={$styles.Q}>彩虹悦付和分期付款的区别在哪里？</div>
                  <div className={$styles.S}>目前常见的分期付款是要收取分期手续费的，而且期数是可选的。而通过彩虹悦付分期付款，您无需支付任何手续费，且固定可分10期。</div>
                </div>
                <div className={$styles.QA_item}>
                  <div className={$styles.Q}>我在哪里可以使用彩虹悦付购物？</div>
                  <div className={$styles.S}>目前常见的分期付款是要收取分期手续费的，而且期数是可选的。而通过彩虹悦付分期付款，您无需支付任何手续费，且固定可分10期。</div>
                </div>
                <div className={$styles.QA_item}>
                  <div className={$styles.Q}>彩虹悦付账单如何还款？</div>
                  <div className={$styles.S}>目前常见的分期付款是要收取分期手续费的，而且期数是可选的。而通过彩虹悦付分期付款，您无需支付任何手续费，且固定可分10期。</div>
                </div>
                <div className={$styles.QA_item}>
                  <div className={$styles.Q}>使用彩虹悦付免息分期购物有其他费用吗？</div>
                  <div className={$styles.S}>目前常见的分期付款是要收取分期手续费的，而且期数是可选的。而通过彩虹悦付分期付款，您无需支付任何手续费，且固定可分10期。</div>
                </div>
              </div>
            </div>


          </div>
          <div className={$styles.footer}>
            <div className={$styles.foot_c}>
              <ContactUs></ContactUs>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  )
};
