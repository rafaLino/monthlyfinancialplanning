import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../core/store';
import { TransactionAll } from '../core/store/transaction/transaction.actions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new TransactionAll());
  }

  close(event: MouseEvent) {
    console.log(event);
    event.preventDefault();
    event.stopPropagation();
  }
}
