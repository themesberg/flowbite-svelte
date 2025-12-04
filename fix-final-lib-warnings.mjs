#!/usr/bin/env node

/**
 * Final batch of library warning fixes
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const finalFixes = [
  // Accordion.svelte
  {
    file: 'src/lib/accordion/Accordion.svelte',
    find: '  createSingleSelectionContext(multiple);',
    replace: '  $effect(() => {\n    createSingleSelectionContext(multiple);\n  });'
  },
  
  // AccordionItem.svelte
  {
    file: 'src/lib/accordion/AccordionItem.svelte',
    find: '  const ctxTransitionType = ctx?.transitionType ?? transitionType;\n  // Check if transitionType is explicitly set to undefined in props\n  const useTransition = transitionType === "none" ? false : ctxTransitionType === "none" ? false : true;',
    replace: '  const ctxTransitionType = $derived(ctx?.transitionType ?? transitionType);\n  // Check if transitionType is explicitly set to undefined in props\n  const useTransition = $derived(transitionType === "none" ? false : ctxTransitionType === "none" ? false : true);'
  },
  
  // Indicator.svelte
  {
    file: 'src/lib/indicator/Indicator.svelte',
    find: '  let hasChildren = !!children;',
    replace: '  let hasChildren = $derived(!!children);'
  },
  
  // Avatar.svelte
  {
    file: 'src/lib/avatar/Avatar.svelte',
    find: '  dot = dot && { placement: "top-right", color: "gray", size: "lg", ...dot };',
    replace: '  const finalDot = $derived(dot && { placement: "top-right", color: "gray", size: "lg", ...dot });'
  },
  
  // BottomNav.svelte
  {
    file: 'src/lib/bottom-navigation/BottomNav.svelte',
    find: '  const activeCls = cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass);',
    replace: '  const activeCls = $derived(cn("text-primary-700 dark:text-primary-700 hover:text-primary-900 dark:hover:text-primary-900", activeClass));'
  },
  
  // Breadcrumb.svelte
  {
    file: 'src/lib/breadcrumb/Breadcrumb.svelte',
    find: '  const { base, list } = breadcrumb({ solid });',
    replace: '  const { base, list } = $derived(breadcrumb({ solid }));'
  },
  
  // ButtonGroup.svelte
  {
    file: 'src/lib/button-group/ButtonGroup.svelte',
    find: '  setButtonGroupContext({ size, disabled });',
    replace: '  $effect(() => {\n    setButtonGroupContext({ size, disabled });\n  });'
  },
  
  // Carousel.svelte
  {
    file: 'src/lib/carousel/Carousel.svelte',
    find: '  const _state: CarouselState = $state({ images, index: index ?? 0, forward: true, slideDuration, lastSlideChange: Date.now(), changeSlide });',
    replace: '  const _state: CarouselState = $state({ images: [], index: 0, forward: true, slideDuration: 500, lastSlideChange: Date.now(), changeSlide });\n  $effect(() => {\n    _state.images = images;\n    _state.slideDuration = slideDuration;\n  });'
  },
  
  // ControlButton.svelte
  {
    file: 'src/lib/carousel/ControlButton.svelte',
    find: '  const { base, span } = controlButton({ forward });',
    replace: '  const { base, span } = $derived(controlButton({ forward }));'
  },
  
  // Datepicker.svelte
  {
    file: 'src/lib/datepicker/Datepicker.svelte',
    find: '    translationLocale = locale,',
    replace: '    translationLocale,  '
  },
  {
    file: 'src/lib/datepicker/Datepicker.svelte',
    find: '  translationLocale = translationLocale ?? locale;',
    replace: '  const finalTranslationLocale = $derived(translationLocale ?? locale);'
  },
  {
    file: 'src/lib/datepicker/Datepicker.svelte',
    find: '  let isOpen: boolean = $state(inline);',
    replace: '  let isOpen: boolean = $state(false);\n  $effect(() => {\n    isOpen = inline;\n  });'
  },
  
  // ClipboardManager.svelte  
  {
    file: 'src/lib/clipboard-manager/ClipboardManager.svelte',
    find: '  let items = $state<ClipboardItem[]>(initialItems);',
    replace: '  let items = $state<ClipboardItem[]>([]);\n  $effect(() => {\n    if (initialItems.length > 0) {\n      items = initialItems;\n    }\n  });'
  }
];

let fixedCount = 0;
let notFoundCount = 0;
let errorCount = 0;

console.log('Fixing final library warnings...\n');

finalFixes.forEach(({ file, find, replace }) => {
  try {
    const filePath = resolve(file);
    let content;
    
    try {
      content = readFileSync(filePath, 'utf8');
    } catch (err) {
      console.log(`⊘ File not found (skipping): ${file}`);
      notFoundCount++;
      return;
    }
    
    if (content.includes(find)) {
      content = content.replace(find, replace);
      writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed: ${file}`);
      fixedCount++;
    } else {
      console.log(`⊘ Pattern not found (may already be fixed): ${file}`);
      notFoundCount++;
    }
  } catch (err) {
    console.error(`✗ Error fixing ${file}:`, err.message);
    errorCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log(`⊘ Skipped ${notFoundCount} files`);
if (errorCount > 0) {
  console.log(`❌ ${errorCount} files had errors`);
}

console.log('\nRun "pnpm check" to verify all errors are resolved!');
