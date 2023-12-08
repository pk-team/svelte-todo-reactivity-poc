<script lang="ts">
	import type { Todo } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import Card from './Card.svelte';
	export let todo: Todo;

	const dispatch = createEventDispatcher();
	const deleteTodo = () => {
		dispatch('delete', todo);
	};
</script>

<Card>
	<h5 class="todo-title">{todo.title}</h5>
	<p>{todo.description}</p>
	<button on:click={deleteTodo}>🗑️</button>
</Card>

<style>
	.todo-title {
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
