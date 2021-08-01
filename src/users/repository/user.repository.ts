import { CreateUserDto } from '../dto/create.user.dto';
import { UpdateUserDto } from '../dto/update.user.dto';
import { User } from '../entities/user.entity';

export interface UserRepository {
  findUser(id: string): Promise<User>;
  findAllUser(): Promise<User[]>;

  createUser(payload: CreateUserDto): Promise<User>;
  updateUser(id: string, payload: UpdateUserDto): Promise<User>;
  deleteUser(id: string): void;
}
