import { createContext } from 'svelte';
import type { AccordionCtxType, BottomNavContextType, CarouselState } from './types';

const [getAccordionContextRaw, setAccordionContext] = createContext<AccordionCtxType>();

// Wrap the getter to handle missing context gracefully
function getAccordionContext(): AccordionCtxType | undefined {
  try {
    return getAccordionContextRaw();
  } catch {
    return undefined;
  }
}

export { getAccordionContext, setAccordionContext };
  
// BottomNav
const [getBottomNavContextRaw, setBottomNavContext] = createContext<BottomNavContextType>();

function getBottomNavContext(): BottomNavContextType | undefined {
  try {
    return getBottomNavContextRaw();
  } catch {
    return undefined;
  }
}

export { getBottomNavContext, setBottomNavContext };

// Carousel
const [getCarouselContextRaw, setCarouselContext] = createContext<CarouselState>();

function getCarouselContext(): CarouselState | undefined {
  try {
    return getCarouselContextRaw();
  } catch {
    return undefined;
  }
}

export { getCarouselContext, setCarouselContext };

// Drawer
export type DrawerContextType = {
  placement: 'left' | 'right' | 'top' | 'bottom';
};

const [getDrawerContextRaw, setDrawerContext] = createContext<DrawerContextType>();

function getDrawerContext(): DrawerContextType | undefined {
  try {
    return getDrawerContextRaw();
  } catch {
    return undefined;
  }
}

export { getDrawerContext, setDrawerContext };

// Dropdown
export type DropdownContextType = {
  activeUrl: string;
};

const [getDropdownContextRaw, setDropdownContext] = createContext<DropdownContextType>();

function getDropdownContext(): DropdownContextType | undefined {
  try {
    return getDropdownContextRaw();
  } catch {
    return undefined;
  }
}

export { getDropdownContext, setDropdownContext };

// Pagination
export type PaginationContextType = {
  group: boolean;
  table?: boolean;
  size?: 'default' | 'large';
  activeClasses?: string;
};

const [getPaginationContextRaw, setPaginationContext] = createContext<PaginationContextType>();

function getPaginationContext(): PaginationContextType | undefined {
  try {
    return getPaginationContextRaw();
  } catch {
    return undefined;
  }
}

export { getPaginationContext, setPaginationContext };

// ButtonToggle
export type ButtonToggleContextType = {
  toggleSelected: (toggleValue: string) => void;
  isSelected: (toggleValue: string) => boolean;
  multiSelect: boolean;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  roundedSize?: 'sm' | 'md' | 'lg' | 'none';
  ctxIconClass?: string;
  ctxBtnClass?: string;
};

const [getButtonToggleContextRaw, setButtonToggleContext] = createContext<ButtonToggleContextType>();

function getButtonToggleContext(): ButtonToggleContextType | undefined {
  try {
    return getButtonToggleContextRaw();
  } catch {
    return undefined;
  }
}

export { getButtonToggleContext, setButtonToggleContext };
