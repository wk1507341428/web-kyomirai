import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { 
      path: '/', 
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/index',
          title: '浦江车友会黄金卡',
        },
      ]
    },
  ],
  fastRefresh: {},
});
