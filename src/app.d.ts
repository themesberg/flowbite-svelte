// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  declare const __NAME__: string;
  declare const __VERSION__: string;
  declare const __GITHUBURL__: string;
  declare const __SVELTEVERSION__: string;
  declare const __SVELTEKITVERSION__: string;
  declare const __VITEVERSION__: string;
  declare const __TAILWINDCSSVERSION__: string;
}

export {};
