import { PaymentMethod } from '../../interfaces/paymentMethod.interface';
export declare class PaymentMethodEntity implements PaymentMethod {
    payment_method_id: string;
    name: string;
    active: boolean;
    created_at: Date;
}
