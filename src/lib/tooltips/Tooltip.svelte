<script>
  export let tip = "";
  export let top = false;
  export let right = false;
  export let bottom = false;
  export let left = false;
  export let active = false;
  export let bgColor = "bg-gray-900";

  // let style = `background-color: ${color};`;
</script>

<div class="tooltip-wrapper">
  <span class="tooltip-slot">
    <slot />
  </span>
  <div
    class="inline-block absolute invisible z-10 py-2 px-3 {bgColor} rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip"
    class:active
    class:left
    class:right
    class:bottom
    class:top
  >
    {#if tip}
      <div class="text-sm font-medium text-white dark:bg-gray-700">{tip}</div>
      <div class="tooltip-arrow" />
    {:else}
      <slot name="custom-tip" />
    {/if}
  </div>
</div>

<style>
  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }
  .tooltip {
    position: absolute;
    font-family: inherit;
    display: inline-block;
    white-space: nowrap;
    color: inherit;
    opacity: 0;
    visibility: hidden;
    transition: opacity 150ms, visibility 150ms;
  }
  .tooltip.top:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 4px;
    border-style: solid;
    border-color: blue transparent transparent transparent;
  }
  .tooltip.bottom::after {
    content: "";
    position: absolute;
    top: -20%;
    left: 50%;
    margin-left: -10px;
    border-width: 4px;
    border-style: solid;
    border-color: transparent transparent blue transparent;
  }
  .tooltip.right::after {
    content: "";
    position: absolute;
    top: 43%;
    left: 2%;
    margin-left: -10px;
    border-width: 4px;
    border-style: solid;
    border-color: transparent blue transparent transparent;
  }
  .tooltip.left::after {
    content: "";
    position: absolute;
    top: 43%;
    left: 104%;
    margin-left: -10px;
    border-width: 4px;
    border-style: solid;
    border-color: transparent transparent transparent blue;
  }
  .tooltip.top {
    left: 50%;
    transform: translate(-50%, -100%);
    margin-top: -8px;
  }
  .tooltip.bottom {
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 100%);
    /* margin-bottom: -px; */
  }
  .tooltip.left {
    left: 0;
    transform: translateX(-100%);
    margin-left: -8px;
  }
  .tooltip.right {
    right: 0;
    transform: translateX(100%);
    margin-right: 0px;
  }
  .tooltip.active {
    opacity: 1;
    visibility: initial;
  }
  .tooltip-slot:hover + .tooltip {
    opacity: 1;
    visibility: initial;
  }
</style>
