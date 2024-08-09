<script lang="ts">
  import { Banner, Button, Skeleton, ImagePlaceholder, Label, Radio, type BannerProps } from 'svelte-5-ui-lib';

  let position: BannerProps['position'] = $state('sticky');
  const changePosition = () => {
    position = position === 'sticky' ? 'absolute' : 'sticky';
    if ( position === 'sticky'){ bannerType = 'default' };
  }
  let bannerType: BannerProps['bannerType'] = $state('default');
  const changeBannerType = () => {
    bannerType = bannerType === 'default' ? 'cta' : 'default';
    if (bannerType === 'cta'){ position = 'absolute' };
  }
  let color: BannerProps['color'] = $state('gray');
  let bannerClass: BannerProps['class'] = $state('')
  const changeClass = () => {
    bannerClass = bannerClass === '' ? 'my-4' : ''
  }
  let bannerStatus = $state(true)
  const changeStatus = () => {
    bannerStatus = true
  }
</script>

<Skeleton class="py-4" />
  <ImagePlaceholder class="py-4" />

  <Banner id="sample-banner" {position} {bannerType} {color} class={bannerClass} bind:bannerStatus={bannerStatus}>
    <p
      class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400"
    >
      <span
        class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600"
      >
        <BullhornOutline class="h-3 w-3 text-gray-500 dark:text-gray-400" />
        <span class="sr-only">Light bulb</span>
      </span>
      <span>
        New brand identity has been launched for the <a
          href="https://flowbite.com"
          class="decoration-600 dark:decoration-500 inline font-medium text-primary-600 underline decoration-solid underline-offset-2 hover:no-underline dark:text-primary-500"
        >
          Flowbite Library
        </a>
      </span>
    </p>
  </Banner>
 <div class="mt-8 space-y-4">
  <div class="flex space-x-4">
    <Label>Color:  {color}</Label>
    <Radio name="color" bind:group={color} value="red">Red</Radio>
    <Radio name="color" bind:group={color} value="green">Green</Radio>
    <Radio name="color" bind:group={color} value="yellow">Yellow</Radio>
    <Radio name="color" bind:group={color} value="indigo">Indigo</Radio>
    <Radio name="color" bind:group={color} value="purple">Purple</Radio>
    <Radio name="color" bind:group={color} value="pink">Pink</Radio>
  </div>
  <Button onclick={changePosition}>Change position</Button>
  <Button color="blue" onclick={changeBannerType}>Change banner type</Button>
  <Button color="green" onclick={changeClass}>{bannerClass? 'Remove class' : 'Add class'}</Button>
  {#if !bannerStatus}
    <Button color="light" onclick={changeStatus}>Open banner</Button>
  {/if}
</div>