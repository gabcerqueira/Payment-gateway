import Payment from "../../../domain/entities/payment/Payment";

interface IPaymentController {
  pay: (payment: Payment) => string;

  cancelPayment: (payment: Payment) => string;
}

export default IPaymentController;
