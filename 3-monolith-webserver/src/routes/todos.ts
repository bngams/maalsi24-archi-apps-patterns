import express from 'express';
import TodoService from '../services/todo.service';
const router = express.Router();

const todoService = new TodoService();

// déclarer les != routes du module index
// find all (GET /todos)
router.get('/', (req, res) => {
    // res.contentType
    // res.statusCode
    res.json(todoService.find());
});

// find one (GET /todos/1)
router.get('/:id', (req, res) => {
    res.json(todoService.findOne(parseInt(req.params.id)));
});

export default router
