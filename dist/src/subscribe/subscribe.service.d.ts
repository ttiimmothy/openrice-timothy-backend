import { Knex } from 'knex';
import { CreateSubscribeDto } from './dto/create-subscribe.dto';
export declare class SubscribeService {
    private readonly knex;
    constructor(knex: Knex);
    getSubscribes(): Promise<any[]>;
    getSubscribeByID(id: string): Promise<any[]>;
    createSubscribe(subscribe: CreateSubscribeDto): Promise<any[]>;
    deleteSubscribe(id: string): Promise<any[]>;
}
