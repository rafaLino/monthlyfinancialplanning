import { createAction, props } from '@ngrx/store';
import { Transaction } from '../../entities/transaction.model';

class transactionActions {
    GET = createAction('[TRANSACTION] GET TRANSACTIONS');

    ADD = createAction('[TRANSACTION] ADD A TRANSACTION',
        props<{ transaction: Transaction }>());

    UPDATE = createAction('[TRANSACTION] UPDATE A TRANSACTION',
        props<{ id: string, obj: Partial<Transaction> }>());

    REMOVE = createAction('[TRANSACTION] REMOVE A TRANSACTION',
        props<{ id: string }>());

    SUCCESS = createAction('[TRANSACTION] OPERATION SUCCESSFULL',
        props<{ transaction?: Transaction | Array<Transaction> }>());

    FAIL = createAction('[TRANSACTION] OPERATION FAILED',
        props<{ error: Error | any }>());

    RESET = createAction('[TRANSACTION] RESET TRANSACTIONS');
}

export const TransactionActions = new transactionActions();