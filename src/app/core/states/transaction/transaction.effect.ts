import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TransactionFirebaseService } from '../../services/transaction.firebase.service';
import { TransactionActionsTypes, TransactionLOADED } from './transaction.actions';

@Injectable()
export class TransactionEffect {

    constructor(
        private actions$: Actions,
        private transactionService: TransactionFirebaseService
    ) { }

    @Effect()
    loadTransactions$ = createEffect(() => this.actions$.pipe(
        ofType(TransactionActionsTypes.GET),
        mergeMap(() => this.transactionService.get()
            .pipe(
                map((transactions) => new TransactionLOADED(transactions)),
                catchError(() => EMPTY)
            ))
    )
    );

}