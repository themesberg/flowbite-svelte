<script lang="ts">
  import type { ApexOptions } from 'apexcharts';
  import { Chart, Card, A, Button, Dropdown, DropdownLi, DropdownUl, uiHelpers } from '$lib';
  import { UsersGroupSolid, ArrowUpOutline, ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';
  let dropdown = uiHelpers();
  let isOpen = $state(false);
  let toggle = dropdown.toggle;

  let dropdown2 = uiHelpers();
  let isOpen2 = $state(false);
  let toggle2 = dropdown2.toggle;

  let dropdown3 = uiHelpers();
  let isOpen3 = $state(false);
  let toggle3 = dropdown3.toggle;

  $effect(() => {
    isOpen = dropdown.isOpen;
    isOpen2 = dropdown2.isOpen;
    isOpen3 = dropdown3.isOpen;
  });

  let options = {
    chart: {
      height: '400px',
      maxWidth: '100%',
      type: 'area' as 'area',
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

  const optionCol = {
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
      type: 'bar' as 'bar',
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
        borderRadiusApplication: 'end' as 'end',
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
  const optionBar = {
    series: [
      {
        name: 'Income',
        color: '#31C48D',
        data: [1420, 1620, 1820, 1420, 1650, 2120]
      },
      {
        name: 'Expense',
        data: [788, 810, 866, 788, 1100, 1200],
        color: '#F05252'
      }
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      type: 'bar' as 'bar',
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
        borderRadiusApplication: 'end' as 'end',
        borderRadius: 6,
        dataLabels: {
          position: 'top'
        }
      }
    },
    legend: {
      show: true,
      position: 'bottom' as 'bottom'
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value: number) {
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
        formatter: function (value: string) {
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

  import HighlightCompo from '../../utils/HighlightCompo.svelte';
  import CodeWrapper from '../../utils/CodeWrapper.svelte';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<H1>Chart</H1>
<H2>Setup</H2>
<HighlightCompo code={modules['./md/setup.md'] as string} />
<H2>Area chart</H2>
<CodeWrapper class="flex items-start justify-center">
  <Card>
    <div class="flex justify-between">
      <div>
        <h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">32.4k</h5>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
      </div>
      <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">
        12%
        <ChevronRightOutline class="ms-1 h-3 w-3" />
      </div>
    </div>
    <Chart {options} />
    <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pt-5">
        <Button onclick={toggle} class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
        <div class="relative">
          <Dropdown divClass="absolute top-[5px] -left-[180px]" dropdownStatus={isOpen}>
            {#snippet children()}
              <DropdownUl>
                <DropdownLi href="/">Yesterday</DropdownLi>
                <DropdownLi href="/">Today</DropdownLi>
                <DropdownLi href="/">Last 7 days</DropdownLi>
                <DropdownLi href="/">Last 30 days</DropdownLi>
                <DropdownLi href="/">Last 90 days</DropdownLi>
              </DropdownUl>
            {/snippet}
          </Dropdown>
        </div>
        <A href="/" class="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700">
          Users Report
          <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
        </A>
      </div>
    </div>
  </Card>
</CodeWrapper>
<HighlightCompo code={modules['./md/area-chart.md'] as string} />

<H2>Column chart</H2>
<CodeWrapper class="flex items-start justify-center">
  <Card>
    <div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
      <div class="flex items-center">
        <div class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
          <UsersGroupSolid class="h-6 w-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div>
          <h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5>
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
    <Chart options={optionCol} />
    <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pt-5">
        <Button onclick={toggle2} class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
        <div class="relative">
          <Dropdown divClass="absolute top-[5px] -left-[180px]" dropdownStatus={isOpen2}>
            {#snippet children()}
              <DropdownLi href="/">Yesterday</DropdownLi>
              <DropdownLi href="/">Today</DropdownLi>
              <DropdownLi href="/">Last 7 days</DropdownLi>
              <DropdownLi href="/">Last 30 days</DropdownLi>
              <DropdownLi href="/">Last 90 days</DropdownLi>
            {/snippet}
          </Dropdown>
        </div>
        <A href="/" class="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700">
          Leads Report
          <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
        </A>
      </div>
    </div>
  </Card>
</CodeWrapper>
<HighlightCompo code={modules['./md/column-chart.md'] as string} />

<H2>Bar chart</H2>
<CodeWrapper class="flex items-start justify-center">
  <Card>
    <div class="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
      <dl>
        <dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Profit</dt>
        <dd class="text-3xl font-bold leading-none text-gray-900 dark:text-white">$5,405</dd>
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
        <dd class="text-xl font-bold leading-none text-green-500 dark:text-green-400">$23,635</dd>
      </dl>
      <dl>
        <dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Expense</dt>
        <dd class="text-xl font-bold leading-none text-red-600 dark:text-red-500">-$18,230</dd>
      </dl>
    </div>

    <Chart options={optionBar} />
    <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700">
      <div class="flex items-center justify-between pt-5">
        <Button onclick={toggle3} class="inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent">Last 7 days<ChevronDownOutline class="m-2.5 ms-1.5 w-2.5" /></Button>
        <div class="relative">
          <Dropdown divClass="absolute top-[5px] -left-[180px]" dropdownStatus={isOpen3}>
            {#snippet children()}
              <DropdownLi href="/">Yesterday</DropdownLi>
              <DropdownLi href="/">Today</DropdownLi>
              <DropdownLi href="/">Last 7 days</DropdownLi>
              <DropdownLi href="/">Last 30 days</DropdownLi>
              <DropdownLi href="/">Last 90 days</DropdownLi>
            {/snippet}
          </Dropdown>
        </div>
        <A href="/" class="rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700">
          Leads Report
          <ChevronRightOutline class="ms-1.5 h-2.5 w-2.5" />
        </A>
      </div>
    </div>
  </Card>
</CodeWrapper>
<HighlightCompo code={modules['./md/bar-chart.md'] as string} />
