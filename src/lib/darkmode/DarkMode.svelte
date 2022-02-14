<script>
  import { onMount } from "svelte";
  export let btnClass =
    "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed left-0 top-8 z-50";

  let mode;

  const toggleTheme = () => {
    // console.log("clicked theme icon");
    if (localStorage.getItem("color-theme") === "dark") {
      console.log("it's dark");
      mode = "dark";
      window.document.documentElement.classList.remove("dark");
      window.document.documentElement.classList.add("light");
      localStorage.setItem("color-theme", "light");
    } else {
      console.log("it's light");
      mode = "light";
      window.document.documentElement.classList.remove("light");
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  };

  onMount(() => {
    let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    let themeToggleLightIcon = document.getElementById(
      "theme-toggle-light-icon"
    );
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      themeToggleDarkIcon.classList.add("hidden");
    } else {
      document.documentElement.classList.remove("dark");
      themeToggleLightIcon.classList.add("hidden");
    }
  });
</script>

<button
  on:click={toggleTheme}
  aria-label="Dark mode"
  id="theme-toggle"
  type="button"
  class={btnClass}
>
  <svg
    class:hidden={mode === "light"}
    on:click={() => (mode = "dark")}
    id="theme-toggle-dark-icon"
    class="hidden w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
    /></svg
  >

  <svg
    class:hidden={mode === "dark"}
    on:click={() => (mode = "light")}
    id="theme-toggle-light-icon"
    class="hidden w-5 h-5"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      fill-rule="evenodd"
      clip-rule="evenodd"
    /></svg
  >
</button>
