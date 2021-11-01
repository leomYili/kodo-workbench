import React from 'react';
import { Application, ApplicationLanguages } from '@/interface';

class App extends React.Component<any, any> {
  static applicationConfig: Application;

  private constructor(props: any) {
    super(props);
  }
}

App.applicationConfig = {
  id: 'lite-app-business-assistant',
  title: '业务助手(私)',
  description:
    '作者在研发工作过程中进行归纳总结，编写的工具合集，包括了git分支管理，项目的构建以及初始化等，该应用是为了让作者的日常研发工作更加流畅而研发的，如果无法访问，请不要担心，只是没有权限罢了；该应用也是一个例子，欢迎大家可以开发自己的工具，进行分享',
  upTime: '',
  developer: 'leomyili',
  previewImages: [],
  languages: [ApplicationLanguages.chinese],
  widgets: [],
};

export default App;
