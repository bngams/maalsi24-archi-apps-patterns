class Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
    
    /**
     * Todo object
     * @param {number} id
     * @param {number} userId
     * @param {string} title
     * @param {boolean} completed
     */
    constructor(id: number, userId: number, title: string, completed: boolean) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }
}

// => export unique ds un fichier
export default Todo;
