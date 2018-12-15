import { Repo, Field, Model, ObjectId } from '@methodus/data';

@Model('User')
export class UserModel extends Repo<UserModel> {

    @ObjectId()
    @Field()
    public _id: string;
    @Field()
    public FirstName?: string;
    @Field()
    public LastName?: string;
    @Field()
    public Email?: string;
    @Field()
    public Password?: string;


    constructor(copyData?: any) {
        super(copyData, UserModel);
    }
}
