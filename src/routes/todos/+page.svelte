<script lang="ts">
	import { createTodosStore } from "$lib/todosStore";
	import type { Todo } from "$lib/types";
	import TodoList from "../../components/TodoList.svelte";
    
    const store = createTodosStore();
    
    function handleDelete(e: CustomEvent<Todo>) {
        store.removeTodo(e.detail.id);
    }

    function handleAdd(e: CustomEvent<Todo>) {
        store.addTodo({
            title: e.detail.title,
            description: e.detail.description,
            id: e.detail.id,
            completed: e.detail.completed
        });
    }
</script>

<h1>Todos Page</h1>
<TodoList todos={$store} on:delete={handleDelete} on:add={handleAdd}/>