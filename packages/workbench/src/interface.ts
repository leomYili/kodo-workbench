import { ComponentClass } from 'react';

export interface Widget {
  /**
   * widget的react class component,用于实际操作
   */
  component: ComponentClass;
  /**
   * widget的标题
   */
  title: string;
  /**
   * widget缩略图,方便快速查看效果
   */
  thumbnail: string;
}

export enum ApplicationLanguages {
  chinese = '中文',
  english = '英文',
}

export interface Application {
  /**
   * 应用唯一标识符,未避免重复,最好与文件夹名称一致即可
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
   * 上架时间
   */
  upTime?: string;
  /**
   * 开发者
   */
  developer?: string;
  /**
   * 应用预览图片合集,方便快速查看
   */
  previewImages?: string[];
  /**
   * 支持的语言
   */
  languages?: Array<
    ApplicationLanguages.chinese | ApplicationLanguages.english
  >;
  /**
   * 应用的widget小组件,其内部同样会声明一个模块,属于应用
   */
  widgets?: Widget[];
}
