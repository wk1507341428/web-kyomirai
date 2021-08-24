export default [
  { 
    path: '/', 
    component: '@/layouts/BasicLayout',
    routes: [
      {
        path: '/',
        component: '@/pages/home',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/staff',
        component: '@/pages/staff',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/staffDetail',
        component: '@/pages/staff/detail',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/business',
        component: '@/pages/business',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/philosophy',
        component: '@/pages/philosophy',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/company',
        component: '@/pages/company',
        title: 'KYOMIRAI | 京未来株式会社',
      },
      {
        path: '/interview',
        component: '@/pages/interview',
        title: 'KYOMIRAI | 京未来株式会社',
      },
    ]
  },
]