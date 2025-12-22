import plugin, { type PluginCreator } from "tailwindcss/plugin";

/**
 * Flowbite Utilities Plugin for Tailwind CSS v4
 *
 * This plugin generates utility classes for Flowbite's custom color variables.
 * In Tailwind v4, CSS custom properties defined in @theme are not automatically
 * converted to utility classes, so this plugin explicitly creates them.
 */
const flowbitePlugin = plugin(function ({ addUtilities }) {
  const colorUtilities = {
    // ===========================
    // TEXT/BODY COLORS
    // ===========================
    ".text-body": { color: "var(--color-body)" },
    ".text-body-subtle": { color: "var(--color-body-subtle)" },
    ".text-heading": { color: "var(--color-heading)" },

    // ===========================
    // NEUTRAL COLORS
    // ===========================
    // Neutral Primary
    ".bg-neutral-primary-soft": { backgroundColor: "var(--color-neutral-primary-soft)" },
    ".bg-neutral-primary": { backgroundColor: "var(--color-neutral-primary)" },
    ".bg-neutral-primary-medium": { backgroundColor: "var(--color-neutral-primary-medium)" },
    ".bg-neutral-primary-strong": { backgroundColor: "var(--color-neutral-primary-strong)" },

    ".text-neutral-primary-soft": { color: "var(--color-neutral-primary-soft)" },
    ".text-neutral-primary": { color: "var(--color-neutral-primary)" },
    ".text-neutral-primary-medium": { color: "var(--color-neutral-primary-medium)" },
    ".text-neutral-primary-strong": { color: "var(--color-neutral-primary-strong)" },

    ".border-neutral-primary-soft": { borderColor: "var(--color-neutral-primary-soft)" },
    ".border-neutral-primary": { borderColor: "var(--color-neutral-primary)" },
    ".border-neutral-primary-medium": { borderColor: "var(--color-neutral-primary-medium)" },
    ".border-neutral-primary-strong": { borderColor: "var(--color-neutral-primary-strong)" },

    // Neutral Secondary
    ".bg-neutral-secondary-soft": { backgroundColor: "var(--color-neutral-secondary-soft)" },
    ".bg-neutral-secondary": { backgroundColor: "var(--color-neutral-secondary)" },
    ".bg-neutral-secondary-medium": { backgroundColor: "var(--color-neutral-secondary-medium)" },
    ".bg-neutral-secondary-strong": { backgroundColor: "var(--color-neutral-secondary-strong)" },
    ".bg-neutral-secondary-strongest": { backgroundColor: "var(--color-neutral-secondary-strongest)" },

    ".text-neutral-secondary-soft": { color: "var(--color-neutral-secondary-soft)" },
    ".text-neutral-secondary": { color: "var(--color-neutral-secondary)" },
    ".text-neutral-secondary-medium": { color: "var(--color-neutral-secondary-medium)" },
    ".text-neutral-secondary-strong": { color: "var(--color-neutral-secondary-strong)" },
    ".text-neutral-secondary-strongest": { color: "var(--color-neutral-secondary-strongest)" },

    ".border-neutral-secondary-soft": { borderColor: "var(--color-neutral-secondary-soft)" },
    ".border-neutral-secondary": { borderColor: "var(--color-neutral-secondary)" },
    ".border-neutral-secondary-medium": { borderColor: "var(--color-neutral-secondary-medium)" },
    ".border-neutral-secondary-strong": { borderColor: "var(--color-neutral-secondary-strong)" },
    ".border-neutral-secondary-strongest": { borderColor: "var(--color-neutral-secondary-strongest)" },

    // Neutral Tertiary
    ".bg-neutral-tertiary-soft": { backgroundColor: "var(--color-neutral-tertiary-soft)" },
    ".bg-neutral-tertiary": { backgroundColor: "var(--color-neutral-tertiary)" },
    ".bg-neutral-tertiary-medium": { backgroundColor: "var(--color-neutral-tertiary-medium)" },

    ".text-neutral-tertiary-soft": { color: "var(--color-neutral-tertiary-soft)" },
    ".text-neutral-tertiary": { color: "var(--color-neutral-tertiary)" },
    ".text-neutral-tertiary-medium": { color: "var(--color-neutral-tertiary-medium)" },

    ".border-neutral-tertiary-soft": { borderColor: "var(--color-neutral-tertiary-soft)" },
    ".border-neutral-tertiary": { borderColor: "var(--color-neutral-tertiary)" },
    ".border-neutral-tertiary-medium": { borderColor: "var(--color-neutral-tertiary-medium)" },

    // Neutral Quaternary
    ".bg-neutral-quaternary": { backgroundColor: "var(--color-neutral-quaternary)" },
    ".bg-neutral-quaternary-medium": { backgroundColor: "var(--color-neutral-quaternary-medium)" },

    ".text-neutral-quaternary": { color: "var(--color-neutral-quaternary)" },
    ".text-neutral-quaternary-medium": { color: "var(--color-neutral-quaternary-medium)" },

    ".border-neutral-quaternary": { borderColor: "var(--color-neutral-quaternary)" },
    ".border-neutral-quaternary-medium": { borderColor: "var(--color-neutral-quaternary-medium)" },

    // Gray
    ".bg-gray": { backgroundColor: "var(--color-gray)" },
    ".text-gray": { color: "var(--color-gray)" },
    ".border-gray": { borderColor: "var(--color-gray)" },

    // ===========================
    // BORDER COLORS
    // ===========================
    // Buffer
    ".bg-buffer": { backgroundColor: "var(--color-buffer)" },
    ".bg-buffer-medium": { backgroundColor: "var(--color-buffer-medium)" },
    ".bg-buffer-strong": { backgroundColor: "var(--color-buffer-strong)" },

    ".text-buffer": { color: "var(--color-buffer)" },
    ".text-buffer-medium": { color: "var(--color-buffer-medium)" },
    ".text-buffer-strong": { color: "var(--color-buffer-strong)" },

    ".border-buffer": { borderColor: "var(--color-buffer)" },
    ".border-buffer-medium": { borderColor: "var(--color-buffer-medium)" },
    ".border-buffer-strong": { borderColor: "var(--color-buffer-strong)" },

    // Muted
    ".bg-muted": { backgroundColor: "var(--color-muted)" },
    ".text-muted": { color: "var(--color-muted)" },
    ".border-muted": { borderColor: "var(--color-muted)" },

    // Light
    ".bg-light-subtle": { backgroundColor: "var(--color-light-subtle)" },
    ".bg-light": { backgroundColor: "var(--color-light)" },
    ".bg-light-medium": { backgroundColor: "var(--color-light-medium)" },

    ".text-light-subtle": { color: "var(--color-light-subtle)" },
    ".text-light": { color: "var(--color-light)" },
    ".text-light-medium": { color: "var(--color-light-medium)" },

    ".border-light-subtle": { borderColor: "var(--color-light-subtle)" },
    ".border-light": { borderColor: "var(--color-light)" },
    ".border-light-medium": { borderColor: "var(--color-light-medium)" },

    // Default
    ".bg-default-subtle": { backgroundColor: "var(--color-default-subtle)" },
    ".bg-default": { backgroundColor: "var(--color-default)" },
    ".bg-default-medium": { backgroundColor: "var(--color-default-medium)" },
    ".bg-default-strong": { backgroundColor: "var(--color-default-strong)" },

    ".text-default-subtle": { color: "var(--color-default-subtle)" },
    ".text-default": { color: "var(--color-default)" },
    ".text-default-medium": { color: "var(--color-default-medium)" },
    ".text-default-strong": { color: "var(--color-default-strong)" },

    ".border-default-subtle": { borderColor: "var(--color-default-subtle)" },
    ".border-default": { borderColor: "var(--color-default)" },
    ".border-default-medium": { borderColor: "var(--color-default-medium)" },
    ".border-default-strong": { borderColor: "var(--color-default-strong)" },

    // ===========================
    // SUCCESS COLORS
    // ===========================
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
    ".border-success-subtle": { borderColor: "var(--color-success-subtle)" },

    ".ring-success-subtle": { "--tw-ring-color": "var(--color-success-subtle)" },

    // ===========================
    // DANGER COLORS
    // ===========================
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
    ".border-danger-subtle": { borderColor: "var(--color-danger-subtle)" },

    ".ring-danger-subtle": { "--tw-ring-color": "var(--color-danger-subtle)" },

    // ===========================
    // WARNING COLORS
    // ===========================
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
    ".border-warning-subtle": { borderColor: "var(--color-warning-subtle)" },

    ".ring-warning-subtle": { "--tw-ring-color": "var(--color-warning-subtle)" },

    // ===========================
    // DARK COLORS
    // ===========================
    ".bg-dark-soft": { backgroundColor: "var(--color-dark-soft)" },
    ".bg-dark": { backgroundColor: "var(--color-dark)" },
    ".bg-dark-strong": { backgroundColor: "var(--color-dark-strong)" },
    ".bg-dark-backdrop": { backgroundColor: "var(--color-dark-backdrop)" },
    ".bg-disabled": { backgroundColor: "var(--color-disabled)" },

    ".text-dark-soft": { color: "var(--color-dark-soft)" },
    ".text-dark": { color: "var(--color-dark)" },
    ".text-dark-strong": { color: "var(--color-dark-strong)" },
    ".text-dark-backdrop": { color: "var(--color-dark-backdrop)" },
    ".text-disabled": { color: "var(--color-disabled)" },

    ".border-dark-soft": { borderColor: "var(--color-dark-soft)" },
    ".border-dark": { borderColor: "var(--color-dark)" },
    ".border-dark-strong": { borderColor: "var(--color-dark-strong)" },
    ".border-dark-subtle": { borderColor: "var(--color-dark-subtle)" },
    ".border-dark-backdrop": { borderColor: "var(--color-dark-backdrop)" },

    ".ring-dark-subtle": { "--tw-ring-color": "var(--color-dark-subtle)" },

    // ===========================
    // BRAND COLORS
    // ===========================
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
    ".border-brand-subtle": { borderColor: "var(--color-brand-subtle)" },
    ".border-brand-light": { borderColor: "var(--color-brand-light)" },

    ".ring-brand-subtle": { "--tw-ring-color": "var(--color-brand-subtle)" },

    // ===========================
    // SINGLE COLORS
    // ===========================
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

    // ===========================
    // FOREGROUND COLORS (text semantic colors)
    // ===========================
    ".text-fg-brand-subtle": { color: "var(--color-fg-brand-subtle)" },
    ".text-fg-brand": { color: "var(--color-fg-brand)" },
    ".text-fg-brand-strong": { color: "var(--color-fg-brand-strong)" },
    ".text-fg-success": { color: "var(--color-fg-success)" },
    ".text-fg-success-strong": { color: "var(--color-fg-success-strong)" },
    ".text-fg-danger": { color: "var(--color-fg-danger)" },
    ".text-fg-danger-strong": { color: "var(--color-fg-danger-strong)" },
    ".text-fg-warning": { color: "var(--color-fg-warning)" },
    ".text-fg-warning-subtle": { color: "var(--color-fg-warning-subtle)" },
    ".text-fg-yellow": { color: "var(--color-fg-yellow)" },
    ".text-fg-disabled": { color: "var(--color-fg-disabled)" },
    ".text-fg-purple": { color: "var(--color-fg-purple)" },
    ".text-fg-cyan": { color: "var(--color-fg-cyan)" },
    ".text-fg-indigo": { color: "var(--color-fg-indigo)" },
    ".text-fg-pink": { color: "var(--color-fg-pink)" },
    ".text-fg-lime": { color: "var(--color-fg-lime)" }
  };

  addUtilities(colorUtilities);
} satisfies PluginCreator);

export default flowbitePlugin;
