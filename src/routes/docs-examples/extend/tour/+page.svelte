<!-- App.svelte -->
<script lang="ts">
  import { Tour, type TourStep, Button, Avatar } from "$lib";
  import { FireOutline, BellRingOutline, BellOutline, GlobeOutline, GridOutline, QuestionCircleOutline } from "flowbite-svelte-icons";

  let tourActive = $state<boolean>(false);
  let currentStep = $state<number>(0);

  const tourSteps: TourStep[] = [
    {
      target: "#welcome-section",
      title: "Welcome to Our App! 👋",
      description: "Let us show you around and help you get started with the key features.",
      placement: "bottom"
    },
    {
      target: "#search-bar",
      title: "Search Anything",
      description: "Use our powerful search to find exactly what you need in seconds.",
      placement: "bottom"
    },
    {
      target: "#profile-button",
      title: "Your Profile",
      description: "Access your account settings, preferences, and personal information here.",
      placement: "left"
    },
    {
      target: "#notifications",
      title: "Stay Updated",
      description: "Check your notifications to never miss important updates and messages.",
      placement: "bottom"
    },
    {
      target: "#help-center",
      title: "Need Help?",
      description: "Our help center is always available if you have questions or need assistance.",
      placement: "left"
    },
    {
      target: "#fast-performance",
      title: "Fast Performance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      placement: "right"
    },
    {
      target: "#secure",
      title: "Secure",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      placement: "top"
    },
    {
      target: "#customizable",
      title: "Customizable",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      placement: "bottom"
    },
    {
      target: "#a11y",
      title: "Accessibility Features",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      placement: "left"
    }
  ];

  function handleTourComplete(): void {
    console.log("Tour completed! 🎉");
    // Save to localStorage that user completed the tour
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("tourCompleted", "true");
    }
  }

  function handleTourSkip(): void {
    console.log("Tour skipped");
  }

  function startTour(): void {
    currentStep = 0;
    tourActive = true;
  }
</script>

<div class="min-h-screen bg-gray-50">
  <!-- Header -->
  <header class="sticky top-0 z-50 border-b border-gray-200 bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-8">
          <h1 id="welcome-section" class="text-xl font-bold text-gray-900">MyApp</h1>

          <div id="search-bar" class="hidden sm:block">
            <input type="text" placeholder="Search..." class="w-64 rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
        </div>

        <div class="flex items-center gap-4">
          <button id="notifications" class="relative rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900" aria-label="Notifications">
            <BellOutline class="h-6 w-6" />
            <span class="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
          </button>

          <button id="help-center" class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900" aria-label="Help">
            <QuestionCircleOutline class="h-6 w-6" />
          </button>

          <button id="profile-button" class="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100">
            <Avatar class="bg-blue-400 text-white">JD</Avatar>
            <span class="hidden text-sm font-medium text-gray-700 sm:block">John Doe</span>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <div class="mb-8 rounded-lg bg-white p-8 shadow-sm">
      <h2 class="mb-4 text-2xl font-bold text-gray-900">Welcome Back! 👋</h2>
      <p class="mb-6 text-gray-600">Ready to explore? Start the interactive tour to learn about all the features.</p>
      <Button onclick={startTour}>Start Tour</Button>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <div id="fast-performance" class="rounded-lg bg-white p-6 shadow-sm">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
          <FireOutline class="h-6 w-6 text-purple-600" />
        </div>
        <h3 class="mb-2 text-lg font-semibold text-gray-900">Fast Performance</h3>
        <p class="text-sm text-gray-600">Lightning fast load times and smooth interactions.</p>
      </div>

      <div id="secure" class="rounded-lg bg-white p-6 shadow-sm">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
          <BellRingOutline class="h-6 w-6 text-green-600" />
        </div>
        <h3 class="mb-2 text-lg font-semibold text-gray-900">Secure</h3>
        <p class="text-sm text-gray-600">Your data is protected with enterprise-grade security.</p>
      </div>

      <div id="customizable" class="rounded-lg bg-white p-6 shadow-sm">
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
          <GlobeOutline class="h-6 w-6 text-blue-600" />
        </div>
        <h3 class="mb-2 text-lg font-semibold text-gray-900">Customizable</h3>
        <p class="text-sm text-gray-600">Tailor the experience to match your workflow.</p>
      </div>

      <div id="a11y" class="rounded-lg bg-white p-6 shadow-sm">
        <div class="bg-primary-100 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
          <GridOutline class="text-primary-600 h-6 w-6" />
        </div>
        <h3 class="mb-2 text-lg font-semibold text-gray-900">A11y</h3>
        <p class="text-sm text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      </div>
    </div>
  </main>

  <!-- Tour Component -->
  <Tour bind:active={tourActive} bind:currentStep steps={tourSteps} oncomplete={handleTourComplete} onskip={handleTourSkip} />
</div>
