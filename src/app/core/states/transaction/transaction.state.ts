import { EntityState } from '@ngrx/entity';
import { Transaction } from '../../entities/transaction.model';

export interface TransactionState extends EntityState<Transaction> {
    success: boolean,
    error: boolean,
    loading: boolean,
}
