export declare class ItemsController {
    private items;
    findAll(): {
        id: string;
        name: string;
    }[];
    create(body: {
        name: string;
    }): {
        name: string;
        id: string;
    };
}
