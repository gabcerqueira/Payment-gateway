import { PaymentRepository } from "../../../repository/payment/PaymentRepository";
import Payment from "../../entities/payment/Payment";
import { IPaymentService } from "./IPaymentService";

class PaymentService implements IPaymentService {
  //Inject db repository here
  paymentRepository: PaymentRepository;

  constructor() {
    this.paymentRepository = new PaymentRepository();
  }

  pay = (payment: Payment) => {
    let response = false;
    try {
      //business rules here !

      let repositoryOk = this.paymentRepository.createPayment(payment);
      response = true;
      return response;
    } catch (error) {
      return response;
    }
  };

  cancelPayment = (payment: Payment) => {
    return this.paymentRepository.deletePayment(payment);
  };
}

export default PaymentService;
