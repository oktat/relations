import { Sequelize } from 'sequelize';
import { readFileSync } from 'fs'

const confPath = '../../config/default.json'
const fileUrl = new URL(confPath, import.meta.url)
const config = JSON.parse(readFileSync(fileUrl, 'utf-8'))

const sequelize = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.pass,
    {
        host: config.db.host,
        dialect: config.db.dialect,
        dialectOptions: {},
        storage: config.db.storage
    }
);

export default sequelize;
