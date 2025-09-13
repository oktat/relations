import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';

const Project = sequelize.define('project', {
    name: { type: DataTypes.STRING } 
})

export default Project
