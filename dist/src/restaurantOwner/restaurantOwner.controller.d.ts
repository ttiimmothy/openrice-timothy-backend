import { CreateRestaurantOwnerDto } from './dto/create_restaurant_owner.dto';
import { UpdateRestaurantOwnerDto } from './dto/update_restaurant_owner.dto';
import { RestaurantOwnerService } from './restaurantOwner.service';
import { RestaurantOwnerEntity } from './dto/entity/restaurantOwner.enttiy';
export declare class RestaurantOwnerController {
    private readonly restaurantOwnerService;
    constructor(restaurantOwnerService: RestaurantOwnerService);
    getRestaurantOwners(): Promise<RestaurantOwnerEntity[]>;
    getRestaurantOwnerByID(params: {
        restaurant_owner_id: string;
    }): Promise<RestaurantOwnerEntity>;
    createRestaurantOwner(createRestaurantOwnerDto: CreateRestaurantOwnerDto): Promise<RestaurantOwnerEntity>;
    updateRestaurantOwner(params: {
        restaurant_owner_id: string;
    }, updateRestaurantOwnerDto: UpdateRestaurantOwnerDto): Promise<RestaurantOwnerEntity | {
        message: string;
    }>;
    deleteRestaurantOwner(params: {
        restaurant_owner_id: string;
    }): Promise<RestaurantOwnerEntity | {
        message: string;
    }>;
}
