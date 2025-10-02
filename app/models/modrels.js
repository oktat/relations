import Employee from '../models/employee.js'
import Rank from '../models/rank.js'
import Project from '../models/project.js'
import EmployeeProject from '../models/employeeProject.js'
import sequelize from "../database/database.js";

const db = {}

db.Employee = Employee
db.Rank = Rank
db.Project = Project
db.EmployeeProject = EmployeeProject

db.Employee.belongsTo(db.Rank)
db.Rank.hasMany(db.Employee)

db.Employee.belongsToMany(db.Project, { 
    through: db.EmployeeProject
});
db.Project.belongsToMany(db.Employee, { 
    through: db.EmployeeProject
});

/* { alter: true } vagy { force: true } 
Csak az egyik kulcs szerepeljen ture 
vagy false értékkel */
await sequelize.sync({ alter: false });

export default db
