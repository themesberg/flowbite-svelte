import { Q as push, R as setContext, W as attr, a0 as spread_attributes, a2 as bind_props, S as pop, a3 as copy_payload, a4 as assign_payload, Y as ensure_array_like, V as escape_html } from "../../../../chunks/index.js";
import { ai as table } from "../../../../chunks/theme.js";
import { B as Button } from "../../../../chunks/markdown.js";
import { T as Table, a as TableHead, c as TableBody, b as TableHeadCell, d as TableBodyRow, e as TableBodyCell } from "../../../../chunks/TableHead.js";
import { L as Label, R as Radio, C as CompoAttributesViewer } from "../../../../chunks/CompoAttributesViewer.js";
import { D as DynamicCodeBlockHighlight } from "../../../../chunks/DynamicCodeBlockHighlight.js";
import { H as HighlightCompo } from "../../../../chunks/HighlightCompo.js";
import { C as CodeWrapper } from "../../../../chunks/CodeWrapper.js";
import { a as H1 } from "../../../../chunks/H1.js";
import { H as H2 } from "../../../../chunks/H2.js";
import { g as getExampleFileName, a as isGeneratedCodeOverflow, i as isSvelteOverflow } from "../../../../chunks/helpers.js";
import { C as Checkbox } from "../../../../chunks/Checkbox.js";
import { twMerge } from "tailwind-merge";
function TableSearch($$payload, $$props) {
  push();
  let {
    children,
    header,
    footer,
    divClass = "relative overflow-x-auto shadow-md sm:rounded-lg",
    inputValue = void 0,
    striped,
    hoverable,
    customColor = "",
    color = "default",
    innerDivClass = "p-4",
    inputClass,
    searchClass = "relative mt-1",
    svgDivClass,
    svgClass = "w-5 h-5 text-gray-500 dark:text-gray-400",
    tableClass = "w-full text-left text-sm",
    class: className,
    placeholder = "Search",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let inputCls = twMerge("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", inputClass);
  let svgDivCls = twMerge("absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none", svgDivClass);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customColor
  };
  const tableSearchCtx = { striped, hoverable, color };
  setContext("tableCtx", tableSearchCtx);
  $$payload.out += `<div${attr("class", divClass)}><div${attr("class", innerDivClass)}><label for="table-search" class="sr-only">Search</label> <div${attr("class", searchClass)}><div${attr("class", svgDivCls)}><svg${attr("class", svgClass)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg></div> <input${attr("value", inputValue)} type="text" id="table-search"${attr("class", inputCls)}${attr("placeholder", placeholder)}></div> `;
  if (header) {
    $$payload.out += "<!--[-->";
    header($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div> <table${spread_attributes({
    ...restProps,
    class: twMerge(tableClass, colors[color], className)
  })}>`;
  if (children) {
    $$payload.out += "<!--[-->";
    children($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></table> `;
  if (footer) {
    $$payload.out += "<!--[-->";
    footer($$payload);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { inputValue });
  pop();
}
const __vite_glob_0_0 = '<script lang="ts">\n  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from "$lib";\n<\/script>\n\n<Table hoverable>\n  <TableHead>\n    <TableHeadCell>Product name</TableHeadCell>\n    <TableHeadCell>Color</TableHeadCell>\n    <TableHeadCell>Category</TableHeadCell>\n    <TableHeadCell>Price</TableHeadCell>\n    <TableHeadCell>\n      <span class="sr-only">Edit</span>\n    </TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>\n      <TableBodyCell>Sliver</TableBodyCell>\n      <TableBodyCell>Laptop</TableBodyCell>\n      <TableBodyCell>$2999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>\n      <TableBodyCell>White</TableBodyCell>\n      <TableBodyCell>Laptop PC</TableBodyCell>\n      <TableBodyCell>$1999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Magic Mouse 2</TableBodyCell>\n      <TableBodyCell>Black</TableBodyCell>\n      <TableBodyCell>Accessories</TableBodyCell>\n      <TableBodyCell>$99</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Google Pixel Phone</TableBodyCell>\n      <TableBodyCell>Gray</TableBodyCell>\n      <TableBodyCell>Phone</TableBodyCell>\n      <TableBodyCell>$799</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell>Apple Watch 5</TableBodyCell>\n      <TableBodyCell>Red</TableBodyCell>\n      <TableBodyCell>Wearables</TableBodyCell>\n      <TableBodyCell>$999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_1 = '<script lang="ts">\n  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Checkbox } from "$lib";\n<\/script>\n\n<Table hoverable={true}>\n  <TableHead>\n    <TableHeadCell class="!p-4">\n      <Checkbox />\n    </TableHeadCell>\n    <TableHeadCell>Product name</TableHeadCell>\n    <TableHeadCell>Color</TableHeadCell>\n    <TableHeadCell>Category</TableHeadCell>\n    <TableHeadCell>Price</TableHeadCell>\n    <TableHeadCell>\n      <span class="sr-only">Edit</span>\n    </TableHeadCell>\n  </TableHead>\n  <TableBody class="divide-y">\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>\n      <TableBodyCell>Sliver</TableBodyCell>\n      <TableBodyCell>Laptop</TableBodyCell>\n      <TableBodyCell>$2999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>\n      <TableBodyCell>White</TableBodyCell>\n      <TableBodyCell>Laptop PC</TableBodyCell>\n      <TableBodyCell>$1999</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n    <TableBodyRow>\n      <TableBodyCell class="!p-4">\n        <Checkbox />\n      </TableBodyCell>\n      <TableBodyCell>Magic Mouse 2</TableBodyCell>\n      <TableBodyCell>Black</TableBodyCell>\n      <TableBodyCell>Accessories</TableBodyCell>\n      <TableBodyCell>$99</TableBodyCell>\n      <TableBodyCell>\n        <a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>\n      </TableBodyCell>\n    </TableBodyRow>\n  </TableBody>\n</Table>\n';
const __vite_glob_0_2 = `<script lang="ts">
  import { slide } from "svelte/transition";
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, ImagePlaceholder } from "$lib";
  const items2 = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    }
  ];

  let openRow = $state();
  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };
<\/script>

<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each items2 as item, i}
      <TableBodyRow onclick={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow ondblclick={() => console.log("double click")}>
          <TableBodyCell colspan={4} class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: "y" }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
`;
const __vite_glob_0_3 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', qty: "1", price: "$2999" },
    { name: "Microsoft Surface Pro", qty: "1", price: "$1999" },
    { name: "Magic Mouse 2", qty: "1", price: "$99" }
  ];
