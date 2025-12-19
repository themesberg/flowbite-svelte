import plugin from "tailwindcss/plugin";

/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 *
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 */
export default plugin(function ({ addUtilities }) {
  const colorUtilities = {
    // Success colors
    ".bg-success-soft": { backgroundColor: "var(--color-success-soft)" },
    ".bg-success": { backgroundColor: "var(--color-success)" },
    ".bg-success-medium": { backgroundColor: "var(--color-success-medium)" },
    ".bg-success-strong": { backgroundColor: "var(--color-success-strong)" },

    ".text-success-soft": { color: "var(--color-success-soft)" },
    ".text-success": { color: "var(--color-success)" },
    ".text-success-medium": { color: "var(--color-success-medium)" },
    ".text-success-strong": { color: "var(--color-success-strong)" },

    ".border-success-soft": { borderColor: "var(--color-success-soft)" },
    ".border-success": { borderColor: "var(--color-success)" },
    ".border-success-medium": { borderColor: "var(--color-success-medium)" },
    ".border-success-strong": { borderColor: "var(--color-success-strong)" },

    ".ring-success-subtle": { "--tw-ring-color": "var(--color-success-subtle)" },

    // Danger colors
    ".bg-danger-soft": { backgroundColor: "var(--color-danger-soft)" },
    ".bg-danger": { backgroundColor: "var(--color-danger)" },
    ".bg-danger-medium": { backgroundColor: "var(--color-danger-medium)" },
    ".bg-danger-strong": { backgroundColor: "var(--color-danger-strong)" },

    ".text-danger-soft": { color: "var(--color-danger-soft)" },
    ".text-danger": { color: "var(--color-danger)" },
    ".text-danger-medium": { color: "var(--color-danger-medium)" },
    ".text-danger-strong": { color: "var(--color-danger-strong)" },

    ".border-danger-soft": { borderColor: "var(--color-danger-soft)" },
    ".border-danger": { borderColor: "var(--color-danger)" },
    ".border-danger-medium": { borderColor: "var(--color-danger-medium)" },
    ".border-danger-strong": { borderColor: "var(--color-danger-strong)" },

    ".ring-danger-subtle": { "--tw-ring-color": "var(--color-danger-subtle)" },

    // Warning colors
    ".bg-warning-soft": { backgroundColor: "var(--color-warning-soft)" },
    ".bg-warning": { backgroundColor: "var(--color-warning)" },
    ".bg-warning-medium": { backgroundColor: "var(--color-warning-medium)" },
    ".bg-warning-strong": { backgroundColor: "var(--color-warning-strong)" },

    ".text-warning-soft": { color: "var(--color-warning-soft)" },
    ".text-warning": { color: "var(--color-warning)" },
    ".text-warning-medium": { color: "var(--color-warning-medium)" },
    ".text-warning-strong": { color: "var(--color-warning-strong)" },

    ".border-warning-soft": { borderColor: "var(--color-warning-soft)" },
    ".border-warning": { borderColor: "var(--color-warning)" },
    ".border-warning-medium": { borderColor: "var(--color-warning-medium)" },
    ".border-warning-strong": { borderColor: "var(--color-warning-strong)" },

    ".ring-warning-subtle": { "--tw-ring-color": "var(--color-warning-subtle)" },

    // Dark colors
    ".bg-dark-soft": { backgroundColor: "var(--color-dark-soft)" },
    ".bg-dark": { backgroundColor: "var(--color-dark)" },
    ".bg-dark-strong": { backgroundColor: "var(--color-dark-strong)" },
    ".bg-disabled": { backgroundColor: "var(--color-disabled)" },

    ".text-dark-soft": { color: "var(--color-dark-soft)" },
    ".text-dark": { color: "var(--color-dark)" },
    ".text-dark-strong": { color: "var(--color-dark-strong)" },
    ".text-disabled": { color: "var(--color-disabled)" },

    ".border-dark-soft": { borderColor: "var(--color-dark-soft)" },
    ".border-dark": { borderColor: "var(--color-dark)" },
    ".border-dark-strong": { borderColor: "var(--color-dark-strong)" },

    ".ring-dark-subtle": { "--tw-ring-color": "var(--color-dark-subtle)" },

    // Brand colors
    ".bg-brand-softer": { backgroundColor: "var(--color-brand-softer)" },
    ".bg-brand-soft": { backgroundColor: "var(--color-brand-soft)" },
    ".bg-brand": { backgroundColor: "var(--color-brand)" },
    ".bg-brand-medium": { backgroundColor: "var(--color-brand-medium)" },
    ".bg-brand-strong": { backgroundColor: "var(--color-brand-strong)" },

    ".text-brand-softer": { color: "var(--color-brand-softer)" },
    ".text-brand-soft": { color: "var(--color-brand-soft)" },
    ".text-brand": { color: "var(--color-brand)" },
    ".text-brand-medium": { color: "var(--color-brand-medium)" },
    ".text-brand-strong": { color: "var(--color-brand-strong)" },

    ".border-brand-softer": { borderColor: "var(--color-brand-softer)" },
    ".border-brand-soft": { borderColor: "var(--color-brand-soft)" },
    ".border-brand": { borderColor: "var(--color-brand)" },
    ".border-brand-medium": { borderColor: "var(--color-brand-medium)" },
    ".border-brand-strong": { borderColor: "var(--color-brand-strong)" },

    ".ring-brand-subtle": { "--tw-ring-color": "var(--color-brand-subtle)" },

    // Single colors
    ".bg-purple": { backgroundColor: "var(--color-purple)" },
    ".bg-sky": { backgroundColor: "var(--color-sky)" },
    ".bg-teal": { backgroundColor: "var(--color-teal)" },
    ".bg-pink": { backgroundColor: "var(--color-pink)" },
    ".bg-cyan": { backgroundColor: "var(--color-cyan)" },
    ".bg-fuchsia": { backgroundColor: "var(--color-fuchsia)" },
    ".bg-indigo": { backgroundColor: "var(--color-indigo)" },
    ".bg-orange": { backgroundColor: "var(--color-orange)" },

    ".text-purple": { color: "var(--color-purple)" },
    ".text-sky": { color: "var(--color-sky)" },
    ".text-teal": { color: "var(--color-teal)" },
    ".text-pink": { color: "var(--color-pink)" },
    ".text-cyan": { color: "var(--color-cyan)" },
    ".text-fuchsia": { color: "var(--color-fuchsia)" },
    ".text-indigo": { color: "var(--color-indigo)" },
    ".text-orange": { color: "var(--color-orange)" },

    ".border-purple": { borderColor: "var(--color-purple)" },
    ".border-sky": { borderColor: "var(--color-sky)" },
    ".border-teal": { borderColor: "var(--color-teal)" },
    ".border-pink": { borderColor: "var(--color-pink)" },
    ".border-cyan": { borderColor: "var(--color-cyan)" },
    ".border-fuchsia": { borderColor: "var(--color-fuchsia)" },
    ".border-indigo": { borderColor: "var(--color-indigo)" },
    ".border-orange": { borderColor: "var(--color-orange)" },

    // Foreground (semantic text colors)
    ".text-fg-brand-subtle": { color: "var(--color-fg-brand-subtle)" },
    ".text-fg-brand": { color: "var(--color-fg-brand)" },
    ".text-fg-brand-strong": { color: "var(--color-fg-brand-strong)" },
    ".text-fg-success": { color: "var(--color-fg-success)" },
    ".text-fg-success-strong": { color: "var(--color-fg-success-strong)" },
    ".text-fg-danger": { color: "var(--color-fg-danger)" },
    ".text-fg-danger-strong": { color: "var(--color-fg-danger-strong)" },
    ".text-fg-warning": { color: "var(--color-fg-warning)" },
    ".text-fg-warning-subtle": { color: "var(--color-fg-warning-subtle)" },
    ".text-fg-purple": { color: "var(--color-fg-purple)" },
    ".text-fg-cyan": { color: "var(--color-fg-cyan)" },
    ".text-fg-indigo": { color: "var(--color-fg-indigo)" },
    ".text-fg-pink": { color: "var(--color-fg-pink)" }
  };

  addUtilities(colorUtilities);
});
