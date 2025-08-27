<script module lang="ts">
  /**
   * A Svelte 5 rune-based media query hook
   * @param query - CSS media query string (e.g., '(min-width: 768px)')
   * @returns A function that returns the current match state
   */
  export function useMediaQuery(query: string): () => boolean {
    let matches = $state<boolean>(false);

    $effect(() => {
      if (typeof window === "undefined") return;

      const mediaQuery: MediaQueryList = window.matchMedia(query);
      matches = mediaQuery.matches;

      const handler = (e: MediaQueryListEvent): void => {
        matches = e.matches;
      };

      mediaQuery.addEventListener("change", handler);

      return (): void => {
        mediaQuery.removeEventListener("change", handler);
      };
    });

    return (): boolean => matches;
  }

  /**
   * Hook for common Tailwind CSS breakpoints
   * @returns Object with boolean values for each breakpoint
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
   * @returns Current breakpoint as string
   */
  export function useCurrentBreakpoint(): () => "xs" | "sm" | "md" | "lg" | "xl" | "2xl" {
    let currentBreakpoint = $state<"xs" | "sm" | "md" | "lg" | "xl" | "2xl">("xs");

    $effect(() => {
      if (typeof window === "undefined") return;

      const updateBreakpoint = (): void => {
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

      return (): void => {
        window.removeEventListener("resize", updateBreakpoint);
      };
    });

    return (): "xs" | "sm" | "md" | "lg" | "xl" | "2xl" => currentBreakpoint;
  }

  // Type definitions for common breakpoint values
  export type BreakpointKey = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

  export const BREAKPOINTS: Record<BreakpointKey, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536
  } as const;
</script>
