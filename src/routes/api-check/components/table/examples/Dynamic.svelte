<script lang="ts">
  import { Table, Button } from "flowbite-svelte";
  type ItemType = {
    id: number;
    maker: string;
    type: string;
    make: number;
  };
  let items: ItemType[] = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
  let items2: ItemType[] = [
    { id: 5, maker: "Nissan", type: "LMN", make: 2019 },
    { id: 6, maker: "VW", type: "OPQ", make: 2020 },
    { id: 7, maker: "Honda", type: "RST", make: 2021 },
    { id: 8, maker: "Audi", type: "UVW", make: 2023 }
  ];
  let carList: ItemType[] = $state(items);
  const changeItems = () => {
    carList = carList[0].id === items[0].id ? items2 : items;
  };
</script>

<Button onclick={changeItems} class="mb-4">Change data</Button>
<Table items={carList} hoverable={true}></Table>
