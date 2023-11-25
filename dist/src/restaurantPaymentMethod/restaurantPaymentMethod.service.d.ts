import { Knex } from 'knex';
import { CreateRestaurantPaymentMethodDto } from './dto/create_restaurant_payment_method.dto';
export declare class RestaurantPaymentMethodService {
    private readonly knex;
    constructor(knex: Knex);
    getRestaurantPaymentMethods(): Promise<any[]>;
    getRestaurantPaymentMethodByID(id: string): Promise<any[]>;
    createRestaurantPaymentMethod(restaurantPaymentMethod: CreateRestaurantPaymentMethodDto): Promise<any[]>;
    deleteRestaurantPaymentMethod(id: string): Promise<any[]>;
}
