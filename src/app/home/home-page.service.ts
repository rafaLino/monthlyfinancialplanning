import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from '../core/entities/transaction.model';
import { AppState } from '../core/states';
import { TransactionGet } from '../core/states/transaction/transaction.actions';
import { selectAllList } from '../core/states/transaction/transaction.selector';

@Injectable()
export class HomePageService {

  constructor(
    private store: Store<AppState>
  ) { }

  getTransactions(): Observable<Transaction[]> {
    this.store.dispatch(new TransactionGet());
    return this.store.select(selectAllList);
  }

}
