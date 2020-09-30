import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TransactionState } from './transaction.state';

const transactionState = createFeatureSelector<TransactionState>('transaction');

const selectAllList = createSelector(transactionState, (x => Object.values(x.entities)));

export const TransactionSelectors = {
    selectAllList
};