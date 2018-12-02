import { IConnection } from 'vscode-languageserver';
import { State } from '../types';

export function hover(connection: IConnection, state: State) {
  connection.onHover(ev => {
    const { textDocument, position } = ev;
    const document = state.documents.get(textDocument.uri);
    const start = {
      line: position.line,
      character: 0,
    };
    const end = {
      line: position.line + 1,
      character: 0,
    };

    if (document) {}

    return undefined;
  });
}
