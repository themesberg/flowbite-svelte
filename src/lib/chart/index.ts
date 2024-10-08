import Chart from "./Chart.svelte";
import type { ApexOptions } from "apexcharts";

interface ChartProps {
  options: ApexOptions;
  class?: string;
}

export { Chart, type ChartProps };
