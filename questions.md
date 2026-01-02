You can access /Users/shinichiokada/Flowbite/flowbite-svelte-local-development.

I want to add data-scope and data-part to svelte components in src/lib/extend/kanban directory. For this task, please follow the following steps.

First add data-scope and data-part to these files according to design-system-guide. If you can't find a proper data-part use proper data-part names.

Once you finish the part 1, then update slots names in theme.ts. Use base if 

=================

You can access /Users/shinichiokada/Flowbite/flowbite-svelte-local-development.

I use src/lib/context.ts for setting and getting context. You can find which components I use for in the file.
In src/lib/navbar/NavUl.svelte, I'd like to set context for NavLi's classes.item so that I can overwrite const navLi in src/lib/navbar/theme.ts at once in NavUl components.
NavUl and NavLi already uses `getNavbarStateContext` and `getNavbarBreakpointContext`. 
I updated `NavbarState` by adding `itemClass`.
```ts
export type NavbarState = {
  hidden: boolean;
  activeClass?: ClassValue;
  nonActiveClass?: ClassValue;
  itemClass?: ClassValue;
  activeUrl?: string;
};
```

I created a page in src/routes/testdir/navbar/+page.svelte and I have a type error on `item`: Object literal may only specify known properties, and 'item' does not exist in type 'Partial<{ list: ClassValue; active: ClassValue; nonActive: ClassValue; }>'.ts(2353)
(property) item: string

```svelte
<Navbar>
  <NavBrand href="/">
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite Svelte</span>
  </NavBrand>
  <NavHamburger />
  <NavUl {activeUrl} classes={{ active: activeClass, nonActive: nonActiveClass, item: itemClass }}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/docs/components/navbar">Navbar</NavLi>
  </NavUl>
</Navbar>
```

I'm not sure where I should add `item` in NavLi.svelte.
Can you help to set it up NavUl and NavLi?

=========================

