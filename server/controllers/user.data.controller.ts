

import { Body, Method, MethodConfig, Param, Query, Verbs, MethodError, MethodResult, MethodMock, MethodConfigExtend } from '@methodus/server';
import { Query as DataQuery } from '@methodus/data';
import { UserModel } from '../models/user.model';
import { UserMock } from '../mocks/';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/

@MethodConfig('UserController', [], UserModel)
@MethodConfigExtend(DataController)
export class UserController extends DataController {
}


