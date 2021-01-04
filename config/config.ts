export default {
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/login', exact: true, component: '@pages/login/index' },
    { path: '/dashboard', exact: true, component: '@pages/dashboard/index' },
    { path: '/user', exact: true, component: '@pages/user/index' }
  ]
}