import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create_subscribe.dto';
import { SubscribeEntity } from './dto/entity/subscribe.entity';
export declare class SubscribeController {
    private readonly subscribeService;
    constructor(subscribeService: SubscribeService);
    getSubscribes(): Promise<SubscribeEntity[]>;
    getSubscribeByID(params: {
        subscribe_id: string;
    }): Promise<SubscribeEntity>;
    createSubscribe(createSubscribeDto: CreateSubscribeDto): Promise<SubscribeEntity>;
    deleteSubscribe(params: {
        subscribe_id: string;
    }): Promise<SubscribeEntity | {
        message: string;
    }>;
}
