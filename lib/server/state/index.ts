import { TextDocuments } from 'vscode-languageserver';
import { State } from '../types';

export const state: State = {
  documents: new TextDocuments(),
};
