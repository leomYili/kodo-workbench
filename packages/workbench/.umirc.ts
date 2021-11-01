import { defineConfig } from 'umi';

export default defineConfig({
  devServer: {
    port: 9527,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'memory',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  sass: {},
});
