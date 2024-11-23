const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../chunks/apexcharts.common.G-iCImlw.js","../chunks/markdown.Ba9FtS5g.js","../chunks/disclose-version.0TX42Q8e.js","../chunks/runtime.BkfDdwap.js","../chunks/props.B7eOu8hW.js","../chunks/store.B2xZ3Ft6.js","../chunks/snippet.BDfn85k4.js","../chunks/H1.DunGd_Oq.js","../chunks/theme.BtjZjf2R.js","../chunks/index.IFFPp5_U.js","../assets/theme.C10J5-xP.css","../chunks/each.CtHIoDcm.js","../assets/markdown.DC8HzQYB.css"])))=>i.map(i=>d[i]);
import { a as append, t as template, n as ns_template, b as text } from "../chunks/disclose-version.0TX42Q8e.js";
import { p as push, t as template_effect, a as pop, g as getContext, c as child, r as reset, s as sibling, b as get, d as derived, n as next, u as user_effect, f as first_child, a6 as state, a7 as set } from "../chunks/runtime.BkfDdwap.js";
import { p as prop, i as if_block, r as rest_props, b as proxy } from "../chunks/props.B7eOu8hW.js";
import { h as action, b as set_class, s as set_attribute, a as set_attributes, t as twMerge, az as Dropdown, V as uiHelpers } from "../chunks/theme.BtjZjf2R.js";
import { B as Button } from "../chunks/markdown.Ba9FtS5g.js";
import { C as Card } from "../chunks/Card.nT-sWZgG.js";
import { _ as __vitePreload } from "../chunks/preload-helper.CQrtv1eE.js";
import { D as DropdownUl } from "../chunks/DropdownUl.CBcIivYZ.js";
import { D as DropdownLi } from "../chunks/DropdownLi.DjyFOMgJ.js";
import { A } from "../chunks/A.XuSt3J-W.js";
import { a as set_text } from "../chunks/store.B2xZ3Ft6.js";
import { C as ChevronDownOutline } from "../chunks/ChevronDownOutline.C3ncqrR6.js";
import { C as ChevronRightOutline } from "../chunks/ChevronRightOutline.D-4U2W9t.js";
import { H as HighlightCompo } from "../chunks/HighlightCompo.D1kgIYBY.js";
import { C as CodeWrapper } from "../chunks/CodeWrapper.CdoIAYb8.js";
import { H as H1 } from "../chunks/H1.DunGd_Oq.js";
import { H as H2 } from "../chunks/H2.qsp5CBkK.js";
var root$3 = template(`<div></div>`);
function Chart($$anchor, $$props) {
  push($$props, true);
  function initChart(node, options) {
    let chart;
    async function asyncInitChart() {
      const ApexCharts = (await __vitePreload(async () => {
        const { default: __vite_default__ } = await import("../chunks/apexcharts.common.G-iCImlw.js").then((n) => n.a);
        return { default: __vite_default__ };
      }, true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]) : void 0, import.meta.url)).default;
      chart = new ApexCharts(node, options);
      chart.render();
    }
    asyncInitChart();
    return {
      update(options2) {
        if (chart) {
          chart.updateOptions(options2);
        }
      },
      destroy() {
        if (chart) {
          chart.destroy();
        }
      }
    };
  }
  var div = root$3();
  action(div, ($$node, $$action_arg) => initChart($$node, $$action_arg), () => $$props.options);
  template_effect(() => set_class(div, $$props.class));
  append($$anchor, div);
  pop();
}
var root_1$1 = ns_template(`<title> </title>`);
var root_2$1 = ns_template(`<desc> </desc>`);
var root$2 = ns_template(`<svg><!><!><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 6v13m0-13 4 4m-4-4-4 4"></path></svg>`);
function ArrowUpOutline($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), strokeWidth = prop($$props, "strokeWidth", 19, () => ctx.strokeWidth || "2"), ariaLabel = prop($$props, "ariaLabel", 3, "arrow up outline"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "strokeWidth",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$2();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1$1();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2$1();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  var path = sibling(node_1);
  reset(svg);
  template_effect(() => {
    attributes = set_attributes(
      svg,
      attributes,
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        color: color(),
        ...restProps,
        class: twMerge("shrink-0", sizes[size()], $$props.class),
        "aria-label": ariaLabel(),
        "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
        viewBox: "0 0 24 24"
      },
      void 0,
      true
    );
    set_attribute(path, "stroke-width", strokeWidth());
  });
  append($$anchor, svg);
  pop();
}
var root_1 = ns_template(`<title> </title>`);
var root_2 = ns_template(`<desc> </desc>`);
var root$1 = ns_template(`<svg><!><!><path fill-rule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clip-rule="evenodd"></path></svg>`);
function UsersGroupSolid($$anchor, $$props) {
  var _a, _b;
  push($$props, true);
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let size = prop($$props, "size", 19, () => ctx.size || "md"), color = prop($$props, "color", 19, () => ctx.color || "currentColor"), ariaLabel = prop($$props, "ariaLabel", 3, "users group solid"), restProps = rest_props($$props, [
    "$$slots",
    "$$events",
    "$$legacy",
    "size",
    "color",
    "title",
    "desc",
    "class",
    "ariaLabel"
  ]);
  let ariaDescribedby = `${((_a = $$props.title) == null ? void 0 : _a.id) || ""} ${((_b = $$props.desc) == null ? void 0 : _b.id) || ""}`;
  const hasDescription = derived(() => {
    var _a2, _b2;
    return !!(((_a2 = $$props.title) == null ? void 0 : _a2.id) || ((_b2 = $$props.desc) == null ? void 0 : _b2.id));
  });
  var svg = root$1();
  let attributes;
  var node = child(svg);
  if_block(node, () => {
    var _a2;
    return ((_a2 = $$props.title) == null ? void 0 : _a2.id) && $$props.title.title;
  }, ($$anchor2) => {
    var title_1 = root_1();
    var text2 = child(title_1, true);
    reset(title_1);
    template_effect(() => {
      set_attribute(title_1, "id", $$props.title.id);
      set_text(text2, $$props.title.title);
    });
    append($$anchor2, title_1);
  });
  var node_1 = sibling(node);
  if_block(node_1, () => {
    var _a2;
    return ((_a2 = $$props.desc) == null ? void 0 : _a2.id) && $$props.desc.desc;
  }, ($$anchor2) => {
    var desc_1 = root_2();
    var text_1 = child(desc_1, true);
    reset(desc_1);
    template_effect(() => {
      set_attribute(desc_1, "id", $$props.desc.id);
      set_text(text_1, $$props.desc.desc);
    });
    append($$anchor2, desc_1);
  });
  next();
  reset(svg);
  template_effect(() => attributes = set_attributes(
    svg,
    attributes,
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color(),
      ...restProps,
      class: twMerge("shrink-0", sizes[size()], $$props.class),
      "aria-label": ariaLabel(),
      "aria-describedby": get(hasDescription) ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    true
  ));
  append($$anchor, svg);
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
var root_6 = template(`Last 7 days<!>`, 1);
var root_8 = template(`<!> <!> <!> <!> <!>`, 1);
var root_14 = template(`Users Report <!>`, 1);
var root_5 = template(`<div class="flex justify-between"><div><h5 class="pb-2 text-3xl font-bold leading-none text-gray-900 dark:text-white">32.4k</h5> <p class="text-base font-normal text-gray-500 dark:text-gray-400">Users this week</p></div> <div class="flex items-center px-2.5 py-0.5 text-center text-base font-semibold text-green-500 dark:text-green-500">12% <!></div></div> <!> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5"><!> <div class="relative"><!></div> <!></div></div>`, 1);
var root_18 = template(`Last 7 days<!>`, 1);
var root_19 = template(`<!> <!> <!> <!> <!>`, 1);
var root_25 = template(`Leads Report <!>`, 1);
var root_17 = template(`<div class="mb-4 flex justify-between border-b border-gray-200 pb-4 dark:border-gray-700"><div class="flex items-center"><div class="me-3 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700"><!></div> <div><h5 class="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5> <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p></div></div> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"><!> 42.5%</span></div></div> <div class="grid grid-cols-2"><dl class="flex items-center"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">$3,232</dd></dl> <dl class="flex items-center justify-end"><dt class="me-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt> <dd class="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd></dl></div> <!> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5"><!> <div class="relative"><!></div> <!></div></div>`, 1);
var root_29 = template(`Last 7 days<!>`, 1);
var root_30 = template(`<!> <!> <!> <!> <!>`, 1);
var root_36 = template(`Leads Report <!>`, 1);
var root_28 = template(`<div class="flex justify-between border-b border-gray-200 pb-3 dark:border-gray-700"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Profit</dt> <dd class="text-3xl font-bold leading-none text-gray-900 dark:text-white">$5,405</dd></dl> <div><span class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"><!> Profit rate 23.5%</span></div></div> <div class="grid grid-cols-2 py-3"><dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Income</dt> <dd class="text-xl font-bold leading-none text-green-500 dark:text-green-400">$23,635</dd></dl> <dl><dt class="pb-1 text-base font-normal text-gray-500 dark:text-gray-400">Expense</dt> <dd class="text-xl font-bold leading-none text-red-600 dark:text-red-500">-$18,230</dd></dl></div> <!> <div class="grid grid-cols-1 items-center justify-between border-t border-gray-200 dark:border-gray-700"><div class="flex items-center justify-between pt-5"><!> <div class="relative"><!></div> <!></div></div>`, 1);
var root = template(`<!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!>`, 1);
function _page($$anchor, $$props) {
  push($$props, true);
  let dropdown = uiHelpers();
  let isOpen = state(false);
  let toggle = dropdown.toggle;
  let dropdown2 = uiHelpers();
  let isOpen2 = state(false);
  let toggle2 = dropdown2.toggle;
  let dropdown3 = uiHelpers();
  let isOpen3 = state(false);
  let toggle3 = dropdown3.toggle;
  user_effect(() => {
    set(isOpen, proxy(dropdown.isOpen));
    set(isOpen2, proxy(dropdown2.isOpen));
    set(isOpen3, proxy(dropdown3.isOpen));
  });
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
  var fragment = root();
  var node = first_child(fragment);
  H1(node, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text$1 = text("Chart");
      append($$anchor2, text$1);
    },
    $$slots: { default: true }
  });
  var node_1 = sibling(node, 2);
  H2(node_1, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_1 = text("Setup");
      append($$anchor2, text_1);
    },
    $$slots: { default: true }
  });
  var node_2 = sibling(node_1, 2);
  HighlightCompo(node_2, {
    get code() {
      return modules["./md/setup.md"];
    }
  });
  var node_3 = sibling(node_2, 2);
  H2(node_3, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_2 = text("Area chart");
      append($$anchor2, text_2);
    },
    $$slots: { default: true }
  });
  var node_4 = sibling(node_3, 2);
  CodeWrapper(node_4, {
    class: "flex items-start justify-center",
    children: ($$anchor2, $$slotProps) => {
      Card($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_2 = root_5();
          var div = first_child(fragment_2);
          var div_1 = sibling(child(div), 2);
          var node_5 = sibling(child(div_1));
          ChevronRightOutline(node_5, { class: "ms-1 h-3 w-3" });
          reset(div_1);
          reset(div);
          var node_6 = sibling(div, 2);
          Chart(node_6, { options });
          var div_2 = sibling(node_6, 2);
          var div_3 = child(div_2);
          var node_7 = child(div_3);
          Button(node_7, {
            onclick: toggle,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_3 = root_6();
              var node_8 = sibling(first_child(fragment_3));
              ChevronDownOutline(node_8, { class: "m-2.5 ms-1.5 w-2.5" });
              append($$anchor4, fragment_3);
            },
            $$slots: { default: true }
          });
          var div_4 = sibling(node_7, 2);
          var node_9 = child(div_4);
          {
            const children = ($$anchor4) => {
              DropdownUl($$anchor4, {
                children: ($$anchor5, $$slotProps3) => {
                  var fragment_5 = root_8();
                  var node_10 = first_child(fragment_5);
                  DropdownLi(node_10, {
                    href: "/",
                    children: ($$anchor6, $$slotProps4) => {
                      next();
                      var text_3 = text("Yesterday");
                      append($$anchor6, text_3);
                    },
                    $$slots: { default: true }
                  });
                  var node_11 = sibling(node_10, 2);
                  DropdownLi(node_11, {
                    href: "/",
                    children: ($$anchor6, $$slotProps4) => {
                      next();
                      var text_4 = text("Today");
                      append($$anchor6, text_4);
                    },
                    $$slots: { default: true }
                  });
                  var node_12 = sibling(node_11, 2);
                  DropdownLi(node_12, {
                    href: "/",
                    children: ($$anchor6, $$slotProps4) => {
                      next();
                      var text_5 = text("Last 7 days");
                      append($$anchor6, text_5);
                    },
                    $$slots: { default: true }
                  });
                  var node_13 = sibling(node_12, 2);
                  DropdownLi(node_13, {
                    href: "/",
                    children: ($$anchor6, $$slotProps4) => {
                      next();
                      var text_6 = text("Last 30 days");
                      append($$anchor6, text_6);
                    },
                    $$slots: { default: true }
                  });
                  var node_14 = sibling(node_13, 2);
                  DropdownLi(node_14, {
                    href: "/",
                    children: ($$anchor6, $$slotProps4) => {
                      next();
                      var text_7 = text("Last 90 days");
                      append($$anchor6, text_7);
                    },
                    $$slots: { default: true }
                  });
                  append($$anchor5, fragment_5);
                },
                $$slots: { default: true }
              });
            };
            Dropdown(node_9, {
              divClass: "absolute top-[5px] -left-[180px]",
              get dropdownStatus() {
                return get(isOpen);
              },
              children,
              $$slots: { default: true }
            });
          }
          reset(div_4);
          var node_15 = sibling(div_4, 2);
          A(node_15, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_6 = root_14();
              var node_16 = sibling(first_child(fragment_6));
              ChevronRightOutline(node_16, { class: "ms-1.5 h-2.5 w-2.5" });
              append($$anchor4, fragment_6);
            },
            $$slots: { default: true }
          });
          reset(div_3);
          reset(div_2);
          append($$anchor3, fragment_2);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var node_17 = sibling(node_4, 2);
  HighlightCompo(node_17, {
    get code() {
      return modules["./md/area-chart.md"];
    }
  });
  var node_18 = sibling(node_17, 2);
  H2(node_18, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_8 = text("Column chart");
      append($$anchor2, text_8);
    },
    $$slots: { default: true }
  });
  var node_19 = sibling(node_18, 2);
  CodeWrapper(node_19, {
    class: "flex items-start justify-center",
    children: ($$anchor2, $$slotProps) => {
      Card($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_8 = root_17();
          var div_5 = first_child(fragment_8);
          var div_6 = child(div_5);
          var div_7 = child(div_6);
          var node_20 = child(div_7);
          UsersGroupSolid(node_20, {
            class: "h-6 w-6 text-gray-500 dark:text-gray-400"
          });
          reset(div_7);
          next(2);
          reset(div_6);
          var div_8 = sibling(div_6, 2);
          var span = child(div_8);
          var node_21 = child(span);
          ArrowUpOutline(node_21, { class: "me-1.5 h-2.5 w-2.5" });
          next();
          reset(span);
          reset(div_8);
          reset(div_5);
          var node_22 = sibling(div_5, 4);
          Chart(node_22, { options: optionCol });
          var div_9 = sibling(node_22, 2);
          var div_10 = child(div_9);
          var node_23 = child(div_10);
          Button(node_23, {
            onclick: toggle2,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_9 = root_18();
              var node_24 = sibling(first_child(fragment_9));
              ChevronDownOutline(node_24, { class: "m-2.5 ms-1.5 w-2.5" });
              append($$anchor4, fragment_9);
            },
            $$slots: { default: true }
          });
          var div_11 = sibling(node_23, 2);
          var node_25 = child(div_11);
          {
            const children = ($$anchor4) => {
              var fragment_10 = root_19();
              var node_26 = first_child(fragment_10);
              DropdownLi(node_26, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_9 = text("Yesterday");
                  append($$anchor5, text_9);
                },
                $$slots: { default: true }
              });
              var node_27 = sibling(node_26, 2);
              DropdownLi(node_27, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_10 = text("Today");
                  append($$anchor5, text_10);
                },
                $$slots: { default: true }
              });
              var node_28 = sibling(node_27, 2);
              DropdownLi(node_28, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_11 = text("Last 7 days");
                  append($$anchor5, text_11);
                },
                $$slots: { default: true }
              });
              var node_29 = sibling(node_28, 2);
              DropdownLi(node_29, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_12 = text("Last 30 days");
                  append($$anchor5, text_12);
                },
                $$slots: { default: true }
              });
              var node_30 = sibling(node_29, 2);
              DropdownLi(node_30, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_13 = text("Last 90 days");
                  append($$anchor5, text_13);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_10);
            };
            Dropdown(node_25, {
              divClass: "absolute top-[5px] -left-[180px]",
              get dropdownStatus() {
                return get(isOpen2);
              },
              children,
              $$slots: { default: true }
            });
          }
          reset(div_11);
          var node_31 = sibling(div_11, 2);
          A(node_31, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_11 = root_25();
              var node_32 = sibling(first_child(fragment_11));
              ChevronRightOutline(node_32, { class: "ms-1.5 h-2.5 w-2.5" });
              append($$anchor4, fragment_11);
            },
            $$slots: { default: true }
          });
          reset(div_10);
          reset(div_9);
          append($$anchor3, fragment_8);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var node_33 = sibling(node_19, 2);
  HighlightCompo(node_33, {
    get code() {
      return modules["./md/column-chart.md"];
    }
  });
  var node_34 = sibling(node_33, 2);
  H2(node_34, {
    children: ($$anchor2, $$slotProps) => {
      next();
      var text_14 = text("Bar chart");
      append($$anchor2, text_14);
    },
    $$slots: { default: true }
  });
  var node_35 = sibling(node_34, 2);
  CodeWrapper(node_35, {
    class: "flex items-start justify-center",
    children: ($$anchor2, $$slotProps) => {
      Card($$anchor2, {
        children: ($$anchor3, $$slotProps2) => {
          var fragment_13 = root_28();
          var div_12 = first_child(fragment_13);
          var div_13 = sibling(child(div_12), 2);
          var span_1 = child(div_13);
          var node_36 = child(span_1);
          ArrowUpOutline(node_36, { class: "me-1.5 h-2.5 w-2.5" });
          next();
          reset(span_1);
          reset(div_13);
          reset(div_12);
          var node_37 = sibling(div_12, 4);
          Chart(node_37, { options: optionBar });
          var div_14 = sibling(node_37, 2);
          var div_15 = child(div_14);
          var node_38 = child(div_15);
          Button(node_38, {
            onclick: toggle3,
            class: "inline-flex items-center bg-transparent py-0 text-center text-sm font-medium text-gray-500 hover:bg-transparent hover:text-gray-900 focus:ring-transparent dark:bg-transparent dark:text-gray-400 dark:hover:bg-transparent dark:hover:text-white dark:focus:ring-transparent",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_14 = root_29();
              var node_39 = sibling(first_child(fragment_14));
              ChevronDownOutline(node_39, { class: "m-2.5 ms-1.5 w-2.5" });
              append($$anchor4, fragment_14);
            },
            $$slots: { default: true }
          });
          var div_16 = sibling(node_38, 2);
          var node_40 = child(div_16);
          {
            const children = ($$anchor4) => {
              var fragment_15 = root_30();
              var node_41 = first_child(fragment_15);
              DropdownLi(node_41, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_15 = text("Yesterday");
                  append($$anchor5, text_15);
                },
                $$slots: { default: true }
              });
              var node_42 = sibling(node_41, 2);
              DropdownLi(node_42, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_16 = text("Today");
                  append($$anchor5, text_16);
                },
                $$slots: { default: true }
              });
              var node_43 = sibling(node_42, 2);
              DropdownLi(node_43, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_17 = text("Last 7 days");
                  append($$anchor5, text_17);
                },
                $$slots: { default: true }
              });
              var node_44 = sibling(node_43, 2);
              DropdownLi(node_44, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_18 = text("Last 30 days");
                  append($$anchor5, text_18);
                },
                $$slots: { default: true }
              });
              var node_45 = sibling(node_44, 2);
              DropdownLi(node_45, {
                href: "/",
                children: ($$anchor5, $$slotProps3) => {
                  next();
                  var text_19 = text("Last 90 days");
                  append($$anchor5, text_19);
                },
                $$slots: { default: true }
              });
              append($$anchor4, fragment_15);
            };
            Dropdown(node_40, {
              divClass: "absolute top-[5px] -left-[180px]",
              get dropdownStatus() {
                return get(isOpen3);
              },
              children,
              $$slots: { default: true }
            });
          }
          reset(div_16);
          var node_46 = sibling(div_16, 2);
          A(node_46, {
            href: "/",
            class: "rounded-lg px-3 py-2 text-sm font-semibold uppercase hover:bg-gray-100 hover:text-primary-700 hover:no-underline dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:text-primary-500 dark:focus:ring-gray-700",
            children: ($$anchor4, $$slotProps3) => {
              next();
              var fragment_16 = root_36();
              var node_47 = sibling(first_child(fragment_16));
              ChevronRightOutline(node_47, { class: "ms-1.5 h-2.5 w-2.5" });
              append($$anchor4, fragment_16);
            },
            $$slots: { default: true }
          });
          reset(div_15);
          reset(div_14);
          append($$anchor3, fragment_13);
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  var node_48 = sibling(node_35, 2);
  HighlightCompo(node_48, {
    get code() {
      return modules["./md/bar-chart.md"];
    }
  });
  append($$anchor, fragment);
  pop();
}
export {
  _page as component
};
