
import {
    ServerConfiguration, PluginConfiguration,
    ClientConfiguration, ConfiguredServer, MethodType, ServerType,
} from '@methodus/server';
import * as path from 'path';
export * from './models/';
import { DBHandler } from '@methodus/data';
import { configuration } from './db/config';
import {
    LibraryDataController, AuthController, UserController,

} from './controllers/';

DBHandler.config = configuration;

@ServerConfiguration(ServerType.Express, { port: process.env.PORT || 6299 })
@PluginConfiguration('@methodus/describe')
@PluginConfiguration(path.join(__dirname, 'static'), { path: '/', clientPath: '/public' })
@ClientConfiguration(UserController, MethodType.Local, ServerType.Express)
@ClientConfiguration(AuthController, MethodType.Local, ServerType.Express)
@ClientConfiguration(LibraryDataController, MethodType.Local, ServerType.Express)
class SetupServer extends ConfiguredServer {
    constructor() {
        super(SetupServer);
    }
}

new SetupServer();
