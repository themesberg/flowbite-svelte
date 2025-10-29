import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

export type KanbanBoardVariants = VariantProps<typeof kanbanBoard> & Classes<typeof kanbanBoard>;
export type KanbanCardVariants = VariantProps<typeof kanbanCard> & Classes<typeof kanbanCard>;

export const kanbanBoard = tv({
	slots: {
		container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 p-2 md:p-4",
		column: "w-full rounded-xl shadow-sm p-3 md:p-4 flex flex-col bg-surface-elevated text-surface-foreground transition-colors",
		columnTitle: "text-sm md:text-base font-semibold mb-2 md:mb-3",
		cardList: "flex flex-col gap-2 flex-1 min-h-[60px]",
		card: "bg-surface text-surface-foreground rounded-lg p-2.5 md:p-3 shadow-sm cursor-grab active:cursor-grabbing transition-all hover:bg-surface-hover hover:shadow-md",
		cardTitle: "font-medium text-sm md:text-base",
		cardDescription: "text-xs md:text-sm text-muted mt-1",
		cardTags: "flex flex-wrap gap-1 mt-2",
		cardTag: "text-[10px] md:text-xs bg-primary/10 text-primary px-1.5 md:px-2 py-0.5 rounded-full",
		addButton: "mt-2 md:mt-3 w-full bg-primary text-primary-foreground rounded-lg py-1.5 text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2"
	},
	variants: {
		isDragOver: {
			true: {
				column: "ring-2 ring-primary"
			}
		},
		isDragging: {
			true: {
				card: "opacity-50"
			}
		}
	}
});

export const kanbanCard = tv({
	slots: {
		card: "bg-surface text-surface-foreground rounded-lg p-2.5 md:p-3 shadow-sm cursor-grab active:cursor-grabbing transition-all hover:bg-surface-hover hover:shadow-md",
		cardTitle: "font-medium text-sm md:text-base",
		cardDescription: "text-xs md:text-sm text-muted mt-1",
		cardTags: "flex flex-wrap gap-1 mt-2",
		cardTag: "text-[10px] md:text-xs bg-primary/10 text-primary px-1.5 md:px-2 py-0.5 rounded-full"
	},
	variants: {
		isDragging: {
			true: {
				card: "opacity-50"
			}
		}
	}
});