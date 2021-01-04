import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  /**
   * 快速刷新
   */
  fastRefresh: {},
  // 开启dva
  dva: {
    immer: true, // 是否启用 immer 以方便修改 reducer
    hmr: false, // 启用 dva model 的热更新
  },
});
