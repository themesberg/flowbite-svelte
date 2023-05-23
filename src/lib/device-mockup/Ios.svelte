<script lang="ts">
  export let iosTop: string =
    'w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute';
  export let iosLeftTop: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg';
  export let iosLeftBot: string =
    'h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg';
  export let iosRight: string =
    'h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg';
</script>

<div class={iosTop} />
<div class={iosLeftTop} />
<div class={iosLeftBot} />
<div class={iosRight} />
