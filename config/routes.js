export default [
  { 
    path: '/', 
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/pc/home',
        title: 'hello world',
      },
      {
        path: '/shop',
        component: '@/pages/pc/shop',
        title: 'hello world',
      },
    ]
  },
]