const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

const adminMiddleware = require('../middleware/adminMiddleware');


router.post('/create-task',adminMiddleware, taskController.createNewTask);

router.put('/updateTask/:taskId', adminMiddleware, taskController.updateTask);

router.delete('/deleteTask/:taskId', adminMiddleware, taskController.deleteTask);

router.put('/updateStatus/:id', taskController.editStatus)


module.exports = router;
 