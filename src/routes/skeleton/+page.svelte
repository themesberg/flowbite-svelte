<script>
    import { Skeleton, CardPlaceholder, ImagePlaceholder, VideoPlaceholder } from "$lib";
</script>

<h1>Skeleton</h1>

<h2>Default skeleton</h2>

<Skeleton size="sm" class="my-8" />
<Skeleton size="md" class="my-8" />
<Skeleton size="lg" class="my-8" />
<Skeleton size="xl" class="my-8" />
<Skeleton size="xxl" class="mt-8 mb-2.5" />

<h2>Card placeholder</h2>

<CardPlaceholder />

<h2>Image placeholder</h2>

<ImagePlaceholder />
<ImagePlaceholder imgHeight="h-60" class="mt-8" />

<h2>Video placeholder</h2>

<VideoPlaceholder />
<VideoPlaceholder size="md" class="mt-8" />
<VideoPlaceholder size="lg" class="mt-8" />
<VideoPlaceholder size="xl" class="mt-8" />
<VideoPlaceholder size="xxl" class="mt-8" />