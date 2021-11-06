import { Application } from '@/interface';
import { importAll } from '@/utils/importAll';

/**
 * 动态加载所有应用模块,并进行分析,收集入口以及应用各项信息
 * @returns
 */
export async function getInitialState() {
  const tools = await importAll();
  
  console.log(tools);

  return { tools: tools };
}
