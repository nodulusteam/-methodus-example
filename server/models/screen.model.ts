import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Screen', Transform.Automatic)
export class ScreenModel extends Repo<ScreenModel> {

    @ObjectId()
    @Field('_id')
    public _id: string;
    @Field()
    public Name?: string;
    @Field()
    public Date?: Date;
    @Field()
    public Status?: string;

    constructor(copyData?: any) {
        super(copyData, ScreenModel);
    }
}
