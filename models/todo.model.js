const db = require('../data/db')
function createTodo({title,groupId, tags = []}){
    const newTodo = {
        id: Date.now(),
        title,
        completed: false,
        groupId,
        tags,
    };
    db.todos.push(newTodo)
    return newTodo
}
function getTodos(){
    return db.todos;
}
function updateTodo(id, updates){
    const todo = db.todos.find(t => t.id === id);
    if(todo) Object.assign(todo,updates)
        return todo 
}
function deleteTodo(id) {
    const index = db.todos.findIndex(t=> t.id ===id);
    if (index !==-1) db.todos.splice(index, 1)

}
module.exports = {createTodo,getTodos,updateTodo,deleteTodo}