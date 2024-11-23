import { Q as push, W as attr, S as pop, a1 as getContext, a0 as spread_attributes, V as escape_html } from "../../../../chunks/index.js";
import { u as uiHelpers } from "../../../../chunks/uiHelpers.svelte.js";
import "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { C as Card } from "../../../../chunks/Card.js";
import { D as Dropdown, a as DropdownUl } from "../../../../chunks/DropdownUl.js";
import { D as DropdownLi } from "../../../../chunks/DropdownLi.js";
import { A } from "../../../../chunks/A.js";
import { twMerge } from "tailwind-merge";
import { C as ChevronDownOutline } from "../../../../chunks/ChevronDownOutline.js";
import { C as ChevronRightOutline } from "../../../../chunks/ChevronRightOutline.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
function Chart($$payload, $$props) {
  push();
  let { options, class: classname } = $$props;
  $$payload.out += `<div${attr("class", classname)}></div>`;
  pop();
}
function ArrowUpOutline($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    strokeWidth = ctx.strokeWidth || "2",
    desc,
    class: className,
    ariaLabel = "arrow up outline",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"${attr("stroke-width", strokeWidth)} d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>`;
  pop();
}
function UsersGroupSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "users group solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"></path></svg>`;
  pop();
}
const __vite_glob_0_0 = `<Card>
  <div class="flex justify-between">
    <div>
      <h5 class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">32.4k</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p>
    </div>
    <div class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
      12%
      <ChevronRightOutline class="w-3 h-3 ms-1" />
    </div>
  </div>
  <Chart {options} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button onclick={toggle} btnclass="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <div class="relative">
        <Dropdown divclass="absolute top-[5px] -left-[180px]" {isOpen}>
          {#snippet children()}
          <DropdownItem href='/'>Yesterday</DropdownItem>
          <DropdownItem href='/'>Today</DropdownItem>
          <DropdownItem href='/'>Last 7 days</DropdownItem>
          <DropdownItem href='/'>Last 30 days</DropdownItem>
          <DropdownItem href='/'>Last 90 days</DropdownItem>
          {/snippet}
        </Dropdown>
      </div>
      <A href="/" aclass="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Users Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
`;
const __vite_glob_0_1 = `<Card>
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

  <Chart options={optionBar} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button onclick={toggle3} btnclass="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <div class="relative">
        <Dropdown divclass="absolute top-[5px] -left-[180px]" isOpen={isOpen3}>
          {#snippet children()}
          <DropdownItem href='/'>Yesterday</DropdownItem>
          <DropdownItem href='/'>Today</DropdownItem>
          <DropdownItem href='/'>Last 7 days</DropdownItem>
          <DropdownItem href='/'>Last 30 days</DropdownItem>
          <DropdownItem href='/'>Last 90 days</DropdownItem>
          {/snippet}
        </Dropdown>
      </div>
      <A href="/" aclass="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
`;
const __vite_glob_0_2 = `<Card>
  <div class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center">
      <div class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
        <UsersGroupSolid class="w-6 h-6 text-gray-500 dark:text-gray-400" />
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
  <Chart options={optionCol} />
  <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
    <div class="flex justify-between items-center pt-5">
      <Button onclick={toggle2} btnclass="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0">Last 7 days<ChevronDownOutline class="w-2.5 m-2.5 ms-1.5" /></Button>
      <div class="relative">
        <Dropdown divclass="absolute top-[5px] -left-[180px]" isOpen={isOpen2}>
          {#snippet children()}
          <DropdownItem href='/'>Yesterday</DropdownItem>
          <DropdownItem href='/'>Today</DropdownItem>
          <DropdownItem href='/'>Last 7 days</DropdownItem>
          <DropdownItem href='/'>Last 30 days</DropdownItem>
          <DropdownItem href='/'>Last 90 days</DropdownItem>
          {/snippet}
        </Dropdown>
      </div>
      <A href="/" aclass="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline">
        Leads Report
        <ChevronRightOutline class="w-2.5 h-2.5 ms-1.5" />
      </A>
    </div>
  </div>
</Card>
`;
const __vite_glob_0_3 = "<script>\n  import { Chart, Card, A, Button, Dropdown, DropdownItem, uiHelpers } from 'svelte-5-ui-lib';\n  import { UsersGroupSolid, ArrowUpOutline, ChevronRightOutline, ChevronDownOutline } from 'flowbite-svelte-icons';\n  \n	let dropdown = uiHelpers();\n	let isOpen = $state(false);\n	let toggle = dropdown.toggle;\n\n  let dropdown2 = uiHelpers();\n  let isOpen2 = $state(false);\n	let toggle2 = dropdown2.toggle;\n\n  let dropdown3 = uiHelpers();\n  let isOpen3 = $state(false);\n	let toggle3 = dropdown3.toggle;\n	\n  $effect(() => {\n		isOpen = dropdown.isOpen;\n    isOpen2 = dropdown2.isOpen;\n    isOpen3 = dropdown3.isOpen;\n	});\n\n  let options = {\n    chart: {\n      height: '400px',\n      maxWidth: '100%',\n      type: 'area',\n      fontFamily: 'Inter, sans-serif',\n      dropShadow: {\n        enabled: false\n      },\n      toolbar: {\n        show: false\n      }\n    },\n    tooltip: {\n      enabled: true,\n      x: {\n        show: false\n      }\n    },\n    fill: {\n      type: 'gradient',\n      gradient: {\n        opacityFrom: 0.55,\n        opacityTo: 0,\n        shade: '#1C64F2',\n        gradientToColors: ['#1C64F2']\n      }\n    },\n    dataLabels: {\n      enabled: false\n    },\n    stroke: {\n      width: 6\n    },\n    grid: {\n      show: false,\n      strokeDashArray: 4,\n      padding: {\n        left: 2,\n        right: 2,\n        top: 0\n      }\n    },\n    series: [\n      {\n        name: 'New users',\n        data: [6500, 6418, 6456, 6526, 6356, 6456],\n        color: '#1A56DB'\n      }\n    ],\n    xaxis: {\n      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],\n      labels: {\n        show: false\n      },\n      axisBorder: {\n        show: false\n      },\n      axisTicks: {\n        show: false\n      }\n    },\n    yaxis: {\n      show: false\n    }\n  };\n\n  const optionCol = {\n    colors: ['#1A56DB', '#FDBA8C'],\n    series: [\n      {\n        name: 'Organic',\n        color: '#1A56DB',\n        data: [\n          { x: 'Mon', y: 231 },\n          { x: 'Tue', y: 122 },\n          { x: 'Wed', y: 63 },\n          { x: 'Thu', y: 421 },\n          { x: 'Fri', y: 122 },\n          { x: 'Sat', y: 323 },\n          { x: 'Sun', y: 111 }\n        ]\n      },\n      {\n        name: 'Social media',\n        color: '#FDBA8C',\n        data: [\n          { x: 'Mon', y: 232 },\n          { x: 'Tue', y: 113 },\n          { x: 'Wed', y: 341 },\n          { x: 'Thu', y: 224 },\n          { x: 'Fri', y: 522 },\n          { x: 'Sat', y: 411 },\n          { x: 'Sun', y: 243 }\n        ]\n      }\n    ],\n    chart: {\n      type: 'bar',\n      height: '320px',\n      fontFamily: 'Inter, sans-serif',\n      toolbar: {\n        show: false\n      }\n    },\n    plotOptions: {\n      bar: {\n        horizontal: false,\n        columnWidth: '70%',\n        borderRadiusApplication: 'end',\n        borderRadius: 8\n      }\n    },\n    tooltip: {\n      shared: true,\n      intersect: false,\n      style: {\n        fontFamily: 'Inter, sans-serif'\n      }\n    },\n    states: {\n      hover: {\n        filter: {\n          type: 'darken',\n          value: 1\n        }\n      }\n    },\n    stroke: {\n      show: true,\n      width: 0,\n      colors: ['transparent']\n    },\n    grid: {\n      show: false,\n      strokeDashArray: 4,\n      padding: {\n        left: 2,\n        right: 2,\n        top: -14\n      }\n    },\n    dataLabels: {\n      enabled: false\n    },\n    legend: {\n      show: false\n    },\n    xaxis: {\n      floating: false,\n      labels: {\n        show: true,\n        style: {\n          fontFamily: 'Inter, sans-serif',\n          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'\n        }\n      },\n      axisBorder: {\n        show: false\n      },\n      axisTicks: {\n        show: false\n      }\n    },\n    yaxis: {\n      show: false\n    },\n    fill: {\n      opacity: 1\n    }\n  };\n  const optionBar = {\n    series: [\n      {\n        name: 'Income',\n        color: '#31C48D',\n        data: ['1420', '1620', '1820', '1420', '1650', '2120']\n      },\n      {\n        name: 'Expense',\n        data: ['788', '810', '866', '788', '1100', '1200'],\n        color: '#F05252'\n      }\n    ],\n    chart: {\n      sparkline: {\n        enabled: false\n      },\n      type: 'bar',\n      width: '100%',\n      height: 400,\n      toolbar: {\n        show: false\n      }\n    },\n    fill: {\n      opacity: 1\n    },\n    plotOptions: {\n      bar: {\n        horizontal: true,\n        columnWidth: '100%',\n        borderRadiusApplication: 'end',\n        borderRadius: 6,\n        dataLabels: {\n          position: 'top'\n        }\n      }\n    },\n    legend: {\n      show: true,\n      position: 'bottom'\n    },\n    dataLabels: {\n      enabled: false\n    },\n    tooltip: {\n      shared: true,\n      intersect: false,\n      formatter: function (value) {\n        return '$' + value;\n      }\n    },\n    xaxis: {\n      labels: {\n        show: true,\n        style: {\n          fontFamily: 'Inter, sans-serif',\n          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'\n        },\n        formatter: function (value) {\n          return '$' + value;\n        }\n      },\n      categories: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],\n      axisTicks: {\n        show: false\n      },\n      axisBorder: {\n        show: false\n      }\n    },\n    yaxis: {\n      labels: {\n        show: true,\n        style: {\n          fontFamily: 'Inter, sans-serif',\n          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'\n        }\n      }\n    },\n    grid: {\n      show: true,\n      strokeDashArray: 4,\n      padding: {\n        left: 2,\n        right: 2,\n        top: -20\n      }\n    }\n  };\n<\/script>\n";
function _page($$payload, $$props) {
  push();
  let dropdown = uiHelpers();
  let isOpen = false;
  let toggle = dropdown.toggle;
  let dropdown2 = uiHelpers();
  let isOpen2 = false;
  let toggle2 = dropdown2.toggle;
  let dropdown3 = uiHelpers();
  let isOpen3 = false;
  let toggle3 = dropdown3.toggle;
  const options = {
    chart: {
      height: "400px",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: { enabled: false },
      toolbar: { show: false }
    },
    tooltip: { enabled: true, x: { show: false } },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"]
      }
    },
    dataLabels: { enabled: false },
    stroke: { width: 6 },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: 0 }
    },
    series: [
      {
        name: "New users",
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: "#1A56DB"
      }
    ],
    xaxis: {
      categories: [
        "01 February",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February"
      ],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false }
  };
  const optionCol = {
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
      toolbar: { show: false }
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
      style: { fontFamily: "Inter, sans-serif" }
    },
    states: {
      hover: { filter: { type: "darken", value: 1 } }
    },
    stroke: {
      show: true,
      width: 0,
      colors: ["transparent"]
    },
    grid: {
      show: false,
      strokeDashArray: 4,
      padding: { left: 2, right: 2, top: -14 }
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    xaxis: {
      floating: false,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        }
      },
      axisBorder: { show: false },
      axisTicks: { show: false }
    },
    yaxis: { show: false },
    fill: { opacity: 1 }
  };
  const optionBar = {
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
      sparkline: { enabled: false },
      type: "bar",
      width: "100%",
      height: 400,
      toolbar: { show: false }
    },
    fill: { opacity: 1 },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: { position: "top" }
      }
    },
    legend: { show: true, position: "bottom" },
    dataLabels: { enabled: false },
    tooltip: {
      shared: true,
      intersect: false,
      formatter(value) {
        return "$" + value;
      }
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400"
        },
        formatter(value) {
          return "$" + value;
        }
      },
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: { show: false },
      axisBorder: { show: false }
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
      padding: { left: 2, right: 2, top: -20 }
    }
  };
  const modules = /* @__PURE__ */ Object.assign({
    "./md/area-chart.md": __vite_glob_0_0,
    "./md/bar-chart.md": __vite_glob_0_1,
    "./md/column-chart.md": __vite_glob_0_2,
    "./md/setup.md": __vite_glob_0_3
  });
  H1($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Chart`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Setup`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, { code: modules["./md/setup.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Area chart`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CodeWrapper($$payload, {
    class: "flex items-start justify-center",
    children: ($$payload2) => {
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex justify-between"><div><h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">32.4k</h5> <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p></div> <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">12% `;
          ChevronRightOutline($$payload3, { class: "ms-1 h-3 w-3" });
          $$payload3.out += `<!----></div></div> `;
          Chart($$payload3, { options });
          $$payload3.out += `<!----> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">`;
          Button($$payload3, {
            onclick: toggle,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Last 7 days`;
              ChevronDownOutline($$payload4, { class: "m-2.5 ms-1.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="relative">`;
          {
            let children = function($$payload4) {
              DropdownUl($$payload4, {
                children: ($$payload5) => {
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Yesterday`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Today`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Last 7 days`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Last 30 days`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  DropdownLi($$payload5, {
                    href: "/",
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->Last 90 days`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            };
            Dropdown($$payload3, {
              divClass: "absolute top-[5px] -left-[180px]",
              dropdownStatus: isOpen,
              children,
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!----></div> `;
          A($$payload3, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Users Report `;
              ChevronRightOutline($$payload4, { class: "ms-1.5 h-2.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, { code: modules["./md/area-chart.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Column chart`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CodeWrapper($$payload, {
    class: "flex items-start justify-center",
    children: ($$payload2) => {
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700"><div class="flex items-center"><div class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">`;
          UsersGroupSolid($$payload3, {
            class: "h-6 w-6 text-gray-500 dark:text-gray-400"
          });
          $$payload3.out += `<!----></div> <div><h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5> <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p></div></div> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">`;
          ArrowUpOutline($$payload3, { class: "me-1.5 h-2.5 w-2.5" });
          $$payload3.out += `<!----> 42.5%</span></div></div> <div class="grid grid-cols-2"><dl class="flex items-center"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">$3,232</dd></dl> <dl class="flex items-center justify-end"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd></dl></div> `;
          Chart($$payload3, { options: optionCol });
          $$payload3.out += `<!----> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">`;
          Button($$payload3, {
            onclick: toggle2,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Last 7 days`;
              ChevronDownOutline($$payload4, { class: "m-2.5 ms-1.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="relative">`;
          {
            let children = function($$payload4) {
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Yesterday`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Today`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 7 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 30 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 90 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            };
            Dropdown($$payload3, {
              divClass: "absolute top-[5px] -left-[180px]",
              dropdownStatus: isOpen2,
              children,
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!----></div> `;
          A($$payload3, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Leads Report `;
              ChevronRightOutline($$payload4, { class: "ms-1.5 h-2.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, { code: modules["./md/column-chart.md"] });
  $$payload.out += `<!----> `;
  H2($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<!---->Bar chart`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  CodeWrapper($$payload, {
    class: "flex items-start justify-center",
    children: ($$payload2) => {
      Card($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Profit</dt> <dd class="text-3xl font-bold leading-none text-gray-900 dark:text-white">$5,405</dd></dl> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">`;
          ArrowUpOutline($$payload3, { class: "me-1.5 h-2.5 w-2.5" });
          $$payload3.out += `<!----> Profit rate 23.5%</span></div></div> <div class="grid grid-cols-2 py-3"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Income</dt> <dd class="text-xl font-bold leading-none text-green-500 dark:text-green-400">$23,635</dd></dl> <dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Expense</dt> <dd class="text-xl font-bold leading-none text-red-600 dark:text-red-500">-$18,230</dd></dl></div> `;
          Chart($$payload3, { options: optionBar });
          $$payload3.out += `<!----> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5">`;
          Button($$payload3, {
            onclick: toggle3,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Last 7 days`;
              ChevronDownOutline($$payload4, { class: "m-2.5 ms-1.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <div class="relative">`;
          {
            let children = function($$payload4) {
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Yesterday`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Today`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 7 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 30 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              DropdownLi($$payload4, {
                href: "/",
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Last 90 days`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            };
            Dropdown($$payload3, {
              divClass: "absolute top-[5px] -left-[180px]",
              dropdownStatus: isOpen3,
              children,
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!----></div> `;
          A($$payload3, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Leads Report `;
              ChevronRightOutline($$payload4, { class: "ms-1.5 h-2.5 w-2.5" });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----> `;
  HighlightCompo($$payload, { code: modules["./md/bar-chart.md"] });
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
