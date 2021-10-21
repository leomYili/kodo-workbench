import * as vscode from "vscode";
import * as fs from "fs";
import * as path from "path";

import { getExtensionFileAbsolutePath, showError, showInfo } from "./path";

/**
 * 从某个HTML文件读取能被Webview加载的HTML内容
 * @param {*} context 上下文
 * @param {*} templatePath 相对于插件根目录的html文件相对路径
 */
export function getWebViewContent(
  context: vscode.ExtensionContext,
  templatePath: string
) {
  const resourcePath = getExtensionFileAbsolutePath(context, templatePath);
  const dirPath = path.dirname(resourcePath);
  let html = fs.readFileSync(resourcePath, "utf-8");
  // vscode不支持直接加载本地资源，需要替换成其专有路径格式，这里只是简单的将样式和JS的路径替换
  html = html.replace(
    /(<link.+?href="|<script.+?src="|<img.+?src=")(.+?)"/g,
    (m, $1, $2) => {
      return (
        $1 +
        vscode.Uri.file(path.resolve(dirPath, $2))
          .with({ scheme: "vscode-resource" })
          .toString() +
        '"'
      );
    }
  );
  return html;
}

/**
 * 执行回调函数
 * @param {*} panel
 * @param {*} message
 * @param {*} resp
 */
export function invokeCallback(
  panel: vscode.WebviewPanel,
  message: any,
  resp: any
) {
  console.log("回调消息：", resp);
  // 错误码在400-600之间的，默认弹出错误提示
  if (
    typeof resp == "object" &&
    resp.code &&
    resp.code >= 400 &&
    resp.code < 600
  ) {
    showError(resp.message || "发生未知错误！");
  }
  panel.webview.postMessage({
    cmd: "vscodeCallback",
    cbid: message.cbid,
    data: resp,
  });
}

/**
 * 存放所有消息回调函数，根据 message.cmd 来决定调用哪个方法
 */
export const messageHandler: any = {
  getConfig(global: any, message: any) {
    const result = vscode.workspace.getConfiguration().get(message.key);
    invokeCallback(global.panel, message, result);
  },
  setConfig(global: any, message: any) {
    // 写入配置文件，注意，默认写入工作区配置，而不是用户配置，最后一个true表示写入全局用户配置
    vscode.workspace
      .getConfiguration()
      .update(message.key, message.value, true);
    showInfo("修改配置成功！");
  },
};
