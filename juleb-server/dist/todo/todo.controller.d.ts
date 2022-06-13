import { TodoInterface, TodosService } from './todo.service';
export declare class TodosController {
    private todosService;
    constructor(todosService: TodosService);
    findAll(): Promise<TodoInterface[]>;
}
