import { Knex } from 'knex';
import { CreateRestaurantOwnerDto } from './dto/create_restaurant_owner.dto';
import { UpdateRestaurantOwnerDto } from './dto/update_restaurant_owner.dto';
export declare class RestaurantOwnerService {
    private readonly knex;
    constructor(knex: Knex);
    getRestaurantOwners(): Promise<any[]>;
    getRestaurantOwnerByID(id: string): Promise<any[]>;
    createRestaurantOwner(restaurantOwner: CreateRestaurantOwnerDto): Promise<any[]>;
    updateRestaurantOwner(id: string, restaurantOwner: UpdateRestaurantOwnerDto): Promise<any[]>;
    deleteRestaurantOwner(id: string): Promise<any[]>;
}
