import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
  routes: routes,
  // extraPostCSSPlugins: [
  //   require('postcss-plugin-px2rem')({
  //     rootValue: 750,
  //     exclude: '/node_modules/',
  //   }),
  // ]
});