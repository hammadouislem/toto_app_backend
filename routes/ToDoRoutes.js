const {Router} = require('express');
const Routes = require('../controllers/ToDoConttroller');
const router = Router();

router.get('/', Routes.getTodo);
router.post('/save', Routes.CreateTodo);
router.post('/update', Routes.updateTodo);
router.delete('/delete', Routes.deleteTodo);

module.exports = router;