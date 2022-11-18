import Payment from "../../domain/entities/payment/Payment";

export class IPaymentRepository {
  createPayment: (payment: Payment) => boolean;

  deletePayment: (payment: Payment) => boolean;
}
