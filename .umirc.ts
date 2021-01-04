import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  /**
   * 快速刷新
   */
  fastRefresh: {},
  ssr: {},
});
