import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const tabStore: Writable<number> = writable(1);