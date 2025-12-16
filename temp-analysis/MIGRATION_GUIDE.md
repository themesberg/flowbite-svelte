# Migration Guide for ThemeProvider Users

## If You Were Experiencing Theme Issues

If your themes weren't working before this fix, you may have implemented workarounds. Here's how to clean them up:

### Workaround #1: Delaying Component Rendering

**If you did this:**
```svelte
<script>
  let ready = $state(false);
  
  $effect(() => {
    setTimeout(() => ready = true, 100);
  });
</script>

{#if ready}
  <ThemeProvider {theme}>
    <YourApp />
  </ThemeProvider>
{/if}
```

**You can now do:**
```svelte
<ThemeProvider {theme}>
  <YourApp />
</ThemeProvider>
```

Just remove the delay - themes work immediately now!

---

### Workaround #2: Passing Theme as Props

**If you did this:**
```svelte
<!-- Passing theme down through props instead of context -->
<Button theme={buttonTheme} />
<Card theme={cardTheme} />
```

**You can now do:**
```svelte
<ThemeProvider {theme}>
  <Button />
  <Card />
</ThemeProvider>
```

Components automatically pick up theme from context.

---

### Workaround #3: Avoiding ThemeProvider Entirely

**If you did this:**
```svelte
<!-- Applying styles directly, avoiding ThemeProvider -->
<Button class="w-48 bg-purple-500" />
<Card class="bg-red-200 w-72" />
```

**You can now do:**
```svelte
<script>
  const theme = {
    button: { base: "w-48 bg-purple-500" },
    card: { base: "bg-red-200 w-72" }
  };
</script>

<ThemeProvider {theme}>
  <Button />
  <Card />
</ThemeProvider>
```

Much cleaner! Styles are centralized in the theme object.

---

## If You Need Dynamic Theme Switching

### Scenario: User toggles light/dark mode

**Pattern 1: Using {#key} (Recommended)**
```svelte
<script>
  let isDark = $state(false);
  
  $derived theme = isDark ? darkTheme : lightTheme;
</script>

{#key theme}
  <ThemeProvider {theme}>
    <YourApp />
  </ThemeProvider>
{/key}

<button onclick={() => isDark = !isDark}>
  Toggle Theme
</button>
```

**Pattern 2: Conditional Rendering**
```svelte
<script>
  let isDark = $state(false);
</script>

{#if isDark}
  <ThemeProvider theme={darkTheme}>
    <YourApp />
  </ThemeProvider>
{:else}
  <ThemeProvider theme={lightTheme}>
    <YourApp />
  </ThemeProvider>
{/if}

<button onclick={() => isDark = !isDark}>
  Toggle Theme
</button>
```

Both patterns work well. Use `{#key}` when themes are similar (just color changes), and conditional rendering when themes are structurally different.

---

## Common Questions

### Q: Will my existing ThemeProvider code break?

**A:** No! If you were passing `theme` prop correctly, it will just start working now. No code changes needed unless you had workarounds.

### Q: Do I need to restart my dev server?

**A:** Yes, restart to pick up the ThemeProvider.svelte changes.

### Q: Can I still override theme styles with component classes?

**A:** Yes! Component `class` prop always takes precedence:
```svelte
<ThemeProvider theme={{ button: { base: "bg-blue-500" } }}>
  <Button class="bg-red-500">Red Button</Button>  <!-- Red wins -->
</ThemeProvider>
```

### Q: What about nested ThemeProviders?

**A:** They work perfectly now! Inner providers override outer ones:
```svelte
<ThemeProvider theme={outerTheme}>
  <Button>Uses outer theme</Button>
  
  <ThemeProvider theme={innerTheme}>
    <Button>Uses inner theme</Button>
  </ThemeProvider>
  
  <Button>Back to outer theme</Button>
</ThemeProvider>
```

### Q: Do themes work with SSR/SvelteKit?

**A:** Yes! Context is properly set during server-side rendering.

### Q: Performance impact?

**A:** None! Actually improved - no more effect cycle delays.

---

## Breaking Changes

**None!** This is a bug fix, not a breaking change. All valid usage patterns continue to work.

---

## Need Help?

If you encounter any issues after this update:

1. Check that you're not calling `setContext()` in your own code inside `$effect()`
2. Verify ThemeProvider has the `theme` prop passed correctly
3. Check browser console for any errors
4. Visit `/testdir/theme` to see working examples

If issues persist, please file an issue on GitHub with:
- Your ThemeProvider usage code
- Component code using `getTheme()`
- Browser console output
- Svelte/SvelteKit versions
