import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from '../core/entities/transaction.model';
import { AppState } from '../core/states';
import { TransactionActions } from '../core/states/transaction/transaction.actions';
import { TransactionSelectors } from '../core/states/transaction/transaction.selector';

@Injectable()
export class HomePageService {

  constructor(
    private store: Store<AppState>
  ) { }

  getTransactions(): Observable<Transaction[]> {
    this.store.dispatch(TransactionActions.GET());
    return this.store.select(TransactionSelectors.selectAllList);
  }

  push() {
    this.store.dispatch(TransactionActions.GET());
  }
  reset() {
    this.store.dispatch(TransactionActions.RESET());
  }

}
