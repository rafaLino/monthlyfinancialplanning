import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../entities/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionFirebaseService {

  private static collectionString = 'transaction';
  private collection: AngularFirestoreCollection<Transaction>;
  constructor(private firestore: AngularFirestore) {
    this.collection = this.firestore.collection(TransactionFirebaseService.collectionString);
  }

  public get(): Observable<Transaction[]> {
    return this.collection.get().pipe(
      map(snapshot => snapshot.docs.map(doc => {
        return {
          ...doc.data() as Transaction,
          id: doc.id
        }
      }))
    )
  }

  public add(transaction: Transaction): Observable<Transaction> {
    return from(this.collection.add(transaction))
      .pipe(
        map(x => ({ ...transaction, id: x.id }))
      );
  }

}
