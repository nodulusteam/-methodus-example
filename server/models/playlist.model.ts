import { Repo, Field, Model, ObjectId, Transform } from '@methodus/data';

@Model('Playlist', Transform.Automatic)
export class PlaylistModel extends Repo<PlaylistModel> {

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
        super(copyData, PlaylistModel);
    }
}
