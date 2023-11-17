import { CreateRestaurantOwnerDto } from './dto/create-restaurantOwner.dto';
import { UpdateRestaurantOwnerDto } from './dto/update-restaurantOwner.dto';
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
    }, updateRestaurantOwnerDto: UpdateRestaurantOwnerDto): Promise<RestaurantOwnerEntity>;
    deleteRestaurantOwner(params: {
        restaurant_owner_id: string;
    }): Promise<RestaurantOwnerEntity>;
}
