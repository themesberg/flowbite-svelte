# Svelte Video - Flowbite


## Setup

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>
```

## Video player

Use this example to create a native browser video player and apply the w-full utility class from Tailwind CSS to span the full width of the parent container.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" controls trackSrc="flowbite.mp4" />
```

## Autoplay

Use the autoplay attribute on the video component to automatically start the video when the page has been loaded.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" autoplay controls trackSrc="flowbite.mp4" />
```

## Muted

Use the muted attribute together with the autoplay option to start the video while the sound is muted.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" autoplay muted controls trackSrc="flowbite.mp4" />
```

## Sizes

Set the width and height of the video component using the `w-{size}` and `h-{size}` classes.

### Width

Use the `w-{size}` class to set the height of the video player.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" controls class="w-96" trackSrc="flowbite.mp4" />
```

### Height

Use the `h-{size}` class to set the height of the video player.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" controls class="h-80" trackSrc="flowbite.mp4" />
```

### Responsive

Use the following example to make the video responsive across all devices and viewports.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full" trackSrc="flowbite.mp4" />
```

### Custom styles

Customize the video player appearance using the utility classes from Tailwind CSS such as `rounded-{size}` or border to set rounded corners and border.

```svelte
<script lang="ts">
  import { Video } from "flowbite-svelte";
</script>

<Video src="/videos/flowbite.mp4" controls class="h-auto w-full max-w-full rounded-lg border border-gray-200 dark:border-gray-700" trackSrc="flowbite.mp4" />
```

## Component data

### Video

#### Types

[VideoProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2049)

#### Props

- children
- type: "video/mp4"
- trackSrc
- src
- srclang: "en"
- label: "english_captions"
- class: classname


## References

- [Flowbite Video](https://flowbite.com/docs/components/video/)
