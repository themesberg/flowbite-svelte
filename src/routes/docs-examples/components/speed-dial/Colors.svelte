<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { ShareNodesSolid } from "flowbite-svelte-icons";
</script>

<div class="grid w-fit grid-cols-8 gap-x-6 gap-y-18">
  <SpeedDialTrigger />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="success" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="warning" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="dark" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="danger" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purpleToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyanToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="greenToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purpleToPink" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="success" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="warning" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="danger" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="blue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyan" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="teal" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger shadow gradient color="blue" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="green" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="purple" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="pink" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
</div>
