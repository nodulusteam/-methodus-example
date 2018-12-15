import { MethodConfigBase, Method, Param, MethodResult, Body, SecurityContext, MethodError } from '@methodus/server';
import { Verbs } from '@methodus/server/src/rest';
import { Query as DataQuery } from '@methodus/data';

@MethodConfigBase('DataController')
export class DataController {
    @Method(Verbs.Get, '/id/:id')
    public static async get(@Param('id') id: string): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).methodus[this.name].repository;
        const item = await repo.get(id);
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/insert')
    public static async create(@Body('record') record: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).methodus[this.name].repository;
        record.user_id = securityContext._id;
        const item = await repo.insert(record);
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/id/:id')
    public static async update(@Param('id') id: string, @Body('record') record: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).methodus[this.name].repository;
        const item = await repo.update({ _id: id }, record);
        return new MethodResult(item);
    }

    @Method(Verbs.Delete, '/id/:id')
    public static async delete(@Param('id') id: string): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).methodus[this.name].repository;
        const item = await repo.delete({ _id: id });
        return new MethodResult(item);
    }

    @Method(Verbs.Post, '/query')
    public static async query(@Body('query') queryObject: any, @SecurityContext() securityContext: any): Promise<MethodResult<any>> {
        // extract repository
        const repo = (this as any).methodus[this.name].repository;
        const queryX = new DataQuery(repo.odm.collectionName);
        queryX.filter(queryObject).filter({ user_id: securityContext._id });
        try {
            const results = await queryX.run();
            return new MethodResult(results);
        } catch (error) {
            throw (new MethodError(error));
        }
    }
}
