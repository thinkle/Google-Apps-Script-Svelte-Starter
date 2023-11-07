<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { Block, Icon, work } from "google-apps-script-svelte-components";
  import { parseContext } from "./lib/parseContext";
  import { GoogleAppsScript } from "./gasApi";
  import { onMount } from "svelte";
  let email;
  let contextString = `<? context ?>`;
  let context = parseContext(contextString);
  onMount(async () => {
    email = await GoogleAppsScript.getActiveUserEmail();
  });
</script>

<main>
  <h1>Vite + Svelte + AppsScript</h1>
  <Block>
    <h2>I am a Svelte Component</h2>
    <Counter />
    <br />
    <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">
      Learn Svelte
    </a>
  </Block>
  <Block>
    <h2>I am a Material Icon</h2>
    <Icon fontSize="32px" icon={work.round} />
  </Block>
  <Block>
    <h2>I am an Apps Script Call</h2>
    {#if email}
      Why, hello there, {email}. Look, I made an API call!
    {/if}
  </Block>
  <Block>
    Wow, we are in a {context.container}
    being run from {context.addOn}.
  </Block>
  <div>
    <span class="gray">
      Created with
      <a
        target="_blank"
        href="https://github.com/thinkle/Google-Apps-Script-Svelte-Starter"
      >
        Google Apps Script + Svelte Starter Kit
      </a>
      by
      <a target="_blank" href="https://www.tomhinkle.net"> Tom Hinkle </a>
    </span>
  </div>
</main>

<style>
</style>