<\/script>

<Table {tableItems} hoverable>
  {#snippet footerSlot()}
    <tfoot>
      <tr class="font-semibold text-gray-900 dark:text-white">
        <th scope="row" class="px-6 py-3 text-base">Total</th>
        <td class="px-6 py-3">3</td>
        <td class="px-6 py-3">$5,097</td>
      </tr>
    </tfoot>
  {/snippet}
</Table>
`;
const __vite_glob_0_4 = `<script lang="ts">
  import { Table, TableHead, TableBody } from "$lib";
  const headItems = ["Name", "Color", "Type", "Price"];
  const bodyItems = [
    ['Apple MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft Surface Pro", "White", "Laptop PC", "$1999"],
    ["Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table hoverable>
  <TableHead {headItems} />
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_5 = `<script lang="ts">
  import { Table, TableHead, TableHeadCell, TableBody } from "$lib";
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    ["Apple", 'MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft", "Surface Pro", "White", "Laptop PC", "$1999"],
    ["Apple", "Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google", " Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple", "Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table>
  <TableHead {headItems} defaultRow={false}>
    {#snippet headerSlot()}
      <tr>
        <TableHeadCell colspan={2}>Product</TableHeadCell>
        <TableHeadCell colspan={3}>Info</TableHeadCell>
      </tr>
    {/snippet}
  </TableHead>
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_6 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} hoverable />
`;
const __vite_glob_0_7 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} noborder />
`;
const __vite_glob_0_8 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", category: "Laptop", accessories: "Yes", available: "Yes", price: "$2999", weight: "2.3kg", qty: "1" },
    { name: "Microsoft Surface Pro", color: "White", category: "Laptop PC", accessories: "No", available: "Yes", price: "$1999", weight: "1.8kg", qty: "1" },
    { name: "Magic Mouse 2", color: "Black", category: "Accessories", accessories: "Yes", available: "No", price: "$99", weight: "0.6kg", qty: "2" }
  ];
<\/script>

<Table {tableItems} />
`;
const __vite_glob_0_9 = '<script lang="ts">\n  import { TableSearch, TableHead, TableBody, TableBodyRow, TableBodyCell } from "$lib";\n  const headItems = ["ID", "Maker", "Type", "Make"];\n  let searchTerm = $state("");\n  let items = [\n    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },\n    { id: 2, maker: "Ford", type: "CDE", make: 2018 },\n    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },\n    { id: 4, maker: "Saab", type: "IJK", make: 2020 }\n  ];\n  let filteredItems = $derived(items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));\n<\/script>\n\n<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>\n  <TableHead {headItems} />\n  <TableBody>\n    {#each filteredItems as item}\n      <TableBodyRow>\n        <TableBodyCell>{item.id}</TableBodyCell>\n        <TableBodyCell>{item.maker}</TableBodyCell>\n        <TableBodyCell>{item.type}</TableBodyCell>\n        <TableBodyCell>{item.make}</TableBodyCell>\n      </TableBodyRow>\n    {/each}\n  </TableBody>\n</TableSearch>\n';
const __vite_glob_0_10 = `<script>
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>
`;
const __vite_glob_0_11 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} shadow />
`;
const __vite_glob_0_12 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} striped />
`;
const __vite_glob_0_13 = `<script lang="ts">
  import { Table, TableHead, TableBody } from "$lib";
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    ["Apple", 'MacBook Pro 17"', "Sliver", "Laptop", "$2999"],
    ["Microsoft", "Surface Pro", "White", "Laptop PC", "$1999"],
    ["Apple", "Magic Mouse 2", "Black", "Accessories", "$99"],
    ["Google", " Pixel Phone", "Gray", "Phone", "$799"],
    ["Apple", "Watch 5", "Red", "Wearables", "$999"]
  ];
<\/script>

<Table>
  {#snippet captionSlot()}
    <caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
      Our products
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
    </caption>
  {/snippet}
  <TableHead {headItems} />
  <TableBody {bodyItems} />
</Table>
`;
const __vite_glob_0_14 = `<script lang="ts">
  import { Table } from "$lib";
  const tableItems = [
    { name: 'Apple MacBook Pro 17"', color: "Sliver", type: "Laptop", price: "$2999" },
    { name: "Microsoft Surface Pro", color: "White", type: "Laptop PC", price: "$1999" },
    { name: "Magic Mouse 2", color: "Black", type: "Accessories", price: "$99" },
    { name: "Google Pixel Phone", color: "Gray", type: "Phone", price: "$799" },
    { name: "Apple Watch 5", color: "Red", type: "Wearables", price: "$999" }
  ];
<\/script>

<Table {tableItems} hoverable />
`;
function HeadBodyItems($$payload) {
  const headItems = ["Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      'Apple MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    ["Apple Watch 5", "Red", "Wearables", "$999"]
  ];
  Table($$payload, {
    hoverable: true,
    children: ($$payload2) => {
      TableHead($$payload2, { headItems });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, { bodyItems });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function TableItems($$payload) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      type: "Phone",
      price: "$799"
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      type: "Wearables",
      price: "$999"
    }
  ];
  Table($$payload, { tableItems, hoverable: true });
}
function Cells($$payload) {
  Table($$payload, {
    hoverable: true,
    children: ($$payload2) => {
      TableHead($$payload2, {
        children: ($$payload3) => {
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Product name`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Category`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Price`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<span class="sr-only">Edit</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, {
        class: "divide-y",
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Apple MacBook Pro 17"`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Sliver`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Laptop`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$2999`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Microsoft Surface Pro`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->White`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Laptop PC`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$1999`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Magic Mouse 2`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Black`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Accessories`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$99`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Google Pixel Phone`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Gray`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Phone`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$799`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Apple Watch 5`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Red`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Wearables`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$999`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Checkbox_1($$payload) {
  Table($$payload, {
    hoverable: true,
    children: ($$payload2) => {
      TableHead($$payload2, {
        children: ($$payload3) => {
          TableHeadCell($$payload3, {
            class: "!p-4",
            children: ($$payload4) => {
              Checkbox($$payload4, {});
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Product name`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Category`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Price`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableHeadCell($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<span class="sr-only">Edit</span>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      TableBody($$payload2, {
        class: "divide-y",
        children: ($$payload3) => {
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                class: "!p-4",
                children: ($$payload5) => {
                  Checkbox($$payload5, {});
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Apple MacBook Pro 17"`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Sliver`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Laptop`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$2999`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                class: "!p-4",
                children: ($$payload5) => {
                  Checkbox($$payload5, {});
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Microsoft Surface Pro`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->White`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Laptop PC`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$1999`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          TableBodyRow($$payload3, {
            children: ($$payload4) => {
              TableBodyCell($$payload4, {
                class: "!p-4",
                children: ($$payload5) => {
                  Checkbox($$payload5, {});
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Magic Mouse 2`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Black`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->Accessories`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<!---->$99`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!----> `;
              TableBodyCell($$payload4, {
                children: ($$payload5) => {
                  $$payload5.out += `<a href="/components/table" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>`;
                },
                $$slots: { default: true }
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function Search($$payload, $$props) {
  push();
  const headItems = ["ID", "Maker", "Type", "Make"];
  let searchTerm = "";
  let items = [
    {
      id: 1,
      maker: "Toyota",
      type: "ABC",
      make: 2017
    },
    {
      id: 2,
      maker: "Ford",
      type: "CDE",
      make: 2018
    },
    {
      id: 3,
      maker: "Volvo",
      type: "FGH",
      make: 2019
    },
    {
      id: 4,
      maker: "Saab",
      type: "IJK",
      make: 2020
    }
  ];
  let filteredItems = items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    TableSearch($$payload2, {
      placeholder: "Search by maker name",
      hoverable: true,
      get inputValue() {
        return searchTerm;
      },
      set inputValue($$value) {
        searchTerm = $$value;
        $$settled = false;
      },
      children: ($$payload3) => {
        TableHead($$payload3, { headItems });
        $$payload3.out += `<!----> `;
        TableBody($$payload3, {
          children: ($$payload4) => {
            const each_array = ensure_array_like(filteredItems);
            $$payload4.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let item = each_array[$$index];
              TableBodyRow($$payload4, {
                children: ($$payload5) => {
                  TableBodyCell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(item.id)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  TableBodyCell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(item.maker)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  TableBodyCell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(item.type)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!----> `;
                  TableBodyCell($$payload5, {
                    children: ($$payload6) => {
                      $$payload6.out += `<!---->${escape_html(item.make)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload5.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            }
            $$payload4.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
function HeaderSlot($$payload) {
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      "Apple",
      'MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft",
      "Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Apple",
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google",
      " Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    [
      "Apple",
      "Watch 5",
      "Red",
      "Wearables",
      "$999"
    ]
  ];
  Table($$payload, {
    children: ($$payload2) => {
      {
        let headerSlot = function($$payload3) {
          $$payload3.out += `<tr>`;
          TableHeadCell($$payload3, {
            colspan: 2,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Product`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
          TableHeadCell($$payload3, {
            colspan: 3,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Info`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></tr>`;
        };
        TableHead($$payload2, {
          headItems,
          defaultRow: false,
          headerSlot,
          $$slots: { headerSlot: true }
        });
      }
      $$payload2.out += `<!----> `;
      TableBody($$payload2, { bodyItems });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function FooterSlot($$payload) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      qty: "1",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      qty: "1",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      qty: "1",
      price: "$99"
    }
  ];
  {
    let footerSlot = function($$payload2) {
      $$payload2.out += `<tfoot><tr class="font-semibold text-gray-900 dark:text-white"><th scope="row" class="px-6 py-3 text-base">Total</th><td class="px-6 py-3">3</td><td class="px-6 py-3">$5,097</td></tr></tfoot>`;
    };
    Table($$payload, {
      tableItems,
      hoverable: true,
      footerSlot,
      $$slots: { footerSlot: true }
    });
  }
}
function TableCaption($$payload) {
  const headItems = ["Brand", "Name", "Color", "Type", "Price"];
  const bodyItems = [
    [
      "Apple",
      'MacBook Pro 17"',
      "Sliver",
      "Laptop",
      "$2999"
    ],
    [
      "Microsoft",
      "Surface Pro",
      "White",
      "Laptop PC",
      "$1999"
    ],
    [
      "Apple",
      "Magic Mouse 2",
      "Black",
      "Accessories",
      "$99"
    ],
    [
      "Google",
      " Pixel Phone",
      "Gray",
      "Phone",
      "$799"
    ],
    [
      "Apple",
      "Watch 5",
      "Red",
      "Wearables",
      "$999"
    ]
  ];
  {
    let captionSlot = function($$payload2) {
      $$payload2.out += `<caption class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">Our products <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p></caption>`;
    };
    Table($$payload, {
      captionSlot,
      children: ($$payload2) => {
        TableHead($$payload2, { headItems });
        $$payload2.out += `<!----> `;
        TableBody($$payload2, { bodyItems });
        $$payload2.out += `<!---->`;
      },
      $$slots: { captionSlot: true, default: true }
    });
  }
}
function Overflow($$payload) {
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      category: "Laptop",
      accessories: "Yes",
      available: "Yes",
      price: "$2999",
      weight: "2.3kg",
      qty: "1"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      accessories: "No",
      available: "Yes",
      price: "$1999",
      weight: "1.8kg",
      qty: "1"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      accessories: "Yes",
      available: "No",
      price: "$99",
      weight: "0.6kg",
      qty: "2"
    }
  ];
  Table($$payload, { tableItems });
}
function _page($$payload, $$props) {
  push();
  const dirName = "table";
  const exampleModules = /* @__PURE__ */ Object.assign({
    "./examples/Cells.svelte": __vite_glob_0_0,
    "./examples/Checkbox.svelte": __vite_glob_0_1,
    "./examples/ClickDoubleClick.svelte": __vite_glob_0_2,
    "./examples/FooterSlot.svelte": __vite_glob_0_3,
    "./examples/HeadBodyItems.svelte": __vite_glob_0_4,
    "./examples/HeaderSlot.svelte": __vite_glob_0_5,
    "./examples/Hover.svelte": __vite_glob_0_6,
    "./examples/NoBorder.svelte": __vite_glob_0_7,
    "./examples/Overflow.svelte": __vite_glob_0_8,
    "./examples/Search.svelte": __vite_glob_0_9,
    "./examples/Setup.svelte": __vite_glob_0_10,
    "./examples/Shadow.svelte": __vite_glob_0_11,
    "./examples/Striped.svelte": __vite_glob_0_12,
    "./examples/TableCaption.svelte": __vite_glob_0_13,
    "./examples/TableItems.svelte": __vite_glob_0_14
  });
  const exampleArr = [
    {
      name: "Table items",
      component: TableItems
    },
    {
      name: "Head body items",
      component: HeadBodyItems
    },
    {
      name: "Cells",
      component: Cells
    },
    {
      name: "Checkbox",
      component: Checkbox_1
    },
    {
      name: "Search",
      component: Search
    },
    {
      name: "Header slot",
      component: HeaderSlot
    },
    {
      name: "Footer slot",
      component: FooterSlot
    },
    {
      name: "Table caption",
      component: TableCaption
    },
    {
      name: "Overflow",
      component: Overflow
    }
    // { name: "Click double click", component: ExampleComponents.ClickDoubleClick }
  ];
  let selectedExample = exampleArr[0].name;
  let svelteCode = getExampleFileName(selectedExample, exampleArr);
  function findObject(arr, name) {
    const matchingObject = arr.find((obj) => obj.name === name);
    return matchingObject ? matchingObject.component : null;
  }
  const SelectedComponent = findObject(exampleArr, selectedExample);
  let color = "default";
  const colors = Object.keys(table.variants.color);
  let striped = false;
  const changeStriped = () => {
    striped = !striped;
  };
  let hoverable = false;
  const changeHoverable = () => {
    hoverable = !hoverable;
  };
  let noborder = false;
  const changeNoborder = () => {
    noborder = !noborder;
  };
  let shadow = false;
  const changeShadow = () => {
    shadow = !shadow;
  };
  const tableItems = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Sliver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      type: "Phone",
      price: "$799"
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      type: "Wearables",
      price: "$999"
    }
  ];
  let generatedCode = (() => {
    let props = [];
    if (color !== "default") props.push(` color="${color}"`);
    if (striped) props.push(" striped");
    if (hoverable) props.push(" hoverable");
    if (!noborder) props.push(" noborder");
    if (shadow) props.push(" shadow");
    const propsString = props.length > 0 ? props.map((prop) => `
  ${prop}`).join("") + "\n" : "";
    return `<Table {tableItems}${propsString} />`;
  })();
  let builderExpand = false;
  let showBuilderExpandButton = isGeneratedCodeOverflow(generatedCode);
  const handleBuilderExpandClick = () => {
    builderExpand = !builderExpand;
  };
  let exampleExpand = false;
  let showExpandButton = isSvelteOverflow(svelteCode, exampleModules);
  const handleExpandClick = () => {
    exampleExpand = !exampleExpand;
  };
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    H1($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Table`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Setup`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    HighlightCompo($$payload2, {
      code: exampleModules[`./examples/Setup.svelte`]
    });
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Interactive Table Builder`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          handleExpandClick: handleBuilderExpandClick,
          expand: builderExpand,
          showExpandButton: showBuilderExpandButton,
          code: generatedCode
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array = ensure_array_like(colors);
          Table($$payload3, {
            tableItems,
            hoverable,
            color,
            striped,
            noborder,
            shadow
          });
          $$payload3.out += `<!----> <div class="my-4 flex flex-wrap space-x-4">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Color`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let colorOption = each_array[$$index];
            Radio($$payload3, {
              labelClass: "w-24 my-1",
              name: "table_color",
              get group() {
                return color;
              },
              set group($$value) {
                color = $$value;
                $$settled = false;
              },
              color: colorOption,
              value: colorOption,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(colorOption)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <div class="mb-4 flex gap-4">`;
          Button($$payload3, {
            class: "w-40",
            onclick: changeStriped,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(striped ? "Unstriped" : "Striped")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "secondary",
            onclick: changeHoverable,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(hoverable ? "Unhoverable" : "Hoverable")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "indigo",
            onclick: changeNoborder,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(noborder ? "Borderless" : "Border")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            class: "w-40",
            color: "rose",
            onclick: changeShadow,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(shadow ? "No Shadow" : "Shadow")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div>`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Examples`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    {
      let codeblock = function($$payload3) {
        DynamicCodeBlockHighlight($$payload3, {
          replaceLib: true,
          handleExpandClick,
          expand: exampleExpand,
          showExpandButton,
          code: exampleModules[`./examples/${svelteCode}`]
        });
      };
      CodeWrapper($$payload2, {
        codeblock,
        children: ($$payload3) => {
          const each_array_1 = ensure_array_like(exampleArr);
          $$payload3.out += `<div class="mb-12 flex flex-wrap">`;
          Label($$payload3, {
            class: "mb-4 w-full font-bold",
            children: ($$payload4) => {
              $$payload4.out += `<!---->Example`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> <!--[-->`;
          for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
            let style = each_array_1[$$index_1];
            Radio($$payload3, {
              labelClass: "w-40 my-1",
              onclick: () => exampleExpand = false,
              name: "block_style",
              get group() {
                return selectedExample;
              },
              set group($$value) {
                selectedExample = $$value;
                $$settled = false;
              },
              value: style.name,
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(style.name)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div> <!---->`;
          SelectedComponent($$payload3, {});
          $$payload3.out += `<!---->`;
        },
        $$slots: { codeblock: true, default: true }
      });
    }
    $$payload2.out += `<!----> `;
    H2($$payload2, {
      children: ($$payload3) => {
        $$payload3.out += `<!---->Component data`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    CompoAttributesViewer($$payload2, { dirName });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  pop();
}
export {
  _page as default
};
