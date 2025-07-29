<script>
  import { Avatar, Indicator } from "flowbite-svelte";
  import { BugOutline } from "flowbite-svelte-icons";
</script>

<Avatar src="/images/profile-picture-3.webp">
  {#snippet indicator()}
    <Indicator color="gray" border size="xl" placement="top-right">
      <BugOutline />
    </Indicator>
  {/snippet}
</Avatar>
