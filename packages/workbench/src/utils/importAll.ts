import { Application } from '@/interface';
import _ from 'lodash';
import { dynamic } from 'umi';
import invariant from 'invariant';

/**
 * 收集所有命名为entry的文件,并进行分析,从而得到所有应用
 * @param r
 * @returns
 */
export function importAll() {
  let cache: Application[] = [];

  // 获取所有的入口文件
  let entryArr = require.context('../tools/', true, /\entry(\.js|\.tsx|\.ts)$/);

  // 根据入口文件确认是否合法,当不合法时,提示格式错误即可
  entryArr.keys().forEach((key: string) => {
    /* cache[key] = dynamic({
      loader: async function () {
        const { default: application } = await import(`${key}`);
        return application;
      },
    }); */

    console.log(key);
  });

  return cache;
}
