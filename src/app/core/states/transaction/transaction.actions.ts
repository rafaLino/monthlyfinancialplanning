import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../entities/transaction.model';

export enum TransactionActionTypes {
    GET = '[TRANSACTION] GET TRANSACTIONS',
    CREATE = '[TRANSACTION] ADD A TRANSACTION',
    UPDATE = '[TRANSACTION] UPDATE A TRANSACTION',
    REMOVE = '[TRANSACTION] REMOVE A TRANSACTION',
    SUCCESS = '[TRANSACTION] OPERATION SUCCESSFULL',
    FAIL = '[TRANSACTION] OPERATION FAILED',
    RESET = '[TRANSACTION] RESET TRANSACTIONS',
}
class transactionActions {
    GET = createAction(TransactionActionTypes.GET);

    CREATE = createAction(TransactionActionTypes.CREATE,
        props<{ transaction: Transaction }>());

    UPDATE = createAction(TransactionActionTypes.UPDATE,
        props<{ id: string, obj: Partial<Transaction> }>());

    REMOVE = createAction(TransactionActionTypes.REMOVE,
        props<{ id: string }>());

    SUCCESS = createAction(TransactionActionTypes.SUCCESS,
        props<{ transaction?: Transaction | Array<Transaction> }>());

    FAIL = createAction(TransactionActionTypes.FAIL,
        props<{ error: Error | any }>());

    RESET = createAction(TransactionActionTypes.RESET);
}

export const TransactionActions = new transactionActions();