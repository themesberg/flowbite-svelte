<script lang="ts">
  import { ButtonGroup, CheckboxButton } from "flowbite-svelte";
  import { AppleSolid, FacebookSolid, DiscordSolid, DropboxSolid } from "flowbite-svelte-icons";
  let group = $state([]);
</script>

<div>
  <CheckboxButton bind:group value="Apple"><AppleSolid class="me-2 h-6 w-6" />Apple</CheckboxButton>
  <CheckboxButton bind:group value="Facebook"><FacebookSolid class="me-2 h-6 w-6" />Facebook</CheckboxButton>
  <CheckboxButton bind:group value="Discord"><DiscordSolid class="me-2 h-6 w-6" />Discord</CheckboxButton>
  <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="me-2 h-6 w-6" />Dropbox</CheckboxButton>
</div>

<ButtonGroup>
  <CheckboxButton bind:group value="Apple"><AppleSolid class="h-6 w-6" />Apple</CheckboxButton>
  <CheckboxButton bind:group value="Facebook"><FacebookSolid class="h-6 w-6" />Facebook</CheckboxButton>
  <CheckboxButton bind:group value="Discord"><DiscordSolid class="h-6 w-6" />Discord</CheckboxButton>
  <CheckboxButton bind:group value="Dropbox"><DropboxSolid class="h-6 w-6" />Dropbox</CheckboxButton>
</ButtonGroup>