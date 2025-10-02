import Routes from 'express';
import EmployeeController from '../controllers/employeeController.js';
import ProjectController from '../controllers/projectController.js';
import RankController from '../controllers/rankController.js';

const router = Routes.Router();

router.get('/employees', EmployeeController.index);
router.post('/employees', EmployeeController.store);
router.get('/employees/:id', EmployeeController.show);
router.put('/employees/:id', EmployeeController.update);
router.delete('/employees/:id', EmployeeController.destroy);

router.get('/projects', ProjectController.index);
router.post('/projects', ProjectController.store);
router.get('/projects/:id', ProjectController.show);
router.put('/projects/:id', ProjectController.update);
router.delete('/projects/:id', ProjectController.destroy);

router.get('/ranks', RankController.index);
router.post('/ranks', RankController.store);
router.get('/ranks/:id', RankController.show);
router.put('/ranks/:id', RankController.update);
router.delete('/ranks/:id', RankController.destroy);

router.post('/emp/:empId/proj/:projId', EmployeeController.addProject);
router.delete('/emp/:empId/proj/:projId', EmployeeController.delProject);

export default router;
