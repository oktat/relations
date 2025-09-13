import sequelize from "../database/database.js";
import { DataTypes } from 'sequelize';
import Rank from "./rank.js";
import Project from './project.js';
import EmployeeProject from './employeeProject.js';

const Employee = sequelize.define('employee', {
    name: { type: DataTypes.STRING } 
})

export default Employee
