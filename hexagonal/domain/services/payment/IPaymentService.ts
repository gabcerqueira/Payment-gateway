import Payment from "../../entities/payment/Payment";

export class IPaymentService {
  pay: (payment: Payment) => boolean;

  cancelPayment: (payment: Payment) => boolean;
}
