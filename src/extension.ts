import * as vscode from "vscode";

import welcomeRegister from "@/module/welcome";

export function activate(context: vscode.ExtensionContext) {
  console.log("恭喜,你的扩展 Kodo Workbench 已被激活");

  // 注册首页
  welcomeRegister(context);
}

// this method is called when your extension is deactivated
export function deactivate() {
  console.log("你的扩展 Kodo Workbench 已被关闭");
}
