<script>
  export let img = {
    src: "/images/product-1.png",
    alt: "product image",
  };
  export let link = "/#";
  export let title =
    "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
  export let stars = "5.0";
  export let price = "$555";
</script>

<div
  class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <a href={link}>
    <img class="p-8 rounded-t-lg" src={img.src} alt={img.alt} />
  </a>
  <div class="px-5 pb-5">
    <a href={link}>
      <h3
        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h3>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
      <svg
        class="w-5 h-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
        /></svg
      >
      <span
        class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"
        >{stars}</span
      >
    </div>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white"
        >{price}</span
      >
      <a
        href={link}
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Add to cart</a
      >
    </div>
  </div>
</div>
