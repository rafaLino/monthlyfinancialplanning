import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../core/entities/transaction.model';
import { HomePageService } from './home-page.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private _service: HomePageService
  ) { }
  public transactions$: Observable<Transaction[]>;

  ngOnInit(): void {
    this.transactions$ = this._service.getTransactions();
  }

  addNew() {
    const t: Transaction = { name: 'tevez', value: 100 };
    this._service.add(t);
  }

}
