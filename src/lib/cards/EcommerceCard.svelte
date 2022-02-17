<script>
  export let img = {
    src: "/images/product-1.png",
    alt: "product image",
  };
  export let link = "/#";
  export let btnColor = "blue";
  export let rel;
  export let title =
    "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
  export let stars = "5.0";
  export let price = "$555";
  let spanClass;
  let linkClass;
  if (btnColor === "blue") {
    spanClass =
      "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3";
    linkClass =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnColor === "gray") {
    spanClass =
      "bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-200 dark:text-gray-800 ml-3";
    linkClass =
      "text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnColor === "red") {
    spanClass =
      "bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-800 ml-3";
    linkClass =
      "text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnColor === "yellow") {
    spanClass =
      "bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800 ml-3";
    linkClass =
      "text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnColor === "green") {
    spanClass =
      "bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-800 ml-3";
    linkClass =
      "text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnColor === "indigo") {
    spanClass =
      "bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800 ml-3";
    linkClass =
      "text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnColor === "purple") {
    spanClass =
      "bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-800 ml-3";
    linkClass =
      "text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnColor === "pink") {
    spanClass =
      "bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-800 ml-3";
    linkClass =
      "text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
    spanClass =
      "bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3";
    linkClass =
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
</script>

<div
  class="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <a href={link} {rel}>
    <img class="p-8 rounded-t-lg" src={img.src} alt={img.alt} />
  </a>
  <div class="px-5 pb-5">
    <a href={link} {rel}>
      <h3
        class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
        {title}
      </h3>
    </a>
    <div class="flex items-center mt-2.5 mb-5">
      {#each { length: parseInt(stars) } as _, i}
        <svg
          class="w-5 h-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          ><path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          /></svg
        >
      {/each}
      <span class={spanClass}>{stars}</span>
    </div>
    <div class="flex justify-between items-center">
      <span class="text-3xl font-bold text-gray-900 dark:text-white"
        >{price}</span
      >
      <a href={link} {rel} class={linkClass}>Add to cart</a>
    </div>
  </div>
</div>
