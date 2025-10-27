# Svelte Charts - Flowbite


<Badge class="p-4 w-full">
  <P class="flex items-center gap-2">
    <span class="inline-flex">
      <InfoCircleOutline class="h-6 w-6 text-pink-600 dark:text-pink-500 " />
      <span class="sr-only">Info Circle</span>
    </span>
    <span>
      Flowbite-Svelte Chart component will be deprecated in the next version. Please use @flowbite-svelte-plugins/chart.
    </span>
  </P>
</Badge>

## Installation

```svelte
pnpm i -D @flowbite-svelte-plugins/chart
```

Update `app.css`:

```svelte
@source "../node_modules/@flowbite-svelte-plugins/chart/dist";
```

## Area chart

Use this example to show a basic area chart.

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronRightOutline, ChevronDownOutline } from "flowbite-svelte-icons";

  let options: ApexOptions = {
    chart: {
      height: "400px",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0
      }
    },
    series: [
      {
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB"
      }
    ],
    xaxis: {
      categories: ["01 February", "02 February", "03 February", "04 February", "05 February", "06 February", "07 February"],
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="flex justify-between">
    <div>
      <h5 class="pb-2 text-3xl leading-none font-bold text-gray-900 dark:text-white">32.4k</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">
      12%
      <ChevronRightOutline class="ms-1 h-6 w-6" />
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Users Report
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Line chart

To create a double line chart check the example below.

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem, Popover } from "flowbite-svelte";
  import { InfoCircleSolid, ChevronRightOutline, ChevronDownOutline, FileLinesSolid } from "flowbite-svelte-icons";

  let options: ApexOptions = {
    chart: {
      height: "400px",
      type: "line",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6,
      curve: "smooth"
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26
      }
    },
    series: [
      {
        name: "Clicks",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB"
      },
      {
        name: "CPC",
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: "#7E3AF2"
      }
    ],
    legend: {
      show: false
    },
    xaxis: {
      categories: ["01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb"],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="mb-5 flex justify-between">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <h5 class="mb-2 inline-flex items-center leading-none font-normal text-gray-500 dark:text-gray-400">
          Clicks
          <InfoCircleSolid id="b1" class="ms-1 h-3 w-3 cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          <Popover triggeredBy="#b1" class="z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <div class="space-y-2 p-3">
              <h3 class="font-semibold text-gray-900 dark:text-white">Clicks growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <A href="/">
                Read more
                <ChevronRightOutline class="ms-1.5 h-2 w-2" />
              </A>
            </div>
          </Popover>
        </h5>
        <p class="text-2xl leading-none font-bold text-gray-900 dark:text-white">42,3k</p>
      </div>
      <div>
        <h5 class="mb-2 inline-flex items-center leading-none font-normal text-gray-500 dark:text-gray-400">
          CPC
          <InfoCircleSolid id="b2" class="ms-1 h-3 w-3 cursor-pointer text-gray-400 hover:text-gray-900 dark:hover:text-white" />
          <Popover triggeredBy="#b2" class="z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
            <div class="space-y-2 p-3">
              <h3 class="font-semibold text-gray-900 dark:text-white">CPC growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
            </div>
          </Popover>
        </h5>
        <p class="text-2xl leading-none font-bold text-gray-900 dark:text-white">$5.40</p>
      </div>
    </div>
    <div>
      <Button color="light" class="px-3 py-2">Last week<ChevronDownOutline class="ms-1.5 h-2.5 w-2.5" /></Button>
      <Dropdown simple class="w-40">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
    </div>
  </div>
  <Chart {options} />
  <div class="mt-2.5 grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="pt-5">
      <Button href="/" class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-hidden">
        <FileLinesSolid class="me-2 h-3.5 w-3.5 text-white" />
        View full report
      </Button>
    </div>
  </div>
</Card>
```

## Column chart

You can represent multiple data entries using columns by setting the type: "bar" option

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { UsersGroupOutline, ArrowUpOutline, ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";

  const options: ApexOptions = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Organic",
        color: "#1A56DB",
        data: [
          { x: "Mon", y: 231 },
          { x: "Tue", y: 122 },
          { x: "Wed", y: 63 },
          { x: "Thu", y: 421 },
          { x: "Fri", y: 122 },
          { x: "Sat", y: 323 },
          { x: "Sun", y: 111 }
        ]
      },
      {
        name: "Social media",
        color: "#FDBA8C",
        data: [
          { x: "Mon", y: 232 },
          { x: "Tue", y: 113 },
          { x: "Wed", y: 341 },
          { x: "Thu", y: 224 },
          { x: "Fri", y: 522 },
          { x: "Sat", y: 411 },
          { x: "Sun", y: 243 }
        ]
      }
    ],
    chart: {
      type: "bar",
      height: "320px",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "70%",
        borderRadiusApplication: "end",
        borderRadius: 8
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: "Inter, sans-serif"
      }
    },
    states: {
      hover: {
        filter: {
          type: "darken"
        }
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"]
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -14
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      show: false
    },
    fill: {
      opacity: 1
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
    <div class="flex items-center">
      <div class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
        <UsersGroupOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
      </div>
      <div>
        <h5 class="pb-1 text-2xl leading-none font-bold text-gray-900 dark:text-white">3.4k</h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
      </div>
    </div>
    <div>
      <span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
        <ArrowUpOutline class="me-1.5 h-2.5 w-2.5" />
        42.5%
      </span>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <dl class="flex items-center">
      <dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt>
      <dd class="text-sm font-semibold text-gray-900 dark:text-white">$3,232</dd>
    </dl>
    <dl class="flex items-center justify-end">
      <dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt>
      <dd class="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd>
    </dl>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Leads Report
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Bar chart

Create a horizontal bar chart with as many data series as you like by setting the type: "bar" chart type.

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ArrowUpOutline, ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";

  const options: ApexOptions = {
    series: [
      {
        name: "Income",
        color: "#31C48D",
        data: [1420, 1620, 1820, 1420, 1650, 2120]
      },
      {
        name: "Expense",
        data: [788, 810, 866, 788, 1100, 1200],
        color: "#F05252"
      }
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: {
        show: false
      }
    },
    fill: {
      opacity: 1
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          position: "top"
        }
      }
    },
    legend: {
      show: true,
      position: "bottom"
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      shared: true,
      intersect: false
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        },
        formatter: function (value) {
          return "$" + value;
        }
      },
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      }
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20
      }
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
    <dl>
      <dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Profit</dt>
      <dd class="text-3xl leading-none font-bold text-gray-900 dark:text-white">$5,405</dd>
    </dl>
    <div>
      <span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
        <ArrowUpOutline class="me-1.5 h-2.5 w-2.5" />
        Profit rate 23.5%
      </span>
    </div>
  </div>

  <div class="grid grid-cols-2 py-3">
    <dl>
      <dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Income</dt>
      <dd class="text-xl leading-none font-bold text-green-500 dark:text-green-400">$23,635</dd>
    </dl>
    <dl>
      <dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Expense</dt>
      <dd class="text-xl leading-none font-bold text-red-600 dark:text-red-500">-$18,230</dd>
    </dl>
  </div>

  <Chart {options} />
  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Leads Report
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Pie chart

Create a pie chart with multiple data series by setting the type: "pie" chart type option.

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem, Popover } from "flowbite-svelte";
  import { InfoCircleSolid, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid, TrashBinSolid, DotsHorizontalOutline } from "flowbite-svelte-icons";

  const options: ApexOptions = {
    series: [52.8, 26.8, 20.4],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie"
    },
    stroke: {
      colors: ["white"]
    },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -25
        }
      }
    },
    labels: ["Direct", "Organic search", "Referrals"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif"
      }
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif"
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        }
      }
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "%";
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="flex w-full items-start justify-between">
    <div class="flex-col items-center">
      <div class="mb-1 flex items-center">
        <h5 class="me-1 text-xl leading-none font-bold text-gray-900 dark:text-white">Website traffic</h5>
        <InfoCircleSolid id="pie1" class="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
        <Popover triggeredBy="#pie1" class="z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <div class="space-y-2 p-3">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <DotsHorizontalOutline id="dots-menu" class="dots-menu dark:text-white" />
      <Dropdown simple triggeredBy="#dots-menu" class="w-44" offset={-6}>
        <DropdownItem><PenSolid class="me-2 inline h-3 w-3" /> Edit widget</DropdownItem>
        <DropdownItem><DownloadSolid class="me-2 inline h-3 w-3" />Dropdown data</DropdownItem>
        <DropdownItem><ShareNodesSolid class="me-2 inline h-3 w-3" />Add to repository</DropdownItem>
        <DropdownItem><TrashBinSolid class="me-2 inline h-3 w-3" />Delete widget</DropdownItem>
      </Dropdown>
    </div>
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Traffic analysis
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Donut chart

Set the chart type: "donut" to create a donut chart and copy the options from the example below to style the elements such as the data series, legends and labels for the X and Y axis.

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";

  const options: ApexOptions = {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C", "#E74694"],
    chart: {
      height: 320,
      width: "100%",
      type: "donut"
    },
    stroke: {
      colors: ["transparent"]
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: 20
            },
            total: {
              showAlways: true,
              show: true,
              label: "Unique visitors",
              fontFamily: "Inter, sans-serif",
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                }, 0);
                return `${sum}k`;
              }
            },
            value: {
              show: true,
              fontFamily: "Inter, sans-serif",
              offsetY: -20,
              formatter: function (value) {
                return value + "k";
              }
            }
          },
          size: "80%"
        }
      }
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: ["Direct", "Sponsor", "Affiliate", "Email marketing"],
    dataLabels: {
      enabled: false
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif"
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        }
      }
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + "k";
        }
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      }
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="flex w-full items-start justify-between">
    <div class="flex-col items-center">
      <div class="mb-1 flex items-center">
        <h5 class="me-1 text-xl leading-none font-bold text-gray-900 dark:text-white">Website traffic</h5>
        <InfoCircleSolid id="donut1" class="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
        <Popover triggeredBy="#donut1" class="z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <div class="space-y-2 p-3">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <ArrowDownToBracketOutline class="h-3.5 w-3.5" />
      <Tooltip>Download CSV</Tooltip>
    </div>
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        Traffic analysis
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Radial chart

To create a radial chart with multiple data entries you need to set the type: "radialBar".

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";

  let isOpen = false;

  const options: ApexOptions = {
    series: [90, 85, 70],
    colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],
    chart: {
      height: "380px",
      width: "100%",
      type: "radialBar",
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        track: {
          background: "#E5E7EB"
        },
        dataLabels: {
          show: false
        },
        hollow: {
          margin: 0,
          size: "32%"
        }
      }
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -23,
        bottom: -20
      }
    },
    labels: ["Done", "In progress", "To do"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily: "Inter, sans-serif"
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    yaxis: {
      show: false,
      labels: {
        formatter: function (value) {
          return value + "%";
        }
      }
    }
  };
</script>

<Card class="p-4 md:p-6">
  <div class="flex w-full items-start justify-between">
    <div class="flex-col items-center">
      <div class="mb-1 flex items-center">
        <h5 class="me-1 text-xl leading-none font-bold text-gray-900 dark:text-white">Your team's progress</h5>
        <InfoCircleSolid id="donut1" class="ms-1 h-3.5 w-3.5 cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
        <Popover triggeredBy="#donut1" class="z-10 w-72 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 shadow-xs dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <div class="space-y-2 p-3">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="ms-1.5 h-2 w-2" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex items-center justify-end">
      <ArrowDownToBracketOutline class="h-3.5 w-3.5" />
      <Tooltip>Download CSV</Tooltip>
    </div>
  </div>

  <div class="rounded-lg bg-gray-50 p-3 dark:bg-gray-700">
    <div class="mb-2 grid grid-cols-3 gap-3">
      <dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-orange-50 dark:bg-gray-600">
        <dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600 dark:bg-gray-500 dark:text-orange-300">12</dt>
        <dd class="text-sm font-medium text-orange-600 dark:text-orange-300">To do</dd>
      </dl>
      <dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-teal-50 dark:bg-gray-600">
        <dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 text-sm font-medium text-teal-600 dark:bg-gray-500 dark:text-teal-300">23</dt>
        <dd class="text-sm font-medium text-teal-600 dark:text-teal-300">In progress</dd>
      </dl>
      <dl class="flex h-[78px] flex-col items-center justify-center rounded-lg bg-blue-50 dark:bg-gray-600">
        <dt class="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-sm font-medium text-blue-600 dark:bg-gray-500 dark:text-blue-300">64</dt>
        <dd class="text-sm font-medium text-blue-600 dark:text-blue-300">Done</dd>
      </dl>
    </div>
    <button onclick={() => (isOpen = !isOpen)} type="button" class="inline-flex items-center text-xs font-medium text-gray-500 hover:underline dark:text-gray-400">Show more details <ChevronDownOutline class="ms-1 h-2 w-2" /></button>
    {#if isOpen}
      <div id="more-details" class="mt-3 space-y-2 border-t border-gray-200 pt-3 dark:border-gray-600">
        <dl class="flex items-center justify-between">
          <dt class="text-sm font-normal text-gray-500 dark:text-gray-400">Average task completion rate:</dt>
          <dd class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
            <svg class="me-1.5 h-2.5 w-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg>
            57%
          </dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-sm font-normal text-gray-500 dark:text-gray-400">Days until sprint ends:</dt>
          <dd class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-300">13 days</dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-sm font-normal text-gray-500 dark:text-gray-400">Next meeting:</dt>
          <dd class="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 dark:bg-gray-600 dark:text-gray-300">Thursday</dd>
        </dl>
      </div>
    {/if}
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between pt-5">
      <Button class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
      <Dropdown simple class="w-40" offset={-6}>
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="hover:text-primary-700 dark:hover:text-primary-500 rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        PROGRESS REPORT
        <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
      </A>
    </div>
  </div>
</Card>
```

## Binding chart

```svelte
<script lang="ts">
  import type { ApexOptions } from "apexcharts";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { onMount, onDestroy } from "svelte";
  import { Card } from "flowbite-svelte";

  const initialData = [6500, 6418, 6456, 6526, 6356, 6456];
  const alternateData = [5500, 5418, 5456, 4526, 4356, 3456];

  let options: ApexOptions = {
    chart: {
      height: 400,
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    series: [
      {
        name: "New users",
        data: initialData,
        color: "#1A56DB"
      }
    ]
  };

  let intervalId: ReturnType<typeof setInterval>;
  let isUsingInitialData = true;

  function toggleData() {
    // Toggle between the two datasets
    const newData = isUsingInitialData ? alternateData : initialData;
    isUsingInitialData = !isUsingInitialData;

    // Create a completely new options object to trigger reactivity
    options = {
      ...options,
      series: [
        {
          name: "New users",
          data: newData,
          color: "#1A56DB"
        }
      ]
    };
  }

  onMount(() => {
    intervalId = setInterval(toggleData, 3000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<Card class="p-4 md:p-6">
  <Chart bind:options />
</Card>
```

## Component data

The component has the following props, type, and default values. See [types page](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/types.ts) for type information.

<CompoAttributesViewer {components} plugin="chart"/>

## References

- [@flowbite-svelte-plugins/chart](https://github.com/shinokada/flowbite-svelte-plugins/blob/main/apps/flowbite-svelte-chart/src/lib/Chart.svelte)
