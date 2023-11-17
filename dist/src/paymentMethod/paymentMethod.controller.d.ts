import { PaymentMethodService } from './paymentMethod.service';
import { PaymentMethodEntity } from './dto/entity/paymentMethod.entity';
export declare class PaymentMethodController {
    private readonly paymentMethodService;
    constructor(paymentMethodService: PaymentMethodService);
    getPaymentMethods(): Promise<PaymentMethodEntity[]>;
    getPaymentMethodByID(params: {
        payment_method_id: string;
    }): Promise<PaymentMethodEntity>;
}
