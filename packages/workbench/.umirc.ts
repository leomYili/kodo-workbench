import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'memory',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  sass: {},
});
