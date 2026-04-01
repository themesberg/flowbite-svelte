import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type KanbanBoardVariants = VariantProps<typeof kanbanBoard> & Classes<typeof kanbanBoard>;
export type KanbanCardVariants = VariantProps<typeof kanbanCard> & Classes<typeof kanbanCard>;

export const kanbanBoard = tv({
  slots: {
    base: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 md:p-4",
    column: "w-full rounded-xl shadow-sm p-3 md:p-4 flex flex-col bg-neutral-primary-soft text-heading transition-colors",
    title: "text-sm md:text-base font-semibold mb-2 md:mb-3",
    list: "flex flex-col gap-2 flex-1 min-h-[60px]",
    button: "mt-2 md:mt-3 w-full bg-brand text-white rounded-lg py-1.5 text-xs md:text-sm font-medium hover:bg-brand-strong transition-colors focus:ring-2 focus:ring-brand focus:ring-offset-2"
  },
  variants: {
    isDragOver: {
      true: {
        column: "ring-2 ring-brand"
      }
    },
    isDragging: {
      true: {
        base: "opacity-50"
      }
    }
  }
});

export const kanbanCard = tv({
  slots: {
    base: "bg-neutral-primary-soft text-heading rounded-lg p-2.5 md:p-3 shadow-sm cursor-grab active:cursor-grabbing transition-all hover:bg-neutral-secondary-soft hover:shadow-md",
    title: "font-medium text-sm md:text-base",
    description: "text-xs md:text-sm text-body mt-1",
    tags: "flex flex-wrap gap-1 mt-2",
    tag: "text-[10px] md:text-xs bg-brand-softer text-fg-brand px-1.5 md:px-2 py-0.5 rounded-full"
  },
  variants: {
    isDragging: {
      true: {
        base: "opacity-50"
      }
    }
  }
});
