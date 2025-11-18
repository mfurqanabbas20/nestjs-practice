import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "1399393993939393",
            name: "Item One",
            qty: 100,
            description: "This is description of item 1",
        },
        {
            id: "3930393993939393",
            name: "Item Two",
            qty: 180,
            description: "This is description of item 2",
        }
    ]
}
