<script lang="ts">
  import { ScrollSpy } from "$lib";
  import type { ScrollSpyItem } from "$lib/scroll-spy/ScrollSpy.svelte";

  const navigationItems: ScrollSpyItem[] = [
    { id: "introduction", label: "Introduction" },
    { id: "installation", label: "Installation" },
    { id: "basic-usage", label: "Basic Usage" },
    { id: "features", label: "Features" },
    { id: "props", label: "Props" },
    { id: "accessibility", label: "Accessibility" }
  ];

  let currentSection = $state("introduction");

  function handleActiveChange(itemId: string) {
    // console.log("Active section changed to:", itemId);
    currentSection = itemId;
  }

  function handleNavigate(itemId: string) {
    // console.log("Navigated to:", itemId);
    currentSection = itemId;
  }
  $inspect('Current section: ',currentSection);
</script>

<div class="min-h-screen dark:bg-gray-900">
  <!-- ScrollSpy Navigation -->
  <ScrollSpy items={navigationItems} sticky={true} offset={120} threshold={0.5} smoothScroll={true} onActiveChange={handleActiveChange} onNavigate={handleNavigate} />

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-8">
    <!-- Introduction Section -->
    <section id="introduction" class="min-h-screen border">
      <h1 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white">ScrollSpy Component</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>

    <!-- Installation Section -->
    <section id="installation" class="min-h-screen border">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Installation</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>

    <!-- Basic Usage Section -->
    <section id="basic-usage" class="min-h-screen border">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Basic Usage</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>

    <!-- Advanced Features Section -->
    <section id="features" class="min-h-screen border">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Features</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>

    <!-- Props Section -->
    <section id="props" class="min-h-screen border">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Props Reference</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>

    <!-- Accessibility Section -->
    <section id="accessibility" class="min-h-screen border">
      <h2 class="mb-6 text-3xl font-bold text-gray-900 dark:text-white">Accessibility</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis iure eius ex tenetur? Dolorum, nostrum corrupti? Est, labore nesciunt nihil veritatis tenetur quod quo! Eligendi tenetur architecto tempore at quam?</p>
    </section>
  </main>
</div>
