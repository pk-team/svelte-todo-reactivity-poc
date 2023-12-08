<script lang="ts">
	import type { Todo } from "$lib/types";
	import TodoInput from "./TodoInput.svelte";
	import TodoItem from "./TodoItem.svelte";
    export let todos: Todo[]
</script>


<div class="cards">
    <TodoInput on:add />
    {#each todos as todo}
        <TodoItem on:delete {todo} />
    {/each}
</div>

<style>
    .cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 600px));
        gap: 1rem;
    }
</style>