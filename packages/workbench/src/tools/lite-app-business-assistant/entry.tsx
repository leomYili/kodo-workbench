import React from 'react';

class App extends React.Component<any, any> {
  private constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        业务助手,用于快捷处理工作中的各项任务,包括预览自己的任务,统计自己一共做了多少需求,解决了多少个bug;同时,各种快捷操作,比如重置前端环境,初始化,切功能开发分支,一键提交自动合并等等小功能
      </div>
    );
  }
}

/* App.applicationConfig = {
  id: 'lite-app-business-assistant',
  title: '业务助手(私)',
  description:
    '作者在研发工作过程中进行归纳总结，编写的工具合集，包括了git分支管理，项目的构建以及初始化等，该应用是为了让作者的日常研发工作更加流畅而研发的，如果无法访问，请不要担心，只是没有权限罢了；该应用也是一个例子，欢迎大家可以开发自己的工具，进行分享',
  developer: 'leomyili',
  previewImages: [],
  languages: [LanguageTypes.chinese],
  widgets: [],
}; */

export default App;
