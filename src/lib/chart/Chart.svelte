<script lang="ts">
  import type { ApexOptions } from 'apexcharts';
  import './chart.css';
  interface Props {
    options: ApexOptions;
    class?: string;
  }
  let { options, class: classname }: Props = $props();

  function initChart(node: HTMLElement, options: ApexOptions) {
    let chart: ApexCharts;

    async function asyncInitChart() {
      const ApexCharts = (await import('apexcharts')).default;
      chart = new ApexCharts(node, options);
      chart.render();
    }

    asyncInitChart();

    return {
      update(options: ApexOptions) {
        chart && chart.updateOptions(options);
      },
      destroy() {
        chart && chart.destroy();
      }
    };
  }
</script>

<div use:initChart={options} class={classname}></div>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop options
@prop class: classname
-->
