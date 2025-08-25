<script lang="ts">
  import { MultiSelect, Badge, type SelectOptionType } from "flowbite-svelte";

  let colorCountries: SelectOptionType<string>[] = [
    { value: "us", name: "United States", color: "indigo" },
    { value: "ca", name: "Canada", color: "green" },
    { value: "fr", name: "France", color: "blue" },
    { value: "jp", name: "Japan", color: "red" },
    { value: "en", name: "England", color: "yellow" }
  ];
  let preselected: string[] = ["us", "fr"];
</script>

<MultiSelect items={colorCountries} value={preselected}>
  {#snippet children({ item, clear })}
    <Badge color={item.color} dismissable params={{ duration: 100 }} onclose={clear}>
      {item.name}
    </Badge>
  {/snippet}
</MultiSelect>
