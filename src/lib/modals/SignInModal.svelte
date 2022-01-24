<script>
  export let btnName = "Sign In";
  export let btnColor = "blue";
  export let textColor = "gray";
  export let title = "Sign in to our platform";
  export let lostPasswordLink = "/lost-password";
  export let signUpLink = "/signup";
  export let formLink = "/signin";
</script>

<button
  class="block text-white bg-{btnColor}-700 hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800"
  type="button"
  data-modal-toggle="authentication-modal"
>
  {btnName}
</button>

<div
  id="authentication-modal"
  aria-hidden="true"
  class="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0"
>
  <div class="relative px-4 w-full max-w-md h-full md:h-auto">
    <div class="relative bg-white rounded-lg shadow dark:bg-{textColor}-700">
      <div class="flex justify-end p-2">
        <button
          type="button"
          class="text-{textColor}-400 bg-transparent hover:bg-{textColor}-200 hover:text-{textColor}-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-{textColor}-800 dark:hover:text-white"
          data-modal-toggle="authentication-modal"
        >
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            /></svg
          >
        </button>
      </div>
      <form
        class="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
        action={formLink}
      >
        <h3 class="text-xl font-medium text-{textColor}-900 dark:text-white">
          {title}
        </h3>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-{textColor}-900 dark:text-{textColor}-300"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-{textColor}-50 border border-{textColor}-300 text-{textColor}-900 text-sm rounded-lg focus:ring-{btnColor}-500 focus:border-{btnColor}-500 block w-full p-2.5 dark:bg-{textColor}-600 dark:border-{textColor}-500 dark:placeholder-{textColor}-400 dark:text-white"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-{textColor}-900 dark:text-{textColor}-300"
            >Your password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-{textColor}-50 border border-{textColor}-300 text-{textColor}-900 text-sm rounded-lg focus:ring-{btnColor}-500 focus:border-{btnColor}-500 block w-full p-2.5 dark:bg-{textColor}-600 dark:border-{textColor}-500 dark:placeholder-{textColor}-400 dark:text-white"
            required=""
          />
        </div>
        <div class="flex justify-between">
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                class="w-4 h-4 bg-{textColor}-50 rounded border border-{textColor}-300 focus:ring-3 focus:ring-{btnColor}-300 dark:bg-{textColor}-600 dark:border-{textColor}-500 dark:focus:ring-{btnColor}-600 dark:ring-offset-{textColor}-800"
                required=""
              />
            </div>
            <div class="ml-3 text-sm">
              <label
                for="remember"
                class="font-medium text-{textColor}-900 dark:text-{textColor}-300"
                >Remember me</label
              >
            </div>
          </div>
          <a
            href={lostPasswordLink}
            class="text-sm text-{btnColor}-700 hover:underline dark:text-{btnColor}-500"
            >Lost Password?</a
          >
        </div>
        <button
          type="submit"
          class="w-full text-white bg-{btnColor}-700 hover:bg-{btnColor}-800 focus:ring-4 focus:ring-{btnColor}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-{btnColor}-600 dark:hover:bg-{btnColor}-700 dark:focus:ring-{btnColor}-800"
          >Login to your account</button
        >
        <div
          class="text-sm font-medium text-{textColor}-500 dark:text-{textColor}-300"
        >
          Not registered? <a
            href={signUpLink}
            class="text-{btnColor}-700 hover:underline dark:text-{btnColor}-500"
            >Create account</a
          >
        </div>
      </form>
    </div>
  </div>
</div>
