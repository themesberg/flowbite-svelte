#!/usr/bin/env node

/**
 * Comprehensive fix for Svelte 5 state_referenced_locally warnings
 * This script fixes common patterns in both lib and route files
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const fixes = [
  // MultiSelect.svelte
  {
    file: 'src/lib/forms/select/MultiSelect.svelte',
    find: '  const { base, dropdown, item: dropdownItem, close, select, placeholder: placeholderSpan, svg } = multiSelect({ disabled, grouped: !!group });',
    replace: '  const { base, dropdown, item: dropdownItem, close, select, placeholder: placeholderSpan, svg } = $derived(multiSelect({ disabled, grouped: !!group }));'
  },
  
  // Timepicker.svelte
  {
    file: 'src/lib/forms/timepicker/Timepicker.svelte',
    find: '  const styles = timepicker({ type, columns, disabled });',
    replace: '  const styles = $derived(timepicker({ type, columns, disabled }));'
  },
  
  // Hr.svelte
  {
    file: 'src/lib/typography/hr/Hr.svelte',
    find: '  const bg = classes?.bg ?? "bg-gray-200 dark:bg-gray-700";',
    replace: '  const bg = $derived(classes?.bg ?? "bg-gray-200 dark:bg-gray-700");'
  },
  {
    file: 'src/lib/typography/hr/Hr.svelte',
    find: `  const mergedDivProps = { ...restProps, ...divProps };\n  const mergedHrProps = { ...restProps, ...hrProps };`,
    replace: `  const mergedDivProps = $derived({ ...restProps, ...divProps });\n  const mergedHrProps = $derived({ ...restProps, ...hrProps });`
  },
  
  // List.svelte
  {
    file: 'src/lib/typography/list/List.svelte',
    find: '  let contextClass = $state(ctxClass || "");',
    replace: '  let contextClass = $derived(ctxClass || "");'
  },
  
  // ButtonToggle.svelte
  {
    file: 'src/lib/forms/button-toggle/ButtonToggle.svelte',
    find: '  const actualColor = (ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>["color"];',
    replace: '  const actualColor = $derived((ctx?.color ?? color ?? "primary") as VariantProps<typeof buttonToggle>["color"]);'
  },
  
  // VirtualList.svelte
  {
    file: 'src/lib/virtuallist/VirtualList.svelte',
    find: '  const styles = virtualList({ contained });',
    replace: '  const styles = $derived(virtualList({ contained }));'
  },
  
  // VirtualMasonry.svelte
  {
    file: 'src/lib/virtual-masonry/VirtualMasonry.svelte',
    find: '  const styles = virtualMasonry({ contained });',
    replace: '  const styles = $derived(virtualMasonry({ contained }));'
  },
  
  // ThemeProvider.svelte
  {
    file: 'src/lib/theme/ThemeProvider.svelte',
    find: `  if (theme) {\n    setThemeContext(theme);\n  } else {\n    setThemeContext(theme ?? defaultTheme);\n  }`,
    replace: `  $effect(() => {\n    if (theme) {\n      setThemeContext(theme);\n    } else {\n      setThemeContext(theme ?? defaultTheme);\n    }\n  });`
  },
  
  // ClipboardManager.svelte
  {
    file: 'src/lib/clipboard-manager/ClipboardManager.svelte',
    find: '  const STORAGE_KEY = storageKey ?? "flowbite-clipboard-manager";',
    replace: '  const STORAGE_KEY = $derived(storageKey ?? "flowbite-clipboard-manager");'
  },
  
  // ScrollSpy.svelte
  {
    file: 'src/lib/scroll-spy/ScrollSpy.svelte',
    find: '  let activeId = $state<string>(items.length > 0 ? items[0].id : "");',
    replace: '  let activeId = $state<string>("");\n  $effect(() => {\n    activeId = items.length > 0 ? items[0].id : "";\n  });'
  },
  
  // SplitPane.svelte  
  {
    file: 'src/lib/split-pane/SplitPane.svelte',
    find: '  let transition = $state(transitionProp);',
    replace: '  let transition = $state("");\n  $effect(() => {\n    transition = transitionProp;\n  });'
  },
  {
    file: 'src/lib/split-pane/SplitPane.svelte',
    find: '  let currentDirection = $state(direction);',
    replace: '  let currentDirection = $state("horizontal");\n  $effect(() => {\n    currentDirection = direction;\n  });'
  }
];

let fixedCount = 0;
let errorCount = 0;

fixes.forEach(({ file, find, replace }) => {
  try {
    const filePath = resolve(file);
    let content = readFileSync(filePath, 'utf8');
    
    if (content.includes(find)) {
      content = content.replace(find, replace);
      writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${file}`);
      fixedCount++;
    } else {
      console.log(`⊘ Pattern not found (may already be fixed): ${file}`);
    }
  } catch (err) {
    console.error(`✗ Error fixing ${file}:`, err.message);
    errorCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
if (errorCount > 0) {
  console.log(`❌ ${errorCount} files had errors`);
}

console.log('\nNote: Some route files still need manual fixes. See FIXES_NEEDED.md for details.');
