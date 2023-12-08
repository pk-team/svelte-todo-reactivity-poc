import { writable } from "svelte/store";
import type { Todo } from "./types";

let todos: Todo[] = []

const { subscribe, set, update } = writable(todos); 

const addTodo = (todo: Todo) => {
    update(todos => [...todos, todo])
}
const removeTodo = (id: string) => {
    update(todos => todos.filter(todo => todo.id !== id))
}

const seedTodos = () => {
    todos = [
        { id: crypto.randomUUID(), title: 'Todo 1', description: 'Description 1', completed: false },
        { id: crypto.randomUUID(), title: 'Todo 2', description: 'Description 2', completed: false },
        { id: crypto.randomUUID(), title: 'Todo 3', description: 'Description 3', completed: false },
        { id: crypto.randomUUID(), title: 'Todo 4', description: 'Description 4', completed: false },
        { id: crypto.randomUUID(), title: 'Todo 5', description: 'Description 5', completed: false },
    ];
    set(todos);
}


export const createTodosStore = () => {
    seedTodos();
    return {
        subscribe,
        addTodo,
        removeTodo
    }
}