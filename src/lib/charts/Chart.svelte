<script lang="ts">
  import type { ApexOptions } from 'apexcharts';

  export let options: ApexOptions;
  export let chart: any;

  function initChart(node: HTMLElement, options: ApexOptions) {
    async function asyncInitChart() {
      const ApexCharts = (await import('apexcharts')).default;
      chart = new ApexCharts(node, options);
      chart.render();
    }

    asyncInitChart();

    return {
      update(options: ApexOptions) {
        if (chart) {
          chart.updateOptions(options);
        }
      },
      destroy() {
        if (chart) {
          chart.destroy();
        }
      }
    };
  }
</script>

<div use:initChart={options} class={$$props.class}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let options: ApexOptions;
@prop export let chart: ApexCharts;
-->
