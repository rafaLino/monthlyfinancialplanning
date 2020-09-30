import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Transaction } from '../../entities/transaction.model';
import { TransactionActions, TransactionActionTypes } from './transaction.actions';
import { TransactionState } from './transaction.state';

const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

const initialState: TransactionState = adapter.getInitialState({
    success: false,
    error: false,
    loading: false
});

const transactionReducer = createReducer(
    initialState,
    on(TransactionActions.CREATE, (state, { transaction }) => {
        return {
            ...state,
            loading: true
        }
    }),
    on(TransactionActions.UPDATE, (state, { id, obj }) => {
        return adapter.updateOne({
            id,
            changes: obj
        }, {
            ...state,
            loading: true,
        });
    }),
    on(TransactionActions.REMOVE, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(TransactionActions.SUCCESS, (state, { transaction }) => {
        if (transaction && Array.isArray(transaction))
            return adapter.setAll((transaction as Transaction[]), {
                ...state,
                success: true,
                loading: false,
            });
        else if (transaction) {
            return adapter.setOne(transaction as Transaction, {
                ...state,
                success: true,
                loading: false,
                error: false,
            });
        }
    }),
    on(TransactionActions.FAIL, (state, { error }) => {
        return {
            ...state,
            success: false,
            loading: false,
            error: true,
            exception: error
        }
    }),
    on(TransactionActions.GET, state => {
        return {
            ...state,
            loading: true,
        };
    }),
    on(TransactionActions.RESET, state => {
        return adapter.removeAll(initialState);
    })
)

export function reducer(state: TransactionState | undefined, action: Action) {
    return transactionReducer(state, action);
}