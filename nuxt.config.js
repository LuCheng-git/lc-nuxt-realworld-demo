module.exports = {
  router: {
    linkActiveClass: 'active',
    // 自定义路由表规则
    extendRoutes(routes, resolve) {
      // 就是个数组
      // console.log(routes)
      // 清除nuxtjs基于pages目录默认生成的路由表
      routes.splice(0)
      routes.push(...[
        {
          path: '/index',
          redirect: '/',
        },
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'), 
          children: [
            {
              path: '', // 默认子路由
              name: 'home',
              component: resolve(__dirname, 'pages/home/'), 
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/register',
              name: 'register',
              component: resolve(__dirname, 'pages/login/'),
            },
            {
              path: '/profile/:username',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/'),
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/'),
            },
            {
              path: '/editor',
              name: 'editor',
              component: resolve(__dirname, 'pages/editor/'),
            },
            {
              path: '/article/:slug',
              name: 'article',
              component: resolve(__dirname, 'pages/article/'),
            },
          ]
        }
      ])
    }
  },
  
  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  // 注册插件
  plugins: [
    '~/plugins/request.js',
    '~/plugins/dayjs.js',
  ]
}