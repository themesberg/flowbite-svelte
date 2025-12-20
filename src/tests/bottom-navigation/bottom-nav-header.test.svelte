<script lang="ts">
  import { BottomNavHeader, BottomNavHeaderItem } from "$lib";
</script>

<BottomNavHeader>
  <BottomNavHeaderItem itemName="Recent" active={false} />
  <BottomNavHeaderItem itemName="Popular" active={true} />
  <BottomNavHeaderItem itemName="Featured" active={false} />
</BottomNavHeader>
