import { ActionReducerMap } from '@ngrx/store';
import * as fromTransactionReducer from './transaction/transacation.reducer';
import { TransactionEffect } from './transaction/transaction.effect';

import { TransactionState } from './transaction/transaction.state';

export interface AppState {
    transaction: TransactionState
}

export const AppEffects = [
    TransactionEffect
]

export const appReducers: ActionReducerMap<AppState> = {
    transaction: fromTransactionReducer.reducer
}

