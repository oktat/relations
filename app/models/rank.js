import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';

const Rank = sequelize.define('rank', {
    name: { type: DataTypes.STRING } 
})

export default Rank

