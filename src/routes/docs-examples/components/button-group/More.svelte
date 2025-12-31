<script lang="ts">
  import { ButtonGroup, Button, GradientButton } from "flowbite-svelte";
</script>

<div class="text-gray-900 dark:text-gray-100">
  <div class="py-4">Pills</div>
  <ButtonGroup class="space-x-px">
    <Button pill>Profile</Button>
    <Button pill>Settings</Button>
    <Button pill>Messages</Button>
  </ButtonGroup>
  <div class="py-4">Standard buttons</div>
  <ButtonGroup>
    <Button color="danger">Profile</Button>
    <Button color="success">Settings</Button>
    <Button color="warning">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Outline</div>
  <ButtonGroup>
    <Button outline color="danger">Profile</Button>
    <Button outline color="success">Settings</Button>
    <Button outline color="warning">Messages</Button>
  </ButtonGroup>
  <div class="py-4">Gradient with shadows</div>
  <ButtonGroup>
    <GradientButton shadow color="green">Profile</GradientButton>
    <GradientButton shadow color="pink">Settings</GradientButton>
    <GradientButton shadow color="teal">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient</div>
  <ButtonGroup class="space-x-px">
    <GradientButton color="purpleToBlue">Profile</GradientButton>
    <GradientButton color="cyanToBlue">Settings</GradientButton>
    <GradientButton color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
  <div class="py-4">Dualtone gradient pill</div>
  <ButtonGroup class="space-x-px">
    <GradientButton pill color="purpleToBlue">Profile</GradientButton>
    <GradientButton pill color="cyanToBlue">Settings</GradientButton>
    <GradientButton pill color="greenToBlue">Messages</GradientButton>
  </ButtonGroup>
</div>
