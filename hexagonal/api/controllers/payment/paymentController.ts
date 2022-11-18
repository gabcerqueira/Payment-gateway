import Payment from "../../../domain/entities/payment/Payment";
import PaymentService from "../../../domain/services/payment/PaymentService";
import IPaymentController from "./IpaymentController";

export class PaymentController implements IPaymentController {
  //Service Injection here
  paymentService: PaymentService;

  constructor() {
    this.paymentService = new PaymentService();
  }

  pay = (payment: Payment) => {
    let response = "";
    try {
      const success = this.paymentService.pay(payment);

      response = success ? "Success" : "failure";
      return response;
    } catch (error) {
      return response;
    }
  };

  cancelPayment = (payment: Payment) => {
    let response = "";
    try {
      const success = this.paymentService.cancelPayment(payment);

      response = success ? "Success" : "failure";

      return response;
    } catch (error) {
      return response;
    }
  };
}
