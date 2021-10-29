import * as vscode from "vscode";
import { EXTENSION_SETTING_START_UP } from "@/constants";
import { getWebViewContent, messageHandler } from "@/utils/webview";
import { showError } from "@/utils/path";

import { getUmiContent } from "./utils/getUmiContent";

const welcome = (context: vscode.ExtensionContext) => {
  let currentPanel: vscode.WebviewPanel | undefined = undefined;

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "command.kodoWorkbench.showWelcome",
      function (uri) {
        /* panel.webview.html = getWebViewContent(
          context,
          "packages/workbench/dist/index.html"
        ); */
        // 获取当前活动的编辑器
        const columnToShowIn = vscode.window.activeTextEditor
          ? vscode.window.activeTextEditor.viewColumn
          : undefined;

        if (currentPanel) {
          // 如果我们已经有了一个面板，那就把它显示到目标列布局中
          currentPanel.reveal(columnToShowIn);
        } else {
          // 不然，创建一个新面板
          currentPanel = vscode.window.createWebviewPanel(
            "kodoWelcome",
            "kodo 工作台",
            vscode.ViewColumn.One,
            {
              enableScripts: true,
            }
          );
          // 当前面板被关闭后重置
          currentPanel.onDidDispose(
            () => {
              currentPanel = undefined;
            },
            null,
            context.subscriptions
          );
        }

        currentPanel.webview.html = getUmiContent(
          context,
          currentPanel,
          `3.5.20`
        );

        currentPanel.onDidChangeViewState((e) => {
          console.log(e.webviewPanel);
        });

        currentPanel.webview.onDidReceiveMessage(
          (message) => {
            if (messageHandler[message.cmd]) {
              messageHandler[message.cmd](global, message);
            } else {
              showError(`未找到名为 ${message.cmd} 回调方法!`);
            }
          },
          undefined,
          context.subscriptions
        );
      }
    )
  );

  if (vscode.workspace.getConfiguration().get(EXTENSION_SETTING_START_UP)) {
    vscode.commands.executeCommand("command.kodoWorkbench.showWelcome");
  }
};

export default welcome;
