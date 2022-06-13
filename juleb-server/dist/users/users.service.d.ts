import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User>;
    insert(user: UserDto): Promise<User>;
    delete(id: string): Promise<any>;
    update(oldUser: User, updated_values: UserDto): Promise<User>;
}
