<script>
    import { Gallery } from 'svelte-5-ui-lib';
    const images6 = [
        { alt: 'shoes', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg' },
        { alt: 'small bag', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg' },
        { alt: 'plants', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg' },
        { alt: 'watch', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg' },
        { alt: 'shoe', src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg' }
    ];
</script>

<Gallery divclass="gap-4">
    <img src={image5.src} alt={image5.alt} class="h-auto max-w-full rounded-lg" />
    <Gallery divclass="grid-cols-5" items={images6} />
</Gallery>