import { Injectable } from '@nestjs/common'
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
    private users: UserDto[] = [
        new UserDto('jypthemiracle', "Jin Hyung Park"),
        new UserDto('heesu_suh', "Heesu Suh"),
    ];

    findAll(): Promise<UserDto[]> {
        return new Promise((resolve) => {
            setTimeout(
                () => resolve(this.users),
                100,
            )
        });
    }

    findOne(id: string): UserDto | object {
        const foundOne = this.users.filter(user => user.userId === id);
        return foundOne.length ? foundOne[0] : {msg: "nothing"};
    }

    saveUser(userDto: UserDto): void {
        this.users = [...this.users, userDto];
    }
}