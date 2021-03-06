import { Document } from './Document';
import { TextDocumentItem } from './interfaces';

export interface Host {
    on(evt: 'documentOpen|pre', listener: (document: Document) => void): this;
    on(evt: 'documentOpen', listener: (document: Document) => void): this;
    on(evt: 'documentOpen|post', listener: (document: Document) => void): this;

    on(evt: 'documentUpdate|pre', listener: (document: Document) => void): this;
    on(evt: 'documentUpdate', listener: (document: Document) => void): this;
    on(evt: 'documentUpdate|post', listener: (document: Document) => void): this;

    on(evt: 'documentChange|pre', listener: (document: Document) => void): this;
    on(evt: 'documentChange', listener: (document: Document) => void): this;
    on(evt: 'documentChange|post', listener: (document: Document) => void): this;

    on(name: string, listener: (...args: any[]) => void): void;

    openDocument(textDocument: TextDocumentItem): Document;
    lockDocument(uri: string): void;
    getConfig<T>(key: string): T;
}

export interface OnRegister {
    onRegister(host: Host): void;
}

export namespace OnRegister {
    export function is(plugin: any): plugin is OnRegister {
        return typeof plugin.onRegister === 'function';
    }
}
