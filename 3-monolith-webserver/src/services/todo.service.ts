import TODOS from "../mocks/todo.mock";

class TodoService {

    find() {
        // db...
        return TODOS;
    }

    findOne(id: number) {
        // db request...
        // some actions
        return TODOS.filter(todo => todo.id === id);
    }
}

export default TodoService;
