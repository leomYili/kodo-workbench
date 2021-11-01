import { Application, ApplicationLanguages } from '@/interface';

/**
 * 动态加载所有应用模块,并进行分析,收集入口以及应用各项信息
 * @returns
 */
export async function getInitialState() {
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: '',
          title: '',
          description: '',
          upTime: '',
          developer: '',
          languages: [ApplicationLanguages.chinese],
        },
      ]);
    });
  });

  return data;
}
