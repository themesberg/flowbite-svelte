<script>
  export let title = "Sign in";
  export let action;
  export let btnSignInColor = "blue";
  export let rememberMe = false;
  export let signupLink = {
    href: "",
    rel: "",
  };
  export let lostPasswordLink = {
    href: "",
    rel: "",
  };

  let submitClass;

  if (btnSignInColor === "blue") {
    submitClass =
      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  } else if (btnSignInColor === "gray") {
    submitClass =
      "w-full text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800";
  } else if (btnSignInColor === "red") {
    submitClass =
      "w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800";
  } else if (btnSignInColor === "yellow") {
    submitClass =
      "w-full text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800";
  } else if (btnSignInColor === "green") {
    submitClass =
      "w-full text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800";
  } else if (btnSignInColor === "indigo") {
    submitClass =
      "w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800";
  } else if (btnSignInColor === "purple") {
    submitClass =
      "w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800";
  } else if (btnSignInColor === "pink") {
    submitClass =
      "w-full text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800";
  } else {
    submitClass =
      "w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
  }
</script>

<div
  class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
>
  <form class="space-y-6" {action}>
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
    <div>
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Email</label
      >
      <input
        type="email"
        name="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Your password</label
      >
      <input
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
        required
      />
    </div>
    <div class="flex items-start">
      {#if rememberMe}
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div class="ml-3 text-sm">
            <label
              for="remember"
              class="font-medium text-gray-900 dark:text-gray-300"
              >Remember me</label
            >
          </div>
        </div>
      {/if}
      {#if lostPasswordLink}
        <a
          href={lostPasswordLink.href}
          rel={lostPasswordLink.rel}
          class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
          >Lost Password?</a
        >
      {/if}
    </div>
    <button type="submit" class={submitClass}>Login to your account</button>

    {#if signupLink}
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Not registered? <a
          href={signupLink.href}
          rel={signupLink.rel}
          class="text-blue-700 hover:underline dark:text-blue-500"
          >Create account</a
        >
      </div>
    {/if}
  </form>
</div>
