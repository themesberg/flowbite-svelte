<script module lang="ts">
/**
 * A Svelte 5 rune-based media query hook
 * @param {string} query - CSS media query string (e.g., '(min-width: 768px)')
 * @returns {() => boolean} A function that returns the current match state
 */
export function useMediaQuery(query) {
  let matches = $state(false);

  $effect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    matches = mediaQuery.matches;

    // @ts-ignore
    const handler = (e) => {
      matches = e.matches;
    };

    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  });

  return () => matches;
}

/**
 * Hook for common Tailwind CSS breakpoints
 * @returns {{ sm: boolean, md: boolean, lg: boolean, xl: boolean, '2xl': boolean, isMobile: boolean, isTablet: boolean, isDesktop: boolean }}
 */
export function useBreakpoints() {
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  const xxl = useMediaQuery("(min-width: 1536px)");

  return {
    get sm() {
      return sm();
    },
    get md() {
      return md();
    },
    get lg() {
      return lg();
    },
    get xl() {
      return xl();
    },
    get "2xl"() {
      return xxl();
    },
    get isMobile() {
      return !sm();
    },
    get isTablet() {
      return sm() && !lg();
    },
    get isDesktop() {
      return lg();
    }
  };
}

/**
 * Get current breakpoint name
 * @returns {() => string} Current breakpoint as string
 */
export function useCurrentBreakpoint() {
  let currentBreakpoint = $state("xs");

  $effect(() => {
    if (typeof window === "undefined") return;

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1536) currentBreakpoint = "2xl";
      else if (width >= 1280) currentBreakpoint = "xl";
      else if (width >= 1024) currentBreakpoint = "lg";
      else if (width >= 768) currentBreakpoint = "md";
      else if (width >= 640) currentBreakpoint = "sm";
      else currentBreakpoint = "xs";
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  });

  return () => currentBreakpoint;
}

/**
 * Common breakpoint values
 */
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
} as const;
</script>