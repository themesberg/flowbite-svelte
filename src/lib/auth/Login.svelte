<script context="module">
  export async function load({ session }) {
    if (session.user) {
      return {
        status: 302,
        redirect: "/",
      };
    }
    return {};
  }
</script>

<script>
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";
  // import { SignInModal } from "$lib/modals/SignInModal.svelte";
  // export let btnName = "Sign In";
  export let btnColor = "blue";
  export let textColor = "gray";
  export let title = "Sign in to our platform";
  export let lostPasswordLink = "/lost-password";
  export let signUpLink = "/signup";
  export let formLink = "/signin";
  // Variables bound to respective inputs via bind:value
  let email;
  let password;
  let error;
  // let notice
  const login = async () => {
    // Reset error from previous failed attempts
    error = undefined;
    // POST method to src/routes/auth/login.js endpoint
    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const data = await res.json();
        $session.user = data.user;
        goto("/");
      } else {
        const data = await res.json();
        // console.log(data)
        error = `LOS001: ${data.message}`;
      }
    } catch (err) {
      console.log(err);
      error = "LOS002: Pleas try it again.";
    }
  };
</script>

<div
  class="bg-white rounded-lg lg:flex items-center justify-center md:mt-0 w-full lg:max-w-screen-lg 2xl:max:max-w-screen-lg xl:p-0 m-4 p-4"
>
  <div class="hidden lg:flex w-2/3">
    <img
      class="rounded-l-lg"
      src="https://flowbite.com/application-ui/demo/images/authentication/login.jpg"
      alt="login image"
    />
  </div>
  <div class="w-full p-6 sm:p-8 lg:p-16 lg:py-0 space-y-8">
    <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">
      Sign in to platform
    </h2>
    <form class="mt-8 space-y-6" action="#">
      <div>
        <label for="email" class="text-sm font-medium text-gray-900 block mb-2"
          >Your email</label
        >
        <input
          type="email"
          name="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="name@company.com"
          required
        />
      </div>
      <div>
        <label
          for="password"
          class="text-sm font-medium text-gray-900 block mb-2"
          >Your password</label
        >
        <input
          type="password"
          name="password"
          id="password"
          placeholder=""
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required
        />
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            name="remember"
            type="checkbox"
            class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
            required
          />
        </div>
        <div class="text-sm ml-3">
          <label for="remember" class="font-medium text-gray-900"
            >Remember me</label
          >
        </div>
        <a href="#" class="text-sm text-blue-700 hover:underline ml-auto"
          >Lost Password?</a
        >
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-3 w-full sm:w-auto text-center"
        >Login to your account</button
      >
      <div class="text-sm font-medium text-gray-500">
        Not registered? <a class="text-blue-700 hover:underline"
          >Create account</a
        >
      </div>
    </form>
  </div>
</div>
