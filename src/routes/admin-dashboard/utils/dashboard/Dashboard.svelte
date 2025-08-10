<script lang="ts">
  import thickbars from "../graphs/thickbars";
  import options from "../graphs/thinmultibars";
  import trafficOptions from "../graphs/traffic";
  import users from "../graphs/users";
  import { DesktopPcOutline, MobilePhoneOutline, TabletOutline, ArrowRightOutline } from "flowbite-svelte-icons";
  import { Chart } from "@flowbite-svelte-plugins/chart";
  import { P, Button, Timeline, TimelineItem } from "flowbite-svelte";
  import { ChartWidget, Stats, More, ActivityList, ProductMetricCard, CategorySalesReport, DarkChart, Traffic, getChartOptions } from "flowbite-svelte-admin-dashboard";
  import type { DeviceOption } from "flowbite-svelte-admin-dashboard";
  import Chat from "./Chat.svelte";
  import Insights from "./Insights.svelte";
  import Transactions from "./Transactions.svelte";
  import Customers from "../../data/users.json";

  const series = [
    {
      name: "Revenue",
      data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
      color: "#EF562F"
    },
    {
      name: "Revenue (previous period)",
      data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
      color: "#FDBA8C"
    }
  ];

  const products = [
    {
      src: "iphone.png",
      image: "iphone",
      label: "iPhone 14 Pro",
      change: 2.5,
      price: "$445,467"
    },
    {
      src: "imac.png",
      image: "imac",
      label: "Apple iMac 27",
      change: 12.5,
      price: "$256,982"
    },
    {
      src: "watch.png",
      image: "watch",
      label: "Apple Watch SE",
      change: -1.35,
      price: "$201,869"
    },
    {
      src: "ipad.png",
      image: "ipad",
      label: "Apple iPad Air",
      change: 12.5,
      price: "$103,967"
    },
    {
      src: "imac.png",
      image: "imac",
      label: "Apple iMac 24",
      change: -2,
      price: "$98,543 "
    }
  ];
  const customers = Customers.slice(0, 5);

  let chartOptions = $derived(getChartOptions(false));

  $effect(() => {
    chartOptions.series = series;
  });

  let dark = $state(false);
  const statsCont = {
    title: "Statistics this month",
    popoverTitle: "Statistics",
    tab1Title: "Top products",
    tab2Title: "Top customers"
  };

  const devices: DeviceOption[] = [
    {
      title: "Desktop",
      subtitle: "234k",
      change: 4,
      IconOption: {
        icon: DesktopPcOutline
      }
    },
    {
      title: "Phone",
      subtitle: "94k",
      change: -1,
      IconOption: {
        icon: MobilePhoneOutline
      }
    },
    {
      title: "Tablet",
      subtitle: "16k",
      change: -0.6,
      IconOption: {
        icon: TabletOutline
      }
    }
  ];
</script>

<div class="mt-px space-y-4">
  <div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <ChartWidget value={12.5} {chartOptions} title="$45,385" subtitle="Sales this week" />
    <Stats {products} {customers} {...statsCont}>
      {#snippet popoverDesc()}
        <P>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</P>
        <More title="Read more" href="#top" flat />
      {/snippet}
    </Stats>
  </div>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-3">
    <ProductMetricCard title="New products" subTitle="2,340" changeProps={{ size: "sm", value: 12.5, since: "Since last month" }}>
      {#snippet chart()}
        <Chart options={thickbars} class="w-full" />
      {/snippet}
    </ProductMetricCard>

    <ProductMetricCard title="Users" subTitle="4,420" changeProps={{ size: "sm", value: -3.4, since: "Since last month" }}>
      {#snippet chart()}
        <DarkChart configFunc={users} class="w-full" />
      {/snippet}
    </ProductMetricCard>

    <ProductMetricCard title="Users" subTitle="4,420" changeProps={{ size: "sm", value: -3.4, since: "Since last month" }}>
      {#snippet chart()}
        <DarkChart
          configFunc={(d) => {
            const x = users(d);
            if (x.plotOptions?.bar) {
              x.plotOptions.bar.horizontal = true;
            } else {
              x.plotOptions = {
                bar: {
                  horizontal: true
                }
              };
            }
            return x;
          }}
          class="w-full"
        />
      {/snippet}
    </ProductMetricCard>
  </div>

  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <Chat />
    <div class="flex flex-col gap-4">
      <CategorySalesReport title="Sales by category" subtitle="Desktop PC" changeProps={{ value: 2.5, since: "Since last month", size: "sm" }}>
        {#snippet chart()}
          <Chart {options} />
        {/snippet}
      </CategorySalesReport>
      <Traffic {devices}>
        {#snippet chart()}
          <Chart options={trafficOptions(dark)} />
        {/snippet}
      </Traffic>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 xl:grid-cols-2">
    <ActivityList title="Latest Activity">
      {#snippet actions()}
        <a href="#top" class="text-primary-700 dark:text-primary-500 inline-flex items-center rounded-lg p-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700">View all</a>
      {/snippet}
      <Timeline>
        <TimelineItem title="Application UI design in Figma" date="April 2025">
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
          <Button color="alternative">Learn more<ArrowRightOutline class="ms-2" size="sm" /></Button>
        </TimelineItem>
        <TimelineItem title="Marketing UI code in Flowbite" date="March 2025">
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          <a href="#top" class="text-primary-700 dark:text-primary-500 inline-flex items-center text-xs font-medium hover:underline sm:text-sm">
            Go to Flowbite Blocks<ArrowRightOutline class="ms-2" size="sm" />
          </a>
        </TimelineItem>
        <TimelineItem title="Marketing UI design in Figma" date="February 2025">
          <p class="text-base font-normal text-gray-500 dark:text-gray-300">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </TimelineItem>
      </Timeline>
    </ActivityList>
    <Insights />
  </div>

  <Transactions {dark} />
</div>
