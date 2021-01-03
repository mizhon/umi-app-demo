import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   {
  //     path: '/dashboard',
  //     component: '@/pages/dashboard/index',
  //   },
  // ],
  
   /**
   * 快速刷新
   */
  fastRefresh: {}
});
