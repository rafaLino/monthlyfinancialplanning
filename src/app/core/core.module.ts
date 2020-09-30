import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEffects, appReducers } from './states';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { TransactionFirebaseService } from './services/transaction.firebase.service';
import { TransactionHistoryFirebaseService } from './services/transaction-history.firebase.service';
import { EffectsModule } from '@ngrx/effects';

const MODULES = [
  CommonModule,
  StoreModule.forRoot(appReducers),
  EffectsModule.forRoot(AppEffects),
  StoreDevtoolsModule.instrument({ maxAge: 25 }),
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule
]

const SERVICES = [
  TransactionFirebaseService,
  TransactionHistoryFirebaseService,
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  providers: [...SERVICES]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
