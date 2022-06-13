import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getUser(): Promise<import("./user.entity").User[]>;
    findOneById(params: any): Promise<UserDto>;
    create(user: UserDto): Promise<UserDto>;
    delete(params: any): Promise<any>;
}
