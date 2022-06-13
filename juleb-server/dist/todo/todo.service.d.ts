import { Repository } from 'typeorm';
export interface TodoInterface {
    name: string;
    title: boolean;
}
export declare class TodosService {
    private todoRepository;
    constructor(todoRepository: Repository<TodoInterface>);
    findAll(): Promise<TodoInterface[]>;
}
