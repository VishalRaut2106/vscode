import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext): void {
  // Basic hello command for initial setup
  const helloCommand = vscode.commands.registerCommand('toon.hello', () => {
    vscode.window.showInformationMessage('TOON extension activated! Ready for development.')
  })

  context.subscriptions.push(helloCommand)
}

export function deactivate(): void {
  // Cleanup if needed
}
