<!--
  @component
  ScrollSpy Navigation Component for Flowbite-Svelte
  
  A sticky navigation component that highlights the currently visible section
  based on scroll position. Supports smooth scrolling, keyboard navigation,
  and full accessibility.
  
  @example
  ```svelte
  <ScrollSpy
    items={[
      { id: 'intro', label: 'Introduction' },
      { id: 'features', label: 'Features' },
      { id: 'pricing', label: 'Pricing' }
    ]}
    position="top"
    offset={80}
  />
  ```
-->

<script lang="ts">
  import { scrollspy } from './theme';
  import { twMerge } from 'tailwind-merge';
  
  export interface ScrollSpyItem {
    id: string;
    label: string;
    href?: string;
  }
  
  interface Props {
    /** Array of navigation items */
    items: ScrollSpyItem[];
    /** Position of the navigation bar */
    position?: 'top' | 'left' | 'right';
    /** Offset from top when calculating active section (useful for fixed headers) */
    offset?: number;
    /** Intersection observer threshold (0-1) */
    threshold?: number;
    /** Enable sticky positioning */
    sticky?: boolean;
    /** Custom class for active item */
    activeClass?: string;
    /** Custom class for inactive item */
    inactiveClass?: string;
    /** Custom class for nav container */
    class?: string;
    /** Custom classes for different slots */
    classContainer?: string;
    classList?: string;
    classLink?: string;
    /** Enable smooth scroll behavior */
    smoothScroll?: boolean;
    /** Callback when active section changes */
    onActiveChange?: (itemId: string) => void;
    /** Callback when navigation item is clicked */
    onNavigate?: (itemId: string) => void;
  }
  
  let {
    items,
    position = 'top',
    offset = 0,
    sticky = true,
    activeClass = '',
    inactiveClass = '',
    class: className = '',
    classContainer = '',
    classList = '',
    classLink = '',
    smoothScroll = true,
    onActiveChange,
    onNavigate
  }: Props = $props();
  
  let activeId = $state<string>(items[0]?.id || '');
  let isSticky = $state(false);
  let navElement: HTMLElement | null = $state(null);
  
  // Track which sections are currently intersecting
  let intersectingSections = $state<Map<string, IntersectionObserverEntry>>(new Map());
  
  // Generate theme classes using tailwind-variants
  const theme = $derived(() => {
    const isStickyAllowed = sticky && position === 'top';
    const { base, container, list, link, li } = scrollspy({ 
      position, 
      sticky: isStickyAllowed,
      isSticky 
    });
    
    return {
      base: twMerge(base(), className),
      container: twMerge(container(), classContainer),
      list: twMerge(list(), classList),
      link: link(),
      li: li()
    };
  });
  
  function getItemClass(itemId: string): string {
    const isActive = activeId === itemId;
    const { link } = scrollspy({ active: isActive });
    
    const customClass = isActive ? activeClass : inactiveClass;
    
    return twMerge(theme().link, link(), customClass, classLink);
  }
  
  function scrollToSection(itemId: string, event?: MouseEvent) {
    if (event) {
      event.preventDefault();
    }
    
    const element = document.getElementById(itemId);
    
    if (!element) {
      console.warn(`ScrollSpy: Element with id "${itemId}" not found`);
      return;
    }
    
    // Use scrollIntoView for reliable scrolling
    const scrollOptions: ScrollIntoViewOptions = {
      behavior: smoothScroll ? 'smooth' : 'auto',
      block: 'start'
    };
    
    element.scrollIntoView(scrollOptions);
    
    // Adjust for offset after scrolling
    if (offset > 0) {
      // Use a small delay for smooth scroll to complete
      const delay = smoothScroll ? 50 : 0;
      setTimeout(() => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        window.scrollTo({
          top: currentScroll - offset,
          behavior: 'auto' // Instant adjustment
        });
      }, delay);
    }
    
    // Update active state immediately for better UX
    activeId = itemId;
    onNavigate?.(itemId);
  }
  
  function handleKeydown(event: KeyboardEvent, itemId: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToSection(itemId);
    }
  }
  
  function updateActiveSection() {
    if (intersectingSections.size === 0) return;
    
    // Get all intersecting sections with their entries
    const intersecting = Array.from(intersectingSections.entries());
    
    // Check if we're near the bottom of the page
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const clientHeight = window.innerHeight;
    const isNearBottom = scrollHeight - (scrollTop + clientHeight) < 100;
    
    // If we're near the bottom, activate the last section if it's intersecting
    if (isNearBottom) {
      const lastItem = items[items.length - 1];
      if (lastItem && intersectingSections.has(lastItem.id)) {
        if (activeId !== lastItem.id) {
          activeId = lastItem.id;
          onActiveChange?.(lastItem.id);
        }
        return;
      }
    }
    
    // Otherwise, find the section that's most visible and highest on the page
    // Sort by: 1) intersection ratio (descending), 2) position in items array (ascending)
    const sorted = intersecting.sort((a, b) => {
      const ratioA = a[1].intersectionRatio;
      const ratioB = b[1].intersectionRatio;
      
      // If intersection ratios are significantly different, prefer higher ratio
      if (Math.abs(ratioA - ratioB) > 0.1) {
        return ratioB - ratioA;
      }
      
      // Otherwise, prefer the one that appears first in the items array
      const indexA = items.findIndex(item => item.id === a[0]);
      const indexB = items.findIndex(item => item.id === b[0]);
      return indexA - indexB;
    });
    
    const [newActiveId] = sorted[0];
    
    if (activeId !== newActiveId) {
      activeId = newActiveId;
      onActiveChange?.(newActiveId);
    }
  }
  
  function setupIntersectionObserver() {
    // Disconnect existing observer if any
    const existingObserver = (window as any).__scrollSpyObserver;
    if (existingObserver) {
      existingObserver.disconnect();
    }
    
    // Use a more forgiving rootMargin for the last section
    const options: IntersectionObserverInit = {
      rootMargin: `-${offset}px 0px -40% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.id;
        
        if (entry.isIntersecting) {
          intersectingSections.set(id, entry);
        } else {
          intersectingSections.delete(id);
        }
      });
      
      updateActiveSection();
    }, options);
    
    // Store observer globally to ensure cleanup
    (window as any).__scrollSpyObserver = observer;
    
    // Observe all sections
    items.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      } else {
        console.warn(`ScrollSpy: Section with id "${item.id}" not found in DOM`);
      }
    });
    
    return observer;
  }
  
  function handleScroll() {
    if (!navElement || !sticky) return;
    
    const scrollPosition = window.scrollY;
    isSticky = scrollPosition > 0;
    
    // Update active section on scroll (for better last section detection)
    updateActiveSection();
  }
  
  // Setup and cleanup effects
  $effect(() => {
    const observer = setupIntersectionObserver();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<nav
  bind:this={navElement}
  class={theme().base}
  aria-label="Scroll spy navigation"
>
  <div class={theme().container}>
    <ul class={theme().list} role="list">
      {#each items as item (item.id)}
        <li class={theme().li}>
          <a
            href={item.href || `#${item.id}`}
            class={getItemClass(item.id)}
            aria-current={activeId === item.id ? 'location' : undefined}
            onclick={(e) => scrollToSection(item.id, e)}
            onkeydown={(e) => handleKeydown(e, item.id)}
            tabindex="0"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>