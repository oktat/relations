import Project from "../models/project.js";

const ProjectController = {
    async index(req, res) {
        const projects = await Project.findAll();
        res.json(projects);
    },
    async store(req, res) {
        const project = await Project.create(req.body);
        res.json(project);
    }
}

export default ProjectController
