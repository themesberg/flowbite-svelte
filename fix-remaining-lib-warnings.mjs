#!/usr/bin/env node

/**
 * Additional fixes for remaining library warnings
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const additionalFixes = [
  // Datepicker.svelte
  {
    file: 'src/lib/datepicker/Datepicker.svelte',
    find: '  let currentMonth: Date = $state(value || defaultDate || new Date());',
    replace: '  let currentMonth: Date = $state(new Date());\n  $effect(() => {\n    currentMonth = value || defaultDate || new Date();\n  });'
  },
  
  // Drawer.svelte
  {
    file: 'src/lib/drawer/Drawer.svelte',
    find: '    dismissable = offset ? false : undefined,',
    replace: '    dismissable = $derived(offset ? false : undefined),'
  },
  {
    file: 'src/lib/drawer/Drawer.svelte',
    find: '  if (activateClickOutside !== undefined) console.warn("\'activateClickOutside\' property is deprecated. Please use the \'outsideclose\' property to manage \'Drawer\' behaviour.");',
    replace: '  $effect(() => {\n    if (activateClickOutside !== undefined) console.warn("\'activateClickOutside\' property is deprecated. Please use the \'outsideclose\' property to manage \'Drawer\' behaviour.");\n  });'
  },
  
  // Popper.svelte
  {
    file: 'src/lib/utils/Popper.svelte',
    find: '  let arrowParams: { placement: Placement; cords: Partial<Coords> } = $state({\n    placement,\n    cords: { x: 0, y: 0 }',
    replace: '  let arrowParams = $state<{ placement: Placement; cords: Partial<Coords> }>({ placement: "top", cords: { x: 0, y: 0 } });\n  $effect(() => {\n    arrowParams = {\n      placement,\n      cords: { x: 0, y: 0 }'
  },
  
  // FooterCopyright.svelte
  {
    file: 'src/lib/footer/FooterCopyright.svelte',
    find: '  if (!year) year = new Date().getFullYear();',
    replace: '  $effect(() => {\n    if (!year) year = new Date().getFullYear();\n  });'
  },
  
  // Kbd.svelte
  {
    file: 'src/lib/kbd/Kbd.svelte',
    find: '  const kbdCls = kbd({ class: clsx(theme, className) });',
    replace: '  const kbdCls = $derived(kbd({ class: clsx(theme, className) }));'
  },
  
  // ListgroupItem.svelte
  {
    file: 'src/lib/list-group/ListgroupItem.svelte',
    find: '  active = active ?? listGroupCtx?.active;\n  horizontal = horizontal ?? listGroupCtx?.horizontal;',
    replace: '  const activeValue = $derived(active ?? listGroupCtx?.active);\n  const horizontalValue = $derived(horizontal ?? listGroupCtx?.horizontal);'
  },
  
  // Listgroup.svelte
  {
    file: 'src/lib/list-group/Listgroup.svelte',
    find: '  let tag = active ? "div" : "ul";\n  setListGroupContext({ active, horizontal });',
    replace: '  let tag = $derived(active ? "div" : "ul");\n  $effect(() => {\n    setListGroupContext({ active, horizontal });\n  });'
  },
  
  // Navbar.svelte
  {
    file: 'src/lib/navbar/Navbar.svelte',
    find: '  setNavbarBreakpointContext(breakpoint);',
    replace: '  $effect(() => {\n    setNavbarBreakpointContext(breakpoint);\n  });'
  },
  
  // Menu.svelte
  {
    file: 'src/lib/navbar/Menu.svelte',
    find: '  let svgoutline = `<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `;\n  let svgsolid = `<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `;',
    replace: '  let svgoutline = $derived(`<path stroke="${color}" stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path> `);\n  let svgsolid = $derived(`<path fill="${color}" clip-rule="evenodd" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path> `);'
  },
  
  // Progressbar.svelte
  {
    file: 'src/lib/progress/Progressbar.svelte',
    find: '  let _progress = new Tween(0, {\n    duration: animate ? tweenDuration : 0,\n    easing\n  });',
    replace: '  let _progress = $derived(new Tween(0, {\n    duration: animate ? tweenDuration : 0,\n    easing\n  }));'
  },
  
  // Progressradial.svelte
  {
    file: 'src/lib/progress/Progressradial.svelte',
    find: '  const _progress = new Tween(0, {\n    duration: animate ? tweenDuration : 0,\n    easing\n  });',
    replace: '  const _progress = $derived(new Tween(0, {\n    duration: animate ? tweenDuration : 0,\n    easing\n  }));'
  },
  {
    file: 'src/lib/progress/Progressradial.svelte',
    find: '  let circumference = 2 * Math.PI * radius;',
    replace: '  let circumference = $derived(2 * Math.PI * radius);'
  },
  
  // Rating icons
  {
    file: 'src/lib/rating/Heart.svelte',
    find: '  const uniqueId = `${groupId}-${iconIndex}`;',
    replace: '  const uniqueId = $derived(`${groupId}-${iconIndex}`);'
  },
  {
    file: 'src/lib/rating/Star.svelte',
    find: '  const uniqueId = `${groupId}-${iconIndex}`;',
    replace: '  const uniqueId = $derived(`${groupId}-${iconIndex}`);'
  },
  {
    file: 'src/lib/rating/Thumbup.svelte',
    find: '  const uniqueId = `${groupId}-${iconIndex}`;',
    replace: '  const uniqueId = $derived(`${groupId}-${iconIndex}`);'
  },
  {
    file: 'src/lib/rating/CustomIcon.svelte',
    find: '  const uniqueId = `${groupId}-${iconIndex}`;',
    replace: '  const uniqueId = $derived(`${groupId}-${iconIndex}`);'
  },
  
  // Rating.svelte
  {
    file: 'src/lib/rating/Rating.svelte',
    find: '  let fullStars: number = Math.floor(rating);\n  let rateDiffence = rating - fullStars;\n  let percentRating = Math.round(rateDiffence * 100);\n  let grayStars: number = total - (fullStars + Math.ceil(rateDiffence));',
    replace: '  let fullStars = $derived(Math.floor(rating));\n  let rateDiffence = $derived(rating - fullStars);\n  let percentRating = $derived(Math.round(rateDiffence * 100));\n  let grayStars = $derived(total - (fullStars + Math.ceil(rateDiffence)));'
  },
  
  // Sidebar.svelte
  {
    file: 'src/lib/sidebar/Sidebar.svelte',
    find: '  if (disableBreakpoints) isOpen = true;',
    replace: '  $effect(() => {\n    if (disableBreakpoints) isOpen = true;\n  });'
  },
  {
    file: 'src/lib/sidebar/Sidebar.svelte',
    find: '    isSingle,\n    selected: isSingle ? writable<object | null>(null) : undefined',
    replace: '    isSingle,\n    selected: $derived(isSingle ? writable<object | null>(null) : undefined)'
  },
  {
    file: 'src/lib/sidebar/Sidebar.svelte',
    find: '  let transitionParams = params ? params : { x: -320, duration: 200, easing: sineIn };',
    replace: '  let transitionParams = $derived(params ? params : { x: -320, duration: 200, easing: sineIn });'
  },
  
  // SpeedDial.svelte
  {
    file: 'src/lib/speed-dial/SpeedDial.svelte',
    find: '  setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });',
    replace: '  $effect(() => {\n    setContext<SpeedCtxType>("speed-dial", { pill, tooltip, textOutside });\n  });'
  },
  
  // TableSearch.svelte
  {
    file: 'src/lib/table/TableSearch.svelte',
    find: '  setTableContext(tableSearchCtx);',
    replace: '  $effect(() => {\n    setTableContext(tableSearchCtx);\n  });'
  },
  
  // Tabs.svelte
  {
    file: 'src/lib/tabs/Tabs.svelte',
    find: '  setTabsContext({ activeClasses, ctx, registerTab: registerFn, unregisterTab: unregisterFn });',
    replace: '  $effect(() => {\n    setTabsContext({ activeClasses, ctx, registerTab: registerFn, unregisterTab: unregisterFn });\n  });'
  }
];

let fixedCount = 0;
let notFoundCount = 0;
let errorCount = 0;

console.log('Fixing additional library warnings...\n');

additionalFixes.forEach(({ file, find, replace }) => {
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
