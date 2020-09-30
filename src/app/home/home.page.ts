import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/states';
import { TransactionGet } from '../core/states/transaction/transaction.actions';
import { selectAllList, selectEntities, selectIds } from '../core/states/transaction/transaction.selector';
import { TransactionState } from '../core/states/transaction/transaction.state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private store: Store<TransactionState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new TransactionGet());
    this.store.select(selectAllList).subscribe(x => console.log(x));
  }

  close(event: MouseEvent) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }
}
