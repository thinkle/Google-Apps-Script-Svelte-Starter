<script lang="ts">
  import Counter from "./lib/Counter.svelte";
  import { Block } from "google-apps-script-svelte-components";
  import { Sidebar, Icon, work } from "google-apps-script-svelte-components";
  import { copy_all } from "google-apps-script-svelte-components/dist/lib/icons/copy_all";
  let email;
  google.script.run.withSuccessHandler((v) => (email = v)).getActiveUserEmail();
  google.script.host.setWidth(200);
</script>

<Sidebar>
  <h1>Vite + Svelte + AppsScript</h1>
  <Icon fontSize="128px" icon={work.round} />
  <Block>
    <Counter />
  </Block>
  <Block>
    {#if email}
      Why, hello there, {email}
    {/if}
  </Block>
  <Block>
    <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">
      Learn Svelte
    </a>
  </Block>
  <div slot="branding">
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
</Sidebar>

<style>
</style>
