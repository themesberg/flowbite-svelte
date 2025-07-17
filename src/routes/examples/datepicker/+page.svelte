<script lang="ts">
  import { Datepicker, P } from '$lib';
  import { writable } from 'svelte/store';

  let value = writable<Date | undefined>();
  let locale = 'de'; 
</script>

<div class="overflow-visible h-[800px] p-4">
<h1 class="text-xl font-bold mb-4">Datepicker Locale Test</h1>

<label for="locale" class="block mb-2">Choose locale:</label>
<select id="locale" bind:value={locale} class="w-40 mb-4 border rounded p-2">
  <option value="en-US">en-US (US)</option>
  <option value="en-GB">en-GB (UK)</option>
  <option value="de">de (Germany)</option>
  <option value="fr">fr (France)</option>
  <option value="ja">ja (Japan)</option>
</select>

<Datepicker bind:value={$value} {locale} placeholder="Type a date or use calendar" />

<P class="mt-4 h-96">
  Selected date: {$value ? $value.toLocaleDateString(locale) : 'None'}
</P>

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime blanditiis voluptatum iste magnam quas quis omnis commodi. Necessitatibus, quidem vitae! Fuga ex molestias assumenda sit dicta quasi officia iusto magni.

</div>