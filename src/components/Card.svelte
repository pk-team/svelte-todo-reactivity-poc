<script lang="ts">
</script>

<div class="card">
    <slot></slot>
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

    :global(.card > *) {
        margin-bottom: 1rem;;
    }
    :global(.card > *:last-of-type) {
        margin-bottom: 0rem;        
    }
    
</style>