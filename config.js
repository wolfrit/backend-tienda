const config = {
    appConfig:{
        host: process.env.APP_HOST,
        port: process.env.APP_PORT,
        url_backend_insecure: `${process.env.APP_PROTOCOL_INSECURE}://${process.env.APP_HOST}:${process.env.APP_PORT}`,
        url_backend_secure: `${process.env.APP_PROTOCOL_SECURE}://${process.env.APP_HOST}:${process.env.APP_PORT}`
    },
    dbConfig:{
        url_conn: process.env.MONGO_DB_CONFIG,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dbName: process.env.DB_NAME
    },
    cloudinaryConfig:{
        cloud_name: process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET,
        secure_distribution:process.env.SECURE_DISTRIBUTION
    },
    projectConfig: {
        project_name: process.env.PROJECT_NAME
    },
    storageLocalConfig: {
        storage_url_local: `${process.env.STORAGE_URL_LOCAL}\\\\${process.env.PROJECT_NAME}`
    }
}
module.exports = config;
