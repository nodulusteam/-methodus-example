module.exports.Config = {
    connections: {
        'default': {
            server: `mongodb://${process.env.MONGO_PATH}`,
            db: 'methodusDB',
            poolSize: 10,
            ssl: false,
            exchanges: [],
            readPreference: 'primaryPreferred'
        }
    }
}