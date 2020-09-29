import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Transaction } from '../../entities/transaction.model';
import { TransactionActions, TransactionActionsTypes, TransactionNew, TransactionUpdate, TransactionRemove } from './transaction.actions';

export interface TransactionState extends EntityState<Transaction> {

}

export const adapter: EntityAdapter<Transaction> = createEntityAdapter<Transaction>();

export const initialState: TransactionState = adapter.getInitialState();

export function reducer(state = initialState, action: TransactionActions) {
    switch (action.type) {
        case TransactionActionsTypes.NEW:
            return adapter.addOne((action as TransactionNew).payload.transaction, state);
        case TransactionActionsTypes.UPDATE:
            return adapter.updateOne({
                id: (action as TransactionUpdate).payload.id,
                changes: (action as TransactionUpdate).payload.obj
            }, state);
        case TransactionActionsTypes.REMOVE:
            return adapter.removeOne((action as TransactionRemove).payload.id, state);
    }
}