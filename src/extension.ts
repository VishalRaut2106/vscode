import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext): void {
  // Register the hello world command
  const disposable = vscode.commands.registerCommand('toon.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from TOON!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate(): void {
  // Cleanup if needed
}
