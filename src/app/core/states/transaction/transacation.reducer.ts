import { TransactionActions, TransactionActionsTypes, TransactionNew, TransactionUpdate, TransactionRemove, TransactionLOADED } from './transaction.actions';
import { initialState, adapter } from './transaction.state';

export function reducer(state = initialState, action: TransactionActions) {
    switch (action.type) {
        case TransactionActionsTypes.LOADED:
            return adapter.setAll((action as TransactionLOADED).transactions, state);
        case TransactionActionsTypes.NEW:
            return adapter.addOne((action as TransactionNew).payload.transaction, state);
        case TransactionActionsTypes.UPDATE:
            return adapter.updateOne({
                id: (action as TransactionUpdate).payload.id,
                changes: (action as TransactionUpdate).payload.obj
            }, state);
        case TransactionActionsTypes.REMOVE:
            return adapter.removeOne((action as TransactionRemove).payload.id, state);

        default: return state;

    }
}