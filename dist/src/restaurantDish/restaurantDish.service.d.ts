import { Knex } from 'knex';
import { CreateRestaurantDishDto } from './dto/create_restaurant_dish.dto';
export declare class RestaurantDishService {
    private readonly knex;
    constructor(knex: Knex);
    getRestaurantDishes(): Promise<any[]>;
    getRestaurantDishByID(id: string): Promise<any[]>;
    createRestaurantDish(restaurantDish: CreateRestaurantDishDto): Promise<any[]>;
    deleteRestaurantDish(id: string): Promise<any[]>;
}
