export default [
  { 
    path: '/', 
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        title: 'hello world',
      }
    ]
  },
]