import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient';

export function activate(context: ExtensionContext) {
  const serverModule = context.asAbsolutePath(path.join('bin/server', 'index.js'));
  const serverOptions: ServerOptions = {
    run: {
      module: serverModule,
      transport: TransportKind.ipc,
    },
    debug: {
      module: serverModule,
      transport: TransportKind.ipc,
      options: {
        execArgv: ['--nolazy', '--debug=6009', '--inspect=localhost:6009'],
      },
    },
  };
  const clientOptions: LanguageClientOptions = {
    documentSelector: [{ scheme: 'file', language: 'gqlx' }],
    synchronize: {
      fileEvents: workspace.createFileSystemWatcher('**/*.gqlx'),
    },
    outputChannelName: 'gqlx language server',
  };

  const client = new LanguageClient('gqlx', 'GraphQL eXtended Language Server', serverOptions, clientOptions, true);
  const disposable = client.start();
  context.subscriptions.push(disposable);
}
