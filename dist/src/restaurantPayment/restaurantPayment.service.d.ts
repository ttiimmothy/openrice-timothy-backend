import { Knex } from 'knex';
import { CreateRestaurantPaymentDto } from './dto/create-restaurantPayment.dto';
export declare class RestaurantPaymentService {
    private readonly knex;
    constructor(knex: Knex);
    getRestaurantPayments(): Promise<any[]>;
    getRestaurantPaymentByID(id: string): Promise<any[]>;
    createRestaurantPayment(restaurantPayment: CreateRestaurantPaymentDto): Promise<any[]>;
    deleteRestaurantPayment(id: string): Promise<any[]>;
}
