import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Transaction } from '../entities/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionFirebaseService {

  private static collectionString = 'transaction';
  private collection: AngularFirestoreCollection<Transaction>;
  constructor(private firestore: AngularFirestore) {
    this.collection = firestore.collection(TransactionFirebaseService.collectionString);
  }

  public get(): Observable<Transaction[]> {
    return this.collection.valueChanges();
  }


}
