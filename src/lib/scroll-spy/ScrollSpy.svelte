<script lang="ts">
  import { scrollspy } from "./theme";
  import type { ScrollSpyProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let {
    items,
    position = "top",
    offset = 0,
    sticky = true,
    activeClass = "",
    inactiveClass = "",
    class: className = "",
    smoothScroll = true,
    scrollContainer,
    onActiveChange,
    onNavigate,
    classes,
    ...restProps
  }: ScrollSpyProps = $props();

  const browser = typeof window !== "undefined";
  const styles = getTheme("scrollspy");

  let activeId = $state<string>(items[0]?.id || "");
  let isSticky = $state(false);
  let navElement: HTMLElement | null = $state(null);
  let scrollElement: Window | HTMLElement | null = $state(browser ? window : null);

  // Track intersecting sections and their IntersectionObserverEntries
  let intersectingSections = $state<Map<string, IntersectionObserverEntry>>(new Map());

  const theme = $derived.by(() => {
    const { base, container, list, link, li } = scrollspy({
      position,
      sticky,
      isSticky
    });

    return {
      base: base({ class: clsx(styles?.base, className) }),
      container: container({ class: clsx(styles?.container, classes?.container) }),
      list: list({ class: clsx(styles?.list, classes?.list) }),
      link: link({ class: clsx(styles?.link, classes?.link) }),
      li: li({ class: clsx(styles?.li, classes?.li) })
    };
  });

  function getItemClass(itemId: string): string {
    const isActive = activeId === itemId;
    const { link } = scrollspy({ active: isActive });

    const customClass = isActive ? activeClass : inactiveClass;

    return clsx(theme.link, link(), customClass, classes?.link);
  }

  function scrollToSection(itemId: string, event?: MouseEvent) {
    if (!browser) return;

    if (event) event.preventDefault();

    const element = document.getElementById(itemId);
    if (!element) {
      console.warn(`ScrollSpy: Element with id "${itemId}" not found`);
      return;
    }

    const container = !scrollElement || scrollElement === window ? window : scrollElement;
    const isWindow = container === window;

    const elementRect = element.getBoundingClientRect();
    let targetPosition: number;

    if (isWindow) {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      targetPosition = elementRect.top + currentScrollY - offset;
    } else {
      const currentScrollTop = (container as HTMLElement).scrollTop; // Type assertion
      const containerRect = (container as HTMLElement).getBoundingClientRect(); // Type assertion
      targetPosition = elementRect.top - containerRect.top + currentScrollTop - offset;
    }

    try {
      if (isWindow) {
        window.scrollTo({
          top: targetPosition,
          behavior: smoothScroll ? "smooth" : "auto"
        });
      } else {
        (container as HTMLElement).scrollTo({
          // Type assertion
          top: targetPosition,
          behavior: smoothScroll ? "smooth" : "auto"
        });
      }
    } catch (error) {
      console.error("Scroll error:", error);
    }

    activeId = itemId;
    onNavigate?.(itemId);
  }

  function handleKeydown(event: KeyboardEvent, itemId: string) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToSection(itemId);
    }
  }

  function updateActiveSection() {
    if (intersectingSections.size === 0) {
      // No sections visible — highlight first item
      if (activeId !== items[0]?.id) {
        activeId = items[0]?.id || "";
        onActiveChange?.(activeId);
      }
      return;
    }

    // Sort by intersection ratio descending, then by items order ascending
    const itemIndexMap = new Map(items.map((item, index) => [item.id, index]));
    const sorted = Array.from(intersectingSections.entries()).sort((a, b) => {
      const ratioA = a[1].intersectionRatio;
      const ratioB = b[1].intersectionRatio;

      if (Math.abs(ratioA - ratioB) > 0.01) {
        return ratioB - ratioA;
      }

      const indexA = itemIndexMap.get(a[0]) ?? -1;
      const indexB = itemIndexMap.get(b[0]) ?? -1;
      return indexA - indexB;
    });

    const [newActiveId] = sorted[0];

    if (activeId !== newActiveId) {
      activeId = newActiveId;
      onActiveChange?.(newActiveId);
    }
  }

  function setupIntersectionObserver() {
    if (!browser) return { disconnect: () => {} };

    const root = scrollContainer ? document.querySelector(scrollContainer) : null;
    if (scrollContainer && !root) {
      console.warn("ScrollSpy: Scroll container not found:", scrollContainer);
    }

    const rootMargin = `-${offset}px 0px -40% 0px`;
    // Use threshold range 0.0 → 1.0 in 0.1 steps for smooth updates with better performance
    const thresholds = Array.from({ length: 11 }, (_, i) => i / 10);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            intersectingSections.set(id, entry);
          } else {
            intersectingSections.delete(id);
          }
        });
        updateActiveSection();
      },
      {
        root,
        rootMargin,
        threshold: thresholds
      }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
      else console.warn(`ScrollSpy: Section with id "${item.id}" not found in DOM`);
    });

    return observer;
  }

  function handleScroll() {
    if (!browser || !navElement || !sticky || !scrollElement) return;

    const container = scrollElement instanceof Window ? window : scrollElement;
    const isWindow = container === window;

    const scrollPosition = isWindow ? window.scrollY : (container as HTMLElement).scrollTop; // Type assertion here

    isSticky = scrollPosition > 0;
    updateActiveSection();
  }

  $effect(() => {
    if (!browser) return;

    if (scrollContainer) {
      const container = document.querySelector(scrollContainer);
      if (container instanceof HTMLElement) scrollElement = container;
      else {
        console.warn("ScrollSpy: Scroll container not found:", scrollContainer);
        scrollElement = window;
      }
    } else {
      scrollElement = window;
    }

    const observer = setupIntersectionObserver();

    const container = scrollElement instanceof Window ? window : scrollElement;
    container.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      intersectingSections.clear();
      container.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav {...restProps} bind:this={navElement} class={theme.base} aria-label="Scroll spy navigation">
  <div class={theme.container}>
    <ul class={theme.list} role="list">
      {#each items as item (item.id)}
        <li class={theme.li}>
          <!-- svelte-ignore a11y_invalid_attribute -->
          <a
            href={item.href || `#${item.id}`}
            class={getItemClass(item.id)}
            aria-current={activeId === item.id ? "location" : undefined}
            onclick={(e) => {
              scrollToSection(item.id, e);
            }}
            onkeydown={(e) => handleKeydown(e, item.id)}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
