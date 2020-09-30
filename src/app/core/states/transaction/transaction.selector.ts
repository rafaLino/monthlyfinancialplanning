import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, TransactionState } from './transaction.state';

const transactionState = createFeatureSelector<TransactionState>('transaction');

export const selectAllList = createSelector(transactionState, (x => Object.values(x.entities)));

export const {
    selectIds,
    selectAll,
    selectEntities,
    selectTotal,
} = adapter.getSelectors(transactionState);
