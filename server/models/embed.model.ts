import { Repo, Field, Model, ObjectId } from '@methodus/data';

@Model('Embed')
export class EmbedModel extends Repo<EmbedModel> {

    @ObjectId()
    @Field()
    public _id: string;
    @Field()
    public ID?: number;
    @Field()
    public GroupId?: any;
    @Field()
    public ScriptId?: string;
    @Field()
    public EmbedId?: string;

    @Field()
    public Name?: string;
    @Field()
    public Page?: string;

    constructor(copyData?: any) {
        super(copyData, EmbedModel);
    }
}
