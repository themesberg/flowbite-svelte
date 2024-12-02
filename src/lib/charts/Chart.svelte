<script lang="ts">
  import { onMount } from 'svelte';
  import type { ApexOptions, ApexChart } from 'apexcharts';
  import type ApexCharts from 'apexcharts';
  
  interface $$Props {
    options: ApexOptions;
    class?: string;
    chart?: ApexCharts;
  }

  export let options: ApexOptions;
  export let chart: ApexCharts | undefined = undefined;
  let chartElement: HTMLElement;

  interface ChartAction {
    update: (options: ApexOptions) => void;
    destroy: () => void;
  }
  
  function initChart(node: HTMLElement, options: ApexOptions): ChartAction {
    async function asyncInitChart(): Promise<void> {
      const ApexChartsModule = await import('apexcharts');
      const ApexCharts = ApexChartsModule.default;
      chart = new ApexCharts(node, options);
      await chart.render();
    }

    asyncInitChart();

    return {
      update(options: ApexOptions): void {
        chart?.updateOptions(options);
      },
      destroy(): void {
        chart?.destroy();
      }
    };
  }

  onMount(() => {
    return () => {
      chart?.destroy();
    };
  });
</script>

<div use:initChart={options} bind:this={chartElement} class={$$props.class}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let options: ApexOptions;
@prop export let chart: ApexCharts | undefined = undefined;
-->
