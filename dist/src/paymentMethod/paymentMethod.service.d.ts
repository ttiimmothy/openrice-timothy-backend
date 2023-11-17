import { Knex } from 'knex';
export declare class PaymentMethodService {
    private readonly knex;
    constructor(knex: Knex);
    getPaymentMethods(): Promise<any[]>;
    getPaymentMethodByID(id: string): Promise<any[]>;
}
