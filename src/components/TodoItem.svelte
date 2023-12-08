<script lang="ts">
	import type { Todo } from "$lib/types";
	import { createEventDispatcher } from "svelte";
    export let todo: Todo

    const dispatch = createEventDispatcher()
    const deleteTodo = () => {
        dispatch("delete", todo)
    }
</script>

<div class="card">
        <h5 class="card-title">{todo.title}</h5>
        <p class="card-text">{todo.description}</p>
        <button on:click={deleteTodo}>🗑️</button>
</div>

<style>
    .card {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        align-items: start;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    .card-title {
        font-size: 1.3rem;
    }

    button {
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        border: none;
        outline: none;
        padding: 0.3rem;
        font-size: 1.2rem;
        cursor: pointer;
    }
</style>