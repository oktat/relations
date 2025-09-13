import Routes from 'express';
import EmployeeController from '../controllers/employeeController.js';
import ProjectController from '../controllers/projectController.js';

const router = Routes.Router();

router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.store);
// router.get('/employees/:id', EmployeeController.show);
// router.put('/employees/:id', EmployeeController.update);
// router.delete('/employees/:id', EmployeeController.destroy);

router.post('/emp/:empId/proj/:projId', EmployeeController.addProject);
router.delete('/emp/:empId/proj/:projId', EmployeeController.delProject);

router.get('/projects', ProjectController.index);
router.post('/projects', ProjectController.store);
// router.get('/projects/:id', EmployeeController.show);
// router.put('/projects/:id', EmployeeController.update);
// router.delete('/projects/:id', EmployeeController.destroy);

export default router;
