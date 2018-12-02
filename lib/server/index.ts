import * as handlers from './handlers';
import { IPCMessageReader, IPCMessageWriter, createConnection, IConnection } from 'vscode-languageserver';
import { state } from './state';

const reader = new IPCMessageReader(process);
const writer = new IPCMessageWriter(process);
const connection: IConnection = createConnection(reader, writer);
state.documents.listen(connection);

handlers.initialize(connection, state);
handlers.hover(connection, state);

connection.onRenameRequest(ev => {
  return undefined;
});

connection.onCompletionResolve(ev => {
  return ev;
});

connection.onDefinition(ev => {
  return undefined;
});

connection.listen();
