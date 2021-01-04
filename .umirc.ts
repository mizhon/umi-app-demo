import { defineConfig } from 'umi'
import path from 'path'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  /** 
   * 此处添加 routes 类似在config/config.ts中添加routes，只是这里的优先级更高。
   * 如果配置了 routes，则优先使用配置式路由，且约定式路由会不生效。
   */
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   {
  //     path: '/dashboard',
  //     component: '@/pages/dashboard/index',
  //   },
  // ],
  alias: {
    '@': path.resolve(__dirname, './src'),
    '@pages': path.resolve(__dirname, './src/pages'),
    '@utils': path.resolve(__dirname, './src/utils'),

  },
  /**
   * 快速刷新
   */
  fastRefresh: {},
  /** 
   * 是否开启 hash 文件后缀，通常用于增量发布和避免浏览器加载缓存，默认为false
   */ 
  hash: false,
  /**
   * 配置 webpack-dev-server 的 proxy 属性
   */
  proxy: {
    // "/api": {
    //   "target": "http://jsonplaceholder.typicode.com/",
    //   "changeOrigin": true,
    //   "pathRewrite": { "^/api" : "" }
    // }
  },
  /**
   * 配置主题，实际上是配 less 变量。
   */
  theme: {

  }
});
