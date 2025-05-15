<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import type ApexCharts from "apexcharts";
  import "./chart.css";
  import type { ChartProps } from "$lib/types";

  let { options, class: classname }: ChartProps = $props();

  function initChart(node: HTMLElement, options: ApexOptions) {
    let chart: ApexCharts;

    async function asyncInitChart() {
      const ApexCharts = (await import("apexcharts")).default;
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

<div use:initChart={options} class={classname}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ChartProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L440)
## Props
@prop options
@prop class: classname
-->
