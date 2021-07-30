import Http from './http'
import NProgress from 'nprogress';

const http = new Http({

  defaultLoading: {
    show() {
      NProgress.start();
    },
    hide() {
      NProgress.done();
    },
  },

  
})

// MOCK 数据
export function GetUsers () {
  return http.post('/api/users/create').with_loading().exec()
}