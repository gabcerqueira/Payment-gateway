import Payment from "../Payment";

class PaymentStrategy {
  payment: Payment;

  constructor(payment: Payment) {
    this.payment = payment;
  }
}

export default PaymentStrategy;
