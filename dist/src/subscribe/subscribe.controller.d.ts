import { Subscribe } from './interfaces/subscribe.interface';
import { SubscribeService } from './subscribe.service';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
export declare class SubscribeController {
    private readonly subscribeService;
    constructor(subscribeService: SubscribeService);
    getSubscribes(): Promise<Subscribe[]>;
    getSubscribeByID(params: {
        subscribe_id: string;
    }): Promise<Subscribe>;
    createSubscribe(createSubscribeDto: CreateSubscribeDto): Promise<Subscribe>;
    deleteSubscribe(params: {
        subscribe_id: string;
    }): Promise<Subscribe>;
}
