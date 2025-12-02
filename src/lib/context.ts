import { createContext } from "svelte";
import type {
  AccordionCtxType,
  BottomNavContextType,
  CarouselState,
  DrawerContextType,
  DropdownContextType,
  PaginationContextType,
  ButtonToggleContextType,
  ListContextType,
  ToolbarContextType,
  ListGroupContextType,
  ButtonGroupContextType,
  NavbarState,
  NavbarBreakpoint,
  SidebarCtxType,
  TableCtxType,
  TabsContextType
} from "./types";
import type { SplitPaneContext } from "./types";
import type { ThemeConfig } from "./theme";

/**
 * Helper function to create a context with safe getter that returns undefined instead of throwing
 * when accessed outside of the context provider.
 */
function createSafeContext<T>() {
  const [getRaw, set] = createContext<T>();

  function get(): T | undefined {
    try {
      return getRaw();
    } catch {
      return undefined;
    }
  }

  return [get, set] as const;
}

// Accordion
const [getAccordionContext, setAccordionContext] = createSafeContext<AccordionCtxType>();
export { getAccordionContext, setAccordionContext };

// BottomNav
const [getBottomNavContext, setBottomNavContext] = createSafeContext<BottomNavContextType>();
export { getBottomNavContext, setBottomNavContext };

// Carousel
const [getCarouselContext, setCarouselContext] = createSafeContext<CarouselState>();
export { getCarouselContext, setCarouselContext };

// Drawer
const [getDrawerContext, setDrawerContext] = createSafeContext<DrawerContextType>();
export { getDrawerContext, setDrawerContext };

// Dropdown
const [getDropdownContext, setDropdownContext] = createSafeContext<DropdownContextType>();
export { getDropdownContext, setDropdownContext };

// Pagination
const [getPaginationContext, setPaginationContext] = createSafeContext<PaginationContextType>();
export { getPaginationContext, setPaginationContext };

// ButtonToggle
const [getButtonToggleContext, setButtonToggleContext] = createSafeContext<ButtonToggleContextType>();
export { getButtonToggleContext, setButtonToggleContext };

// List
const [getListContext, setListContext] = createSafeContext<ListContextType>();
export { getListContext, setListContext };

// Toolbar
const [getToolbarContext, setToolbarContext] = createSafeContext<ToolbarContextType>();
export { getToolbarContext, setToolbarContext };

// Theme
const [getThemeContext, setThemeContext] = createSafeContext<ThemeConfig>();
export { getThemeContext, setThemeContext };

// ListGroup
const [getListGroupContext, setListGroupContext] = createSafeContext<ListGroupContextType>();
export { getListGroupContext, setListGroupContext };

// ButtonGroup
const [getButtonGroupContext, setButtonGroupContext] = createSafeContext<ButtonGroupContextType>();
export { getButtonGroupContext, setButtonGroupContext };

// Navbar
const [getNavbarStateContext, setNavbarStateContext] = createSafeContext<NavbarState>();
export { getNavbarStateContext, setNavbarStateContext };

const [getNavbarBreakpointContext, setNavbarBreakpointContext] = createSafeContext<NavbarBreakpoint>();
export { getNavbarBreakpointContext, setNavbarBreakpointContext };

// Sidebar
const [getSidebarContext, setSidebarContext] = createSafeContext<SidebarCtxType>();
export { getSidebarContext, setSidebarContext };

const [getActiveUrlContext, setActiveUrlContext] = createSafeContext<{ value: string }>();
export { getActiveUrlContext, setActiveUrlContext };

// Table
const [getTableContext, setTableContext] = createSafeContext<TableCtxType>();
export { getTableContext, setTableContext };

// SplitPane
const [getSplitPaneContext, setSplitPaneContext] = createSafeContext<SplitPaneContext>();
export { getSplitPaneContext, setSplitPaneContext };

// Tabs
const [getTabsContext, setTabsContext] = createSafeContext<TabsContextType>();
export { getTabsContext, setTabsContext };
