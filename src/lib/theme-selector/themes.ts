export type ThemeId = "default" | "minimal" | "enterprise" | "playful" | "mono";

export interface FlowbiteTheme {
  id: ThemeId;
  name: string;
  cssPath: string;
  fontUrl: string;
  colors: string[];
}

export const themeConfigs: FlowbiteTheme[] = [
  {
    id: "default",
    name: "Default",
    cssPath: "/themes/default-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
    colors: ["bg-gray-100 dark:bg-gray-700", "bg-blue-50 dark:bg-blue-900", "bg-blue-200 dark:bg-blue-800", "bg-blue-700 dark:bg-blue-700"]
  },
  {
    id: "minimal",
    name: "Minimal",
    cssPath: "/themes/minimal-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-stone-50 dark:bg-stone-600", "bg-stone-100 dark:bg-stone-700", "bg-stone-300 dark:bg-stone-800", "bg-stone-900 dark:bg-stone-900"]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    cssPath: "/themes/enterprise-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap",
    colors: ["bg-zinc-100 dark:bg-zinc-700", "bg-cyan-50 dark:bg-cyan-900", "bg-cyan-100 dark:bg-cyan-800", "bg-cyan-700 dark:bg-cyan-700"]
  },
  {
    id: "playful",
    name: "Playful",
    cssPath: "/themes/playful-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap",
    colors: ["bg-slate-100 dark:bg-slate-700", "bg-pink-50 dark:bg-pink-900", "bg-pink-100 dark:bg-pink-800", "bg-pink-700 dark:bg-pink-700"]
  },
  {
    id: "mono",
    name: "Mono",
    cssPath: "/themes/mono-runtime.css",
    fontUrl: "https://fonts.googleapis.com/css2?family=Google+Sans+Code:wght@300;400;500;600;700&display=swap",
    colors: ["bg-neutral-100 dark:bg-neutral-700", "bg-indigo-50 dark:bg-indigo-900", "bg-indigo-100 dark:bg-indigo-800", "bg-indigo-700 dark:bg-indigo-700"]
  }
];
