import Project from "../models/project.js";

const ProjectController = {
    async index(req, res) {
        const projects = await Project.findAll();
        res.json({ 
            success: true, 
            data: projects
        });
    },
    async store(req, res) {
        const project = await Project.create(req.body);
        res.json({ 
            success: true, 
            data: project 
        });
    },
    async show(req, res) {
        const project = await Project.findByPk(req.params.id);
        res.json({ 
            success: true, 
            data: project 
        });
    },
    async update(req, res) {
        const project = await Project.findByPk(req.params.id);
        await project.update(req.body);
        res.json({ 
            success: true, 
            data: project 
        });
    },
    async destroy(req, res) {
        const project = await Project.findByPk(req.params.id);
        const deleted = await project.destroy();
        res.json({ 
            success: true,
            deleted: true,
            data: deleted
        });
    }
}

export default ProjectController
