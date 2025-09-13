import Employee from '../models/employee.js';
import Project from '../models/project.js';

const EmployeeController = {
    async index(req, res) {
        const employees = await Employee.findAll();
        res.json(employees);
    },

    async store(req, res) {
        const employee = await Employee.create(req.body);
        res.json(employee);
    },
    async addProject(req, res) {
        const employee = await Employee.findByPk(req.params.empId);
        const project = await Project.findByPk(req.params.projId);
        const empProj = await employee.addProject(project, {
            through: { active: true }
        });
        res.json(empProj);
    },
    async delProject(req, res) {
        const employee = await Employee.findByPk(req.params.empId);
        const empProj = await employee.removeProject(req.params.projId);
        res.json(empProj);
    }
}

export default EmployeeController
