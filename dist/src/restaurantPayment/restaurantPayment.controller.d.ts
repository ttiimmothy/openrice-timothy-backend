import { RestaurantPaymentService } from './restaurantPayment.service';
import { CreateRestaurantPaymentDto } from './dto/create_restaurant_payment.dto';
import { RestaurantPaymentEntity } from './dto/entity/restaurantPayment.entity';
export declare class RestaurantPaymentController {
    private readonly restaurantPaymentService;
    constructor(restaurantPaymentService: RestaurantPaymentService);
    getRestaurantPayments(): Promise<RestaurantPaymentEntity[]>;
    getRestaurantPaymentByID(params: {
        restaurant_payment_id: string;
    }): Promise<RestaurantPaymentEntity>;
    createRestaurantPayment(createRestaurantPaymentDto: CreateRestaurantPaymentDto): Promise<RestaurantPaymentEntity>;
    deleteRestaurantPayment(params: {
        restaurant_payment_id: string;
    }): Promise<RestaurantPaymentEntity | {
        message: string;
    }>;
}
