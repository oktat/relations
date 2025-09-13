import sequelize from '../database/database.js';
import { DataTypes } from 'sequelize';

const EmployeeProject = sequelize.define('employee_project', {
    active: { type: DataTypes.BOOLEAN }
}, {
    //tábla többesszámának megakadályozása
    freezeTableName: true
})

export default EmployeeProject
