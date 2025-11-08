import { tv, type VariantProps } from "tailwind-variants";

export type ClipboardVariants = VariantProps<typeof clipboardManager>;

export const clipboardManager = tv({
  slots: {
    base: "relative max-w-2xl mx-auto p-4 space-y-4",
    
    // Input section
    inputSection: "space-y-2",
    inputWrapper: "flex gap-2",
    input: "flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white",
    
    // Search section
    searchWrapper: "flex gap-2",
    searchContainer: "relative flex-1",
    searchInput: "w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 dark:text-white",
    searchIcon: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400",
    
    // Items list
    itemsList: "space-y-2 max-h-[500px] overflow-y-auto",
    
    // Empty state
    emptyState: "text-center py-8",
    emptyIcon: "w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3",
    emptyText: "text-sm text-gray-500 dark:text-gray-400",
    emptySubtext: "text-xs text-gray-400 dark:text-gray-500 mt-1",
    
    // Item
    item: "group flex items-start gap-3 rounded-lg border border-gray-200 dark:border-gray-700 p-3 transition hover:bg-gray-50 dark:hover:bg-gray-800/50",
    itemContent: "flex-1 min-w-0",
    itemHeader: "flex items-center gap-2 mb-1",
    itemTimestamp: "text-xs text-gray-500 dark:text-gray-400",
    itemText: "text-sm text-gray-900 dark:text-gray-100 break-words line-clamp-2",
    
    // Actions
    itemActions: "flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
    actionButton: "p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition",
    actionIcon: "w-4 h-4",
    pinButton: "p-1.5 rounded transition",
    deleteButton: "p-1.5 rounded text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20 transition",
    
    // Toast
    toastContainer: "fixed top-4 left-1/2 -translate-x-1/2 z-50 animate-[slideIn_0.2s_ease-out]",
    toast: "flex items-center gap-2 px-4 py-2 rounded-lg shadow-lg",
    toastIcon: "w-5 h-5",
    toastText: "text-sm font-medium",
  },
  variants: {
    pinned: {
      true: {
        pinButton: "text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20"
      },
      false: {
        pinButton: "hover:bg-gray-200 dark:hover:bg-gray-700"
      }
    },
    type: {
      success: {
        toast: "bg-green-500 text-white"
      },
      error: {
        toast: "bg-red-500 text-white"
      },
      info: {
        toast: "bg-blue-500 text-white"
      }
    }
  },
  defaultVariants: {
    pinned: false,
    type: "success"
  }
});