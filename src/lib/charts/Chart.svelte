<script lang="ts">
  import type { ApexOptions } from 'apexcharts';

  export let options: ApexOptions;  
  export let chart: ApexCharts | undefined;

  interface ChartAction {
    update: (options: ApexOptions) => void;
    destroy: () => void;
  }
  
  function initChart(node: HTMLElement, options: ApexOptions): ChartAction {
    async function asyncInitChart(): Promise<void> {
      const ApexChartsModule = await import('apexcharts');
      const ApexCharts = (await import('apexcharts')).default;
      chart = new ApexCharts(node, options);
      chart.render();
      await chart.render();
    }

    asyncInitChart();

    return {
      update(options: ApexOptions): void {
        chart && chart.updateOptions(options);
      },
      destroy(): void {
        chart && chart.destroy();
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
