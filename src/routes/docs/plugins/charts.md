---
layout: componentLayout
title: Svelte Charts - Flowbite
breadcrumb_title: Svelte Charts
component_title: Charts
dir: components
description: Use the chart and graph components from Flowbite-Svelte built with Tailwind CSS and ApexCharts to choose from line, area, bar, column, pie, and radial charts
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks } from '../../utils'
  import componentData1 from '../../component-data/Chart.json'
  import componentData2 from '../../component-data/Card.json'
  const components = 'Chart, Card'
</script>

## Area chart

Use this example to show a basic area chart.

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';

  let options = {
    chart: {
      height: '400px',
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
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
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: '#1C64F2',
        gradientToColors: ['#1C64F2']
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
        name: 'New users',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB'
      }
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
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

<Card>
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <ChevronRightOutline class="w-6 h-6 ms-1" />
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Users Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Line chart

To create a double line chart check the example below.

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
  import { InfoCircleSolid, ChevronRightOutline, ChevronDownOutline, FileLinesSolid } from 'flowbite-svelte-icons';

  let options = {
    chart: {
      height: '400px',
      maxWidth: '100%',
      type: 'line',
      fontFamily: 'Inter, sans-serif',
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
      curve: 'smooth'
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
        name: 'Clicks',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB'
      },
      {
        name: 'CPC',
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: '#7E3AF2'
      }
    ],
    legend: {
      show: false
    },
    xaxis: {
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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

<Card>
  <div class="flex justify-between mb-5">
    <div class="grid gap-4 grid-cols-2">
      <div>
        <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
          Clicks
          <InfoCircleSolid id="b1" class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" />
          <Popover triggeredBy="#b1" class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 z-10">
            <div class="p-3 space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">Clicks growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <A href="/"
                >Read more
                <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
            </div>
          </Popover>
        </h5>
        <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold">42,3k</p>
      </div>
      <div>
        <h5 class="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
          CPC
          <InfoCircleSolid id="b2" class="w-3 h-3 text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" />
          <Popover triggeredBy="#b2" class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 z-10">
            <div class="p-3 space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">CPC growth - Incremental</h3>
              <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
              <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
              <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
              <A href="/">Read more <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
            </div>
          </Popover>
        </h5>
        <p class="text-gray-900 dark:text-white text-2xl leading-none font-bold">$5.40</p>
      </div>
    </div>
    <div>
      <Button color="light" class="px-3 py-2">Last week<ChevronDownOutline class="w-2.5 h-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-2.5">
    <div class="pt-5">
      <Button href="/" class="px-4 py-2.5 text-sm font-medium text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        <FileLinesSolid class="w-3.5 h-3.5 text-white me-2" />
        View full report
      </Button>
    </div>
  </div>
</Card>
```

## Column chart

You can represent multiple data entries using columns by setting the type: "bar" option

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { UsersGroupOutline, ArrowUpOutline, ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  const options = {
    colors: ['#1A56DB', '#FDBA8C'],
    series: [
      {
        name: 'Organic',
        color: '#1A56DB',
        data: [
          { x: 'Mon', y: 231 },
          { x: 'Tue', y: 122 },
          { x: 'Wed', y: 63 },
          { x: 'Thu', y: 421 },
          { x: 'Fri', y: 122 },
          { x: 'Sat', y: 323 },
          { x: 'Sun', y: 111 }
        ]
      },
      {
        name: 'Social media',
        color: '#FDBA8C',
        data: [
          { x: 'Mon', y: 232 },
          { x: 'Tue', y: 113 },
          { x: 'Wed', y: 341 },
          { x: 'Thu', y: 224 },
          { x: 'Fri', y: 522 },
          { x: 'Sat', y: 411 },
          { x: 'Sun', y: 243 }
        ]
      }
    ],
    chart: {
      type: 'bar',
      height: '320px',
      fontFamily: 'Inter, sans-serif',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadiusApplication: 'end',
        borderRadius: 8
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 1
        }
      }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ['transparent']
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
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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

<Card>
  <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
        <UsersGroupOutline class="w-6 h-6 text-gray-500 dark:text-gray-400" />
      </div>
      <div>
        <h5 class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">3.4k</h5>
        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
      </div>
    </div>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <ArrowUpOutline class="w-2.5 h-2.5 me-1.5" />
        42.5%
      </span>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <dl class="flex items-center">
      <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Money spent:</dt>
      <dd class="text-gray-900 text-sm dark:text-white font-semibold">$3,232</dd>
    </dl>
    <dl class="flex items-center justify-end">
      <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">Conversion rate:</dt>
      <dd class="text-gray-900 text-sm dark:text-white font-semibold">1.2%</dd>
    </dl>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Bar chart

Create a horizontal bar chart with as many data series as you like by setting the type: "bar" chart type.

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ArrowUpOutline, ChevronDownOutline, ChevronRightOutline } from 'flowbite-svelte-icons';

  const options = {
    series: [
      {
        name: 'Income',
        color: '#31C48D',
        data: ['1420', '1620', '1820', '1420', '1650', '2120']
      },
      {
        name: 'Expense',
        data: ['788', '810', '866', '788', '1100', '1200'],
        color: '#F05252'
      }
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      type: 'bar',
      width: '100%',
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
        columnWidth: '100%',
        borderRadiusApplication: 'end',
        borderRadius: 6,
        dataLabels: {
          position: 'top'
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return '$' + value;
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        },
        formatter: function (value) {
          return '$' + value;
        }
      },
      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
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
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
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

<Card>
  <div class="flex justify-between border-gray-200 border-b dark:border-gray-700 pb-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Profit</dt>
      <dd class="leading-none text-3xl font-bold text-gray-900 dark:text-white">$5,405</dd>
    </dl>
    <div>
      <span class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
        <ArrowUpOutline class="w-2.5 h-2.5 me-1.5" />
        Profit rate 23.5%
      </span>
    </div>
  </div>

  <div class="grid grid-cols-2 py-3">
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Income</dt>
      <dd class="leading-none text-xl font-bold text-green-500 dark:text-green-400">$23,635</dd>
    </dl>
    <dl>
      <dt class="text-base font-normal text-gray-500 dark:text-gray-400 pb-1">Expense</dt>
      <dd class="leading-none text-xl font-bold text-red-600 dark:text-red-500">-$18,230</dd>
    </dl>
  </div>

  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Pie chart

Create a pie chart with multiple data series by setting the type: "pie" chart type option.

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover } from 'flowbite-svelte';
  import { InfoCircleSolid, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid, TrashBinSolid, DotsHorizontalOutline } from 'flowbite-svelte-icons';

  const options = {
    series: [52.8, 26.8, 20.4],
    colors: ['#1C64F2', '#16BDCA', '#9061F9'],
    chart: {
      height: 420,
      width: '100%',
      type: 'pie'
    },
    stroke: {
      colors: ['white'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        labels: {
          show: true
        },
        size: '100%',
        dataLabels: {
          offset: -25
        }
      }
    },
    labels: ['Direct', 'Organic search', 'Referrals'],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: 'Inter, sans-serif'
      }
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
        }
      }
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + '%';
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

<Card>
  <div class="flex justify-between items-start w-full">
    <div class="flex-col items-center">
      <div class="flex items-center mb-1">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Website traffic</h5>
        <InfoCircleSolid id="pie1" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" />
        <Popover triggeredBy="#pie1" class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 z-10">
          <div class="p-3 space-y-2">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <DotsHorizontalOutline id="dots-menu" class="dots-menu dark:text-white" />
      <Dropdown triggeredBy="#dots-menu" class="w-44" offset="-6">
        <DropdownItem><PenSolid class="inline w-3 h-3 me-2" /> Edit widget</DropdownItem>
        <DropdownItem><DownloadSolid class="inline w-3 h-3 me-2" />Dropdown data</DropdownItem>
        <DropdownItem><ShareNodesSolid class="inline w-3 h-3 me-2" />Add to repository</DropdownItem>
        <DropdownItem><TrashBinSolid class="inline w-3 h-3 me-2" />Delete widget</DropdownItem>
      </Dropdown>
    </div>
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Traffic analysis
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Donut chart

Set the chart type: "donut" to create a donut chart and copy the options from the example below to style the elements such as the data series, legends and labels for the X and Y axis.

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid } from 'flowbite-svelte-icons';

  const options = {
    series: [35.1, 23.5, 2.4, 5.4],
    colors: ['#1C64F2', '#16BDCA', '#FDBA8C', '#E74694'],
    chart: {
      height: 320,
      width: '100%',
      type: 'donut'
    },
    stroke: {
      colors: ['transparent'],
      lineCap: ''
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: 20
            },
            total: {
              showAlways: true,
              show: true,
              label: 'Unique visitors',
              fontFamily: 'Inter, sans-serif',
              formatter: function (w) {
                const sum = w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
                return `${sum}k`;
              }
            },
            value: {
              show: true,
              fontFamily: 'Inter, sans-serif',
              offsetY: -20,
              formatter: function (value) {
                return value + 'k';
              }
            }
          },
          size: '80%'
        }
      }
    },
    grid: {
      padding: {
        top: -2
      }
    },
    labels: ['Direct', 'Sponsor', 'Affiliate', 'Email marketing'],
    dataLabels: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      fontFamily: 'Inter, sans-serif'
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k';
        }
      }
    },
    xaxis: {
      labels: {
        formatter: function (value) {
          return value + 'k';
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

<Card>
  <div class="flex justify-between items-start w-full">
    <div class="flex-col items-center">
      <div class="flex items-center mb-1">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Website traffic</h5>
        <InfoCircleSolid id="donut1" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" />
        <Popover triggeredBy="#donut1" class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 z-10">
          <div class="p-3 space-y-2">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <ArrowDownToBracketOutline class="w-3.5 h-3.5" />
      <Tooltip>Download CSV</Tooltip>
    </div>
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Traffic analysis
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Radial chart

To create a radial chart with multiple data entries you need to set the type: "radialBar".

```svelte example class="flex justify-center"
<script>
  import { Chart, Card, A, Button, Dropdown, DropdownItem, Popover, Tooltip } from 'flowbite-svelte';
  import { InfoCircleSolid, ArrowDownToBracketOutline, ChevronDownOutline, ChevronRightOutline, PenSolid, DownloadSolid, ShareNodesSolid } from 'flowbite-svelte-icons';

  let isOpen = false;

  const options = {
    series: [90, 85, 70],
    colors: ['#1C64F2', '#16BDCA', '#FDBA8C'],
    chart: {
      height: '380px',
      width: '100%',
      type: 'radialBar',
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      radialBar: {
        track: {
          background: '#E5E7EB'
        },
        dataLabels: {
          show: false
        },
        hollow: {
          margin: 0,
          size: '32%'
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
    labels: ['Done', 'In progress', 'To do'],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'Inter, sans-serif'
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
          return value + '%';
        }
      }
    }
  };
</script>

<Card>
  <div class="flex justify-between items-start w-full">
    <div class="flex-col items-center">
      <div class="flex items-center mb-1">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white me-1">Your team's progress</h5>
        <InfoCircleSolid id="donut1" class="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1" />
        <Popover triggeredBy="#donut1" class="text-sm text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400 z-10">
          <div class="p-3 space-y-2">
            <h3 class="font-semibold text-gray-900 dark:text-white">Activity growth - Incremental</h3>
            <p>Report helps navigate cumulative growth of community activities. Ideally, the chart should have a growing trend, as stagnating chart signifies a significant decrease of community activity.</p>
            <h3 class="font-semibold text-gray-900 dark:text-white">Calculation</h3>
            <p>For each date bucket, the all-time volume of activities is calculated. This means that activities in period n contain all activities up to period n, plus the activities generated by your community in period.</p>
            <A href="/">Read more <ChevronRightOutline class="w-2 h-2 ms-1.5" /></A>
          </div>
        </Popover>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <ArrowDownToBracketOutline class="w-3.5 h-3.5" />
      <Tooltip>Download CSV</Tooltip>
    </div>
  </div>

  <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
    <div class="grid grid-cols-3 gap-3 mb-2">
      <dl class="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt class="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
        <dd class="text-orange-600 dark:text-orange-300 text-sm font-medium">To do</dd>
      </dl>
      <dl class="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt class="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
        <dd class="text-teal-600 dark:text-teal-300 text-sm font-medium">In progress</dd>
      </dl>
      <dl class="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt class="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
        <dd class="text-blue-600 dark:text-blue-300 text-sm font-medium">Done</dd>
      </dl>
    </div>
    <button on:click={() => (isOpen = !isOpen)} type="button" class="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center">Show more details <ChevronDownOutline class="w-2 h-2 ms-1" /> </button>
    {#if isOpen}
      <div id="more-details" class="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2">
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Average task completion rate:</dt>
          <dd class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4" />
            </svg> 57%
          </dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Days until sprint ends:</dt>
          <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">13 days</dd>
        </dl>
        <dl class="flex items-center justify-between">
          <dt class="text-gray-500 dark:text-gray-400 text-sm font-normal">Next meeting:</dt>
          <dd class="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">Thursday</dd>
        </dl>
      </div>
    {/if}
  </div>

  <Chart {options} class="py-6" />

  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <Dropdown class="w-40" offset="-6">
        <DropdownItem>Yesterday</DropdownItem>
        <DropdownItem>Today</DropdownItem>
        <DropdownItem>Last 7 days</DropdownItem>
        <DropdownItem>Last 30 days</DropdownItem>
        <DropdownItem>Last 90 days</DropdownItem>
      </Dropdown>
      <A href="/" class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        PROGRESS REPORT
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
```

## Binding chart

```svelte example class="flex justify-center"
<script lang="ts">
  import { Chart } from 'flowbite-svelte';
  import { onMount, onDestroy } from 'svelte';
  
  let chart: ApexCharts;
  
  const initialData = [6500, 6418, 6456, 6526, 6356, 6456];
  const alternateData = [5500, 5418, 5456, 4526, 4356, 3456];
  
  let options = {
    chart: {
      height: '400px',
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
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
        name: 'New users',
        data: initialData,
        color: '#1A56DB'
      }
    ]
  };
  
  let intervalId: number;
  
  function toggleData() {
    const series = [
      {
        ...options.series[0],
        data: options.series[0].data === initialData ? alternateData : initialData
      }
    ];
    chart.updateSeries(series);
  }
  
  onMount(() => {
    intervalId = setInterval(toggleData, 5000);
  });
  
  onDestroy(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <Chart {options} bind:chart />
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Chart styling

- Use the `class` prop to overwrite `div` tag.

### Card styling

- Use the `class` prop to overwrite `divClass`.

## Component data

<CompoAttributesViewer {components}/>

## References

<GitHubCompoLinks {components}/>
