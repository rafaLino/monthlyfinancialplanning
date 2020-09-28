import { ActionReducerMap } from '@ngrx/store';
import * as fromTransactionReducer from './transaction/transacation.reducer';

export interface AppState {
    transaction: fromTransactionReducer.TransactionState
}

export const appReducers: ActionReducerMap<AppState> = {
    transaction: fromTransactionReducer.reducer
}