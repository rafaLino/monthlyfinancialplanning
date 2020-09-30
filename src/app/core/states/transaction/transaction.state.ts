import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Transaction } from '../../entities/transaction.model';

export interface TransactionState extends EntityState<Transaction> {

}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const initialState: TransactionState = adapter.getInitialState();