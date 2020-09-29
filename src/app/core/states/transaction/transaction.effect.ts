import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TransactionService } from '../../services/transaction.service';
import { TransactionActionsTypes, TransactionGet } from './transaction.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class TransactionEffect {

    constructor(
        private actions$: Actions,
        private transactionService: TransactionService
    ) { }


    loadTransactions$ = createEffect(() => this.actions$.pipe(
        ofType(TransactionActionsTypes.GET),
        mergeMap(() => this.transactionService.get()
            .pipe(
                map((t) => ({ type: 'GET SUCCEED' })),
                catchError(() => EMPTY)
            ))
    )
    );
}