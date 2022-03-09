<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        title: `${status}: ${error.message}`,
      },
    };
  }
</script>

<script>
  export let title;
</script>

<h1 class="text-3xl w-full mb-8 text-gray-900 dark:text-white">{title}</h1>
