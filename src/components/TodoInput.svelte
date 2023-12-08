<script lang="ts">
	import type { Todo } from "$lib/types";
	import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";
    let todo: Todo = { title: "", description: "", id: "", completed: false}

    const dispatch = createEventDispatcher();

    const handleAdd = () => {
        dispatch("add", todo);
        todo = { title: "", description: "", id: "", completed: false };
    }
</script>

<Card>
    <input type="text" bind:value={todo.title} placeholder="Title" />
    <input type="text" bind:value={todo.description} placeholder="Description" />
    <button on:click={handleAdd}>Add</button>
</Card>