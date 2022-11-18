import Payment from "../../domain/entities/payment/Payment";
import { IPaymentRepository } from "./IPaymentRepository";

export class PaymentRepository implements IPaymentRepository {
  //Inject the db provider here

  dbProvider: PostgresProvider;

  constructor() {
    this.dbProvider = new PostgresProvider();
  }

  createPayment = (payment: Payment) => {
    let result = false;
    try {
      //db validations ?

      //call db provider to persistance

      let query = `Insert into payments values ...`;

      //call db module passing the query

      result = true;
      return result;
    } catch (error) {
      return result;
    }
  };

  deletePayment(payment: Payment) {
    let result = false;
    try {
      //db validations ?

      //call db provider to persistance

      let query = `Insert into payments values ...`;

      //call db module passing the query

      result = true;
      return result;
    } catch (error) {
      return result;
    }
  }
}
