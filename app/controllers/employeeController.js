import Employee from '../models/employee.js';
import Project from '../models/project.js';

const EmployeeController = {
    async index(req, res) {
        const employees = await Employee.findAll();
        res.json({
            success: true,
            data: employees
        });
    },
    async show(req, res) {
        const employee = await Employee.findByPk(req.params.id);
        res.json({ 
            success: true, 
            data: employee 
        });
    },
    async update(req, res) {
        const employee = await Employee.findByPk(req.params.id);
        await employee.update(req.body);
        res.json({ 
            success: true, 
            data: employee 
        });
    },
    async destroy(req, res) {
        const employee = await Employee.findByPk(req.params.id);
        const deleted = await employee.destroy();
        res.json({ 
            success: true, 
            data: deleted
        });
    },
    async store(req, res) {
        const employee = await Employee.create(req.body);
        res.json({ 
            success: true, 
            data: employee
        });
    },    
    async addProject(req, res) {
        const employee = await Employee.findByPk(req.params.empId);
        const project = await Project.findByPk(req.params.projId);
        const empProj = await employee.addProject(project, {
            through: { active: true }
        });
        res.json({ 
            success: true, 
            data: empProj
        });
    },
    async delProject(req, res) {
        const employee = await Employee.findByPk(req.params.empId);
        const empProj = await employee.removeProject(req.params.projId);
        res.json({ 
            success: true, 
            data: empProj 
        });
    }
}

export default EmployeeController
