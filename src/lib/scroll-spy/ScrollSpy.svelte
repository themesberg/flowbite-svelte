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
  const INTERSECTION_RATIO_EPSILON = 0.01;
  // Bottom margin determines how far up the viewport a section must scroll before becoming inactive
  const ROOT_MARGIN_BOTTOM = "-40%";

  let activeId = $state<string>(items.length > 0 ? items[0].id : "");
  let isSticky = $state(false);
  let navElement: HTMLElement | null = $state(null);
  let scrollElement: Window | HTMLElement | null = $state(browser ? window : null);

  // Track intersecting sections and their IntersectionObserverEntries
  let intersectingSections = $state<Map<string, IntersectionObserverEntry>>(new Map());

  const theme = $derived.by(() => {
    const { base, container, list, li } = scrollspy({
      position,
      sticky,
      isSticky
    });

    const { link: activeLink } = scrollspy({ active: true });
    const { link: inactiveLink } = scrollspy({ active: false });

    return {
      base: base({ class: clsx(styles?.base, className) }),
      container: container({ class: clsx(styles?.container, classes?.container) }),
      list: list({ class: clsx(styles?.list, classes?.list) }),
      activeLink: activeLink({ class: clsx(styles?.link, classes?.link) }),
      inactiveLink: inactiveLink({ class: clsx(styles?.link, classes?.link) }),
      li: li({ class: clsx(styles?.li, classes?.li) })
    };
  });

  function getItemClass(itemId: string): string {
    const isActive = activeId === itemId;
    const link = isActive ? theme.activeLink : theme.inactiveLink;

    const customClass = isActive ? activeClass : inactiveClass;

    return clsx(link, customClass);
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

      if (Math.abs(ratioA - ratioB) > INTERSECTION_RATIO_EPSILON) {
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

    const rootMargin = `-${offset}px 0px ${ROOT_MARGIN_BOTTOM} 0px`;
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
      container.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<nav {...restProps} bind:this={navElement} class={theme.base} aria-label="Scroll spy navigation">
  <div class={theme.container}>
    <ul class={theme.list} role="list">
      {#each items as item (item.id)}
        <li class={theme.li}>
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

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ScrollSpyProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2213)
## Props
@prop items
@prop position = "top"
@prop offset = 0
@prop sticky = true
@prop activeClass = ""
@prop inactiveClass = ""
@prop class: className = ""
@prop smoothScroll = true
@prop scrollContainer
@prop onActiveChange
@prop onNavigate
@prop classes
@prop ...restProps
-->
