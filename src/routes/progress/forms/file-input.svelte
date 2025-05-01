<script lang="ts">
  import { Fileupload, Label, Helper, Dropzone } from "$lib";

  
  let selectedFiles = $state<FileList | null>(null);
  let fileNames = $derived(
    selectedFiles
      ? Array.from(selectedFiles)
          .map((file) => file.name)
          .join(", ")
      : "No files selected"
  );

  let value: FileList | null = $state(null);

function handleChange(event: Event) {
  const target = event.target as HTMLInputElement;
  value = target.files;
}

function dropHandle(event: DragEvent) {
  event.preventDefault();
  value = event.dataTransfer?.files ?? null;
}

function showFiles(files: FileList | null): string {
  if (!files || files.length === 0) return 'No files selected.';
  return Array.from(files).map(file => file.name).join(', ');
}
</script>

<h1 class="text-3xl my-4">File input</h1>

<div class="mb-6">
  <h2 class="text-2xl my-4">Helper text</h2>
  
  <Label for="with_helper" class="pb-2">Upload file</Label>
  <Fileupload id="with_helper" class="mb-2" />
  <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</div>

<div class="mb-6">
  <h2 class="text-2xl my-4">Clearable and multiple files</h2>
  
  <Fileupload clearable bind:files={selectedFiles} multiple />
  <Helper color="emerald" class="mt-2">Selected files: {fileNames}</Helper>
</div>

<div class="mb-6">
  <h2 class="text-2xl my-4">Sizes</h2>
  
  <Label class="pb-2" for="small_size">Small file input</Label>
  <Fileupload id="small_size" size="sm" />
  <Label class="py-2" for="default_size">Default size</Label>
  <Fileupload id="default_size" />
  <Label class="py-2" for="larg_size">Large file input</Label>
  <Fileupload id="larg_size" size="lg" />
</div>

<div class="mb-6">
  <h2 class="text-2xl my-4">Dropzone</h2>


  <Dropzone
  id="dropzone"
  bind:files={value}
  ondrop={dropHandle}
  ondragover={(event) => event.preventDefault()}
  onchange={handleChange}
>
  <svg 
    aria-hidden="true" 
    class="mb-3 h-10 w-10 text-gray-400" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      stroke-linecap="round" 
      stroke-linejoin="round" 
      stroke-width="2" 
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
    />
  </svg>
  
  {#if !value || value.length === 0}
    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
      <span class="font-semibold">Click to upload</span> or drag and drop
    </p>
    <p class="text-xs text-gray-500 dark:text-gray-400">
      SVG, PNG, JPG or GIF (MAX. 800x400px)
    </p>
  {:else}
    <p class="text-sm text-green-600">{showFiles(value)}</p>
  {/if}
</Dropzone>
</div>