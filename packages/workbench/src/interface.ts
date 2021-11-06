import { ComponentClass, FunctionComponent } from 'react';

export interface Widget {
  /**
   * widget唯一标识符,使用tool的id+widget对应文件夹名称为标识
   */
  id:string;
  /**
   * widget的react class component,用于实际操作
   */
  entry: ComponentClass | FunctionComponent;
  /**
   * widget的标题
   */
  title: string;
  /**
   * widget缩略图,方便快速查看效果
   */
  thumbnail: string;
}

export enum LanguageTypes {
  chinese = '中文',
  english = '英文',
}

export interface Application {
  /**
   * 应用唯一标识符,未避免重复,最好与文件夹名称一致即可,如果没有在tool.json中描述,则自动抓取文件夹名称
   */
  id: string;
  /**
   * 应用的标题
   */
  title: string;
  /**
   * 应用的相关描述
   */
  description?: string;
  /**
   * 应用入口文件,是整个应用的view入口,自动查找目录下entry名称的文件
   */
  entry: ComponentClass | FunctionComponent;
  /**
   * 开发者
   */
  developer?: string;
  /**
   * 应用预览图片合集,方便快速查看,自动查找
   */
  previewImages?: string[];
  /**
   * 支持的语言
   */
  languages?: Array<LanguageTypes.chinese | LanguageTypes.english>;
  /**
   * 应用的widget小组件,其内部同样会声明一个模块,属于应用,自动获取生成
   */
  widgets?: Widget[];
}
