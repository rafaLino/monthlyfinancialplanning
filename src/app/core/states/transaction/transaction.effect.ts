import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { AppState } from '..';
import { TransactionFirebaseService } from '../../services/transaction.firebase.service';
import { TransactionActions } from './transaction.actions';
import { TransactionSelectors } from './transaction.selector';

@Injectable()
export class TransactionEffect {

    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private transactionService: TransactionFirebaseService
    ) { }

    loadTransactions$ = createEffect(() => this.actions$.pipe(
        ofType(TransactionActions.GET),
        withLatestFrom(this.store.select(TransactionSelectors.selectAllList)),
        switchMap(([action, collection]) => {
            if (collection && collection.length > 0)
                return of(action).pipe(map(() => TransactionActions.SUCCESS({ transaction: collection })))
            else
                return this.transactionService.get()
                    .pipe(
                        map((transactions) => TransactionActions.SUCCESS({ transaction: transactions })),
                        catchError(er => of(TransactionActions.FAIL({ error: er })))
                    )
        })
    ));

    addTransaction$ = createEffect(() => this.actions$.pipe(
        ofType(TransactionActions.CREATE,),
        switchMap(({ transaction }) =>
            this.transactionService.add(transaction)
                .pipe(
                    map(transaction => TransactionActions.SUCCESS({ transaction })),
                    catchError(er => of(TransactionActions.FAIL({ error: er })))
                )
        ),
    ));

}