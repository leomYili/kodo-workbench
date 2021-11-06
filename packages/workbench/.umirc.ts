import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@blacklake-kodo/plugin-rematch', '@blacklake-kodo/plugin-lodash'],
  devServer: {
    port: 9527,
  },
  dynamicImport: {
    loading: '@/Loading',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'memory',
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  sass: {},
  routes: [{ exact: true, path: '/', component: 'index' }],
  rematch: {
    immer: true,
  },
});
