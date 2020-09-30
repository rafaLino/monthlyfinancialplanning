import { Transaction } from '../../entities/transaction.model';
import { Action } from '@ngrx/store';

export enum TransactionActionsTypes {
    GET = 'GET ALL TRANSACTIONS',
    NEW = 'ADD NEW TRANSACTION',
    UPDATE = 'UPDATE A TRANSACTION',
    REMOVE = 'REMOVE A TRANSACTION',
    LOADED = 'ALL TRANSACTION LOADED'
}

export class TransactionGet implements Action {
    readonly type: string = TransactionActionsTypes.GET;
}

export class TransactionLOADED implements Action {
    readonly type: string = TransactionActionsTypes.LOADED;
    constructor(public transactions?: Transaction[]) { }
}

export class TransactionNew implements Action {
    readonly type: string = TransactionActionsTypes.NEW;
    constructor(public payload: { transaction: Transaction }) { }
}

export class TransactionUpdate implements Action {
    readonly type: string = TransactionActionsTypes.UPDATE;
    constructor(public payload: { id: string, obj: Partial<Transaction> }) { }

}

export class TransactionRemove implements Action {
    readonly type: string = TransactionActionsTypes.REMOVE;
    constructor(public payload: { id: string }) { }

}


export type TransactionActions = TransactionGet | TransactionNew | TransactionUpdate | TransactionRemove;