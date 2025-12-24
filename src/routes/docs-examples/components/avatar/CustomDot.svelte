<script lang="ts">
  import { Avatar, Indicator } from "flowbite-svelte";
  import { BugOutline } from "flowbite-svelte-icons";
</script>

<Avatar src="/images/people/profile-picture-5.jpg">
  {#snippet indicator()}
    <Indicator color="purple" border size="xl" placement="top-right">
      <BugOutline />
    </Indicator>
  {/snippet}
</Avatar>
