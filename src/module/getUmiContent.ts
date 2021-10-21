import * as vscode from "vscode";
import * as path from "path";

/**
 * 获取基于 umijs 的 webview 内容
 * @param context 扩展上下文
 * @param webviewPanel webview 面板对象
 * @param rootPath webview 所在路径，默认 web
 * @param umiVersion umi 版本
 * @returns string
 */
export const getUmiContent = (
  context: vscode.ExtensionContext,
  webviewPanel: vscode.WebviewPanel,
  umiVersion?: string,
  rootPath = "packages"
) => {
  // 获取磁盘上的资源路径
  const getDiskPath = (fileName: string) => {
    return webviewPanel.webview.asWebviewUri(
      vscode.Uri.file(
        path.join(context.extensionPath, rootPath, "workbench/dist", fileName)
      )
    );
  };
  return `
    <html>
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
        />
        <link rel="stylesheet" href="${getDiskPath("umi.css")}" />
        <style>
          html, body, #root {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            overflow: hidden;
          }
          body.vscode-light {
            h1, h2, h3, h4, h5, h6 {
              color: black;
            }
            color: black;
            background-color: var(--vscode-editor-background);
          }
          
          body.vscode-dark {
            h1, h2, h3, h4, h5, h6 {
              color: white;
            }
            color: white;
            background-color: var(--vscode-editor-background);
          }
          
          body.vscode-high-contrast {
            h1, h2, h3, h4, h5, h6 {
              color: red;
            }
            color: red;
            background-color: var(--vscode-editor-background);
          }
        </style>
        <script>
          //! umi version: ${umiVersion}
          window.routerBase = "/";
        </script>
      </head>
      <body>
        <div id="root"></div>
        <script>
          console.log("调用成功");
        </script>
        <script src="${getDiskPath("umi.js")}"></script>
      </body>
    </html>
  `;
};
