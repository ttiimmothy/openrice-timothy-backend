import { RestaurantPaymentMethodService } from './restaurantPaymentMethod.service';
import { CreateRestaurantPaymentMethodDto } from './dto/create_restaurant_payment_method.dto';
import { RestaurantPaymentMethodEntity } from './dto/entity/restaurantPaymentMethod.entity';
export declare class RestaurantPaymentMethodController {
    private readonly restaurantPaymentMethodService;
    constructor(restaurantPaymentMethodService: RestaurantPaymentMethodService);
    getRestaurantPaymentMethods(): Promise<RestaurantPaymentMethodEntity[]>;
    getRestaurantPaymentMethodByID(params: {
        restaurant_payment_method_id: string;
    }): Promise<RestaurantPaymentMethodEntity>;
    createRestaurantPaymentMethod(createRestaurantPaymentMethodDto: CreateRestaurantPaymentMethodDto): Promise<RestaurantPaymentMethodEntity>;
    deleteRestaurantPaymentMethod(params: {
        restaurant_payment_method_id: string;
    }): Promise<RestaurantPaymentMethodEntity | {
        message: string;
    }>;
}
