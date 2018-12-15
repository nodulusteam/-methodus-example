import { UserModel } from '../models/';

export class UserMock {
    static async list(): Promise<any> {
        const results = [];
        for (let i = 0; i < 10; i++) {
            const user: UserModel = new Object() as UserModel;
            user.Email = 'info@gmail.com';
            user.FirstName = 'First name';
            user.LastName = 'Last name';
            user.Password = '********';
            results.push(user);
        }
        return results;
    }

    static async get(userId: string): Promise<any> {
        const user: UserModel = new Object() as UserModel;
        user.Email = 'info@gmail.com';
        user.FirstName = 'First name';
        user.LastName = 'Last name';
        user.Password = '********';
        return user;
    }
}
