<script>
  import { Card } from "$lib/index";
</script>

<div class="relative bg-white overflow-hidden mt-8 mx-auto">
  <div class="max-w-7xl mx-auto ">
    <div
      class="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
    >
      <main
        class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
      >
        <div class="sm:text-center lg:text-left">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Svelte Flow </span>
            <span class="block text-indigo-600 xl:inline">UI Component</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg 
            md:max-w-xl sm:max-w-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Speed up your web development with Svelte Flow. Svelte Flow is
            powered by Tailwind CSS / Flowbite.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="/modals"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Modal Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12">
    <img
      class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
      src="/images/office1.jpeg"
      alt=""
    />
  </div>
</div>

<div class="container flex flex-wrap mx-auto mt-2 justify-center">
  <div class="p-4">
    <Card
      img="/images/alerts.png"
      header="ALERTS"
      link="/alerts"
      btnColor="red"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/buttons.png"
      header="BUTTONS"
      link="/buttons"
      btnColor="yellow"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/cards.png"
      header="CARDS"
      link="/cards"
      btnColor="purple"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/list-group.png"
      header="LIST-GROUP"
      link="/list-group"
      btnColor="green"
    />
  </div>
  <div class="p-4">
    <Card
      img="/images/modals.png"
      header="MODALS"
      link="/modals"
      btnColor="indigo"
    />
  </div>
  <div class="p-4">
    <Card img="/images/navbar.png" header="NAVBAR" link="/navbar" />
  </div>
  <div class="p-4">
    <Card img="/images/tabs.png" header="TABS" link="/tabs" btnColor="red" />
  </div>
</div>
