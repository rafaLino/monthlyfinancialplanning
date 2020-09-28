import { Transaction } from './transaction.model';
export interface TransactionHistory extends Transaction {
    userId: string,
    Date: Date
}