module.exports.Config = {
    connections: {
        'default': {
            server: `mongodb://${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PATH}`,
            db: 'signnature',
            poolSize: 10,
            ssl: false,
            exchanges: [],
            readPreference: 'primaryPreferred'
        }
    }
}