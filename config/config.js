import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  ssr: {
    devServerRender: false,
  },
  exportStatic: {},
  routes: routes,
  chainWebpack(config) {

    config.module
      .rule('mp4')
      .test(/.mp4$|.otf$/)
      .use('file-loader')
      .options({
        esModule: false
      })
      .loader('file-loader');

    // config.module
    //   .rule('otf')
    //   .test(/.otf$/)
    //   .use('file-loader')
    //   .loader('file-loader');

  },
});