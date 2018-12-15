import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Slide', Transform.Automatic)
export class SlideModel extends Repo<SlideModel> {

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
        super(copyData, SlideModel);
    }
}
