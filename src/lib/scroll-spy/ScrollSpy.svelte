<script lang="ts">
  import { scrollspy } from './theme';
  import { twMerge } from 'tailwind-merge';
  import { browser } from '$app/environment';
  
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
    /** Scroll container selector (if scrolling within a container instead of window) */
    scrollContainer?: string;
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
    scrollContainer,
    onActiveChange,
    onNavigate
  }: Props = $props();
  
  let activeId = $state<string>(items[0]?.id || '');
  let isSticky = $state(false);
  let navElement: HTMLElement | null = $state(null);
  let scrollElement: any = $state(browser ? window : null);
  
  // Track intersecting sections and their IntersectionObserverEntries
  let intersectingSections = $state<Map<string, IntersectionObserverEntry>>(new Map());
  
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
      const currentScrollTop = container.scrollTop;
      const containerRect = container.getBoundingClientRect();
      targetPosition = elementRect.top - containerRect.top + currentScrollTop - offset;
    }
    
    try {
      if (isWindow) {
        window.scrollTo({
          top: targetPosition,
          behavior: smoothScroll ? 'smooth' : 'auto'
        });
      } else {
        container.scrollTo({
          top: targetPosition,
          behavior: smoothScroll ? 'smooth' : 'auto'
        });
      }
    } catch (error) {
      console.error('Scroll error:', error);
    }
    
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
    if (intersectingSections.size === 0) {
      // No sections visible — highlight first item
      if (activeId !== items[0]?.id) {
        activeId = items[0]?.id || '';
        onActiveChange?.(activeId);
      }
      return;
    }
    
    // Sort by intersection ratio descending, then by items order ascending
    const sorted = Array.from(intersectingSections.entries()).sort((a, b) => {
      const ratioA = a[1].intersectionRatio;
      const ratioB = b[1].intersectionRatio;
      
      if (Math.abs(ratioA - ratioB) > 0.01) {
        return ratioB - ratioA;
      }
      
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
    if (!browser) return { disconnect: () => {} };
    
    // Disconnect existing observer if any
    const existingObserver = (window as any).__scrollSpyObserver;
    if (existingObserver) {
      existingObserver.disconnect();
    }
    
    const root = scrollContainer ? document.querySelector(scrollContainer) : null;
    if (scrollContainer && !root) {
      console.warn('ScrollSpy: Scroll container not found:', scrollContainer);
    }
    
    const rootMargin = `-${offset}px 0px -40% 0px`;
    // Use full threshold range 0.0 → 1.0 in 0.01 steps for smooth updates
    const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
          intersectingSections.set(id, entry);
        } else {
          intersectingSections.delete(id);
        }
      });
      updateActiveSection();
    }, {
      root,
      rootMargin,
      threshold: thresholds
    });
    
    (window as any).__scrollSpyObserver = observer;
    
    items.forEach(item => {
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
    
    const scrollPosition = isWindow 
      ? window.scrollY
      : (container as HTMLElement).scrollTop;
    
    isSticky = scrollPosition > 0;
    updateActiveSection();
  }
  
  $effect(() => {
    if (!browser) return;
    
    if (scrollContainer) {
      const container = document.querySelector(scrollContainer);
      if (container instanceof HTMLElement) scrollElement = container;
      else {
        console.warn('ScrollSpy: Scroll container not found:', scrollContainer);
        scrollElement = window;
      }
    } else {
      scrollElement = window;
    }
    
    const observer = setupIntersectionObserver();
    
    const container = scrollElement instanceof Window ? window : scrollElement;
    container.addEventListener('scroll', handleScroll, { passive: true } as any);
    handleScroll();
    
    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', handleScroll as any);
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
            onclick={(e) => {
              scrollToSection(item.id, e);
            }}
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
