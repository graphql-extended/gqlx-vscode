import { IConnection } from 'vscode-languageserver';
import { State } from '../types';

export function initialize(connection: IConnection, state: State) {
  connection.onInitialize(_ev => {
    return {
      capabilities: {
        textDocumentSync: state.documents.syncKind,
        hoverProvider: true,
        definitionProvider: true,
        renameProvider: true,
        completionProvider: {
          resolveProvider: true,
        },
      },
    };
  });
}
