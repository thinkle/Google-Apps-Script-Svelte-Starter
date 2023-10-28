<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import Block from "./lib/Block.svelte";
  import Sidebar from "./lib/Sidebar.svelte";
</script>

<Sidebar>
  <h1>Vite + Svelte + AppsScript</h1>
  <Block>
    <Counter />
  </Block>
  <Block>
    <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">
      Learn Svelte
    </a>
  </Block>
</Sidebar>

<style>
</style>
