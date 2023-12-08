# Reactivity

A todo app focused where behavior is handled by the top level page component, and all child components are reactive.

The inner components bubble events up to the top level component, which then updates the state and re-renders the page.

A svelte store is used as it is the cleanest way to handle state in svelte.