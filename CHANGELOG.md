# Changelog

## 1.10.20

### Patch Changes

- fix(package): peerDependencies svelte 5.29 for @attach

- fix(classes): update classes for all components

## 1.10.19

### Patch Changes

- feat(Button): add `loading` prop with built-in spinner and auto-disable
  - Introduced `loading?: boolean` prop to Button.svelte
  - When `loading` is true, the button shows a spinner and becomes disabled
  - Spinner is implemented inline without importing Spinner.svelte
  - Improved accessibility by preventing interaction during loading
  - Added reactive usage examples and updated documentation

## 1.10.18

### Patch Changes

- fix(Select): show placeholder after clear and trigger change event
  - Fix placeholder not appearing after clearing select
  - Dispatch change event when clearing programmatically
  - Add onClear prop with better naming (keep clearableOnClick for compatibility)

## 1.10.17

### Patch Changes

- fix(Tags): default allowNewTags to true to allow tag creation without explicit config

## 1.10.16

### Patch Changes

- refactor(Tags): improve dropdown logic and UX
  - fix: #1690
  - Integrated @floating-ui for dropdown positioning with autoUpdate
  - Replaced inline <ul> dropdown with dynamically positioned element
  - Removed hardcoded dropdown markup and positioning
  - Used $effect and onDestroy for floating cleanup
  - Replaced $state(null) with let + non-null assertions for DOM refs
  - Improved reactivity by avoiding mutation warnings

## 1.10.15

### Patch Changes

- fix(tags): put back available tags

## 1.10.14

### Patch Changes

- fix(Tags): new props, unique, availableTags={available}, showHelper, showAvailableTags, and allowNewTags.

- feat(classes): upto Select

## 1.10.13

### Patch Changes

- fix: remove sveltekit dev $app/environment for svelte project
  feat: classes update

## 1.10.12

### Patch Changes

- fix: remove env value from warnThemeDeprecation

## 1.10.11

### Patch Changes

- fix(datepicker): normalize range input when from > to

## 1.10.10

### Patch Changes

- fix(datepicker): Add a guard to avoid re-calling handleDaySelect() if the range is already complete.

  problem: Pressing the return/enter key after selecting datepicker range by using mouse doesn't close the calender and selecting today's date.

## 1.10.9

### Patch Changes

- fix(datepicker): the getWeekdayNames function aligns with the firstDayOfWeek setting used by date-fns in startOfWeek.

## 1.10.8

### Patch Changes

fix: #1684

feat(datepicker): Allow `translationLocale` prop to be reactive

Ensures the calendar's locale updates correctly when `translationLocale` (or `locale` when `translationLocale` isn't explicitly set) changes. This provides independent control over date formatting and calendar translations.

## 1.10.7

### Patch Changes

- fix(dropzone): #1586
- Classes (#1681)
  - classes: Accordion, Badge, Banner
  - types corrections
  - BottomNav
  - coderabbit suggested fixes
  - BottomNav modern context handling

## 1.10.6

### Patch Changes

- fix: place theme before className

## 1.10.5

### Patch Changes

- fix: #1664

## 1.10.4

### Patch Changes

- feat(sidebar, drawer): #1664 Fix content visibility and breakpoint conflicts ([`10d9aef`](https://github.com/themesberg/flowbite-svelte/commit/10d9aef6287643952708833a8c2c5a4166e21fea))

  Resolves an issue where Sidebar content disappeared on mobile when nested within Drawer. The sidebar tv variant's isOpen: false setting was applying display: hidden, conflicting with Drawer's visibility control.

  Changes:

  theme.ts: Removed isOpen variant from sidebar tv definition.

  Sidebar.svelte: Simplified rendering logic when disableBreakpoints is true, ensuring content always renders.

  Usage: Ensures isOpen={!isDrawerHidden} is passed to Sidebar to sync with Drawer's state.

  The Drawer now solely controls Sidebar's visibility, eliminating display conflicts.

- fix(sidebar): Resolve dynamic resize responsiveness ([`c2a5445`](https://github.com/themesberg/flowbite-svelte/commit/c2a54459e5bad1991e0fac694cbcd094c89175f3))

  Corrects an issue where the standalone Sidebar failed to show/hide responsively on dynamic screen size changes (e.g., dev tools). Modified Sidebar.svelte to ensure the element is always in the DOM and its display is controlled by Tailwind's responsive classes via tailwind-variants in theme.ts.

- fix: #1678, #1679

## 1.10.3

### Patch Changes

- fix: #1677 Handle nullish values in Input component's defaultHandleInput

  Ensures robust handling of value in defaultHandleInput by safely converting it to a string, preventing TypeError when input is cleared or null/undefined.

## 1.10.2

### Patch Changes

- - fix(MultiSelect): #1669 Resolve dropdown closing prematurely and enhance active/selected states

  Previously, clicking an item in the MultiSelect dropdown would cause the dropdown to close, leading to a suboptimal user experience for multi-selection. This commit resolves the issue by:
  - Modifying `selectOption` to `stopPropagation` of the click event.
  - Introducing a `bind:this` and `onMount`/`onDestroy` lifecycle hooks to handle clicks outside the component for proper dropdown closure.
  - Updated `theme.ts` with `compoundVariants` for `dropdownitem` to provide a clear visual distinction when an item is both keyboard `active` and `selected`. This improves accessibility and clarity during keyboard navigation.
  - Addressed TypeScript errors in `handleBlur` related to `event.currentTarget` potentially being null and `EventTarget` lacking a `contains` method, ensuring type safety.

## 1.10.1

### Patch Changes

- 876ff0661 fix: #1670 move isChecked && checkedClass afer classname
- 77ffe022b fix: #1671 datepicker add disabled style
- c29042207 docs: enhanced image update 2
- d3c1c2cdd docs: enhanced image update
- 7934d7258 chore: @tiptap dependencies update
- 8bfccad6b chore: dependencies update
- d4d4c79d7 docs: themeprovider: add nested example

## 1.10.0

### Minor Changes

- feat: add ThemeProvider

## 1.9.0

### Minor Changes

- feat: Modal updates
  - encourages usage of dialog/form structure
  - introduces onaction handler
  - keeps back compatibility: from is optional, autoclose still exists
- feat: Datepicker updates
  - new dependency date-fns
  - functions update using date-fns
- fix: #1660
- fix: #1659

## 1.8.6

### Patch Changes

- - feat: add elementRef prop to Datepicker

  Enables programmatic control of the input element (focus, select, blur).
  Consistent with FloatingLabelInput API.

## 1.8.5

### Patch Changes

- - feat: add translationLocale prop to separate date formatting from UI language

  Allows using different locales for date formatting vs UI text translation.
  Maintains backward compatibility - translationLocale defaults to locale.

  Example: locale="de-DE" translationLocale="en-US" gives German date format with English text.

## 1.8.4

### Patch Changes

- fix: support for onsubmit when there's a form inside
- fix: twMerge removal
- chore: code clean up
- docs: encourage to use dialog actions instead of autoclose that gives no info about which button was pressed
- docs: onsubmit and onclose example

## 1.8.3

### Patch Changes

- feat: datepicker: add availableFrom and availableTo

## 1.8.2

### Patch Changes

- 2173d5f3e docs: wysiwyg: add accordion for app.css update
- b1fffaf1f docs: wysiwyg: add accordion for app.css
- a5745dcae fix: emoji in wysiwyg page
- f9c0990a4 feat: editor: emoji update
- 4fe291dff fix: #1566 - quick restart (#1652)
- adaa7e89a fix: #1623 (#1650)
- 2b62607e4 docs: texteditor: update default editor
- 083484a87 docs: texteditor: update app.css
- 924af90f6 docs: texteditor: add line break to formatting
- c83e88d2d fix: buttons padding (#1649)
- 2a519fb98 docs: phone-input layout issues for compound widgets (#1648)
- b17bd6d11 docs: wysiwyg TaskList and Details
- 0fc2ca040 docs: wysiwyg update
- 418dabb2c docs: wysiwyg update
- 682dddd35 fix: wysiwyg page according to new texteditor version
- e67cc4e63 docs: add Exporting data

## 1.8.1

### Patch Changes

- fix: trapFocus

## 1.8.0

### Minor Changes

- feat: @flowbite-svelte-plugins/texteditor

## 1.7.1

### Patch Changes

- fix: #1642
- feat: both the checkbox and its children are inside the label, making the text clickable

## 1.7.0

### Minor Changes

- feat: PhoneInput

## 1.6.8

### Patch Changes

- fix: add backward compatibility for Input
- feat: Input add onfocus, oninput, onblur, onkeydown

## 1.6.7

### Patch Changes

- feat: add bodyScrolling prop to Drawer

## 1.6.6

### Patch Changes

- feat: add monthClor, monthBtnSelected, monthBtn to Datepicker

## 1.6.5

### Patch Changes

- fix: TimePicker change from InputAddon to div
- fix: #1611, Datepicker add inputmode prop
- fix: #1641
- feat: Toast add conclose event handler
- fix: #1639 docs: change class to labelClass
- fix: #1638 Datepicker change from button to Button
- feat: add classes

## 1.6.4

### Patch Changes

- fix: #1636
- fix: change from InputAddon to div

## 1.6.3

### Patch Changes

- fix: #1575
- feat: add selection of month and year for Datepicker

## 1.6.2

### Patch Changes

- fix: Stepper style

## 1.6.1

### Patch Changes

- fix: BreadcrumbStepper and DetailedStepper colors

## 1.6.0

### Minor Changes

- feat: Stepper, ProgressStepper, DetailedStepper, VerticalStepper, BreadcrumbStepper, TimelineStepper
- docs: stepper page

## 1.5.6

### Patch Changes

- aa464ce7a fix: #1631, change MultiSelectProps extends to HTMLAttributes HTMLDivElement and move ...restProps to div
- 311cf7365 fix: indentation from tabs to spaces
- 60380de4d feat: improve combobox continuous suggestions

## 1.5.5

### Patch Changes

- feat: add addon snippet to textarea for Clipboard

## 1.5.4

### Patch Changes

- e708529d7 fix: #1626, Popper to clickable content for Popover and Dropdown
- 6a061670f fix: add class to combo item in Input.svelte
- 015c790d1 feat: add custom event handlers to Input component
- 8a797ccea fix: #1625
- 1d32804da fix: #1345, make isOpenbindable in SidebarDropdownWrapper
- ae2cc9875 fix: #1624, feat: create triggerDelay prop
- a82c2bcea fix: blue to primary in search theme
- 7c54ea1fb fix: #1606, fix: remove blue from progress and change blue to primary for search theme
- d05597549 fix: #1611, feat: add inputmode=none to Datepicker
- 7f513f694 docs: #1612 sidebar page

## 1.5.3

### Patch Changes

- feat: closeOnClickOutside prop to Navbar

## 1.5.2

### Patch Changes

- fix: add type=button to button in Datepicker since buttons inside inside a form default to type="submit"

## 1.5.1

### Patch Changes

- fix: ButtonToggle dark color

## 1.5.0

### Minor Changes

- feat: Clipboard component

## 1.4.3

### Patch Changes

- 393469a00 fix: #1604, fix: add z-20 and comboClass to FlatingLabelInput and Input components
- 51f5a54bc docs: add external link svg on the sidemenu items
- 040f0b079 docs: sidebar order
- 8f5c1e6f7 fix: add border to ButtonToggle

## 1.4.2

### Patch Changes

- fix: add border to ButtonToggle

## 1.4.1

### Patch Changes

- feat: add iconSlot to ButtonToggle and style class update

## 1.4.0

### Minor Changes

- feat: ButtonToggle
- fix: #123

## 1.3.1

### Patch Changes

- feat: add visiblePages to PaginationNav

## 1.3.0

### Minor Changes

- feat: PaginationNav
- fix: #882
- fix: #876
- fix: #579

## 1.2.7

### Patch Changes

- 87d1d793b docs: ai-integration update
- 2a45e148b docs: ai-integration update
- 7b9bde79b fix: update svelte-doc-llm
- 0be08aec5 docs: ai-integration page
- 8f272b1ee fix: #1583
- 3e68ae155 fix: #1599
- 928edbcc7 fix: stepindicator

## 1.2.6

### Patch Changes

- fix: Checkbox typo

## 1.2.5

### Patch Changes

- fix: lib directories name change

## 1.2.4

### Patch Changes

- feat: add trapFocus for Modal, Sidebar, Drawer
- feat: add closeOnEscape for Dropdown, MegaMenu, Popover, SpeedDial, Tooltip
- check: a11y for Carousel, Datepicker
- docs: add a11y to above pages

## 1.2.3

### Patch Changes

- dfd3d7ab8 fix: #1070 add transitionType=none
- eec434fe1 docs: add snapshots example to accordion
- 21b963a68 fix: #1485 use value:T[] for MultiSelectProps

## 1.2.2

### Patch Changes

- feat: Tags component
- feat: transition and transitionParams added to Popper
- feat: #1591 add permanent to Modal
- docs: Paging, animation example to tooltip and popover
- fix: #1593 add contentClass and headerClass to AccordionItem
- fix: locale and firstday of the week (#1590)

## 1.2.1

### Patch Changes

- feat: add combobox to input and floatinglabelinput

## 1.2.0

### Minor Changes

- feat: Progressradial

## 1.1.4

### Patch Changes

- feat: add indicator snippet to Avatar, fix: select theme to match input theme

## 1.1.3

### Patch Changes

- fix: Checkbox, BottomNavItem, isOpen to component using Popper

## 1.1.2

### Patch Changes

- fix: expose isOpen Dropdown, MegaMenu, Popover, SpeedDial and Tooltip'

## 1.1.1

### Patch Changes

- feat: allow A.svelte as a button, onclose event handler to Modal'

## 1.1.0

### Minor Changes

- feat: elementRef and clearable to form components

## 1.0.7

### Patch Changes

- fix: add chechedClass to RadioButton

## 1.0.6

### Patch Changes

- fix: #1551

## 1.0.5

### Patch Changes

- fix: #1559 use derived in Table for items

## 1.0.4

### Patch Changes

- fix: add context listGrpHorizontal to Listgroup and ListgroupItem

## 1.0.3

### Patch Changes

- fix: Dropdown and Popper using isOpen

## 1.0.2

### Patch Changes

- feat: StepIndicator

## 1.0.1

### Patch Changes

- feat: timepicker and bug fix

## 1.0.0

### Minor Changes

- Updates ([`fefe126`](https://github.com/themesberg/flowbite-svelte/commit/fefe126819a084c79d461ea00d77a20c83cce10a))

### Patch Changes

- fix: #24, #46, #23, #45, #41, #44, #40, #39, #5, #19, #8, #29, #31, #32, #33, #30 ([`e8d6bdc`](https://github.com/themesberg/flowbite-svelte/commit/e8d6bdc47e6ada4ca7d73dc8b55feac0de47ddde))

- fix: bugs, component updates ([`e50568b`](https://github.com/themesberg/flowbite-svelte/commit/e50568bb5ba28fab74b7582650f1589f1fb2256b))

- fix: #73, #74, #75 ([`24fc0d4`](https://github.com/themesberg/flowbite-svelte/commit/24fc0d4954fb07c2ea60830ef5f41cffc364bfb7))

- fix: Controls and JSONView ([`376eb3b`](https://github.com/themesberg/flowbite-svelte/commit/376eb3b17f6654f814cd0fa981ce08d508d1bd2b))

- fix: Footer, Carousel, etc. ([`25eb368`](https://github.com/themesberg/flowbite-svelte/commit/25eb3689ccfe8ba7d80fee59be7c565adaafbdde))

- fix: component docs up to table ([`6717714`](https://github.com/themesberg/flowbite-svelte/commit/6717714f4d0cbfa6e1e795f0c8dbfa999fdd4934))

- fix: version conflict ([`4523a60`](https://github.com/themesberg/flowbite-svelte/commit/4523a6018bdc32c75cb7f061128e2445e59e5f41))

- Feature ready ([`7cf15be`](https://github.com/themesberg/flowbite-svelte/commit/7cf15be4e458c55f3de675668699b7fd909d8098))

- fix: remove padding from Card compo ([`f60b44f`](https://github.com/themesberg/flowbite-svelte/commit/f60b44f607b8b94365c73f589ef669e0cdec9ec3))

- fix: move all types to $lib/types ([`4ae0a36`](https://github.com/themesberg/flowbite-svelte/commit/4ae0a367353f9bd861ccb1471504e502106f0575))

- fix: various bugs ([`6ea5e68`](https://github.com/themesberg/flowbite-svelte/commit/6ea5e683d09a4d4ad73aadc19a78e3387849b274))

- fix: some compos and add progress to check API ([`1c4a7d8`](https://github.com/themesberg/flowbite-svelte/commit/1c4a7d8f74c1e3ea0bffa7a1d60cd8d655b0172a))

- fix: #21, #37, #42, and other bug fix ([`accfe72`](https://github.com/themesberg/flowbite-svelte/commit/accfe72cda5f274c82bbd043e79d7d6e11353b7e))

- fix: components update ([`c4e5b9b`](https://github.com/themesberg/flowbite-svelte/commit/c4e5b9b4428873517b65803e3aeaeb753131a439))

- fix: component docs ([`dfca8aa`](https://github.com/themesberg/flowbite-svelte/commit/dfca8aa8bbd4b8acde592f3be6bcd9fe9870ec6f))

- fix: API check complete ([`41f15bc`](https://github.com/themesberg/flowbite-svelte/commit/41f15bcf9cc08a4e2dab14397e96d869f70a89e6))

- docs: getting started pages ([`9c95fc9`](https://github.com/themesberg/flowbite-svelte/commit/9c95fc9ba92ebbd084ac160b1fc2970206ce52cb))

- fix: datepicker type ([`87e787b`](https://github.com/themesberg/flowbite-svelte/commit/87e787b9a6e2506b47d38e6d0aa5217d4985a84c))

- fix: speedDial, banner, popper and other bugs ([`184244c`](https://github.com/themesberg/flowbite-svelte/commit/184244c85a7bae09261c332f3d9f2b0fdcf5a40e))

## 1.0.0-next.20

### Patch Changes

- fix: API check complete

## 1.0.0-next.19

### Patch Changes

- fix: some compos and add progress to check API

## 1.0.0-next.18

### Patch Changes

- fix: Footer, Carousel, etc.

## 1.0.0-next.17

### Patch Changes

- fix: datepicker type

## 1.0.0-next.16

### Patch Changes

- fix: remove padding from Card compo

## 1.0.0-next.15

### Patch Changes

- fix: Controls and JSONView

## 1.0.0-next.14

### Patch Changes

- fix: component docs

## 1.0.0-next.13

### Patch Changes

- fix: move all types to $lib/types

## 1.0.0-next.12

### Patch Changes

- fix: component docs up to table

## 1.0.0-next.11

### Patch Changes

- fix: #73, #74, #75

## 1.0.0-next.10

### Patch Changes

- fix: speedDial, banner, popper and other bugs

## 1.0.0-next.9

### Patch Changes

- fix: various bugs

## 1.0.0-next.8

### Patch Changes

- fix: #21, #37, #42, and other bug fix

## 1.0.0-next.7

### Patch Changes

- docs: getting started pages

## 1.0.0-next.6

### Patch Changes

- fix: version conflict

## 1.0.0-next.5

### Patch Changes

- fix: #24, #46, #23, #45, #41, #44, #40, #39, #5, #19, #8, #29, #31, #32, #33, #30

## 1.0.0-next.4

### Patch Changes

- fix: components update

## 1.0.0-next.3

### Patch Changes

- Feature ready

## 1.0.0-next.2

### Minor Changes

- Updates ([`fefe126`](https://github.com/themesberg/flowbite-svelte-next/commit/fefe126819a084c79d461ea00d77a20c83cce10a))

### Patch Changes

- fix: bugs, component updates ([`e50568b`](https://github.com/themesberg/flowbite-svelte-next/commit/e50568bb5ba28fab74b7582650f1589f1fb2256b))

## 0.48.6

### Patch Changes

- fix: #1552, #1264

## 0.48.5

### Patch Changes

- fix: update datepicker
-

## 0.48.3

### Patch Changes

- fix: bugs

## 0.48.2

### Patch Changes

- fix: bugs

## 0.48.1

### Patch Changes

- fix: bugs

## 0.47.4

### Patch Changes

- fix: datepicker

## 0.47.3

### Patch Changes

- fix: #1392 #1455 #1463 #1468 #1475 #1476

## 0.47.2

### Patch Changes

- fix: #1470 #1467 #1031

## 0.47.1

### Patch Changes

- fix: remove flowbite-svelte-icons from Datepicker ([`e017ac0`](https://github.com/themesberg/flowbite-svelte/commit/e017ac075eab02067890db40c2e11d3f03e8a79a))

## 0.47.0

### Minor Changes

- feat: datepicker

## 0.46.23

### Patch Changes

- bug fix ([`5b0798a414d2bbcd72dc940ebf20d8448b600150`](https://github.com/themesberg/flowbite-svelte/commit/5b0798a414d2bbcd72dc940ebf20d8448b600150))

## 0.46.22

### Patch Changes

- fix: omit size from Toggle ([`cbdc23136d7cbd57338fee3ae57fd0b347fcedd6`](https://github.com/themesberg/flowbite-svelte/commit/cbdc23136d7cbd57338fee3ae57fd0b347fcedd6))

## 0.46.21

### Patch Changes

- types: add $Props ([`458b98eea93e1b9c82374d1727e057bf97d85930`](https://github.com/themesberg/flowbite-svelte/commit/458b98eea93e1b9c82374d1727e057bf97d85930))

- types: component type updates types: Button and ToolbarButton update for using anchor and button, HTMLAnchorAttributes, HTMLButtonAttributes types: GradientButton uses import ButtonProps from "./Button.svelte" instead of using ComponentProps that does not work. ([`a1ba5af532261772bfd8b0b2c8267f65e814f997`](https://github.com/themesberg/flowbite-svelte/commit/a1ba5af532261772bfd8b0b2c8267f65e814f997))

- fix: #1454 extends HTMLInputAttributes for Checkbox component ([`4ce2ced37a28885614ac1d863386e396f190a65e`](https://github.com/themesberg/flowbite-svelte/commit/4ce2ced37a28885614ac1d863386e396f190a65e))

## 0.46.20

### Patch Changes

- types: add $Props ([`46a29798f77a63482a0951720eb761e474d11287`](https://github.com/themesberg/flowbite-svelte/commit/46a29798f77a63482a0951720eb761e474d11287))

## 0.46.19

### Patch Changes

- types: add $Props ([`264f88f447592e81bb86ffd2f5202277c9b3116e`](https://github.com/themesberg/flowbite-svelte/commit/264f88f447592e81bb86ffd2f5202277c9b3116e))

## 0.46.18

### Patch Changes

- bug fixes and features ([`bca44f8c500ea0b04215530b27e0cf460c5aa4b6`](https://github.com/themesberg/flowbite-svelte/commit/bca44f8c500ea0b04215530b27e0cf460c5aa4b6))

## 0.46.17

### Patch Changes

- fix: update for PRs ([`3566cbe3dcc4a7d8f67456b07fe046cdab421a02`](https://github.com/themesberg/flowbite-svelte/commit/3566cbe3dcc4a7d8f67456b07fe046cdab421a02))

## 0.46.16

### Patch Changes

- fix: bug fix ([`b064db0889a26b6b8e253e8c7a9302713408c076`](https://github.com/themesberg/flowbite-svelte/commit/b064db0889a26b6b8e253e8c7a9302713408c076))

## 0.46.15

### Patch Changes

- feat: add 5.0.0 to peerDependencies ([`69108a0080373c686cead96d80cdfa1d44ab5ef8`](https://github.com/themesberg/flowbite-svelte/commit/69108a0080373c686cead96d80cdfa1d44ab5ef8))

## 0.46.14

### Patch Changes

- fix: Banner transition ([`5f0e807469d079e790fbeb188b777a4bb5b7a009`](https://github.com/themesberg/flowbite-svelte/commit/5f0e807469d079e790fbeb188b777a4bb5b7a009))

## 0.46.13

### Patch Changes

- fix: add headerClass and footerClass to Textarea, #1380 ([`6ff73c2865522fed10ebc893340b4bee45b6e235`](https://github.com/themesberg/flowbite-svelte/commit/6ff73c2865522fed10ebc893340b4bee45b6e235))

## 0.46.12

### Patch Changes

- fix: : Dropdown change to component prop since $restProps does not work with Svelte 5

## 0.46.11

### Patch Changes

- fix: Badge and Toast component transition ([`ab24e307598ef53ab2b714ebce3f6541c9eb37e4`](https://github.com/themesberg/flowbite-svelte/commit/ab24e307598ef53ab2b714ebce3f6541c9eb37e4))

## 0.46.10

### Patch Changes

- fix: Checkbox for group ([`59108274dd1acdbad37a5fdb26d7ff93c9bf8de5`](https://github.com/themesberg/flowbite-svelte/commit/59108274dd1acdbad37a5fdb26d7ff93c9bf8de5))

## 0.46.9

### Patch Changes

- fix: remove the default values for Checkbox group and choices ([`20686def610fca25f1a49013216dbbbdd7ca657d`](https://github.com/themesberg/flowbite-svelte/commit/20686def610fca25f1a49013216dbbbdd7ca657d))

## 0.46.8

### Patch Changes

- fix: Checkbox group ([`540e8c32933ccafc19c338f8aa3676fdb5575dc4`](https://github.com/themesberg/flowbite-svelte/commit/540e8c32933ccafc19c338f8aa3676fdb5575dc4))

## 0.46.7

### Patch Changes

- fix: TableBodyCell separate td and button ([`ba1705a6bbebf05ab3274e3bcb4ab811931440f5`](https://github.com/themesberg/flowbite-svelte/commit/ba1705a6bbebf05ab3274e3bcb4ab811931440f5))

## 0.46.6

### Patch Changes

- fix: add default values to Badge component props ([`2bb23fd9717f028f387c26ff8ab1239a07bec21f`](https://github.com/themesberg/flowbite-svelte/commit/2bb23fd9717f028f387c26ff8ab1239a07bec21f))

- fix: Badge component update ([`2bb23fd9717f028f387c26ff8ab1239a07bec21f`](https://github.com/themesberg/flowbite-svelte/commit/2bb23fd9717f028f387c26ff8ab1239a07bec21f))

## 0.46.5

### Patch Changes

- fix: Select component update value

## 0.46.4

### Patch Changes

- fix: Self-closing HTML tags for Textarea component' ([`5fc9f589630c7cf6ffe3f5b5ea59b0a5a3e4116a`](https://github.com/themesberg/flowbite-svelte/commit/5fc9f589630c7cf6ffe3f5b5ea59b0a5a3e4116a))

## 0.46.3

### Patch Changes

- fix: Self-closing HTML tags ([`0c3fd7dfc4d9644f137008abb9037da7d8c07fa1`](https://github.com/themesberg/flowbite-svelte/commit/0c3fd7dfc4d9644f137008abb9037da7d8c07fa1))

## 0.46.2

### Patch Changes

- 1790b498 fix: add test-results to gitignore
- 0833cf6d fix: correct border and background colors for textarea compon ent (#1363)
- 6d75ffe5 docs: README update
- 0ecae1f3 chore: cleanup
- f6ed5e8f fix: blocks version and icon link update
- 587682ac fix: remove bg color from icon pages
- dec9ab7a (new-blocks) feat: add blocks
- 95343155 (origin/new-blocks) > Gitignore updated at 2024-06-16 07:17:57
- 04309ad8 fix: add admin dashboard to sidebar menu
- deea452c feat: add admin-dashboard and icons
- c4efa031 fix: create FlowbiteSvelteLayout and ComponentsLayout
- bf2df482 Pass $$restProps to button (#1339)
- 137f5570 fix:MultiSelect on:change triggered twice (#1341)
- 21f03a61 feat: Add disableSwipe prop to Carousel (#1353)
- 1b458271 docs: Properly setting Flowbite component link for Gallery (#1359)
- e4e50278 [forms/Select] correctly initialize "selected" attribute for SSR (#1352)
- 41f2fc92 fix: playwright version in workflows
- 7a83eb1e fix: link to vercel for admin-dashboard
- c6962464 fix: bg-color update
- ce0e03f0 feat: add admin-dashboard
- 4b1e19f7 feat: add prerender true
- 2d808845 chore: add google file
- 70b65c34 fix: add textarea on select handler (#1346)
- 6d077922 fix: #1350 remove else from AccordionItem
- 6ff61d2d fix: #1332 add imgClass prop
- d51c7d86 remove console.log from InputAddon.svelte (#1333)
- a15568b9 fix: link update
- 7c2b90ac fix: url updates

## 0.46.1

### Patch Changes

- 262c2d0f fix(Dropdown): default padding should be `py-2` (#1088) ([`e219ce93bf6d10cba77f63d2c8aa37866723f9f4`](https://github.com/themesberg/flowbite-svelte/commit/e219ce93bf6d10cba77f63d2c8aa37866723f9f4))
- 31b7fb71 fix: proper condition for hover event listeners in Popper (#1255)
- aa2f50bf fix:incorrect text color of MultiSelect CloseButton (#1318) (#1319)
- 45113be8 fix:Badge close event not work (#1320) (#1322)
- 44457c2d Fix dropdown with Search (#1324)
- eb255d01 fix: #1329 update InputAddon
- 11d53087 fix: #1328 Button update
- c10360e9 feat: add `imgOnly` property for `<ImagePlaceholder />` component (#1317)
- 3d30222c 1259 multi select fixes (#1260)
- c906a92d fix: #1327 update style for CopyClickboardInput
- 5ee3e240 fix: #1326 add DocSearch css
- add8d334 feat: Placeholder for MultiSelect (#1315) (#1316)
- 9eeb2bf7 docs: fix table.md (#1258)
- 29956561 fix: add disabled text color classes to Select component (#1303)
- f54fc519 fix: #1314 by update the docs
- f0b28912 fix: #1304 add svelte v3

## 0.46.0

### Minor Changes

- - 998d0176 BREAKING: #1277 change style prop to tabStyle to avoid conflict with CSS attr ([`40a1d6581d555c28ff00e5b373d5742a314b6b02`](https://github.com/themesberg/flowbite-svelte/commit/40a1d6581d555c28ff00e5b373d5742a314b6b02))
  - 572888c4 docs: #1282 add warnings in the docs where components are using @html
  - bb479286 fix: docsearch style using @docsearch/css@3
  - 656f2223 fix: #1287 #1304
  - 113de668 fix: add disabled prop to Button component
  - 4fbd9bd0 docs: change tailwind.config.cjs darkMode class to selector

## 0.45.1

### Patch Changes

- - 3eb228d3 fix: node from 20.0.0 to 18.0.0 in package.json engines ([`987f564b0e7cc62c68898fd5e0b73af96610c406`](https://github.com/themesberg/flowbite-svelte/commit/987f564b0e7cc62c68898fd5e0b73af96610c406))
  - 0d9a9332 fix: adjust eslint configuration to eslint-plugin-svelte (previously used eslint-plugin-svelte3) (#1310)
  - 191ca2e0 fix: add define to vite.config.ts for **VERSION**
  - ad3d1c7f fix: move FATHOM_ID to .env and use FathomAnalytics.svelte
  - 6011780a > Gitignore updated at 2024-04-18 06:10:47
  - ba81e3bb fix: update gitignore

## 0.45.0

### Minor Changes

- BREAKING: flowbie-svelte-icons updated 1.5.0 ([#1308](https://github.com/themesberg/flowbite-svelte/pull/1308))

  fix: update icon sizes

  chore: lib-helpers

  fix: update engines node >=20.0.0

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.44.24](https://github.com/themesberg/flowbite-svelte/compare/v0.44.23...v0.44.24) (2024-02-23)

### Features

- add focus only trigger mode for Popper ([#1241](https://github.com/themesberg/flowbite-svelte/issues/1241)) ([f7ca868](https://github.com/themesberg/flowbite-svelte/commit/f7ca86872d0899cab2ee67da63a2f35bc5c33a10))

### Bug Fixes

- add if statement to TransitionFrame component ([#1250](https://github.com/themesberg/flowbite-svelte/issues/1250)) ([394413e](https://github.com/themesberg/flowbite-svelte/commit/394413ef928620d75bd7a4b730d90bf203a2484f))
- correct padding in Modal ([#1249](https://github.com/themesberg/flowbite-svelte/issues/1249)) ([913ad38](https://github.com/themesberg/flowbite-svelte/commit/913ad38dbb7371d43a9c263d622555dea8c61810))
- properly handle class props in dropdown ([#1239](https://github.com/themesberg/flowbite-svelte/issues/1239)) ([0e5ff6c](https://github.com/themesberg/flowbite-svelte/commit/0e5ff6cda13e97cee8606d7ba018ba0e45fb5864))
- properly handle spacing prop in Radio ([#1108](https://github.com/themesberg/flowbite-svelte/issues/1108)) ([7f34738](https://github.com/themesberg/flowbite-svelte/commit/7f34738df99c886a59afca5d56951fa36dcdf927))

### [0.44.23](https://github.com/themesberg/flowbite-svelte/compare/v0.44.22...v0.44.23) (2024-02-08)

### Bug Fixes

- add focus:ring-0 to menu btns ([b81c875](https://github.com/themesberg/flowbite-svelte/commit/b81c875a54700d144e9c96c311cd4d63090595db))
- engines npm to pnpm 8.0.0 in package.json ([6770c92](https://github.com/themesberg/flowbite-svelte/commit/6770c92b03b435c949c1fd13e58cfa2f4e241e81))
- playwright version in workflows ([046b908](https://github.com/themesberg/flowbite-svelte/commit/046b908346bf1dcae4a9b33142b5460c0590e0b0))
- remove focus from DarkMode ([22c48db](https://github.com/themesberg/flowbite-svelte/commit/22c48db00250f8f2adbda2c183953ad0c8977205))
- spinner typings, docs ([#1151](https://github.com/themesberg/flowbite-svelte/issues/1151)) ([ed17997](https://github.com/themesberg/flowbite-svelte/commit/ed17997e61162844aab8131e9040f1125b4a4103))
- workflow pnpm to latest ([a1358fe](https://github.com/themesberg/flowbite-svelte/commit/a1358fe577597e85edc46e84bff01cdc24785c0a))

### [0.44.22](https://github.com/themesberg/flowbite-svelte/compare/v0.44.21...v0.44.22) (2024-01-12)

### Bug Fixes

- 1125 ([#1195](https://github.com/themesberg/flowbite-svelte/issues/1195)) ([f0b3d9c](https://github.com/themesberg/flowbite-svelte/commit/f0b3d9ce7fbfad3a5db93bffd680c028af1e3409))
- 1209 ([#1210](https://github.com/themesberg/flowbite-svelte/issues/1210)) ([671a950](https://github.com/themesberg/flowbite-svelte/commit/671a950d96bc2e96fb4d85a999f7317dd5b9fd4f))
- sidebar md:block ([0bd2f01](https://github.com/themesberg/flowbite-svelte/commit/0bd2f012986fcdd2b925fe05e69f7114478ab440))

### [0.44.21](https://github.com/themesberg/flowbite-svelte/compare/v0.44.20...v0.44.21) (2023-12-22)

### Bug Fixes

- [#1157](https://github.com/themesberg/flowbite-svelte/issues/1157) ([#1176](https://github.com/themesberg/flowbite-svelte/issues/1176)) ([a15a361](https://github.com/themesberg/flowbite-svelte/commit/a15a36173b644b7549c72c57d738df3e5af97bbc))
- issue1178 ([#1179](https://github.com/themesberg/flowbite-svelte/issues/1179)) ([12281fd](https://github.com/themesberg/flowbite-svelte/commit/12281fdebe6428f2159b28a1ba5379ac4bbb2ce0))
- modal outside click only on mouse down ([#1160](https://github.com/themesberg/flowbite-svelte/issues/1160)) ([96e4d4b](https://github.com/themesberg/flowbite-svelte/commit/96e4d4b9681db725a0208e1aa786cc330bfa9498))

### [0.44.20](https://github.com/themesberg/flowbite-svelte/compare/v0.44.19...v0.44.20) (2023-11-24)

### Bug Fixes

- add NODE_OPTIONS to playwright-and-lint ([4f255f5](https://github.com/themesberg/flowbite-svelte/commit/4f255f57199f6214856feef12d3206b3216db5f2))
- textarea inner rounded ([#1141](https://github.com/themesberg/flowbite-svelte/issues/1141)) ([6995e54](https://github.com/themesberg/flowbite-svelte/commit/6995e54cf788a39cb12a7a1d3df8a00f93cdfb28))

### [0.44.19](https://github.com/themesberg/flowbite-svelte/compare/v0.44.18...v0.44.19) (2023-10-31)

### Bug Fixes

- add missing types on modal $$Props ([#1110](https://github.com/themesberg/flowbite-svelte/issues/1110)) ([f929a4a](https://github.com/themesberg/flowbite-svelte/commit/f929a4a46617ced99b0e9faf5f2f86dd99ce81ef))
- add missing types on modal $$Props ([#1110](https://github.com/themesberg/flowbite-svelte/issues/1110)) ([f387c81](https://github.com/themesberg/flowbite-svelte/commit/f387c81984280fad7d7f5af34d57ea8f95a04a2c))
- change Carousel.ts to CarouselSlide.ts to fix compo-data for Carousel ([a3c75f3](https://github.com/themesberg/flowbite-svelte/commit/a3c75f3bedd1756f43428e55e6f35021910fe4ef))
- change Carousel.ts to CarouselSlide.ts to fix compo-data for Carousel ([f97fa4d](https://github.com/themesberg/flowbite-svelte/commit/f97fa4dcafabfd697e3b99bfb7fcdcfda8968b78))
- modal divide-y instead of border ([#1136](https://github.com/themesberg/flowbite-svelte/issues/1136)) ([c9a2a9b](https://github.com/themesberg/flowbite-svelte/commit/c9a2a9be366f35c40252c1eaa8e89a63e6151364))
- playwright config timeout: 600000 ([7abe468](https://github.com/themesberg/flowbite-svelte/commit/7abe46866411fc7ca94806a1ec4b4ac7399bb727))
- playwright config timeout: 600000 ([872502d](https://github.com/themesberg/flowbite-svelte/commit/872502d2d96aa7f6e516fd9a41af40229ffddca5))

### [0.44.18](https://github.com/themesberg/flowbite-svelte/compare/v0.44.17...v0.44.18) (2023-10-01)

### Bug Fixes

- alert ml-auto ([#1090](https://github.com/themesberg/flowbite-svelte/issues/1090)) ([8d3077d](https://github.com/themesberg/flowbite-svelte/commit/8d3077d7c92eb13f8e5d60bc0884eff81baab21d))
- GitHubCompoLinks ([218d919](https://github.com/themesberg/flowbite-svelte/commit/218d9193a90e4fc0101041586ee469c883dbce33))
- playwright-and-lint.yaml update version ([d99963c](https://github.com/themesberg/flowbite-svelte/commit/d99963c94e082dcf946091f99b1cc850c0fdbaf3))

### [0.44.17](https://github.com/themesberg/flowbite-svelte/compare/v0.44.16...v0.44.17) (2023-09-22)

### [0.44.16](https://github.com/themesberg/flowbite-svelte/compare/v0.44.15...v0.44.16) (2023-09-22)

### Features

- add <T> to SelectOptionType and update Select and MultiSelect ([#1055](https://github.com/themesberg/flowbite-svelte/issues/1055)) ([bf97642](https://github.com/themesberg/flowbite-svelte/commit/bf97642c81e3913bd4c95e27d313806a747ceb1c))
- add on:change and on:input to multiselect ([#1081](https://github.com/themesberg/flowbite-svelte/issues/1081)) ([dbc5877](https://github.com/themesberg/flowbite-svelte/commit/dbc5877c53a38603b27b0248d340c1322e32ac9d))

### Bug Fixes

- add -mx-1.5 to alert ([#1063](https://github.com/themesberg/flowbite-svelte/issues/1063)) ([617a35b](https://github.com/themesberg/flowbite-svelte/commit/617a35b1ad62fe6b7f7a39aa86c7feb3ceef1351))
- avatar placeholder safari ([#1065](https://github.com/themesberg/flowbite-svelte/issues/1065)) ([dbeee9f](https://github.com/themesberg/flowbite-svelte/commit/dbeee9f674af6fe6512abda6311676dce299494a))
- check activateClickOutside on outside click ([#1082](https://github.com/themesberg/flowbite-svelte/issues/1082)) ([283f1b3](https://github.com/themesberg/flowbite-svelte/commit/283f1b3002172ab52b9894520f4981f045497734))
- check activateClickOutside on outside click ([#1082](https://github.com/themesberg/flowbite-svelte/issues/1082)) ([ee10e29](https://github.com/themesberg/flowbite-svelte/commit/ee10e29ebf87b1a0eaa4e628c510c87efd42bd27))
- display on iPads ([#1052](https://github.com/themesberg/flowbite-svelte/issues/1052)) ([a804f71](https://github.com/themesberg/flowbite-svelte/commit/a804f71e4227eb2eed4802ad9667e16652880bd1))
- removeEventListener in onDestroy ([#1057](https://github.com/themesberg/flowbite-svelte/issues/1057)) ([c86ea20](https://github.com/themesberg/flowbite-svelte/commit/c86ea20a631363e85e259c5f75901e08e5438165))
- typescript page ([6f266f4](https://github.com/themesberg/flowbite-svelte/commit/6f266f41b6929b4f6d721ed14f01632d3a83a2b2))

### [0.44.15](https://github.com/themesberg/flowbite-svelte/compare/v0.44.14...v0.44.15) (2023-09-08)

### Features

- add double click event on tableBodyRow ([#1037](https://github.com/themesberg/flowbite-svelte/issues/1037)) ([14a5828](https://github.com/themesberg/flowbite-svelte/commit/14a5828c93a89ad4c495f33b1cd77372da5a60b1))
- add faq-and-tips.md and add how to purge CSS files ([#1048](https://github.com/themesberg/flowbite-svelte/issues/1048)) ([cd9adac](https://github.com/themesberg/flowbite-svelte/commit/cd9adac43e68bef6d66385ac2489ddd5672f97ce))
- href for carousel ([#1047](https://github.com/themesberg/flowbite-svelte/issues/1047)) ([c5ab778](https://github.com/themesberg/flowbite-svelte/commit/c5ab77824dd9a61c405ed30e50110c613a61cf6e))

### Bug Fixes

- change export ariaLabel ([#1046](https://github.com/themesberg/flowbite-svelte/issues/1046)) ([bc9ef6a](https://github.com/themesberg/flowbite-svelte/commit/bc9ef6abc5c7ff87bebbd579bce3149dcf44f32a))

### [0.44.14](https://github.com/themesberg/flowbite-svelte/compare/v0.44.13...v0.44.14) (2023-09-08)

### Bug Fixes

- [#1044](https://github.com/themesberg/flowbite-svelte/issues/1044) [#1026](https://github.com/themesberg/flowbite-svelte/issues/1026) ([#1045](https://github.com/themesberg/flowbite-svelte/issues/1045)) ([94a3321](https://github.com/themesberg/flowbite-svelte/commit/94a332152dcb874f2c81bc6c92d6fcb3c9195a1e))
- remove RadioInline and SidebarMenu ([e57b2b4](https://github.com/themesberg/flowbite-svelte/commit/e57b2b4a42d3444a1db75a133cce9b6cda0265ae))

### [0.44.13](https://github.com/themesberg/flowbite-svelte/compare/v0.44.12...v0.44.13) (2023-09-07)

### Features

- add marquess ([4261cb0](https://github.com/themesberg/flowbite-svelte/commit/4261cb05029fe8be4d7f371d474672fe269a779b))

### Bug Fixes

- update Marquee role, page and test ([d6bd868](https://github.com/themesberg/flowbite-svelte/commit/d6bd868361e260c266f531cea24f87d0bcabb0f6))

### [0.44.12](https://github.com/themesberg/flowbite-svelte/compare/v0.44.11...v0.44.12) (2023-09-07)

### Bug Fixes

- add check for empty attributes ([#1041](https://github.com/themesberg/flowbite-svelte/issues/1041)) ([756ff3f](https://github.com/themesberg/flowbite-svelte/commit/756ff3f32b3fbf25255ad0946157186ba9faf416))
- package.json update ([897d137](https://github.com/themesberg/flowbite-svelte/commit/897d1379ab4453fcb9b7d5410e1664b39e5390a4))
- vite.config.ts index.ts to index.js ([#1042](https://github.com/themesberg/flowbite-svelte/issues/1042)) ([61080ba](https://github.com/themesberg/flowbite-svelte/commit/61080ba82028d1ecedf49ba870ecc16c25fdbd36))

### [0.44.11](https://github.com/themesberg/flowbite-svelte/compare/v0.44.10...v0.44.11) (2023-09-06)

### Bug Fixes

- component data and types export ([#1040](https://github.com/themesberg/flowbite-svelte/issues/1040)) ([ad55a4d](https://github.com/themesberg/flowbite-svelte/commit/ad55a4dd72722c709de2b80aba13dbb4a143e86d))

### [0.44.10](https://github.com/themesberg/flowbite-svelte/compare/v0.44.9...v0.44.10) (2023-09-06)

### [0.44.9](https://github.com/themesberg/flowbite-svelte/compare/v0.44.8...v0.44.9) (2023-09-06)

### Features

- Adds exact prop to BottomNavItem ([#1036](https://github.com/themesberg/flowbite-svelte/issues/1036)) ([ceeaac2](https://github.com/themesberg/flowbite-svelte/commit/ceeaac2aee25a6f3bc7a8dc87fbfcec40595ded5))
- export types file ([42eb222](https://github.com/themesberg/flowbite-svelte/commit/42eb2229a3671c2d39e79db3fe8fa1c4f0d9b6c0))
- new API for Carousel ([#1032](https://github.com/themesberg/flowbite-svelte/issues/1032)) ([59da5ed](https://github.com/themesberg/flowbite-svelte/commit/59da5edbaea85bd1e570349768f2de9d14292166))

### Bug Fixes

- TableSearch pl-10 posision ([a974201](https://github.com/themesberg/flowbite-svelte/commit/a974201e465ca8791ad554798644f87beaaa5a45))

### [0.44.8](https://github.com/themesberg/flowbite-svelte/compare/v0.44.7...v0.44.8) (2023-09-04)

### [0.44.7](https://github.com/themesberg/flowbite-svelte/compare/v0.44.6...v0.44.7) (2023-09-04)

### [0.44.6](https://github.com/themesberg/flowbite-svelte/compare/v0.44.5...v0.44.6) (2023-09-04)

### Features

- add classInput and classDvgDiv to Tablesearch ([98122e0](https://github.com/themesberg/flowbite-svelte/commit/98122e0045fa5309654e45e43723d04b28e7a3b6))

### [0.44.5](https://github.com/themesberg/flowbite-svelte/compare/v0.44.4...v0.44.5) (2023-09-03)

### Features

- add CompoAttributesViewer and replaced it for props, events, and slots ([#1010](https://github.com/themesberg/flowbite-svelte/issues/1010)) ([a2ba343](https://github.com/themesberg/flowbite-svelte/commit/a2ba343681acb91112a5bc53c606f73e70a8773b))
- add touch/mouse swipe gesture handling to Carousel component. ([35d0ba1](https://github.com/themesberg/flowbite-svelte/commit/35d0ba1956336e9d0a560b7c55fe9d859ec9fe77))
- update component data rendering ([#1015](https://github.com/themesberg/flowbite-svelte/issues/1015)) ([6b20551](https://github.com/themesberg/flowbite-svelte/commit/6b205510a83e78b3cd23fb04528138d5921d586b))

### Bug Fixes

- add $$resProps to Spinner ([#1000](https://github.com/themesberg/flowbite-svelte/issues/1000)) ([1dd97cd](https://github.com/themesberg/flowbite-svelte/commit/1dd97cd2ffc7ac5b78f43e7ea3d7bc7ee1c74fb3))
- ads position since it does not show unless you refres the browser ([#1019](https://github.com/themesberg/flowbite-svelte/issues/1019)) ([e140d32](https://github.com/themesberg/flowbite-svelte/commit/e140d324682d636d5d7eba6b1e4075397323a390))
- ads to markdown files ([#1020](https://github.com/themesberg/flowbite-svelte/issues/1020)) ([062dfaf](https://github.com/themesberg/flowbite-svelte/commit/062dfaf53fe42ab82a6f5f20a12ad28a957dd1ff))
- Carousel compo ([eeaef97](https://github.com/themesberg/flowbite-svelte/commit/eeaef977402f185c5c4d164ba1f6c51a63206572))
- move charts to plugins dir ([#1012](https://github.com/themesberg/flowbite-svelte/issues/1012)) ([4609497](https://github.com/themesberg/flowbite-svelte/commit/4609497334f15737151472bd951444c4064343cb))
- Multiselect interactivity and form bug fixes ([#982](https://github.com/themesberg/flowbite-svelte/issues/982)) ([a919c21](https://github.com/themesberg/flowbite-svelte/commit/a919c21378501b823a86279c798f882128c94ac4))
- Multiselect interactivity and form bug fixes ([#982](https://github.com/themesberg/flowbite-svelte/issues/982)) ([3872270](https://github.com/themesberg/flowbite-svelte/commit/3872270d2ef77d17b9a1cc85099bddb6094e980c))
- playwright-and-lint.yaml update test:integration ([#1005](https://github.com/themesberg/flowbite-svelte/issues/1005)) ([6695c24](https://github.com/themesberg/flowbite-svelte/commit/6695c24a4a07bed6f55ac196405fe02e67f4cb9c))
- Remove mistaken unused import of Timeline. Cleanup debug console.log() message. ([03e6455](https://github.com/themesberg/flowbite-svelte/commit/03e64550eab3451f6bd90a62338a7d553c36b9e0))

### [0.44.4](https://github.com/themesberg/flowbite-svelte/compare/v0.44.3...v0.44.4) (2023-08-21)

### Bug Fixes

- package.json scripts update ([5ac3acd](https://github.com/themesberg/flowbite-svelte/commit/5ac3acd1c37374a7ed0af6199c820cb652801f5d))

### [0.44.3](https://github.com/themesberg/flowbite-svelte/compare/v0.44.2...v0.44.3) (2023-08-21)

### Features

- remove script dir, install svelte-lib-helpers and update script… ([#1004](https://github.com/themesberg/flowbite-svelte/issues/1004)) ([bc8780d](https://github.com/themesberg/flowbite-svelte/commit/bc8780d0da6d4a21933ff8b143e815aff0a2e694))

### [0.44.2](https://github.com/themesberg/flowbite-svelte/compare/v0.44.1...v0.44.2) (2023-08-18)

### [0.44.1](https://github.com/themesberg/flowbite-svelte/compare/v0.43.3...v0.44.1) (2023-08-18)

### Features

- chart component ([#998](https://github.com/themesberg/flowbite-svelte/issues/998)) ([08e09e3](https://github.com/themesberg/flowbite-svelte/commit/08e09e338c56b00c843ed76fc6cc1167fcae2e11))

### Bug Fixes

- add primary to Toast interface $$Props ([#993](https://github.com/themesberg/flowbite-svelte/issues/993)) ([3c48faa](https://github.com/themesberg/flowbite-svelte/commit/3c48faa5798ec6a8e0e328f82c0e84df227855ba))

### [0.43.3](https://github.com/themesberg/flowbite-svelte/compare/v0.43.2...v0.43.3) (2023-08-17)

### Features

- bottomnav components update ([#989](https://github.com/themesberg/flowbite-svelte/issues/989)) ([c7d898f](https://github.com/themesberg/flowbite-svelte/commit/c7d898f553b0e59dbc92c78cb712dc5244310b05))

### [0.43.2](https://github.com/themesberg/flowbite-svelte/compare/v0.43.1...v0.43.2) (2023-08-14)

### Bug Fixes

- [#977](https://github.com/themesberg/flowbite-svelte/issues/977) ([#979](https://github.com/themesberg/flowbite-svelte/issues/979)) ([a84f4e7](https://github.com/themesberg/flowbite-svelte/commit/a84f4e77d25245fbf00d6d66e58997480065b4d1))

### [0.43.1](https://github.com/themesberg/flowbite-svelte/compare/v0.41.2...v0.43.1) (2023-08-09)

### Features

- update carousel components ([f809b63](https://github.com/themesberg/flowbite-svelte/commit/f809b63400143255ca56e77d6ff0806c797cbc50))

### Bug Fixes

- Clicking on dropzone component triggers onsubmit event on parent form [#906](https://github.com/themesberg/flowbite-svelte/issues/906) ([6a2a26d](https://github.com/themesberg/flowbite-svelte/commit/6a2a26da2e9b8f1b9511799184b907a2e3918487))

## 0.42.0 (2023-08-07)

### ⚠ BREAKING CHANGES

- change the Tabs component props

- Revert "feat: change tabs variant to styles"

This reverts commit c949b82f02f8adad2a2d172e602ce5774ae3bca6.

- update sveltekit 1.0.1
- Tooltip changed in accordance to new Popper implementation.

* Tooltip examples corrected
* Avatar example corrected

- change node version to 0.16.16 since new playwright and sveltekit require it, https://github.com/sveltejs/kit/issues/5842
- add datepicker
- update dependencies and vite. script dev, build preview and test work
- Footer component updated
- Button component API update
- new Table components
- Dropdown has a new structure
- read the doc how to use them
- change from type to btnType
- Navbar, PillTab uses href for link.

### Features

- [#966](https://github.com/themesberg/flowbite-svelte/issues/966) ([#968](https://github.com/themesberg/flowbite-svelte/issues/968)) ([2b4503a](https://github.com/themesberg/flowbite-svelte/commit/2b4503a148f74b3982e3c4f65c2b19d11c13fbfc))
- add {...39090restProps} to ButtonGroup ([9744917](https://github.com/themesberg/flowbite-svelte/commit/9744917f9a036771e1ec285f43de56502e776a3d))
- add {...39090restProps} to ButtonGroupItem ([6af6066](https://github.com/themesberg/flowbite-svelte/commit/6af6066928200750036b5f19e2711383f02ccfa3))
- add || ^4.0.0 to peerDependencies ([1211eb8](https://github.com/themesberg/flowbite-svelte/commit/1211eb83cc7f54570363300f744c16bd41962460))
- add $$slots.arrowdown and arrowup for user icons ([3fa53de](https://github.com/themesberg/flowbite-svelte/commit/3fa53de11239fe93e2ae9e28e5bdf3ee3ccc1f69))
- add 66464props.class and 66464restProps to all Badge components ([e466faf](https://github.com/themesberg/flowbite-svelte/commit/e466faf85b3cdba5f125866ee71b1308ce223d4b))
- add AccordionFlush component ([e2d297d](https://github.com/themesberg/flowbite-svelte/commit/e2d297def8272347a68fe39e3296d07d1bd2b436))
- add active class to BottomNav and BottomNavItem ([0d5d9e3](https://github.com/themesberg/flowbite-svelte/commit/0d5d9e3ff42d312105f5209ec4d91771bb8e40d7))
- add active color to InteractiveTabs and InteractiveTabHead component ([7995e21](https://github.com/themesberg/flowbite-svelte/commit/7995e210f98325350b055a43199fa4d7750ea225))
- add active to SidebarItem component and an example in the page ([af80c2b](https://github.com/themesberg/flowbite-svelte/commit/af80c2b7c1d81e711bba0faca959e6501b31257c))
- add additional classes where components has more than one twMerge ([77769cc](https://github.com/themesberg/flowbite-svelte/commit/77769cc2dc67ffc61997c62e8f1107f4d2bc1bab))
- add alerts/animation ([d103ad1](https://github.com/themesberg/flowbite-svelte/commit/d103ad1faa1671a9ec8ba8daf8b7a97c390fcd46))
- add always open, color, flush, and arrow style to Accordion component ([e435bb6](https://github.com/themesberg/flowbite-svelte/commit/e435bb6cb29cbc778409379484a996a9d8fad76b))
- add avatar component ([de31744](https://github.com/themesberg/flowbite-svelte/commit/de31744b366d0dc1fd5f4f23e1d165245d6d0ca8))
- add avatar page ([862cdce](https://github.com/themesberg/flowbite-svelte/commit/862cdce1bc3ef323d9195cc22f7f6310cdb5f1dd))
- add Badge with icon only to badge-icon page ([1e1e64b](https://github.com/themesberg/flowbite-svelte/commit/1e1e64baba808ae47af66e70c5ad9bfbc2123d0f))
- add bgColor and bgOpacity to Drawer component ([8dc01fb](https://github.com/themesberg/flowbite-svelte/commit/8dc01fb9ec82b14d5f893d1255b646630e205ce2))
- add bind:group to Radio component ([386ab02](https://github.com/themesberg/flowbite-svelte/commit/386ab0246d0a3a7ae60416c6f9979501f4c434af))
- add bind:value to Iconinput ([87616e2](https://github.com/themesberg/flowbite-svelte/commit/87616e2222611bfabd77c3f7699c5f716015e420))
- add Blockquote ([89cbfbd](https://github.com/themesberg/flowbite-svelte/commit/89cbfbdf56e7beca90b00cf4c9c033789b2a2ba5))
- add button colored shadows ([96e20c5](https://github.com/themesberg/flowbite-svelte/commit/96e20c568f2fcc7d51e9a430fcb0007f02290bd2))
- add button to Thumbnail and move the on:click event listener to button ([c9119c7](https://github.com/themesberg/flowbite-svelte/commit/c9119c7bcf772215b63f546761f28f6fd2a271ef))
- add carousel components ([846a99d](https://github.com/themesberg/flowbite-svelte/commit/846a99dde2f45246493fac99790c220da257eefd))
- add Checkbox, CheckboxInline, and checkbox page ([baab944](https://github.com/themesberg/flowbite-svelte/commit/baab944e588645bb2fbe751fd5a2beb00b8f6e77))
- add ChevronUp to SidebarDropdownWrapper ([032d540](https://github.com/themesberg/flowbite-svelte/commit/032d540b347ab30ddcdcddff8c0963290ce0c904))
- add classActive to BottomNav ([06bf5dc](https://github.com/themesberg/flowbite-svelte/commit/06bf5dc2d284c475c81ae6a379831aaeb42c028d))
- add classPlaceholder to avatar component ([d4bc2d7](https://github.com/themesberg/flowbite-svelte/commit/d4bc2d70c87e879fa188831eb524a45ca2d43ab1))
- add cli page ([5e24f5b](https://github.com/themesberg/flowbite-svelte/commit/5e24f5bda80db8b970300841d4f916f7e2e2c2ff))
- add close on body, add close another dropdown and open own ([addabf8](https://github.com/themesberg/flowbite-svelte/commit/addabf81ccb322e6a482f3baa0687b443914674b))
- add Codeflow link ([#572](https://github.com/themesberg/flowbite-svelte/issues/572)) ([c76b265](https://github.com/themesberg/flowbite-svelte/commit/c76b265aded62df0553d9a579f8b0ee6f756c528))
- add color and size to Toggle component ([6595bb3](https://github.com/themesberg/flowbite-svelte/commit/6595bb38d95ae42862d134fee979ae97b66ab911))
- add color, gradient, shadow, and outline props to speed-dial ([#636](https://github.com/themesberg/flowbite-svelte/issues/636)) ([563a7ee](https://github.com/themesberg/flowbite-svelte/commit/563a7eecdf69301da232aa7ccd6734e49dc87f4c))
- add custom color to Alert component and update props ([2e2a71b](https://github.com/themesberg/flowbite-svelte/commit/2e2a71b4fb83bca28a1bf6b107f4163acbb6b011))
- add custom slide controllers to carousel ([8a2a329](https://github.com/themesberg/flowbite-svelte/commit/8a2a329da816bd7d5fff357790d584dbce2aec31))
- add datepicker ([a8b70e6](https://github.com/themesberg/flowbite-svelte/commit/a8b70e67b61e4e038520cc66238861e368716e60))
- add datepicker ([32f8889](https://github.com/themesberg/flowbite-svelte/commit/32f88899256bed9effe6b23b4d24cd8380ce2aff))
- add datepicker examples ([590ec66](https://github.com/themesberg/flowbite-svelte/commit/590ec660f27e43b18c588d44c0899aa16a3fc870))
- add datepicker examples ([68e2462](https://github.com/themesberg/flowbite-svelte/commit/68e2462567838816ef116c3ed5b389e8de52f643))
- add DescriptionList, List, Span components ([495b61e](https://github.com/themesberg/flowbite-svelte/commit/495b61eb0d81eb9ae06a34fa981dd42a81983ea6))
- add disabled and classes to InteractiveTabHead component ([869fb1b](https://github.com/themesberg/flowbite-svelte/commit/869fb1b34f5a0e5a254cdc09b25195bf621a25d6))
- add disabled to InteractiveTabs ([f5ca0fe](https://github.com/themesberg/flowbite-svelte/commit/f5ca0fe858a50ef2c017ed6ec266c0012166b5f9))
- add disabling only outside click but not backdrop ([#390](https://github.com/themesberg/flowbite-svelte/issues/390)) ([ebb6a1f](https://github.com/themesberg/flowbite-svelte/commit/ebb6a1f81d005ef19e432b7395ff7e17599c0b4f))
- add Dropzone ([bb69872](https://github.com/themesberg/flowbite-svelte/commit/bb698721e07c489f1d1900012e60204e0af12e5a))
- add events to components ([d24e023](https://github.com/themesberg/flowbite-svelte/commit/d24e023ba671b9976e2c0df3529a66b15e251cea))
- add events to NavLi and NavDropdown ([02e4032](https://github.com/themesberg/flowbite-svelte/commit/02e403211c93d8e81457e1006e21341f4deed352))
- add events to tableheadcell and tablebodycell components ([#761](https://github.com/themesberg/flowbite-svelte/issues/761)) ([cb056aa](https://github.com/themesberg/flowbite-svelte/commit/cb056aaeaa01044241ad6fa7e700256b28cb5834))
- add export divClass to Toast for user custom CSS ([7625c01](https://github.com/themesberg/flowbite-svelte/commit/7625c017af9a91920880b3d9c09d8f02924178e5))
- add fetchMarkdownPosts in utils/index ([#333](https://github.com/themesberg/flowbite-svelte/issues/333)) ([b604c0c](https://github.com/themesberg/flowbite-svelte/commit/b604c0c31c99b743817d814b3b043c42ccfaf14c))
- add fileupload multiple files and sizes ([81ab128](https://github.com/themesberg/flowbite-svelte/commit/81ab1284902e9e89bf08725a74b22394aae57244))
- add focus on load to Input component ([5d0c7fb](https://github.com/themesberg/flowbite-svelte/commit/5d0c7fb7750aac2dc0df2ddd24a7c11cd66404c6))
- add forms Checkbox, Fileupload, FloatingLabelInput, Iconinput, Input, Radio, Select, Textarea, and Toggle ([39f390f](https://github.com/themesberg/flowbite-svelte/commit/39f390f38146194a33f0bdf7f2badb54e8e14d67))
- add forms Textarea, Select, Toggle ([7aed286](https://github.com/themesberg/flowbite-svelte/commit/7aed2864ec4f8d4869faff5e939b00fbd3b1ed8d))
- add gallery components and page ([#618](https://github.com/themesberg/flowbite-svelte/issues/618)) ([8c3b1f3](https://github.com/themesberg/flowbite-svelte/commit/8c3b1f3ff37eb8da4616001d7a3a510a6848cb76))
- add H1, H2, A, P, Higlight components ([3f80473](https://github.com/themesberg/flowbite-svelte/commit/3f804731e6a093c1e34f8b3be6289f930c372a96))
- add Heading and removed H1 and H2 ([b2be994](https://github.com/themesberg/flowbite-svelte/commit/b2be9945c39bcbfe23a0df53348ce768c5958255))
- add highlight to Span component and update heading page ([d47121b](https://github.com/themesberg/flowbite-svelte/commit/d47121ba47e6c6e3dfdd366128f51da77a966e0f))
- add Hr component and page ([f289c1e](https://github.com/themesberg/flowbite-svelte/commit/f289c1ebd6cfcbcfde87b28ce3108abaf54248ca))
- add icon components rather than import a library ([9dffb40](https://github.com/themesberg/flowbite-svelte/commit/9dffb400607d8bb4dd98e877e466956157016ff7))
- add iconColor to sidebar and sidebardropdown components ([9b239ba](https://github.com/themesberg/flowbite-svelte/commit/9b239bacd455436c9ab056a730574d3d3404e517))
- add Iconinput click handler example ([d815212](https://github.com/themesberg/flowbite-svelte/commit/d8152126236e839d3d7bc6e035d0afa432d96856))
- add IconTabs, FullWidthTabs, InteractiveTabHead, and TabContent ([445e0f7](https://github.com/themesberg/flowbite-svelte/commit/445e0f780857ab3d8902e65da31a6becccb5b366))
- add IconTabs, FullWidthTabs, InteractiveTabHead, and TabContent pages ([960523e](https://github.com/themesberg/flowbite-svelte/commit/960523e36406a24a685d46a9770e87d85deef0d8))
- add id to typograpy components ([64cbe1b](https://github.com/themesberg/flowbite-svelte/commit/64cbe1b6f2cbe43fdf5cb71a0d82e3a5caad1586))
- add Img component, images, and page ([b2aec04](https://github.com/themesberg/flowbite-svelte/commit/b2aec047694aab0bbcbc58d93af8c021e27d4f96))
- add Img page and examples ([ed3d83f](https://github.com/themesberg/flowbite-svelte/commit/ed3d83f34e195d67e3c7a334d1226d0876441f47))
- add ImgDropdown ([30e9d01](https://github.com/themesberg/flowbite-svelte/commit/30e9d01dcd51559f6771ebaeef57100cf198c452))
- add initialTheme to DarkMode component ([#776](https://github.com/themesberg/flowbite-svelte/issues/776)) ([5110499](https://github.com/themesberg/flowbite-svelte/commit/51104993239b410305e956b1af2204b4e3d37d66))
- add IteractiveTabHead and TabContent and its page ([72d1e7b](https://github.com/themesberg/flowbite-svelte/commit/72d1e7b7131f6e5009124637f371ad7625cd2283))
- add kbd component and page ([66c1f2e](https://github.com/themesberg/flowbite-svelte/commit/66c1f2ec9c516da147c7eca9e8cb11c3eea2e1e2))
- add labelInsideClass to progressbar component ([fe20cd7](https://github.com/themesberg/flowbite-svelte/commit/fe20cd7f693f21e052dc5adb3fd3eb4bcfa80b76))
- add Layout component ([2204586](https://github.com/themesberg/flowbite-svelte/commit/22045861703bf3e46cc7900e15c4db64d5246c50))
- add link examples ([b129251](https://github.com/themesberg/flowbite-svelte/commit/b12925106d6ffe482dfbde5623925f72abe8a577))
- add links page ([cdb2566](https://github.com/themesberg/flowbite-svelte/commit/cdb2566640bc5153e4d310dc2306aaafe432f5de))
- add loop to carousel components ([0ae0d66](https://github.com/themesberg/flowbite-svelte/commit/0ae0d66aaf74c7b588978ce88ab7c5117ee4a4e2))
- add Mark and TextGradient ([343e719](https://github.com/themesberg/flowbite-svelte/commit/343e719406bc146639882f97bbeafbc2de9514cb))
- add md files in components folder ([8d7e05a](https://github.com/themesberg/flowbite-svelte/commit/8d7e05a0098437ac7ddd3f9122a2c23f481e54cd))
- add mockups in package.json ([cfc32d5](https://github.com/themesberg/flowbite-svelte/commit/cfc32d5bb7822fda5c6170285a9f31bd907842df))
- add new Navbar with dropdown demo ([d48b42f](https://github.com/themesberg/flowbite-svelte/commit/d48b42f15da7155e396702011fe70e7cb5898eb5))
- add offset position props to Drawer and example in the drawer page ([680d358](https://github.com/themesberg/flowbite-svelte/commit/680d358ef3d55df202ae2bcaf5deb9c3e6834c18))
- add on change event dispatch to select ([bda74a6](https://github.com/themesberg/flowbite-svelte/commit/bda74a619530567d06d1badc600a3f663711b179))
- add on:click to A component ([0828612](https://github.com/themesberg/flowbite-svelte/commit/08286129bfc70d0bbe52df01c431ae3fb9f2ea13))
- add on:click to ButtonGroupItem ([f3229de](https://github.com/themesberg/flowbite-svelte/commit/f3229dedfced6dcb4114a47370bb144bf4a07ae3))
- add on:click to forms/Toggle component ([3b9ba37](https://github.com/themesberg/flowbite-svelte/commit/3b9ba3730421fa7096efee80225c60038ad903b9))
- add on:contextmenu ([#506](https://github.com/themesberg/flowbite-svelte/issues/506)) ([75ad596](https://github.com/themesberg/flowbite-svelte/commit/75ad59695188e36e0af52487e041c15a7b6fd845))
- add on:input to textarea ([#518](https://github.com/themesberg/flowbite-svelte/issues/518)) ([318ffbf](https://github.com/themesberg/flowbite-svelte/commit/318ffbf676366fcc7bd08c538270800d90ce5189))
- add outline button ([aa14b26](https://github.com/themesberg/flowbite-svelte/commit/aa14b267ec1bf283ca3684fa956776b6ce4e6932))
- add outlineStyle white for loader ([7769c19](https://github.com/themesberg/flowbite-svelte/commit/7769c19df48cac833fa08ce659ebfa651160bbf5))
- add pagination components and page ([5d00ea2](https://github.com/themesberg/flowbite-svelte/commit/5d00ea2c3152965e77dde9218e28e0f84c0f0854))
- add pagination examples ([#503](https://github.com/themesberg/flowbite-svelte/issues/503)) ([93e48e3](https://github.com/themesberg/flowbite-svelte/commit/93e48e354a731216213e4ba38bf12e462880d58a))
- add PaperAirplane icon ([90d2543](https://github.com/themesberg/flowbite-svelte/commit/90d25435eb9cc68b38febaba41b5782efb755981))
- add paragraphs page ([db973a3](https://github.com/themesberg/flowbite-svelte/commit/db973a3929bfdc8c4dd48338cc114bdc2c808fb8))
- add placement to Drawer component ([1b91e52](https://github.com/themesberg/flowbite-svelte/commit/1b91e52618da8935b326a69161d01f0cc7739158))
- add pointerEvent prop to Iconinput to show/hide cursor ([dffa324](https://github.com/themesberg/flowbite-svelte/commit/dffa3247856c7245ecb8a67554ce77b797fe8627))
- add popover related files ([8b5050b](https://github.com/themesberg/flowbite-svelte/commit/8b5050b0e9f6e45533b858c7aa392463cfb6cc91))
- add positioning to Toasts ([a88f641](https://github.com/themesberg/flowbite-svelte/commit/a88f641731efc52d55c6474a8f9696598fd339cc))
- add primary to Checkbox ([b6063c6](https://github.com/themesberg/flowbite-svelte/commit/b6063c6925bd036676061d80a8c9ed78efda6f5c))
- add Progressbar component ([43cfe09](https://github.com/themesberg/flowbite-svelte/commit/43cfe096f7be589d8449ab495ac7e44d5eb460a5))
- add radio label with a link to radio form ([2c3fe6f](https://github.com/themesberg/flowbite-svelte/commit/2c3fe6f9b24a7364a61fc534163c87a157afff12))
- add RadioItem and RadioInline for colors, inline, helper text ([9fc2812](https://github.com/themesberg/flowbite-svelte/commit/9fc281268f8008023e5a8d501893b8761ba8a5ef))
- add range input ([215439f](https://github.com/themesberg/flowbite-svelte/commit/215439fc529856ecc8c72965cd39d7aff12d3eb7))
- add rating count and update app.css ([e5d642b](https://github.com/themesberg/flowbite-svelte/commit/e5d642b4a246c1716db8461e6ecbc26a7abad9d0))
- add Rating, AdvancedRating, and ScoreRating components ([8c91712](https://github.com/themesberg/flowbite-svelte/commit/8c91712d703364948b00c387a2b3f1d42be6159f))
- add related components ([5018baa](https://github.com/themesberg/flowbite-svelte/commit/5018baaf2b34dec951a1564caae6c4b6941bcdbc))
- add related components ([d01f355](https://github.com/themesberg/flowbite-svelte/commit/d01f35530418b370f42f349b10049792310fd4d5))
- add Review component ([67af517](https://github.com/themesberg/flowbite-svelte/commit/67af517e32dfc19c6079e5d1925a234f0162cc34))
- add Review component ([d41b11d](https://github.com/themesberg/flowbite-svelte/commit/d41b11d4ef00d1d6d0d824d4fcdc9c964a78a7d2))
- add Review component, page, and prop ([4446e1e](https://github.com/themesberg/flowbite-svelte/commit/4446e1eba3706e291f0cb3812b4ffb61df48eb46))
- add role to ChevronLeft ([0fc996e](https://github.com/themesberg/flowbite-svelte/commit/0fc996e9414471366fc7d18315434b6e4778aa85))
- add role to DropdownItem ([663ee33](https://github.com/themesberg/flowbite-svelte/commit/663ee3369b69fd7557963da10be2a8dac1ae2aed))
- add role to Menu compo ([7a76025](https://github.com/themesberg/flowbite-svelte/commit/7a760257a43fb0e0638f00531813fdb84f0f36db))
- add role to Modal ([ea79fff](https://github.com/themesberg/flowbite-svelte/commit/ea79fffea37ea32681a42afeb1dd500207953335))
- add role to NavUl and NavLi ([08732dd](https://github.com/themesberg/flowbite-svelte/commit/08732dda1247ce68f2218a9e742ecc6e54f28f68))
- add role to Star, Button, Heart, Thumbup, ChevronDown, CehvronRight, ChevronUp, InformationCirlc, and UserCircle components ([82337b2](https://github.com/themesberg/flowbite-svelte/commit/82337b2aac57730046a08a42f4272b8b82c22552))
- add role to TableBodyCell and change td to svelte:element ([67de66c](https://github.com/themesberg/flowbite-svelte/commit/67de66c010567cccb4a4e9781ab71c23e9b72021))
- add Search component ([c9874ad](https://github.com/themesberg/flowbite-svelte/commit/c9874ada31fbf20c74a882ee6392e9a7cc8ecc36))
- add search on home page ([3cba1fd](https://github.com/themesberg/flowbite-svelte/commit/3cba1fd3d61d934c78046841551bcb7b702b8597))
- add server hooks to redirect component pages and add redirect.spec test ([9e2cb72](https://github.com/themesberg/flowbite-svelte/commit/9e2cb72653cb2de16f77c30d73bd69a69bd73bd5))
- add sidebar component and its page ([5b5dd66](https://github.com/themesberg/flowbite-svelte/commit/5b5dd6666b7f558ad33365f3981834d18b63d5de))
- add sidebar page ([d217ddd](https://github.com/themesberg/flowbite-svelte/commit/d217ddd7f375fdb5c82cee36a2f6637a0936d515))
- add simeple search component ([945c27b](https://github.com/themesberg/flowbite-svelte/commit/945c27b5299ae52f9c160cbda74a0b0540d98be8))
- add size to Iconinput component ([f041953](https://github.com/themesberg/flowbite-svelte/commit/f04195350a179d55a7315a127d5b116deaac1f41))
- add size to Rating component ([7c2784e](https://github.com/themesberg/flowbite-svelte/commit/7c2784efff60877014c14a8acc7760f845671100))
- add skeleton components and page ([cf1f421](https://github.com/themesberg/flowbite-svelte/commit/cf1f421964a7122c77cf2b27615f4837ec3cf687))
- add slot and {...70121restProps} to all button components ([c98057c](https://github.com/themesberg/flowbite-svelte/commit/c98057cd6ee39053660378dad2b0bdb6970e18da))
- add slot to EcommerceCard ([d777c87](https://github.com/themesberg/flowbite-svelte/commit/d777c87d3097998e840a9e2ed79cafc036c74713))
- add SpeedDial component ([a959c5e](https://github.com/themesberg/flowbite-svelte/commit/a959c5edd96e56145453f0558f19be7f7a7fa8b5))
- add step indicator component ([#545](https://github.com/themesberg/flowbite-svelte/issues/545)) ([549ad61](https://github.com/themesberg/flowbite-svelte/commit/549ad616adc829b5482da20abf9f4ef3e78aa44b))
- add sticky footer, add $$props.class to all skeleton components ([1fad8dc](https://github.com/themesberg/flowbite-svelte/commit/1fad8dc9d8c0bc1428daeada82f44accc5f7e9a0))
- add sticky navbar ([4010ea8](https://github.com/themesberg/flowbite-svelte/commit/4010ea85483cf0c5a26275fe710ed34e4142846e))
- add svelet component to interactive tab ([b9ecd77](https://github.com/themesberg/flowbite-svelte/commit/b9ecd77be462f33e1a1f4a38f4047a0d7d2827e1))
- add svelte snapshot example ([#598](https://github.com/themesberg/flowbite-svelte/issues/598)) ([35da46d](https://github.com/themesberg/flowbite-svelte/commit/35da46d847b333308bcd21ff89834a7a1ded783e))
- add table search ([72664ee](https://github.com/themesberg/flowbite-svelte/commit/72664eed118587b445f931c57f1def7bf87056f6))
- add tables page ([670e210](https://github.com/themesberg/flowbite-svelte/commit/670e210dd964a02c6b71b091b29e6bf617265d5b))
- add Tabs component for all tab ([758e2e7](https://github.com/themesberg/flowbite-svelte/commit/758e2e743eb845c7190a7c6c2a9888c67c46db73))
- add target and {...$$restProps} to all footer components ([#405](https://github.com/themesberg/flowbite-svelte/issues/405)) ([c045aa7](https://github.com/themesberg/flowbite-svelte/commit/c045aa76dc209471f278eb98f0ec566c61e957f2))
- add tests ([ae48ebf](https://github.com/themesberg/flowbite-svelte/commit/ae48ebfd853ddc9f18de1e095b193ed8462a3045))
- add Text decoration examples to text page ([fe074cd](https://github.com/themesberg/flowbite-svelte/commit/fe074cd2a36d780333444f276de69edec51649d5))
- add Textsize to Badge and Button components. ([17b2238](https://github.com/themesberg/flowbite-svelte/commit/17b22383cc08c6cf6fe691d1cf804bfddf55cfe3))
- add timeline pages ([2fb5117](https://github.com/themesberg/flowbite-svelte/commit/2fb511786cc6e7404e9187d62384e5c5a4e0ff95))
- add Toast component ([1ee43ff](https://github.com/themesberg/flowbite-svelte/commit/1ee43ff5553498f2495e9bf47b65d020dbf26436))
- add Toast page ([e9d0f7b](https://github.com/themesberg/flowbite-svelte/commit/e9d0f7b1f861ee920d31019d4a1d1d60caa28599))
- add Tooltip custom CSS ([1466d16](https://github.com/themesberg/flowbite-svelte/commit/1466d16fff312ccdb22e1c282f49b7b156121d57))
- add transition slide to navbar ([da3d34a](https://github.com/themesberg/flowbite-svelte/commit/da3d34a34d209b599440225baa92d440ff291e03))
- add transition slide to navbar ([755ae7f](https://github.com/themesberg/flowbite-svelte/commit/755ae7f39823f9cdbcea375722eadabcc80d385a))
- add transition to SidebarDropdownWrapper ([#590](https://github.com/themesberg/flowbite-svelte/issues/590)) ([36f4971](https://github.com/themesberg/flowbite-svelte/commit/36f49711aece1535e78804d785a841d11f8e0459))
- add twMerge to timeline components ([e993e72](https://github.com/themesberg/flowbite-svelte/commit/e993e72c1524bbd4c64e61d48cd3307a8a833ec4))
- add type to ButtonGroupItem ([1aefa6b](https://github.com/themesberg/flowbite-svelte/commit/1aefa6bd85acabc05b9ba8016b8e1f46bd55baef))
- add type.ts for COLORS. ([1e2e2a2](https://github.com/themesberg/flowbite-svelte/commit/1e2e2a2d56ea9fb8b14f6421755de2dbcadfa7e9))
- add types to Button components ([eee5386](https://github.com/themesberg/flowbite-svelte/commit/eee538637c521d8a3493b37ff98ee41af5516ae2))
- add typescript to Alerts components. ([b081883](https://github.com/themesberg/flowbite-svelte/commit/b0818837974088962279bfe3c05ed37d6b224551))
- add typescript to badges and buttons. ([e51560e](https://github.com/themesberg/flowbite-svelte/commit/e51560e8b3e8debdd0d7427b645c6abadac01807))
- add Typescript to buttongroup components. ([688e247](https://github.com/themesberg/flowbite-svelte/commit/688e247bda802c76def0ecec7baa669415bf7e9a))
- add Typescript to footer components. ([ad049e4](https://github.com/themesberg/flowbite-svelte/commit/ad049e4f26204935e838bdad1fdc23ae68aaf95a))
- add typescript to modal components. ([333eb82](https://github.com/themesberg/flowbite-svelte/commit/333eb82557fba97a85805d522c1f175c7398658f))
- add Typescript to navbar components. ([18a71b8](https://github.com/themesberg/flowbite-svelte/commit/18a71b8b9dd55578ef2e50f5915d1655144cfff4))
- add Typescript to spinner and tooltip components. ([531d79a](https://github.com/themesberg/flowbite-svelte/commit/531d79af20455d4ffe58f3bd944cbea79cc229dd))
- add Typescript to tab components. ([0d36bfb](https://github.com/themesberg/flowbite-svelte/commit/0d36bfbe05f6ecd62ea1f5dc796954ff4c1b96ae))
- add typography page ([52923fb](https://github.com/themesberg/flowbite-svelte/commit/52923fb66b55fed20c876ef7b9348fccadde04a3))
- add Ul, Li, Span component ([86d8b66](https://github.com/themesberg/flowbite-svelte/commit/86d8b661f2524f25162a99b6d3b8df761a85b01b))
- add underline and decoratio class to Span ([f3b11a9](https://github.com/themesberg/flowbite-svelte/commit/f3b11a92b3782c27e09f25c894a81402661b73d3))
- add User review, User testimonial, Paragraph context, Blockquote icon to typography/blockquote page ([73143ba](https://github.com/themesberg/flowbite-svelte/commit/73143bad816f6b3249fff3486d3b8569f45fde7f))
- add voice search component ([8e6e610](https://github.com/themesberg/flowbite-svelte/commit/8e6e6101fb54c5307a4d3e32cf61042308532cae))
- alerts more functions, changed API ([a2306fb](https://github.com/themesberg/flowbite-svelte/commit/a2306fb2a980a140da51f4f36ac299a5ce33c1c8))
- alerts with lists ([5ad5f3c](https://github.com/themesberg/flowbite-svelte/commit/5ad5f3cfb6b8f68464475b11086f85b0d60cc068))
- allow customization of body class in Modal component ([#945](https://github.com/themesberg/flowbite-svelte/issues/945)) ([72514ec](https://github.com/themesberg/flowbite-svelte/commit/72514ec631712d2c6bf9b94515f0a76b23759706))
- allow customization of innerWrapperClass for Textarea ([#929](https://github.com/themesberg/flowbite-svelte/issues/929)) ([8869fbf](https://github.com/themesberg/flowbite-svelte/commit/8869fbfe36dd012ff653b5dba522119927897e2a))
- avatar w/tooltip / initials ([6b9a333](https://github.com/themesberg/flowbite-svelte/commit/6b9a333c96f3485b33a2fdeecc113138452acca0))
- badges new features ([775ecbc](https://github.com/themesberg/flowbite-svelte/commit/775ecbc04df58cd7c2517d103c963e7add92b5f6))
- Button component API update ([934ff9b](https://github.com/themesberg/flowbite-svelte/commit/934ff9b6fdb63fa8f10bb93a1ed1ef1afaf95421))
- button group ([bb95b98](https://github.com/themesberg/flowbite-svelte/commit/bb95b98c0e4b70f3958c778ac2dc8367c67df8d7))
- can add own search function to TableSearch component ([514c7f7](https://github.com/themesberg/flowbite-svelte/commit/514c7f71ba0ff48637ff37051c9e453a40a56f11))
- cards - re-written ([1084f38](https://github.com/themesberg/flowbite-svelte/commit/1084f38514e4cac5662ae6b969dde27e829ea24e))
- cards - re-written ([52716e0](https://github.com/themesberg/flowbite-svelte/commit/52716e08ac0f4446e3c7160fc3dc83e515201d7d))
- cards - wip ([0948c89](https://github.com/themesberg/flowbite-svelte/commit/0948c89a124662b7c5c238350df341e0956dac8a))
- change Navbar component structure ([81b83fb](https://github.com/themesberg/flowbite-svelte/commit/81b83fb6805412b85ecf23186ccf50b4c737bdd4))
- change node version to 0.16.16 since new playwright and sveltekit require it, https://github.com/sveltejs/kit/issues/5842 ([6175c2c](https://github.com/themesberg/flowbite-svelte/commit/6175c2cb54c60829eb329bce90772e59b888063f))
- combine Accordionflush and AccordionItem ([e53fa64](https://github.com/themesberg/flowbite-svelte/commit/e53fa6421ca747ed46d6432b67715b3eedf4cbba))
- **config:** fix default bg-primary-50 color ([7d89f57](https://github.com/themesberg/flowbite-svelte/commit/7d89f572b934f3da843bca3f4f162939c1bb2768))
- create utilities/closebutton, label, and toolbar ([3ad9775](https://github.com/themesberg/flowbite-svelte/commit/3ad9775ffbed66908cbaa82845b86151e179d534))
- darkmode fix for refreshing a browser ([#784](https://github.com/themesberg/flowbite-svelte/issues/784)) ([aac2187](https://github.com/themesberg/flowbite-svelte/commit/aac218711967ba63ee139ef7f5370dd43993c709))
- datepicker update. It needs rel=external for the link from sidebar menu and index page ([6fed169](https://github.com/themesberg/flowbite-svelte/commit/6fed169402be79c0e0eba9a93766be5f0587ef41))
- default input ids to sequentially-generated strings ([3527cc6](https://github.com/themesberg/flowbite-svelte/commit/3527cc6991c8c119aa604c89fed45436b9f4fb2c))
- dependencies update ([b1866b8](https://github.com/themesberg/flowbite-svelte/commit/b1866b8dc5ecc55cc0c343d663537439664cf7a8))
- devicemockup ([#778](https://github.com/themesberg/flowbite-svelte/issues/778)) ([fec1f4c](https://github.com/themesberg/flowbite-svelte/commit/fec1f4caa5da33259766312dda95a7fdaeb291eb))
- **docs:** improve docs components ([#889](https://github.com/themesberg/flowbite-svelte/issues/889)) ([0b82e2f](https://github.com/themesberg/flowbite-svelte/commit/0b82e2f1f08f047969a7f1b7c06b3982b3abca03))
- documenting components ([#801](https://github.com/themesberg/flowbite-svelte/issues/801)) ([80daafb](https://github.com/themesberg/flowbite-svelte/commit/80daafb221f49410d861d6efe5652b977faba513))
- drawer on progress ([027c6de](https://github.com/themesberg/flowbite-svelte/commit/027c6de72ff563df34a5d56fbe9d8ea571440ff8))
- dropdown as Popper + fixes ([67fdf78](https://github.com/themesberg/flowbite-svelte/commit/67fdf7837f36d63b3683e0b6f6e78fbf91f6bf23))
- dropdown button ([f6347f2](https://github.com/themesberg/flowbite-svelte/commit/f6347f280cbfc552d001aa22128026174b46a6f3))
- dropdown new version ([f17dbff](https://github.com/themesberg/flowbite-svelte/commit/f17dbff9139a80d0629913315fd4e594e99c9f40))
- enhance DarkMode ([#437](https://github.com/themesberg/flowbite-svelte/issues/437)) ([9afd3e1](https://github.com/themesberg/flowbite-svelte/commit/9afd3e11bec5bc4416537d7d371f970dd414a394))
- export open in speeddial ([#960](https://github.com/themesberg/flowbite-svelte/issues/960)) ([7dff563](https://github.com/themesberg/flowbite-svelte/commit/7dff5630dfd482a828c45611f129c432b94908de))
- favicon and logo update ([6c317a9](https://github.com/themesberg/flowbite-svelte/commit/6c317a967d5a0b8acdf19e7d8a74fe059407c34f))
- fixing standard-version ([cd316e4](https://github.com/themesberg/flowbite-svelte/commit/cd316e412171689e04ec435dfc31abd89b7cbe1d))
- focus trap for modals ([08604ac](https://github.com/themesberg/flowbite-svelte/commit/08604ac3475f28a5a35c037e47ecfc13ee13b877))
- Footer component updated ([c144ba6](https://github.com/themesberg/flowbite-svelte/commit/c144ba67bc7bf883066c9de2afaca21f1dc82bf3))
- form buttons tinted removed ([5c2d619](https://github.com/themesberg/flowbite-svelte/commit/5c2d619c8c5ade960e2b3a59c20b809a40174829))
- frame abstraction ([47e4126](https://github.com/themesberg/flowbite-svelte/commit/47e4126fa02ff6b9c93d3ee7e17fee79195ac1d3))
- GetStarted element ([#681](https://github.com/themesberg/flowbite-svelte/issues/681)) ([cd381b7](https://github.com/themesberg/flowbite-svelte/commit/cd381b75c4589582eba7b5d4e945ca78f2884ec6))
- home page cta ([#689](https://github.com/themesberg/flowbite-svelte/issues/689)) ([76d7eb5](https://github.com/themesberg/flowbite-svelte/commit/76d7eb5454fb04c3e7d2a6e048dc46e870050902))
- indicator comp ([#532](https://github.com/themesberg/flowbite-svelte/issues/532)) ([57ce4fc](https://github.com/themesberg/flowbite-svelte/commit/57ce4fcdce3965921c0f6edf71f6ae42c2d42b40))
- **input:** update blue to primary color focus ([f155ec5](https://github.com/themesberg/flowbite-svelte/commit/f155ec588fc52e30383368b2700dbb28be3bbb6d))
- list group rewritten - API changed ([86c97dc](https://github.com/themesberg/flowbite-svelte/commit/86c97dc54581f634baed601c609e9d90c6c4611b))
- make <TableHead> slot more flexible ([#527](https://github.com/themesberg/flowbite-svelte/issues/527)) ([33803f2](https://github.com/themesberg/flowbite-svelte/commit/33803f23ce90f9425417f6417c70bc6928337bbe))
- make AccordionItem transitions customizable ([0b49c35](https://github.com/themesberg/flowbite-svelte/commit/0b49c35a803b4ba3523c4d11845460c1958f9167))
- make button styles reactive ([d74dd9b](https://github.com/themesberg/flowbite-svelte/commit/d74dd9b37c58716e33ca72ce5058b557a6b43ced))
- make Select receive custom options ([#514](https://github.com/themesberg/flowbite-svelte/issues/514)) ([a58b410](https://github.com/themesberg/flowbite-svelte/commit/a58b410a3ffce29432907457baeae8c20977ef42))
- make tr and td clickable ([#452](https://github.com/themesberg/flowbite-svelte/issues/452)) ([3bc7f9e](https://github.com/themesberg/flowbite-svelte/commit/3bc7f9e227e3bfe70b0c184eae132abafd071760))
- mdsvexamples ([fc542a0](https://github.com/themesberg/flowbite-svelte/commit/fc542a0b6d09067fa62ae92ed44cb08408c19ad0))
- megamenu - code skel ([d02c5c7](https://github.com/themesberg/flowbite-svelte/commit/d02c5c78a5360f623ffe3fb3659265d679e43426))
- megamenu - wip ([02bbabc](https://github.com/themesberg/flowbite-svelte/commit/02bbabcdda0f924aefa2829a94e3b822bdb0bbf6))
- megamenu + examples ([2f24a26](https://github.com/themesberg/flowbite-svelte/commit/2f24a268dfe474da45a654d6a4bd128f4175ae44))
- merging jjagielka-buttons ([94ffdcb](https://github.com/themesberg/flowbite-svelte/commit/94ffdcba071488d0d56492c3a1fdb148afdb9450))
- modal - crypto ([47cf678](https://github.com/themesberg/flowbite-svelte/commit/47cf678ef2a7bf10c842e367a37e2aedebe7a8fc))
- modal - crypto + html ([26475ed](https://github.com/themesberg/flowbite-svelte/commit/26475edd98a2c73fbe02580fefb4c8455e25f1bb))
- modal - re-written ([4dd27af](https://github.com/themesberg/flowbite-svelte/commit/4dd27afd996328fcdc6c19895e1a6a6beef2c772))
- modal - re-written ([1c6a93d](https://github.com/themesberg/flowbite-svelte/commit/1c6a93dfe332a7f65058d25a4a68e542d15e9a21))
- modal block background scroll ([f3eb627](https://github.com/themesberg/flowbite-svelte/commit/f3eb62732dc899d6f1483d9f86a5c644c8d2edd2))
- modal internal scrolling ([7ca08ea](https://github.com/themesberg/flowbite-svelte/commit/7ca08ea939e0116241c564738ec237bd501ca32c))
- more alert options ([7071490](https://github.com/themesberg/flowbite-svelte/commit/7071490d458312c3f0833097c10829b20a34919a))
- more Frame inheritance ([bb72d69](https://github.com/themesberg/flowbite-svelte/commit/bb72d6952386bd0f6dec4711795e3591a6837c02))
- new sidebar structure ([bf35b3e](https://github.com/themesberg/flowbite-svelte/commit/bf35b3e230b9d2f9b27d2e9576c70a3db47bc48c))
- new tab components and page ([7c53437](https://github.com/themesberg/flowbite-svelte/commit/7c534377c31384b609774db19b0bace7fee3d5cb))
- new Table components ([b2d4c8c](https://github.com/themesberg/flowbite-svelte/commit/b2d4c8cca892da8e18fd0e2f688ccc9280bc8df8))
- newsletter form ([#674](https://github.com/themesberg/flowbite-svelte/issues/674)) ([89df011](https://github.com/themesberg/flowbite-svelte/commit/89df011c684bf8829b3f15c38fec4b727d62303d))
- pagination ([#395](https://github.com/themesberg/flowbite-svelte/issues/395)) ([4792988](https://github.com/themesberg/flowbite-svelte/commit/479298855936bdc0e917788bbe1e00d8f62cbbe2))
- pagination large ([#895](https://github.com/themesberg/flowbite-svelte/issues/895)) ([a5cd87a](https://github.com/themesberg/flowbite-svelte/commit/a5cd87a2bfed6ce25c39969be401458dda2259c3))
- permanent option ([cceeb1b](https://github.com/themesberg/flowbite-svelte/commit/cceeb1b21995e4b386e61fa90256c7b3a304326e))
- popover ([c41ddc4](https://github.com/themesberg/flowbite-svelte/commit/c41ddc408f3696e05ee66de4922b95ee5cee1a08))
- popover finalization ([c71481e](https://github.com/themesberg/flowbite-svelte/commit/c71481ec18e2850488d86cfdb583587eae4a19b2))
- popper reloaded ([a4b851e](https://github.com/themesberg/flowbite-svelte/commit/a4b851e2409356a90fd6aaae62db327b505bdcb2))
- popper reloaded part 2 ([2482870](https://github.com/themesberg/flowbite-svelte/commit/2482870842386c8c1e5824869ce7822b8682e8a0))
- prev/next buttons ([#675](https://github.com/themesberg/flowbite-svelte/issues/675)) ([590e423](https://github.com/themesberg/flowbite-svelte/commit/590e423396a9d42ad56593f9131b2107ad1ec2fe))
- range - clean up ([79d35ca](https://github.com/themesberg/flowbite-svelte/commit/79d35ca127094efb20e12ad3e14635cf607edddc))
- replace all components classnames to twMerge ([6d0ec87](https://github.com/themesberg/flowbite-svelte/commit/6d0ec8703bff2af91be1e656eb1f71b6f42ea920))
- replace classnames to twMerge and twJoin ([342ae23](https://github.com/themesberg/flowbite-svelte/commit/342ae231b3552fc11f44b0fa9c9bc968d7193672))
- replace classnames to twMerge and twJoin upto Card ([6ab1278](https://github.com/themesberg/flowbite-svelte/commit/6ab1278cf9e5c45e7be2b2a532f0f469116aa3d3))
- replace classnames to twMerge and twJoin upto Footer ([799fd01](https://github.com/themesberg/flowbite-svelte/commit/799fd011c3246a220492ca59c84716b935e6aea1))
- replace classnames to twMerge upto Progressbar ([a2ba25b](https://github.com/themesberg/flowbite-svelte/commit/a2ba25b566a0049025f8f6f7c5f7046e0b8dfdae))
- replace classnames to twMerge upto TableSearch ([1307d58](https://github.com/themesberg/flowbite-svelte/commit/1307d589f82e7c20079640cbe90bc29e0c33e57b))
- replace classnames to twMerge upto Toggle ([57890a6](https://github.com/themesberg/flowbite-svelte/commit/57890a66018c884940f981f5da78f9068e5c1833))
- **routes:** padding updates. ([6053bad](https://github.com/themesberg/flowbite-svelte/commit/6053bad6e08582bda616e3022607aa9d0995e7b9))
- run svelte-migrate ([d4d7c48](https://github.com/themesberg/flowbite-svelte/commit/d4d7c48fbf7fab165e6cc491d52085ab5503ebbb))
- select input [#50](https://github.com/themesberg/flowbite-svelte/issues/50) ([8cea993](https://github.com/themesberg/flowbite-svelte/commit/8cea993344f1427f83ab46f29a9bc1613c67960c))
- slightly shorter version of redirection hooks ([#673](https://github.com/themesberg/flowbite-svelte/issues/673)) ([635e1e3](https://github.com/themesberg/flowbite-svelte/commit/635e1e38e2ac83d82982ff048d2a2f230c483389))
- social proof ([#686](https://github.com/themesberg/flowbite-svelte/issues/686)) ([4567ee2](https://github.com/themesberg/flowbite-svelte/commit/4567ee2209263eb1aed2ddd712b8de651e044641))
- start working drawer ([55a0ebf](https://github.com/themesberg/flowbite-svelte/commit/55a0ebfcb29743ad1b5222cad41b6ccf8610582b))
- sveltekit update to 1.5.6 ([#571](https://github.com/themesberg/flowbite-svelte/issues/571)) ([c24c639](https://github.com/themesberg/flowbite-svelte/commit/c24c63950471f831bc4fdec37e9aa767f6f64c96))
- table search on progress ([9cff21d](https://github.com/themesberg/flowbite-svelte/commit/9cff21d7ffbeb351b95601a85abe826323c68f9d))
- textarea ([47d51be](https://github.com/themesberg/flowbite-svelte/commit/47d51be427b056793cf64e4089cf4a4a7ba310d7))
- textarea / fix ([93cdb01](https://github.com/themesberg/flowbite-svelte/commit/93cdb019326ebcaddd3482c5e41c8a635461ac67))
- toast fine tune ([f3ee6f3](https://github.com/themesberg/flowbite-svelte/commit/f3ee6f382aa3a004a8efdbed75f215b9dfe59b4e))
- toolbar ([f02ff55](https://github.com/themesberg/flowbite-svelte/commit/f02ff558fa938913c32117ff51b46bdd6088e38a))
- toolbar w/html ([93116c3](https://github.com/themesberg/flowbite-svelte/commit/93116c34b4063eb9d166d85ef3dd7e20126fa29e))
- tooltips new API ([d9dacf9](https://github.com/themesberg/flowbite-svelte/commit/d9dacf9f65e85be93a3458dd5359d614a0dd12a0))
- trim number of components ([#709](https://github.com/themesberg/flowbite-svelte/issues/709)) ([8723242](https://github.com/themesberg/flowbite-svelte/commit/87232427dc255cda4a11dc2fef5228c124cfc4ee))
- typescript types for frame subclasses ([#731](https://github.com/themesberg/flowbite-svelte/issues/731)) ([6dd9877](https://github.com/themesberg/flowbite-svelte/commit/6dd9877a7b667e895c02b79e86a2c3ce88eb608c))
- upate Footer components ([1704c86](https://github.com/themesberg/flowbite-svelte/commit/1704c8631c33f1c9dbdefaaf2f180084da645fdd))
- update Breadcrumb components ([b35a970](https://github.com/themesberg/flowbite-svelte/commit/b35a9701ae08f795e37c55b92d24805d02a19b96))
- update dependencies and vite. script dev, build preview and test work ([bf1b837](https://github.com/themesberg/flowbite-svelte/commit/bf1b83788d7f3ec53c2d5e5c85a825606cbce38f))
- update docs and remove classnames from package.json ([9ef819b](https://github.com/themesberg/flowbite-svelte/commit/9ef819b24e2188c39d40d84ea60778ea42815a8a))
- update Dropzone and docs ([2467d22](https://github.com/themesberg/flowbite-svelte/commit/2467d222b7c172a8985ad6c8b6d683564ec07dc5))
- update floating label component ([d04caf9](https://github.com/themesberg/flowbite-svelte/commit/d04caf981a0cbbed37a82df1899d4584908b9171))
- update heroicons ([9a96fca](https://github.com/themesberg/flowbite-svelte/commit/9a96fca12b1e3adc61088a56ae2c3d3ad65ceb67))
- update Navbar components ([66170da](https://github.com/themesberg/flowbite-svelte/commit/66170dab34128dbe510131f2cd75a9123e06bdfe))
- update Rating component ([#772](https://github.com/themesberg/flowbite-svelte/issues/772)) ([0d9636f](https://github.com/themesberg/flowbite-svelte/commit/0d9636fa119a77a01f8ab30ff9f38aaa5753e914))
- update Sidebar components ([4f15325](https://github.com/themesberg/flowbite-svelte/commit/4f153257b519d4cbbb405a357e4c6ee7ebe30249))
- update svelte to 3.47.0 ([2c51f1c](https://github.com/themesberg/flowbite-svelte/commit/2c51f1c21907f7a977249e3dfe7c2fe46dd85553))
- update sveltekit 1.0.1 ([9b812c8](https://github.com/themesberg/flowbite-svelte/commit/9b812c861b25ef338574e91c95de3a1c0219f3b5))
- upgrade deps ([5a61709](https://github.com/themesberg/flowbite-svelte/commit/5a61709c7d748af7e9f5dcc73e4c49b30c5a9e44))
- video component and page ([27cd7df](https://github.com/themesberg/flowbite-svelte/commit/27cd7df226dde37e8a598b6693ae8278671d5782))
- working on datepicker ([4fedccf](https://github.com/themesberg/flowbite-svelte/commit/4fedccfc3f04308b53712cc87849098a7e502d2a))
- working on drawer ([07a8e02](https://github.com/themesberg/flowbite-svelte/commit/07a8e02ceac450e7e7ceeb2ad9b98bfac7c7c1cf))
- working on Tabs ([201c124](https://github.com/themesberg/flowbite-svelte/commit/201c124e33bed0d1b13cfe2e3f6ba5ea0bfc6c1c))
- wrapper added ([024b8e6](https://github.com/themesberg/flowbite-svelte/commit/024b8e6a8db1e4961b1d26df67728cc0fb8b3025))

### Bug Fixes

- [#144](https://github.com/themesberg/flowbite-svelte/issues/144) ChevronLeft fix ([016940b](https://github.com/themesberg/flowbite-svelte/commit/016940b36c6782c2481d8ff6c489c2808945d674))
- [#165](https://github.com/themesberg/flowbite-svelte/issues/165) toggle bind:group bind:checked ([3ca4010](https://github.com/themesberg/flowbite-svelte/commit/3ca40109f13e31afa76e02c96d387ff476880e52))
- [#177](https://github.com/themesberg/flowbite-svelte/issues/177) export visible/autohide ([2127151](https://github.com/themesberg/flowbite-svelte/commit/2127151550a778d35bee5eb3b2b77f38423f50e4))
- [#200](https://github.com/themesberg/flowbite-svelte/issues/200) undefined in tooltips ([4ed2ec0](https://github.com/themesberg/flowbite-svelte/commit/4ed2ec04945676cbc3e40011fb7790d1de18d8db))
- [#226](https://github.com/themesberg/flowbite-svelte/issues/226) for double on:click in DropdownItem ([c125d2d](https://github.com/themesberg/flowbite-svelte/commit/c125d2d02e3818cedb83994e930ca5cc7075571c))
- [#266](https://github.com/themesberg/flowbite-svelte/issues/266) change {id} to {...$$restProps} ([b02822f](https://github.com/themesberg/flowbite-svelte/commit/b02822f273fe5b14613ec77e39285078a740cda0))
- [#273](https://github.com/themesberg/flowbite-svelte/issues/273) remove number from select value type ([529510b](https://github.com/themesberg/flowbite-svelte/commit/529510bc50e561b544175a350390d7f32291727c))
- [#274](https://github.com/themesberg/flowbite-svelte/issues/274) change the links to singular for blocks components ([7378935](https://github.com/themesberg/flowbite-svelte/commit/73789353f4d598722db88cecb595303e8d60ac31))
- [#281](https://github.com/themesberg/flowbite-svelte/issues/281) ([5f79a5e](https://github.com/themesberg/flowbite-svelte/commit/5f79a5e27e23f568ae8e82d3ee974eea93eaccab))
- [#376](https://github.com/themesberg/flowbite-svelte/issues/376) ([#378](https://github.com/themesberg/flowbite-svelte/issues/378)) ([8b4c2e3](https://github.com/themesberg/flowbite-svelte/commit/8b4c2e3200c73448aa34f921738e8ea8d10ee538))
- [#379](https://github.com/themesberg/flowbite-svelte/issues/379) ([#380](https://github.com/themesberg/flowbite-svelte/issues/380)) ([0019915](https://github.com/themesberg/flowbite-svelte/commit/001991546e3e7376a02c17481784c5a5636d6ed7))
- [#530](https://github.com/themesberg/flowbite-svelte/issues/530) ([16c6650](https://github.com/themesberg/flowbite-svelte/commit/16c66504d42a378705a120fae5a6ca147a776bd4))
- [#534](https://github.com/themesberg/flowbite-svelte/issues/534) list group typing ([#805](https://github.com/themesberg/flowbite-svelte/issues/805)) ([95861f4](https://github.com/themesberg/flowbite-svelte/commit/95861f4f046c5c6b4127dd5f5120581346531831))
- [#774](https://github.com/themesberg/flowbite-svelte/issues/774) ([#822](https://github.com/themesberg/flowbite-svelte/issues/822)) ([b1bca6b](https://github.com/themesberg/flowbite-svelte/commit/b1bca6b6483bf9e345ef3a60fa5f9d545ee77527))
- [#781](https://github.com/themesberg/flowbite-svelte/issues/781) tooltip arrow ([#804](https://github.com/themesberg/flowbite-svelte/issues/804)) ([2bd8938](https://github.com/themesberg/flowbite-svelte/commit/2bd8938d6b864f9294ee897c1ce6edc4b8ec08ab))
- [#818](https://github.com/themesberg/flowbite-svelte/issues/818) ([#821](https://github.com/themesberg/flowbite-svelte/issues/821)) ([4050456](https://github.com/themesberg/flowbite-svelte/commit/4050456f270abb335b96b5cf65a0ea7eed200fdd))
- [#836](https://github.com/themesberg/flowbite-svelte/issues/836) ([c727c98](https://github.com/themesberg/flowbite-svelte/commit/c727c982cff9c28251a052b2bda1fee496fd62a6))
- [#905](https://github.com/themesberg/flowbite-svelte/issues/905) ([#913](https://github.com/themesberg/flowbite-svelte/issues/913)) ([85d8d43](https://github.com/themesberg/flowbite-svelte/commit/85d8d43b7b69c3d9050a56dca6d947f4dcc047b2))
- [#909](https://github.com/themesberg/flowbite-svelte/issues/909) ([#911](https://github.com/themesberg/flowbite-svelte/issues/911)) ([ac4cd25](https://github.com/themesberg/flowbite-svelte/commit/ac4cd252924f15f241ac63bff4fb0b17583c3b21))
- [#909](https://github.com/themesberg/flowbite-svelte/issues/909) ([#911](https://github.com/themesberg/flowbite-svelte/issues/911)) ([85b10d1](https://github.com/themesberg/flowbite-svelte/commit/85b10d16c430fea282e4cdb977003a710e6c552b))
- [#910](https://github.com/themesberg/flowbite-svelte/issues/910) ([#912](https://github.com/themesberg/flowbite-svelte/issues/912)) ([ccaa4b6](https://github.com/themesberg/flowbite-svelte/commit/ccaa4b6772a3d8b24aba0a8fc4a1e25c148f9e86))
- [#931](https://github.com/themesberg/flowbite-svelte/issues/931) ([#932](https://github.com/themesberg/flowbite-svelte/issues/932)) ([0f2db6a](https://github.com/themesberg/flowbite-svelte/commit/0f2db6a2cd4dd1edac04696ca9de29f08262ee0c))
- [#931](https://github.com/themesberg/flowbite-svelte/issues/931) ([#932](https://github.com/themesberg/flowbite-svelte/issues/932)) ([d56bc55](https://github.com/themesberg/flowbite-svelte/commit/d56bc5561f33d2f7b8c9df647b28b222b0ea6a47))
- [#937](https://github.com/themesberg/flowbite-svelte/issues/937) ([#943](https://github.com/themesberg/flowbite-svelte/issues/943)) ([c4030df](https://github.com/themesberg/flowbite-svelte/commit/c4030dfabc926da218dd02447bd37af39061256e))
- [#937](https://github.com/themesberg/flowbite-svelte/issues/937) ([#943](https://github.com/themesberg/flowbite-svelte/issues/943)) ([442ab65](https://github.com/themesberg/flowbite-svelte/commit/442ab650ca14fd75094dcb85f2774f714be4394b))
- [#952](https://github.com/themesberg/flowbite-svelte/issues/952) multiselect ([#954](https://github.com/themesberg/flowbite-svelte/issues/954)) ([cd37db1](https://github.com/themesberg/flowbite-svelte/commit/cd37db16d97884171f059273be9c62f260777c9b))
- [#958](https://github.com/themesberg/flowbite-svelte/issues/958) ([#959](https://github.com/themesberg/flowbite-svelte/issues/959)) ([e238349](https://github.com/themesberg/flowbite-svelte/commit/e238349576f535122e87f09ded63a76b831ffc98))
- {'...'} to '...' ([3f262a8](https://github.com/themesberg/flowbite-svelte/commit/3f262a83fa1d3ba8394fbe23024104c8ab86f783))
- +layout.server ([#808](https://github.com/themesberg/flowbite-svelte/issues/808)) ([cf1e551](https://github.com/themesberg/flowbite-svelte/commit/cf1e551690de641ec493933581ac1fc36e124d1d))
- $$props.class ([#890](https://github.com/themesberg/flowbite-svelte/issues/890)) ([8d90322](https://github.com/themesberg/flowbite-svelte/commit/8d90322eb0fbddfb626f9f3b89c53afcf5bacfc7))
- $$restProps before $$props.class ([9378cf5](https://github.com/themesberg/flowbite-svelte/commit/9378cf5349446ec8355317e98e462e379350a697))
- 28115props.class returns undefined if class is not given ([c1d4ab8](https://github.com/themesberg/flowbite-svelte/commit/c1d4ab8eb6b379078a3fb3fc51952d94c31cf452))
- 683restProps for toolbarbutton ([6ce830c](https://github.com/themesberg/flowbite-svelte/commit/6ce830c2657c6727835ded2b01728c8830a1a7d2))
- A11y fix for all alt taking out picture for img tag ([a247c32](https://github.com/themesberg/flowbite-svelte/commit/a247c32171543450647877a0f7192e63ee64fbb5))
- accordion gap ([#735](https://github.com/themesberg/flowbite-svelte/issues/735)) ([431b532](https://github.com/themesberg/flowbite-svelte/commit/431b5323a49530c6791579d71dae30312c46cb8e))
- accordion slots + docs ([#349](https://github.com/themesberg/flowbite-svelte/issues/349)) ([78a2542](https://github.com/themesberg/flowbite-svelte/commit/78a25427e31f61ba86ce825d9127515326448afa))
- add {39090props.class || ''} {...39090restProps} to Sidebar components ([7ea5815](https://github.com/themesberg/flowbite-svelte/commit/7ea5815d939dd6041a3a9e965127ea61736d5849))
- add {68013props.class} to footer components ([2701bf2](https://github.com/themesberg/flowbite-svelte/commit/2701bf23fea1250946379d38e517d04a0978ca14))
- add '' to string types ([387363a](https://github.com/themesberg/flowbite-svelte/commit/387363a3b3668dc66a7790331927e1c1641e4de6))
- add "tailwind-merge": "^1.13.1" to dependencies ([9b5757e](https://github.com/themesberg/flowbite-svelte/commit/9b5757e25c12b0394f08aa5476e21312d858c6c7))
- add {4126props.class || ''} to Navbar nav ([39a50fe](https://github.com/themesberg/flowbite-svelte/commit/39a50fe2a4296856d9fa97082f1807e6e1ddc0e8))
- add {41578props.class ? 41578props.class : ''} to AccordionItem component ([b90ee19](https://github.com/themesberg/flowbite-svelte/commit/b90ee19dc8a82a801eba01901eb6f2dbf3c9df1a))
- add 100% to pre tag ([3c8eaf2](https://github.com/themesberg/flowbite-svelte/commit/3c8eaf257697c48121cc79496885e05309b302bc))
- add 32997restProps to Iconinput ([34c8ad5](https://github.com/themesberg/flowbite-svelte/commit/34c8ad5dc0ca6c1ce39c6281c185274fd0f49ca7))
- add a space in front of from /index ([32beb0e](https://github.com/themesberg/flowbite-svelte/commit/32beb0e9d3fd7c9c92e34ccc8d690a9f8361c780))
- add all props to pages ([7716db1](https://github.com/themesberg/flowbite-svelte/commit/7716db1d73d2f0046542ad748c00ea0dfc90d417))
- add anchors to h2 tags ([7673c72](https://github.com/themesberg/flowbite-svelte/commit/7673c72ee801bb6b3673f6a6e9259ec265f03a0c))
- add auto-install-peers=true to .npmrc ([fd439d0](https://github.com/themesberg/flowbite-svelte/commit/fd439d0613ec2a39e747936cf1bd9f557e2cb093))
- add bind directives to form components ([c8284b2](https://github.com/themesberg/flowbite-svelte/commit/c8284b2545932bb2c8d2fe483bda92189bc6303f))
- add bind:checked to Checkbox ([7cfcf67](https://github.com/themesberg/flowbite-svelte/commit/7cfcf67b52a1496f57f8ef31b4205464f9eb82a0))
- add bind:checked to Toggle ([18a34ea](https://github.com/themesberg/flowbite-svelte/commit/18a34eaaf65539bf176da642b4a04f644265f647))
- add Breadcrumb to md files ([6ea1d24](https://github.com/themesberg/flowbite-svelte/commit/6ea1d246ef2ed47f87ec764634fad6729700d286))
- add btnLabel=Read more ([0730167](https://github.com/themesberg/flowbite-svelte/commit/073016733d50fddc70e78e38520eabf0a912236c))
- add button role if it is a link ([e481587](https://github.com/themesberg/flowbite-svelte/commit/e481587edfb3236aae6f76a285ebe51bfc6ae260))
- add button role if pag item is link ([0192784](https://github.com/themesberg/flowbite-svelte/commit/019278438c84d594c8b7d352a340a38bb49f4934))
- add button role to multiselect svg ([13cf560](https://github.com/themesberg/flowbite-svelte/commit/13cf560cf49f138b4e375563fd6522cacba23899))
- add buttonClass to AccordionItem ([8387244](https://github.com/themesberg/flowbite-svelte/commit/83872440ebb872843a0f016f7fb576d156295b96))
- add carbon ([#602](https://github.com/themesberg/flowbite-svelte/issues/602)) ([0ed5ebc](https://github.com/themesberg/flowbite-svelte/commit/0ed5ebc1b3bf94749f833ee5a3aa14e0802b89bd))
- add childClass and ulClass to SidebarDropdown ([8754489](https://github.com/themesberg/flowbite-svelte/commit/875448911cbf0e427f51a08b51d5f160974b159b))
- add classes to card components ([183889d](https://github.com/themesberg/flowbite-svelte/commit/183889d22706de29ba0bd373f5a9a9563b260587))
- add classOptions type to classes object ([2d7131b](https://github.com/themesberg/flowbite-svelte/commit/2d7131b25a5f6766c2cadc2b2034cc3cf68b9528))
- add cli to sidebar menu ([9259073](https://github.com/themesberg/flowbite-svelte/commit/9259073f61349bfe53f407be5824262500164696))
- add CloseButton to index and change import from $lib ([cc8fe25](https://github.com/themesberg/flowbite-svelte/commit/cc8fe2504474f6a0fbefb5474ef5cf798f6a28a8))
- add createprops, scripts gen:props and package ([0fa07af](https://github.com/themesberg/flowbite-svelte/commit/0fa07af6a55819cf1d72d2f14ded5c400d7386db))
- add custom to Footer ([22f8f43](https://github.com/themesberg/flowbite-svelte/commit/22f8f430ae9a21acbbd95300b8633531d9a6dc5f))
- add default as to dropdown and modal Stores ([4fc6ee0](https://github.com/themesberg/flowbite-svelte/commit/4fc6ee0f754f5db15c6345c61b016aff4bc92ac7))
- add default empty string to helper ([b1c2467](https://github.com/themesberg/flowbite-svelte/commit/b1c24675f1106be3c5252e033a1bfe4b000ff3f8))
- add default style to TabHeadItem and TabHead and removed {tabStyle} from default example in tab page ([a9025c4](https://github.com/themesberg/flowbite-svelte/commit/a9025c432d57fe6896ab20249d711ff7739c9f1c))
- add default value to opacity and space of paragraph element ([16f0729](https://github.com/themesberg/flowbite-svelte/commit/16f07295a2d23a3860ace75fab345c0d3452181b))
- add device-mockups svg images ([#779](https://github.com/themesberg/flowbite-svelte/issues/779)) ([5ce3506](https://github.com/themesberg/flowbite-svelte/commit/5ce3506374e2cf1b19cf2d13faf28c742355fcb3))
- add divClass to Card components and set empty string to string type ([a2cd8c4](https://github.com/themesberg/flowbite-svelte/commit/a2cd8c417837fdb57613243da1355fb8ca0237df))
- add docLayout ([e86309b](https://github.com/themesberg/flowbite-svelte/commit/e86309b7de16a24eed8b4c0dd244637bda402fa8))
- add engines node version >=16.0.0 to package.json ([5f859be](https://github.com/themesberg/flowbite-svelte/commit/5f859be127ee5d541a9a49535f71eedbc5ea5137))
- add esbuild@0.16.8 and update other dependencies ([f32d1be](https://github.com/themesberg/flowbite-svelte/commit/f32d1beea8b402652242fdeaf1007885e74c12cd))
- add event forwarding to Frame component in Card component. ([6ce4b6b](https://github.com/themesberg/flowbite-svelte/commit/6ce4b6b12f099a0a9600b9be34ed02ac6557ebf2))
- add eventhandler to label (mouse, drag, etc.) ([#433](https://github.com/themesberg/flowbite-svelte/issues/433)) ([6e4d9d1](https://github.com/themesberg/flowbite-svelte/commit/6e4d9d158c27ebb13f9a964d4bbfea17bba068cc))
- add events to IconInput and on:input to Input components ([6668918](https://github.com/themesberg/flowbite-svelte/commit/66689185cd6cdf94ab66e1ff05ba33fbcaf6be0f))
- add export to modal closeModal function ([d69ec07](https://github.com/themesberg/flowbite-svelte/commit/d69ec07fd8276322aa9feb3e234e6b93f89bc842))
- add footer/footerLayout.svelte ([954f434](https://github.com/themesberg/flowbite-svelte/commit/954f43447f5ff0acd59b27cb6902ae642f313535))
- add GetStarted ([d1c0424](https://github.com/themesberg/flowbite-svelte/commit/d1c042470ff943884c77ccd4917eac399f9ba072))
- add handleAlert to Alert component ([bd82de3](https://github.com/themesberg/flowbite-svelte/commit/bd82de36be389de61d4c11348d081e9637dd51b1))
- add headerClass to Card components ([7bc41be](https://github.com/themesberg/flowbite-svelte/commit/7bc41be268c8fd5c8d7d2cbe04b65bcafac408d1))
- add height to Input-field dropdown demo ([b43f8fc](https://github.com/themesberg/flowbite-svelte/commit/b43f8fcaa1142035c92251d845590d0f682db59b))
- add how to change dark mode color ([20e2fdc](https://github.com/themesberg/flowbite-svelte/commit/20e2fdc00d5301fd9051c89f9e6f2f89a63a5dcd))
- add href prop to jjagielka avatars and fix doc ([ea97577](https://github.com/themesberg/flowbite-svelte/commit/ea975779365d8a9d8b6fd2fe22e36d94636957f2))
- add html block to text page ([37e910a](https://github.com/themesberg/flowbite-svelte/commit/37e910ae269099865865580d419b8dd05dccb7a8))
- add icon page ([0f5c966](https://github.com/themesberg/flowbite-svelte/commit/0f5c96626954d4174d10b99f2934365628f2ec08))
- add id for anchor to small modal page ([5a6d1e1](https://github.com/themesberg/flowbite-svelte/commit/5a6d1e1ac65c6d9f97e8841ac0aaa5e5112d6f9b))
- add ignore to modal ([cedf9f1](https://github.com/themesberg/flowbite-svelte/commit/cedf9f18c60dc0f8db03b56e6c456a0121367f41))
- add indcator to index ([#535](https://github.com/themesberg/flowbite-svelte/issues/535)) ([f6fcef6](https://github.com/themesberg/flowbite-svelte/commit/f6fcef63638a5edcf4c3f8d2b965789d5ad85be1))
- add Input to form index ([00ec469](https://github.com/themesberg/flowbite-svelte/commit/00ec46911c2748fb9224cf91ae68b3dca1c02dd7))
- add justify-center ([f16e410](https://github.com/themesberg/flowbite-svelte/commit/f16e41001aee98e510a5cc88956fe40c11b83fe8))
- add layout to all modules ([81bb8f3](https://github.com/themesberg/flowbite-svelte/commit/81bb8f3363b618f467421197a60df57ff003dcdb))
- add listbox role to multiselect ([66ed95e](https://github.com/themesberg/flowbite-svelte/commit/66ed95e96bb5526b7b0a6840fa92ed9b51de1850))
- add main: index.js to package.json ([ce82350](https://github.com/themesberg/flowbite-svelte/commit/ce823503b9ef21abf5d751ae7f3606e26db3d2c7))
- add modalId prop for Modal ([b2f8187](https://github.com/themesberg/flowbite-svelte/commit/b2f81872f7b5d5fdf1cc6d33be06b66b197027c3))
- add modals/modalLayout.svelte ([3cd9321](https://github.com/themesberg/flowbite-svelte/commit/3cd93216e968d46c9b7dddce3a02d6cb5739ef84))
- add npm and node to packages.josn engines for vercel test ([52e61fa](https://github.com/themesberg/flowbite-svelte/commit/52e61faf5152817af07adbf7a4947b90f61ef7fb))
- add on:change to Input component requested by https://github.com/themesberg/flowbite-svelte/pull/127 ([af5e64d](https://github.com/themesberg/flowbite-svelte/commit/af5e64d84b45f424b6166ff4fa1b5634a6f387d0))
- add on:change to Radio ([074bd16](https://github.com/themesberg/flowbite-svelte/commit/074bd1677ced075971173c8abf1cf15387026efd))
- add option role with aria-selected ([d4d5561](https://github.com/themesberg/flowbite-svelte/commit/d4d556192d7c9baada02fb42fb2734afd1eed7f7))
- add other dir ([dc5e73f](https://github.com/themesberg/flowbite-svelte/commit/dc5e73feaa44c3fc7f020967f2e342b08bafccdf))
- add padding to w-full ([e1008c9](https://github.com/themesberg/flowbite-svelte/commit/e1008c9620f18b42664059595ae3fe1e421e097b))
- add pagination link and img ([eedf394](https://github.com/themesberg/flowbite-svelte/commit/eedf394e7eeccf15880722c59863f826c30ed018))
- add primary to button and starUpClass and starDownClass to rating ([#745](https://github.com/themesberg/flowbite-svelte/issues/745)) ([da09182](https://github.com/themesberg/flowbite-svelte/commit/da091824d218f04bf4127f43c51a056abf0855fc))
- add props to accordions/icon-accordion ([ad8b3d4](https://github.com/themesberg/flowbite-svelte/commit/ad8b3d42d620d73324f12bc0aca18d8cb9befce9))
- add props to Darkmode page ([be1081b](https://github.com/themesberg/flowbite-svelte/commit/be1081b46a200ec5b175c0abbb393f08bf66d8e9))
- add props to Darkmode page ([6038868](https://github.com/themesberg/flowbite-svelte/commit/6038868d9ca380433083e879a82ddca84252ea58))
- add props using script ([64a303b](https://github.com/themesberg/flowbite-svelte/commit/64a303b25bb90a315a4dd6eef80b100ad935a8a7))
- add props.class to Spinner ([3fe4f8b](https://github.com/themesberg/flowbite-svelte/commit/3fe4f8b20d7d89b2230b23904b0671cec900684d))
- add redirect to all other directories ([6ca9ce0](https://github.com/themesberg/flowbite-svelte/commit/6ca9ce0c38c2a417fc1bcd88520e609a0e1b2b0e))
- add References ([75fb9fc](https://github.com/themesberg/flowbite-svelte/commit/75fb9fca879212594e10a545b0b497e0932cf2ab))
- add rel external to sidebar menu datepicker ([d9693e8](https://github.com/themesberg/flowbite-svelte/commit/d9693e88528e27b408f4380f40e4a18c79aa169c))
- add rel=external and / to links to form page ([a237d18](https://github.com/themesberg/flowbite-svelte/commit/a237d1811eb1d6d6f3af545f109c71b8cadbd014))
- add relative class to Hr component ([d8c6fbf](https://github.com/themesberg/flowbite-svelte/commit/d8c6fbf367a43b7c13ea55a56ae9c9f0b94fa96e))
- add right round corner to FullWidthTabs ([adaf72f](https://github.com/themesberg/flowbite-svelte/commit/adaf72fd01499ec8e73cdac1cf1b50054a2d8ead))
- add role prop to frame ([53c816f](https://github.com/themesberg/flowbite-svelte/commit/53c816f4136a3efde1d5ea80f7908994a0e621c8))
- add role to drawer ([d40f812](https://github.com/themesberg/flowbite-svelte/commit/d40f8127265fc397bef0b8868c3771f4d47a2230))
- add role to sidebar menu svg ([1c3fd48](https://github.com/themesberg/flowbite-svelte/commit/1c3fd4843391581874a3852989cfe20219c8636f))
- add script to pull props ([c40cc64](https://github.com/themesberg/flowbite-svelte/commit/c40cc6413da61f2c101426bd23d896f6a311b59f))
- add shrink-0 to prevent toggle UI from shrinking on small screen sizes ([#885](https://github.com/themesberg/flowbite-svelte/issues/885)) ([81c65bd](https://github.com/themesberg/flowbite-svelte/commit/81c65bde22a3f12ad3980658a9e919c6fd92898d))
- add SidebarItem to Sidebar component ([a3a9654](https://github.com/themesberg/flowbite-svelte/commit/a3a965498817449cc90bdb20d9babe4f000e4466))
- add SimpleSearch to index.ts ([64a8f49](https://github.com/themesberg/flowbite-svelte/commit/64a8f496a22948874dac2695e96ba397e53026b5))
- add sitemap footer darkmode ([72fe322](https://github.com/themesberg/flowbite-svelte/commit/72fe3227e472187101c12ef89e10ada77624fc25))
- add slots.paragraph directive to Card component ([a839754](https://github.com/themesberg/flowbite-svelte/commit/a839754a0c08b8675fa7d5f349c7a150f19d3510))
- add svelte inspector and update dependencies ([aa530f4](https://github.com/themesberg/flowbite-svelte/commit/aa530f4f8c33493a949bf0c52c279c06042a1897))
- add svelte-ignore a11y-click-events ([b021c83](https://github.com/themesberg/flowbite-svelte/commit/b021c839282c9f1ab7f25418de1e1cedeb9ef433))
- add svelte-ignore a11y-click-events to Button compo ([1c960ee](https://github.com/themesberg/flowbite-svelte/commit/1c960ee7bbbdf4750bc784e5dd10117b85f54156))
- add Table color hover and example ([b49c139](https://github.com/themesberg/flowbite-svelte/commit/b49c139c6d09a4563d462b35a5c49da605006d79))
- add Tooltips and Forms to index ([1bdf941](https://github.com/themesberg/flowbite-svelte/commit/1bdf9411f8164e81fb24cd22e4fccb7b97d9c95c))
- add track to video component for A11y ([ef69a83](https://github.com/themesberg/flowbite-svelte/commit/ef69a83325ab11e4d3548e5e28033ae9e02bfe40))
- add two missing colors for <Table> ([#537](https://github.com/themesberg/flowbite-svelte/issues/537)) ([ac558fb](https://github.com/themesberg/flowbite-svelte/commit/ac558fb267d3aaa87773ca23b5104e4c231443ba))
- add types ./dist/index.d.ts to package.json ([7a88a7c](https://github.com/themesberg/flowbite-svelte/commit/7a88a7c052bf65c0944b4f16fb7e622f217711d5))
- add Typescript to List component ([208c539](https://github.com/themesberg/flowbite-svelte/commit/208c5392699e7a378ce3034f3c79f83bee001e8b))
- add ulClass and childClass in SidebarItem's SidebarDropdown ([2e0f46b](https://github.com/themesberg/flowbite-svelte/commit/2e0f46b6c65037e4a40bba688936af99839bd863))
- add user slot to navbar default and dropdown ([1c81c10](https://github.com/themesberg/flowbite-svelte/commit/1c81c108ada0b7240501087cf7a0a4c7a077b69d))
- Added events to BottomNavHeaderItem ([#941](https://github.com/themesberg/flowbite-svelte/issues/941)) ([b65f371](https://github.com/themesberg/flowbite-svelte/commit/b65f371702320d0388ac6a01e00fb13bac3ce246))
- Added events to BottomNavHeaderItem ([#941](https://github.com/themesberg/flowbite-svelte/issues/941)) ([ebdcbeb](https://github.com/themesberg/flowbite-svelte/commit/ebdcbebed7737b26ff0552e964149b8de05771d4))
- Added z-50 to dropdown container so it always stays on top ([#942](https://github.com/themesberg/flowbite-svelte/issues/942)) ([e3de343](https://github.com/themesberg/flowbite-svelte/commit/e3de343fae29257e8588c8515eaaa5e6521a2488))
- Alert component ([2d828a2](https://github.com/themesberg/flowbite-svelte/commit/2d828a23e39dbd87bc6e5d788aa4e516386d2bf5))
- alert more tweaks ([444b340](https://github.com/themesberg/flowbite-svelte/commit/444b340f3a211f02572675b94624da4ae5d90c63))
- alert props ([#760](https://github.com/themesberg/flowbite-svelte/issues/760)) ([90c3055](https://github.com/themesberg/flowbite-svelte/commit/90c305596f07c4c9da970dee3ec78a5fff3e83f8))
- alert tweaks ([0c93b3c](https://github.com/themesberg/flowbite-svelte/commit/0c93b3c27d8911cd4709f78c554f68e524cc06d4))
- Alert, GradientButton and Footer ([ccd2954](https://github.com/themesberg/flowbite-svelte/commit/ccd2954c444681e50a8b065ce25f2d3b484f7faa))
- alerts dismissable button color ([779e863](https://github.com/themesberg/flowbite-svelte/commit/779e863a6b321ea84ae65484b05ed6cd7d73ccd9))
- alerts with list color removal ([f940441](https://github.com/themesberg/flowbite-svelte/commit/f940441098e4f033b6dd405d0cb774e6d8b5030e))
- app.css restored ([e40bc80](https://github.com/themesberg/flowbite-svelte/commit/e40bc80cace759b434bc889c1d143533de032345))
- auth components ([3a846cd](https://github.com/themesberg/flowbite-svelte/commit/3a846cd5cc45cd415e2a4d30f2cea22c0b29ebf6))
- autoclose=false (default) ([#417](https://github.com/themesberg/flowbite-svelte/issues/417)) ([32c1782](https://github.com/themesberg/flowbite-svelte/commit/32c1782ee8c8aae7b2b9c4e1d7bafe3adf1e467a))
- avatar default href ([#462](https://github.com/themesberg/flowbite-svelte/issues/462)) ([1ad8999](https://github.com/themesberg/flowbite-svelte/commit/1ad899993ae3cf1f18e975766549718dc65ed50b))
- avatar dot alignment ([2273c0c](https://github.com/themesberg/flowbite-svelte/commit/2273c0ceb82cc634558e7e88aff295c722d73c9f))
- avatar placholder missing href ([#475](https://github.com/themesberg/flowbite-svelte/issues/475)) ([6ad52e6](https://github.com/themesberg/flowbite-svelte/commit/6ad52e6c121599758a5c6bf4079bdffcd3199421))
- Avatar tooltip example ([ff7c1af](https://github.com/themesberg/flowbite-svelte/commit/ff7c1af20306609f77831ff1d2632700a9f596da))
- background context added ([52c8dd5](https://github.com/themesberg/flowbite-svelte/commit/52c8dd5693f3d890e7b875ae1b0435c5a7313876))
- bind:files for fileinput ([#474](https://github.com/themesberg/flowbite-svelte/issues/474)) ([585ba09](https://github.com/themesberg/flowbite-svelte/commit/585ba09f210bcb6b11a43ef005b742e999890dbf))
- blockquote page formating ([1641d45](https://github.com/themesberg/flowbite-svelte/commit/1641d45bdc032c01cd201967bf362d9f8a19a422))
- border color on popup examples ([#969](https://github.com/themesberg/flowbite-svelte/issues/969)) ([049d1a3](https://github.com/themesberg/flowbite-svelte/commit/049d1a3604d1b9c44719f9b998c611b1ea633073))
- breadcrumb and add rel=external to pages in the forms dir. ([509d72a](https://github.com/themesberg/flowbite-svelte/commit/509d72ae703a0d844653da87aea9119a90cc1018))
- BREAKING CHANGE for timeline components ([8b30105](https://github.com/themesberg/flowbite-svelte/commit/8b30105060d150d632ea6fbfac8e1f5639f82546))
- button size ([#623](https://github.com/themesberg/flowbite-svelte/issues/623)) ([f845373](https://github.com/themesberg/flowbite-svelte/commit/f845373bb75d4a908386753049174b526cebf5dd))
- buttongroup divider ([f5bedaf](https://github.com/themesberg/flowbite-svelte/commit/f5bedafa9a0b36f4a42a54e8c37593d7ee9d8916))
- buttongroup, ctacard types update. ([4a2d3aa](https://github.com/themesberg/flowbite-svelte/commit/4a2d3aa9a8269b198faf996132d96437e39bff17))
- buttons - transparency for outline ([6ae3d0f](https://github.com/themesberg/flowbite-svelte/commit/6ae3d0ff767e307ae5a4968f7b3c9a52dbb324f4))
- buttons - update sizes and force round ([22284ad](https://github.com/themesberg/flowbite-svelte/commit/22284ada79396136f8dce288de87112e74e6f82a))
- buttons fine tuning ([353f631](https://github.com/themesberg/flowbite-svelte/commit/353f6312557fbef802e4e0b61d3638ab4190d2e3))
- buttons fine tuning ([9f4c927](https://github.com/themesberg/flowbite-svelte/commit/9f4c927fb8303e7e65163ecd6413cdb834d1a4f3))
- buttons redesign ([c0316ff](https://github.com/themesberg/flowbite-svelte/commit/c0316ff61fde6bf52166e3f0c0b30dacad4941c0))
- call updatePosition and floatingMiddleware functions in onMount ([b905101](https://github.com/themesberg/flowbite-svelte/commit/b905101f9cdfc9573e455200a2e28ad5766705e1))
- card - restProps ([#373](https://github.com/themesberg/flowbite-svelte/issues/373)) ([a7331fc](https://github.com/themesberg/flowbite-svelte/commit/a7331fcd5915e6142a99859113776ce74a72529a))
- card breadcrumb_title ([1ac4820](https://github.com/themesberg/flowbite-svelte/commit/1ac4820ac2553a3c812fced3b9d627e56a9d5ec2))
- card padding-x in mobile view ([#358](https://github.com/themesberg/flowbite-svelte/issues/358)) ([639457f](https://github.com/themesberg/flowbite-svelte/commit/639457f5efc54f38fda9288aa9cf017c2d0f883d))
- cards layout on index.md pages ([2080f8e](https://github.com/themesberg/flowbite-svelte/commit/2080f8ee29163a8ad5208f37c95ebf498be92c39))
- cards/index.md, buttons ([9b2ca39](https://github.com/themesberg/flowbite-svelte/commit/9b2ca3914681439e667b5b6026f6c6e22b56b6fd))
- change a to A component ([dc92c3f](https://github.com/themesberg/flowbite-svelte/commit/dc92c3f699986f6679805350f3a88effc0e2a0c8))
- change a to A component ([33a8015](https://github.com/themesberg/flowbite-svelte/commit/33a8015ae3e7b3969359bcd67ba47bb53c7f7dad))
- change BreadcrumbItem home for all pages ([f5f895f](https://github.com/themesberg/flowbite-svelte/commit/f5f895f6157b03e435975c5735329f8dfc984485))
- change btnType to type in Button components ([310d2d8](https://github.com/themesberg/flowbite-svelte/commit/310d2d8f5bd00f3339b59749e79c67d39717f652))
- change from ./package/index.js to index.js for main in package.json ([785fe2c](https://github.com/themesberg/flowbite-svelte/commit/785fe2cd88feded7a2872e85248c84b001c1e3b4))
- change from # to / for href ([b79fd81](https://github.com/themesberg/flowbite-svelte/commit/b79fd8112d2fb15657058dd0184b113228d8a6aa))
- change from const to let navDivClass ([ffdcd9f](https://github.com/themesberg/flowbite-svelte/commit/ffdcd9fa2cde37a13103e493905d6076f61e5df6))
- change from fly to fade and a longer duration for Accordion custom transitions ([3d105f4](https://github.com/themesberg/flowbite-svelte/commit/3d105f4783dec6f3c42677a6aa151aac4e334f72))
- change from import { CloseButton } from $lib to import CloseButton from "../utils/CloseButton.svelte" in lib dir ([4eb4346](https://github.com/themesberg/flowbite-svelte/commit/4eb4346a2c4679d58c00309e0cb1a28304888a72))
- change from link to href in ButtonGroup components. ([b84e765](https://github.com/themesberg/flowbite-svelte/commit/b84e765d3a216c69a84589ec5da47b5521932b89))
- change from sitename to name in Navbar ([bee6d24](https://github.com/themesberg/flowbite-svelte/commit/bee6d24b79cd607c3a621f3651a285339ff326d9))
- change function clickOutside to arrow function ([71e71e0](https://github.com/themesberg/flowbite-svelte/commit/71e71e0e482ad9939f9d135b1608b5cc8d31d899))
- change href=# to href=/ in popover page ([f885a92](https://github.com/themesberg/flowbite-svelte/commit/f885a924706e477349c975641fc6fba0b4df45e5))
- change js to ts and add ts in index.js ([7b3bb20](https://github.com/themesberg/flowbite-svelte/commit/7b3bb206f2db09efc3e6c4d3d85117a1d6946a4e))
- change ml-2 after get access to ml-1 ([b8ffc2c](https://github.com/themesberg/flowbite-svelte/commit/b8ffc2ca5016737da2d40ed5b83d4ef5fdc07e08))
- change mr-4 to mr-2 in SidebarDropdown component ([2961555](https://github.com/themesberg/flowbite-svelte/commit/296155587bf2fa35d081b5373ad941a804d4170a))
- change option role for multiselect ([601945f](https://github.com/themesberg/flowbite-svelte/commit/601945f3772e565eb0d099ac38495f6fb40d7afc))
- change p tag from text-base to text-lg ([2372629](https://github.com/themesberg/flowbite-svelte/commit/237262993ae65f79088d8442bd09db998145a132))
- change p tag with text-lg. remove my-4 from div tag ([3c26640](https://github.com/themesberg/flowbite-svelte/commit/3c2664005c4f2a4bc6e3308a3d54b4a5fc2de79a))
- change package.json>engines>node to 16.0.0 since Verce does not accept. But use local node v16.16.0 for playwright test ([08130e9](https://github.com/themesberg/flowbite-svelte/commit/08130e988c1243b6a248737ed604223c694d5981))
- change prop btnType and btnColor ([2580c50](https://github.com/themesberg/flowbite-svelte/commit/2580c50584e1193dd901c5614fa60f780271dc37))
- change prop type to btnType in all button components ([c86c097](https://github.com/themesberg/flowbite-svelte/commit/c86c097882ab8d0a2d656f3f5376c6c2ffeb7a7b))
- change svelte to html in md file ([97adbbf](https://github.com/themesberg/flowbite-svelte/commit/97adbbf9a0070b5d8d3ee0604222e70d3d14df67))
- change svelte-kit sync && svelte-package to vite build ([cd7cd5e](https://github.com/themesberg/flowbite-svelte/commit/cd7cd5e971ba4f6c547984daf3a5f37656343b28))
- change ts to js ([8e284dc](https://github.com/themesberg/flowbite-svelte/commit/8e284dc2b3d81b674e95fdbe14aafbb04f21df11))
- change ts to js and removed types from modalStores and dropdownStores ([89e88e2](https://github.com/themesberg/flowbite-svelte/commit/89e88e2a53b4a791b608459dd05bafff6f81f2ae))
- change ts to js for svelte/store files ([625b285](https://github.com/themesberg/flowbite-svelte/commit/625b285c9ed4bc807774c20b9385fe8d8c59c6c5))
- change ts to js for tabStore and changed file name to tabStores ([f46efd4](https://github.com/themesberg/flowbite-svelte/commit/f46efd46b64126dcadc331bd57b881dc32a0c13c))
- change type string to typeof SvelteComponent ([277c3e2](https://github.com/themesberg/flowbite-svelte/commit/277c3e24201088aa051726ae16f2e12f66a8a69e))
- change type to buttonType in button components. Added auth components. ([1078e44](https://github.com/themesberg/flowbite-svelte/commit/1078e44cc21703fd8d150401e40f551ce21cf4f1))
- change width limit to >=1024 in Responsive component ([e95c10f](https://github.com/themesberg/flowbite-svelte/commit/e95c10f59422b18408a73c7780767371420cb80e))
- change z-50 to z-10 for DropdownDefault ([71d4640](https://github.com/themesberg/flowbite-svelte/commit/71d4640e613c671e11c972d8ceee3721b6c568cc))
- checkbox group ([#427](https://github.com/themesberg/flowbite-svelte/issues/427)) ([58c6660](https://github.com/themesberg/flowbite-svelte/commit/58c66600abcb943c730dbd64e6e4ca920bc06f8e))
- checkbox initial checked ([#434](https://github.com/themesberg/flowbite-svelte/issues/434)) ([43663cf](https://github.com/themesberg/flowbite-svelte/commit/43663cf165f249c7e3fa7e7dc8ccfaccc7e467a6))
- Checkbox on:click position ([cfb1c65](https://github.com/themesberg/flowbite-svelte/commit/cfb1c658ae971bb689cd4e01f797ccc5c11db991))
- Checkbox spacing ([9f989d7](https://github.com/themesberg/flowbite-svelte/commit/9f989d7c0f59cacab8673d05e0abe27cc5906d42))
- chevronup thickness ([dc9016b](https://github.com/themesberg/flowbite-svelte/commit/dc9016bfce4a9e664a1bf6fa79a747764b35f911))
- chnage footer pages from link to href ([6762872](https://github.com/themesberg/flowbite-svelte/commit/67628722c684000248ad02fc778b14eb9dc66f0f))
- clean up & remove ExampleDiv, GitHubSource, and CompoDescription ([#639](https://github.com/themesberg/flowbite-svelte/issues/639)) ([113df27](https://github.com/themesberg/flowbite-svelte/commit/113df2716cde7f0c3e0c7aa904bafdc3ece15cd1))
- clean up import from utils for docs ([b50126d](https://github.com/themesberg/flowbite-svelte/commit/b50126d2f78e7613e48008b46c0bd77cdc7471fa))
- clean up ref ([9e8427b](https://github.com/themesberg/flowbite-svelte/commit/9e8427bdbe7ee397a8c5c123a75e48abca298781))
- color flicker when changing theme using DarkMode ([#353](https://github.com/themesberg/flowbite-svelte/issues/353)) ([7e1daf1](https://github.com/themesberg/flowbite-svelte/commit/7e1daf14b1b91b0f3c0dac55c38e28fee42c4878))
- commit after reset ([c3ee849](https://github.com/themesberg/flowbite-svelte/commit/c3ee8494fffac749a1e32cbeba1cf722ba6cb578))
- copy from flowbite-svelte-new ([5a400fc](https://github.com/themesberg/flowbite-svelte/commit/5a400fce508c53e57eec6f5e40ba5c468ef79481))
- correction in using style and color ([7ebbc5f](https://github.com/themesberg/flowbite-svelte/commit/7ebbc5fcac75fea0f9c19c51b6ea5dc8dfb241c8))
- create Coinbase, Fortmatic, Metamask, OperaWallet, and WalletConnect component ([f8eabc5](https://github.com/themesberg/flowbite-svelte/commit/f8eabc5b23b8c0d9fab75deca393858952406660))
- create icon slot for Alert so that users can add svg or svelte component ([45244ec](https://github.com/themesberg/flowbite-svelte/commit/45244ec05f99298d150751209980dce519873163))
- create MetaTag component ([#406](https://github.com/themesberg/flowbite-svelte/issues/406)) ([4d09e4a](https://github.com/themesberg/flowbite-svelte/commit/4d09e4acd14e04a07b3c01408de1be718b4eef1e))
- create new props files ([0a6fd33](https://github.com/themesberg/flowbite-svelte/commit/0a6fd334321bbedd2eecebb5e4f2456ddb19fd3b))
- CTA should have tinted background ([#708](https://github.com/themesberg/flowbite-svelte/issues/708)) ([ecb5c4c](https://github.com/themesberg/flowbite-svelte/commit/ecb5c4c12db278fccb8c02b84298ba2ef90b18df))
- dark text color for input validation ([#513](https://github.com/themesberg/flowbite-svelte/issues/513)) ([7b145d6](https://github.com/themesberg/flowbite-svelte/commit/7b145d68f224151fa45c2b651a2b49351e13cf67))
- dark-mode in examples ([#683](https://github.com/themesberg/flowbite-svelte/issues/683)) ([cde56c4](https://github.com/themesberg/flowbite-svelte/commit/cde56c44a9b20e806655f427fff32990db03f0f3))
- darkmode flicker ([#811](https://github.com/themesberg/flowbite-svelte/issues/811)) ([94b1f6b](https://github.com/themesberg/flowbite-svelte/commit/94b1f6bd9fb7341a9b3791633daf2217e2c3017d))
- darkmode page typo ([367311d](https://github.com/themesberg/flowbite-svelte/commit/367311d0adf9b6011d5510728a17aa58625afdb0))
- demo page bugs ([542b88a](https://github.com/themesberg/flowbite-svelte/commit/542b88a386fdc34acf904b589215441e65b8fb69))
- demo page issues ([268db3c](https://github.com/themesberg/flowbite-svelte/commit/268db3ca3db363ee8bbd6eec69d9f622350050ee))
- demo page text dark mode, dropdown error ([fa46244](https://github.com/themesberg/flowbite-svelte/commit/fa46244d3871bdc5a9cd5bed0f4a3e8b0fc6d3fd))
- dependencies update ([#685](https://github.com/themesberg/flowbite-svelte/issues/685)) ([f017a73](https://github.com/themesberg/flowbite-svelte/commit/f017a738fc38633e8b95ea135b8438b7f67f8554))
- DeviceMockup class ([94064d0](https://github.com/themesberg/flowbite-svelte/commit/94064d0c28766118db639e5d61181dff58e6756d))
- doc footer update ([4507cb6](https://github.com/themesberg/flowbite-svelte/commit/4507cb6cc8a4f2c2d50c455b81314fe9eb50e61a))
- docs corrections ([f208323](https://github.com/themesberg/flowbite-svelte/commit/f208323ac1457b88572aaae37531e6b3da1055de))
- docs corrections 2 ([5adb4d8](https://github.com/themesberg/flowbite-svelte/commit/5adb4d816591d7bc9aff2e549fc364c80e650b4b))
- docs fixes due to dropdown api change ([869f8d7](https://github.com/themesberg/flowbite-svelte/commit/869f8d7bdea3a7ba97702e31b52f0e33fce3c911))
- docs for radio ([add38b2](https://github.com/themesberg/flowbite-svelte/commit/add38b26fd4669a591916b7fa42e107868cc90a1))
- docs typo - tooltip type ([#956](https://github.com/themesberg/flowbite-svelte/issues/956)) ([cde7b8e](https://github.com/themesberg/flowbite-svelte/commit/cde7b8e9a5c8cbccfa6d4f6ed0c59e9aa8ea6f6f))
- documentation typos ([942c3b2](https://github.com/themesberg/flowbite-svelte/commit/942c3b2a2624aec3ba4d34cfab2c1098d41cd362))
- done type check for all pages ([d91b018](https://github.com/themesberg/flowbite-svelte/commit/d91b018c3a66a6ac4cef2317651e1821083ab033))
- double scrollbar in docs ([#447](https://github.com/themesberg/flowbite-svelte/issues/447)) ([75efab3](https://github.com/themesberg/flowbite-svelte/commit/75efab37b6057469a35ec592c659438c3cf8047c))
- Drawer placement right ([4fe9283](https://github.com/themesberg/flowbite-svelte/commit/4fe928380f4bb95c59e311e7ccc3a8ae49fda89d))
- Dropdown has a new structure ([2c5d7b0](https://github.com/themesberg/flowbite-svelte/commit/2c5d7b0a7ac6e93074d11c986835e1f24dd5e00e))
- dropdown open/close api ([d2aa6f7](https://github.com/themesberg/flowbite-svelte/commit/d2aa6f71e7e804d474eb46e58030097d9bd9962f))
- dropdown open/close api - docs ([f299c28](https://github.com/themesberg/flowbite-svelte/commit/f299c284a4ef3c9539e17677b815f60dd8d1e6f2))
- dropdown page ([d3d4827](https://github.com/themesberg/flowbite-svelte/commit/d3d48276e27cc18300de1b1cc2a26ce05de733d8))
- Dropdown page ([30bb2cf](https://github.com/themesberg/flowbite-svelte/commit/30bb2cf9cbbe2ec9514ce415c43b6555747b541d))
- dropdown page add dark:text-white to MenuButton and change to color:green for Avatar ([900feca](https://github.com/themesberg/flowbite-svelte/commit/900feca1d8f4e617821c6a4ccf3687839a302cf0))
- dropdown search ([4416a31](https://github.com/themesberg/flowbite-svelte/commit/4416a312756331f6dd04b1d5fe5dd61b764fd38d))
- DropdownItem as li only when childe of ul ([add2f16](https://github.com/themesberg/flowbite-svelte/commit/add2f166883df2c237197f3327ad331dd0a1617d))
- **DropdownItem:** remove redundant part after else ([4182d5c](https://github.com/themesberg/flowbite-svelte/commit/4182d5c970b3a683b47e228f4881585f4ca77d3b))
- dropdowns events docs ([a6d86b6](https://github.com/themesberg/flowbite-svelte/commit/a6d86b671a5c481288a20c1fe68cfcfe0faea880))
- dropdowns tweaks ([ad797ca](https://github.com/themesberg/flowbite-svelte/commit/ad797ca4a4a60abd7723b3b1415e70fb6e1328a6))
- **dropzone:** fixes dragging file over the input ([#919](https://github.com/themesberg/flowbite-svelte/issues/919)) ([5f02261](https://github.com/themesberg/flowbite-svelte/commit/5f02261a36a22e48e4f0fa3c5a0fe47f65eb2ccc))
- duplicated lines in app.postcss ([1eb255a](https://github.com/themesberg/flowbite-svelte/commit/1eb255a30f57213eaa7c8d3e14cb7ac704c25f82))
- enable scrolling in modals (fixes [#23](https://github.com/themesberg/flowbite-svelte/issues/23)) ([8e60319](https://github.com/themesberg/flowbite-svelte/commit/8e603198988a3a03a56414f4e26143bb54ff0c92))
- error fix for deployment ([be684a8](https://github.com/themesberg/flowbite-svelte/commit/be684a8057c08a7c07f3f6c370114d008dc2182e))
- event forwarding for numberinput ([#596](https://github.com/themesberg/flowbite-svelte/issues/596)) ([5d67a83](https://github.com/themesberg/flowbite-svelte/commit/5d67a833aa6ff769b85ca79c52b29de56690a2aa))
- events for gradient button ([#967](https://github.com/themesberg/flowbite-svelte/issues/967)) ([fda337b](https://github.com/themesberg/flowbite-svelte/commit/fda337ba28ad6081bb15ab93108b699d8ab001c0))
- export dropdownIdStore in index.js ([4c897d9](https://github.com/themesberg/flowbite-svelte/commit/4c897d973a88e7d1863e28c49a1675110649252f))
- export dropdownStores in index.js ([f4b7f6c](https://github.com/themesberg/flowbite-svelte/commit/f4b7f6c6e5fcc118e5279ed61e017477c657fa0b))
- export slide params ([#516](https://github.com/themesberg/flowbite-svelte/issues/516)) ([c8dd81d](https://github.com/themesberg/flowbite-svelte/commit/c8dd81d5493b908a903648104f0371ac143c1167))
- few minor tweaks ([#541](https://github.com/themesberg/flowbite-svelte/issues/541)) ([2289e4d](https://github.com/themesberg/flowbite-svelte/commit/2289e4d1f83f272db5c092cd09469147a4878ff8))
- few more to 'npm run check' ([#738](https://github.com/themesberg/flowbite-svelte/issues/738)) ([ae33d4a](https://github.com/themesberg/flowbite-svelte/commit/ae33d4ab5d0cdc6649295e3f3fe1ae0063fe86d3))
- field name change for ListGroupItemType ([da93d46](https://github.com/themesberg/flowbite-svelte/commit/da93d460c864e0a94f803420f73dbf976e185fee))
- fix template literal in DropdownNavbar component ([f4946df](https://github.com/themesberg/flowbite-svelte/commit/f4946df68292481359521ac090bf33e7c0808ba4))
- fixing the tab page layout problem ([bc3b7bf](https://github.com/themesberg/flowbite-svelte/commit/bc3b7bf32100abbbab3fede7fa6a912ff81d00f6))
- flitering ([#370](https://github.com/themesberg/flowbite-svelte/issues/370)) ([e8ac071](https://github.com/themesberg/flowbite-svelte/commit/e8ac07134518a373949da3fadc4f63c656fe2d59))
- floatinginput type changes ([#436](https://github.com/themesberg/flowbite-svelte/issues/436)) ([5af9ecf](https://github.com/themesberg/flowbite-svelte/commit/5af9ecf598800e4cbcf27e413ba0b63d82926219))
- fluid setting for Navbar ([#563](https://github.com/themesberg/flowbite-svelte/issues/563)) ([4311bbb](https://github.com/themesberg/flowbite-svelte/commit/4311bbba0bd590d66b388f6c0f8e688b1bd85a1c))
- folder names without s and update tests ([4e9c9ce](https://github.com/themesberg/flowbite-svelte/commit/4e9c9ce69e06b1a8e4394c3920c75606894c06d3))
- Footer components update. ([6434844](https://github.com/themesberg/flowbite-svelte/commit/64348445b08aebdf2bd992deb801845b538a62e1))
- FooterCopyright remove space after {by} ([#578](https://github.com/themesberg/flowbite-svelte/issues/578)) ([da7a681](https://github.com/themesberg/flowbite-svelte/commit/da7a681a828b1eeab9bebedcf60ad24d55a5e7f6))
- for [#165](https://github.com/themesberg/flowbite-svelte/issues/165) and [#170](https://github.com/themesberg/flowbite-svelte/issues/170) and changed $$restProps.class to $$props.class ([99399b8](https://github.com/themesberg/flowbite-svelte/commit/99399b8aebdec68bc5c52641ed768dc601fe36a2))
- forms components moved all export variables before function ([13d518b](https://github.com/themesberg/flowbite-svelte/commit/13d518b58f5aa09a0dcb4de439860afb1d84e3d0))
- forward input event ([#627](https://github.com/themesberg/flowbite-svelte/issues/627)) ([22d20db](https://github.com/themesberg/flowbite-svelte/commit/22d20dbb6845e5ed0d7188e304c406a5c8cb8758))
- generate a unique id for each star so fill can be different ([#793](https://github.com/themesberg/flowbite-svelte/issues/793)) ([cf59ed2](https://github.com/themesberg/flowbite-svelte/commit/cf59ed251bbbf17b3172decd5b74535499cef452))
- getting started page update ([fe95d00](https://github.com/themesberg/flowbite-svelte/commit/fe95d00d767b742d8307b17fdfb57e994bdd2300))
- git reset --hard 344845b4 and update getting-started ([a941ed8](https://github.com/themesberg/flowbite-svelte/commit/a941ed8169872a39bd37e809db718f09156fbbc2))
- github issue template ([b6b8fd4](https://github.com/themesberg/flowbite-svelte/commit/b6b8fd46aa7491e29935fe62ca5dc617513ee5ee))
- github issue template 2 ([343c102](https://github.com/themesberg/flowbite-svelte/commit/343c102ee1901c8d14fc75ab06a0fe28ac594a98))
- github issue template 3 ([e8c6a1b](https://github.com/themesberg/flowbite-svelte/commit/e8c6a1b7d148d0137ca0e395bf5904e3a2ed408c))
- github issue template 4 ([5565625](https://github.com/themesberg/flowbite-svelte/commit/5565625e343c197bd4d903878a2955eaae08b788))
- github workflow comment out pnpm cache ([5284b8c](https://github.com/themesberg/flowbite-svelte/commit/5284b8c3c1b43b7f7d28f0800dc2cddcc0ff9d9c))
- GitHubSource change tree to blob ([69f0e15](https://github.com/themesberg/flowbite-svelte/commit/69f0e15b7dcafa8018e23ee33c8c7e2bb2e8ebd6))
- GitHubSource links ([8d4e976](https://github.com/themesberg/flowbite-svelte/commit/8d4e9760255daf81546dca91d0abb0843a1a2a5c))
- h-10 w-10 to h-8 w-8. ([071e018](https://github.com/themesberg/flowbite-svelte/commit/071e018be6cb508521b536f9303e5c6c889f112e))
- h1 and h2 ([2c5be7c](https://github.com/themesberg/flowbite-svelte/commit/2c5be7cf97d9f330773b90123f878a1349e7cdf8))
- h3 change, modal page update ([945762f](https://github.com/themesberg/flowbite-svelte/commit/945762f325736ac316a7d1cb68d546f0c8acd982))
- header blocking anchor links ([af6d2d6](https://github.com/themesberg/flowbite-svelte/commit/af6d2d6eb9bb630e58e76fd214f8a14f0435dc2f))
- Heading and P update ([2313e3e](https://github.com/themesberg/flowbite-svelte/commit/2313e3e5ecb38ee69839a26b12b7c41cc099f75e))
- Heading to the original code ([5604da5](https://github.com/themesberg/flowbite-svelte/commit/5604da5f348420f8878e44d591e9a8704b23e4a0))
- heros update ([89b8755](https://github.com/themesberg/flowbite-svelte/commit/89b87555fee018361058d888916b8e1cb774c145))
- homepage ([dedf355](https://github.com/themesberg/flowbite-svelte/commit/dedf355835cf8b60aeb68a94b0e47a2034bea358))
- hover on gradient outline button ([#742](https://github.com/themesberg/flowbite-svelte/issues/742)) ([6d7da15](https://github.com/themesberg/flowbite-svelte/commit/6d7da15de9d5a3f9e2b85a05944d148967019bcf))
- Htwo for typography pages ([0921539](https://github.com/themesberg/flowbite-svelte/commit/0921539d06e54f89d9e9dd52c70cdbc81b62dd3e))
- Iconinput click handler example ([2f5afc7](https://github.com/themesberg/flowbite-svelte/commit/2f5afc7554a7bb43d231cc39001ea31b9deafd1c))
- Iconinput has unused export property value when I install it ([b19afc9](https://github.com/themesberg/flowbite-svelte/commit/b19afc9284aa2c92c5a15b89de9dc9111652f0f7))
- image path. ([003e80f](https://github.com/themesberg/flowbite-svelte/commit/003e80f6215bc1a1b7766574983b5314e885ef3e))
- improved focustrap ([#354](https://github.com/themesberg/flowbite-svelte/issues/354)) ([fb17cd3](https://github.com/themesberg/flowbite-svelte/commit/fb17cd357e748df4b1d95060bcbecf7b406d3f03))
- incorrect aria-expanded in <h2> ([#604](https://github.com/themesberg/flowbite-svelte/issues/604)) ([f562e91](https://github.com/themesberg/flowbite-svelte/commit/f562e91e42fae6e76c5d042e6b19b34f7c0d7692))
- index blocks names, e.g. Tooltips to Tooltip ([5f902b2](https://github.com/themesberg/flowbite-svelte/commit/5f902b22043838a3e3413679632c9516ea81b906))
- index button colors ([3a65ce3](https://github.com/themesberg/flowbite-svelte/commit/3a65ce318248fd2d81585119723dbdc8fec3ec0c))
- index page add padding px-8 ([01d29a1](https://github.com/themesberg/flowbite-svelte/commit/01d29a17883a8ba94fb4370aafb398a97b1adee3))
- index page space ([6ab9a19](https://github.com/themesberg/flowbite-svelte/commit/6ab9a19e004fc19ba3bd696acedbc5bbc0ced966))
- index page. ([bb71658](https://github.com/themesberg/flowbite-svelte/commit/bb71658bc5852218ba563b66e0a18737314e3807))
- index page. ([54928dd](https://github.com/themesberg/flowbite-svelte/commit/54928dd868f0c3425f09e794fccf0238afa7347e))
- index page. ([0f0f2c3](https://github.com/themesberg/flowbite-svelte/commit/0f0f2c32468f5d7faa304409f30714b8a9c8c8bd))
- initial dark mode ([#924](https://github.com/themesberg/flowbite-svelte/issues/924)) ([103bf6a](https://github.com/themesberg/flowbite-svelte/commit/103bf6a7ab1eb24003c09ac93fff574d4ae170ad))
- initial refresh fix ([#693](https://github.com/themesberg/flowbite-svelte/issues/693)) ([7479934](https://github.com/themesberg/flowbite-svelte/commit/7479934dc83bdbe0197fac7c0dbe7d817bf1d6e5))
- inline script in <DarkMode> ([#610](https://github.com/themesberg/flowbite-svelte/issues/610)) ([7ac48ba](https://github.com/themesberg/flowbite-svelte/commit/7ac48ba643f87b92ad51a6b540b14741bc6fd229))
- Input and Radio components ([fd49114](https://github.com/themesberg/flowbite-svelte/commit/fd49114e343c3a66c7ef257ba41d5354b99707d1))
- Input component move let padding before using it ([4fac17c](https://github.com/themesberg/flowbite-svelte/commit/4fac17cab3ebf67eb2ed4502356bbd5b5eb9aea1))
- input component value type to any ([#730](https://github.com/themesberg/flowbite-svelte/issues/730)) ([048caa0](https://github.com/themesberg/flowbite-svelte/commit/048caa0ddd2418e3feff4963f0540b269eb7cb27))
- input icons ([#350](https://github.com/themesberg/flowbite-svelte/issues/350)) ([7b72712](https://github.com/themesberg/flowbite-svelte/commit/7b727121b3b730eb552200c1de36f3cdc45f7977))
- input label margin on empty labels ([e08bb0d](https://github.com/themesberg/flowbite-svelte/commit/e08bb0d5caaf10b2c14a852cc68047be7c9e6fdc))
- input number workaround ([#351](https://github.com/themesberg/flowbite-svelte/issues/351)) ([e4cb012](https://github.com/themesberg/flowbite-svelte/commit/e4cb01221c3b4334a2c860aa32ccee06df2fe41d))
- Input padding uses p-4, p-2.5 and p-2 depends on the size ([632bd5d](https://github.com/themesberg/flowbite-svelte/commit/632bd5d550b0268a93eec91598b35a854a45c081))
- input type ([7bcd4dd](https://github.com/themesberg/flowbite-svelte/commit/7bcd4dd3d59729cdbf768b13876baab9426fe9a0))
- **Input:** Use a reactive spread instead of custom action to set Input `type` attribute ([#921](https://github.com/themesberg/flowbite-svelte/issues/921)) ([165e273](https://github.com/themesberg/flowbite-svelte/commit/165e273357efa57d35e8f7a268ad5bc5e725d565))
- interactive card dropdown position ([33a2b7d](https://github.com/themesberg/flowbite-svelte/commit/33a2b7d995418974e6303f4cf74435052c510f5a))
- issue [#790](https://github.com/themesberg/flowbite-svelte/issues/790) ([#802](https://github.com/themesberg/flowbite-svelte/issues/802)) ([9c79555](https://github.com/themesberg/flowbite-svelte/commit/9c7955578463904c1e066d7f04cd676a1e856e01))
- issue 786 ([#803](https://github.com/themesberg/flowbite-svelte/issues/803)) ([3e348ba](https://github.com/themesberg/flowbite-svelte/commit/3e348badc30779c8da222c3ee361afe5b14d6e95))
- issue783 ([#809](https://github.com/themesberg/flowbite-svelte/issues/809)) ([112bd25](https://github.com/themesberg/flowbite-svelte/commit/112bd25f7903da72332159fdc5edf6aad1e7536d))
- issue812 ([#814](https://github.com/themesberg/flowbite-svelte/issues/814)) ([c74c026](https://github.com/themesberg/flowbite-svelte/commit/c74c026e7bfd8d3a6f5ed0fe39de2a42b0e6c9b2))
- layout and index page ([7db0e00](https://github.com/themesberg/flowbite-svelte/commit/7db0e00d1094d4d03a7386fd96c13c5b2ee09f6f))
- layout and Toc padding ([6a67345](https://github.com/themesberg/flowbite-svelte/commit/6a6734545429c7228a1bf3cbc58f7e4739dbfe65))
- layout logo ([1a78683](https://github.com/themesberg/flowbite-svelte/commit/1a78683e734bf0dae58fe704bd652fcef196dae9))
- layout width ([e17969e](https://github.com/themesberg/flowbite-svelte/commit/e17969ec2c6f2938ed1a7c7b8f083bd3da6801e8))
- li classes cascaded from ul ([#593](https://github.com/themesberg/flowbite-svelte/issues/593)) ([90a4c74](https://github.com/themesberg/flowbite-svelte/commit/90a4c74fa8e9a95b652f67525fbaee67f40d6f0b))
- link color ([6bca5d4](https://github.com/themesberg/flowbite-svelte/commit/6bca5d4fa366fca0adb4c3424edf1ada1f1e6d95))
- link removed from card img if there is no link ([f1d1c33](https://github.com/themesberg/flowbite-svelte/commit/f1d1c331467f21ae2bb7717edd44339357b5579f))
- links in DesignFigma ([22a40ea](https://github.com/themesberg/flowbite-svelte/commit/22a40ea13e202bb7a9b21ba2d94c53f2468649ba))
- links in form index ([1149aa2](https://github.com/themesberg/flowbite-svelte/commit/1149aa2f7411ceb9a3e29ce3c6c3d446634f09a9))
- list group item padding ([#469](https://github.com/themesberg/flowbite-svelte/issues/469)) ([d945978](https://github.com/themesberg/flowbite-svelte/commit/d945978f38e82953c1ddd703b2fd7c9086768ffa))
- List in cards page to Listgroup ([b8e05f4](https://github.com/themesberg/flowbite-svelte/commit/b8e05f4f97fbbb0236872b2b5f18f0928c34ad55))
- ListgroupItem button type ([#549](https://github.com/themesberg/flowbite-svelte/issues/549)) ([6b74d73](https://github.com/themesberg/flowbite-svelte/commit/6b74d738efc887b46fe0fc0eea473e617aa386ca))
- lock file ([b24ac8d](https://github.com/themesberg/flowbite-svelte/commit/b24ac8d52ab7a87c2d52a0e189988dc949f2f5d5))
- lock file ([6144fd3](https://github.com/themesberg/flowbite-svelte/commit/6144fd3da66eeec36ab663938cf59dce0b3a156d))
- logo ([c28e9f3](https://github.com/themesberg/flowbite-svelte/commit/c28e9f3683140e1bb12f4667e26e5d7805d4ddb9))
- make disabled button unclickable ([df1c66d](https://github.com/themesberg/flowbite-svelte/commit/df1c66d08e6090a66cff12d2d41f6b72a93324dc))
- markdown code block in all-modals ([dc35107](https://github.com/themesberg/flowbite-svelte/commit/dc35107dee67620e035ca5e07cd5e2ecf95fdd12))
- megamenu centered in small screen ([713aa9a](https://github.com/themesberg/flowbite-svelte/commit/713aa9ab5d1c390291bb61910f9eae4b68d5981e))
- megamenu fullscreen position ([eaf0729](https://github.com/themesberg/flowbite-svelte/commit/eaf07294a728b524f2873df26f8250d23682dd81))
- menu for small screen ([4fd100a](https://github.com/themesberg/flowbite-svelte/commit/4fd100a03c172b10a7dbe9ce92b5cbb8fcec8cbd))
- merge confilicts ([f25ffca](https://github.com/themesberg/flowbite-svelte/commit/f25ffcab80e46fd961226b9e54fdf59958b09a96))
- merge confilicts ([1ec380a](https://github.com/themesberg/flowbite-svelte/commit/1ec380ad36b17c55c31a65c1fd8d682eab969e70))
- merge confilicts ([c1890ca](https://github.com/themesberg/flowbite-svelte/commit/c1890caefd7ae588a5a732df378c1136d8e6647b))
- merge confilicts ([be6253e](https://github.com/themesberg/flowbite-svelte/commit/be6253e21cb28eda7f1d4ed9ef12bc03c5cab249))
- merge confilicts ([67d4a7c](https://github.com/themesberg/flowbite-svelte/commit/67d4a7c38ba442a4dd95feec3de67e203491f41e))
- merge confilicts ([a583351](https://github.com/themesberg/flowbite-svelte/commit/a58335145393a95b89975717f524611a9ff9acda))
- merge confilicts ([2e0fc09](https://github.com/themesberg/flowbite-svelte/commit/2e0fc09867d3c1b996b19cfec9a5f62ca479e45d))
- merge confilicts ([0cd644a](https://github.com/themesberg/flowbite-svelte/commit/0cd644a7589712032b2bfcb3ed17729fbe1e75cd))
- merge confilicts ([ad380a6](https://github.com/themesberg/flowbite-svelte/commit/ad380a618af8cbcc2edf8fe45273a0e22023a636))
- merge confilicts ([aa32cae](https://github.com/themesberg/flowbite-svelte/commit/aa32caec08bb84b17df59736d170e2fb328d6fe9))
- merge confilicts ([2365a23](https://github.com/themesberg/flowbite-svelte/commit/2365a2328d3d9be9341648a7e58f5b8fc7abe9ea))
- merge confilicts ([375294a](https://github.com/themesberg/flowbite-svelte/commit/375294a7ce5057a9478e0ef55f0331e3ac5fdb08))
- merge conflict ([fa3c5d8](https://github.com/themesberg/flowbite-svelte/commit/fa3c5d8d205bc7211334f19c0ec6ec7c57fdd754))
- merge conflict fix with Hetarth02-main ([914c1f9](https://github.com/themesberg/flowbite-svelte/commit/914c1f95f80dfbd73542d68d39622d79bed1ea04))
- merge conflicts ([0514548](https://github.com/themesberg/flowbite-svelte/commit/0514548ab7d7ca54337434114ac8f2b9239f5e5d))
- merging conflict update mega-menu, package.json, paragraph.md ([7de7bc0](https://github.com/themesberg/flowbite-svelte/commit/7de7bc00b78b1dee90aafba809ef235fd262017c))
- meta tag by adding type, url, and appId ([#399](https://github.com/themesberg/flowbite-svelte/issues/399)) ([6f9f423](https://github.com/themesberg/flowbite-svelte/commit/6f9f423b294bbc54bdae152f659e029e5e8a1f76))
- migrate to sveltekit 1.0.0 ([434ec99](https://github.com/themesberg/flowbite-svelte/commit/434ec998e1f96ab5e35eda6c6c78f6db2279aa4e))
- minor fixes / fine tuning ([57c1cf7](https://github.com/themesberg/flowbite-svelte/commit/57c1cf7f1bd461c417be1fd925766c045d72c015))
- missing 683restProps ([0d52fd1](https://github.com/themesberg/flowbite-svelte/commit/0d52fd1b4168c8cc707c174dc2c18f532cf2e93c))
- missing dropdown example ([#388](https://github.com/themesberg/flowbite-svelte/issues/388)) ([69ba822](https://github.com/themesberg/flowbite-svelte/commit/69ba822ef1f3710bdccbaf31006a94e1e3d19aae))
- missing Popper ([ff4b0e7](https://github.com/themesberg/flowbite-svelte/commit/ff4b0e772e228f03c1024e222fcc91e63adc23ba))
- Modal and Button compo ([5f3128a](https://github.com/themesberg/flowbite-svelte/commit/5f3128aaf26f7383ec32135411ea1607a566d114))
- modal arrow keys ([#369](https://github.com/themesberg/flowbite-svelte/issues/369)) ([2a8bc1c](https://github.com/themesberg/flowbite-svelte/commit/2a8bc1c156c66a3dc0569312343b6f6b65a051ea))
- modal layout ([#526](https://github.com/themesberg/flowbite-svelte/issues/526)) ([6b25019](https://github.com/themesberg/flowbite-svelte/commit/6b250190f25feefe21191b3d8cab709fe28c6908))
- modal update ([#791](https://github.com/themesberg/flowbite-svelte/issues/791)) ([2bd095f](https://github.com/themesberg/flowbite-svelte/commit/2bd095f1f197783f0c4161bda3c22ebd6008859a))
- more ts check corrections ([#740](https://github.com/themesberg/flowbite-svelte/issues/740)) ([f95f1d4](https://github.com/themesberg/flowbite-svelte/commit/f95f1d44da76fbaa9d49fec1a52c000e5509617c))
- mousenter ([c3ee1cc](https://github.com/themesberg/flowbite-svelte/commit/c3ee1cc24867be96860faa32e322b6fe7c41592a))
- move @docsearch/js to devDependencies ([168a79f](https://github.com/themesberg/flowbite-svelte/commit/168a79fce52050b437fbde32c95bf17329616b21))
- move @floating-ui/dom from dependencies to devDependencies ([6668ec8](https://github.com/themesberg/flowbite-svelte/commit/6668ec8ca1559366ad0cbc223c9c91e3337ceb22))
- move @floating-ui/dom, classnames, svelte-heros, @popperjs/core from devDpendencies to dependencies ([ee5d31a](https://github.com/themesberg/flowbite-svelte/commit/ee5d31af1b23e00e565c2a60b354b85f2beb54d1))
- move all index.svelte to index.md and add breadcrumb ([c691d92](https://github.com/themesberg/flowbite-svelte/commit/c691d92fe5b47dafb2d1f5bc4dee39dc3a5c61b8))
- move from @codewithshin/svelte-sidebar to svelte-sidebar-menu ([4584351](https://github.com/themesberg/flowbite-svelte/commit/45843519c11eda6de199fc213374d0d293432255))
- move props to the end of page ([b4bc1c2](https://github.com/themesberg/flowbite-svelte/commit/b4bc1c21418d1dd3140fcb9433575e76aaa8ba49))
- move Responsive component from layout to all pages ([381ee20](https://github.com/themesberg/flowbite-svelte/commit/381ee20922335f0c535c06c21a107ebc38849693))
- move step indicator to extend ([000dec3](https://github.com/themesberg/flowbite-svelte/commit/000dec3688b5d9535a21a36207de42ca26336f1b))
- move transitions to local ([f060cba](https://github.com/themesberg/flowbite-svelte/commit/f060cba164501e0810934b88e8f4e22a784eeca6))
- moved @codewithshin/svelte-heroicons to dependencies ([5639d70](https://github.com/themesberg/flowbite-svelte/commit/5639d70d85fc829bc3827f0cbc82e01c56d644a2))
- moved p-tag and h3 tag css to app.css ([cb3d08e](https://github.com/themesberg/flowbite-svelte/commit/cb3d08edb98d96cadad9975e20488af55f4fa344))
- moved src/routes to main. ([b851974](https://github.com/themesberg/flowbite-svelte/commit/b851974782e9eb442434d57db0deee4021f26db6))
- multi-dropdown detach ([3ad1abb](https://github.com/themesberg/flowbite-svelte/commit/3ad1abb66e0fcb4ea53db8e0180e28b568e98aa6))
- **multi-select:** pre-select values fix ([#892](https://github.com/themesberg/flowbite-svelte/issues/892)) ([e399248](https://github.com/themesberg/flowbite-svelte/commit/e399248dc4503f37b281535acbfa965f3f88ecec))
- navbar in mobile view width ([7f283f3](https://github.com/themesberg/flowbite-svelte/commit/7f283f363ff5fc70430db83bddde3af24e94aa9a))
- navbar page ([d0a704e](https://github.com/themesberg/flowbite-svelte/commit/d0a704e658d86090e38a3d0feadaf89cccb401a6))
- navbar updates ([468839b](https://github.com/themesberg/flowbite-svelte/commit/468839bd2efee738787b428ef902cecee3f70e12))
- navbar-li undefined ([#595](https://github.com/themesberg/flowbite-svelte/issues/595)) ([ab5d080](https://github.com/themesberg/flowbite-svelte/commit/ab5d080c7f214b81a748a812bd487d8d22af8895))
- no dropdown docs ([4f92d9b](https://github.com/themesberg/flowbite-svelte/commit/4f92d9b56a53677bed7264b6f044e64a10c42c7e))
- no href on <a> buttons ([ab13df8](https://github.com/themesberg/flowbite-svelte/commit/ab13df85aeac5368383bb708c9cb3146e418066f))
- no triggers error ([83075e1](https://github.com/themesberg/flowbite-svelte/commit/83075e1a969bdf93a520bd9e35b339e36bf4f325))
- npm run check corrections ([#517](https://github.com/themesberg/flowbite-svelte/issues/517)) ([f1f89e3](https://github.com/themesberg/flowbite-svelte/commit/f1f89e30221fd3bb63fed174fe825a46f780d1c7))
- npm run check fixes ([#484](https://github.com/themesberg/flowbite-svelte/issues/484)) ([be4f0f6](https://github.com/themesberg/flowbite-svelte/commit/be4f0f6270b93296d8e2cd3eab60ef77fc621261))
- og:image and twitter:image to replace spaces with - ([#441](https://github.com/themesberg/flowbite-svelte/issues/441)) ([25ad6d0](https://github.com/themesberg/flowbite-svelte/commit/25ad6d09816e1df3a5a8ddd9a901186d2a36f4ee))
- on:click for Toggle, Checkbox and Radio ([48710b5](https://github.com/themesberg/flowbite-svelte/commit/48710b59c9a9096ec95dfa26d1764a312552b49e))
- optional Frame transition' ([#385](https://github.com/themesberg/flowbite-svelte/issues/385)) ([e7fc8db](https://github.com/themesberg/flowbite-svelte/commit/e7fc8db0f920e3bd907ce9fcf1c532885da193af))
- package.json format ([f836a5c](https://github.com/themesberg/flowbite-svelte/commit/f836a5c733cc57240040aa9821732056ccbcee24))
- package.json format ([675928b](https://github.com/themesberg/flowbite-svelte/commit/675928beda860ef099cd6cc72f2acef2e0159b07))
- package.json scripts update ([7d1d8b9](https://github.com/themesberg/flowbite-svelte/commit/7d1d8b932a198284ae72948249ef379a6594bd18))
- package.json scripts update ([b32d810](https://github.com/themesberg/flowbite-svelte/commit/b32d810eb8ebb9787f62c4ed76766ff77510c5c7))
- package.json scripts update ([b3467ba](https://github.com/themesberg/flowbite-svelte/commit/b3467ba3f16c46f4801642dbf15cf07ad7b9618d))
- padding ([5e4eb4e](https://github.com/themesberg/flowbite-svelte/commit/5e4eb4e97e282b36a62b662b5a24393f0a57b13a))
- padding issues with dropdown ([6a48d4d](https://github.com/themesberg/flowbite-svelte/commit/6a48d4dc6a262fc62aa2d9b4c6233bf1cee4b741))
- padding issues with dropdown ([8e8c2d4](https://github.com/themesberg/flowbite-svelte/commit/8e8c2d4bed3e85e95c28e936c513489e6d975e8f))
- pagination for darkmode ([#507](https://github.com/themesberg/flowbite-svelte/issues/507)) ([9175627](https://github.com/themesberg/flowbite-svelte/commit/917562790bc05a1a0679c11266ee7d23531c865f))
- paragraph page ([98b2dab](https://github.com/themesberg/flowbite-svelte/commit/98b2dabe767cc3e8afa652bd0706dd590997bba6))
- pink color ([e4551b5](https://github.com/themesberg/flowbite-svelte/commit/e4551b54e0b56c07bae45d2bddb1b2930a20fe72))
- placement and padding ([169c749](https://github.com/themesberg/flowbite-svelte/commit/169c749004d16d9b7c1aef46448608beefd3caf7))
- playwright and lint yaml 1.36.0 ([b0fbeb0](https://github.com/themesberg/flowbite-svelte/commit/b0fbeb0908c70cdb46e51ed581fac1f4d2885a4d))
- playwright and lint yaml 1.36.0 ([4c96d64](https://github.com/themesberg/flowbite-svelte/commit/4c96d6497224cbfc30bbb4cdfedf6fd4f44d1f47))
- playwright v1.34.0 in workflow ([e12c5ff](https://github.com/themesberg/flowbite-svelte/commit/e12c5ff81f0af3b74b6424fb63845649d80ac8cb))
- popover html ([d49f808](https://github.com/themesberg/flowbite-svelte/commit/d49f808b8a05bd735a9f90c661710dddfd163cad))
- position and classes ([caa1f13](https://github.com/themesberg/flowbite-svelte/commit/caa1f136e964503ff1976c7de7c006615038489b))
- position update for dropdown and imgdropdown components ([1aef255](https://github.com/themesberg/flowbite-svelte/commit/1aef2559e187458c89f4ad40acbbc8c94719b7ae))
- programatic popper open merged ([86f9874](https://github.com/themesberg/flowbite-svelte/commit/86f9874e1c2390e3571b6df96acfa61af23fd865))
- props and update them ([#715](https://github.com/themesberg/flowbite-svelte/issues/715)) ([3f952b4](https://github.com/themesberg/flowbite-svelte/commit/3f952b41852f5a2b7662e4718a10bab225e060a6))
- props update ([4c109c8](https://github.com/themesberg/flowbite-svelte/commit/4c109c84913bfe09ac8d4d6a7dd2265a0243eefa))
- props update ([2feb352](https://github.com/themesberg/flowbite-svelte/commit/2feb3520eb74eb5f7ef0c0688e288723a7d7ee40))
- props using vite named import ([#347](https://github.com/themesberg/flowbite-svelte/issues/347)) ([7072e03](https://github.com/themesberg/flowbite-svelte/commit/7072e03b7ec8bac2e3d74d53f87c54dab772e159))
- props, types, and default are added to component pages ([50912cd](https://github.com/themesberg/flowbite-svelte/commit/50912cd17b99f2ea3489584d2afc3eee84af3eb6))
- props, types, and default are added to component pages ([58f0e7d](https://github.com/themesberg/flowbite-svelte/commit/58f0e7de7f67edf9fcd8308da4cf07d0878d1869))
- radio.md - dropdown ([#425](https://github.com/themesberg/flowbite-svelte/issues/425)) ([12d2d03](https://github.com/themesberg/flowbite-svelte/commit/12d2d03098a3647040280b20474d657e8f8dca2b))
- rating component update ([#773](https://github.com/themesberg/flowbite-svelte/issues/773)) ([f031395](https://github.com/themesberg/flowbite-svelte/commit/f031395353208a1bade6148dbafd11c9c1632afc))
- RatingComment component ([032aa24](https://github.com/themesberg/flowbite-svelte/commit/032aa24925f082459992104d5040804e0d532153))
- rebase merge conflict Alert.svelte ([38df84a](https://github.com/themesberg/flowbite-svelte/commit/38df84a21124d3d3c3c1d716ff21bd678b156b09))
- refresh dev environment ([3a1b452](https://github.com/themesberg/flowbite-svelte/commit/3a1b452f925e14b2d159456c8f1f50b2972ae52b))
- reinstall after removing lock file ([45ef63c](https://github.com/themesberg/flowbite-svelte/commit/45ef63cc25129c62c6b78477a563a111d1745f32))
- reinstall dependencies ([0876852](https://github.com/themesberg/flowbite-svelte/commit/08768528dd8df368052503e6ebe4a4e68fd348d3))
- reinstall dependencies ([8ee47f8](https://github.com/themesberg/flowbite-svelte/commit/8ee47f8466e44091c9b91995ad70ebf67dca0f29))
- removal of iconinput ([#476](https://github.com/themesberg/flowbite-svelte/issues/476)) ([2da0912](https://github.com/themesberg/flowbite-svelte/commit/2da0912b15199d6dbbcedae0db672b0a7d61a9fd))
- remove \_\_layout from pages dir ([7224e31](https://github.com/themesberg/flowbite-svelte/commit/7224e31b66009bd6fcf207e8da1f69ccec159728))
- remove // [@ts-ignore](https://github.com/ts-ignore) ([ea82a2b](https://github.com/themesberg/flowbite-svelte/commit/ea82a2bc22085bad26967a82d078d8ab86b2477d))
- remove |local from Frame componentso that toast transitions work ([6da412c](https://github.com/themesberg/flowbite-svelte/commit/6da412c0665f27a6f9dd33bbf89758c4a924d239))
- remove a pipe from MetaTags titleTemplate ([6ad56c0](https://github.com/themesberg/flowbite-svelte/commit/6ad56c0a4c918b7322f102c6043ab34e549f026f))
- remove activeTabvalue from TabWrapper and let:tabId vrom tab page examples ([ee1b444](https://github.com/themesberg/flowbite-svelte/commit/ee1b444cd552de4cd0c13e4356159ce44a864024))
- remove bind: from TabWrapper bind:activeTabValue ([0269b3a](https://github.com/themesberg/flowbite-svelte/commit/0269b3ac4daf31cebec6f215983bfb4e99a118e3))
- remove button margin ([9cc1795](https://github.com/themesberg/flowbite-svelte/commit/9cc179505bd77ed775fee1879415f191f36b4764))
- remove custom from Button component ([6114f4c](https://github.com/themesberg/flowbite-svelte/commit/6114f4c9f5d9ad0848d5e7c000db6c4c9661ad39))
- remove Datepicker from index ([f08230c](https://github.com/themesberg/flowbite-svelte/commit/f08230c84d29f172f1a30a6194e2694eb65f3e3e))
- remove debris from the last PR ([902a172](https://github.com/themesberg/flowbite-svelte/commit/902a1722ea11375df3d7670c0bd25ddc7fec504a))
- remove duplicate theme from tailwind.config ([5d0ebe5](https://github.com/themesberg/flowbite-svelte/commit/5d0ebe5ab587e489498bba825527d613cddb2eaf))
- remove EcommerceCard and SignInCard ([7e6b2b6](https://github.com/themesberg/flowbite-svelte/commit/7e6b2b689a86cb47df080908ef3217345361667a))
- remove Figma from image page ([0276b51](https://github.com/themesberg/flowbite-svelte/commit/0276b517fc828e77bfd383be122b514bb0793da0))
- remove flowbite-svelte ([23af736](https://github.com/themesberg/flowbite-svelte/commit/23af7360f881847d9837e7cb502c6419bf69a0aa))
- remove flowbite-svelte-blocks page, add a link ([2b9e3d3](https://github.com/themesberg/flowbite-svelte/commit/2b9e3d3f72731ace8abb563e28e98309dbc58b3b))
- remove h-4 w-4 from Iconinput example in the input-field page ([4d5f396](https://github.com/themesberg/flowbite-svelte/commit/4d5f396ea80389b88ec6a8437228d5dbadd46877))
- remove heros from cards page ([c46f0b3](https://github.com/themesberg/flowbite-svelte/commit/c46f0b3f9a16793f12d68fd3d1b9e973dd1f7b4a))
- remove heros from megamenu and list-group page ([9980b7d](https://github.com/themesberg/flowbite-svelte/commit/9980b7d98668c0356217dd3aac810c52cd5e0e51))
- remove heros from popover page ([eeff79f](https://github.com/themesberg/flowbite-svelte/commit/eeff79f53733a8f5cbb480eead692f111f96b07c))
- remove heros from sidebars page ([a3981a0](https://github.com/themesberg/flowbite-svelte/commit/a3981a09b6b36dcbcb90cfad789bee6a10dae9a1))
- remove heros from: ([57f6928](https://github.com/themesberg/flowbite-svelte/commit/57f69282190f5d33d7ac17c6adeab36b89184f47))
- remove heros from: ([7055f4c](https://github.com/themesberg/flowbite-svelte/commit/7055f4c5ddaa91e15cabaf7d1112a149cf81374d))
- remove heros icon from Carousel ([2c7d4c9](https://github.com/themesberg/flowbite-svelte/commit/2c7d4c9a6edc1a4dd4005e5dcf46fec8b5dc0a52))
- remove heros icons from ([203f14c](https://github.com/themesberg/flowbite-svelte/commit/203f14c578e57429892e0df41452abbdef1b3a4e))
- remove heros icons from buttons page ([ec81a39](https://github.com/themesberg/flowbite-svelte/commit/ec81a393f438e2285d36ed7fea787af956c6f128))
- remove heros icons from checkbox page ([1ed983c](https://github.com/themesberg/flowbite-svelte/commit/1ed983c2b230e6309ae6882972176480f8060487))
- remove heros icons from select and toggle pages ([fba7660](https://github.com/themesberg/flowbite-svelte/commit/fba7660c1bf08c47a9d0200db545f0b1fce457a9))
- remove hidescript for more lines than set up ([0e98e3c](https://github.com/themesberg/flowbite-svelte/commit/0e98e3ccafb0cc609f74f9adebf5f4cb66df9886))
- remove Home icons from all pages ([7ac0e7a](https://github.com/themesberg/flowbite-svelte/commit/7ac0e7aa3edc5486d597a61775a5694c76b4bb35))
- remove layout and page content ([92609e5](https://github.com/themesberg/flowbite-svelte/commit/92609e5a8dd85b22daaf12dda526331184bb4e74))
- remove log message in Avatar Dot ([#567](https://github.com/themesberg/flowbite-svelte/issues/567)) ([1c808c7](https://github.com/themesberg/flowbite-svelte/commit/1c808c7e21c72b7bda604852fe8e75eebcb6992a))
- remove main: index.js ([879d810](https://github.com/themesberg/flowbite-svelte/commit/879d8108c34f563e19ae4cd9b89eb95391083235))
- remove NavDropdown ([5c77f68](https://github.com/themesberg/flowbite-svelte/commit/5c77f68c097498a8ecbe10eaf5c8a8e3c1d2b187))
- remove new buttons ([7066f08](https://github.com/themesberg/flowbite-svelte/commit/7066f082605421142a0fe4cc91cb65f2aa8e7ebb))
- remove old tab components ([a61dd72](https://github.com/themesberg/flowbite-svelte/commit/a61dd728d1eb01bdbfeb61ff3adf8f96d7a1fbde))
- remove package-lock, pnpm-lock and node_modules and reinstall ([a8985ea](https://github.com/themesberg/flowbite-svelte/commit/a8985ea2fdb7c18eb23e61dd163e65da98a53ae4))
- remove package-lock.json and add package-lock.json to .gitignore ([b1f0fc4](https://github.com/themesberg/flowbite-svelte/commit/b1f0fc4c8d093668676b27fd845d1f89c2812a52))
- remove peerDependencies ([#810](https://github.com/themesberg/flowbite-svelte/issues/810)) ([e940033](https://github.com/themesberg/flowbite-svelte/commit/e94003300ff016ffe565a167e45714b9091ce495))
- remove radio, search etc from InputType ([ed95418](https://github.com/themesberg/flowbite-svelte/commit/ed9541808da054b383c6addff55907d955dad32f))
- remove rel=external from \_\_layout since it doesn't show the sidemenu ([a0cee08](https://github.com/themesberg/flowbite-svelte/commit/a0cee08e3312a66bdc1a4e070ca45abb0fdc7a84))
- remove svelte-collapse from Accordion component ([7b8a642](https://github.com/themesberg/flowbite-svelte/commit/7b8a642284947c7b8c6bbabecad2ddb2cc1f3d04))
- remove svelte-flag-icons from devDependencies ([8f48867](https://github.com/themesberg/flowbite-svelte/commit/8f488677958313a2debaa3f953314d6452a63013))
- remove svelte-sidebar-menu ([2820488](https://github.com/themesberg/flowbite-svelte/commit/28204885bbefcb826e073a1e6b7127a0b488b752))
- remove svelte:component from FooterIcon ([0406128](https://github.com/themesberg/flowbite-svelte/commit/04061286046845c7f5c34f56ef89013d4a610aee))
- remove SvelteKit app session and page ([7eaa3db](https://github.com/themesberg/flowbite-svelte/commit/7eaa3dbfc7f0e2fcf5ef6be4045843fc92b354a5))
- remove SvelteKit app/stores page and session from Navbar ([09428df](https://github.com/themesberg/flowbite-svelte/commit/09428df9f46b16b07595ed16c08697c61c0099a5))
- remove TabHead and TabHeadItem ([c255797](https://github.com/themesberg/flowbite-svelte/commit/c25579742f17a822f8f2a2c325da2c7c98c375cc))
- remove tabId from TabWrapper component ([5f46d23](https://github.com/themesberg/flowbite-svelte/commit/5f46d238ff1c81c1c66c1542565aa589f97cf530))
- remove TextGradient and Underline ([cb7b2d7](https://github.com/themesberg/flowbite-svelte/commit/cb7b2d753f110cad4677f990d60a11154e38ac93))
- remove Toc from layout since it needs to be updated ([2ea41a0](https://github.com/themesberg/flowbite-svelte/commit/2ea41a0c82bb8a7f583a001c1c5f598ac5855102))
- remove transition for navbar ([4f078d0](https://github.com/themesberg/flowbite-svelte/commit/4f078d038b1b1babe216f55e937e0a1e64e2a7a5))
- remove transition for NavUl ([6a29a1d](https://github.com/themesberg/flowbite-svelte/commit/6a29a1d82ef3e5e6a7afcf68dd953f8830562e05))
- remove type CrumbType ([4269359](https://github.com/themesberg/flowbite-svelte/commit/4269359c1bddb37fea064cab4dc31b3ea30772ee))
- remove unused components and update props ([#642](https://github.com/themesberg/flowbite-svelte/issues/642)) ([e6a4fb5](https://github.com/themesberg/flowbite-svelte/commit/e6a4fb5c63888e1aa90229414d5814e9a3c5fe27))
- remove unused icon prop ([10e8c81](https://github.com/themesberg/flowbite-svelte/commit/10e8c81dae9e0470ef875fc95dd7d89decdae732))
- remove unused imports ([acb58b9](https://github.com/themesberg/flowbite-svelte/commit/acb58b9144948feeb3c1c14b41a71d2122187340))
- remove utils/OptsButton ([04ebd83](https://github.com/themesberg/flowbite-svelte/commit/04ebd83aae8a3f3efabac8f3f144b65fabb04da1))
- remove workflows/release-please.yml ([30a3682](https://github.com/themesberg/flowbite-svelte/commit/30a3682d3652e779e5e4325edbf7b66ad02a8428))
- removed $app/env browser from Tooltip component ([604a1e0](https://github.com/themesberg/flowbite-svelte/commit/604a1e075c6333c5532e04916a20500a31fb4716))
- removed bg and text from CloseButton to keep transparency ([b5d36ee](https://github.com/themesberg/flowbite-svelte/commit/b5d36eec584f89a46d59346995b79b9b0d0fd906))
- removed console.log ([f0f7ee9](https://github.com/themesberg/flowbite-svelte/commit/f0f7ee96bc48310ed245c00678960ac9d2eaa05b))
- removed drawer component and page from the main ([5cf77f0](https://github.com/themesberg/flowbite-svelte/commit/5cf77f008aff26e64bd210a3bdf60e5f25aebc89))
- removed duplicated folder "alert" ([#734](https://github.com/themesberg/flowbite-svelte/issues/734)) ([4c8f32a](https://github.com/themesberg/flowbite-svelte/commit/4c8f32aad85593bd9a2666ec0d22c77e41463291))
- removed gradient outline examples since Flowbite site does not have them ([56ac6b4](https://github.com/themesberg/flowbite-svelte/commit/56ac6b4a57512a0d0a086c26a0f179e114af7690))
- removed Home icon from BreadcrumbItem ([66f00dd](https://github.com/themesberg/flowbite-svelte/commit/66f00dd9e024d97c2b9766e30b03b775f227c672))
- removed Ol component ([569f2e3](https://github.com/themesberg/flowbite-svelte/commit/569f2e3a51a59abba641c669949b4b5372c56a01))
- removed prismjs from package.json and layouts ([dd9ad11](https://github.com/themesberg/flowbite-svelte/commit/dd9ad110193e176ad8127f9c556105d3da854b26))
- rename index.js to index.ts ([216db5a](https://github.com/themesberg/flowbite-svelte/commit/216db5a42abff31b85644daacd441355da7805b8))
- rename List to Listgroup and ListItem to ListgroupItem ([1b70110](https://github.com/themesberg/flowbite-svelte/commit/1b7011062a729452604b3a0dd1ed54f28ab49132))
- reset to 4e86918 ([c04f892](https://github.com/themesberg/flowbite-svelte/commit/c04f8923e535a6c8fe1a7ea1df8cbeaeec2c5446))
- restProps for NumberInput ([#382](https://github.com/themesberg/flowbite-svelte/issues/382)) ([d1acb7f](https://github.com/themesberg/flowbite-svelte/commit/d1acb7f1b22a69acfc0f1ab6d2859c2a7d8a082c))
- restucturing Navbar components ([3f4fa07](https://github.com/themesberg/flowbite-svelte/commit/3f4fa076fe3cb5c0ca2a0a3e3b88e47aba7078af))
- revert package:publish ([515e9f4](https://github.com/themesberg/flowbite-svelte/commit/515e9f416f44754aa4794e2baca3ac3401b59100))
- revert Tooltip component ([9cedc68](https://github.com/themesberg/flowbite-svelte/commit/9cedc68014a7114c0e15691c26081bb9f5af88af))
- reverting Alert ([ccda53a](https://github.com/themesberg/flowbite-svelte/commit/ccda53ad474e0c6a39ffa6297555485f08ea9b5d))
- Review component and review in the ratings page ([afe6972](https://github.com/themesberg/flowbite-svelte/commit/afe69726d08a3cad7de7f29db131909816bc9c3e))
- scripts build update ([ed3d086](https://github.com/themesberg/flowbite-svelte/commit/ed3d086767e2e444ee716b511b1a57aabf630dea))
- search on:input ([#408](https://github.com/themesberg/flowbite-svelte/issues/408)) ([4c1e514](https://github.com/themesberg/flowbite-svelte/commit/4c1e514297aaf786535d6411ba4a53e8037e0f90))
- select types ([#508](https://github.com/themesberg/flowbite-svelte/issues/508)) ([3ea30a9](https://github.com/themesberg/flowbite-svelte/commit/3ea30a9d336187f36f63f559fbef3b0a7dde5f23))
- select.md ([e6c3cf3](https://github.com/themesberg/flowbite-svelte/commit/e6c3cf3495002a4e150514491453cf6a64cb3ffe))
- set the default values of space and color of paragraph element to undefined ([0d54908](https://github.com/themesberg/flowbite-svelte/commit/0d549081235b1691017c0d3ae802fe71b48c4016))
- show the top of page after navigation ([b3be37b](https://github.com/themesberg/flowbite-svelte/commit/b3be37b761a8a656413e1b34da73c6a251ab4010))
- sidebar activeUrl example ([4387644](https://github.com/themesberg/flowbite-svelte/commit/43876441726e70eb582c20778a6231ed03f963d7))
- sidebar activeUrl update by adding docs/ ([#754](https://github.com/themesberg/flowbite-svelte/issues/754)) ([467b060](https://github.com/themesberg/flowbite-svelte/commit/467b060f2da047d11d227db0f4bfe86fb848b749))
- sidebar menu ([0853344](https://github.com/themesberg/flowbite-svelte/commit/08533446aa8cf4fd820f3a085a945fb030e13056))
- sidebar menu covers screen and it doesn't allow to click any links ([879c886](https://github.com/themesberg/flowbite-svelte/commit/879c886b5134908f1e4e9365c13df9bae372acd0))
- sidebar z-10 to z-30 for front page ([79b5adc](https://github.com/themesberg/flowbite-svelte/commit/79b5adc075633b2fb4904f7b907b0d8e50dc28a3))
- sidebar z-50 to z-10 for modals ([4b76f75](https://github.com/themesberg/flowbite-svelte/commit/4b76f75650bb5670117c4959cb6b622f639242db))
- sidebars and forms {...$$restProps} position updates ([d983225](https://github.com/themesberg/flowbite-svelte/commit/d983225a4e4c7526bf7bee3a7cd51ecc6035bba8))
- SignInCard type update ([55c824a](https://github.com/themesberg/flowbite-svelte/commit/55c824aa08727eb3f07c12fc589158e7cc94fd5f))
- snapshot page ([#603](https://github.com/themesberg/flowbite-svelte/issues/603)) ([f9ecfed](https://github.com/themesberg/flowbite-svelte/commit/f9ecfedbc834530f5abab79f3d3b06e2c2c811a4))
- snapshot page update 2 ([#605](https://github.com/themesberg/flowbite-svelte/issues/605)) ([e7b36e6](https://github.com/themesberg/flowbite-svelte/commit/e7b36e6ad579bfe642747f6ce2624d129397e49a))
- spacing ([6f6e99c](https://github.com/themesberg/flowbite-svelte/commit/6f6e99cec7209a70f9e09b362714f37525c45a53))
- spinner fill and colour were back to front. ([83e6ec7](https://github.com/themesberg/flowbite-svelte/commit/83e6ec75cec5aade59570337a829938e46bcdfa3))
- style for links ([040ff2e](https://github.com/themesberg/flowbite-svelte/commit/040ff2ea183d21836e8f3e5dddb5879cf9324a69))
- sveltekit, vite, and other dependencies update ([#482](https://github.com/themesberg/flowbite-svelte/issues/482)) ([231e4da](https://github.com/themesberg/flowbite-svelte/commit/231e4daddc7095446a42f82f35f224ca9b9e209f))
- tab page timeline ([ab598a5](https://github.com/themesberg/flowbite-svelte/commit/ab598a59a3d373f14740a42bbaec3cb276eed34b))
- Table component ([88eb6f2](https://github.com/themesberg/flowbite-svelte/commit/88eb6f2271728e448b4ca7b1a4dd2b89ea6c6e97))
- TableBodyRow color and border ([#539](https://github.com/themesberg/flowbite-svelte/issues/539)) ([d52920f](https://github.com/themesberg/flowbite-svelte/commit/d52920fe869183639788607475b148c80fe283fa))
- test script branch ([e3d5264](https://github.com/themesberg/flowbite-svelte/commit/e3d52645892d5e03fa354b70ccdd6517d50a1918))
- textarea docs ([133b933](https://github.com/themesberg/flowbite-svelte/commit/133b9334841ac13d82c3a86bc24b3375de0972ff))
- TextPlaceHolder remove w-full ([e3ec175](https://github.com/themesberg/flowbite-svelte/commit/e3ec175bc3ec366a5e027feb5e21721fdd223243))
- to original Carousel ([5e979ae](https://github.com/themesberg/flowbite-svelte/commit/5e979ae8b58403cdf91b82b236a8e730f02d9cb1))
- to original Carousel ([198270f](https://github.com/themesberg/flowbite-svelte/commit/198270f623e4c0806a59cf3f9f5dd89430ddc0db))
- toast transitions ([6659682](https://github.com/themesberg/flowbite-svelte/commit/6659682250ab9d2337f06c2b424431366cf9ced0))
- toc issues ([13a459e](https://github.com/themesberg/flowbite-svelte/commit/13a459ec6cc3c8768698c5525012f2b53ae94b5c))
- toc more selective ([fb457a2](https://github.com/themesberg/flowbite-svelte/commit/fb457a26b595652f0f59d08915cfae3267361899))
- toc stickiness ([#330](https://github.com/themesberg/flowbite-svelte/issues/330)) ([21a0409](https://github.com/themesberg/flowbite-svelte/commit/21a0409bd34323b2858f43952ef6de45982b262d))
- toggle initial checked ([#442](https://github.com/themesberg/flowbite-svelte/issues/442)) ([7b0b0b0](https://github.com/themesberg/flowbite-svelte/commit/7b0b0b0cfd0b40e6688af0a2a748453b16a4fd5a))
- Toggle props and typo update ([9a40224](https://github.com/themesberg/flowbite-svelte/commit/9a40224fc26bfefd9d28ec5d364bf4d7430da6f0))
- tooltip style ([#759](https://github.com/themesberg/flowbite-svelte/issues/759)) ([813d1fa](https://github.com/themesberg/flowbite-svelte/commit/813d1fab8092662a2d2f51e95cf387e3352e6ff9))
- tooltips/popovers ([d18721c](https://github.com/themesberg/flowbite-svelte/commit/d18721cc4229f5eb1f4dccbbd34dda65f6a07aac))
- top navbar margin top ([d9c83b4](https://github.com/themesberg/flowbite-svelte/commit/d9c83b46bcd0c67d176ad60b0cbd3089a62471ab))
- transition func must return TransitionConfig ([18bffdb](https://github.com/themesberg/flowbite-svelte/commit/18bffdb6829267bb78b33e2f247d707575504ee9))
- transitions in drawer ([#881](https://github.com/themesberg/flowbite-svelte/issues/881)) ([90319b3](https://github.com/themesberg/flowbite-svelte/commit/90319b3d5237ca896c5ea971f77c776d678ebb05))
- transitions in frame ([#883](https://github.com/themesberg/flowbite-svelte/issues/883)) ([079ca87](https://github.com/themesberg/flowbite-svelte/commit/079ca8795814e7c3b482cfb27ddfec5fd23fc683))
- ts errors ([#464](https://github.com/themesberg/flowbite-svelte/issues/464)) ([ca723d4](https://github.com/themesberg/flowbite-svelte/commit/ca723d489e1861f6f702da90f9645139979261df))
- ts item type in megamenu ([c0ee437](https://github.com/themesberg/flowbite-svelte/commit/c0ee437ba3f04142e276f09e9f7301800828301f))
- ts types for Popper ([#362](https://github.com/themesberg/flowbite-svelte/issues/362)) ([4a22230](https://github.com/themesberg/flowbite-svelte/commit/4a22230d66d780cb2d5c189266f97c87c251b70a))
- type and layout footer padding fix ([999d291](https://github.com/themesberg/flowbite-svelte/commit/999d29158fde736dbf4e19c9545fff6ba41dc7e7))
- typescript declarations for import.meta.glob ([#736](https://github.com/themesberg/flowbite-svelte/issues/736)) ([ef10a06](https://github.com/themesberg/flowbite-svelte/commit/ef10a06785c38504d7b7dd75fccae245c6fa2188))
- typescript name for label, href for link. ([9d0f147](https://github.com/themesberg/flowbite-svelte/commit/9d0f147f78e9d50f7bf6e589be9965e105f4c835))
- typo ([c9f71f2](https://github.com/themesberg/flowbite-svelte/commit/c9f71f294bfaeea90b50d503b99b49b344ba8921))
- typo ([ec6f019](https://github.com/themesberg/flowbite-svelte/commit/ec6f019501acf4ba2fb105b8cc04a6d347d0dcf1))
- typo ([4479464](https://github.com/themesberg/flowbite-svelte/commit/4479464736800552c1c05ce6b793459e8df6ef7f))
- typo and update bug_report.yml ([#787](https://github.com/themesberg/flowbite-svelte/issues/787)) ([4ee8a92](https://github.com/themesberg/flowbite-svelte/commit/4ee8a92c5809ea9047141eae7d3aa62b2b8879f4))
- typo CardPlaceholder ([71bea4d](https://github.com/themesberg/flowbite-svelte/commit/71bea4d98b5046d866aa2ded2e00cc30e4b44b61))
- typo cli page ([1a46882](https://github.com/themesberg/flowbite-svelte/commit/1a46882da779e386d01d858215345f018aa65270))
- typo form and from ([f17012d](https://github.com/themesberg/flowbite-svelte/commit/f17012db645030cf15ee62c28076f136ff28bed0))
- Typo in AccordionItem.svelte ([#741](https://github.com/themesberg/flowbite-svelte/issues/741)) ([149c3b7](https://github.com/themesberg/flowbite-svelte/commit/149c3b7d2ae10d56ce430df386a7a220a59167b2))
- typo in docs ([#645](https://github.com/themesberg/flowbite-svelte/issues/645)) ([d010eef](https://github.com/themesberg/flowbite-svelte/commit/d010eef360a32460eff383e585cd14cd31ee3bfa))
- update @codewithshin/svelte-sidebar ([91cff9a](https://github.com/themesberg/flowbite-svelte/commit/91cff9a0f123f6cb8d3798a7059d6057fd74ba82))
- update about and getting-started page ([6eabc6b](https://github.com/themesberg/flowbite-svelte/commit/6eabc6b492f1a4170af6c9f40b2c4858ecea8f4f))
- update about page and add type-list page ([d560b4b](https://github.com/themesberg/flowbite-svelte/commit/d560b4ba026f4cdcb0cddbff99589b5af55fe6c5))
- update AccordionItem class ([3713cc0](https://github.com/themesberg/flowbite-svelte/commit/3713cc023e21c014fbf6a1bf6acadf5b67b03ee1))
- update accordions/default page ([175a753](https://github.com/themesberg/flowbite-svelte/commit/175a753626f0b9a489352018939935e00a897832))
- update Alert and workflows playwright version ([670516d](https://github.com/themesberg/flowbite-svelte/commit/670516da7f979153e2d4c1b72313f8f2ac0f3bfa))
- update Alert color type ([fd819fb](https://github.com/themesberg/flowbite-svelte/commit/fd819fb59d2d01f900ad76449afabfa22de6d5b1))
- update Alert component ([92ade7a](https://github.com/themesberg/flowbite-svelte/commit/92ade7ae51d039823f61bb90b3b9e0cc6d46d033))
- update all dependencies ([d7ae979](https://github.com/themesberg/flowbite-svelte/commit/d7ae979973ba092f36236fe877b98314a0328a42))
- update all modal pages ([de11239](https://github.com/themesberg/flowbite-svelte/commit/de112398289e42b08144a2704db3c766a50a3840))
- update auth login component ([02bd514](https://github.com/themesberg/flowbite-svelte/commit/02bd514d9f7b65c6d9019bad5ccc654313388a7c))
- update badge component's style and doc ([#531](https://github.com/themesberg/flowbite-svelte/issues/531)) ([ce9af8c](https://github.com/themesberg/flowbite-svelte/commit/ce9af8cff8f6979f625b00fd165aa2ffadc41604))
- update bug_report.yml ([221f224](https://github.com/themesberg/flowbite-svelte/commit/221f224920c69fb281c8b4fd2844a22fbe657c72))
- update bug_report.yml ([c527971](https://github.com/themesberg/flowbite-svelte/commit/c52797111863fd3e52e7c3dae9473e22cd84923a))
- update bug_report.yml by adding REPL template link ([3c8140d](https://github.com/themesberg/flowbite-svelte/commit/3c8140dffdedb3a41ee0ea9b546da92866fceefb))
- update Button color types ([974df12](https://github.com/themesberg/flowbite-svelte/commit/974df12eaf2d796676700df09f2ee83d24ffc328))
- update button colors ([542ad32](https://github.com/themesberg/flowbite-svelte/commit/542ad32ccd6cf260c454dcac9d717662381e146b))
- update Button component ([330aae9](https://github.com/themesberg/flowbite-svelte/commit/330aae91c6c1b19cbbd1f35177f5e4bac9de3904))
- update Button component ([6f89d90](https://github.com/themesberg/flowbite-svelte/commit/6f89d90a33b7456e1736cd7b28b0b09bcb77e5a2))
- update Button outline ([6f419c3](https://github.com/themesberg/flowbite-svelte/commit/6f419c38a365fbfb3a466ec81eedc6fcd5fa9a75))
- update ButtonGroup components ([72fa977](https://github.com/themesberg/flowbite-svelte/commit/72fa9779438d5344fd30014fa00e1fe9f779f432))
- update ButtonGroupItem border ([365b6d2](https://github.com/themesberg/flowbite-svelte/commit/365b6d2b21b903a8b15057a9bb009e0d3d65e884))
- update Card component ([732ba60](https://github.com/themesberg/flowbite-svelte/commit/732ba60848e12cf3ca040f5f62087141dfa211dd))
- update card page ([0fd6e0e](https://github.com/themesberg/flowbite-svelte/commit/0fd6e0eeb8a42e6f51f0ac8465803ea40100bd55))
- update carousel page ([27c621b](https://github.com/themesberg/flowbite-svelte/commit/27c621b5f7a97896635ddbc2aa9cccf624275e80))
- update checkbox page ([aa45560](https://github.com/themesberg/flowbite-svelte/commit/aa455604516ef6a4b73193d4898f7f2a5365baca))
- update checkbox, add Label and Helper components, update checkbox page ([07de620](https://github.com/themesberg/flowbite-svelte/commit/07de6208e256cb364d9ae1ed02b321168119514d))
- update createprops and update props ([0739b92](https://github.com/themesberg/flowbite-svelte/commit/0739b9296caddcba85f849b222e6548a961dbd34))
- update darkmode link ([e91ddd4](https://github.com/themesberg/flowbite-svelte/commit/e91ddd4417643b0cba304868ec15505b0fabb30b))
- update deps ([d204667](https://github.com/themesberg/flowbite-svelte/commit/d20466715709bd4817277bb6eeaed8f1cb0c4002))
- update Dropdown components ([4dd3254](https://github.com/themesberg/flowbite-svelte/commit/4dd3254b037be1db5718c4a03662e7cf455a4ee6))
- update dropdown creating Dropdown, DropdownDivider, DropdownHeader, DropdownItem ([58db150](https://github.com/themesberg/flowbite-svelte/commit/58db150ee321f849ece954f43213e09a3634e191))
- update DropdownNavbar using NavDropdown ([8061789](https://github.com/themesberg/flowbite-svelte/commit/806178993f8029cac9e1989c2f1de795cb60b4bd))
- update for [#165](https://github.com/themesberg/flowbite-svelte/issues/165) and [#170](https://github.com/themesberg/flowbite-svelte/issues/170) ([ff43f26](https://github.com/themesberg/flowbite-svelte/commit/ff43f265b163d2c3ac7a145772e18a95326c0651))
- update for flowbite-svelte-icon v0.2.1 ([fbbe4b1](https://github.com/themesberg/flowbite-svelte/commit/fbbe4b104dc0c41708e4bc3442c86096019bead4))
- update for lighthouse ([e81850d](https://github.com/themesberg/flowbite-svelte/commit/e81850db1d00851f2f8b3a1320ef7658f0654674))
- update forms page ([1718c57](https://github.com/themesberg/flowbite-svelte/commit/1718c574cbf27943a746d114c511c2b634e7c1fd))
- update forms page ([c29c921](https://github.com/themesberg/flowbite-svelte/commit/c29c9211f4f28149fcbafe44550d2ba716f12d4b))
- update forms/index page ([bda7cc2](https://github.com/themesberg/flowbite-svelte/commit/bda7cc29fc6fe4274032436004ded20e89ce1a9b))
- update from index.ts to index.js in vite.config.ts ([a7978dd](https://github.com/themesberg/flowbite-svelte/commit/a7978dd854ded3238aa522b5ee47ebc2f0865cf9))
- update h1 for breadcrumb ([8bfef6a](https://github.com/themesberg/flowbite-svelte/commit/8bfef6a93f69dbbf4fb667ba0d177059181b6cdb))
- update h1 in index pages ([e4d1a52](https://github.com/themesberg/flowbite-svelte/commit/e4d1a5284c5ce5f1d981e377263f97c2a2d00485))
- update home page ([1698549](https://github.com/themesberg/flowbite-svelte/commit/1698549517b8dd4dc56cfb8d784fb64a54ff9981))
- update Htwo using scroll-mt-20 ([2006490](https://github.com/themesberg/flowbite-svelte/commit/200649069a05c6df4ed0e269d3479526092afe01))
- update icon class in TabHeadItem for Tabs with icons ([e94b344](https://github.com/themesberg/flowbite-svelte/commit/e94b3449826e84146b877e00e458885e08606ec5))
- update Iconinput ([2b4a7b5](https://github.com/themesberg/flowbite-svelte/commit/2b4a7b55f7db35f3e5b0cc042aa27a84ff741194))
- update index.js by adding .js to all store files ([1b1adcd](https://github.com/themesberg/flowbite-svelte/commit/1b1adcdd11dba6c3f37507f91f17795a9f605e25))
- update Input component ([94df473](https://github.com/themesberg/flowbite-svelte/commit/94df473935baaa4f22124ceb0d6501a1359bd4b4))
- update InputType in Input components ([e9df0cc](https://github.com/themesberg/flowbite-svelte/commit/e9df0cc0989eb89f83b8ebced319e58ccc108446))
- update internal links ([3e13890](https://github.com/themesberg/flowbite-svelte/commit/3e13890f7320e04a32aa8ea1aed6e77c0b155678))
- update layouts for breadcrumb ([1c07955](https://github.com/themesberg/flowbite-svelte/commit/1c07955215fe7a48e3e5573c5c657d59978b5fe4))
- update links ([980ff51](https://github.com/themesberg/flowbite-svelte/commit/980ff511f5c75c0a47c1f5378f952054c3c44e9a))
- update links, flowbite svelte link, sitemap links, white for dark mode ([024b079](https://github.com/themesberg/flowbite-svelte/commit/024b079c161678f2a683736a97d4431f8d8a5279))
- update main nav. add transition to carousel ([3a9f572](https://github.com/themesberg/flowbite-svelte/commit/3a9f5723af8f54ef58c6902af5599114cc81fb86))
- update menu and tabs/index ([d48d335](https://github.com/themesberg/flowbite-svelte/commit/d48d335833d904ccb30edda1d1dd6f86e83fc9ee))
- update meta images width and height ([#400](https://github.com/themesberg/flowbite-svelte/issues/400)) ([f97c01a](https://github.com/themesberg/flowbite-svelte/commit/f97c01a361714daca951c16fa7a2293988abd983))
- update navbar ([7cdfa05](https://github.com/themesberg/flowbite-svelte/commit/7cdfa0525499faca856632278f5cb6b6c4213e75))
- update Navbar ([57d50fc](https://github.com/themesberg/flowbite-svelte/commit/57d50fc256f07dc236e02f38aa87bc1e7d9166be))
- update Navbar components ([57a7205](https://github.com/themesberg/flowbite-svelte/commit/57a7205e3c5db1dcec4f677878b2001fde749c67))
- update navbar index page by adding flex items-center md:order-2 ([efc0209](https://github.com/themesberg/flowbite-svelte/commit/efc0209c87d063157f225476f0b8e5beb04ed36f))
- update package:publish script ([8ec3669](https://github.com/themesberg/flowbite-svelte/commit/8ec36699099e0672263f4c44fecd07e3d8ec6313))
- update package.json ([a77e3e5](https://github.com/themesberg/flowbite-svelte/commit/a77e3e57f58ac95dda547cc9a410a2aaa4559fe8))
- update package.json and clean up lib/index ([e37a45e](https://github.com/themesberg/flowbite-svelte/commit/e37a45e81f07f7f98f4ef7c7b569e203bf63582a))
- update package.json in order to move src/routes to main. ([eaf78dc](https://github.com/themesberg/flowbite-svelte/commit/eaf78dcf5a11bda3343058eb69a4a8fbdbe444c5))
- update pnpm-lock ([4926a47](https://github.com/themesberg/flowbite-svelte/commit/4926a47bd529601b1a0709533fee2b5291e59eb8))
- update progressbars/index ([c36dbcd](https://github.com/themesberg/flowbite-svelte/commit/c36dbcdaa98e4236a8a9bd8a63aebca4443ea741))
- update prop names for Alert ([3775700](https://github.com/themesberg/flowbite-svelte/commit/377570061f48de43af44c5f87f46b049f4d87341))
- update props ([cb92b47](https://github.com/themesberg/flowbite-svelte/commit/cb92b47bd79f8833aea263d106675881a6fcd456))
- update props ([#749](https://github.com/themesberg/flowbite-svelte/issues/749)) ([445c07e](https://github.com/themesberg/flowbite-svelte/commit/445c07ebadf2432bc6c005a7e78ac7660f6abf40))
- update props and types page ([#331](https://github.com/themesberg/flowbite-svelte/issues/331)) ([0be5900](https://github.com/themesberg/flowbite-svelte/commit/0be59006c6bf79df210838b21a17d3dfd18213ac))
- update props dir files ([e52cfcb](https://github.com/themesberg/flowbite-svelte/commit/e52cfcbba6ce7fae124803f670ba280e95c96e85))
- update props table and github links ([0a184d1](https://github.com/themesberg/flowbite-svelte/commit/0a184d11469729e2697ea91117ad487e2b6e3741))
- update RadioItem props ([fd2f9a0](https://github.com/themesberg/flowbite-svelte/commit/fd2f9a0c4b3854c3a644710a4cb1df238e1a6af2))
- update range page ([edbf37f](https://github.com/themesberg/flowbite-svelte/commit/edbf37f7b2c6ef0109d15bf1e76dcd52bf2b9b05))
- update rating page for AdvancedRating ([f1dc978](https://github.com/themesberg/flowbite-svelte/commit/f1dc978b5775e0089cc6c8aa1fac1c5ed8b97dca))
- update README ([adfdea2](https://github.com/themesberg/flowbite-svelte/commit/adfdea2744736b57d28b70e1dfd03c9c8c4164fe))
- update README ([e186aa4](https://github.com/themesberg/flowbite-svelte/commit/e186aa4d5531aa8a9062f315e4a2a3e1936aa763))
- update sidebar dropdown, all modal components ([11c0e1d](https://github.com/themesberg/flowbite-svelte/commit/11c0e1d3c2770b5bcefb924749c9b3e4f1448ceb))
- update sidebar menu to close after clicking a link ([ae9a36c](https://github.com/themesberg/flowbite-svelte/commit/ae9a36c2d9705c664de91a6870b7603ccffbece2))
- update sidebar menu to close it when you click outside of the sidebar ([30c6026](https://github.com/themesberg/flowbite-svelte/commit/30c6026f8f5fec945e97de18585f5665ca6ddbae))
- update skeleton components ([b1ffbc7](https://github.com/themesberg/flowbite-svelte/commit/b1ffbc789536f0e6be4bcca3e4083466c62fe85e))
- update skeleton components ([6c49370](https://github.com/themesberg/flowbite-svelte/commit/6c49370ef244234373d4b87cb1a60e4aebdbf86f))
- update styling ([8a6c49b](https://github.com/themesberg/flowbite-svelte/commit/8a6c49b6352fcfdf6fed4430693b3941e154c069))
- update Svelte-Heros icon for Rating component ([d1c03fa](https://github.com/themesberg/flowbite-svelte/commit/d1c03fa4a0cb4b2cd4ccfe956d7d36ebd4161ed4))
- update svelte-sidebar-menu ([59b37b5](https://github.com/themesberg/flowbite-svelte/commit/59b37b5a8f3bea06ecd8b8fdf5cc5ac5967dd149))
- update svelte-sidebar-menu ([f6fb17f](https://github.com/themesberg/flowbite-svelte/commit/f6fb17f3ea37ea0fd0a489dc3e167849d372e367))
- update svelte-sidebar-menu and \_\_layout ([9314f7a](https://github.com/themesberg/flowbite-svelte/commit/9314f7ac55204505f4cffe2e166b36c474a92985))
- update svelte-sidebar-menu to 0.8.4 ([3b07355](https://github.com/themesberg/flowbite-svelte/commit/3b073553c392f4adb47254beb49769d4e150eaa4))
- update svelte-sidebar-menu version ([1106d16](https://github.com/themesberg/flowbite-svelte/commit/1106d161d06244d5db61641babc7691d28388fbd))
- update svelte-simples ([f958721](https://github.com/themesberg/flowbite-svelte/commit/f9587219ff3da038ee76c6d3b8483dfb2dddc856))
- update Tabel component, add TableHead, TableBody, TableHeadCell, TabelRow ([09b7ad9](https://github.com/themesberg/flowbite-svelte/commit/09b7ad971a2d5ba01eca463e251f2c078a86b708))
- update tabStores import link ([b856b9f](https://github.com/themesberg/flowbite-svelte/commit/b856b9f7ab7932b7e3f6bf5e181a15bc192d702f))
- update test for /buttons/setup page ([90daabb](https://github.com/themesberg/flowbite-svelte/commit/90daabbad3d921e5938c990f3099bd268df4aebf))
- update timeline and home page ([112b08e](https://github.com/themesberg/flowbite-svelte/commit/112b08e9ef990f36b0a62057d28b914529d8a616))
- update Timeline components ([4b47d6b](https://github.com/themesberg/flowbite-svelte/commit/4b47d6b5d09abad3b2d8fc29c2b38287726c44d7))
- update Tooltip component ([df80539](https://github.com/themesberg/flowbite-svelte/commit/df8053996f8ea67d96ee5e70976a61f13e7df2ec))
- update Tooltip component ([d0cc06e](https://github.com/themesberg/flowbite-svelte/commit/d0cc06e991e5677463a5625b4abaee2a6edef3fc))
- update tooltips/light ([94ad280](https://github.com/themesberg/flowbite-svelte/commit/94ad280e2296946bf11386e56824aeeef49c962b))
- update tsconfig.json ([ff4b3da](https://github.com/themesberg/flowbite-svelte/commit/ff4b3dacb420558c0beb627a75d9668e8fad88f9))
- update workflows playwright version ([faafd96](https://github.com/themesberg/flowbite-svelte/commit/faafd96286140631447f1d88d24b0b3e477181e5))
- use encodeURIComponent for MetaTag component to encode spaces ([671a865](https://github.com/themesberg/flowbite-svelte/commit/671a8656eb7f5fff6f8c84ea6146f78b5fb8f0b0))
- use json file to pull props for tooltip/default ([076be6c](https://github.com/themesberg/flowbite-svelte/commit/076be6c65c0d40b2e88e0070c9983ef99b8f3b28))
- use reactive spread ([#927](https://github.com/themesberg/flowbite-svelte/issues/927)) ([a743782](https://github.com/themesberg/flowbite-svelte/commit/a743782a0430680dea1ce072664494db886834fd))
- use relative paths instead of $lib alias inside of lib ([96e9d6b](https://github.com/themesberg/flowbite-svelte/commit/96e9d6bacb81761a26b0e43215c53ae24deffc73))
- use svelte-sidebar Responsive for all layouts ([dc9ed0d](https://github.com/themesberg/flowbite-svelte/commit/dc9ed0dbd7b99cbdc199f222dc6e68c4dd1a317f))
- use vite to import a file as text ([#342](https://github.com/themesberg/flowbite-svelte/issues/342)) ([07ac592](https://github.com/themesberg/flowbite-svelte/commit/07ac592b0a06cda8afd71d918145693a0834b4f3))
- using classnames dynamic class name for Footer ([52e17c7](https://github.com/themesberg/flowbite-svelte/commit/52e17c7dd8ad2599d1f41bc938930db615459b63))
- Utterances link update to themesberg ([584da7e](https://github.com/themesberg/flowbite-svelte/commit/584da7ecf8a755814b436998e3567b7ea46c35d9))
- various minor fixes ([9ac3296](https://github.com/themesberg/flowbite-svelte/commit/9ac3296635db9e7af2a45cc928477ac15e831dc4))
- video component and page ([cc8dcb5](https://github.com/themesberg/flowbite-svelte/commit/cc8dcb54843ecff1f9aacc82d9139aedf7d6e0c1))
- vite.config.ts update ([72f8a25](https://github.com/themesberg/flowbite-svelte/commit/72f8a251221ce78a4452c8ead17ce2abb35cbb00))
- window is undefined ([b752882](https://github.com/themesberg/flowbite-svelte/commit/b752882ad0f0f6a7c196223649463903453f48d6))
- window is undefined/2 ([4c0ca77](https://github.com/themesberg/flowbite-svelte/commit/4c0ca77eddfae2a04d10bc1ea3dc53671864b181))
- workaround for scroll to anchor ([#923](https://github.com/themesberg/flowbite-svelte/issues/923)) ([01acc0d](https://github.com/themesberg/flowbite-svelte/commit/01acc0dbb31ae9775ce819dd6f1ec58b66b76bb2))
- workaround for scroll to anchor ([#923](https://github.com/themesberg/flowbite-svelte/issues/923)) ([0091171](https://github.com/themesberg/flowbite-svelte/commit/0091171a7544b90ced1492039518d4932d62a3a6))
- wrong label class name ([39735b3](https://github.com/themesberg/flowbite-svelte/commit/39735b3a85285bd69d064aef22145d60d278da46))

- Merge branch 'jjagielka-tooltip' ([1c37601](https://github.com/themesberg/flowbite-svelte/commit/1c3760139e24569287891c1ca3f67f2e0e3b9168))
- accordion color option ([#948](https://github.com/themesberg/flowbite-svelte/issues/948)) ([9c2305b](https://github.com/themesberg/flowbite-svelte/commit/9c2305bb6168e7b658489a8b0055deaad241fd0f))

### [0.41.2](https://github.com/themesberg/flowbite-svelte/compare/v0.41.0...v0.41.2) (2023-08-06)

## [0.41.0](https://github.com/themesberg/flowbite-svelte/compare/v0.40.2...v0.41.0) (2023-08-06)

### ⚠ BREAKING CHANGES

- change the Tabs component props

- Revert "feat: change tabs variant to styles"

This reverts commit c949b82f02f8adad2a2d172e602ce5774ae3bca6.

### Features

- [#966](https://github.com/themesberg/flowbite-svelte/issues/966) ([#968](https://github.com/themesberg/flowbite-svelte/issues/968)) ([2b4503a](https://github.com/themesberg/flowbite-svelte/commit/2b4503a148f74b3982e3c4f65c2b19d11c13fbfc))
- export open in speeddial ([#960](https://github.com/themesberg/flowbite-svelte/issues/960)) ([7dff563](https://github.com/themesberg/flowbite-svelte/commit/7dff5630dfd482a828c45611f129c432b94908de))

### Bug Fixes

- [#952](https://github.com/themesberg/flowbite-svelte/issues/952) multiselect ([#954](https://github.com/themesberg/flowbite-svelte/issues/954)) ([cd37db1](https://github.com/themesberg/flowbite-svelte/commit/cd37db16d97884171f059273be9c62f260777c9b))
- [#958](https://github.com/themesberg/flowbite-svelte/issues/958) ([#959](https://github.com/themesberg/flowbite-svelte/issues/959)) ([e238349](https://github.com/themesberg/flowbite-svelte/commit/e238349576f535122e87f09ded63a76b831ffc98))
- border color on popup examples ([#969](https://github.com/themesberg/flowbite-svelte/issues/969)) ([049d1a3](https://github.com/themesberg/flowbite-svelte/commit/049d1a3604d1b9c44719f9b998c611b1ea633073))
- docs typo - tooltip type ([#956](https://github.com/themesberg/flowbite-svelte/issues/956)) ([cde7b8e](https://github.com/themesberg/flowbite-svelte/commit/cde7b8e9a5c8cbccfa6d4f6ed0c59e9aa8ea6f6f))
- events for gradient button ([#967](https://github.com/themesberg/flowbite-svelte/issues/967)) ([fda337b](https://github.com/themesberg/flowbite-svelte/commit/fda337ba28ad6081bb15ab93108b699d8ab001c0))

- accordion color option ([#948](https://github.com/themesberg/flowbite-svelte/issues/948)) ([9c2305b](https://github.com/themesberg/flowbite-svelte/commit/9c2305bb6168e7b658489a8b0055deaad241fd0f))

### [0.40.2](https://github.com/themesberg/flowbite-svelte/compare/v0.40.1...v0.40.2) (2023-07-24)

### Features

- allow customization of body class in Modal component ([#945](https://github.com/themesberg/flowbite-svelte/issues/945)) ([72514ec](https://github.com/themesberg/flowbite-svelte/commit/72514ec631712d2c6bf9b94515f0a76b23759706))
- allow customization of innerWrapperClass for Textarea ([#929](https://github.com/themesberg/flowbite-svelte/issues/929)) ([8869fbf](https://github.com/themesberg/flowbite-svelte/commit/8869fbfe36dd012ff653b5dba522119927897e2a))

### Bug Fixes

- [#937](https://github.com/themesberg/flowbite-svelte/issues/937) ([#943](https://github.com/themesberg/flowbite-svelte/issues/943)) ([442ab65](https://github.com/themesberg/flowbite-svelte/commit/442ab650ca14fd75094dcb85f2774f714be4394b))
- Added events to BottomNavHeaderItem ([#941](https://github.com/themesberg/flowbite-svelte/issues/941)) ([ebdcbeb](https://github.com/themesberg/flowbite-svelte/commit/ebdcbebed7737b26ff0552e964149b8de05771d4))
- Added z-50 to dropdown container so it always stays on top ([#942](https://github.com/themesberg/flowbite-svelte/issues/942)) ([e3de343](https://github.com/themesberg/flowbite-svelte/commit/e3de343fae29257e8588c8515eaaa5e6521a2488))
- **dropzone:** fixes dragging file over the input ([#919](https://github.com/themesberg/flowbite-svelte/issues/919)) ([5f02261](https://github.com/themesberg/flowbite-svelte/commit/5f02261a36a22e48e4f0fa3c5a0fe47f65eb2ccc))
- paragraph page ([98b2dab](https://github.com/themesberg/flowbite-svelte/commit/98b2dabe767cc3e8afa652bd0706dd590997bba6))

### [0.40.1](https://github.com/themesberg/flowbite-svelte/compare/v0.39.3...v0.40.1) (2023-07-17)

### Bug Fixes

- [#931](https://github.com/themesberg/flowbite-svelte/issues/931) ([#932](https://github.com/themesberg/flowbite-svelte/issues/932)) ([d56bc55](https://github.com/themesberg/flowbite-svelte/commit/d56bc5561f33d2f7b8c9df647b28b222b0ea6a47))

### [0.39.3](https://github.com/themesberg/flowbite-svelte/compare/v0.39.2...v0.39.3) (2023-07-14)

### Features

- pagination large ([#895](https://github.com/themesberg/flowbite-svelte/issues/895)) ([a5cd87a](https://github.com/themesberg/flowbite-svelte/commit/a5cd87a2bfed6ce25c39969be401458dda2259c3))

### Bug Fixes

- [#905](https://github.com/themesberg/flowbite-svelte/issues/905) ([#913](https://github.com/themesberg/flowbite-svelte/issues/913)) ([85d8d43](https://github.com/themesberg/flowbite-svelte/commit/85d8d43b7b69c3d9050a56dca6d947f4dcc047b2))
- [#909](https://github.com/themesberg/flowbite-svelte/issues/909) ([#911](https://github.com/themesberg/flowbite-svelte/issues/911)) ([85b10d1](https://github.com/themesberg/flowbite-svelte/commit/85b10d16c430fea282e4cdb977003a710e6c552b))
- [#910](https://github.com/themesberg/flowbite-svelte/issues/910) ([#912](https://github.com/themesberg/flowbite-svelte/issues/912)) ([ccaa4b6](https://github.com/themesberg/flowbite-svelte/commit/ccaa4b6772a3d8b24aba0a8fc4a1e25c148f9e86))
- initial dark mode ([#924](https://github.com/themesberg/flowbite-svelte/issues/924)) ([103bf6a](https://github.com/themesberg/flowbite-svelte/commit/103bf6a7ab1eb24003c09ac93fff574d4ae170ad))
- **Input:** Use a reactive spread instead of custom action to set Input `type` attribute ([#921](https://github.com/themesberg/flowbite-svelte/issues/921)) ([165e273](https://github.com/themesberg/flowbite-svelte/commit/165e273357efa57d35e8f7a268ad5bc5e725d565))
- playwright and lint yaml 1.36.0 ([4c96d64](https://github.com/themesberg/flowbite-svelte/commit/4c96d6497224cbfc30bbb4cdfedf6fd4f44d1f47))
- use reactive spread ([#927](https://github.com/themesberg/flowbite-svelte/issues/927)) ([a743782](https://github.com/themesberg/flowbite-svelte/commit/a743782a0430680dea1ce072664494db886834fd))
- workaround for scroll to anchor ([#923](https://github.com/themesberg/flowbite-svelte/issues/923)) ([0091171](https://github.com/themesberg/flowbite-svelte/commit/0091171a7544b90ced1492039518d4932d62a3a6))

### [0.39.2](https://github.com/themesberg/flowbite-svelte/compare/v0.39.1...v0.39.2) (2023-07-03)

### Features

- **docs:** improve docs components ([#889](https://github.com/themesberg/flowbite-svelte/issues/889)) ([0b82e2f](https://github.com/themesberg/flowbite-svelte/commit/0b82e2f1f08f047969a7f1b7c06b3982b3abca03))

### Bug Fixes

- $$props.class ([#890](https://github.com/themesberg/flowbite-svelte/issues/890)) ([8d90322](https://github.com/themesberg/flowbite-svelte/commit/8d90322eb0fbddfb626f9f3b89c53afcf5bacfc7))
- add shrink-0 to prevent toggle UI from shrinking on small screen sizes ([#885](https://github.com/themesberg/flowbite-svelte/issues/885)) ([81c65bd](https://github.com/themesberg/flowbite-svelte/commit/81c65bde22a3f12ad3980658a9e919c6fd92898d))
- **multi-select:** pre-select values fix ([#892](https://github.com/themesberg/flowbite-svelte/issues/892)) ([e399248](https://github.com/themesberg/flowbite-svelte/commit/e399248dc4503f37b281535acbfa965f3f88ecec))
- transitions in drawer ([#881](https://github.com/themesberg/flowbite-svelte/issues/881)) ([90319b3](https://github.com/themesberg/flowbite-svelte/commit/90319b3d5237ca896c5ea971f77c776d678ebb05))
- transitions in frame ([#883](https://github.com/themesberg/flowbite-svelte/issues/883)) ([079ca87](https://github.com/themesberg/flowbite-svelte/commit/079ca8795814e7c3b482cfb27ddfec5fd23fc683))

### [0.39.1](https://github.com/themesberg/flowbite-svelte/compare/v0.38.5...v0.39.1) (2023-06-28)

### Features

- run svelte-migrate ([d4d7c48](https://github.com/themesberg/flowbite-svelte/commit/d4d7c48fbf7fab165e6cc491d52085ab5503ebbb))
- upgrade deps ([5a61709](https://github.com/themesberg/flowbite-svelte/commit/5a61709c7d748af7e9f5dcc73e4c49b30c5a9e44))

### Bug Fixes

- add button role if it is a link ([e481587](https://github.com/themesberg/flowbite-svelte/commit/e481587edfb3236aae6f76a285ebe51bfc6ae260))
- add button role if pag item is link ([0192784](https://github.com/themesberg/flowbite-svelte/commit/019278438c84d594c8b7d352a340a38bb49f4934))
- add button role to multiselect svg ([13cf560](https://github.com/themesberg/flowbite-svelte/commit/13cf560cf49f138b4e375563fd6522cacba23899))
- add ignore to modal ([cedf9f1](https://github.com/themesberg/flowbite-svelte/commit/cedf9f18c60dc0f8db03b56e6c456a0121367f41))
- add listbox role to multiselect ([66ed95e](https://github.com/themesberg/flowbite-svelte/commit/66ed95e96bb5526b7b0a6840fa92ed9b51de1850))
- add option role with aria-selected ([d4d5561](https://github.com/themesberg/flowbite-svelte/commit/d4d556192d7c9baada02fb42fb2734afd1eed7f7))
- add role prop to frame ([53c816f](https://github.com/themesberg/flowbite-svelte/commit/53c816f4136a3efde1d5ea80f7908994a0e621c8))
- add role to drawer ([d40f812](https://github.com/themesberg/flowbite-svelte/commit/d40f8127265fc397bef0b8868c3771f4d47a2230))
- add role to sidebar menu svg ([1c3fd48](https://github.com/themesberg/flowbite-svelte/commit/1c3fd4843391581874a3852989cfe20219c8636f))
- change option role for multiselect ([601945f](https://github.com/themesberg/flowbite-svelte/commit/601945f3772e565eb0d099ac38495f6fb40d7afc))
- move transitions to local ([f060cba](https://github.com/themesberg/flowbite-svelte/commit/f060cba164501e0810934b88e8f4e22a784eeca6))
- ts item type in megamenu ([c0ee437](https://github.com/themesberg/flowbite-svelte/commit/c0ee437ba3f04142e276f09e9f7301800828301f))
- typo ([c9f71f2](https://github.com/themesberg/flowbite-svelte/commit/c9f71f294bfaeea90b50d503b99b49b344ba8921))
- update deps ([d204667](https://github.com/themesberg/flowbite-svelte/commit/d20466715709bd4817277bb6eeaed8f1cb0c4002))

### [0.38.5](https://github.com/themesberg/flowbite-svelte/compare/v0.38.4...v0.38.5) (2023-06-21)

### Features

- add twMerge to timeline components ([e993e72](https://github.com/themesberg/flowbite-svelte/commit/e993e72c1524bbd4c64e61d48cd3307a8a833ec4))

### [0.38.4](https://github.com/themesberg/flowbite-svelte/compare/v0.38.3...v0.38.4) (2023-06-20)

### [0.38.3](https://github.com/themesberg/flowbite-svelte/compare/v0.37.5...v0.38.3) (2023-06-19)

### Features

- add active class to BottomNav and BottomNavItem ([0d5d9e3](https://github.com/themesberg/flowbite-svelte/commit/0d5d9e3ff42d312105f5209ec4d91771bb8e40d7))
- add additional classes where components has more than one twMerge ([77769cc](https://github.com/themesberg/flowbite-svelte/commit/77769cc2dc67ffc61997c62e8f1107f4d2bc1bab))
- add classActive to BottomNav ([06bf5dc](https://github.com/themesberg/flowbite-svelte/commit/06bf5dc2d284c475c81ae6a379831aaeb42c028d))
- add classPlaceholder to avatar component ([d4bc2d7](https://github.com/themesberg/flowbite-svelte/commit/d4bc2d70c87e879fa188831eb524a45ca2d43ab1))
- add on:click to A component ([0828612](https://github.com/themesberg/flowbite-svelte/commit/08286129bfc70d0bbe52df01c431ae3fb9f2ea13))
- add search on home page ([3cba1fd](https://github.com/themesberg/flowbite-svelte/commit/3cba1fd3d61d934c78046841551bcb7b702b8597))
- replace all components classnames to twMerge ([6d0ec87](https://github.com/themesberg/flowbite-svelte/commit/6d0ec8703bff2af91be1e656eb1f71b6f42ea920))
- replace classnames to twMerge and twJoin ([342ae23](https://github.com/themesberg/flowbite-svelte/commit/342ae231b3552fc11f44b0fa9c9bc968d7193672))
- replace classnames to twMerge and twJoin upto Card ([6ab1278](https://github.com/themesberg/flowbite-svelte/commit/6ab1278cf9e5c45e7be2b2a532f0f469116aa3d3))
- replace classnames to twMerge and twJoin upto Footer ([799fd01](https://github.com/themesberg/flowbite-svelte/commit/799fd011c3246a220492ca59c84716b935e6aea1))
- replace classnames to twMerge upto Progressbar ([a2ba25b](https://github.com/themesberg/flowbite-svelte/commit/a2ba25b566a0049025f8f6f7c5f7046e0b8dfdae))
- replace classnames to twMerge upto TableSearch ([1307d58](https://github.com/themesberg/flowbite-svelte/commit/1307d589f82e7c20079640cbe90bc29e0c33e57b))
- replace classnames to twMerge upto Toggle ([57890a6](https://github.com/themesberg/flowbite-svelte/commit/57890a66018c884940f981f5da78f9068e5c1833))
- update docs and remove classnames from package.json ([9ef819b](https://github.com/themesberg/flowbite-svelte/commit/9ef819b24e2188c39d40d84ea60778ea42815a8a))

### Bug Fixes

- add "tailwind-merge": "^1.13.1" to dependencies ([9b5757e](https://github.com/themesberg/flowbite-svelte/commit/9b5757e25c12b0394f08aa5476e21312d858c6c7))
- add height to Input-field dropdown demo ([b43f8fc](https://github.com/themesberg/flowbite-svelte/commit/b43f8fcaa1142035c92251d845590d0f682db59b))
- Alert, GradientButton and Footer ([ccd2954](https://github.com/themesberg/flowbite-svelte/commit/ccd2954c444681e50a8b065ce25f2d3b484f7faa))
- Checkbox spacing ([9f989d7](https://github.com/themesberg/flowbite-svelte/commit/9f989d7c0f59cacab8673d05e0abe27cc5906d42))
- chevronup thickness ([dc9016b](https://github.com/themesberg/flowbite-svelte/commit/dc9016bfce4a9e664a1bf6fa79a747764b35f911))
- DeviceMockup class ([94064d0](https://github.com/themesberg/flowbite-svelte/commit/94064d0c28766118db639e5d61181dff58e6756d))
- Input and Radio components ([fd49114](https://github.com/themesberg/flowbite-svelte/commit/fd49114e343c3a66c7ef257ba41d5354b99707d1))
- remove NavDropdown ([5c77f68](https://github.com/themesberg/flowbite-svelte/commit/5c77f68c097498a8ecbe10eaf5c8a8e3c1d2b187))
- update Alert and workflows playwright version ([670516d](https://github.com/themesberg/flowbite-svelte/commit/670516da7f979153e2d4c1b72313f8f2ac0f3bfa))

### [0.38.2](https://github.com/themesberg/flowbite-svelte/compare/v0.38.1...v0.38.2) (2023-06-14)

### Features

- add additional classes where components has more than one twMerge ([77769cc](https://github.com/themesberg/flowbite-svelte/commit/77769cc2dc67ffc61997c62e8f1107f4d2bc1bab))

### [0.38.1](https://github.com/themesberg/flowbite-svelte/compare/v0.34.9...v0.38.1) (2023-06-13)

### Features

- add || ^4.0.0 to peerDependencies ([1211eb8](https://github.com/themesberg/flowbite-svelte/commit/1211eb83cc7f54570363300f744c16bd41962460))
- add button to Thumbnail and move the on:click event listener to button ([c9119c7](https://github.com/themesberg/flowbite-svelte/commit/c9119c7bcf772215b63f546761f28f6fd2a271ef))
- add events to tableheadcell and tablebodycell components ([#761](https://github.com/themesberg/flowbite-svelte/issues/761)) ([cb056aa](https://github.com/themesberg/flowbite-svelte/commit/cb056aaeaa01044241ad6fa7e700256b28cb5834))
- add initialTheme to DarkMode component ([#776](https://github.com/themesberg/flowbite-svelte/issues/776)) ([5110499](https://github.com/themesberg/flowbite-svelte/commit/51104993239b410305e956b1af2204b4e3d37d66))
- add mockups in package.json ([cfc32d5](https://github.com/themesberg/flowbite-svelte/commit/cfc32d5bb7822fda5c6170285a9f31bd907842df))
- add primary to Checkbox ([b6063c6](https://github.com/themesberg/flowbite-svelte/commit/b6063c6925bd036676061d80a8c9ed78efda6f5c))
- add role to ChevronLeft ([0fc996e](https://github.com/themesberg/flowbite-svelte/commit/0fc996e9414471366fc7d18315434b6e4778aa85))
- add role to DropdownItem ([663ee33](https://github.com/themesberg/flowbite-svelte/commit/663ee3369b69fd7557963da10be2a8dac1ae2aed))
- add role to Menu compo ([7a76025](https://github.com/themesberg/flowbite-svelte/commit/7a760257a43fb0e0638f00531813fdb84f0f36db))
- add role to Modal ([ea79fff](https://github.com/themesberg/flowbite-svelte/commit/ea79fffea37ea32681a42afeb1dd500207953335))
- add role to NavUl and NavLi ([08732dd](https://github.com/themesberg/flowbite-svelte/commit/08732dda1247ce68f2218a9e742ecc6e54f28f68))
- add role to Star, Button, Heart, Thumbup, ChevronDown, CehvronRight, ChevronUp, InformationCirlc, and UserCircle components ([82337b2](https://github.com/themesberg/flowbite-svelte/commit/82337b2aac57730046a08a42f4272b8b82c22552))
- add role to TableBodyCell and change td to svelte:element ([67de66c](https://github.com/themesberg/flowbite-svelte/commit/67de66c010567cccb4a4e9781ab71c23e9b72021))
- **config:** fix default bg-primary-50 color ([7d89f57](https://github.com/themesberg/flowbite-svelte/commit/7d89f572b934f3da843bca3f4f162939c1bb2768))
- darkmode fix for refreshing a browser ([#784](https://github.com/themesberg/flowbite-svelte/issues/784)) ([aac2187](https://github.com/themesberg/flowbite-svelte/commit/aac218711967ba63ee139ef7f5370dd43993c709))
- dependencies update ([b1866b8](https://github.com/themesberg/flowbite-svelte/commit/b1866b8dc5ecc55cc0c343d663537439664cf7a8))
- devicemockup ([#778](https://github.com/themesberg/flowbite-svelte/issues/778)) ([fec1f4c](https://github.com/themesberg/flowbite-svelte/commit/fec1f4caa5da33259766312dda95a7fdaeb291eb))
- documenting components ([#801](https://github.com/themesberg/flowbite-svelte/issues/801)) ([80daafb](https://github.com/themesberg/flowbite-svelte/commit/80daafb221f49410d861d6efe5652b977faba513))
- GetStarted element ([#681](https://github.com/themesberg/flowbite-svelte/issues/681)) ([cd381b7](https://github.com/themesberg/flowbite-svelte/commit/cd381b75c4589582eba7b5d4e945ca78f2884ec6))
- home page cta ([#689](https://github.com/themesberg/flowbite-svelte/issues/689)) ([76d7eb5](https://github.com/themesberg/flowbite-svelte/commit/76d7eb5454fb04c3e7d2a6e048dc46e870050902))
- **input:** update blue to primary color focus ([f155ec5](https://github.com/themesberg/flowbite-svelte/commit/f155ec588fc52e30383368b2700dbb28be3bbb6d))
- newsletter form ([#674](https://github.com/themesberg/flowbite-svelte/issues/674)) ([89df011](https://github.com/themesberg/flowbite-svelte/commit/89df011c684bf8829b3f15c38fec4b727d62303d))
- prev/next buttons ([#675](https://github.com/themesberg/flowbite-svelte/issues/675)) ([590e423](https://github.com/themesberg/flowbite-svelte/commit/590e423396a9d42ad56593f9131b2107ad1ec2fe))
- replace all components classnames to twMerge ([6d0ec87](https://github.com/themesberg/flowbite-svelte/commit/6d0ec8703bff2af91be1e656eb1f71b6f42ea920))
- replace classnames to twMerge and twJoin ([342ae23](https://github.com/themesberg/flowbite-svelte/commit/342ae231b3552fc11f44b0fa9c9bc968d7193672))
- replace classnames to twMerge and twJoin upto Card ([6ab1278](https://github.com/themesberg/flowbite-svelte/commit/6ab1278cf9e5c45e7be2b2a532f0f469116aa3d3))
- replace classnames to twMerge and twJoin upto Footer ([799fd01](https://github.com/themesberg/flowbite-svelte/commit/799fd011c3246a220492ca59c84716b935e6aea1))
- replace classnames to twMerge upto Progressbar ([a2ba25b](https://github.com/themesberg/flowbite-svelte/commit/a2ba25b566a0049025f8f6f7c5f7046e0b8dfdae))
- replace classnames to twMerge upto TableSearch ([1307d58](https://github.com/themesberg/flowbite-svelte/commit/1307d589f82e7c20079640cbe90bc29e0c33e57b))
- replace classnames to twMerge upto Toggle ([57890a6](https://github.com/themesberg/flowbite-svelte/commit/57890a66018c884940f981f5da78f9068e5c1833))
- slightly shorter version of redirection hooks ([#673](https://github.com/themesberg/flowbite-svelte/issues/673)) ([635e1e3](https://github.com/themesberg/flowbite-svelte/commit/635e1e38e2ac83d82982ff048d2a2f230c483389))
- social proof ([#686](https://github.com/themesberg/flowbite-svelte/issues/686)) ([4567ee2](https://github.com/themesberg/flowbite-svelte/commit/4567ee2209263eb1aed2ddd712b8de651e044641))
- trim number of components ([#709](https://github.com/themesberg/flowbite-svelte/issues/709)) ([8723242](https://github.com/themesberg/flowbite-svelte/commit/87232427dc255cda4a11dc2fef5228c124cfc4ee))
- typescript types for frame subclasses ([#731](https://github.com/themesberg/flowbite-svelte/issues/731)) ([6dd9877](https://github.com/themesberg/flowbite-svelte/commit/6dd9877a7b667e895c02b79e86a2c3ce88eb608c))
- update docs and remove classnames from package.json ([9ef819b](https://github.com/themesberg/flowbite-svelte/commit/9ef819b24e2188c39d40d84ea60778ea42815a8a))
- update Dropzone and docs ([2467d22](https://github.com/themesberg/flowbite-svelte/commit/2467d222b7c172a8985ad6c8b6d683564ec07dc5))
- update Rating component ([#772](https://github.com/themesberg/flowbite-svelte/issues/772)) ([0d9636f](https://github.com/themesberg/flowbite-svelte/commit/0d9636fa119a77a01f8ab30ff9f38aaa5753e914))

### Bug Fixes

- [#534](https://github.com/themesberg/flowbite-svelte/issues/534) list group typing ([#805](https://github.com/themesberg/flowbite-svelte/issues/805)) ([95861f4](https://github.com/themesberg/flowbite-svelte/commit/95861f4f046c5c6b4127dd5f5120581346531831))
- [#774](https://github.com/themesberg/flowbite-svelte/issues/774) ([#822](https://github.com/themesberg/flowbite-svelte/issues/822)) ([b1bca6b](https://github.com/themesberg/flowbite-svelte/commit/b1bca6b6483bf9e345ef3a60fa5f9d545ee77527))
- [#781](https://github.com/themesberg/flowbite-svelte/issues/781) tooltip arrow ([#804](https://github.com/themesberg/flowbite-svelte/issues/804)) ([2bd8938](https://github.com/themesberg/flowbite-svelte/commit/2bd8938d6b864f9294ee897c1ce6edc4b8ec08ab))
- [#818](https://github.com/themesberg/flowbite-svelte/issues/818) ([#821](https://github.com/themesberg/flowbite-svelte/issues/821)) ([4050456](https://github.com/themesberg/flowbite-svelte/commit/4050456f270abb335b96b5cf65a0ea7eed200fdd))
- [#836](https://github.com/themesberg/flowbite-svelte/issues/836) ([c727c98](https://github.com/themesberg/flowbite-svelte/commit/c727c982cff9c28251a052b2bda1fee496fd62a6))
- +layout.server ([#808](https://github.com/themesberg/flowbite-svelte/issues/808)) ([cf1e551](https://github.com/themesberg/flowbite-svelte/commit/cf1e551690de641ec493933581ac1fc36e124d1d))
- accordion gap ([#735](https://github.com/themesberg/flowbite-svelte/issues/735)) ([431b532](https://github.com/themesberg/flowbite-svelte/commit/431b5323a49530c6791579d71dae30312c46cb8e))
- add "tailwind-merge": "^1.13.1" to dependencies ([9b5757e](https://github.com/themesberg/flowbite-svelte/commit/9b5757e25c12b0394f08aa5476e21312d858c6c7))
- add auto-install-peers=true to .npmrc ([fd439d0](https://github.com/themesberg/flowbite-svelte/commit/fd439d0613ec2a39e747936cf1bd9f557e2cb093))
- add device-mockups svg images ([#779](https://github.com/themesberg/flowbite-svelte/issues/779)) ([5ce3506](https://github.com/themesberg/flowbite-svelte/commit/5ce3506374e2cf1b19cf2d13faf28c742355fcb3))
- add event forwarding to Frame component in Card component. ([6ce4b6b](https://github.com/themesberg/flowbite-svelte/commit/6ce4b6b12f099a0a9600b9be34ed02ac6557ebf2))
- add GetStarted ([d1c0424](https://github.com/themesberg/flowbite-svelte/commit/d1c042470ff943884c77ccd4917eac399f9ba072))
- add height to Input-field dropdown demo ([b43f8fc](https://github.com/themesberg/flowbite-svelte/commit/b43f8fcaa1142035c92251d845590d0f682db59b))
- add modalId prop for Modal ([b2f8187](https://github.com/themesberg/flowbite-svelte/commit/b2f81872f7b5d5fdf1cc6d33be06b66b197027c3))
- add primary to button and starUpClass and starDownClass to rating ([#745](https://github.com/themesberg/flowbite-svelte/issues/745)) ([da09182](https://github.com/themesberg/flowbite-svelte/commit/da091824d218f04bf4127f43c51a056abf0855fc))
- add svelte inspector and update dependencies ([aa530f4](https://github.com/themesberg/flowbite-svelte/commit/aa530f4f8c33493a949bf0c52c279c06042a1897))
- add svelte-ignore a11y-click-events ([b021c83](https://github.com/themesberg/flowbite-svelte/commit/b021c839282c9f1ab7f25418de1e1cedeb9ef433))
- add svelte-ignore a11y-click-events to Button compo ([1c960ee](https://github.com/themesberg/flowbite-svelte/commit/1c960ee7bbbdf4750bc784e5dd10117b85f54156))
- alert props ([#760](https://github.com/themesberg/flowbite-svelte/issues/760)) ([90c3055](https://github.com/themesberg/flowbite-svelte/commit/90c305596f07c4c9da970dee3ec78a5fff3e83f8))
- Alert, GradientButton and Footer ([ccd2954](https://github.com/themesberg/flowbite-svelte/commit/ccd2954c444681e50a8b065ce25f2d3b484f7faa))
- Checkbox spacing ([9f989d7](https://github.com/themesberg/flowbite-svelte/commit/9f989d7c0f59cacab8673d05e0abe27cc5906d42))
- CTA should have tinted background ([#708](https://github.com/themesberg/flowbite-svelte/issues/708)) ([ecb5c4c](https://github.com/themesberg/flowbite-svelte/commit/ecb5c4c12db278fccb8c02b84298ba2ef90b18df))
- dark-mode in examples ([#683](https://github.com/themesberg/flowbite-svelte/issues/683)) ([cde56c4](https://github.com/themesberg/flowbite-svelte/commit/cde56c44a9b20e806655f427fff32990db03f0f3))
- darkmode flicker ([#811](https://github.com/themesberg/flowbite-svelte/issues/811)) ([94b1f6b](https://github.com/themesberg/flowbite-svelte/commit/94b1f6bd9fb7341a9b3791633daf2217e2c3017d))
- dependencies update ([#685](https://github.com/themesberg/flowbite-svelte/issues/685)) ([f017a73](https://github.com/themesberg/flowbite-svelte/commit/f017a738fc38633e8b95ea135b8438b7f67f8554))
- duplicated lines in app.postcss ([1eb255a](https://github.com/themesberg/flowbite-svelte/commit/1eb255a30f57213eaa7c8d3e14cb7ac704c25f82))
- few more to 'npm run check' ([#738](https://github.com/themesberg/flowbite-svelte/issues/738)) ([ae33d4a](https://github.com/themesberg/flowbite-svelte/commit/ae33d4ab5d0cdc6649295e3f3fe1ae0063fe86d3))
- generate a unique id for each star so fill can be different ([#793](https://github.com/themesberg/flowbite-svelte/issues/793)) ([cf59ed2](https://github.com/themesberg/flowbite-svelte/commit/cf59ed251bbbf17b3172decd5b74535499cef452))
- github workflow comment out pnpm cache ([5284b8c](https://github.com/themesberg/flowbite-svelte/commit/5284b8c3c1b43b7f7d28f0800dc2cddcc0ff9d9c))
- hover on gradient outline button ([#742](https://github.com/themesberg/flowbite-svelte/issues/742)) ([6d7da15](https://github.com/themesberg/flowbite-svelte/commit/6d7da15de9d5a3f9e2b85a05944d148967019bcf))
- initial refresh fix ([#693](https://github.com/themesberg/flowbite-svelte/issues/693)) ([7479934](https://github.com/themesberg/flowbite-svelte/commit/7479934dc83bdbe0197fac7c0dbe7d817bf1d6e5))
- Input and Radio components ([fd49114](https://github.com/themesberg/flowbite-svelte/commit/fd49114e343c3a66c7ef257ba41d5354b99707d1))
- input component value type to any ([#730](https://github.com/themesberg/flowbite-svelte/issues/730)) ([048caa0](https://github.com/themesberg/flowbite-svelte/commit/048caa0ddd2418e3feff4963f0540b269eb7cb27))
- issue [#790](https://github.com/themesberg/flowbite-svelte/issues/790) ([#802](https://github.com/themesberg/flowbite-svelte/issues/802)) ([9c79555](https://github.com/themesberg/flowbite-svelte/commit/9c7955578463904c1e066d7f04cd676a1e856e01))
- issue 786 ([#803](https://github.com/themesberg/flowbite-svelte/issues/803)) ([3e348ba](https://github.com/themesberg/flowbite-svelte/commit/3e348badc30779c8da222c3ee361afe5b14d6e95))
- issue783 ([#809](https://github.com/themesberg/flowbite-svelte/issues/809)) ([112bd25](https://github.com/themesberg/flowbite-svelte/commit/112bd25f7903da72332159fdc5edf6aad1e7536d))
- issue812 ([#814](https://github.com/themesberg/flowbite-svelte/issues/814)) ([c74c026](https://github.com/themesberg/flowbite-svelte/commit/c74c026e7bfd8d3a6f5ed0fe39de2a42b0e6c9b2))
- links in DesignFigma ([22a40ea](https://github.com/themesberg/flowbite-svelte/commit/22a40ea13e202bb7a9b21ba2d94c53f2468649ba))
- lock file ([b24ac8d](https://github.com/themesberg/flowbite-svelte/commit/b24ac8d52ab7a87c2d52a0e189988dc949f2f5d5))
- lock file ([6144fd3](https://github.com/themesberg/flowbite-svelte/commit/6144fd3da66eeec36ab663938cf59dce0b3a156d))
- Modal and Button compo ([5f3128a](https://github.com/themesberg/flowbite-svelte/commit/5f3128aaf26f7383ec32135411ea1607a566d114))
- modal update ([#791](https://github.com/themesberg/flowbite-svelte/issues/791)) ([2bd095f](https://github.com/themesberg/flowbite-svelte/commit/2bd095f1f197783f0c4161bda3c22ebd6008859a))
- more ts check corrections ([#740](https://github.com/themesberg/flowbite-svelte/issues/740)) ([f95f1d4](https://github.com/themesberg/flowbite-svelte/commit/f95f1d44da76fbaa9d49fec1a52c000e5509617c))
- move @docsearch/js to devDependencies ([168a79f](https://github.com/themesberg/flowbite-svelte/commit/168a79fce52050b437fbde32c95bf17329616b21))
- playwright v1.34.0 in workflow ([e12c5ff](https://github.com/themesberg/flowbite-svelte/commit/e12c5ff81f0af3b74b6424fb63845649d80ac8cb))
- props and update them ([#715](https://github.com/themesberg/flowbite-svelte/issues/715)) ([3f952b4](https://github.com/themesberg/flowbite-svelte/commit/3f952b41852f5a2b7662e4718a10bab225e060a6))
- rating component update ([#773](https://github.com/themesberg/flowbite-svelte/issues/773)) ([f031395](https://github.com/themesberg/flowbite-svelte/commit/f031395353208a1bade6148dbafd11c9c1632afc))
- reinstall after removing lock file ([45ef63c](https://github.com/themesberg/flowbite-svelte/commit/45ef63cc25129c62c6b78477a563a111d1745f32))
- remove debris from the last PR ([902a172](https://github.com/themesberg/flowbite-svelte/commit/902a1722ea11375df3d7670c0bd25ddc7fec504a))
- remove package-lock.json and add package-lock.json to .gitignore ([b1f0fc4](https://github.com/themesberg/flowbite-svelte/commit/b1f0fc4c8d093668676b27fd845d1f89c2812a52))
- remove peerDependencies ([#810](https://github.com/themesberg/flowbite-svelte/issues/810)) ([e940033](https://github.com/themesberg/flowbite-svelte/commit/e94003300ff016ffe565a167e45714b9091ce495))
- removed duplicated folder "alert" ([#734](https://github.com/themesberg/flowbite-svelte/issues/734)) ([4c8f32a](https://github.com/themesberg/flowbite-svelte/commit/4c8f32aad85593bd9a2666ec0d22c77e41463291))
- revert package:publish ([515e9f4](https://github.com/themesberg/flowbite-svelte/commit/515e9f416f44754aa4794e2baca3ac3401b59100))
- sidebar activeUrl update by adding docs/ ([#754](https://github.com/themesberg/flowbite-svelte/issues/754)) ([467b060](https://github.com/themesberg/flowbite-svelte/commit/467b060f2da047d11d227db0f4bfe86fb848b749))
- tooltip style ([#759](https://github.com/themesberg/flowbite-svelte/issues/759)) ([813d1fa](https://github.com/themesberg/flowbite-svelte/commit/813d1fab8092662a2d2f51e95cf387e3352e6ff9))
- typescript declarations for import.meta.glob ([#736](https://github.com/themesberg/flowbite-svelte/issues/736)) ([ef10a06](https://github.com/themesberg/flowbite-svelte/commit/ef10a06785c38504d7b7dd75fccae245c6fa2188))
- typo and update bug_report.yml ([#787](https://github.com/themesberg/flowbite-svelte/issues/787)) ([4ee8a92](https://github.com/themesberg/flowbite-svelte/commit/4ee8a92c5809ea9047141eae7d3aa62b2b8879f4))
- Typo in AccordionItem.svelte ([#741](https://github.com/themesberg/flowbite-svelte/issues/741)) ([149c3b7](https://github.com/themesberg/flowbite-svelte/commit/149c3b7d2ae10d56ce430df386a7a220a59167b2))
- update Alert and workflows playwright version ([670516d](https://github.com/themesberg/flowbite-svelte/commit/670516da7f979153e2d4c1b72313f8f2ac0f3bfa))
- update package:publish script ([8ec3669](https://github.com/themesberg/flowbite-svelte/commit/8ec36699099e0672263f4c44fecd07e3d8ec6313))
- update props ([#749](https://github.com/themesberg/flowbite-svelte/issues/749)) ([445c07e](https://github.com/themesberg/flowbite-svelte/commit/445c07ebadf2432bc6c005a7e78ac7660f6abf40))
- update workflows playwright version ([faafd96](https://github.com/themesberg/flowbite-svelte/commit/faafd96286140631447f1d88d24b0b3e477181e5))

### [0.37.5](https://github.com/themesberg/flowbite-svelte/compare/v0.37.4...v0.37.5) (2023-06-09)

### Features

- **config:** fix default bg-primary-50 color ([7d89f57](https://github.com/themesberg/flowbite-svelte/commit/7d89f572b934f3da843bca3f4f162939c1bb2768))
- **input:** update blue to primary color focus ([f155ec5](https://github.com/themesberg/flowbite-svelte/commit/f155ec588fc52e30383368b2700dbb28be3bbb6d))

### Bug Fixes

- [#836](https://github.com/themesberg/flowbite-svelte/issues/836) ([c727c98](https://github.com/themesberg/flowbite-svelte/commit/c727c982cff9c28251a052b2bda1fee496fd62a6))

### [0.37.4](https://github.com/themesberg/flowbite-svelte/compare/v0.37.3...v0.37.4) (2023-06-03)

### Features

- add || ^4.0.0 to peerDependencies ([1211eb8](https://github.com/themesberg/flowbite-svelte/commit/1211eb83cc7f54570363300f744c16bd41962460))
- add button to Thumbnail and move the on:click event listener to button ([c9119c7](https://github.com/themesberg/flowbite-svelte/commit/c9119c7bcf772215b63f546761f28f6fd2a271ef))
- add role to ChevronLeft ([0fc996e](https://github.com/themesberg/flowbite-svelte/commit/0fc996e9414471366fc7d18315434b6e4778aa85))
- add role to DropdownItem ([663ee33](https://github.com/themesberg/flowbite-svelte/commit/663ee3369b69fd7557963da10be2a8dac1ae2aed))
- add role to Menu compo ([7a76025](https://github.com/themesberg/flowbite-svelte/commit/7a760257a43fb0e0638f00531813fdb84f0f36db))
- add role to Modal ([ea79fff](https://github.com/themesberg/flowbite-svelte/commit/ea79fffea37ea32681a42afeb1dd500207953335))
- add role to NavUl and NavLi ([08732dd](https://github.com/themesberg/flowbite-svelte/commit/08732dda1247ce68f2218a9e742ecc6e54f28f68))
- add role to Star, Button, Heart, Thumbup, ChevronDown, CehvronRight, ChevronUp, InformationCirlc, and UserCircle components ([82337b2](https://github.com/themesberg/flowbite-svelte/commit/82337b2aac57730046a08a42f4272b8b82c22552))
- add role to TableBodyCell and change td to svelte:element ([67de66c](https://github.com/themesberg/flowbite-svelte/commit/67de66c010567cccb4a4e9781ab71c23e9b72021))
- update Dropzone and docs ([2467d22](https://github.com/themesberg/flowbite-svelte/commit/2467d222b7c172a8985ad6c8b6d683564ec07dc5))

### Bug Fixes

- [#774](https://github.com/themesberg/flowbite-svelte/issues/774) ([#822](https://github.com/themesberg/flowbite-svelte/issues/822)) ([b1bca6b](https://github.com/themesberg/flowbite-svelte/commit/b1bca6b6483bf9e345ef3a60fa5f9d545ee77527))
- [#818](https://github.com/themesberg/flowbite-svelte/issues/818) ([#821](https://github.com/themesberg/flowbite-svelte/issues/821)) ([4050456](https://github.com/themesberg/flowbite-svelte/commit/4050456f270abb335b96b5cf65a0ea7eed200fdd))
- add auto-install-peers=true to .npmrc ([fd439d0](https://github.com/themesberg/flowbite-svelte/commit/fd439d0613ec2a39e747936cf1bd9f557e2cb093))
- add svelte-ignore a11y-click-events ([b021c83](https://github.com/themesberg/flowbite-svelte/commit/b021c839282c9f1ab7f25418de1e1cedeb9ef433))
- add svelte-ignore a11y-click-events to Button compo ([1c960ee](https://github.com/themesberg/flowbite-svelte/commit/1c960ee7bbbdf4750bc784e5dd10117b85f54156))
- github workflow comment out pnpm cache ([5284b8c](https://github.com/themesberg/flowbite-svelte/commit/5284b8c3c1b43b7f7d28f0800dc2cddcc0ff9d9c))
- Modal and Button compo ([5f3128a](https://github.com/themesberg/flowbite-svelte/commit/5f3128aaf26f7383ec32135411ea1607a566d114))
- reinstall after removing lock file ([45ef63c](https://github.com/themesberg/flowbite-svelte/commit/45ef63cc25129c62c6b78477a563a111d1745f32))

### [0.37.3](https://github.com/themesberg/flowbite-svelte/compare/v0.37.2...v0.37.3) (2023-06-01)

### Bug Fixes

- +layout.server ([#808](https://github.com/themesberg/flowbite-svelte/issues/808)) ([cf1e551](https://github.com/themesberg/flowbite-svelte/commit/cf1e551690de641ec493933581ac1fc36e124d1d))
- darkmode flicker ([#811](https://github.com/themesberg/flowbite-svelte/issues/811)) ([94b1f6b](https://github.com/themesberg/flowbite-svelte/commit/94b1f6bd9fb7341a9b3791633daf2217e2c3017d))
- issue783 ([#809](https://github.com/themesberg/flowbite-svelte/issues/809)) ([112bd25](https://github.com/themesberg/flowbite-svelte/commit/112bd25f7903da72332159fdc5edf6aad1e7536d))
- issue812 ([#814](https://github.com/themesberg/flowbite-svelte/issues/814)) ([c74c026](https://github.com/themesberg/flowbite-svelte/commit/c74c026e7bfd8d3a6f5ed0fe39de2a42b0e6c9b2))
- remove peerDependencies ([#810](https://github.com/themesberg/flowbite-svelte/issues/810)) ([e940033](https://github.com/themesberg/flowbite-svelte/commit/e94003300ff016ffe565a167e45714b9091ce495))

### [0.37.2](https://github.com/themesberg/flowbite-svelte/compare/v0.37.1...v0.37.2) (2023-05-29)

### Features

- add primary to Checkbox ([b6063c6](https://github.com/themesberg/flowbite-svelte/commit/b6063c6925bd036676061d80a8c9ed78efda6f5c))

### Bug Fixes

- [#534](https://github.com/themesberg/flowbite-svelte/issues/534) list group typing ([#805](https://github.com/themesberg/flowbite-svelte/issues/805)) ([95861f4](https://github.com/themesberg/flowbite-svelte/commit/95861f4f046c5c6b4127dd5f5120581346531831))
- [#781](https://github.com/themesberg/flowbite-svelte/issues/781) tooltip arrow ([#804](https://github.com/themesberg/flowbite-svelte/issues/804)) ([2bd8938](https://github.com/themesberg/flowbite-svelte/commit/2bd8938d6b864f9294ee897c1ce6edc4b8ec08ab))
- issue [#790](https://github.com/themesberg/flowbite-svelte/issues/790) ([#802](https://github.com/themesberg/flowbite-svelte/issues/802)) ([9c79555](https://github.com/themesberg/flowbite-svelte/commit/9c7955578463904c1e066d7f04cd676a1e856e01))
- issue 786 ([#803](https://github.com/themesberg/flowbite-svelte/issues/803)) ([3e348ba](https://github.com/themesberg/flowbite-svelte/commit/3e348badc30779c8da222c3ee361afe5b14d6e95))

### [0.37.1](https://github.com/themesberg/flowbite-svelte/compare/v0.36.5...v0.37.1) (2023-05-28)

### Features

- documenting components ([#801](https://github.com/themesberg/flowbite-svelte/issues/801)) ([80daafb](https://github.com/themesberg/flowbite-svelte/commit/80daafb221f49410d861d6efe5652b977faba513))

### Bug Fixes

- generate a unique id for each star so fill can be different ([#793](https://github.com/themesberg/flowbite-svelte/issues/793)) ([cf59ed2](https://github.com/themesberg/flowbite-svelte/commit/cf59ed251bbbf17b3172decd5b74535499cef452))
- modal update ([#791](https://github.com/themesberg/flowbite-svelte/issues/791)) ([2bd095f](https://github.com/themesberg/flowbite-svelte/commit/2bd095f1f197783f0c4161bda3c22ebd6008859a))

### [0.36.5](https://github.com/themesberg/flowbite-svelte/compare/v0.36.4...v0.36.5) (2023-05-23)

### Bug Fixes

- move @docsearch/js to devDependencies ([168a79f](https://github.com/themesberg/flowbite-svelte/commit/168a79fce52050b437fbde32c95bf17329616b21))
- typo and update bug_report.yml ([#787](https://github.com/themesberg/flowbite-svelte/issues/787)) ([4ee8a92](https://github.com/themesberg/flowbite-svelte/commit/4ee8a92c5809ea9047141eae7d3aa62b2b8879f4))

### [0.36.4](https://github.com/themesberg/flowbite-svelte/compare/v0.36.3...v0.36.4) (2023-05-21)

### Bug Fixes

- revert package:publish ([515e9f4](https://github.com/themesberg/flowbite-svelte/commit/515e9f416f44754aa4794e2baca3ac3401b59100))

### [0.36.3](https://github.com/themesberg/flowbite-svelte/compare/v0.36.2...v0.36.3) (2023-05-21)

### Features

- add mockups in package.json ([cfc32d5](https://github.com/themesberg/flowbite-svelte/commit/cfc32d5bb7822fda5c6170285a9f31bd907842df))
- darkmode fix for refreshing a browser ([#784](https://github.com/themesberg/flowbite-svelte/issues/784)) ([aac2187](https://github.com/themesberg/flowbite-svelte/commit/aac218711967ba63ee139ef7f5370dd43993c709))
- dependencies update ([b1866b8](https://github.com/themesberg/flowbite-svelte/commit/b1866b8dc5ecc55cc0c343d663537439664cf7a8))

### Bug Fixes

- add device-mockups svg images ([#779](https://github.com/themesberg/flowbite-svelte/issues/779)) ([5ce3506](https://github.com/themesberg/flowbite-svelte/commit/5ce3506374e2cf1b19cf2d13faf28c742355fcb3))
- add modalId prop for Modal ([b2f8187](https://github.com/themesberg/flowbite-svelte/commit/b2f81872f7b5d5fdf1cc6d33be06b66b197027c3))
- playwright v1.34.0 in workflow ([e12c5ff](https://github.com/themesberg/flowbite-svelte/commit/e12c5ff81f0af3b74b6424fb63845649d80ac8cb))
- remove debris from the last PR ([902a172](https://github.com/themesberg/flowbite-svelte/commit/902a1722ea11375df3d7670c0bd25ddc7fec504a))
- update package:publish script ([8ec3669](https://github.com/themesberg/flowbite-svelte/commit/8ec36699099e0672263f4c44fecd07e3d8ec6313))

### [0.36.2](https://github.com/themesberg/flowbite-svelte/compare/v0.35.4...v0.36.2) (2023-05-19)

### Features

- add initialTheme to DarkMode component ([#776](https://github.com/themesberg/flowbite-svelte/issues/776)) ([5110499](https://github.com/themesberg/flowbite-svelte/commit/51104993239b410305e956b1af2204b4e3d37d66))
- devicemockup ([#778](https://github.com/themesberg/flowbite-svelte/issues/778)) ([fec1f4c](https://github.com/themesberg/flowbite-svelte/commit/fec1f4caa5da33259766312dda95a7fdaeb291eb))

### Bug Fixes

- rating component update ([#773](https://github.com/themesberg/flowbite-svelte/issues/773)) ([f031395](https://github.com/themesberg/flowbite-svelte/commit/f031395353208a1bade6148dbafd11c9c1632afc))

### [0.36.1](https://github.com/themesberg/flowbite-svelte/compare/v0.35.4...v0.36.1) (2023-05-19)

### Features

- add initialTheme to DarkMode component ([#776](https://github.com/themesberg/flowbite-svelte/issues/776)) ([5110499](https://github.com/themesberg/flowbite-svelte/commit/51104993239b410305e956b1af2204b4e3d37d66))
- devicemockup ([#778](https://github.com/themesberg/flowbite-svelte/issues/778)) ([fec1f4c](https://github.com/themesberg/flowbite-svelte/commit/fec1f4caa5da33259766312dda95a7fdaeb291eb))

### Bug Fixes

- rating component update ([#773](https://github.com/themesberg/flowbite-svelte/issues/773)) ([f031395](https://github.com/themesberg/flowbite-svelte/commit/f031395353208a1bade6148dbafd11c9c1632afc))

### [0.35.4](https://github.com/themesberg/flowbite-svelte/compare/v0.35.3...v0.35.4) (2023-05-18)

### Features

- update Rating component ([#772](https://github.com/themesberg/flowbite-svelte/issues/772)) ([0d9636f](https://github.com/themesberg/flowbite-svelte/commit/0d9636fa119a77a01f8ab30ff9f38aaa5753e914))

### [0.35.3](https://github.com/themesberg/flowbite-svelte/compare/v0.35.2...v0.35.3) (2023-05-14)

### Features

- add events to tableheadcell and tablebodycell components ([#761](https://github.com/themesberg/flowbite-svelte/issues/761)) ([cb056aa](https://github.com/themesberg/flowbite-svelte/commit/cb056aaeaa01044241ad6fa7e700256b28cb5834))

### [0.35.2](https://github.com/themesberg/flowbite-svelte/compare/v0.35.1...v0.35.2) (2023-05-13)

### Bug Fixes

- alert props ([#760](https://github.com/themesberg/flowbite-svelte/issues/760)) ([90c3055](https://github.com/themesberg/flowbite-svelte/commit/90c305596f07c4c9da970dee3ec78a5fff3e83f8))
- tooltip style ([#759](https://github.com/themesberg/flowbite-svelte/issues/759)) ([813d1fa](https://github.com/themesberg/flowbite-svelte/commit/813d1fab8092662a2d2f51e95cf387e3352e6ff9))

### [0.35.1](https://github.com/themesberg/flowbite-svelte/compare/v0.34.12...v0.35.1) (2023-05-11)

### Features

- typescript types for frame subclasses ([#731](https://github.com/themesberg/flowbite-svelte/issues/731)) ([6dd9877](https://github.com/themesberg/flowbite-svelte/commit/6dd9877a7b667e895c02b79e86a2c3ce88eb608c))

### Bug Fixes

- accordion gap ([#735](https://github.com/themesberg/flowbite-svelte/issues/735)) ([431b532](https://github.com/themesberg/flowbite-svelte/commit/431b5323a49530c6791579d71dae30312c46cb8e))
- add primary to button and starUpClass and starDownClass to rating ([#745](https://github.com/themesberg/flowbite-svelte/issues/745)) ([da09182](https://github.com/themesberg/flowbite-svelte/commit/da091824d218f04bf4127f43c51a056abf0855fc))
- add svelte inspector and update dependencies ([aa530f4](https://github.com/themesberg/flowbite-svelte/commit/aa530f4f8c33493a949bf0c52c279c06042a1897))
- few more to 'npm run check' ([#738](https://github.com/themesberg/flowbite-svelte/issues/738)) ([ae33d4a](https://github.com/themesberg/flowbite-svelte/commit/ae33d4ab5d0cdc6649295e3f3fe1ae0063fe86d3))
- hover on gradient outline button ([#742](https://github.com/themesberg/flowbite-svelte/issues/742)) ([6d7da15](https://github.com/themesberg/flowbite-svelte/commit/6d7da15de9d5a3f9e2b85a05944d148967019bcf))
- input component value type to any ([#730](https://github.com/themesberg/flowbite-svelte/issues/730)) ([048caa0](https://github.com/themesberg/flowbite-svelte/commit/048caa0ddd2418e3feff4963f0540b269eb7cb27))
- more ts check corrections ([#740](https://github.com/themesberg/flowbite-svelte/issues/740)) ([f95f1d4](https://github.com/themesberg/flowbite-svelte/commit/f95f1d44da76fbaa9d49fec1a52c000e5509617c))
- removed duplicated folder "alert" ([#734](https://github.com/themesberg/flowbite-svelte/issues/734)) ([4c8f32a](https://github.com/themesberg/flowbite-svelte/commit/4c8f32aad85593bd9a2666ec0d22c77e41463291))
- sidebar activeUrl update by adding docs/ ([#754](https://github.com/themesberg/flowbite-svelte/issues/754)) ([467b060](https://github.com/themesberg/flowbite-svelte/commit/467b060f2da047d11d227db0f4bfe86fb848b749))
- typescript declarations for import.meta.glob ([#736](https://github.com/themesberg/flowbite-svelte/issues/736)) ([ef10a06](https://github.com/themesberg/flowbite-svelte/commit/ef10a06785c38504d7b7dd75fccae245c6fa2188))
- Typo in AccordionItem.svelte ([#741](https://github.com/themesberg/flowbite-svelte/issues/741)) ([149c3b7](https://github.com/themesberg/flowbite-svelte/commit/149c3b7d2ae10d56ce430df386a7a220a59167b2))
- update props ([#749](https://github.com/themesberg/flowbite-svelte/issues/749)) ([445c07e](https://github.com/themesberg/flowbite-svelte/commit/445c07ebadf2432bc6c005a7e78ac7660f6abf40))
- update workflows playwright version ([faafd96](https://github.com/themesberg/flowbite-svelte/commit/faafd96286140631447f1d88d24b0b3e477181e5))

### [0.34.12](https://github.com/themesberg/flowbite-svelte/compare/v0.34.11...v0.34.12) (2023-05-04)

### Bug Fixes

- add event forwarding to Frame component in Card component. ([6ce4b6b](https://github.com/themesberg/flowbite-svelte/commit/6ce4b6b12f099a0a9600b9be34ed02ac6557ebf2))

### [0.34.11](https://github.com/themesberg/flowbite-svelte/compare/v0.34.10...v0.34.11) (2023-05-04)

### Bug Fixes

- duplicated lines in app.postcss ([1eb255a](https://github.com/themesberg/flowbite-svelte/commit/1eb255a30f57213eaa7c8d3e14cb7ac704c25f82))
- remove package-lock.json and add package-lock.json to .gitignore ([b1f0fc4](https://github.com/themesberg/flowbite-svelte/commit/b1f0fc4c8d093668676b27fd845d1f89c2812a52))

### [0.34.10](https://github.com/themesberg/flowbite-svelte/compare/v0.34.9...v0.34.10) (2023-05-02)

### Features

- GetStarted element ([#681](https://github.com/themesberg/flowbite-svelte/issues/681)) ([cd381b7](https://github.com/themesberg/flowbite-svelte/commit/cd381b75c4589582eba7b5d4e945ca78f2884ec6))
- home page cta ([#689](https://github.com/themesberg/flowbite-svelte/issues/689)) ([76d7eb5](https://github.com/themesberg/flowbite-svelte/commit/76d7eb5454fb04c3e7d2a6e048dc46e870050902))
- newsletter form ([#674](https://github.com/themesberg/flowbite-svelte/issues/674)) ([89df011](https://github.com/themesberg/flowbite-svelte/commit/89df011c684bf8829b3f15c38fec4b727d62303d))
- prev/next buttons ([#675](https://github.com/themesberg/flowbite-svelte/issues/675)) ([590e423](https://github.com/themesberg/flowbite-svelte/commit/590e423396a9d42ad56593f9131b2107ad1ec2fe))
- slightly shorter version of redirection hooks ([#673](https://github.com/themesberg/flowbite-svelte/issues/673)) ([635e1e3](https://github.com/themesberg/flowbite-svelte/commit/635e1e38e2ac83d82982ff048d2a2f230c483389))
- social proof ([#686](https://github.com/themesberg/flowbite-svelte/issues/686)) ([4567ee2](https://github.com/themesberg/flowbite-svelte/commit/4567ee2209263eb1aed2ddd712b8de651e044641))
- trim number of components ([#709](https://github.com/themesberg/flowbite-svelte/issues/709)) ([8723242](https://github.com/themesberg/flowbite-svelte/commit/87232427dc255cda4a11dc2fef5228c124cfc4ee))

### Bug Fixes

- add GetStarted ([d1c0424](https://github.com/themesberg/flowbite-svelte/commit/d1c042470ff943884c77ccd4917eac399f9ba072))
- CTA should have tinted background ([#708](https://github.com/themesberg/flowbite-svelte/issues/708)) ([ecb5c4c](https://github.com/themesberg/flowbite-svelte/commit/ecb5c4c12db278fccb8c02b84298ba2ef90b18df))
- dark-mode in examples ([#683](https://github.com/themesberg/flowbite-svelte/issues/683)) ([cde56c4](https://github.com/themesberg/flowbite-svelte/commit/cde56c44a9b20e806655f427fff32990db03f0f3))
- dependencies update ([#685](https://github.com/themesberg/flowbite-svelte/issues/685)) ([f017a73](https://github.com/themesberg/flowbite-svelte/commit/f017a738fc38633e8b95ea135b8438b7f67f8554))
- initial refresh fix ([#693](https://github.com/themesberg/flowbite-svelte/issues/693)) ([7479934](https://github.com/themesberg/flowbite-svelte/commit/7479934dc83bdbe0197fac7c0dbe7d817bf1d6e5))
- links in DesignFigma ([22a40ea](https://github.com/themesberg/flowbite-svelte/commit/22a40ea13e202bb7a9b21ba2d94c53f2468649ba))
- lock file ([b24ac8d](https://github.com/themesberg/flowbite-svelte/commit/b24ac8d52ab7a87c2d52a0e189988dc949f2f5d5))
- lock file ([6144fd3](https://github.com/themesberg/flowbite-svelte/commit/6144fd3da66eeec36ab663938cf59dce0b3a156d))
- props and update them ([#715](https://github.com/themesberg/flowbite-svelte/issues/715)) ([3f952b4](https://github.com/themesberg/flowbite-svelte/commit/3f952b41852f5a2b7662e4718a10bab225e060a6))

### [0.34.9](https://github.com/themesberg/flowbite-svelte/compare/v0.34.8...v0.34.9) (2023-04-11)

### [0.34.8](https://github.com/themesberg/flowbite-svelte/compare/v0.34.7...v0.34.8) (2023-04-11)

### Bug Fixes

- add main: index.js to package.json ([ce82350](https://github.com/themesberg/flowbite-svelte/commit/ce823503b9ef21abf5d751ae7f3606e26db3d2c7))

### [0.34.7](https://github.com/themesberg/flowbite-svelte/compare/v0.34.6...v0.34.7) (2023-04-05)

### Bug Fixes

- typo in docs ([#645](https://github.com/themesberg/flowbite-svelte/issues/645)) ([d010eef](https://github.com/themesberg/flowbite-svelte/commit/d010eef360a32460eff383e585cd14cd31ee3bfa))

### [0.34.6](https://github.com/themesberg/flowbite-svelte/compare/v0.34.5...v0.34.6) (2023-04-05)

### Bug Fixes

- remove TabHead and TabHeadItem ([c255797](https://github.com/themesberg/flowbite-svelte/commit/c25579742f17a822f8f2a2c325da2c7c98c375cc))

### [0.34.5](https://github.com/themesberg/flowbite-svelte/compare/v0.34.4...v0.34.5) (2023-04-04)

### Bug Fixes

- clean up & remove ExampleDiv, GitHubSource, and CompoDescription ([#639](https://github.com/themesberg/flowbite-svelte/issues/639)) ([113df27](https://github.com/themesberg/flowbite-svelte/commit/113df2716cde7f0c3e0c7aa904bafdc3ece15cd1))
- forward input event ([#627](https://github.com/themesberg/flowbite-svelte/issues/627)) ([22d20db](https://github.com/themesberg/flowbite-svelte/commit/22d20dbb6845e5ed0d7188e304c406a5c8cb8758))
- remove unused components and update props ([#642](https://github.com/themesberg/flowbite-svelte/issues/642)) ([e6a4fb5](https://github.com/themesberg/flowbite-svelte/commit/e6a4fb5c63888e1aa90229414d5814e9a3c5fe27))
- sidebar z-10 to z-30 for front page ([79b5adc](https://github.com/themesberg/flowbite-svelte/commit/79b5adc075633b2fb4904f7b907b0d8e50dc28a3))
- sidebar z-50 to z-10 for modals ([4b76f75](https://github.com/themesberg/flowbite-svelte/commit/4b76f75650bb5670117c4959cb6b622f639242db))

### [0.34.4](https://github.com/themesberg/flowbite-svelte/compare/v0.34.3...v0.34.4) (2023-03-31)

### Features

- add color, gradient, shadow, and outline props to speed-dial ([#636](https://github.com/themesberg/flowbite-svelte/issues/636)) ([563a7ee](https://github.com/themesberg/flowbite-svelte/commit/563a7eecdf69301da232aa7ccd6734e49dc87f4c))

### Bug Fixes

- update props ([cb92b47](https://github.com/themesberg/flowbite-svelte/commit/cb92b47bd79f8833aea263d106675881a6fcd456))

### [0.34.3](https://github.com/themesberg/flowbite-svelte/compare/v0.34.2...v0.34.3) (2023-03-30)

### Bug Fixes

- dropdown page ([d3d4827](https://github.com/themesberg/flowbite-svelte/commit/d3d48276e27cc18300de1b1cc2a26ce05de733d8))
- dropdown page add dark:text-white to MenuButton and change to color:green for Avatar ([900feca](https://github.com/themesberg/flowbite-svelte/commit/900feca1d8f4e617821c6a4ccf3687839a302cf0))
- remove duplicate theme from tailwind.config ([5d0ebe5](https://github.com/themesberg/flowbite-svelte/commit/5d0ebe5ab587e489498bba825527d613cddb2eaf))
- TextPlaceHolder remove w-full ([e3ec175](https://github.com/themesberg/flowbite-svelte/commit/e3ec175bc3ec366a5e027feb5e21721fdd223243))
- top navbar margin top ([d9c83b4](https://github.com/themesberg/flowbite-svelte/commit/d9c83b46bcd0c67d176ad60b0cbd3089a62471ab))
- typo CardPlaceholder ([71bea4d](https://github.com/themesberg/flowbite-svelte/commit/71bea4d98b5046d866aa2ded2e00cc30e4b44b61))
- update props table and github links ([0a184d1](https://github.com/themesberg/flowbite-svelte/commit/0a184d11469729e2697ea91117ad487e2b6e3741))
- update skeleton components ([b1ffbc7](https://github.com/themesberg/flowbite-svelte/commit/b1ffbc789536f0e6be4bcca3e4083466c62fe85e))

### [0.34.2](https://github.com/themesberg/flowbite-svelte/compare/v0.34.1...v0.34.2) (2023-03-21)

### Bug Fixes

- button size ([#623](https://github.com/themesberg/flowbite-svelte/issues/623)) ([f845373](https://github.com/themesberg/flowbite-svelte/commit/f845373bb75d4a908386753049174b526cebf5dd))

### [0.34.1](https://github.com/themesberg/flowbite-svelte/compare/v0.33.1...v0.34.1) (2023-03-18)

### Bug Fixes

- GitHubSource change tree to blob ([69f0e15](https://github.com/themesberg/flowbite-svelte/commit/69f0e15b7dcafa8018e23ee33c8c7e2bb2e8ebd6))
- GitHubSource links ([8d4e976](https://github.com/themesberg/flowbite-svelte/commit/8d4e9760255daf81546dca91d0abb0843a1a2a5c))
- package.json format ([f836a5c](https://github.com/themesberg/flowbite-svelte/commit/f836a5c733cc57240040aa9821732056ccbcee24))

### [0.32.2](https://github.com/themesberg/flowbite-svelte/compare/v0.30.6...v0.32.2) (2023-03-14)

### Features

- add svelte snapshot example ([#598](https://github.com/themesberg/flowbite-svelte/issues/598)) ([35da46d](https://github.com/themesberg/flowbite-svelte/commit/35da46d847b333308bcd21ff89834a7a1ded783e))
- allow faster import ([3a17023](https://github.com/themesberg/flowbite-svelte/commit/3a1702332b62583cde1ee7dd23d8664e2546f2aa))

### Bug Fixes

- add carbon ([#602](https://github.com/themesberg/flowbite-svelte/issues/602)) ([0ed5ebc](https://github.com/themesberg/flowbite-svelte/commit/0ed5ebc1b3bf94749f833ee5a3aa14e0802b89bd))
- event forwarding for numberinput ([#596](https://github.com/themesberg/flowbite-svelte/issues/596)) ([5d67a83](https://github.com/themesberg/flowbite-svelte/commit/5d67a833aa6ff769b85ca79c52b29de56690a2aa))
- incorrect aria-expanded in <h2> ([#604](https://github.com/themesberg/flowbite-svelte/issues/604)) ([f562e91](https://github.com/themesberg/flowbite-svelte/commit/f562e91e42fae6e76c5d042e6b19b34f7c0d7692))
- inline script in <DarkMode> ([#610](https://github.com/themesberg/flowbite-svelte/issues/610)) ([7ac48ba](https://github.com/themesberg/flowbite-svelte/commit/7ac48ba643f87b92ad51a6b540b14741bc6fd229))
- navbar-li undefined ([#595](https://github.com/themesberg/flowbite-svelte/issues/595)) ([ab5d080](https://github.com/themesberg/flowbite-svelte/commit/ab5d080c7f214b81a748a812bd487d8d22af8895))
- remove preceding dir name from the export ([68bdf74](https://github.com/themesberg/flowbite-svelte/commit/68bdf7485005f566d8401eec352aa0236d7d0796))
- snapshot page ([#603](https://github.com/themesberg/flowbite-svelte/issues/603)) ([f9ecfed](https://github.com/themesberg/flowbite-svelte/commit/f9ecfedbc834530f5abab79f3d3b06e2c2c811a4))
- snapshot page update 2 ([#605](https://github.com/themesberg/flowbite-svelte/issues/605)) ([e7b36e6](https://github.com/themesberg/flowbite-svelte/commit/e7b36e6ad579bfe642747f6ce2624d129397e49a))

### [0.33.1](https://github.com/themesberg/flowbite-svelte/compare/v0.32.1...v0.33.1) (2023-03-16)

### Bug Fixes

- add gallery components and page ([#618](https://github.com/themesberg/flowbite-svelte/issues/618)) ([8c3b1f3](https://github.com/themesberg/flowbite-svelte/commit/8c3b1f3ff37eb8da4616001d7a3a510a6848cb76))

### [0.32.1](https://github.com/themesberg/flowbite-svelte/compare/v0.31.1...v0.32.1) (2023-03-12)

### [0.31.1](https://github.com/themesberg/flowbite-svelte/compare/v0.30.7...v0.31.1) (2023-03-12)

### [0.30.7](https://github.com/themesberg/flowbite-svelte/compare/v0.30.6...v0.30.7) (2023-03-12)

### Features

- add svelte snapshot example ([#598](https://github.com/themesberg/flowbite-svelte/issues/598)) ([35da46d](https://github.com/themesberg/flowbite-svelte/commit/35da46d847b333308bcd21ff89834a7a1ded783e))

### Bug Fixes

- add carbon ([#602](https://github.com/themesberg/flowbite-svelte/issues/602)) ([0ed5ebc](https://github.com/themesberg/flowbite-svelte/commit/0ed5ebc1b3bf94749f833ee5a3aa14e0802b89bd))
- event forwarding for numberinput ([#596](https://github.com/themesberg/flowbite-svelte/issues/596)) ([5d67a83](https://github.com/themesberg/flowbite-svelte/commit/5d67a833aa6ff769b85ca79c52b29de56690a2aa))
- incorrect aria-expanded in <h2> ([#604](https://github.com/themesberg/flowbite-svelte/issues/604)) ([f562e91](https://github.com/themesberg/flowbite-svelte/commit/f562e91e42fae6e76c5d042e6b19b34f7c0d7692))
- inline script in <DarkMode> ([#610](https://github.com/themesberg/flowbite-svelte/issues/610)) ([7ac48ba](https://github.com/themesberg/flowbite-svelte/commit/7ac48ba643f87b92ad51a6b540b14741bc6fd229))
- navbar-li undefined ([#595](https://github.com/themesberg/flowbite-svelte/issues/595)) ([ab5d080](https://github.com/themesberg/flowbite-svelte/commit/ab5d080c7f214b81a748a812bd487d8d22af8895))
- snapshot page ([#603](https://github.com/themesberg/flowbite-svelte/issues/603)) ([f9ecfed](https://github.com/themesberg/flowbite-svelte/commit/f9ecfedbc834530f5abab79f3d3b06e2c2c811a4))
- snapshot page update 2 ([#605](https://github.com/themesberg/flowbite-svelte/issues/605)) ([e7b36e6](https://github.com/themesberg/flowbite-svelte/commit/e7b36e6ad579bfe642747f6ce2624d129397e49a))

### [0.30.6](https://github.com/themesberg/flowbite-svelte/compare/v0.30.5...v0.30.6) (2023-03-01)

### Bug Fixes

- li classes cascaded from ul ([#593](https://github.com/themesberg/flowbite-svelte/issues/593)) ([90a4c74](https://github.com/themesberg/flowbite-svelte/commit/90a4c74fa8e9a95b652f67525fbaee67f40d6f0b))

### [0.30.5](https://github.com/themesberg/flowbite-svelte/compare/v0.30.4...v0.30.5) (2023-02-27)

### Features

- add transition to SidebarDropdownWrapper ([#590](https://github.com/themesberg/flowbite-svelte/issues/590)) ([36f4971](https://github.com/themesberg/flowbite-svelte/commit/36f49711aece1535e78804d785a841d11f8e0459))

### [0.30.4](https://github.com/themesberg/flowbite-svelte/compare/v0.30.3...v0.30.4) (2023-02-20)

### Bug Fixes

- add types ./dist/index.d.ts to package.json ([7a88a7c](https://github.com/themesberg/flowbite-svelte/commit/7a88a7c052bf65c0944b4f16fb7e622f217711d5))

### [0.30.3](https://github.com/themesberg/flowbite-svelte/compare/v0.30.2...v0.30.3) (2023-02-20)

### Bug Fixes

- remove main: index.js ([879d810](https://github.com/themesberg/flowbite-svelte/commit/879d8108c34f563e19ae4cd9b89eb95391083235))
- update from index.ts to index.js in vite.config.ts ([a7978dd](https://github.com/themesberg/flowbite-svelte/commit/a7978dd854ded3238aa522b5ee47ebc2f0865cf9))

### [0.30.2](https://github.com/themesberg/flowbite-svelte/compare/v0.30.1...v0.30.2) (2023-02-20)

### Bug Fixes

- change ts to js ([8e284dc](https://github.com/themesberg/flowbite-svelte/commit/8e284dc2b3d81b674e95fdbe14aafbb04f21df11))

### [0.30.1](https://github.com/themesberg/flowbite-svelte/compare/v0.30.0...v0.30.1) (2023-02-20)

### Bug Fixes

- reinstall dependencies ([0876852](https://github.com/themesberg/flowbite-svelte/commit/08768528dd8df368052503e6ebe4a4e68fd348d3))
- reinstall dependencies ([8ee47f8](https://github.com/themesberg/flowbite-svelte/commit/8ee47f8466e44091c9b91995ad70ebf67dca0f29))

## [0.30.0](https://github.com/themesberg/flowbite-svelte/compare/v0.29.13...v0.30.0) (2023-02-20)

### Features

- add Codeflow link ([#572](https://github.com/themesberg/flowbite-svelte/issues/572)) ([c76b265](https://github.com/themesberg/flowbite-svelte/commit/c76b265aded62df0553d9a579f8b0ee6f756c528))
- sveltekit update to 1.5.6 ([#571](https://github.com/themesberg/flowbite-svelte/issues/571)) ([c24c639](https://github.com/themesberg/flowbite-svelte/commit/c24c63950471f831bc4fdec37e9aa767f6f64c96))

### Bug Fixes

- fluid setting for Navbar ([#563](https://github.com/themesberg/flowbite-svelte/issues/563)) ([4311bbb](https://github.com/themesberg/flowbite-svelte/commit/4311bbba0bd590d66b388f6c0f8e688b1bd85a1c))
- FooterCopyright remove space after {by} ([#578](https://github.com/themesberg/flowbite-svelte/issues/578)) ([da7a681](https://github.com/themesberg/flowbite-svelte/commit/da7a681a828b1eeab9bebedcf60ad24d55a5e7f6))
- package.json format ([675928b](https://github.com/themesberg/flowbite-svelte/commit/675928beda860ef099cd6cc72f2acef2e0159b07))
- remove log message in Avatar Dot ([#567](https://github.com/themesberg/flowbite-svelte/issues/567)) ([1c808c7](https://github.com/themesberg/flowbite-svelte/commit/1c808c7e21c72b7bda604852fe8e75eebcb6992a))

### [0.29.13](https://github.com/themesberg/flowbite-svelte/compare/v0.29.12...v0.29.13) (2023-01-31)

### [0.29.12](https://github.com/themesberg/flowbite-svelte/compare/v0.29.11...v0.29.12) (2023-01-23)

### Features

- add step indicator component ([#545](https://github.com/themesberg/flowbite-svelte/issues/545)) ([549ad61](https://github.com/themesberg/flowbite-svelte/commit/549ad616adc829b5482da20abf9f4ef3e78aa44b))

### Bug Fixes

- add indcator to index ([#535](https://github.com/themesberg/flowbite-svelte/issues/535)) ([f6fcef6](https://github.com/themesberg/flowbite-svelte/commit/f6fcef63638a5edcf4c3f8d2b965789d5ad85be1))
- add two missing colors for <Table> ([#537](https://github.com/themesberg/flowbite-svelte/issues/537)) ([ac558fb](https://github.com/themesberg/flowbite-svelte/commit/ac558fb267d3aaa87773ca23b5104e4c231443ba))
- few minor tweaks ([#541](https://github.com/themesberg/flowbite-svelte/issues/541)) ([2289e4d](https://github.com/themesberg/flowbite-svelte/commit/2289e4d1f83f272db5c092cd09469147a4878ff8))
- ListgroupItem button type ([#549](https://github.com/themesberg/flowbite-svelte/issues/549)) ([6b74d73](https://github.com/themesberg/flowbite-svelte/commit/6b74d738efc887b46fe0fc0eea473e617aa386ca))
- move step indicator to extend ([000dec3](https://github.com/themesberg/flowbite-svelte/commit/000dec3688b5d9535a21a36207de42ca26336f1b))
- TableBodyRow color and border ([#539](https://github.com/themesberg/flowbite-svelte/issues/539)) ([d52920f](https://github.com/themesberg/flowbite-svelte/commit/d52920fe869183639788607475b148c80fe283fa))

### [0.29.11](https://github.com/themesberg/flowbite-svelte/compare/v0.29.10...v0.29.11) (2023-01-16)

### Features

- indicator comp ([#532](https://github.com/themesberg/flowbite-svelte/issues/532)) ([57ce4fc](https://github.com/themesberg/flowbite-svelte/commit/57ce4fcdce3965921c0f6edf71f6ae42c2d42b40))
- make <TableHead> slot more flexible ([#527](https://github.com/themesberg/flowbite-svelte/issues/527)) ([33803f2](https://github.com/themesberg/flowbite-svelte/commit/33803f23ce90f9425417f6417c70bc6928337bbe))

### Bug Fixes

- update badge component's style and doc ([#531](https://github.com/themesberg/flowbite-svelte/issues/531)) ([ce9af8c](https://github.com/themesberg/flowbite-svelte/commit/ce9af8cff8f6979f625b00fd165aa2ffadc41604))

### [0.29.10](https://github.com/themesberg/flowbite-svelte/compare/v0.29.9...v0.29.10) (2023-01-13)

### Features

- add on:input to textarea ([#518](https://github.com/themesberg/flowbite-svelte/issues/518)) ([318ffbf](https://github.com/themesberg/flowbite-svelte/commit/318ffbf676366fcc7bd08c538270800d90ce5189))
- make Select receive custom options ([#514](https://github.com/themesberg/flowbite-svelte/issues/514)) ([a58b410](https://github.com/themesberg/flowbite-svelte/commit/a58b410a3ffce29432907457baeae8c20977ef42))

### Bug Fixes

- [#530](https://github.com/themesberg/flowbite-svelte/issues/530) ([16c6650](https://github.com/themesberg/flowbite-svelte/commit/16c66504d42a378705a120fae5a6ca147a776bd4))
- export slide params ([#516](https://github.com/themesberg/flowbite-svelte/issues/516)) ([c8dd81d](https://github.com/themesberg/flowbite-svelte/commit/c8dd81d5493b908a903648104f0371ac143c1167))
- modal layout ([#526](https://github.com/themesberg/flowbite-svelte/issues/526)) ([6b25019](https://github.com/themesberg/flowbite-svelte/commit/6b250190f25feefe21191b3d8cab709fe28c6908))
- npm run check corrections ([#517](https://github.com/themesberg/flowbite-svelte/issues/517)) ([f1f89e3](https://github.com/themesberg/flowbite-svelte/commit/f1f89e30221fd3bb63fed174fe825a46f780d1c7))

### [0.29.9](https://github.com/themesberg/flowbite-svelte/compare/v0.29.8...v0.29.9) (2023-01-01)

### Bug Fixes

- dark text color for input validation ([#513](https://github.com/themesberg/flowbite-svelte/issues/513)) ([7b145d6](https://github.com/themesberg/flowbite-svelte/commit/7b145d68f224151fa45c2b651a2b49351e13cf67))

### [0.29.8](https://github.com/themesberg/flowbite-svelte/compare/v0.29.7...v0.29.8) (2023-01-01)

### [0.29.7](https://github.com/themesberg/flowbite-svelte/compare/v0.29.6...v0.29.7) (2022-12-26)

### Bug Fixes

- select types ([#508](https://github.com/themesberg/flowbite-svelte/issues/508)) ([3ea30a9](https://github.com/themesberg/flowbite-svelte/commit/3ea30a9d336187f36f63f559fbef3b0a7dde5f23))

### [0.29.6](https://github.com/themesberg/flowbite-svelte/compare/v0.29.5...v0.29.6) (2022-12-26)

### Features

- add on:contextmenu ([#506](https://github.com/themesberg/flowbite-svelte/issues/506)) ([75ad596](https://github.com/themesberg/flowbite-svelte/commit/75ad59695188e36e0af52487e041c15a7b6fd845))

### Bug Fixes

- pagination for darkmode ([#507](https://github.com/themesberg/flowbite-svelte/issues/507)) ([9175627](https://github.com/themesberg/flowbite-svelte/commit/917562790bc05a1a0679c11266ee7d23531c865f))

### [0.29.5](https://github.com/themesberg/flowbite-svelte/compare/v0.29.4...v0.29.5) (2022-12-22)

### [0.29.4](https://github.com/themesberg/flowbite-svelte/compare/v0.29.3...v0.29.4) (2022-12-22)

### Features

- add pagination examples ([#503](https://github.com/themesberg/flowbite-svelte/issues/503)) ([93e48e3](https://github.com/themesberg/flowbite-svelte/commit/93e48e354a731216213e4ba38bf12e462880d58a))

### [0.29.3](https://github.com/themesberg/flowbite-svelte/compare/v0.29.2...v0.29.3) (2022-12-20)

### [0.29.2](https://github.com/themesberg/flowbite-svelte/compare/v0.29.1...v0.29.2) (2022-12-19)

### [0.29.1](https://github.com/themesberg/flowbite-svelte/compare/v0.29.0...v0.29.1) (2022-12-19)

### Bug Fixes

- add esbuild@0.16.8 and update other dependencies ([f32d1be](https://github.com/themesberg/flowbite-svelte/commit/f32d1beea8b402652242fdeaf1007885e74c12cd))
- change svelte-kit sync && svelte-package to vite build ([cd7cd5e](https://github.com/themesberg/flowbite-svelte/commit/cd7cd5e971ba4f6c547984daf3a5f37656343b28))

## [0.29.0](https://github.com/themesberg/flowbite-svelte/compare/v0.28.12...v0.29.0) (2022-12-18)

### ⚠ BREAKING CHANGES

- update sveltekit 1.0.1

### Features

- update sveltekit 1.0.1 ([9b812c8](https://github.com/themesberg/flowbite-svelte/commit/9b812c861b25ef338574e91c95de3a1c0219f3b5))

### [0.28.12](https://github.com/themesberg/flowbite-svelte/compare/v0.28.11...v0.28.12) (2022-12-18)

### Bug Fixes

- npm run check fixes ([#484](https://github.com/themesberg/flowbite-svelte/issues/484)) ([be4f0f6](https://github.com/themesberg/flowbite-svelte/commit/be4f0f6270b93296d8e2cd3eab60ef77fc621261))

### [0.28.11](https://github.com/themesberg/flowbite-svelte/compare/v0.28.10...v0.28.11) (2022-12-10)

### Bug Fixes

- package.json scripts update ([7d1d8b9](https://github.com/themesberg/flowbite-svelte/commit/7d1d8b932a198284ae72948249ef379a6594bd18))
- package.json scripts update ([b32d810](https://github.com/themesberg/flowbite-svelte/commit/b32d810eb8ebb9787f62c4ed76766ff77510c5c7))

### [0.28.10](https://github.com/themesberg/flowbite-svelte/compare/v0.28.9...v0.28.10) (2022-12-10)

### Bug Fixes

- package.json scripts update ([b3467ba](https://github.com/themesberg/flowbite-svelte/commit/b3467ba3f16c46f4801642dbf15cf07ad7b9618d))
- vite.config.ts update ([72f8a25](https://github.com/themesberg/flowbite-svelte/commit/72f8a251221ce78a4452c8ead17ce2abb35cbb00))

### [0.28.9](https://github.com/themesberg/flowbite-svelte/compare/v0.28.8...v0.28.9) (2022-12-10)

### Bug Fixes

- scripts build update ([ed3d086](https://github.com/themesberg/flowbite-svelte/commit/ed3d086767e2e444ee716b511b1a57aabf630dea))

### [0.28.8](https://github.com/themesberg/flowbite-svelte/compare/v0.28.7...v0.28.8) (2022-12-10)

### [0.28.7](https://github.com/themesberg/flowbite-svelte/compare/v0.28.6...v0.28.7) (2022-12-10)

### [0.28.6](https://github.com/themesberg/flowbite-svelte/compare/v0.28.5...v0.28.6) (2022-12-10)

### [0.28.5](https://github.com/themesberg/flowbite-svelte/compare/v0.28.4...v0.28.5) (2022-12-10)

### Bug Fixes

- add eventhandler to label (mouse, drag, etc.) ([#433](https://github.com/themesberg/flowbite-svelte/issues/433)) ([6e4d9d1](https://github.com/themesberg/flowbite-svelte/commit/6e4d9d158c27ebb13f9a964d4bbfea17bba068cc))
- avatar placholder missing href ([#475](https://github.com/themesberg/flowbite-svelte/issues/475)) ([6ad52e6](https://github.com/themesberg/flowbite-svelte/commit/6ad52e6c121599758a5c6bf4079bdffcd3199421))
- bind:files for fileinput ([#474](https://github.com/themesberg/flowbite-svelte/issues/474)) ([585ba09](https://github.com/themesberg/flowbite-svelte/commit/585ba09f210bcb6b11a43ef005b742e999890dbf))
- list group item padding ([#469](https://github.com/themesberg/flowbite-svelte/issues/469)) ([d945978](https://github.com/themesberg/flowbite-svelte/commit/d945978f38e82953c1ddd703b2fd7c9086768ffa))
- removal of iconinput ([#476](https://github.com/themesberg/flowbite-svelte/issues/476)) ([2da0912](https://github.com/themesberg/flowbite-svelte/commit/2da0912b15199d6dbbcedae0db672b0a7d61a9fd))
- remove a pipe from MetaTags titleTemplate ([6ad56c0](https://github.com/themesberg/flowbite-svelte/commit/6ad56c0a4c918b7322f102c6043ab34e549f026f))
- sveltekit, vite, and other dependencies update ([#482](https://github.com/themesberg/flowbite-svelte/issues/482)) ([231e4da](https://github.com/themesberg/flowbite-svelte/commit/231e4daddc7095446a42f82f35f224ca9b9e209f))
- ts errors ([#464](https://github.com/themesberg/flowbite-svelte/issues/464)) ([ca723d4](https://github.com/themesberg/flowbite-svelte/commit/ca723d489e1861f6f702da90f9645139979261df))

### [0.28.4](https://github.com/themesberg/flowbite-svelte/compare/v0.28.3...v0.28.4) (2022-12-01)

### Bug Fixes

- avatar default href ([#462](https://github.com/themesberg/flowbite-svelte/issues/462)) ([1ad8999](https://github.com/themesberg/flowbite-svelte/commit/1ad899993ae3cf1f18e975766549718dc65ed50b))

### [0.28.3](https://github.com/themesberg/flowbite-svelte/compare/v0.28.2...v0.28.3) (2022-11-28)

### Features

- make tr and td clickable ([#452](https://github.com/themesberg/flowbite-svelte/issues/452)) ([3bc7f9e](https://github.com/themesberg/flowbite-svelte/commit/3bc7f9e227e3bfe70b0c184eae132abafd071760))

### [0.28.2](https://github.com/themesberg/flowbite-svelte/compare/v0.28.1...v0.28.2) (2022-11-28)

### Bug Fixes

- add rel external to sidebar menu datepicker ([d9693e8](https://github.com/themesberg/flowbite-svelte/commit/d9693e88528e27b408f4380f40e4a18c79aa169c))
- double scrollbar in docs ([#447](https://github.com/themesberg/flowbite-svelte/issues/447)) ([75efab3](https://github.com/themesberg/flowbite-svelte/commit/75efab37b6057469a35ec592c659438c3cf8047c))
- show the top of page after navigation ([b3be37b](https://github.com/themesberg/flowbite-svelte/commit/b3be37b761a8a656413e1b34da73c6a251ab4010))

### [0.28.1](https://github.com/themesberg/flowbite-svelte/compare/v0.28.0...v0.28.1) (2022-11-23)

### Bug Fixes

- toggle initial checked ([#442](https://github.com/themesberg/flowbite-svelte/issues/442)) ([7b0b0b0](https://github.com/themesberg/flowbite-svelte/commit/7b0b0b0cfd0b40e6688af0a2a748453b16a4fd5a))
- use encodeURIComponent for MetaTag component to encode spaces ([671a865](https://github.com/themesberg/flowbite-svelte/commit/671a8656eb7f5fff6f8c84ea6146f78b5fb8f0b0))

## [0.28.0](https://github.com/themesberg/flowbite-svelte/compare/v0.27.17...v0.28.0) (2022-11-20)

### Features

- enhance DarkMode ([#437](https://github.com/themesberg/flowbite-svelte/issues/437)) ([9afd3e1](https://github.com/themesberg/flowbite-svelte/commit/9afd3e11bec5bc4416537d7d371f970dd414a394))

### Bug Fixes

- checkbox initial checked ([#434](https://github.com/themesberg/flowbite-svelte/issues/434)) ([43663cf](https://github.com/themesberg/flowbite-svelte/commit/43663cf165f249c7e3fa7e7dc8ccfaccc7e467a6))
- floatinginput type changes ([#436](https://github.com/themesberg/flowbite-svelte/issues/436)) ([5af9ecf](https://github.com/themesberg/flowbite-svelte/commit/5af9ecf598800e4cbcf27e413ba0b63d82926219))
- og:image and twitter:image to replace spaces with - ([#441](https://github.com/themesberg/flowbite-svelte/issues/441)) ([25ad6d0](https://github.com/themesberg/flowbite-svelte/commit/25ad6d09816e1df3a5a8ddd9a901186d2a36f4ee))

### [0.27.17](https://github.com/themesberg/flowbite-svelte/compare/v0.27.16...v0.27.17) (2022-11-18)

### Features

- add SpeedDial component ([a959c5e](https://github.com/themesberg/flowbite-svelte/commit/a959c5edd96e56145453f0558f19be7f7a7fa8b5))

### Bug Fixes

- checkbox group ([#427](https://github.com/themesberg/flowbite-svelte/issues/427)) ([58c6660](https://github.com/themesberg/flowbite-svelte/commit/58c66600abcb943c730dbd64e6e4ca920bc06f8e))

### [0.27.16](https://github.com/themesberg/flowbite-svelte/compare/v0.27.15...v0.27.16) (2022-11-14)

### [0.27.15](https://github.com/themesberg/flowbite-svelte/compare/v0.27.14...v0.27.15) (2022-11-13)

### Features

- make AccordionItem transitions customizable ([0b49c35](https://github.com/themesberg/flowbite-svelte/commit/0b49c35a803b4ba3523c4d11845460c1958f9167))

### Bug Fixes

- autoclose=false (default) ([#417](https://github.com/themesberg/flowbite-svelte/issues/417)) ([32c1782](https://github.com/themesberg/flowbite-svelte/commit/32c1782ee8c8aae7b2b9c4e1d7bafe3adf1e467a))
- change from fly to fade and a longer duration for Accordion custom transitions ([3d105f4](https://github.com/themesberg/flowbite-svelte/commit/3d105f4783dec6f3c42677a6aa151aac4e334f72))
- radio.md - dropdown ([#425](https://github.com/themesberg/flowbite-svelte/issues/425)) ([12d2d03](https://github.com/themesberg/flowbite-svelte/commit/12d2d03098a3647040280b20474d657e8f8dca2b))
- search on:input ([#408](https://github.com/themesberg/flowbite-svelte/issues/408)) ([4c1e514](https://github.com/themesberg/flowbite-svelte/commit/4c1e514297aaf786535d6411ba4a53e8037e0f90))
- transition func must return TransitionConfig ([18bffdb](https://github.com/themesberg/flowbite-svelte/commit/18bffdb6829267bb78b33e2f247d707575504ee9))

### [0.27.14](https://github.com/themesberg/flowbite-svelte/compare/v0.27.13...v0.27.14) (2022-11-01)

### Bug Fixes

- card breadcrumb_title ([1ac4820](https://github.com/themesberg/flowbite-svelte/commit/1ac4820ac2553a3c812fced3b9d627e56a9d5ec2))
- create MetaTag component ([#406](https://github.com/themesberg/flowbite-svelte/issues/406)) ([4d09e4a](https://github.com/themesberg/flowbite-svelte/commit/4d09e4acd14e04a07b3c01408de1be718b4eef1e))

### [0.27.13](https://github.com/themesberg/flowbite-svelte/compare/v0.27.12...v0.27.13) (2022-10-30)

### Features

- add target and {...$$restProps} to all footer components ([#405](https://github.com/themesberg/flowbite-svelte/issues/405)) ([c045aa7](https://github.com/themesberg/flowbite-svelte/commit/c045aa76dc209471f278eb98f0ec566c61e957f2))

### [0.27.12](https://github.com/themesberg/flowbite-svelte/compare/v0.27.11...v0.27.12) (2022-10-29)

### Bug Fixes

- meta tag by adding type, url, and appId ([#399](https://github.com/themesberg/flowbite-svelte/issues/399)) ([6f9f423](https://github.com/themesberg/flowbite-svelte/commit/6f9f423b294bbc54bdae152f659e029e5e8a1f76))
- update meta images width and height ([#400](https://github.com/themesberg/flowbite-svelte/issues/400)) ([f97c01a](https://github.com/themesberg/flowbite-svelte/commit/f97c01a361714daca951c16fa7a2293988abd983))

### [0.27.11](https://github.com/themesberg/flowbite-svelte/compare/v0.27.10...v0.27.11) (2022-10-26)

### Features

- pagination ([#395](https://github.com/themesberg/flowbite-svelte/issues/395)) ([4792988](https://github.com/themesberg/flowbite-svelte/commit/479298855936bdc0e917788bbe1e00d8f62cbbe2))

### Bug Fixes

- add default value to opacity and space of paragraph element ([16f0729](https://github.com/themesberg/flowbite-svelte/commit/16f07295a2d23a3860ace75fab345c0d3452181b))
- merge conflict ([fa3c5d8](https://github.com/themesberg/flowbite-svelte/commit/fa3c5d8d205bc7211334f19c0ec6ec7c57fdd754))
- props update ([4c109c8](https://github.com/themesberg/flowbite-svelte/commit/4c109c84913bfe09ac8d4d6a7dd2265a0243eefa))
- set the default values of space and color of paragraph element to undefined ([0d54908](https://github.com/themesberg/flowbite-svelte/commit/0d549081235b1691017c0d3ae802fe71b48c4016))

### [0.27.10](https://github.com/themesberg/flowbite-svelte/compare/v0.27.9...v0.27.10) (2022-10-21)

### Features

- add disabling only outside click but not backdrop ([#390](https://github.com/themesberg/flowbite-svelte/issues/390)) ([ebb6a1f](https://github.com/themesberg/flowbite-svelte/commit/ebb6a1f81d005ef19e432b7395ff7e17599c0b4f))

### Bug Fixes

- missing dropdown example ([#388](https://github.com/themesberg/flowbite-svelte/issues/388)) ([69ba822](https://github.com/themesberg/flowbite-svelte/commit/69ba822ef1f3710bdccbaf31006a94e1e3d19aae))

### [0.27.9](https://github.com/themesberg/flowbite-svelte/compare/v0.27.8...v0.27.9) (2022-10-19)

### Bug Fixes

- [#379](https://github.com/themesberg/flowbite-svelte/issues/379) ([#380](https://github.com/themesberg/flowbite-svelte/issues/380)) ([0019915](https://github.com/themesberg/flowbite-svelte/commit/001991546e3e7376a02c17481784c5a5636d6ed7))
- optional Frame transition' ([#385](https://github.com/themesberg/flowbite-svelte/issues/385)) ([e7fc8db](https://github.com/themesberg/flowbite-svelte/commit/e7fc8db0f920e3bd907ce9fcf1c532885da193af))
- restProps for NumberInput ([#382](https://github.com/themesberg/flowbite-svelte/issues/382)) ([d1acb7f](https://github.com/themesberg/flowbite-svelte/commit/d1acb7f1b22a69acfc0f1ab6d2859c2a7d8a082c))

### [0.27.8](https://github.com/themesberg/flowbite-svelte/compare/v0.27.7...v0.27.8) (2022-10-17)

### [0.27.7](https://github.com/themesberg/flowbite-svelte/compare/v0.27.6...v0.27.7) (2022-10-17)

### Bug Fixes

- [#376](https://github.com/themesberg/flowbite-svelte/issues/376) ([#378](https://github.com/themesberg/flowbite-svelte/issues/378)) ([8b4c2e3](https://github.com/themesberg/flowbite-svelte/commit/8b4c2e3200c73448aa34f921738e8ea8d10ee538))
- card - restProps ([#373](https://github.com/themesberg/flowbite-svelte/issues/373)) ([a7331fc](https://github.com/themesberg/flowbite-svelte/commit/a7331fcd5915e6142a99859113776ce74a72529a))
- flitering ([#370](https://github.com/themesberg/flowbite-svelte/issues/370)) ([e8ac071](https://github.com/themesberg/flowbite-svelte/commit/e8ac07134518a373949da3fadc4f63c656fe2d59))
- modal arrow keys ([#369](https://github.com/themesberg/flowbite-svelte/issues/369)) ([2a8bc1c](https://github.com/themesberg/flowbite-svelte/commit/2a8bc1c156c66a3dc0569312343b6f6b65a051ea))
- remove |local from Frame componentso that toast transitions work ([6da412c](https://github.com/themesberg/flowbite-svelte/commit/6da412c0665f27a6f9dd33bbf89758c4a924d239))

### [0.27.6](https://github.com/themesberg/flowbite-svelte/compare/v0.27.5...v0.27.6) (2022-10-09)

### Bug Fixes

- card padding-x in mobile view ([#358](https://github.com/themesberg/flowbite-svelte/issues/358)) ([639457f](https://github.com/themesberg/flowbite-svelte/commit/639457f5efc54f38fda9288aa9cf017c2d0f883d))
- color flicker when changing theme using DarkMode ([#353](https://github.com/themesberg/flowbite-svelte/issues/353)) ([7e1daf1](https://github.com/themesberg/flowbite-svelte/commit/7e1daf14b1b91b0f3c0dac55c38e28fee42c4878))
- improved focustrap ([#354](https://github.com/themesberg/flowbite-svelte/issues/354)) ([fb17cd3](https://github.com/themesberg/flowbite-svelte/commit/fb17cd357e748df4b1d95060bcbecf7b406d3f03))
- input icons ([#350](https://github.com/themesberg/flowbite-svelte/issues/350)) ([7b72712](https://github.com/themesberg/flowbite-svelte/commit/7b727121b3b730eb552200c1de36f3cdc45f7977))
- input number workaround ([#351](https://github.com/themesberg/flowbite-svelte/issues/351)) ([e4cb012](https://github.com/themesberg/flowbite-svelte/commit/e4cb01221c3b4334a2c860aa32ccee06df2fe41d))
- remove // [@ts-ignore](https://github.com/ts-ignore) ([ea82a2b](https://github.com/themesberg/flowbite-svelte/commit/ea82a2bc22085bad26967a82d078d8ab86b2477d))
- remove package-lock, pnpm-lock and node_modules and reinstall ([a8985ea](https://github.com/themesberg/flowbite-svelte/commit/a8985ea2fdb7c18eb23e61dd163e65da98a53ae4))
- remove svelte-sidebar-menu ([2820488](https://github.com/themesberg/flowbite-svelte/commit/28204885bbefcb826e073a1e6b7127a0b488b752))
- ts types for Popper ([#362](https://github.com/themesberg/flowbite-svelte/issues/362)) ([4a22230](https://github.com/themesberg/flowbite-svelte/commit/4a22230d66d780cb2d5c189266f97c87c251b70a))

### [0.27.5](https://github.com/themesberg/flowbite-svelte/compare/v0.27.4...v0.27.5) (2022-10-01)

### Features

- add fetchMarkdownPosts in utils/index ([#333](https://github.com/themesberg/flowbite-svelte/issues/333)) ([b604c0c](https://github.com/themesberg/flowbite-svelte/commit/b604c0c31c99b743817d814b3b043c42ccfaf14c))

### Bug Fixes

- accordion slots + docs ([#349](https://github.com/themesberg/flowbite-svelte/issues/349)) ([78a2542](https://github.com/themesberg/flowbite-svelte/commit/78a25427e31f61ba86ce825d9127515326448afa))
- props using vite named import ([#347](https://github.com/themesberg/flowbite-svelte/issues/347)) ([7072e03](https://github.com/themesberg/flowbite-svelte/commit/7072e03b7ec8bac2e3d74d53f87c54dab772e159))
- use vite to import a file as text ([#342](https://github.com/themesberg/flowbite-svelte/issues/342)) ([07ac592](https://github.com/themesberg/flowbite-svelte/commit/07ac592b0a06cda8afd71d918145693a0834b4f3))

### [0.27.4](https://github.com/themesberg/flowbite-svelte/compare/v0.27.3...v0.27.4) (2022-09-26)

### Features

- toast fine tune ([f3ee6f3](https://github.com/themesberg/flowbite-svelte/commit/f3ee6f382aa3a004a8efdbed75f215b9dfe59b4e))

### Bug Fixes

- app.css restored ([e40bc80](https://github.com/themesberg/flowbite-svelte/commit/e40bc80cace759b434bc889c1d143533de032345))
- change a to A component ([dc92c3f](https://github.com/themesberg/flowbite-svelte/commit/dc92c3f699986f6679805350f3a88effc0e2a0c8))
- remove type CrumbType ([4269359](https://github.com/themesberg/flowbite-svelte/commit/4269359c1bddb37fea064cab4dc31b3ea30772ee))
- toc stickiness ([#330](https://github.com/themesberg/flowbite-svelte/issues/330)) ([21a0409](https://github.com/themesberg/flowbite-svelte/commit/21a0409bd34323b2858f43952ef6de45982b262d))
- update props and types page ([#331](https://github.com/themesberg/flowbite-svelte/issues/331)) ([0be5900](https://github.com/themesberg/flowbite-svelte/commit/0be59006c6bf79df210838b21a17d3dfd18213ac))

### [0.27.3](https://github.com/themesberg/flowbite-svelte/compare/v0.27.2...v0.27.3) (2022-09-26)

### Bug Fixes

- change a to A component ([33a8015](https://github.com/themesberg/flowbite-svelte/commit/33a8015ae3e7b3969359bcd67ba47bb53c7f7dad))
- correction in using style and color ([7ebbc5f](https://github.com/themesberg/flowbite-svelte/commit/7ebbc5fcac75fea0f9c19c51b6ea5dc8dfb241c8))
- remove workflows/release-please.yml ([30a3682](https://github.com/themesberg/flowbite-svelte/commit/30a3682d3652e779e5e4325edbf7b66ad02a8428))
- style for links ([040ff2e](https://github.com/themesberg/flowbite-svelte/commit/040ff2ea183d21836e8f3e5dddb5879cf9324a69))

### [0.27.2](https://github.com/themesberg/flowbite-svelte/compare/v0.27.1...v0.27.2) (2022-09-26)

### Features

- permanent option ([cceeb1b](https://github.com/themesberg/flowbite-svelte/commit/cceeb1b21995e4b386e61fa90256c7b3a304326e))

### [0.27.1](https://github.com/themesberg/flowbite-svelte/compare/v0.27.0...v0.27.1) (2022-09-24)

### Features

- modal block background scroll ([f3eb627](https://github.com/themesberg/flowbite-svelte/commit/f3eb62732dc899d6f1483d9f86a5c644c8d2edd2))
- modal internal scrolling ([7ca08ea](https://github.com/themesberg/flowbite-svelte/commit/7ca08ea939e0116241c564738ec237bd501ca32c))

### Bug Fixes

- placement and padding ([169c749](https://github.com/themesberg/flowbite-svelte/commit/169c749004d16d9b7c1aef46448608beefd3caf7))

## [0.27.0](https://github.com/themesberg/flowbite-svelte/compare/v0.26.31...v0.27.0) (2022-09-24)

### Features

- add server hooks to redirect component pages and add redirect.spec test ([9e2cb72](https://github.com/themesberg/flowbite-svelte/commit/9e2cb72653cb2de16f77c30d73bd69a69bd73bd5))

### Bug Fixes

- add other dir ([dc5e73f](https://github.com/themesberg/flowbite-svelte/commit/dc5e73feaa44c3fc7f020967f2e342b08bafccdf))
- add redirect to all other directories ([6ca9ce0](https://github.com/themesberg/flowbite-svelte/commit/6ca9ce0c38c2a417fc1bcd88520e609a0e1b2b0e))

### [0.26.31](https://github.com/themesberg/flowbite-svelte/compare/v0.26.30...v0.26.31) (2022-09-23)

### Bug Fixes

- add default style to TabHeadItem and TabHead and removed {tabStyle} from default example in tab page ([a9025c4](https://github.com/themesberg/flowbite-svelte/commit/a9025c432d57fe6896ab20249d711ff7739c9f1c))
- add events to IconInput and on:input to Input components ([6668918](https://github.com/themesberg/flowbite-svelte/commit/66689185cd6cdf94ab66e1ff05ba33fbcaf6be0f))
- remove activeTabvalue from TabWrapper and let:tabId vrom tab page examples ([ee1b444](https://github.com/themesberg/flowbite-svelte/commit/ee1b444cd552de4cd0c13e4356159ce44a864024))

### [0.26.30](https://github.com/themesberg/flowbite-svelte/compare/v0.26.29...v0.26.30) (2022-09-22)

### Bug Fixes

- add classOptions type to classes object ([2d7131b](https://github.com/themesberg/flowbite-svelte/commit/2d7131b25a5f6766c2cadc2b2034cc3cf68b9528))
- remove bind: from TabWrapper bind:activeTabValue ([0269b3a](https://github.com/themesberg/flowbite-svelte/commit/0269b3ac4daf31cebec6f215983bfb4e99a118e3))
- remove tabId from TabWrapper component ([5f46d23](https://github.com/themesberg/flowbite-svelte/commit/5f46d238ff1c81c1c66c1542565aa589f97cf530))
- update icon class in TabHeadItem for Tabs with icons ([e94b344](https://github.com/themesberg/flowbite-svelte/commit/e94b3449826e84146b877e00e458885e08606ec5))

### [0.26.29](https://github.com/themesberg/flowbite-svelte/compare/v0.26.28...v0.26.29) (2022-09-22)

### Features

- dropdown new version ([f17dbff](https://github.com/themesberg/flowbite-svelte/commit/f17dbff9139a80d0629913315fd4e594e99c9f40))

### Bug Fixes

- DropdownItem as li only when childe of ul ([add2f16](https://github.com/themesberg/flowbite-svelte/commit/add2f166883df2c237197f3327ad331dd0a1617d))
- navbar in mobile view width ([7f283f3](https://github.com/themesberg/flowbite-svelte/commit/7f283f363ff5fc70430db83bddde3af24e94aa9a))

### [0.26.28](https://github.com/themesberg/flowbite-svelte/compare/v0.26.27...v0.26.28) (2022-09-20)

### [0.26.27](https://github.com/themesberg/flowbite-svelte/compare/v0.26.26...v0.26.27) (2022-09-20)

### Bug Fixes

- typo form and from ([f17012d](https://github.com/themesberg/flowbite-svelte/commit/f17012db645030cf15ee62c28076f136ff28bed0))

### [0.26.26](https://github.com/themesberg/flowbite-svelte/compare/v0.26.25...v0.26.26) (2022-09-20)

### Features

- add $$slots.arrowdown and arrowup for user icons ([3fa53de](https://github.com/themesberg/flowbite-svelte/commit/3fa53de11239fe93e2ae9e28e5bdf3ee3ccc1f69))
- add ChevronUp to SidebarDropdownWrapper ([032d540](https://github.com/themesberg/flowbite-svelte/commit/032d540b347ab30ddcdcddff8c0963290ce0c904))

### Bug Fixes

- alert more tweaks ([444b340](https://github.com/themesberg/flowbite-svelte/commit/444b340f3a211f02572675b94624da4ae5d90c63))
- alert tweaks ([0c93b3c](https://github.com/themesberg/flowbite-svelte/commit/0c93b3c27d8911cd4709f78c554f68e524cc06d4))

### [0.26.25](https://github.com/themesberg/flowbite-svelte/compare/v0.26.24...v0.26.25) (2022-09-19)

### Bug Fixes

- tooltips/popovers ([d18721c](https://github.com/themesberg/flowbite-svelte/commit/d18721cc4229f5eb1f4dccbbd34dda65f6a07aac))

### [0.26.24](https://github.com/themesberg/flowbite-svelte/compare/v0.26.23...v0.26.24) (2022-09-19)

### Features

- mdsvexamples ([fc542a0](https://github.com/themesberg/flowbite-svelte/commit/fc542a0b6d09067fa62ae92ed44cb08408c19ad0))
- wrapper added ([024b8e6](https://github.com/themesberg/flowbite-svelte/commit/024b8e6a8db1e4961b1d26df67728cc0fb8b3025))

### [0.26.23](https://github.com/themesberg/flowbite-svelte/compare/v0.26.22...v0.26.23) (2022-09-18)

### Bug Fixes

- **DropdownItem:** remove redundant part after else ([4182d5c](https://github.com/themesberg/flowbite-svelte/commit/4182d5c970b3a683b47e228f4881585f4ca77d3b))

### [0.26.22](https://github.com/themesberg/flowbite-svelte/compare/v0.26.21...v0.26.22) (2022-09-17)

### Bug Fixes

- add createprops, scripts gen:props and package ([0fa07af](https://github.com/themesberg/flowbite-svelte/commit/0fa07af6a55819cf1d72d2f14ded5c400d7386db))

### [0.26.21](https://github.com/themesberg/flowbite-svelte/compare/v0.26.20...v0.26.21) (2022-09-17)

### Bug Fixes

- add npm and node to packages.josn engines for vercel test ([52e61fa](https://github.com/themesberg/flowbite-svelte/commit/52e61faf5152817af07adbf7a4947b90f61ef7fb))
- commit after reset ([c3ee849](https://github.com/themesberg/flowbite-svelte/commit/c3ee8494fffac749a1e32cbeba1cf722ba6cb578))
- copy from flowbite-svelte-new ([5a400fc](https://github.com/themesberg/flowbite-svelte/commit/5a400fce508c53e57eec6f5e40ba5c468ef79481))
- remove layout and page content ([92609e5](https://github.com/themesberg/flowbite-svelte/commit/92609e5a8dd85b22daaf12dda526331184bb4e74))
- update tsconfig.json ([ff4b3da](https://github.com/themesberg/flowbite-svelte/commit/ff4b3dacb420558c0beb627a75d9668e8fad88f9))

### [0.26.20](https://github.com/themesberg/flowbite-svelte/compare/v0.26.18...v0.26.20) (2022-09-15)

### Features

- datepicker update. It needs rel=external for the link from sidebar menu and index page ([6fed169](https://github.com/themesberg/flowbite-svelte/commit/6fed169402be79c0e0eba9a93766be5f0587ef41))

### Bug Fixes

- git reset --hard 344845b4 and update getting-started ([a941ed8](https://github.com/themesberg/flowbite-svelte/commit/a941ed8169872a39bd37e809db718f09156fbbc2))
- homepage ([dedf355](https://github.com/themesberg/flowbite-svelte/commit/dedf355835cf8b60aeb68a94b0e47a2034bea358))
- mousenter ([c3ee1cc](https://github.com/themesberg/flowbite-svelte/commit/c3ee1cc24867be96860faa32e322b6fe7c41592a))
- sidebar activeUrl example ([4387644](https://github.com/themesberg/flowbite-svelte/commit/43876441726e70eb582c20778a6231ed03f963d7))
- spacing ([6f6e99c](https://github.com/themesberg/flowbite-svelte/commit/6f6e99cec7209a70f9e09b362714f37525c45a53))
- toc issues ([13a459e](https://github.com/themesberg/flowbite-svelte/commit/13a459ec6cc3c8768698c5525012f2b53ae94b5c))
- update bug_report.yml ([221f224](https://github.com/themesberg/flowbite-svelte/commit/221f224920c69fb281c8b4fd2844a22fbe657c72))
- update bug_report.yml ([c527971](https://github.com/themesberg/flowbite-svelte/commit/c52797111863fd3e52e7c3dae9473e22cd84923a))
- update bug_report.yml by adding REPL template link ([3c8140d](https://github.com/themesberg/flowbite-svelte/commit/3c8140dffdedb3a41ee0ea9b546da92866fceefb))

### [0.26.19](https://github.com/themesberg/flowbite-svelte/compare/v0.26.18...v0.26.19) (2022-09-15)

### Features

- datepicker update. It needs rel=external for the link from sidebar menu and index page ([6fed169](https://github.com/themesberg/flowbite-svelte/commit/6fed169402be79c0e0eba9a93766be5f0587ef41))

### Bug Fixes

- git reset --hard 344845b4 and update getting-started ([a941ed8](https://github.com/themesberg/flowbite-svelte/commit/a941ed8169872a39bd37e809db718f09156fbbc2))
- homepage ([dedf355](https://github.com/themesberg/flowbite-svelte/commit/dedf355835cf8b60aeb68a94b0e47a2034bea358))
- mousenter ([c3ee1cc](https://github.com/themesberg/flowbite-svelte/commit/c3ee1cc24867be96860faa32e322b6fe7c41592a))
- sidebar activeUrl example ([4387644](https://github.com/themesberg/flowbite-svelte/commit/43876441726e70eb582c20778a6231ed03f963d7))
- spacing ([6f6e99c](https://github.com/themesberg/flowbite-svelte/commit/6f6e99cec7209a70f9e09b362714f37525c45a53))
- toc issues ([13a459e](https://github.com/themesberg/flowbite-svelte/commit/13a459ec6cc3c8768698c5525012f2b53ae94b5c))
- update bug_report.yml ([221f224](https://github.com/themesberg/flowbite-svelte/commit/221f224920c69fb281c8b4fd2844a22fbe657c72))
- update bug_report.yml ([c527971](https://github.com/themesberg/flowbite-svelte/commit/c52797111863fd3e52e7c3dae9473e22cd84923a))
- update bug_report.yml by adding REPL template link ([3c8140d](https://github.com/themesberg/flowbite-svelte/commit/3c8140dffdedb3a41ee0ea9b546da92866fceefb))

### [0.26.18](https://github.com/themesberg/flowbite-svelte/compare/v0.26.17...v0.26.18) (2022-09-12)

### Bug Fixes

- [#281](https://github.com/themesberg/flowbite-svelte/issues/281) ([5f79a5e](https://github.com/themesberg/flowbite-svelte/commit/5f79a5e27e23f568ae8e82d3ee974eea93eaccab))
- use relative paths instead of $lib alias inside of lib ([96e9d6b](https://github.com/themesberg/flowbite-svelte/commit/96e9d6bacb81761a26b0e43215c53ae24deffc73))

### [0.26.17](https://github.com/themesberg/flowbite-svelte/compare/v0.26.16...v0.26.17) (2022-09-11)

### Features

- add active to SidebarItem component and an example in the page ([af80c2b](https://github.com/themesberg/flowbite-svelte/commit/af80c2b7c1d81e711bba0faca959e6501b31257c))
- add md files in components folder ([8d7e05a](https://github.com/themesberg/flowbite-svelte/commit/8d7e05a0098437ac7ddd3f9122a2c23f481e54cd))

### Bug Fixes

- Drawer placement right ([4fe9283](https://github.com/themesberg/flowbite-svelte/commit/4fe928380f4bb95c59e311e7ccc3a8ae49fda89d))
- remove Datepicker from index ([f08230c](https://github.com/themesberg/flowbite-svelte/commit/f08230c84d29f172f1a30a6194e2694eb65f3e3e))
- remove Toc from layout since it needs to be updated ([2ea41a0](https://github.com/themesberg/flowbite-svelte/commit/2ea41a0c82bb8a7f583a001c1c5f598ac5855102))

### [0.26.16](https://github.com/themesberg/flowbite-svelte/compare/v0.26.15...v0.26.16) (2022-09-06)

### Features

- add offset position props to Drawer and example in the drawer page ([680d358](https://github.com/themesberg/flowbite-svelte/commit/680d358ef3d55df202ae2bcaf5deb9c3e6834c18))

### Bug Fixes

- [#273](https://github.com/themesberg/flowbite-svelte/issues/273) remove number from select value type ([529510b](https://github.com/themesberg/flowbite-svelte/commit/529510bc50e561b544175a350390d7f32291727c))
- [#274](https://github.com/themesberg/flowbite-svelte/issues/274) change the links to singular for blocks components ([7378935](https://github.com/themesberg/flowbite-svelte/commit/73789353f4d598722db88cecb595303e8d60ac31))
- index blocks names, e.g. Tooltips to Tooltip ([5f902b2](https://github.com/themesberg/flowbite-svelte/commit/5f902b22043838a3e3413679632c9516ea81b906))

### [0.26.15](https://github.com/themesberg/flowbite-svelte/compare/v0.26.14...v0.26.15) (2022-09-06)

### Bug Fixes

- dropdowns events docs ([a6d86b6](https://github.com/themesberg/flowbite-svelte/commit/a6d86b671a5c481288a20c1fe68cfcfe0faea880))
- dropdowns tweaks ([ad797ca](https://github.com/themesberg/flowbite-svelte/commit/ad797ca4a4a60abd7723b3b1415e70fb6e1328a6))

### [0.26.14](https://github.com/themesberg/flowbite-svelte/compare/v0.26.13...v0.26.14) (2022-09-06)

### Bug Fixes

- Heading and P update ([2313e3e](https://github.com/themesberg/flowbite-svelte/commit/2313e3e5ecb38ee69839a26b12b7c41cc099f75e))
- toast transitions ([6659682](https://github.com/themesberg/flowbite-svelte/commit/6659682250ab9d2337f06c2b424431366cf9ced0))

### [0.26.13](https://github.com/themesberg/flowbite-svelte/compare/v0.26.12...v0.26.13) (2022-09-05)

### Bug Fixes

- add track to video component for A11y ([ef69a83](https://github.com/themesberg/flowbite-svelte/commit/ef69a83325ab11e4d3548e5e28033ae9e02bfe40))

### [0.26.12](https://github.com/themesberg/flowbite-svelte/compare/v0.26.11...v0.26.12) (2022-09-05)

### Features

- add labelInsideClass to progressbar component ([fe20cd7](https://github.com/themesberg/flowbite-svelte/commit/fe20cd7f693f21e052dc5adb3fd3eb4bcfa80b76))

### [0.26.11](https://github.com/themesberg/flowbite-svelte/compare/v0.26.10...v0.26.11) (2022-09-05)

### Features

- range - clean up ([79d35ca](https://github.com/themesberg/flowbite-svelte/commit/79d35ca127094efb20e12ad3e14635cf607edddc))
- video component and page ([27cd7df](https://github.com/themesberg/flowbite-svelte/commit/27cd7df226dde37e8a598b6693ae8278671d5782))

### Bug Fixes

- [#266](https://github.com/themesberg/flowbite-svelte/issues/266) change {id} to {...$$restProps} ([b02822f](https://github.com/themesberg/flowbite-svelte/commit/b02822f273fe5b14613ec77e39285078a740cda0))
- github issue template ([b6b8fd4](https://github.com/themesberg/flowbite-svelte/commit/b6b8fd46aa7491e29935fe62ca5dc617513ee5ee))
- github issue template 2 ([343c102](https://github.com/themesberg/flowbite-svelte/commit/343c102ee1901c8d14fc75ab06a0fe28ac594a98))
- github issue template 3 ([e8c6a1b](https://github.com/themesberg/flowbite-svelte/commit/e8c6a1b7d148d0137ca0e395bf5904e3a2ed408c))
- github issue template 4 ([5565625](https://github.com/themesberg/flowbite-svelte/commit/5565625e343c197bd4d903878a2955eaae08b788))
- video component and page ([cc8dcb5](https://github.com/themesberg/flowbite-svelte/commit/cc8dcb54843ecff1f9aacc82d9139aedf7d6e0c1))

### [0.26.10](https://github.com/themesberg/flowbite-svelte/compare/v0.26.9...v0.26.10) (2022-09-05)

### Features

- add bgColor and bgOpacity to Drawer component ([8dc01fb](https://github.com/themesberg/flowbite-svelte/commit/8dc01fb9ec82b14d5f893d1255b646630e205ce2))

### Bug Fixes

- 683restProps for toolbarbutton ([6ce830c](https://github.com/themesberg/flowbite-svelte/commit/6ce830c2657c6727835ded2b01728c8830a1a7d2))
- change ml-2 after get access to ml-1 ([b8ffc2c](https://github.com/themesberg/flowbite-svelte/commit/b8ffc2ca5016737da2d40ed5b83d4ef5fdc07e08))
- megamenu fullscreen position ([eaf0729](https://github.com/themesberg/flowbite-svelte/commit/eaf07294a728b524f2873df26f8250d23682dd81))
- navbar updates ([468839b](https://github.com/themesberg/flowbite-svelte/commit/468839bd2efee738787b428ef902cecee3f70e12))
- remove Figma from image page ([0276b51](https://github.com/themesberg/flowbite-svelte/commit/0276b517fc828e77bfd383be122b514bb0793da0))

### [0.26.9](https://github.com/themesberg/flowbite-svelte/compare/v0.26.8...v0.26.9) (2022-09-04)

### Features

- add id to typograpy components ([64cbe1b](https://github.com/themesberg/flowbite-svelte/commit/64cbe1b6f2cbe43fdf5cb71a0d82e3a5caad1586))
- add placement to Drawer component ([1b91e52](https://github.com/themesberg/flowbite-svelte/commit/1b91e52618da8935b326a69161d01f0cc7739158))
- working on drawer ([07a8e02](https://github.com/themesberg/flowbite-svelte/commit/07a8e02ceac450e7e7ceeb2ad9b98bfac7c7c1cf))

### Bug Fixes

- folder names without s and update tests ([4e9c9ce](https://github.com/themesberg/flowbite-svelte/commit/4e9c9ce69e06b1a8e4394c3920c75606894c06d3))
- no dropdown docs ([4f92d9b](https://github.com/themesberg/flowbite-svelte/commit/4f92d9b56a53677bed7264b6f044e64a10c42c7e))
- update Htwo using scroll-mt-20 ([2006490](https://github.com/themesberg/flowbite-svelte/commit/200649069a05c6df4ed0e269d3479526092afe01))

### [0.26.8](https://github.com/themesberg/flowbite-svelte/compare/v0.26.7...v0.26.8) (2022-09-03)

### Features

- dropdown button ([f6347f2](https://github.com/themesberg/flowbite-svelte/commit/f6347f280cbfc552d001aa22128026174b46a6f3))
- more Frame inheritance ([bb72d69](https://github.com/themesberg/flowbite-svelte/commit/bb72d6952386bd0f6dec4711795e3591a6837c02))
- popover finalization ([c71481e](https://github.com/themesberg/flowbite-svelte/commit/c71481ec18e2850488d86cfdb583587eae4a19b2))

### Bug Fixes

- missing 683restProps ([0d52fd1](https://github.com/themesberg/flowbite-svelte/commit/0d52fd1b4168c8cc707c174dc2c18f532cf2e93c))
- no triggers error ([83075e1](https://github.com/themesberg/flowbite-svelte/commit/83075e1a969bdf93a520bd9e35b339e36bf4f325))
- remove unused imports ([acb58b9](https://github.com/themesberg/flowbite-svelte/commit/acb58b9144948feeb3c1c14b41a71d2122187340))

### [0.26.7](https://github.com/themesberg/flowbite-svelte/compare/v0.26.6...v0.26.7) (2022-09-03)

### Features

- add Layout component ([2204586](https://github.com/themesberg/flowbite-svelte/commit/22045861703bf3e46cc7900e15c4db64d5246c50))
- add paragraphs page ([db973a3](https://github.com/themesberg/flowbite-svelte/commit/db973a3929bfdc8c4dd48338cc114bdc2c808fb8))

### Bug Fixes

- add html block to text page ([37e910a](https://github.com/themesberg/flowbite-svelte/commit/37e910ae269099865865580d419b8dd05dccb7a8))

### [0.26.6](https://github.com/themesberg/flowbite-svelte/compare/v0.26.5...v0.26.6) (2022-09-02)

### Features

- add highlight to Span component and update heading page ([d47121b](https://github.com/themesberg/flowbite-svelte/commit/d47121ba47e6c6e3dfdd366128f51da77a966e0f))
- add Text decoration examples to text page ([fe074cd](https://github.com/themesberg/flowbite-svelte/commit/fe074cd2a36d780333444f276de69edec51649d5))
- add underline and decoratio class to Span ([f3b11a9](https://github.com/themesberg/flowbite-svelte/commit/f3b11a92b3782c27e09f25c894a81402661b73d3))

### Bug Fixes

- header blocking anchor links ([af6d2d6](https://github.com/themesberg/flowbite-svelte/commit/af6d2d6eb9bb630e58e76fd214f8a14f0435dc2f))
- remove TextGradient and Underline ([cb7b2d7](https://github.com/themesberg/flowbite-svelte/commit/cb7b2d753f110cad4677f990d60a11154e38ac93))

### [0.26.5](https://github.com/themesberg/flowbite-svelte/compare/v0.26.4...v0.26.5) (2022-09-02)

### Features

- add DescriptionList, List, Span components ([495b61e](https://github.com/themesberg/flowbite-svelte/commit/495b61eb0d81eb9ae06a34fa981dd42a81983ea6))
- add Ul, Li, Span component ([86d8b66](https://github.com/themesberg/flowbite-svelte/commit/86d8b661f2524f25162a99b6d3b8df761a85b01b))

### Bug Fixes

- blockquote page formating ([1641d45](https://github.com/themesberg/flowbite-svelte/commit/1641d45bdc032c01cd201967bf362d9f8a19a422))
- Heading to the original code ([5604da5](https://github.com/themesberg/flowbite-svelte/commit/5604da5f348420f8878e44d591e9a8704b23e4a0))
- List in cards page to Listgroup ([b8e05f4](https://github.com/themesberg/flowbite-svelte/commit/b8e05f4f97fbbb0236872b2b5f18f0928c34ad55))
- rebase merge conflict Alert.svelte ([38df84a](https://github.com/themesberg/flowbite-svelte/commit/38df84a21124d3d3c3c1d716ff21bd678b156b09))
- removed Ol component ([569f2e3](https://github.com/themesberg/flowbite-svelte/commit/569f2e3a51a59abba641c669949b4b5372c56a01))
- rename List to Listgroup and ListItem to ListgroupItem ([1b70110](https://github.com/themesberg/flowbite-svelte/commit/1b7011062a729452604b3a0dd1ed54f28ab49132))

### [0.26.4](https://github.com/themesberg/flowbite-svelte/compare/v0.26.3...v0.26.4) (2022-09-02)

### Bug Fixes

- programatic popper open merged ([86f9874](https://github.com/themesberg/flowbite-svelte/commit/86f9874e1c2390e3571b6df96acfa61af23fd865))

### [0.26.3](https://github.com/themesberg/flowbite-svelte/compare/v0.26.2...v0.26.3) (2022-09-01)

### Features

- frame abstraction ([47e4126](https://github.com/themesberg/flowbite-svelte/commit/47e4126fa02ff6b9c93d3ee7e17fee79195ac1d3))

### Bug Fixes

- docs fixes due to dropdown api change ([869f8d7](https://github.com/themesberg/flowbite-svelte/commit/869f8d7bdea3a7ba97702e31b52f0e33fce3c911))
- remove flowbite-svelte-blocks page, add a link ([2b9e3d3](https://github.com/themesberg/flowbite-svelte/commit/2b9e3d3f72731ace8abb563e28e98309dbc58b3b))
- remove heros icons from ([203f14c](https://github.com/themesberg/flowbite-svelte/commit/203f14c578e57429892e0df41452abbdef1b3a4e))
- remove svelte-flag-icons from devDependencies ([8f48867](https://github.com/themesberg/flowbite-svelte/commit/8f488677958313a2debaa3f953314d6452a63013))
- update svelte-sidebar-menu version ([1106d16](https://github.com/themesberg/flowbite-svelte/commit/1106d161d06244d5db61641babc7691d28388fbd))

### [0.26.2](https://github.com/themesberg/flowbite-svelte/compare/v0.26.1...v0.26.2) (2022-08-30)

### Bug Fixes

- add icon page ([0f5c966](https://github.com/themesberg/flowbite-svelte/commit/0f5c96626954d4174d10b99f2934365628f2ec08))
- Iconinput click handler example ([2f5afc7](https://github.com/themesberg/flowbite-svelte/commit/2f5afc7554a7bb43d231cc39001ea31b9deafd1c))
- remove heros icons from buttons page ([ec81a39](https://github.com/themesberg/flowbite-svelte/commit/ec81a393f438e2285d36ed7fea787af956c6f128))
- remove heros icons from checkbox page ([1ed983c](https://github.com/themesberg/flowbite-svelte/commit/1ed983c2b230e6309ae6882972176480f8060487))
- remove old tab components ([a61dd72](https://github.com/themesberg/flowbite-svelte/commit/a61dd728d1eb01bdbfeb61ff3adf8f96d7a1fbde))
- remove svelte:component from FooterIcon ([0406128](https://github.com/themesberg/flowbite-svelte/commit/04061286046845c7f5c34f56ef89013d4a610aee))

### [0.26.1](https://github.com/themesberg/flowbite-svelte/compare/v0.26.0...v0.26.1) (2022-08-29)

### Features

- new tab components and page ([7c53437](https://github.com/themesberg/flowbite-svelte/commit/7c534377c31384b609774db19b0bace7fee3d5cb))
- working on Tabs ([201c124](https://github.com/themesberg/flowbite-svelte/commit/201c124e33bed0d1b13cfe2e3f6ba5ea0bfc6c1c))

### Bug Fixes

- fixing the tab page layout problem ([bc3b7bf](https://github.com/themesberg/flowbite-svelte/commit/bc3b7bf32100abbbab3fede7fa6a912ff81d00f6))
- remove heros from cards page ([c46f0b3](https://github.com/themesberg/flowbite-svelte/commit/c46f0b3f9a16793f12d68fd3d1b9e973dd1f7b4a))
- remove heros from megamenu and list-group page ([9980b7d](https://github.com/themesberg/flowbite-svelte/commit/9980b7d98668c0356217dd3aac810c52cd5e0e51))
- remove heros from popover page ([eeff79f](https://github.com/themesberg/flowbite-svelte/commit/eeff79f53733a8f5cbb480eead692f111f96b07c))
- remove heros from sidebars page ([a3981a0](https://github.com/themesberg/flowbite-svelte/commit/a3981a09b6b36dcbcb90cfad789bee6a10dae9a1))
- remove heros icons from select and toggle pages ([fba7660](https://github.com/themesberg/flowbite-svelte/commit/fba7660c1bf08c47a9d0200db545f0b1fce457a9))
- remove unused icon prop ([10e8c81](https://github.com/themesberg/flowbite-svelte/commit/10e8c81dae9e0470ef875fc95dd7d89decdae732))
- Review component and review in the ratings page ([afe6972](https://github.com/themesberg/flowbite-svelte/commit/afe69726d08a3cad7de7f29db131909816bc9c3e))

## [0.26.0](https://github.com/themesberg/flowbite-svelte/compare/v0.25.24...v0.26.0) (2022-08-29)

### ⚠ BREAKING CHANGES

- Tooltip changed in accordance to new Popper implementation.

* Tooltip examples corrected
* Avatar example corrected

### Features

- tooltips new API ([d9dacf9](https://github.com/themesberg/flowbite-svelte/commit/d9dacf9f65e85be93a3458dd5359d614a0dd12a0))

### Bug Fixes

- Avatar tooltip example ([ff7c1af](https://github.com/themesberg/flowbite-svelte/commit/ff7c1af20306609f77831ff1d2632700a9f596da))
- docs corrections ([f208323](https://github.com/themesberg/flowbite-svelte/commit/f208323ac1457b88572aaae37531e6b3da1055de))
- docs corrections 2 ([5adb4d8](https://github.com/themesberg/flowbite-svelte/commit/5adb4d816591d7bc9aff2e549fc364c80e650b4b))

- Merge branch 'jjagielka-tooltip' ([1c37601](https://github.com/themesberg/flowbite-svelte/commit/1c3760139e24569287891c1ca3f67f2e0e3b9168))

### [0.25.24](https://github.com/themesberg/flowbite-svelte/compare/v0.25.23...v0.25.24) (2022-08-28)

### Features

- popper reloaded ([a4b851e](https://github.com/themesberg/flowbite-svelte/commit/a4b851e2409356a90fd6aaae62db327b505bdcb2))
- popper reloaded part 2 ([2482870](https://github.com/themesberg/flowbite-svelte/commit/2482870842386c8c1e5824869ce7822b8682e8a0))

### Bug Fixes

- tab page timeline ([ab598a5](https://github.com/themesberg/flowbite-svelte/commit/ab598a59a3d373f14740a42bbaec3cb276eed34b))

### [0.25.23](https://github.com/themesberg/flowbite-svelte/compare/v0.25.22...v0.25.23) (2022-08-28)

### Bug Fixes

- BREAKING CHANGE for timeline components ([8b30105](https://github.com/themesberg/flowbite-svelte/commit/8b30105060d150d632ea6fbfac8e1f5639f82546))

### [0.25.22](https://github.com/themesberg/flowbite-svelte/compare/v0.25.21...v0.25.22) (2022-08-28)

### Bug Fixes

- create icon slot for Alert so that users can add svg or svelte component ([45244ec](https://github.com/themesberg/flowbite-svelte/commit/45244ec05f99298d150751209980dce519873163))
- remove heros from: ([57f6928](https://github.com/themesberg/flowbite-svelte/commit/57f69282190f5d33d7ac17c6adeab36b89184f47))
- update Alert color type ([fd819fb](https://github.com/themesberg/flowbite-svelte/commit/fd819fb59d2d01f900ad76449afabfa22de6d5b1))
- update Timeline components ([4b47d6b](https://github.com/themesberg/flowbite-svelte/commit/4b47d6b5d09abad3b2d8fc29c2b38287726c44d7))

### [0.25.21](https://github.com/themesberg/flowbite-svelte/compare/v0.25.20...v0.25.21) (2022-08-27)

### Bug Fixes

- add relative class to Hr component ([d8c6fbf](https://github.com/themesberg/flowbite-svelte/commit/d8c6fbf367a43b7c13ea55a56ae9c9f0b94fa96e))

### [0.25.20](https://github.com/themesberg/flowbite-svelte/compare/v0.25.19...v0.25.20) (2022-08-27)

### Bug Fixes

- index page space ([6ab9a19](https://github.com/themesberg/flowbite-svelte/commit/6ab9a19e004fc19ba3bd696acedbc5bbc0ced966))
- remove heros from: ([7055f4c](https://github.com/themesberg/flowbite-svelte/commit/7055f4c5ddaa91e15cabaf7d1112a149cf81374d))
- remove heros icon from Carousel ([2c7d4c9](https://github.com/themesberg/flowbite-svelte/commit/2c7d4c9a6edc1a4dd4005e5dcf46fec8b5dc0a52))

### [0.25.19](https://github.com/themesberg/flowbite-svelte/compare/v0.25.18...v0.25.19) (2022-08-27)

### Bug Fixes

- remove Home icons from all pages ([7ac0e7a](https://github.com/themesberg/flowbite-svelte/commit/7ac0e7aa3edc5486d597a61775a5694c76b4bb35))
- removed Home icon from BreadcrumbItem ([66f00dd](https://github.com/themesberg/flowbite-svelte/commit/66f00dd9e024d97c2b9766e30b03b775f227c672))

### [0.25.18](https://github.com/themesberg/flowbite-svelte/compare/v0.25.17...v0.25.18) (2022-08-27)

### Bug Fixes

- change BreadcrumbItem home for all pages ([f5f895f](https://github.com/themesberg/flowbite-svelte/commit/f5f895f6157b03e435975c5735329f8dfc984485))

### [0.25.17](https://github.com/themesberg/flowbite-svelte/compare/v0.25.16...v0.25.17) (2022-08-27)

### Features

- combine Accordionflush and AccordionItem ([e53fa64](https://github.com/themesberg/flowbite-svelte/commit/e53fa6421ca747ed46d6432b67715b3eedf4cbba))

### Bug Fixes

- textarea docs ([133b933](https://github.com/themesberg/flowbite-svelte/commit/133b9334841ac13d82c3a86bc24b3375de0972ff))

### [0.25.16](https://github.com/themesberg/flowbite-svelte/compare/v0.25.15...v0.25.16) (2022-08-25)

### Features

- create utilities/closebutton, label, and toolbar ([3ad9775](https://github.com/themesberg/flowbite-svelte/commit/3ad9775ffbed66908cbaa82845b86151e179d534))
- toolbar ([f02ff55](https://github.com/themesberg/flowbite-svelte/commit/f02ff558fa938913c32117ff51b46bdd6088e38a))
- toolbar w/html ([93116c3](https://github.com/themesberg/flowbite-svelte/commit/93116c34b4063eb9d166d85ef3dd7e20126fa29e))

### [0.25.15](https://github.com/themesberg/flowbite-svelte/compare/v0.25.14...v0.25.15) (2022-08-25)

### Bug Fixes

- removed drawer component and page from the main ([5cf77f0](https://github.com/themesberg/flowbite-svelte/commit/5cf77f008aff26e64bd210a3bdf60e5f25aebc89))

### [0.25.14](https://github.com/themesberg/flowbite-svelte/compare/v0.25.13...v0.25.14) (2022-08-25)

### Features

- add icon components rather than import a library ([9dffb40](https://github.com/themesberg/flowbite-svelte/commit/9dffb400607d8bb4dd98e877e466956157016ff7))
- add Img component, images, and page ([b2aec04](https://github.com/themesberg/flowbite-svelte/commit/b2aec047694aab0bbcbc58d93af8c021e27d4f96))
- add Img page and examples ([ed3d83f](https://github.com/themesberg/flowbite-svelte/commit/ed3d83f34e195d67e3c7a334d1226d0876441f47))
- add PaperAirplane icon ([90d2543](https://github.com/themesberg/flowbite-svelte/commit/90d25435eb9cc68b38febaba41b5782efb755981))
- textarea ([47d51be](https://github.com/themesberg/flowbite-svelte/commit/47d51be427b056793cf64e4089cf4a4a7ba310d7))
- textarea / fix ([93cdb01](https://github.com/themesberg/flowbite-svelte/commit/93cdb019326ebcaddd3482c5e41c8a635461ac67))

### Bug Fixes

- avatar dot alignment ([2273c0c](https://github.com/themesberg/flowbite-svelte/commit/2273c0ceb82cc634558e7e88aff295c722d73c9f))
- buttongroup divider ([f5bedaf](https://github.com/themesberg/flowbite-svelte/commit/f5bedafa9a0b36f4a42a54e8c37593d7ee9d8916))
- Htwo for typography pages ([0921539](https://github.com/themesberg/flowbite-svelte/commit/0921539d06e54f89d9e9dd52c70cdbc81b62dd3e))

### [0.25.13](https://github.com/themesberg/flowbite-svelte/compare/v0.25.12...v0.25.13) (2022-08-23)

### Features

- add bind:value to Iconinput ([87616e2](https://github.com/themesberg/flowbite-svelte/commit/87616e2222611bfabd77c3f7699c5f716015e420))
- add link examples ([b129251](https://github.com/themesberg/flowbite-svelte/commit/b12925106d6ffe482dfbde5623925f72abe8a577))
- add links page ([cdb2566](https://github.com/themesberg/flowbite-svelte/commit/cdb2566640bc5153e4d310dc2306aaafe432f5de))

### [0.25.12](https://github.com/themesberg/flowbite-svelte/compare/v0.25.11...v0.25.12) (2022-08-22)

### Features

- add Hr component and page ([f289c1e](https://github.com/themesberg/flowbite-svelte/commit/f289c1ebd6cfcbcfde87b28ce3108abaf54248ca))

### [0.25.11](https://github.com/themesberg/flowbite-svelte/compare/v0.25.10...v0.25.11) (2022-08-22)

### Features

- add Blockquote ([89cbfbd](https://github.com/themesberg/flowbite-svelte/commit/89cbfbdf56e7beca90b00cf4c9c033789b2a2ba5))
- add size to Rating component ([7c2784e](https://github.com/themesberg/flowbite-svelte/commit/7c2784efff60877014c14a8acc7760f845671100))
- add User review, User testimonial, Paragraph context, Blockquote icon to typography/blockquote page ([73143ba](https://github.com/themesberg/flowbite-svelte/commit/73143bad816f6b3249fff3486d3b8569f45fde7f))

### [0.25.10](https://github.com/themesberg/flowbite-svelte/compare/v0.25.9...v0.25.10) (2022-08-22)

### Bug Fixes

- buttons fine tuning ([353f631](https://github.com/themesberg/flowbite-svelte/commit/353f6312557fbef802e4e0b61d3638ab4190d2e3))
- buttons fine tuning ([9f4c927](https://github.com/themesberg/flowbite-svelte/commit/9f4c927fb8303e7e65163ecd6413cdb834d1a4f3))

### [0.25.9](https://github.com/themesberg/flowbite-svelte/compare/v0.25.8...v0.25.9) (2022-08-21)

### Bug Fixes

- docs for radio ([add38b2](https://github.com/themesberg/flowbite-svelte/commit/add38b26fd4669a591916b7fa42e107868cc90a1))
- move @floating-ui/dom, classnames, svelte-heros, @popperjs/core from devDpendencies to dependencies ([ee5d31a](https://github.com/themesberg/flowbite-svelte/commit/ee5d31af1b23e00e565c2a60b354b85f2beb54d1))
- popover html ([d49f808](https://github.com/themesberg/flowbite-svelte/commit/d49f808b8a05bd735a9f90c661710dddfd163cad))

### [0.25.8](https://github.com/themesberg/flowbite-svelte/compare/v0.25.7...v0.25.8) (2022-08-21)

### Features

- add H1, H2, A, P, Higlight components ([3f80473](https://github.com/themesberg/flowbite-svelte/commit/3f804731e6a093c1e34f8b3be6289f930c372a96))
- add Heading and removed H1 and H2 ([b2be994](https://github.com/themesberg/flowbite-svelte/commit/b2be9945c39bcbfe23a0df53348ce768c5958255))
- add Mark and TextGradient ([343e719](https://github.com/themesberg/flowbite-svelte/commit/343e719406bc146639882f97bbeafbc2de9514cb))

### [0.25.7](https://github.com/themesberg/flowbite-svelte/compare/v0.25.6...v0.25.7) (2022-08-21)

### Features

- dropdown as Popper + fixes ([67fdf78](https://github.com/themesberg/flowbite-svelte/commit/67fdf7837f36d63b3683e0b6f6e78fbf91f6bf23))

### [0.25.6](https://github.com/themesberg/flowbite-svelte/compare/v0.25.5...v0.25.6) (2022-08-20)

### Features

- fixing standard-version ([cd316e4](https://github.com/themesberg/flowbite-svelte/commit/cd316e412171689e04ec435dfc31abd89b7cbe1d))

### [0.25.5](https://github.com/themesberg/flowbite-svelte/compare/v0.25.4...v0.25.5) (2022-08-20)

### Bug Fixes

- Iconinput has unused export property value when I install it ([b19afc9](https://github.com/themesberg/flowbite-svelte/commit/b19afc9284aa2c92c5a15b89de9dc9111652f0f7))

### [0.25.4](https://github.com/themesberg/flowbite-svelte/compare/v0.25.2...v0.25.4) (2022-08-20)

### Bug Fixes

- add Table color hover and example ([b49c139](https://github.com/themesberg/flowbite-svelte/commit/b49c139c6d09a4563d462b35a5c49da605006d79))

### [0.25.2](https://github.com/themesberg/flowbite-svelte/compare/v0.25.1...v0.25.2) (2022-08-19)

### Features

- add popover related files ([8b5050b](https://github.com/themesberg/flowbite-svelte/commit/8b5050b0e9f6e45533b858c7aa392463cfb6cc91))
- popover ([c41ddc4](https://github.com/themesberg/flowbite-svelte/commit/c41ddc408f3696e05ee66de4922b95ee5cee1a08))

### Bug Fixes

- change href=# to href=/ in popover page ([f885a92](https://github.com/themesberg/flowbite-svelte/commit/f885a924706e477349c975641fc6fba0b4df45e5))
- missing Popper ([ff4b0e7](https://github.com/themesberg/flowbite-svelte/commit/ff4b0e772e228f03c1024e222fcc91e63adc23ba))

### [0.25.1](https://github.com/themesberg/flowbite-svelte/compare/v0.25.0...v0.25.1) (2022-08-18)

### Bug Fixes

- move @floating-ui/dom from dependencies to devDependencies ([6668ec8](https://github.com/themesberg/flowbite-svelte/commit/6668ec8ca1559366ad0cbc223c9c91e3337ceb22))

## [0.25.0](https://github.com/themesberg/flowbite-svelte/compare/v0.24.19...v0.25.0) (2022-08-18)

### Bug Fixes

- [#226](https://github.com/themesberg/flowbite-svelte/issues/226) for double on:click in DropdownItem ([c125d2d](https://github.com/themesberg/flowbite-svelte/commit/c125d2d02e3818cedb83994e930ca5cc7075571c))
- migrate to sveltekit 1.0.0 ([434ec99](https://github.com/themesberg/flowbite-svelte/commit/434ec998e1f96ab5e35eda6c6c78f6db2279aa4e))
- update pnpm-lock ([4926a47](https://github.com/themesberg/flowbite-svelte/commit/4926a47bd529601b1a0709533fee2b5291e59eb8))

### [0.24.19](https://github.com/themesberg/flowbite-svelte/compare/v0.24.18...v0.24.19) (2022-08-17)

### Features

- add pointerEvent prop to Iconinput to show/hide cursor ([dffa324](https://github.com/themesberg/flowbite-svelte/commit/dffa3247856c7245ecb8a67554ce77b797fe8627))

### [0.24.18](https://github.com/themesberg/flowbite-svelte/compare/v0.24.17...v0.24.18) (2022-08-16)

### Features

- add Iconinput click handler example ([d815212](https://github.com/themesberg/flowbite-svelte/commit/d8152126236e839d3d7bc6e035d0afa432d96856))

### [0.24.17](https://github.com/themesberg/flowbite-svelte/compare/v0.24.16...v0.24.17) (2022-08-16)

### Features

- add sticky navbar ([4010ea8](https://github.com/themesberg/flowbite-svelte/commit/4010ea85483cf0c5a26275fe710ed34e4142846e))

### [0.24.16](https://github.com/themesberg/flowbite-svelte/compare/v0.24.15...v0.24.16) (2022-08-16)

### Features

- add disabled and classes to InteractiveTabHead component ([869fb1b](https://github.com/themesberg/flowbite-svelte/commit/869fb1b34f5a0e5a254cdc09b25195bf621a25d6))

### [0.24.15](https://github.com/themesberg/flowbite-svelte/compare/v0.24.14...v0.24.15) (2022-08-16)

### Bug Fixes

- update prop names for Alert ([3775700](https://github.com/themesberg/flowbite-svelte/commit/377570061f48de43af44c5f87f46b049f4d87341))

### [0.24.14](https://github.com/themesberg/flowbite-svelte/compare/v0.24.13...v0.24.14) (2022-08-16)

### Features

- add custom color to Alert component and update props ([2e2a71b](https://github.com/themesberg/flowbite-svelte/commit/2e2a71b4fb83bca28a1bf6b107f4163acbb6b011))

### [0.24.13](https://github.com/themesberg/flowbite-svelte/compare/v0.24.12...v0.24.13) (2022-08-16)

### Features

- add disabled to InteractiveTabs ([f5ca0fe](https://github.com/themesberg/flowbite-svelte/commit/f5ca0fe858a50ef2c017ed6ec266c0012166b5f9))
- add Tabs component for all tab ([758e2e7](https://github.com/themesberg/flowbite-svelte/commit/758e2e743eb845c7190a7c6c2a9888c67c46db73))

### [0.24.12](https://github.com/themesberg/flowbite-svelte/compare/v0.24.11...v0.24.12) (2022-08-16)

### Features

- add active color to InteractiveTabs and InteractiveTabHead component ([7995e21](https://github.com/themesberg/flowbite-svelte/commit/7995e210f98325350b055a43199fa4d7750ea225))

### [0.24.11](https://github.com/themesberg/flowbite-svelte/compare/v0.24.10...v0.24.11) (2022-08-15)

### Features

- add sticky footer, add $$props.class to all skeleton components ([1fad8dc](https://github.com/themesberg/flowbite-svelte/commit/1fad8dc9d8c0bc1428daeada82f44accc5f7e9a0))

### [0.24.10](https://github.com/themesberg/flowbite-svelte/compare/v0.24.9...v0.24.10) (2022-08-15)

### Features

- modal - crypto ([47cf678](https://github.com/themesberg/flowbite-svelte/commit/47cf678ef2a7bf10c842e367a37e2aedebe7a8fc))
- modal - crypto + html ([26475ed](https://github.com/themesberg/flowbite-svelte/commit/26475edd98a2c73fbe02580fefb4c8455e25f1bb))

### Bug Fixes

- create Coinbase, Fortmatic, Metamask, OperaWallet, and WalletConnect component ([f8eabc5](https://github.com/themesberg/flowbite-svelte/commit/f8eabc5b23b8c0d9fab75deca393858952406660))

### [0.24.9](https://github.com/themesberg/flowbite-svelte/compare/v0.24.8...v0.24.9) (2022-08-15)

### Features

- button group ([bb95b98](https://github.com/themesberg/flowbite-svelte/commit/bb95b98c0e4b70f3958c778ac2dc8367c67df8d7))

### Bug Fixes

- dropdown open/close api ([d2aa6f7](https://github.com/themesberg/flowbite-svelte/commit/d2aa6f71e7e804d474eb46e58030097d9bd9962f))
- dropdown open/close api - docs ([f299c28](https://github.com/themesberg/flowbite-svelte/commit/f299c284a4ef3c9539e17677b815f60dd8d1e6f2))
- no href on <a> buttons ([ab13df8](https://github.com/themesberg/flowbite-svelte/commit/ab13df85aeac5368383bb708c9cb3146e418066f))
- window is undefined ([b752882](https://github.com/themesberg/flowbite-svelte/commit/b752882ad0f0f6a7c196223649463903453f48d6))
- window is undefined/2 ([4c0ca77](https://github.com/themesberg/flowbite-svelte/commit/4c0ca77eddfae2a04d10bc1ea3dc53671864b181))

### [0.24.8](https://github.com/themesberg/flowbite-svelte/compare/v0.24.7...v0.24.8) (2022-08-12)

### Bug Fixes

- change function clickOutside to arrow function ([71e71e0](https://github.com/themesberg/flowbite-svelte/commit/71e71e0e482ad9939f9d135b1608b5cc8d31d899))
- update createprops and update props ([0739b92](https://github.com/themesberg/flowbite-svelte/commit/0739b9296caddcba85f849b222e6548a961dbd34))

### [0.24.7](https://github.com/themesberg/flowbite-svelte/compare/v0.24.5...v0.24.7) (2022-08-11)

### Features

- add Review component ([67af517](https://github.com/themesberg/flowbite-svelte/commit/67af517e32dfc19c6079e5d1925a234f0162cc34))
- add Review component ([d41b11d](https://github.com/themesberg/flowbite-svelte/commit/d41b11d4ef00d1d6d0d824d4fcdc9c964a78a7d2))
- add Review component, page, and prop ([4446e1e](https://github.com/themesberg/flowbite-svelte/commit/4446e1eba3706e291f0cb3812b4ffb61df48eb46))

### [0.24.6](https://github.com/themesberg/flowbite-svelte/compare/v0.24.5...v0.24.6) (2022-08-11)

### Features

- add Review component ([d41b11d](https://github.com/themesberg/flowbite-svelte/commit/d41b11d4ef00d1d6d0d824d4fcdc9c964a78a7d2))

### [0.24.5](https://github.com/themesberg/flowbite-svelte/compare/v0.24.4...v0.24.5) (2022-08-11)

### Features

- add rating count and update app.css ([e5d642b](https://github.com/themesberg/flowbite-svelte/commit/e5d642b4a246c1716db8461e6ecbc26a7abad9d0))

### Bug Fixes

- h3 change, modal page update ([945762f](https://github.com/themesberg/flowbite-svelte/commit/945762f325736ac316a7d1cb68d546f0c8acd982))
- RatingComment component ([032aa24](https://github.com/themesberg/flowbite-svelte/commit/032aa24925f082459992104d5040804e0d532153))
- update rating page for AdvancedRating ([f1dc978](https://github.com/themesberg/flowbite-svelte/commit/f1dc978b5775e0089cc6c8aa1fac1c5ed8b97dca))

### [0.24.4](https://github.com/themesberg/flowbite-svelte/compare/v0.24.3...v0.24.4) (2022-08-09)

### Bug Fixes

- remove custom from Button component ([6114f4c](https://github.com/themesberg/flowbite-svelte/commit/6114f4c9f5d9ad0848d5e7c000db6c4c9661ad39))
- remove h-4 w-4 from Iconinput example in the input-field page ([4d5f396](https://github.com/themesberg/flowbite-svelte/commit/4d5f396ea80389b88ec6a8437228d5dbadd46877))
- update Button component ([330aae9](https://github.com/themesberg/flowbite-svelte/commit/330aae91c6c1b19cbbd1f35177f5e4bac9de3904))
- update Iconinput ([2b4a7b5](https://github.com/themesberg/flowbite-svelte/commit/2b4a7b55f7db35f3e5b0cc042aa27a84ff741194))

### [0.24.3](https://github.com/themesberg/flowbite-svelte/compare/v0.24.2...v0.24.3) (2022-08-09)

### Features

- add size to Iconinput component ([f041953](https://github.com/themesberg/flowbite-svelte/commit/f04195350a179d55a7315a127d5b116deaac1f41))

### Bug Fixes

- add rel=external and / to links to form page ([a237d18](https://github.com/themesberg/flowbite-svelte/commit/a237d1811eb1d6d6f3af545f109c71b8cadbd014))
- breadcrumb and add rel=external to pages in the forms dir. ([509d72a](https://github.com/themesberg/flowbite-svelte/commit/509d72ae703a0d844653da87aea9119a90cc1018))
- change package.json>engines>node to 16.0.0 since Verce does not accept. But use local node v16.16.0 for playwright test ([08130e9](https://github.com/themesberg/flowbite-svelte/commit/08130e988c1243b6a248737ed604223c694d5981))
- clean up ref ([9e8427b](https://github.com/themesberg/flowbite-svelte/commit/9e8427bdbe7ee397a8c5c123a75e48abca298781))
- done type check for all pages ([d91b018](https://github.com/themesberg/flowbite-svelte/commit/d91b018c3a66a6ac4cef2317651e1821083ab033))
- remove utils/OptsButton ([04ebd83](https://github.com/themesberg/flowbite-svelte/commit/04ebd83aae8a3f3efabac8f3f144b65fabb04da1))
- Toggle props and typo update ([9a40224](https://github.com/themesberg/flowbite-svelte/commit/9a40224fc26bfefd9d28ec5d364bf4d7430da6f0))
- type and layout footer padding fix ([999d291](https://github.com/themesberg/flowbite-svelte/commit/999d29158fde736dbf4e19c9545fff6ba41dc7e7))
- typo ([ec6f019](https://github.com/themesberg/flowbite-svelte/commit/ec6f019501acf4ba2fb105b8cc04a6d347d0dcf1))

### [0.24.2](https://github.com/themesberg/flowbite-svelte/compare/v0.24.1...v0.24.2) (2022-08-07)

### Features

- add export divClass to Toast for user custom CSS ([7625c01](https://github.com/themesberg/flowbite-svelte/commit/7625c017af9a91920880b3d9c09d8f02924178e5))

### [0.24.1](https://github.com/themesberg/flowbite-svelte/compare/v0.24.0...v0.24.1) (2022-08-07)

### Bug Fixes

- change from import { CloseButton } from $lib to import CloseButton from "../utils/CloseButton.svelte" in lib dir ([4eb4346](https://github.com/themesberg/flowbite-svelte/commit/4eb4346a2c4679d58c00309e0cb1a28304888a72))
- update Button color types ([974df12](https://github.com/themesberg/flowbite-svelte/commit/974df12eaf2d796676700df09f2ee83d24ffc328))

## [0.24.0](https://github.com/themesberg/flowbite-svelte/compare/v0.23.3...v0.24.0) (2022-08-07)

### ⚠ BREAKING CHANGES

- change node version to 0.16.16 since new playwright and sveltekit require it, https://github.com/sveltejs/kit/issues/5842

### Features

- change node version to 0.16.16 since new playwright and sveltekit require it, https://github.com/sveltejs/kit/issues/5842 ([6175c2c](https://github.com/themesberg/flowbite-svelte/commit/6175c2cb54c60829eb329bce90772e59b888063f))

### Bug Fixes

- [#200](https://github.com/themesberg/flowbite-svelte/issues/200) undefined in tooltips ([4ed2ec0](https://github.com/themesberg/flowbite-svelte/commit/4ed2ec04945676cbc3e40011fb7790d1de18d8db))
- A11y fix for all alt taking out picture for img tag ([a247c32](https://github.com/themesberg/flowbite-svelte/commit/a247c32171543450647877a0f7192e63ee64fbb5))
- add CloseButton to index and change import from $lib ([cc8fe25](https://github.com/themesberg/flowbite-svelte/commit/cc8fe2504474f6a0fbefb5474ef5cf798f6a28a8))
- alerts with list color removal ([f940441](https://github.com/themesberg/flowbite-svelte/commit/f940441098e4f033b6dd405d0cb774e6d8b5030e))
- clean up import from utils for docs ([b50126d](https://github.com/themesberg/flowbite-svelte/commit/b50126d2f78e7613e48008b46c0bd77cdc7471fa))

### [0.23.3](https://github.com/themesberg/flowbite-svelte/compare/v0.23.2...v0.23.3) (2022-08-05)

### Bug Fixes

- remove EcommerceCard and SignInCard ([7e6b2b6](https://github.com/themesberg/flowbite-svelte/commit/7e6b2b689a86cb47df080908ef3217345361667a))
- SignInCard type update ([55c824a](https://github.com/themesberg/flowbite-svelte/commit/55c824aa08727eb3f07c12fc589158e7cc94fd5f))

### [0.23.2](https://github.com/themesberg/flowbite-svelte/compare/v0.23.1...v0.23.2) (2022-08-04)

### Features

- add events to NavLi and NavDropdown ([02e4032](https://github.com/themesberg/flowbite-svelte/commit/02e403211c93d8e81457e1006e21341f4deed352))

### [0.23.1](https://github.com/themesberg/flowbite-svelte/compare/v0.23.0...v0.23.1) (2022-08-04)

### Features

- add events to components ([d24e023](https://github.com/themesberg/flowbite-svelte/commit/d24e023ba671b9976e2c0df3529a66b15e251cea))
- add typography page ([52923fb](https://github.com/themesberg/flowbite-svelte/commit/52923fb66b55fed20c876ef7b9348fccadde04a3))

## [0.23.0](https://github.com/themesberg/flowbite-svelte/compare/v0.22.30...v0.23.0) (2022-08-04)

### ⚠ BREAKING CHANGES

- add datepicker

### Features

- add datepicker ([a8b70e6](https://github.com/themesberg/flowbite-svelte/commit/a8b70e67b61e4e038520cc66238861e368716e60))
- add datepicker ([32f8889](https://github.com/themesberg/flowbite-svelte/commit/32f88899256bed9effe6b23b4d24cd8380ce2aff))
- add datepicker examples ([590ec66](https://github.com/themesberg/flowbite-svelte/commit/590ec660f27e43b18c588d44c0899aa16a3fc870))
- add datepicker examples ([68e2462](https://github.com/themesberg/flowbite-svelte/commit/68e2462567838816ef116c3ed5b389e8de52f643))
- working on datepicker ([4fedccf](https://github.com/themesberg/flowbite-svelte/commit/4fedccfc3f04308b53712cc87849098a7e502d2a))

### [0.22.30](https://github.com/themesberg/flowbite-svelte/compare/v0.22.29...v0.22.30) (2022-08-03)

### Features

- add Tooltip custom CSS ([1466d16](https://github.com/themesberg/flowbite-svelte/commit/1466d16fff312ccdb22e1c282f49b7b156121d57))

### Bug Fixes

- revert Tooltip component ([9cedc68](https://github.com/themesberg/flowbite-svelte/commit/9cedc68014a7114c0e15691c26081bb9f5af88af))

### [0.22.29](https://github.com/themesberg/flowbite-svelte/compare/v0.22.28...v0.22.29) (2022-08-02)

### Bug Fixes

- call updatePosition and floatingMiddleware functions in onMount ([b905101](https://github.com/themesberg/flowbite-svelte/commit/b905101f9cdfc9573e455200a2e28ad5766705e1))

### [0.22.28](https://github.com/themesberg/flowbite-svelte/compare/v0.22.27...v0.22.28) (2022-08-02)

### Features

- drawer on progress ([027c6de](https://github.com/themesberg/flowbite-svelte/commit/027c6de72ff563df34a5d56fbe9d8ea571440ff8))
- start working drawer ([55a0ebf](https://github.com/themesberg/flowbite-svelte/commit/55a0ebfcb29743ad1b5222cad41b6ccf8610582b))

### Bug Fixes

- update Tooltip component ([df80539](https://github.com/themesberg/flowbite-svelte/commit/df8053996f8ea67d96ee5e70976a61f13e7df2ec))

### [0.22.27](https://github.com/themesberg/flowbite-svelte/compare/v0.22.26...v0.22.27) (2022-08-01)

### Bug Fixes

- update skeleton components ([6c49370](https://github.com/themesberg/flowbite-svelte/commit/6c49370ef244234373d4b87cb1a60e4aebdbf86f))
- update Svelte-Heros icon for Rating component ([d1c03fa](https://github.com/themesberg/flowbite-svelte/commit/d1c03fa4a0cb4b2cd4ccfe956d7d36ebd4161ed4))

### [0.22.26](https://github.com/themesberg/flowbite-svelte/compare/v0.22.25...v0.22.26) (2022-07-30)

### Features

- avatar w/tooltip / initials ([6b9a333](https://github.com/themesberg/flowbite-svelte/commit/6b9a333c96f3485b33a2fdeecc113138452acca0))

### [0.22.25](https://github.com/themesberg/flowbite-svelte/compare/v0.22.24...v0.22.25) (2022-07-29)

### Features

- alerts with lists ([5ad5f3c](https://github.com/themesberg/flowbite-svelte/commit/5ad5f3cfb6b8f68464475b11086f85b0d60cc068))

### [0.22.24](https://github.com/themesberg/flowbite-svelte/compare/v0.22.23...v0.22.24) (2022-07-29)

### Features

- badges new features ([775ecbc](https://github.com/themesberg/flowbite-svelte/commit/775ecbc04df58cd7c2517d103c963e7add92b5f6))

### Bug Fixes

- pink color ([e4551b5](https://github.com/themesberg/flowbite-svelte/commit/e4551b54e0b56c07bae45d2bddb1b2930a20fe72))

### [0.22.23](https://github.com/themesberg/flowbite-svelte/compare/v0.22.22...v0.22.23) (2022-07-29)

### Bug Fixes

- minor fixes / fine tuning ([57c1cf7](https://github.com/themesberg/flowbite-svelte/commit/57c1cf7f1bd461c417be1fd925766c045d72c015))

### [0.22.22](https://github.com/themesberg/flowbite-svelte/compare/v0.22.21...v0.22.22) (2022-07-28)

### Features

- focus trap for modals ([08604ac](https://github.com/themesberg/flowbite-svelte/commit/08604ac3475f28a5a35c037e47ecfc13ee13b877))

### [0.22.21](https://github.com/themesberg/flowbite-svelte/compare/v0.22.20...v0.22.21) (2022-07-28)

### Bug Fixes

- megamenu centered in small screen ([713aa9a](https://github.com/themesberg/flowbite-svelte/commit/713aa9ab5d1c390291bb61910f9eae4b68d5981e))

### [0.22.20](https://github.com/themesberg/flowbite-svelte/compare/v0.22.19...v0.22.20) (2022-07-28)

### [0.22.19](https://github.com/themesberg/flowbite-svelte/compare/v0.22.17...v0.22.19) (2022-07-27)

### Features

- modal - re-written ([4dd27af](https://github.com/themesberg/flowbite-svelte/commit/4dd27afd996328fcdc6c19895e1a6a6beef2c772))
- modal - re-written ([1c6a93d](https://github.com/themesberg/flowbite-svelte/commit/1c6a93dfe332a7f65058d25a4a68e542d15e9a21))

### [0.22.18](https://github.com/themesberg/flowbite-svelte/compare/v0.22.17...v0.22.18) (2022-07-27)

### [0.22.17](https://github.com/themesberg/flowbite-svelte/compare/v0.22.16...v0.22.17) (2022-07-26)

### [0.22.16](https://github.com/themesberg/flowbite-svelte/compare/v0.22.15...v0.22.16) (2022-07-26)

### Bug Fixes

- cards/index.md, buttons ([9b2ca39](https://github.com/themesberg/flowbite-svelte/commit/9b2ca3914681439e667b5b6026f6c6e22b56b6fd))

### [0.22.15](https://github.com/themesberg/flowbite-svelte/compare/v0.22.14...v0.22.15) (2022-07-26)

### Features

- cards - re-written ([1084f38](https://github.com/themesberg/flowbite-svelte/commit/1084f38514e4cac5662ae6b969dde27e829ea24e))
- cards - re-written ([52716e0](https://github.com/themesberg/flowbite-svelte/commit/52716e08ac0f4446e3c7160fc3dc83e515201d7d))
- cards - wip ([0948c89](https://github.com/themesberg/flowbite-svelte/commit/0948c89a124662b7c5c238350df341e0956dac8a))

### Bug Fixes

- cards layout on index.md pages ([2080f8e](https://github.com/themesberg/flowbite-svelte/commit/2080f8ee29163a8ad5208f37c95ebf498be92c39))

### [0.22.14](https://github.com/themesberg/flowbite-svelte/compare/v0.22.13...v0.22.14) (2022-07-25)

### Bug Fixes

- $$restProps before $$props.class ([9378cf5](https://github.com/themesberg/flowbite-svelte/commit/9378cf5349446ec8355317e98e462e379350a697))
- add padding to w-full ([e1008c9](https://github.com/themesberg/flowbite-svelte/commit/e1008c9620f18b42664059595ae3fe1e421e097b))
- layout and Toc padding ([6a67345](https://github.com/themesberg/flowbite-svelte/commit/6a6734545429c7228a1bf3cbc58f7e4739dbfe65))
- various minor fixes ([9ac3296](https://github.com/themesberg/flowbite-svelte/commit/9ac3296635db9e7af2a45cc928477ac15e831dc4))

### [0.22.13](https://github.com/themesberg/flowbite-svelte/compare/v0.22.12...v0.22.13) (2022-07-24)

### [0.22.12](https://github.com/themesberg/flowbite-svelte/compare/v0.22.11...v0.22.12) (2022-07-24)

### Features

- megamenu - code skel ([d02c5c7](https://github.com/themesberg/flowbite-svelte/commit/d02c5c78a5360f623ffe3fb3659265d679e43426))
- megamenu - wip ([02bbabc](https://github.com/themesberg/flowbite-svelte/commit/02bbabcdda0f924aefa2829a94e3b822bdb0bbf6))
- megamenu + examples ([2f24a26](https://github.com/themesberg/flowbite-svelte/commit/2f24a268dfe474da45a654d6a4bd128f4175ae44))

### Bug Fixes

- layout and index page ([7db0e00](https://github.com/themesberg/flowbite-svelte/commit/7db0e00d1094d4d03a7386fd96c13c5b2ee09f6f))
- layout logo ([1a78683](https://github.com/themesberg/flowbite-svelte/commit/1a78683e734bf0dae58fe704bd652fcef196dae9))
- layout width ([e17969e](https://github.com/themesberg/flowbite-svelte/commit/e17969ec2c6f2938ed1a7c7b8f083bd3da6801e8))
- position and classes ([caa1f13](https://github.com/themesberg/flowbite-svelte/commit/caa1f136e964503ff1976c7de7c006615038489b))
- removed console.log ([f0f7ee9](https://github.com/themesberg/flowbite-svelte/commit/f0f7ee96bc48310ed245c00678960ac9d2eaa05b))

### [0.22.11](https://github.com/themesberg/flowbite-svelte/compare/v0.22.10...v0.22.11) (2022-07-23)

### Features

- list group rewritten - API changed ([86c97dc](https://github.com/themesberg/flowbite-svelte/commit/86c97dc54581f634baed601c609e9d90c6c4611b))

### Bug Fixes

- background context added ([52c8dd5](https://github.com/themesberg/flowbite-svelte/commit/52c8dd5693f3d890e7b875ae1b0435c5a7313876))
- error fix for deployment ([be684a8](https://github.com/themesberg/flowbite-svelte/commit/be684a8057c08a7c07f3f6c370114d008dc2182e))
- field name change for ListGroupItemType ([da93d46](https://github.com/themesberg/flowbite-svelte/commit/da93d460c864e0a94f803420f73dbf976e185fee))

### [0.22.10](https://github.com/themesberg/flowbite-svelte/compare/v0.22.9...v0.22.10) (2022-07-23)

### Bug Fixes

- merge conflict fix with Hetarth02-main ([914c1f9](https://github.com/themesberg/flowbite-svelte/commit/914c1f95f80dfbd73542d68d39622d79bed1ea04))

### [0.22.9](https://github.com/themesberg/flowbite-svelte/compare/v0.22.8...v0.22.9) (2022-07-23)

### Bug Fixes

- using classnames dynamic class name for Footer ([52e17c7](https://github.com/themesberg/flowbite-svelte/commit/52e17c7dd8ad2599d1f41bc938930db615459b63))

### [0.22.8](https://github.com/themesberg/flowbite-svelte/compare/v0.22.7...v0.22.8) (2022-07-23)

### Bug Fixes

- add custom to Footer ([22f8f43](https://github.com/themesberg/flowbite-svelte/commit/22f8f430ae9a21acbbd95300b8633531d9a6dc5f))

### [0.22.7](https://github.com/themesberg/flowbite-svelte/compare/v0.22.6...v0.22.7) (2022-07-22)

### Features

- form buttons tinted removed ([5c2d619](https://github.com/themesberg/flowbite-svelte/commit/5c2d619c8c5ade960e2b3a59c20b809a40174829))

### Bug Fixes

- [#177](https://github.com/themesberg/flowbite-svelte/issues/177) export visible/autohide ([2127151](https://github.com/themesberg/flowbite-svelte/commit/2127151550a778d35bee5eb3b2b77f38423f50e4))

### [0.22.6](https://github.com/themesberg/flowbite-svelte/compare/v0.22.5...v0.22.6) (2022-07-22)

### Features

- select input [#50](https://github.com/themesberg/flowbite-svelte/issues/50) ([8cea993](https://github.com/themesberg/flowbite-svelte/commit/8cea993344f1427f83ab46f29a9bc1613c67960c))

### Bug Fixes

- add on:change to Radio ([074bd16](https://github.com/themesberg/flowbite-svelte/commit/074bd1677ced075971173c8abf1cf15387026efd))

### [0.22.5](https://github.com/themesberg/flowbite-svelte/compare/v0.22.4...v0.22.5) (2022-07-21)

### Bug Fixes

- [#144](https://github.com/themesberg/flowbite-svelte/issues/144) ChevronLeft fix ([016940b](https://github.com/themesberg/flowbite-svelte/commit/016940b36c6782c2481d8ff6c489c2808945d674))

### [0.22.4](https://github.com/themesberg/flowbite-svelte/compare/v0.22.3...v0.22.4) (2022-07-21)

### Bug Fixes

- [#165](https://github.com/themesberg/flowbite-svelte/issues/165) toggle bind:group bind:checked ([3ca4010](https://github.com/themesberg/flowbite-svelte/commit/3ca40109f13e31afa76e02c96d387ff476880e52))
- change from # to / for href ([b79fd81](https://github.com/themesberg/flowbite-svelte/commit/b79fd8112d2fb15657058dd0184b113228d8a6aa))

### [0.22.3](https://github.com/themesberg/flowbite-svelte/compare/v0.22.2...v0.22.3) (2022-07-21)

### Bug Fixes

- for [#165](https://github.com/themesberg/flowbite-svelte/issues/165) and [#170](https://github.com/themesberg/flowbite-svelte/issues/170) and changed $$restProps.class to $$props.class ([99399b8](https://github.com/themesberg/flowbite-svelte/commit/99399b8aebdec68bc5c52641ed768dc601fe36a2))

### [0.22.2](https://github.com/themesberg/flowbite-svelte/compare/v0.22.1...v0.22.2) (2022-07-21)

### Bug Fixes

- update for [#165](https://github.com/themesberg/flowbite-svelte/issues/165) and [#170](https://github.com/themesberg/flowbite-svelte/issues/170) ([ff43f26](https://github.com/themesberg/flowbite-svelte/commit/ff43f265b163d2c3ac7a145772e18a95326c0651))

### [0.22.1](https://github.com/themesberg/flowbite-svelte/compare/v0.22.0...v0.22.1) (2022-07-20)

### Bug Fixes

- buttons redesign ([c0316ff](https://github.com/themesberg/flowbite-svelte/commit/c0316ff61fde6bf52166e3f0c0b30dacad4941c0))
- typo ([4479464](https://github.com/themesberg/flowbite-svelte/commit/4479464736800552c1c05ce6b793459e8df6ef7f))

## [0.22.0](https://github.com/themesberg/flowbite-svelte/compare/v0.21.17...v0.22.0) (2022-07-20)

### ⚠ BREAKING CHANGES

- update dependencies and vite. script dev, build preview and test work

### Features

- update dependencies and vite. script dev, build preview and test work ([bf1b837](https://github.com/themesberg/flowbite-svelte/commit/bf1b83788d7f3ec53c2d5e5c85a825606cbce38f))

### Bug Fixes

- update all dependencies ([d7ae979](https://github.com/themesberg/flowbite-svelte/commit/d7ae979973ba092f36236fe877b98314a0328a42))
- update package.json ([a77e3e5](https://github.com/themesberg/flowbite-svelte/commit/a77e3e57f58ac95dda547cc9a410a2aaa4559fe8))

### [0.21.17](https://github.com/themesberg/flowbite-svelte/compare/v0.21.16...v0.21.17) (2022-07-20)

### Bug Fixes

- Checkbox on:click position ([cfb1c65](https://github.com/themesberg/flowbite-svelte/commit/cfb1c658ae971bb689cd4e01f797ccc5c11db991))
- on:click for Toggle, Checkbox and Radio ([48710b5](https://github.com/themesberg/flowbite-svelte/commit/48710b59c9a9096ec95dfa26d1764a312552b49e))

### [0.21.16](https://github.com/themesberg/flowbite-svelte/compare/v0.21.14...v0.21.16) (2022-07-20)

### Bug Fixes

- dropdown search ([4416a31](https://github.com/themesberg/flowbite-svelte/commit/4416a312756331f6dd04b1d5fe5dd61b764fd38d))
- padding issues with dropdown ([6a48d4d](https://github.com/themesberg/flowbite-svelte/commit/6a48d4dc6a262fc62aa2d9b4c6233bf1cee4b741))
- padding issues with dropdown ([8e8c2d4](https://github.com/themesberg/flowbite-svelte/commit/8e8c2d4bed3e85e95c28e936c513489e6d975e8f))

### [0.21.15](https://github.com/themesberg/flowbite-svelte/compare/v0.21.14...v0.21.15) (2022-07-20)

### Bug Fixes

- dropdown search ([4416a31](https://github.com/themesberg/flowbite-svelte/commit/4416a312756331f6dd04b1d5fe5dd61b764fd38d))
- padding issues with dropdown ([6a48d4d](https://github.com/themesberg/flowbite-svelte/commit/6a48d4dc6a262fc62aa2d9b4c6233bf1cee4b741))
- padding issues with dropdown ([8e8c2d4](https://github.com/themesberg/flowbite-svelte/commit/8e8c2d4bed3e85e95c28e936c513489e6d975e8f))

### [0.21.14](https://github.com/themesberg/flowbite-svelte/compare/v0.21.13...v0.21.14) (2022-07-19)

### Features

- update floating label component ([d04caf9](https://github.com/themesberg/flowbite-svelte/commit/d04caf981a0cbbed37a82df1899d4584908b9171))

### Bug Fixes

- multi-dropdown detach ([3ad1abb](https://github.com/themesberg/flowbite-svelte/commit/3ad1abb66e0fcb4ea53db8e0180e28b568e98aa6))

### [0.21.13](https://github.com/themesberg/flowbite-svelte/compare/v0.21.12...v0.21.13) (2022-07-19)

### [0.21.12](https://github.com/themesberg/flowbite-svelte/compare/v0.21.11...v0.21.12) (2022-07-19)

### [0.21.11](https://github.com/themesberg/flowbite-svelte/compare/v0.21.10...v0.21.11) (2022-07-18)

### Bug Fixes

- add on:change to Input component requested by https://github.com/themesberg/flowbite-svelte/pull/127 ([af5e64d](https://github.com/themesberg/flowbite-svelte/commit/af5e64d84b45f424b6166ff4fa1b5634a6f387d0))

### [0.21.10](https://github.com/themesberg/flowbite-svelte/compare/v0.21.9...v0.21.10) (2022-07-17)

### Features

- add Dropzone ([bb69872](https://github.com/themesberg/flowbite-svelte/commit/bb698721e07c489f1d1900012e60204e0af12e5a))

### [0.21.9](https://github.com/themesberg/flowbite-svelte/compare/v0.21.8...v0.21.9) (2022-07-17)

### Features

- add fileupload multiple files and sizes ([81ab128](https://github.com/themesberg/flowbite-svelte/commit/81ab1284902e9e89bf08725a74b22394aae57244))

### [0.21.8](https://github.com/themesberg/flowbite-svelte/compare/v0.21.7...v0.21.8) (2022-07-17)

### Features

- add skeleton components and page ([cf1f421](https://github.com/themesberg/flowbite-svelte/commit/cf1f421964a7122c77cf2b27615f4837ec3cf687))

### [0.21.7](https://github.com/themesberg/flowbite-svelte/compare/v0.21.6...v0.21.7) (2022-07-17)

### Features

- add kbd component and page ([66c1f2e](https://github.com/themesberg/flowbite-svelte/commit/66c1f2ec9c516da147c7eca9e8cb11c3eea2e1e2))

### [0.21.6](https://github.com/themesberg/flowbite-svelte/compare/v0.21.5...v0.21.6) (2022-07-16)

### Bug Fixes

- links in form index ([1149aa2](https://github.com/themesberg/flowbite-svelte/commit/1149aa2f7411ceb9a3e29ce3c6c3d446634f09a9))
- sidebars and forms {...$$restProps} position updates ([d983225](https://github.com/themesberg/flowbite-svelte/commit/d983225a4e4c7526bf7bee3a7cd51ecc6035bba8))

### [0.21.5](https://github.com/themesberg/flowbite-svelte/compare/v0.21.4...v0.21.5) (2022-07-16)

### Features

- alerts more functions, changed API ([a2306fb](https://github.com/themesberg/flowbite-svelte/commit/a2306fb2a980a140da51f4f36ac299a5ce33c1c8))

### Bug Fixes

- add href prop to jjagielka avatars and fix doc ([ea97577](https://github.com/themesberg/flowbite-svelte/commit/ea975779365d8a9d8b6fd2fe22e36d94636957f2))
- buttons - update sizes and force round ([22284ad](https://github.com/themesberg/flowbite-svelte/commit/22284ada79396136f8dce288de87112e74e6f82a))

### [0.21.4](https://github.com/themesberg/flowbite-svelte/compare/v0.21.3...v0.21.4) (2022-07-14)

### Bug Fixes

- alerts dismissable button color ([779e863](https://github.com/themesberg/flowbite-svelte/commit/779e863a6b321ea84ae65484b05ed6cd7d73ccd9))

### [0.21.3](https://github.com/themesberg/flowbite-svelte/compare/v0.21.2...v0.21.3) (2022-07-14)

### [0.21.2](https://github.com/themesberg/flowbite-svelte/compare/v0.21.1...v0.21.2) (2022-07-13)

### Bug Fixes

- toc more selective ([fb457a2](https://github.com/themesberg/flowbite-svelte/commit/fb457a26b595652f0f59d08915cfae3267361899))

### [0.21.1](https://github.com/themesberg/flowbite-svelte/compare/v0.21.0...v0.21.1) (2022-07-12)

### Features

- add positioning to Toasts ([a88f641](https://github.com/themesberg/flowbite-svelte/commit/a88f641731efc52d55c6474a8f9696598fd339cc))
- merging jjagielka-buttons ([94ffdcb](https://github.com/themesberg/flowbite-svelte/commit/94ffdcba071488d0d56492c3a1fdb148afdb9450))

### Bug Fixes

- buttons - transparency for outline ([6ae3d0f](https://github.com/themesberg/flowbite-svelte/commit/6ae3d0ff767e307ae5a4968f7b3c9a52dbb324f4))
- documentation typos ([942c3b2](https://github.com/themesberg/flowbite-svelte/commit/942c3b2a2624aec3ba4d34cfab2c1098d41cd362))
- removed bg and text from CloseButton to keep transparency ([b5d36ee](https://github.com/themesberg/flowbite-svelte/commit/b5d36eec584f89a46d59346995b79b9b0d0fd906))
- reverting Alert ([ccda53a](https://github.com/themesberg/flowbite-svelte/commit/ccda53ad474e0c6a39ffa6297555485f08ea9b5d))

## [0.21.0](https://github.com/themesberg/flowbite-svelte/compare/v0.20.0...v0.21.0) (2022-07-01)

### ⚠ BREAKING CHANGES

- Footer component updated

### Features

- Footer component updated ([c144ba6](https://github.com/themesberg/flowbite-svelte/commit/c144ba67bc7bf883066c9de2afaca21f1dc82bf3))

## [0.20.0](https://github.com/themesberg/flowbite-svelte/compare/v0.19.13...v0.20.0) (2022-07-01)

### ⚠ BREAKING CHANGES

- Button component API update

### Features

- Button component API update ([934ff9b](https://github.com/themesberg/flowbite-svelte/commit/934ff9b6fdb63fa8f10bb93a1ed1ef1afaf95421))

### [0.19.13](https://github.com/themesberg/flowbite-svelte/compare/v0.19.12...v0.19.13) (2022-06-30)

### Bug Fixes

- removed gradient outline examples since Flowbite site does not have them ([56ac6b4](https://github.com/themesberg/flowbite-svelte/commit/56ac6b4a57512a0d0a086c26a0f179e114af7690))

### [0.19.12](https://github.com/themesberg/flowbite-svelte/compare/v0.19.11...v0.19.12) (2022-06-30)

### [0.19.11](https://github.com/themesberg/flowbite-svelte/compare/v0.19.10...v0.19.11) (2022-06-30)

### Features

- can add own search function to TableSearch component ([514c7f7](https://github.com/themesberg/flowbite-svelte/commit/514c7f71ba0ff48637ff37051c9e453a40a56f11))

### [0.19.10](https://github.com/themesberg/flowbite-svelte/compare/v0.19.9...v0.19.10) (2022-06-30)

### Features

- add on change event dispatch to select ([bda74a6](https://github.com/themesberg/flowbite-svelte/commit/bda74a619530567d06d1badc600a3f663711b179))
- update Breadcrumb components ([b35a970](https://github.com/themesberg/flowbite-svelte/commit/b35a9701ae08f795e37c55b92d24805d02a19b96))

### [0.19.9](https://github.com/themesberg/flowbite-svelte/compare/v0.19.8...v0.19.9) (2022-06-27)

### [0.19.8](https://github.com/themesberg/flowbite-svelte/compare/v0.19.7...v0.19.8) (2022-06-27)

### [0.19.7](https://github.com/themesberg/flowbite-svelte/compare/v0.19.6...v0.19.7) (2022-06-27)

### [0.19.6](https://github.com/themesberg/flowbite-svelte/compare/v0.19.5...v0.19.6) (2022-06-27)

### [0.19.5](https://github.com/themesberg/flowbite-svelte/compare/v0.19.4...v0.19.5) (2022-06-27)

### [0.19.4](https://github.com/themesberg/flowbite-svelte/compare/v0.19.3...v0.19.4) (2022-06-25)

### Bug Fixes

- change from const to let navDivClass ([ffdcd9f](https://github.com/themesberg/flowbite-svelte/commit/ffdcd9fa2cde37a13103e493905d6076f61e5df6))
- update navbar index page by adding flex items-center md:order-2 ([efc0209](https://github.com/themesberg/flowbite-svelte/commit/efc0209c87d063157f225476f0b8e5beb04ed36f))

### [0.19.3](https://github.com/themesberg/flowbite-svelte/compare/v0.19.2...v0.19.3) (2022-06-24)

### Bug Fixes

- navbar page ([d0a704e](https://github.com/themesberg/flowbite-svelte/commit/d0a704e658d86090e38a3d0feadaf89cccb401a6))
- update card page ([0fd6e0e](https://github.com/themesberg/flowbite-svelte/commit/0fd6e0eeb8a42e6f51f0ac8465803ea40100bd55))
- update navbar ([7cdfa05](https://github.com/themesberg/flowbite-svelte/commit/7cdfa0525499faca856632278f5cb6b6c4213e75))

### [0.19.2](https://github.com/themesberg/flowbite-svelte/compare/v0.19.1...v0.19.2) (2022-06-24)

### Bug Fixes

- update Button outline ([6f419c3](https://github.com/themesberg/flowbite-svelte/commit/6f419c38a365fbfb3a466ec81eedc6fcd5fa9a75))

### [0.19.1](https://github.com/themesberg/flowbite-svelte/compare/v0.19.0...v0.19.1) (2022-06-24)

## [0.19.0](https://github.com/themesberg/flowbite-svelte/compare/v0.18.6...v0.19.0) (2022-06-24)

### ⚠ BREAKING CHANGES

- Dropdown has a new structure

### Bug Fixes

- Dropdown has a new structure ([2c5d7b0](https://github.com/themesberg/flowbite-svelte/commit/2c5d7b0a7ac6e93074d11c986835e1f24dd5e00e))
- update Dropdown components ([4dd3254](https://github.com/themesberg/flowbite-svelte/commit/4dd3254b037be1db5718c4a03662e7cf455a4ee6))
- update dropdown creating Dropdown, DropdownDivider, DropdownHeader, DropdownItem ([58db150](https://github.com/themesberg/flowbite-svelte/commit/58db150ee321f849ece954f43213e09a3634e191))

### [0.18.6](https://github.com/themesberg/flowbite-svelte/compare/v0.18.5...v0.18.6) (2022-06-24)

### [0.18.5](https://github.com/themesberg/flowbite-svelte/compare/v0.18.4...v0.18.5) (2022-06-24)

### [0.18.4](https://github.com/themesberg/flowbite-svelte/compare/v0.18.3...v0.18.4) (2022-06-23)

### Features

- add button colored shadows ([96e20c5](https://github.com/themesberg/flowbite-svelte/commit/96e20c568f2fcc7d51e9a430fcb0007f02290bd2))
- add outline button ([aa14b26](https://github.com/themesberg/flowbite-svelte/commit/aa14b267ec1bf283ca3684fa956776b6ce4e6932))
- add outlineStyle white for loader ([7769c19](https://github.com/themesberg/flowbite-svelte/commit/7769c19df48cac833fa08ce659ebfa651160bbf5))

### [0.18.3](https://github.com/themesberg/flowbite-svelte/compare/v0.18.2...v0.18.3) (2022-06-22)

### Bug Fixes

- update Input component ([94df473](https://github.com/themesberg/flowbite-svelte/commit/94df473935baaa4f22124ceb0d6501a1359bd4b4))

### [0.18.2](https://github.com/themesberg/flowbite-svelte/compare/v0.18.1...v0.18.2) (2022-06-22)

### Features

- make button styles reactive ([d74dd9b](https://github.com/themesberg/flowbite-svelte/commit/d74dd9b37c58716e33ca72ce5058b557a6b43ced))

### Bug Fixes

- make disabled button unclickable ([df1c66d](https://github.com/themesberg/flowbite-svelte/commit/df1c66d08e6090a66cff12d2d41f6b72a93324dc))
- update checkbox, add Label and Helper components, update checkbox page ([07de620](https://github.com/themesberg/flowbite-svelte/commit/07de6208e256cb364d9ae1ed02b321168119514d))

### [0.18.1](https://github.com/themesberg/flowbite-svelte/compare/v0.18.0...v0.18.1) (2022-06-18)

### Features

- add voice search component ([8e6e610](https://github.com/themesberg/flowbite-svelte/commit/8e6e6101fb54c5307a4d3e32cf61042308532cae))

## [0.18.0](https://github.com/themesberg/flowbite-svelte/compare/v0.17.6...v0.18.0) (2022-06-17)

### ⚠ BREAKING CHANGES

- new Table components

### Features

- add simeple search component ([945c27b](https://github.com/themesberg/flowbite-svelte/commit/945c27b5299ae52f9c160cbda74a0b0540d98be8))
- new Table components ([b2d4c8c](https://github.com/themesberg/flowbite-svelte/commit/b2d4c8cca892da8e18fd0e2f688ccc9280bc8df8))

### Bug Fixes

- add SimpleSearch to index.ts ([64a8f49](https://github.com/themesberg/flowbite-svelte/commit/64a8f496a22948874dac2695e96ba397e53026b5))
- update Tabel component, add TableHead, TableBody, TableHeadCell, TabelRow ([09b7ad9](https://github.com/themesberg/flowbite-svelte/commit/09b7ad971a2d5ba01eca463e251f2c078a86b708))
- wrong label class name ([39735b3](https://github.com/themesberg/flowbite-svelte/commit/39735b3a85285bd69d064aef22145d60d278da46))

### [0.17.6](https://github.com/themesberg/flowbite-svelte/compare/v0.17.5...v0.17.6) (2022-06-17)

### Bug Fixes

- removed $app/env browser from Tooltip component ([604a1e0](https://github.com/themesberg/flowbite-svelte/commit/604a1e075c6333c5532e04916a20500a31fb4716))

### [0.17.5](https://github.com/themesberg/flowbite-svelte/compare/v0.17.4...v0.17.5) (2022-06-16)

### [0.17.4](https://github.com/themesberg/flowbite-svelte/compare/v0.17.3...v0.17.4) (2022-06-14)

### Breaking Change

- Tooltip component has different structures.

### Bug Fixes

- update Tooltip component ([d0cc06e](https://github.com/themesberg/flowbite-svelte/commit/d0cc06e991e5677463a5625b4abaee2a6edef3fc))

### [0.17.3](https://github.com/themesberg/flowbite-svelte/compare/v0.17.2...v0.17.3) (2022-06-14)

### Bug Fixes

- update ButtonGroupItem border ([365b6d2](https://github.com/themesberg/flowbite-svelte/commit/365b6d2b21b903a8b15057a9bb009e0d3d65e884))

### [0.17.2](https://github.com/themesberg/flowbite-svelte/compare/v0.17.1...v0.17.2) (2022-06-08)

### Bug Fixes

- change type string to typeof SvelteComponent ([277c3e2](https://github.com/themesberg/flowbite-svelte/commit/277c3e24201088aa051726ae16f2e12f66a8a69e))

### [0.17.1](https://github.com/themesberg/flowbite-svelte/compare/v0.17.0...v0.17.1) (2022-06-07)

### Bug Fixes

- add {39090props.class || ''} {...39090restProps} to Sidebar components ([7ea5815](https://github.com/themesberg/flowbite-svelte/commit/7ea5815d939dd6041a3a9e965127ea61736d5849))

## [0.17.0](https://github.com/themesberg/flowbite-svelte/compare/v0.16.14...v0.17.0) (2022-06-07)

### ⚠ BREAKING CHANGES

- read the doc how to use them

### Features

- add {...39090restProps} to ButtonGroup ([9744917](https://github.com/themesberg/flowbite-svelte/commit/9744917f9a036771e1ec285f43de56502e776a3d))
- new sidebar structure ([bf35b3e](https://github.com/themesberg/flowbite-svelte/commit/bf35b3e230b9d2f9b27d2e9576c70a3db47bc48c))
- update Sidebar components ([4f15325](https://github.com/themesberg/flowbite-svelte/commit/4f153257b519d4cbbb405a357e4c6ee7ebe30249))

### [0.16.14](https://github.com/themesberg/flowbite-svelte/compare/v0.16.13...v0.16.14) (2022-06-07)

### Features

- add {...39090restProps} to ButtonGroupItem ([6af6066](https://github.com/themesberg/flowbite-svelte/commit/6af6066928200750036b5f19e2711383f02ccfa3))

### [0.16.13](https://github.com/themesberg/flowbite-svelte/compare/v0.16.12...v0.16.13) (2022-06-07)

### [0.16.12](https://github.com/themesberg/flowbite-svelte/compare/v0.16.11...v0.16.12) (2022-06-07)

### Features

- add type to ButtonGroupItem ([1aefa6b](https://github.com/themesberg/flowbite-svelte/commit/1aefa6bd85acabc05b9ba8016b8e1f46bd55baef))

### [0.16.11](https://github.com/themesberg/flowbite-svelte/compare/v0.16.10...v0.16.11) (2022-06-06)

### Features

- add on:click to ButtonGroupItem ([f3229de](https://github.com/themesberg/flowbite-svelte/commit/f3229dedfced6dcb4114a47370bb144bf4a07ae3))

### Bug Fixes

- forms components moved all export variables before function ([13d518b](https://github.com/themesberg/flowbite-svelte/commit/13d518b58f5aa09a0dcb4de439860afb1d84e3d0))
- Input component move let padding before using it ([4fac17c](https://github.com/themesberg/flowbite-svelte/commit/4fac17cab3ebf67eb2ed4502356bbd5b5eb9aea1))
- props update ([2feb352](https://github.com/themesberg/flowbite-svelte/commit/2feb3520eb74eb5f7ef0c0688e288723a7d7ee40))

### [0.16.10](https://github.com/themesberg/flowbite-svelte/compare/v0.16.9...v0.16.10) (2022-06-05)

### Features

- add on:click to forms/Toggle component ([3b9ba37](https://github.com/themesberg/flowbite-svelte/commit/3b9ba3730421fa7096efee80225c60038ad903b9))

### [0.16.9](https://github.com/themesberg/flowbite-svelte/compare/v0.16.8...v0.16.9) (2022-06-05)

### Features

- add bind:group to Radio component ([386ab02](https://github.com/themesberg/flowbite-svelte/commit/386ab0246d0a3a7ae60416c6f9979501f4c434af))

### [0.16.8](https://github.com/themesberg/flowbite-svelte/compare/v0.16.7...v0.16.8) (2022-06-03)

### [0.16.7](https://github.com/themesberg/flowbite-svelte/compare/v0.16.6...v0.16.7) (2022-06-02)

### [0.16.6](https://github.com/themesberg/flowbite-svelte/compare/v0.16.5...v0.16.6) (2022-06-02)

### Features

- add 66464props.class and 66464restProps to all Badge components ([e466faf](https://github.com/themesberg/flowbite-svelte/commit/e466faf85b3cdba5f125866ee71b1308ce223d4b))

### [0.16.5](https://github.com/themesberg/flowbite-svelte/compare/v0.16.4...v0.16.5) (2022-06-02)

### [0.16.4](https://github.com/themesberg/flowbite-svelte/compare/v0.16.3...v0.16.4) (2022-06-01)

### [0.16.3](https://github.com/themesberg/flowbite-svelte/compare/v0.16.2...v0.16.3) (2022-06-01)

### Bug Fixes

- heros update ([89b8755](https://github.com/themesberg/flowbite-svelte/commit/89b87555fee018361058d888916b8e1cb774c145))
- index page add padding px-8 ([01d29a1](https://github.com/themesberg/flowbite-svelte/commit/01d29a17883a8ba94fb4370aafb398a97b1adee3))

### [0.16.2](https://github.com/themesberg/flowbite-svelte/compare/v0.16.1...v0.16.2) (2022-05-30)

### Bug Fixes

- spinner fill and colour were back to front. ([83e6ec7](https://github.com/themesberg/flowbite-svelte/commit/83e6ec75cec5aade59570337a829938e46bcdfa3))

### [0.16.1](https://github.com/themesberg/flowbite-svelte/compare/v0.16.0...v0.16.1) (2022-05-27)

## [0.16.0](https://github.com/themesberg/flowbite-svelte/compare/v0.15.41...v0.16.0) (2022-05-26)

### Bug Fixes

- update ButtonGroup components ([72fa977](https://github.com/themesberg/flowbite-svelte/commit/72fa9779438d5344fd30014fa00e1fe9f779f432))

### [0.15.41](https://github.com/themesberg/flowbite-svelte/compare/v0.15.40...v0.15.41) (2022-05-24)

### Features

- add transition slide to navbar ([da3d34a](https://github.com/themesberg/flowbite-svelte/commit/da3d34a34d209b599440225baa92d440ff291e03))

### [0.15.40](https://github.com/themesberg/flowbite-svelte/compare/v0.15.39...v0.15.40) (2022-05-23)

### Features

- add transition slide to navbar ([755ae7f](https://github.com/themesberg/flowbite-svelte/commit/755ae7f39823f9cdbcea375722eadabcc80d385a))

### Bug Fixes

- add {4126props.class || ''} to Navbar nav ([39a50fe](https://github.com/themesberg/flowbite-svelte/commit/39a50fe2a4296856d9fa97082f1807e6e1ddc0e8))
- remove transition for navbar ([4f078d0](https://github.com/themesberg/flowbite-svelte/commit/4f078d038b1b1babe216f55e937e0a1e64e2a7a5))
- remove transition for NavUl ([6a29a1d](https://github.com/themesberg/flowbite-svelte/commit/6a29a1d82ef3e5e6a7afcf68dd953f8830562e05))

### [0.15.39](https://github.com/themesberg/flowbite-svelte/compare/v0.15.38...v0.15.39) (2022-05-22)

### Features

- add new Navbar with dropdown demo ([d48b42f](https://github.com/themesberg/flowbite-svelte/commit/d48b42f15da7155e396702011fe70e7cb5898eb5))
- change Navbar component structure ([81b83fb](https://github.com/themesberg/flowbite-svelte/commit/81b83fb6805412b85ecf23186ccf50b4c737bdd4))
- favicon and logo update ([6c317a9](https://github.com/themesberg/flowbite-svelte/commit/6c317a967d5a0b8acdf19e7d8a74fe059407c34f))
- update Navbar components ([66170da](https://github.com/themesberg/flowbite-svelte/commit/66170dab34128dbe510131f2cd75a9123e06bdfe))

### Bug Fixes

- add engines node version >=16.0.0 to package.json ([5f859be](https://github.com/themesberg/flowbite-svelte/commit/5f859be127ee5d541a9a49535f71eedbc5ea5137))
- restucturing Navbar components ([3f4fa07](https://github.com/themesberg/flowbite-svelte/commit/3f4fa076fe3cb5c0ca2a0a3e3b88e47aba7078af))
- update Navbar components ([57a7205](https://github.com/themesberg/flowbite-svelte/commit/57a7205e3c5db1dcec4f677878b2001fde749c67))

### [0.15.38](https://github.com/themesberg/flowbite-svelte/compare/v0.15.37...v0.15.38) (2022-05-19)

### Bug Fixes

- add props.class to Spinner ([3fe4f8b](https://github.com/themesberg/flowbite-svelte/commit/3fe4f8b20d7d89b2230b23904b0671cec900684d))

### [0.15.37](https://github.com/themesberg/flowbite-svelte/compare/v0.15.36...v0.15.37) (2022-05-18)

### Bug Fixes

- add buttonClass to AccordionItem ([8387244](https://github.com/themesberg/flowbite-svelte/commit/83872440ebb872843a0f016f7fb576d156295b96))

### [0.15.36](https://github.com/themesberg/flowbite-svelte/compare/v0.15.35...v0.15.36) (2022-05-17)

### Bug Fixes

- add '' to string types ([387363a](https://github.com/themesberg/flowbite-svelte/commit/387363a3b3668dc66a7790331927e1c1641e4de6))
- add bind:checked to Checkbox ([7cfcf67](https://github.com/themesberg/flowbite-svelte/commit/7cfcf67b52a1496f57f8ef31b4205464f9eb82a0))
- add bind:checked to Toggle ([18a34ea](https://github.com/themesberg/flowbite-svelte/commit/18a34eaaf65539bf176da642b4a04f644265f647))
- remove radio, search etc from InputType ([ed95418](https://github.com/themesberg/flowbite-svelte/commit/ed9541808da054b383c6addff55907d955dad32f))

### [0.15.35](https://github.com/themesberg/flowbite-svelte/compare/v0.15.34...v0.15.35) (2022-05-15)

### Bug Fixes

- add ulClass and childClass in SidebarItem's SidebarDropdown ([2e0f46b](https://github.com/themesberg/flowbite-svelte/commit/2e0f46b6c65037e4a40bba688936af99839bd863))

### [0.15.34](https://github.com/themesberg/flowbite-svelte/compare/v0.15.33...v0.15.34) (2022-05-15)

### Bug Fixes

- add childClass and ulClass to SidebarDropdown ([8754489](https://github.com/themesberg/flowbite-svelte/commit/875448911cbf0e427f51a08b51d5f160974b159b))

### [0.15.33](https://github.com/themesberg/flowbite-svelte/compare/v0.15.32...v0.15.33) (2022-05-15)

### Features

- add AccordionFlush component ([e2d297d](https://github.com/themesberg/flowbite-svelte/commit/e2d297def8272347a68fe39e3296d07d1bd2b436))

### [0.15.32](https://github.com/themesberg/flowbite-svelte/compare/v0.15.31...v0.15.32) (2022-05-15)

### Bug Fixes

- change mr-4 to mr-2 in SidebarDropdown component ([2961555](https://github.com/themesberg/flowbite-svelte/commit/296155587bf2fa35d081b5373ad941a804d4170a))

### [0.15.31](https://github.com/themesberg/flowbite-svelte/compare/v0.15.30...v0.15.31) (2022-05-15)

### Bug Fixes

- add {41578props.class ? 41578props.class : ''} to AccordionItem component ([b90ee19](https://github.com/themesberg/flowbite-svelte/commit/b90ee19dc8a82a801eba01901eb6f2dbf3c9df1a))

### [0.15.30](https://github.com/themesberg/flowbite-svelte/compare/v0.15.29...v0.15.30) (2022-05-14)

### Bug Fixes

- move all index.svelte to index.md and add breadcrumb ([c691d92](https://github.com/themesberg/flowbite-svelte/commit/c691d92fe5b47dafb2d1f5bc4dee39dc3a5c61b8))

### [0.15.29](https://github.com/themesberg/flowbite-svelte/compare/v0.15.28...v0.15.29) (2022-05-13)

### Bug Fixes

- 28115props.class returns undefined if class is not given ([c1d4ab8](https://github.com/themesberg/flowbite-svelte/commit/c1d4ab8eb6b379078a3fb3fc51952d94c31cf452))

### [0.15.28](https://github.com/themesberg/flowbite-svelte/compare/v0.15.27...v0.15.28) (2022-05-13)

### Features

- add slot to EcommerceCard ([d777c87](https://github.com/themesberg/flowbite-svelte/commit/d777c87d3097998e840a9e2ed79cafc036c74713))

### [0.15.27](https://github.com/themesberg/flowbite-svelte/compare/v0.15.26...v0.15.27) (2022-05-13)

### [0.15.26](https://github.com/themesberg/flowbite-svelte/compare/v0.15.25...v0.15.26) (2022-05-13)

### Bug Fixes

- change from ./package/index.js to index.js for main in package.json ([785fe2c](https://github.com/themesberg/flowbite-svelte/commit/785fe2cd88feded7a2872e85248c84b001c1e3b4))

### [0.15.25](https://github.com/themesberg/flowbite-svelte/compare/v0.15.24...v0.15.25) (2022-05-13)

### Bug Fixes

- demo page issues ([268db3c](https://github.com/themesberg/flowbite-svelte/commit/268db3ca3db363ee8bbd6eec69d9f622350050ee))
- input label margin on empty labels ([e08bb0d](https://github.com/themesberg/flowbite-svelte/commit/e08bb0d5caaf10b2c14a852cc68047be7c9e6fdc))
- remove button margin ([9cc1795](https://github.com/themesberg/flowbite-svelte/commit/9cc179505bd77ed775fee1879415f191f36b4764))

### [0.15.24](https://github.com/themesberg/flowbite-svelte/compare/v0.15.23...v0.15.24) (2022-05-12)

### [0.15.23](https://github.com/themesberg/flowbite-svelte/compare/v0.15.22...v0.15.23) (2022-05-11)

### Features

- more alert options ([7071490](https://github.com/themesberg/flowbite-svelte/commit/7071490d458312c3f0833097c10829b20a34919a))

### Bug Fixes

- add handleAlert to Alert component ([bd82de3](https://github.com/themesberg/flowbite-svelte/commit/bd82de36be389de61d4c11348d081e9637dd51b1))
- demo page bugs ([542b88a](https://github.com/themesberg/flowbite-svelte/commit/542b88a386fdc34acf904b589215441e65b8fb69))
- demo page text dark mode, dropdown error ([fa46244](https://github.com/themesberg/flowbite-svelte/commit/fa46244d3871bdc5a9cd5bed0f4a3e8b0fc6d3fd))

### [0.15.22](https://github.com/themesberg/flowbite-svelte/compare/v0.15.21...v0.15.22) (2022-05-10)

### [0.15.21](https://github.com/themesberg/flowbite-svelte/compare/v0.15.20...v0.15.21) (2022-05-10)

### Bug Fixes

- add right round corner to FullWidthTabs ([adaf72f](https://github.com/themesberg/flowbite-svelte/commit/adaf72fd01499ec8e73cdac1cf1b50054a2d8ead))

### [0.15.20](https://github.com/themesberg/flowbite-svelte/compare/v0.15.19...v0.15.20) (2022-05-10)

### Features

- add always open, color, flush, and arrow style to Accordion component ([e435bb6](https://github.com/themesberg/flowbite-svelte/commit/e435bb6cb29cbc778409379484a996a9d8fad76b))

### [0.15.19](https://github.com/themesberg/flowbite-svelte/compare/v0.15.18...v0.15.19) (2022-05-10)

### Bug Fixes

- add SidebarItem to Sidebar component ([a3a9654](https://github.com/themesberg/flowbite-svelte/commit/a3a965498817449cc90bdb20d9babe4f000e4466))

### [0.15.18](https://github.com/themesberg/flowbite-svelte/compare/v0.15.17...v0.15.18) (2022-05-10)

### [0.15.17](https://github.com/themesberg/flowbite-svelte/compare/v0.15.16...v0.15.17) (2022-05-09)

### Bug Fixes

- remove svelte-collapse from Accordion component ([7b8a642](https://github.com/themesberg/flowbite-svelte/commit/7b8a642284947c7b8c6bbabecad2ddb2cc1f3d04))
- update svelte-sidebar-menu to 0.8.4 ([3b07355](https://github.com/themesberg/flowbite-svelte/commit/3b073553c392f4adb47254beb49769d4e150eaa4))

### [0.15.16](https://github.com/themesberg/flowbite-svelte/compare/v0.15.15...v0.15.16) (2022-05-09)

### Bug Fixes

- remove \_\_layout from pages dir ([7224e31](https://github.com/themesberg/flowbite-svelte/commit/7224e31b66009bd6fcf207e8da1f69ccec159728))
- remove rel=external from \_\_layout since it doesn't show the sidemenu ([a0cee08](https://github.com/themesberg/flowbite-svelte/commit/a0cee08e3312a66bdc1a4e070ca45abb0fdc7a84))
- update svelte-sidebar-menu ([59b37b5](https://github.com/themesberg/flowbite-svelte/commit/59b37b5a8f3bea06ecd8b8fdf5cc5ac5967dd149))
- update svelte-sidebar-menu and \_\_layout ([9314f7a](https://github.com/themesberg/flowbite-svelte/commit/9314f7ac55204505f4cffe2e166b36c474a92985))

### [0.15.15](https://github.com/themesberg/flowbite-svelte/compare/v0.15.14...v0.15.15) (2022-05-07)

### Bug Fixes

- update svelte-sidebar-menu ([f6fb17f](https://github.com/themesberg/flowbite-svelte/commit/f6fb17f3ea37ea0fd0a489dc3e167849d372e367))

### [0.15.14](https://github.com/themesberg/flowbite-svelte/compare/v0.15.13...v0.15.14) (2022-05-06)

### Bug Fixes

- change width limit to >=1024 in Responsive component ([e95c10f](https://github.com/themesberg/flowbite-svelte/commit/e95c10f59422b18408a73c7780767371420cb80e))
- move from @codewithshin/svelte-sidebar to svelte-sidebar-menu ([4584351](https://github.com/themesberg/flowbite-svelte/commit/45843519c11eda6de199fc213374d0d293432255))
- move Responsive component from layout to all pages ([381ee20](https://github.com/themesberg/flowbite-svelte/commit/381ee20922335f0c535c06c21a107ebc38849693))
- rename index.js to index.ts ([216db5a](https://github.com/themesberg/flowbite-svelte/commit/216db5a42abff31b85644daacd441355da7805b8))
- update checkbox page ([aa45560](https://github.com/themesberg/flowbite-svelte/commit/aa455604516ef6a4b73193d4898f7f2a5365baca))
- use svelte-sidebar Responsive for all layouts ([dc9ed0d](https://github.com/themesberg/flowbite-svelte/commit/dc9ed0dbd7b99cbdc199f222dc6e68c4dd1a317f))

### [0.15.13](https://github.com/themesberg/flowbite-svelte/compare/v0.15.12...v0.15.13) (2022-05-05)

### Features

- add Checkbox, CheckboxInline, and checkbox page ([baab944](https://github.com/themesberg/flowbite-svelte/commit/baab944e588645bb2fbe751fd5a2beb00b8f6e77))

### Bug Fixes

- update RadioItem props ([fd2f9a0](https://github.com/themesberg/flowbite-svelte/commit/fd2f9a0c4b3854c3a644710a4cb1df238e1a6af2))

### [0.15.12](https://github.com/themesberg/flowbite-svelte/compare/v0.15.11...v0.15.12) (2022-05-05)

### Features

- add RadioItem and RadioInline for colors, inline, helper text ([9fc2812](https://github.com/themesberg/flowbite-svelte/commit/9fc281268f8008023e5a8d501893b8761ba8a5ef))

### [0.15.11](https://github.com/themesberg/flowbite-svelte/compare/v0.15.10...v0.15.11) (2022-05-03)

### Features

- add Search component ([c9874ad](https://github.com/themesberg/flowbite-svelte/commit/c9874ada31fbf20c74a882ee6392e9a7cc8ecc36))

### [0.15.10](https://github.com/themesberg/flowbite-svelte/compare/v0.15.9...v0.15.10) (2022-05-03)

### Features

- add radio label with a link to radio form ([2c3fe6f](https://github.com/themesberg/flowbite-svelte/commit/2c3fe6f9b24a7364a61fc534163c87a157afff12))

### Bug Fixes

- add Input to form index ([00ec469](https://github.com/themesberg/flowbite-svelte/commit/00ec46911c2748fb9224cf91ae68b3dca1c02dd7))
- position update for dropdown and imgdropdown components ([1aef255](https://github.com/themesberg/flowbite-svelte/commit/1aef2559e187458c89f4ad40acbbc8c94719b7ae))

### [0.15.9](https://github.com/themesberg/flowbite-svelte/compare/v0.15.8...v0.15.9) (2022-04-30)

### Features

- add color and size to Toggle component ([6595bb3](https://github.com/themesberg/flowbite-svelte/commit/6595bb38d95ae42862d134fee979ae97b66ab911))

### [0.15.8](https://github.com/themesberg/flowbite-svelte/compare/v0.15.7...v0.15.8) (2022-04-29)

### Bug Fixes

- update for lighthouse ([e81850d](https://github.com/themesberg/flowbite-svelte/commit/e81850db1d00851f2f8b3a1320ef7658f0654674))
- update links, flowbite svelte link, sitemap links, white for dark mode ([024b079](https://github.com/themesberg/flowbite-svelte/commit/024b079c161678f2a683736a97d4431f8d8a5279))

### [0.15.7](https://github.com/themesberg/flowbite-svelte/compare/v0.15.6...v0.15.7) (2022-04-28)

### Bug Fixes

- add 32997restProps to Iconinput ([34c8ad5](https://github.com/themesberg/flowbite-svelte/commit/34c8ad5dc0ca6c1ce39c6281c185274fd0f49ca7))

### [0.15.7](https://github.com/themesberg/flowbite-svelte/compare/v0.15.6...v0.15.7) (2022-04-28)

### Features

- The build process now auto generates component props on build

### Changed

- The 'name' attribute on all buttons is now replaced with the more flexible <slot> pattern. As a consequence the SpinnerButton component has been removed.
- Added more button use cases in the documentation and merged button/setup and button/default into one
- Implemented button disable states with different styles and pointer exclusion
- All buttons now implement 'items-center inline-flex' by default
- Button can now be futher styled using the incremental 'class' attribute

### Bug Fixes

- button light theme had a color mismatch

### [0.15.6](https://github.com/themesberg/flowbite-svelte/compare/v0.15.5...v0.15.6) (2022-04-27)

### Features

- add iconColor to sidebar and sidebardropdown components ([9b239ba](https://github.com/themesberg/flowbite-svelte/commit/9b239bacd455436c9ab056a730574d3d3404e517))

### [0.15.5](https://github.com/themesberg/flowbite-svelte/compare/v0.15.4...v0.15.5) (2022-04-27)

### Features

- add custom slide controllers to carousel ([8a2a329](https://github.com/themesberg/flowbite-svelte/commit/8a2a329da816bd7d5fff357790d584dbce2aec31))

### Bug Fixes

- merge conflicts ([0514548](https://github.com/themesberg/flowbite-svelte/commit/0514548ab7d7ca54337434114ac8f2b9239f5e5d))
- to original Carousel ([5e979ae](https://github.com/themesberg/flowbite-svelte/commit/5e979ae8b58403cdf91b82b236a8e730f02d9cb1))
- to original Carousel ([198270f](https://github.com/themesberg/flowbite-svelte/commit/198270f623e4c0806a59cf3f9f5dd89430ddc0db))
- update range page ([edbf37f](https://github.com/themesberg/flowbite-svelte/commit/edbf37f7b2c6ef0109d15bf1e76dcd52bf2b9b05))

### [0.15.4](https://github.com/themesberg/flowbite-svelte/compare/v0.15.3...v0.15.4) (2022-04-26)

### [0.15.3](https://github.com/themesberg/flowbite-svelte/compare/v0.15.2...v0.15.3) (2022-04-26)

### Features

- add range input ([215439f](https://github.com/themesberg/flowbite-svelte/commit/215439fc529856ecc8c72965cd39d7aff12d3eb7))

### [0.15.2](https://github.com/themesberg/flowbite-svelte/compare/v0.15.1...v0.15.2) (2022-04-26)

### Bug Fixes

- update svelte-simples ([f958721](https://github.com/themesberg/flowbite-svelte/commit/f9587219ff3da038ee76c6d3b8483dfb2dddc856))

### [0.15.1](https://github.com/themesberg/flowbite-svelte/compare/v0.15.0...v0.15.1) (2022-04-26)

## [0.15.0](https://github.com/themesberg/flowbite-svelte/compare/v0.14.17...v0.15.0) (2022-04-25)

### Bug Fixes

- update props dir files ([e52cfcb](https://github.com/themesberg/flowbite-svelte/commit/e52cfcbba6ce7fae124803f670ba280e95c96e85))

### [0.14.17](https://github.com/themesberg/flowbite-svelte/compare/v0.14.16...v0.14.17) (2022-04-25)

### Features

- update heroicons ([9a96fca](https://github.com/themesberg/flowbite-svelte/commit/9a96fca12b1e3adc61088a56ae2c3d3ad65ceb67))

### [0.14.16](https://github.com/themesberg/flowbite-svelte/compare/v0.14.15...v0.14.16) (2022-04-24)

### Features

- update svelte to 3.47.0 ([2c51f1c](https://github.com/themesberg/flowbite-svelte/commit/2c51f1c21907f7a977249e3dfe7c2fe46dd85553))

### [0.14.15](https://github.com/themesberg/flowbite-svelte/compare/v0.14.14...v0.14.15) (2022-04-23)

### Features

- add loop to carousel components ([0ae0d66](https://github.com/themesberg/flowbite-svelte/commit/0ae0d66aaf74c7b588978ce88ab7c5117ee4a4e2))

### [0.14.14](https://github.com/themesberg/flowbite-svelte/compare/v0.14.13...v0.14.14) (2022-04-21)

### Features

- add Rating, AdvancedRating, and ScoreRating components ([8c91712](https://github.com/themesberg/flowbite-svelte/commit/8c91712d703364948b00c387a2b3f1d42be6159f))

### [0.14.13](https://github.com/themesberg/flowbite-svelte/compare/v0.14.12...v0.14.13) (2022-04-20)

### Bug Fixes

- update index.js by adding .js to all store files ([1b1adcd](https://github.com/themesberg/flowbite-svelte/commit/1b1adcdd11dba6c3f37507f91f17795a9f605e25))

### [0.14.12](https://github.com/themesberg/flowbite-svelte/compare/v0.14.11...v0.14.12) (2022-04-19)

### Bug Fixes

- update tabStores import link ([b856b9f](https://github.com/themesberg/flowbite-svelte/commit/b856b9f7ab7932b7e3f6bf5e181a15bc192d702f))

### [0.14.11](https://github.com/themesberg/flowbite-svelte/compare/v0.14.10...v0.14.11) (2022-04-19)

### Bug Fixes

- change ts to js for tabStore and changed file name to tabStores ([f46efd4](https://github.com/themesberg/flowbite-svelte/commit/f46efd46b64126dcadc331bd57b881dc32a0c13c))

### [0.14.10](https://github.com/themesberg/flowbite-svelte/compare/v0.14.9...v0.14.10) (2022-04-19)

### Bug Fixes

- change ts to js and removed types from modalStores and dropdownStores ([89e88e2](https://github.com/themesberg/flowbite-svelte/commit/89e88e2a53b4a791b608459dd05bafff6f81f2ae))

### [0.14.9](https://github.com/themesberg/flowbite-svelte/compare/v0.14.8...v0.14.9) (2022-04-19)

### Bug Fixes

- change js to ts and add ts in index.js ([7b3bb20](https://github.com/themesberg/flowbite-svelte/commit/7b3bb206f2db09efc3e6c4d3d85117a1d6946a4e))

### [0.14.8](https://github.com/themesberg/flowbite-svelte/compare/v0.14.7...v0.14.8) (2022-04-19)

### Bug Fixes

- change ts to js for svelte/store files ([625b285](https://github.com/themesberg/flowbite-svelte/commit/625b285c9ed4bc807774c20b9385fe8d8c59c6c5))

### [0.14.7](https://github.com/themesberg/flowbite-svelte/compare/v0.14.6...v0.14.7) (2022-04-19)

### Bug Fixes

- add default as to dropdown and modal Stores ([4fc6ee0](https://github.com/themesberg/flowbite-svelte/commit/4fc6ee0f754f5db15c6345c61b016aff4bc92ac7))
- update package.json and clean up lib/index ([e37a45e](https://github.com/themesberg/flowbite-svelte/commit/e37a45e81f07f7f98f4ef7c7b569e203bf63582a))

### [0.14.6](https://github.com/themesberg/flowbite-svelte/compare/v0.14.5...v0.14.6) (2022-04-19)

### Bug Fixes

- export dropdownStores in index.js ([f4b7f6c](https://github.com/themesberg/flowbite-svelte/commit/f4b7f6c6e5fcc118e5279ed61e017477c657fa0b))

### [0.14.5](https://github.com/themesberg/flowbite-svelte/compare/v0.14.4...v0.14.5) (2022-04-19)

### Bug Fixes

- export dropdownIdStore in index.js ([4c897d9](https://github.com/themesberg/flowbite-svelte/commit/4c897d973a88e7d1863e28c49a1675110649252f))
- update test for /buttons/setup page ([90daabb](https://github.com/themesberg/flowbite-svelte/commit/90daabbad3d921e5938c990f3099bd268df4aebf))

### [0.14.4](https://github.com/shinokada/flowbite-svelte/compare/v0.14.3...v0.14.4) (2022-04-19)

### Features

- add close on body, add close another dropdown and open own ([addabf8](https://github.com/shinokada/flowbite-svelte/commit/addabf81ccb322e6a482f3baa0687b443914674b))

### Bug Fixes

- change btnType to type in Button components ([310d2d8](https://github.com/shinokada/flowbite-svelte/commit/310d2d8f5bd00f3339b59749e79c67d39717f652))
- change z-50 to z-10 for DropdownDefault ([71d4640](https://github.com/shinokada/flowbite-svelte/commit/71d4640e613c671e11c972d8ceee3721b6c568cc))
- moved @codewithshin/svelte-heroicons to dependencies ([5639d70](https://github.com/shinokada/flowbite-svelte/commit/5639d70d85fc829bc3827f0cbc82e01c56d644a2))
- Utterances link update to themesberg ([584da7e](https://github.com/shinokada/flowbite-svelte/commit/584da7ecf8a755814b436998e3567b7ea46c35d9))

### [0.14.3](https://github.com/shinokada/flowbite-svelte/compare/v0.14.2...v0.14.3) (2022-04-18)

### Features

- add slot and {...70121restProps} to all button components ([c98057c](https://github.com/shinokada/flowbite-svelte/commit/c98057cd6ee39053660378dad2b0bdb6970e18da))

### [0.14.2](https://github.com/shinokada/flowbite-svelte/compare/v0.14.1...v0.14.2) (2022-04-18)

### [0.14.1](https://github.com/shinokada/flowbite-svelte/compare/v0.13.10...v0.14.1) (2022-04-18)

### Features

- add ImgDropdown ([30e9d01](https://github.com/shinokada/flowbite-svelte/commit/30e9d01dcd51559f6771ebaeef57100cf198c452))

### [0.13.10](https://github.com/shinokada/flowbite-svelte/compare/v0.13.9...v0.13.10) (2022-04-16)

### Bug Fixes

- add a space in front of from /index ([32beb0e](https://github.com/shinokada/flowbite-svelte/commit/32beb0e9d3fd7c9c92e34ccc8d690a9f8361c780))
- add Breadcrumb to md files ([6ea1d24](https://github.com/shinokada/flowbite-svelte/commit/6ea1d246ef2ed47f87ec764634fad6729700d286))
- add btnLabel=Read more ([0730167](https://github.com/shinokada/flowbite-svelte/commit/073016733d50fddc70e78e38520eabf0a912236c))
- update h1 for breadcrumb ([8bfef6a](https://github.com/shinokada/flowbite-svelte/commit/8bfef6a93f69dbbf4fb667ba0d177059181b6cdb))
- update h1 in index pages ([e4d1a52](https://github.com/shinokada/flowbite-svelte/commit/e4d1a5284c5ce5f1d981e377263f97c2a2d00485))
- update layouts for breadcrumb ([1c07955](https://github.com/shinokada/flowbite-svelte/commit/1c07955215fe7a48e3e5573c5c657d59978b5fe4))

### [0.13.9](https://github.com/shinokada/flowbite-svelte/compare/v0.13.8...v0.13.9) (2022-04-16)

### Features

- add focus on load to Input component ([5d0c7fb](https://github.com/shinokada/flowbite-svelte/commit/5d0c7fb7750aac2dc0df2ddd24a7c11cd66404c6))

### Bug Fixes

- add 100% to pre tag ([3c8eaf2](https://github.com/shinokada/flowbite-svelte/commit/3c8eaf257697c48121cc79496885e05309b302bc))
- Input padding uses p-4, p-2.5 and p-2 depends on the size ([632bd5d](https://github.com/shinokada/flowbite-svelte/commit/632bd5d550b0268a93eec91598b35a854a45c081))
- logo ([c28e9f3](https://github.com/shinokada/flowbite-svelte/commit/c28e9f3683140e1bb12f4667e26e5d7805d4ddb9))
- moved p-tag and h3 tag css to app.css ([cb3d08e](https://github.com/shinokada/flowbite-svelte/commit/cb3d08edb98d96cadad9975e20488af55f4fa344))
- refresh dev environment ([3a1b452](https://github.com/shinokada/flowbite-svelte/commit/3a1b452f925e14b2d159456c8f1f50b2972ae52b))
- update carousel page ([27c621b](https://github.com/shinokada/flowbite-svelte/commit/27c621b5f7a97896635ddbc2aa9cccf624275e80))
- update main nav. add transition to carousel ([3a9f572](https://github.com/shinokada/flowbite-svelte/commit/3a9f5723af8f54ef58c6902af5599114cc81fb86))

### [0.13.8](https://github.com/shinokada/flowbite-svelte/compare/v0.13.7...v0.13.8) (2022-04-14)

### Features

- add carousel components ([846a99d](https://github.com/shinokada/flowbite-svelte/commit/846a99dde2f45246493fac99790c220da257eefd))

### [0.13.7](https://github.com/shinokada/flowbite-svelte/compare/v0.13.6...v0.13.7) (2022-04-13)

### Bug Fixes

- remove SvelteKit app/stores page and session from Navbar ([09428df](https://github.com/shinokada/flowbite-svelte/commit/09428df9f46b16b07595ed16c08697c61c0099a5))

### [0.13.6](https://github.com/shinokada/flowbite-svelte/compare/v0.13.5...v0.13.6) (2022-04-13)

### Bug Fixes

- create new props files ([0a6fd33](https://github.com/shinokada/flowbite-svelte/commit/0a6fd334321bbedd2eecebb5e4f2456ddb19fd3b))
- remove SvelteKit app session and page ([7eaa3db](https://github.com/shinokada/flowbite-svelte/commit/7eaa3dbfc7f0e2fcf5ef6be4045843fc92b354a5))

### [0.13.5](https://github.com/shinokada/flowbite-svelte/compare/v0.13.4...v0.13.5) (2022-04-12)

### Features

- add table search ([72664ee](https://github.com/shinokada/flowbite-svelte/commit/72664eed118587b445f931c57f1def7bf87056f6))
- table search on progress ([9cff21d](https://github.com/shinokada/flowbite-svelte/commit/9cff21d7ffbeb351b95601a85abe826323c68f9d))

### [0.13.4](https://github.com/shinokada/flowbite-svelte/compare/v0.13.2...v0.13.4) (2022-04-12)

### Bug Fixes

- add sitemap footer darkmode ([72fe322](https://github.com/shinokada/flowbite-svelte/commit/72fe3227e472187101c12ef89e10ada77624fc25))
- enable scrolling in modals (fixes [#23](https://github.com/shinokada/flowbite-svelte/issues/23)) ([8e60319](https://github.com/shinokada/flowbite-svelte/commit/8e603198988a3a03a56414f4e26143bb54ff0c92))
- removed prismjs from package.json and layouts ([dd9ad11](https://github.com/shinokada/flowbite-svelte/commit/dd9ad110193e176ad8127f9c556105d3da854b26))
- sidebar menu covers screen and it doesn't allow to click any links ([879c886](https://github.com/shinokada/flowbite-svelte/commit/879c886b5134908f1e4e9365c13df9bae372acd0))
- update sidebar menu to close after clicking a link ([ae9a36c](https://github.com/shinokada/flowbite-svelte/commit/ae9a36c2d9705c664de91a6870b7603ccffbece2))
- update sidebar menu to close it when you click outside of the sidebar ([30c6026](https://github.com/shinokada/flowbite-svelte/commit/30c6026f8f5fec945e97de18585f5665ca6ddbae))

### [0.12.6](https://github.com/shinokada/flowbite-svelte/compare/v0.12.5...v0.12.6) (2022-04-05)

## 0.12.6

### Patch Changes

- fix: remove compo docs

## 0.12.5

### Patch Changes

- fix: modal backdrop

## 0.12.4

### Patch Changes

- docs: update about and README

## 0.12.3

### Patch Changes

- fix: update svelte and tailwindcss 4

## 0.12.2

### Patch Changes

- fix: move all types and interfaces from index to ./type.ts

## 0.12.1

### Patch Changes

- fix: change tailwind-variants from devDependencies to dependencies

## 0.12.0

### Minor Changes

- 15812aeb (HEAD -> main, origin/main, origin/HEAD) fix: TableHead add tr tag
- a47f3687 fix: Rating id not a valid XML name
- 19c1219c feat: rating/CustomIcon, fix: Star, Heart, Thumbup
- 59c5ef39 docs: change span to div in indicators/examples/legend
- 721e10ca fix: card page
- 7e56bb32 fix: remove type prsentation from divin Card
- 78496d98 chore: add /.vercel to gitignore
- 49c0c7e6 fix: add ignores .vercel/ to eslint.config.js
- 7f90ca8c fix: change adapter-auto to adapter-vercel
- fix: CustomIcon.svelte, Heart.svelte, Rating.svelte, Star.svelte, Thumbup.svelte
- fix: TimelineItem.svelte

## 0.11.2

### Patch Changes

- chore: sveltekit update
  - change test:integration to test:e2e
  - removed enginges from package.json

## 0.11.1

### Patch Changes

- fix: BottomNavItem type
- 8c325984 fix: Card
- 2020074f docs: coverage update
- cbd25300 fix: BottomNavItem: types, docs: tooltip to bottom-nav examples
- 1b97cb19 fix: BottomNav: remove attribute href from element button
- b003187e fix: package.json "node": "^20.0.0"

## 0.11.0

### Minor Changes

- feat: activeUrl for dropdown, bottom-navigation, nav, sidebar

## 0.10.11

### Patch Changes

- fix: put back gen:exports to lib-helers script

## 0.10.10

### Patch Changes

- fix: Tabs: add the id to the panel div
- fix: TabItem: add aria-selected to the button to improve accessibility

## 0.10.9

### Patch Changes

- fix: Tabs and TabItem: generate unique IDs dynamically, add id to tab buttons, add aria-controls to link tab buttons to the panel, pass panelId through context to maintain the connection

- fix: #35 remove sveltekit dependencies

- fix: use undefined to role in Card

- fix: remove link role is unnecessary for element a with attribute href in Card component

- fix: #29 style in CardPlaceholder

- fix: #34 change prop style to inputStyle, navbar A11y update

## 0.10.8

### Patch Changes

- fix: peerDependencies update

## 0.10.7

### Patch Changes

- fix: dependencies update

## 0.10.6

### Patch Changes

- fix: remove sveltekit dependencies

## 0.10.5

### Patch Changes

- fix: #34 change style to inputStyle

## 0.10.4

### Patch Changes

- fix: remove unnecessary import

## 0.10.3

### Patch Changes

- fix: Input.svelte without div class with no left or right

## 0.10.2

### Patch Changes

- fix: Table headItems prop to be an array of HeadItemType

## 0.10.1

### Patch Changes

- fix: Img, ImgEnhanced

## 0.10.0

### Minor Changes

- feat: add @floating-ui/dom to Tooltip

## 0.9.25

### Patch Changes

- fix: lint fixes

## 0.9.24

### Patch Changes

- docs: README update for npmjs

## 0.9.23

### Patch Changes

- feat: Tooltip click and external control ([`9d6683d`](https://github.com/shinokada/svelte-5-ui-lib/commit/9d6683dc8ab7d48c25bcc196820c17c9e9f2209d))

## 0.9.22

### Patch Changes

- fix: add padding none to Card, add optional children to Toggle

## 0.9.21

### Patch Changes

- fix: target prop to Avatar and Badge ([`33e218594d6ba5b62fab553950b68f392abf40cf`](https://github.com/shinokada/svelte-5-ui-lib/commit/33e218594d6ba5b62fab553950b68f392abf40cf))

## 0.9.20

### Patch Changes

- fix: move {...$restProps} before class ([`af194870eedfadac9232d50365aaa08841566a01`](https://github.com/shinokada/svelte-5-ui-lib/commit/af194870eedfadac9232d50365aaa08841566a01))

## 0.9.19

### Patch Changes

- fix: update svelte-lib-helpers for component docs ([`b52d04c278fc9fb87d14ca2ae7653c7bcd1c6efd`](https://github.com/shinokada/svelte-5-ui-lib/commit/b52d04c278fc9fb87d14ca2ae7653c7bcd1c6efd))

## 0.9.18

### Patch Changes

- types: update due to lint errors ([`226d17b08bbc019355ea7a6771551065458bb0f5`](https://github.com/shinokada/svelte-5-ui-lib/commit/226d17b08bbc019355ea7a6771551065458bb0f5))

## 0.9.17

### Patch Changes

- types: update after adding eslint.config.js and pnpm check ([`4c84a8baa6d6a7f9421501d1630ec4dedf4c3c88`](https://github.com/shinokada/svelte-5-ui-lib/commit/4c84a8baa6d6a7f9421501d1630ec4dedf4c3c88)) docs: lib-helpers update and create compoent doc and component data

## 0.9.16

### Patch Changes

- feat: isSingle prop to AccordionItem and SidebarDropdownWrapper components ([`9c623ed80be37a0beb042a3cba040174106ba5fd`](https://github.com/shinokada/svelte-5-ui-lib/commit/9c623ed80be37a0beb042a3cba040174106ba5fd))

## 0.9.15

### Patch Changes

- fix: Search component ([`aee5a4f00e8d32481255fb24bc7bd05bd1ad24e8`](https://github.com/shinokada/svelte-5-ui-lib/commit/aee5a4f00e8d32481255fb24bc7bd05bd1ad24e8))

## 0.9.14

### Patch Changes

- feat: modal component and page ([`47c51b8ddbbda5209099f2b88636a05e0218d398`](https://github.com/shinokada/svelte-5-ui-lib/commit/47c51b8ddbbda5209099f2b88636a05e0218d398))

## 0.9.13

### Patch Changes

- fix: add children to SidebarBrand ([`cf691edbeadb1435daaecceb9d1a407e699c2878`](https://github.com/shinokada/svelte-5-ui-lib/commit/cf691edbeadb1435daaecceb9d1a407e699c2878))

## 0.9.12

### Patch Changes

- fix: type updates ([`c8fddcdb99cb02807292a4eb3cfaa5043add51e4`](https://github.com/shinokada/svelte-5-ui-lib/commit/c8fddcdb99cb02807292a4eb3cfaa5043add51e4))

## 0.9.11

### Patch Changes

- feat: SidebarBrand, SidebarButton, SidebarCta components ([`b340a330f29ea787ff3928d95689c45196d5130a`](https://github.com/shinokada/svelte-5-ui-lib/commit/b340a330f29ea787ff3928d95689c45196d5130a))

## 0.9.10

### Patch Changes

- feat: add transition, backdrop, and activateClickOutsie to Sidebar component ([`5781b3e62a25c95094edb1261cfa9b839c84db36`](https://github.com/shinokada/svelte-5-ui-lib/commit/5781b3e62a25c95094edb1261cfa9b839c84db36))

## 0.9.9

### Patch Changes

- feat: Popover compoents and page ([`7610cab277c49414ea7a8524d6b2deeb50e4d4f5`](https://github.com/shinokada/svelte-5-ui-lib/commit/7610cab277c49414ea7a8524d6b2deeb50e4d4f5))

## 0.9.8

### Patch Changes

- feat: update Table components ([`353f6b4c10649a40adc4a72ec16dc88be5599481`](https://github.com/shinokada/svelte-5-ui-lib/commit/353f6b4c10649a40adc4a72ec16dc88be5599481))

## 0.9.7

### Patch Changes

- fix: badge colors ([`d83cb150a0504db8880664899f85944d669c4ad6`](https://github.com/shinokada/svelte-5-ui-lib/commit/d83cb150a0504db8880664899f85944d669c4ad6))

## 0.9.6

### Patch Changes

- feat: Tooltip component ([`46fb3bc837df0ccdc434a60374804e1d4180706a`](https://github.com/shinokada/svelte-5-ui-lib/commit/46fb3bc837df0ccdc434a60374804e1d4180706a))

## 0.9.5

### Patch Changes

- fix: type updates ([`30555a7982f82f92cdf03e26ea1812f57d357171`](https://github.com/shinokada/svelte-5-ui-lib/commit/30555a7982f82f92cdf03e26ea1812f57d357171))

## 0.9.4

### Patch Changes

- fix: Tabs and TabItem component setContext update

## 0.9.3

### Patch Changes

- fix: add hamburgerMenu to Navbar ([`aa8ce1176141a767b0d7432986806fc17103f1b1`](https://github.com/shinokada/svelte-5-ui-lib/commit/aa8ce1176141a767b0d7432986806fc17103f1b1))

## 0.9.2

### Patch Changes

- fix: remove Frame and add variants to Radio ([`7e461d5814638fb244769e4da2ecbf05eabc1c8b`](https://github.com/shinokada/svelte-5-ui-lib/commit/7e461d5814638fb244769e4da2ecbf05eabc1c8b))

## 0.9.1

### Patch Changes

- feat: variants to gradientbutton ([`6e7c3363c99ea2fbaff44c578b5793acf79c019b`](https://github.com/shinokada/svelte-5-ui-lib/commit/6e7c3363c99ea2fbaff44c578b5793acf79c019b))

## 0.9.0

### Minor Changes

- fix: change DropdownItem to DropdownUl and DropdownLi ([`f5a069d81a7aa70b057557e06d4528109622064e`](https://github.com/shinokada/svelte-5-ui-lib/commit/f5a069d81a7aa70b057557e06d4528109622064e))

## 0.8.9

### Patch Changes

- fix: Helper update ([`4bcf3008f82148d8ba0595f8538c85e3589f56ed`](https://github.com/shinokada/svelte-5-ui-lib/commit/4bcf3008f82148d8ba0595f8538c85e3589f56ed))

## 0.8.8

### Patch Changes

- feat: variants to Label and Helper ([`e9a9d03d673c7611863f4cce0cfeb1391de3b550`](https://github.com/shinokada/svelte-5-ui-lib/commit/e9a9d03d673c7611863f4cce0cfeb1391de3b550))

## 0.8.7

### Patch Changes

- feat: add variants to floating input ([`c94e217e30082fe2a323ca5c161c28e7a02f83f6`](https://github.com/shinokada/svelte-5-ui-lib/commit/c94e217e30082fe2a323ca5c161c28e7a02f83f6))

## 0.8.6

### Patch Changes

- fix: Input component ([`0443fbd838714b5a9830e7bb5e64064df33cbb02`](https://github.com/shinokada/svelte-5-ui-lib/commit/0443fbd838714b5a9830e7bb5e64064df33cbb02))

## 0.8.5

### Patch Changes

- feat: tab components ([`422a740cc67ad2fde7f4b9664afd22f8e0007e6e`](https://github.com/shinokada/svelte-5-ui-lib/commit/422a740cc67ad2fde7f4b9664afd22f8e0007e6e))

## 0.8.4

### Patch Changes

- feat: timeline ([`548335ec8de440d0622144d762902f40f7af4c9c`](https://github.com/shinokada/svelte-5-ui-lib/commit/548335ec8de440d0622144d762902f40f7af4c9c))

## 0.8.3

### Patch Changes

- fix: update variants in various components ([`9ee6411cb352d1dba2f83a78dde98745ea9db62e`](https://github.com/shinokada/svelte-5-ui-lib/commit/9ee6411cb352d1dba2f83a78dde98745ea9db62e))

## 0.8.2

### Patch Changes

- feat: add themes ([`c42201ecb1c3f2f26e8d935324aafeeb277de09c`](https://github.com/shinokada/svelte-5-ui-lib/commit/c42201ecb1c3f2f26e8d935324aafeeb277de09c))

## 0.8.1

### Patch Changes

- fix: nav/index.ts remove Nav ([`c1a15a78ef676e893305c4d4d00d476140c243da`](https://github.com/shinokada/svelte-5-ui-lib/commit/c1a15a78ef676e893305c4d4d00d476140c243da))

## 0.8.0

### Minor Changes

- feat: variants ([`a00d4f34dd05900e9ab84b93055073ba51171d7a`](https://github.com/shinokada/svelte-5-ui-lib/commit/a00d4f34dd05900e9ab84b93055073ba51171d7a))

## 0.7.2

### Patch Changes

- fix: Navbar transition ([`0437219877b09b62be4fdccdb634b52ea251fad2`](https://github.com/shinokada/svelte-5-ui-lib/commit/0437219877b09b62be4fdccdb634b52ea251fad2))

## 0.7.1

### Patch Changes

- fix: Runatics before Runes-Meta-Tag

## 0.7.0

### Minor Changes

- fix: remove withEvents

## 0.6.2

### Patch Changes

- fix: class name update

## 0.6.1

### Patch Changes

- fix: class names

- fix: class name update

## 0.6.0

### Minor Changes

- fix: extends svelte/element for typography and form components

## 0.5.6

### Patch Changes

- fix: update class names

## 0.5.5

### Patch Changes

- fix: footer classes

## 0.5.4

### Patch Changes

- fix: TableBodyCell separate onclick to button

## 0.5.3

### Patch Changes

- feat: add transition to badge

## 0.5.2

### Patch Changes

- fix: Toggle component

## 0.5.1

### Patch Changes

- fix: add target to A component

## 0.5.0

### Minor Changes

- fix: add missing attributes, target, disabled, etc.

## 0.4.13

### Patch Changes

- fix: self-closing HTML tags

## 0.4.12

### Patch Changes

- feat: add ctxclass to List/Li

## 0.4.11

### Patch Changes

- fix: update types

## 0.4.10

### Patch Changes

- fix: add </div> for closing tag for svelte@5.0.0-next.108 ([`6b8a82f0b22f7767eb2f07ff4ccaba8fe584189b`](https://github.com/shinokada/svelte-5-ui-lib/commit/6b8a82f0b22f7767eb2f07ff4ccaba8fe584189b)) tests: add components.test.ts and home.test.ts fix: update meta tags

## 0.4.9

### Patch Changes

- feat: dropdown components update ([`b3d65dd9b7ff0de0bc62ac7bdc7a9480449c936f`](https://github.com/shinokada/svelte-5-ui-lib/commit/b3d65dd9b7ff0de0bc62ac7bdc7a9480449c936f)) docs: dropdown page update

## 0.4.8

### Patch Changes

- fix: install svelte-rune-highlight that has next.100 ([`785736d03a1c1d4bc6dfdbea5f45ad39695a8b21`](https://github.com/shinokada/svelte-5-ui-lib/commit/785736d03a1c1d4bc6dfdbea5f45ad39695a8b21))

## 0.4.7

### Patch Changes

- fix: update flowbite-svelte-icons names ([`b366d721a02d447ceaeead354268434f43f2991a`](https://github.com/shinokada/svelte-5-ui-lib/commit/b366d721a02d447ceaeead354268434f43f2991a))

## 0.4.6

### Patch Changes

- fix: svelte@5.0.0next.100 installed for hmr fix ([`de65f6598082ab3ab859b3feb69f257b29880b52`](https://github.com/shinokada/svelte-5-ui-lib/commit/de65f6598082ab3ab859b3feb69f257b29880b52))

## 0.4.5

### Patch Changes

- feat: add onclick to Avatar, Button, GradientButton, Card components. ([`8805dfe9890a002104444c3e7c9293e7cd3831c7`](https://github.com/shinokada/svelte-5-ui-lib/commit/8805dfe9890a002104444c3e7c9293e7cd3831c7))

  fix: update Sidebar, Drawer, Nav components

## 0.4.4

### Patch Changes

- fix: update DropdownItem and SidebarDropdownWrapper ([`c93161d02f18ec2f42cb77f808602661efa9312a`](https://github.com/shinokada/svelte-5-ui-lib/commit/c93161d02f18ec2f42cb77f808602661efa9312a))

## 0.4.3

### Patch Changes

- fix: change snippet icon to iconSlot in SidebarDropdownWrapper

## 0.4.2

### Patch Changes

- fix: SidebarItem: change icon snippet to iconSlot ([`d4c8b51c4a14fb56e7b768942b909aa792ea4022`](https://github.com/shinokada/svelte-5-ui-lib/commit/d4c8b51c4a14fb56e7b768942b909aa792ea4022))
  - fix: add aclass to SidebarItem

## 0.4.1

### Patch Changes

- fix: TabItem style update ([`18e50b3218e11bd87878f919efd96e062bf5185d`](https://github.com/shinokada/svelte-5-ui-lib/commit/18e50b3218e11bd87878f919efd96e062bf5185d))

## 0.4.0

### Minor Changes

- feat: TabItem, and Tabs components ([`69db35d4d1f32ef4cfc64b34ceb982627d50009e`](https://github.com/shinokada/svelte-5-ui-lib/commit/69db35d4d1f32ef4cfc64b34ceb982627d50009e))
  - docs: tab page is added

## 0.3.7

### Patch Changes

- fix: add default values to component docs ([`273e64b520543375ccd10761a5103ea4e81cae26`](https://github.com/shinokada/svelte-5-ui-lib/commit/273e64b520543375ccd10761a5103ea4e81cae26)) update: svelte next-80 fix: remove option(?) from some children docs: sidebar menu in Nav.svelte to keep open when $page.url.pathname has the directory fix: add if to Video.svelte since it is optional

## 0.3.6

### Patch Changes

- fix: add svelte type Snippet to children and other snippets ([`4624147a35d8bcde511a57f31666390cce18d084`](https://github.com/shinokada/svelte-5-ui-lib/commit/4624147a35d8bcde511a57f31666390cce18d084)) fix: add if-statement for children

## 0.3.5

### Patch Changes

- fix: card href prop ([`6164df0d0d0ad13cd121d103728fd1cf9bf7a0d5`](https://github.com/shinokada/svelte-5-ui-lib/commit/6164df0d0d0ad13cd121d103728fd1cf9bf7a0d5))

## 0.3.4

### Patch Changes

- fix: Card component update ([`f63a4a3a3f95ccb04ca876f0f043c898b8fef124`](https://github.com/shinokada/svelte-5-ui-lib/commit/f63a4a3a3f95ccb04ca876f0f043c898b8fef124))

## 0.3.3

### Patch Changes

- fix: Card component fix href prop ([`b4dc6bd0b3801b8857c81734d77b38bbdae3623c`](https://github.com/shinokada/svelte-5-ui-lib/commit/b4dc6bd0b3801b8857c81734d77b38bbdae3623c)) fix: Card component add customSize prop

## 0.3.2

### Patch Changes

- fix: add lang="ts" to context="module" ([`3081cb37fc5d78d5f8bbcb6cea7beb1aacf23ada`](https://github.com/shinokada/svelte-5-ui-lib/commit/3081cb37fc5d78d5f8bbcb6cea7beb1aacf23ada)) fix: add $state() to let variables

## 0.3.1

### Patch Changes

- fix: Table by running lib-helpers ([`fcb9cbd62909112c1d53dc5468349f716f5e9a9b`](https://github.com/shinokada/svelte-5-ui-lib/commit/fcb9cbd62909112c1d53dc5468349f716f5e9a9b))

## 0.3.0

### Minor Changes

- feat: add table components ([`970d66e9b4350f3b11160c18e0a498d989e985ef`](https://github.com/shinokada/svelte-5-ui-lib/commit/970d66e9b4350f3b11160c18e0a498d989e985ef))

## 0.2.49

### Patch Changes

- fix: add openMainMenu to control menu button for a small screen ([`ec830d9422d30e6ca4589d2cc413394336148d11`](https://github.com/shinokada/svelte-5-ui-lib/commit/ec830d9422d30e6ca4589d2cc413394336148d11))

## 0.2.48

### Patch Changes

- - 490669e fix: add if children to Navbar ([`a7cd201631728bd3ddb8b7d572bf2f33b11a2542`](https://github.com/shinokada/svelte-5-ui-lib/commit/a7cd201631728bd3ddb8b7d572bf2f33b11a2542))

## 0.2.47

### Patch Changes

- - ec25597 (HEAD -> main) fix: change to chilren?: any ([`35d2b4573ff8cf1e187637f1f3700605c01339ab`](https://github.com/shinokada/svelte-5-ui-lib/commit/35d2b4573ff8cf1e187637f1f3700605c01339ab))
  - cc1482c (origin/main, origin/HEAD) fix: update links
  - 66b7cd4 fix: update links
  - 3644446 fix: change vercel.app to codewithshin.com

## 0.2.46

### Patch Changes

- fix: update icon names ([`ee34fc70dc928c5fec9b2d892f49d930a54a1ab0`](https://github.com/shinokada/svelte-5-ui-lib/commit/ee34fc70dc928c5fec9b2d892f49d930a54a1ab0))

- add runes: true to svelte.config.js ([`ad4dfa7c918613819617f3e75ddf85a3fceaa312`](https://github.com/shinokada/svelte-5-ui-lib/commit/ad4dfa7c918613819617f3e75ddf85a3fceaa312)) update flowbite-svelte-icons@2.0.0-next.1

## 0.2.45

### Patch Changes

- fix: update component docs ([`f76850121e7fd4b3a9b4cfcfbd813d05a2903cff`](https://github.com/shinokada/svelte-5-ui-lib/commit/f76850121e7fd4b3a9b4cfcfbd813d05a2903cff))

## 0.2.44

### Patch Changes

- fix: add type option ? to closeNav in NavBrand docs: remove closeNav from NavLi and NavBrand in md files

## 0.2.43

### Patch Changes

- fix: using setContext/getContext for Nav closeNav so that you don't need to repeat it in NavLi and NavBrand

## 0.2.42

### Patch Changes

- fix: NavLi color updates chore: lib-helpers and format

## 0.2.41

### Patch Changes

- docs: add GitHub icon, add About page, update vite.config.ts and app.d.ts to get dependencies version ([`8c8d016bff19752808fef7fd9feeade57e0a5021`](https://github.com/shinokada/svelte-5-ui-lib/commit/8c8d016bff19752808fef7fd9feeade57e0a5021))

- fix: BottomNav z-index to 30 ([`9a49998b8ada7fe45b969a4d8e2b3a127dbebac5`](https://github.com/shinokada/svelte-5-ui-lib/commit/9a49998b8ada7fe45b969a4d8e2b3a127dbebac5)) docs: header in Nav z-index to max 50

## 0.2.40

### Patch Changes

- fix: change tab indentation to spaces docs: update sidebar page fix: add 128 so that h-128 works to tailwind.config.cjs fix: add utils/PlusPlaceholder compo for sidebar page

## 0.2.39

### Patch Changes

- 2dc9328: Navbar, NavUl, NavLi update to use activeClass and nonActiveClass with context. The context is set in Navbar

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.2.38](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.37...v0.2.38) (2024-02-14)

### Bug Fixes

- move apexcharts to dependencies ([d95d4e5](https://github.com/shinokada/svelte-5-ui-lib/commit/d95d4e5f81880ad699a236b6907ec49147c932c2))

### [0.2.37](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.36...v0.2.37) (2024-02-08)

### Bug Fixes

- vite update and change to query: ?raw, import: default ([c8b0be9](https://github.com/shinokada/svelte-5-ui-lib/commit/c8b0be9eb831578257e2669e0cd0b24339726191))

### [0.2.36](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.35...v0.2.36) (2024-02-08)

### Features

- add Chart component ([e40ca10](https://github.com/shinokada/svelte-5-ui-lib/commit/e40ca10bf743241d513b014d1d94e7824d97f4d7))
- starting chart compo ([aefba65](https://github.com/shinokada/svelte-5-ui-lib/commit/aefba6568874034a723067cb48d46efe048ced1c))

### Bug Fixes

- Dropdown, Card, Chart ([3ab5981](https://github.com/shinokada/svelte-5-ui-lib/commit/3ab5981afae2beedd7e79a1e347aaa65e7619ecf))
- package.json ([82f2a17](https://github.com/shinokada/svelte-5-ui-lib/commit/82f2a1741055ce664f2911a5809d27085d13e8b1))
- toast page position ([0fd312b](https://github.com/shinokada/svelte-5-ui-lib/commit/0fd312bbf2c179c0911556e66ef4bc94ca032cec))
- toast position colors for dark ([dffe1a1](https://github.com/shinokada/svelte-5-ui-lib/commit/dffe1a166a0c54b40e31c45a7f0757d41634e9b9))

### [0.2.35](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.34...v0.2.35) (2024-02-08)

### Bug Fixes

- add dependencies ([7478f80](https://github.com/shinokada/svelte-5-ui-lib/commit/7478f807992238058147c503f4318bde17f843a6))

### [0.2.34](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.33...v0.2.34) (2024-02-07)

### Features

- add BottomNav and BottomNavLink compos ([545b2d7](https://github.com/shinokada/svelte-5-ui-lib/commit/545b2d751342dd3b54cf0582531f5b1132647030))
- starting bottomnav ([bcb08ee](https://github.com/shinokada/svelte-5-ui-lib/commit/bcb08ee881b0b653e7fa22cffb371d523eb83407))

### [0.2.33](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.32...v0.2.33) (2024-02-07)

### Features

- add CloseButton to badge, banner, alert and toast compos ([86dca6d](https://github.com/shinokada/svelte-5-ui-lib/commit/86dca6d631aa3a69e8d430e28361f64110cdca2a))

### [0.2.32](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.31...v0.2.32) (2024-02-06)

### Bug Fixes

- CloseButton for Badge, Alert, Banner components ([7d83836](https://github.com/shinokada/svelte-5-ui-lib/commit/7d838366f2e4daeb4a092339906d3383fd7cc4b3))

### [0.2.31](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.30...v0.2.31) (2024-02-06)

### Features

- add Alert compo ([edd5f9f](https://github.com/shinokada/svelte-5-ui-lib/commit/edd5f9f7ad768c50ea6607ddb4cea2a958ea5d43))
- add icon snippet to Badge compo ([a6700cd](https://github.com/shinokada/svelte-5-ui-lib/commit/a6700cd9c94af1184be5fa61eb7035556c2d2a55))

### [0.2.30](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.29...v0.2.30) (2024-02-06)

### [0.2.29](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.28...v0.2.29) (2024-02-06)

### Features

- add badge component ([c35be46](https://github.com/shinokada/svelte-5-ui-lib/commit/c35be461f809862382902ceb6a59427200efbf09))

### Bug Fixes

- toast page ([2050696](https://github.com/shinokada/svelte-5-ui-lib/commit/205069677e67b98927abfd2bd4e13079f6264ace))

### [0.2.28](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.26...v0.2.28) (2024-02-06)

### Features

- add toast component and page ([8d69d74](https://github.com/shinokada/svelte-5-ui-lib/commit/8d69d7486bd637c04a141eeb1da1f03d8199a749))
- starting toast ([91927bc](https://github.com/shinokada/svelte-5-ui-lib/commit/91927bc428fa1ba710738b06f15b8c3d6e204f3b))

### [0.2.27](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.24...v0.2.27) (2024-02-05)

### Features

- add component docs ([52a1711](https://github.com/shinokada/svelte-5-ui-lib/commit/52a17118029d9c75ed36e4e00344bedc39bb7b93))

### Bug Fixes

- change from atomonedark to classicdark in HighlightCompo ([d0ac7ff](https://github.com/shinokada/svelte-5-ui-lib/commit/d0ac7fff96f0019ad7980aba37207aab2e76810d))
- replace Hightlight to HighlightSvelte in HighlightCompo ([a81fd5e](https://github.com/shinokada/svelte-5-ui-lib/commit/a81fd5ed2595ddcbf5aeb36c67d55fe3d425ec61))
- sticy-navbar example ([ef1f118](https://github.com/shinokada/svelte-5-ui-lib/commit/ef1f118f85b35086acba291e653e05ab9439d9d0))

### [0.2.26](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.25...v0.2.26) (2024-02-04)

### [0.2.25](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.18...v0.2.25) (2024-02-04)

### Features

- add component docs ([52a1711](https://github.com/shinokada/svelte-5-ui-lib/commit/52a17118029d9c75ed36e4e00344bedc39bb7b93))
- add GradientButton component ([528929b](https://github.com/shinokada/svelte-5-ui-lib/commit/528929b96046dfc7d4662e2f953e1c3002b69835))
- add GradientButton component ([246037a](https://github.com/shinokada/svelte-5-ui-lib/commit/246037a76f30bf32fc369fff573df2d0bf97f0ad))
- add Toggle component ([98c6aa6](https://github.com/shinokada/svelte-5-ui-lib/commit/98c6aa63c1eb1269c8c7bd9233526d93a3e632f6))
- FloatingLabel component is added ([9b6ea52](https://github.com/shinokada/svelte-5-ui-lib/commit/9b6ea52c4e070da451e04fb59d473fdb5461ea67))

### Bug Fixes

- change from atomonedark to classicdark in HighlightCompo ([d0ac7ff](https://github.com/shinokada/svelte-5-ui-lib/commit/d0ac7fff96f0019ad7980aba37207aab2e76810d))
- icons update for flowbite-svelte-icons v1.0.4 ([549e904](https://github.com/shinokada/svelte-5-ui-lib/commit/549e9042b505d1960318d19d5d410f1b36832e61))
- nav example ([036dd5f](https://github.com/shinokada/svelte-5-ui-lib/commit/036dd5f8804ca9d32e0c43fb787898f876947f91))
- NavLi text color ([83ba5a3](https://github.com/shinokada/svelte-5-ui-lib/commit/83ba5a3e4ce231288ffced149467f5efdd677ac2))
- remove and replace SidebarDropdownItem with SidebarItem ([900d3a5](https://github.com/shinokada/svelte-5-ui-lib/commit/900d3a5f3267ed7e8aa194d5008c1f0c2756b18e))
- remove SidebarDropdownItem ([ee4ef47](https://github.com/shinokada/svelte-5-ui-lib/commit/ee4ef474bc5f51521323e7392af836e261e2bd4a))
- remove SidebarDropdownItem ([3d019df](https://github.com/shinokada/svelte-5-ui-lib/commit/3d019dfd8a0131d86ab74e74e218f56aaf46feef))
- replace Hightlight to HighlightSvelte in HighlightCompo ([a81fd5e](https://github.com/shinokada/svelte-5-ui-lib/commit/a81fd5ed2595ddcbf5aeb36c67d55fe3d425ec61))
- sticy-navbar example ([ef1f118](https://github.com/shinokada/svelte-5-ui-lib/commit/ef1f118f85b35086acba291e653e05ab9439d9d0))

### [0.2.24](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.23...v0.2.24) (2024-02-04)

### Features

- add GradientButton component ([528929b](https://github.com/shinokada/svelte-5-ui-lib/commit/528929b96046dfc7d4662e2f953e1c3002b69835))
- add GradientButton component ([246037a](https://github.com/shinokada/svelte-5-ui-lib/commit/246037a76f30bf32fc369fff573df2d0bf97f0ad))

### [0.2.23](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.22...v0.2.23) (2024-02-03)

### Bug Fixes

- remove and replace SidebarDropdownItem with SidebarItem ([900d3a5](https://github.com/shinokada/svelte-5-ui-lib/commit/900d3a5f3267ed7e8aa194d5008c1f0c2756b18e))
- remove SidebarDropdownItem ([ee4ef47](https://github.com/shinokada/svelte-5-ui-lib/commit/ee4ef474bc5f51521323e7392af836e261e2bd4a))
- remove SidebarDropdownItem ([3d019df](https://github.com/shinokada/svelte-5-ui-lib/commit/3d019dfd8a0131d86ab74e74e218f56aaf46feef))

### [0.2.22](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.21...v0.2.22) (2024-02-03)

### Features

- FloatingLabel component is added ([9b6ea52](https://github.com/shinokada/svelte-5-ui-lib/commit/9b6ea52c4e070da451e04fb59d473fdb5461ea67))

### [0.2.21](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.20...v0.2.21) (2024-02-03)

### Features

- add Toggle component ([98c6aa6](https://github.com/shinokada/svelte-5-ui-lib/commit/98c6aa63c1eb1269c8c7bd9233526d93a3e632f6))

### Bug Fixes

- nav example ([036dd5f](https://github.com/shinokada/svelte-5-ui-lib/commit/036dd5f8804ca9d32e0c43fb787898f876947f91))

### [0.2.20](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.19...v0.2.20) (2024-02-02)

### Bug Fixes

- NavLi text color ([83ba5a3](https://github.com/shinokada/svelte-5-ui-lib/commit/83ba5a3e4ce231288ffced149467f5efdd677ac2))

### [0.2.19](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.17...v0.2.19) (2024-02-02)

### Features

- add Checkbox component ([ace15d4](https://github.com/shinokada/svelte-5-ui-lib/commit/ace15d43be6385206de9bed3284172a3ceb49a7f))

### Bug Fixes

- icons update for flowbite-svelte-icons v1.0.4 ([549e904](https://github.com/shinokada/svelte-5-ui-lib/commit/549e9042b505d1960318d19d5d410f1b36832e61))

### [0.2.18](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.12...v0.2.18) (2024-02-01)

### Features

- add Checkbox component ([ace15d4](https://github.com/shinokada/svelte-5-ui-lib/commit/ace15d43be6385206de9bed3284172a3ceb49a7f))
- add list-group components and page ([f05eea0](https://github.com/shinokada/svelte-5-ui-lib/commit/f05eea07f833501cd144e4b67e0bb6f6c58add77))
- add list-group components and page ([1653fd2](https://github.com/shinokada/svelte-5-ui-lib/commit/1653fd25bf159350378a83d67afea18f2cef9c91))
- add MetaTag ([8a56bcc](https://github.com/shinokada/svelte-5-ui-lib/commit/8a56bccf951aa75636f5b2eb40421187f01e6a7c))
- add range component, page, and test ([66d1ee9](https://github.com/shinokada/svelte-5-ui-lib/commit/66d1ee923db0342b2cb0f5cd9966b222bfa06124))
- add Range, Radio, Helper, RadioButton components ([254fbf5](https://github.com/shinokada/svelte-5-ui-lib/commit/254fbf5d27268bf8174751a953ab02ac314b7664))
- add rating components and page ([dc2a40b](https://github.com/shinokada/svelte-5-ui-lib/commit/dc2a40b87a8e8d98b93f8a8610129a665098bb1f))

### Bug Fixes

- add activeclass to dropdown ([86a210d](https://github.com/shinokada/svelte-5-ui-lib/commit/86a210d2bb1a936808ac90ebd8f99aed0acf40ac))
- add kit to peerDependencies ([f82cb7d](https://github.com/shinokada/svelte-5-ui-lib/commit/f82cb7dd1c84879e17b1010ee5074c1a5a5704cc))
- gallery page for Safari hack ([27a1ac7](https://github.com/shinokada/svelte-5-ui-lib/commit/27a1ac7f1f96558f3fe6c118e1ba9f0976479246))
- list-group md ([3e115ed](https://github.com/shinokada/svelte-5-ui-lib/commit/3e115ed6dd870339a7a516d814a880b17692b429))
- list-group page ([81865ee](https://github.com/shinokada/svelte-5-ui-lib/commit/81865ee918eaa8270910816a078c111bd956d153))
- MetaTag ([9874d0d](https://github.com/shinokada/svelte-5-ui-lib/commit/9874d0deb752f31e1dce42a7d0e2bd4ddb9a7079))
- remove tabindex=-1 ([ff4c440](https://github.com/shinokada/svelte-5-ui-lib/commit/ff4c44070d739ede4b98aa1418c161108ebf5c71))

### [0.2.17](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.16...v0.2.17) (2024-02-01)

### Features

- add Range, Radio, Helper, RadioButton components ([254fbf5](https://github.com/shinokada/svelte-5-ui-lib/commit/254fbf5d27268bf8174751a953ab02ac314b7664))

### [0.2.16](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.15...v0.2.16) (2024-01-31)

### Features

- add range component, page, and test ([66d1ee9](https://github.com/shinokada/svelte-5-ui-lib/commit/66d1ee923db0342b2cb0f5cd9966b222bfa06124))

### [0.2.15](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.14...v0.2.15) (2024-01-31)

### Features

- add rating components and page ([dc2a40b](https://github.com/shinokada/svelte-5-ui-lib/commit/dc2a40b87a8e8d98b93f8a8610129a665098bb1f))

### Bug Fixes

- list-group md ([3e115ed](https://github.com/shinokada/svelte-5-ui-lib/commit/3e115ed6dd870339a7a516d814a880b17692b429))
- list-group page ([81865ee](https://github.com/shinokada/svelte-5-ui-lib/commit/81865ee918eaa8270910816a078c111bd956d153))

### [0.2.14](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.13...v0.2.14) (2024-01-30)

### Features

- add list-group components and page ([f05eea0](https://github.com/shinokada/svelte-5-ui-lib/commit/f05eea07f833501cd144e4b67e0bb6f6c58add77))
- add MetaTag ([8a56bcc](https://github.com/shinokada/svelte-5-ui-lib/commit/8a56bccf951aa75636f5b2eb40421187f01e6a7c))

### Bug Fixes

- MetaTag ([9874d0d](https://github.com/shinokada/svelte-5-ui-lib/commit/9874d0deb752f31e1dce42a7d0e2bd4ddb9a7079))

### [0.2.13](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.10...v0.2.13) (2024-01-30)

### Features

- add FooterIcon ([3320f2f](https://github.com/shinokada/svelte-5-ui-lib/commit/3320f2f836ba5b4f3dc9bf9bef5d0ee2fd3a6a20))
- add list-group components and page ([1653fd2](https://github.com/shinokada/svelte-5-ui-lib/commit/1653fd25bf159350378a83d67afea18f2cef9c91))

### Bug Fixes

- add activeclass to dropdown ([86a210d](https://github.com/shinokada/svelte-5-ui-lib/commit/86a210d2bb1a936808ac90ebd8f99aed0acf40ac))
- add kit to peerDependencies ([f82cb7d](https://github.com/shinokada/svelte-5-ui-lib/commit/f82cb7dd1c84879e17b1010ee5074c1a5a5704cc))
- dropdown add classes ([5d31d80](https://github.com/shinokada/svelte-5-ui-lib/commit/5d31d8023a08669595928b69818ca63626be2ba0))
- gallery page for Safari hack ([27a1ac7](https://github.com/shinokada/svelte-5-ui-lib/commit/27a1ac7f1f96558f3fe6c118e1ba9f0976479246))
- remove tabindex=-1 ([ff4c440](https://github.com/shinokada/svelte-5-ui-lib/commit/ff4c44070d739ede4b98aa1418c161108ebf5c71))

### [0.2.12](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.11...v0.2.12) (2024-01-27)

### Features

- add FooterIcon ([3320f2f](https://github.com/shinokada/svelte-5-ui-lib/commit/3320f2f836ba5b4f3dc9bf9bef5d0ee2fd3a6a20))

### [0.2.11](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.12...v0.2.11) (2024-01-27)

### Features

- add ...attributes ([d5f6801](https://github.com/shinokada/svelte-5-ui-lib/commit/d5f68017255db97c944578d19f85512e4dea02ff))
- add A/link component ([61fe4fe](https://github.com/shinokada/svelte-5-ui-lib/commit/61fe4fe0281ce8e4912e54e4dee8e3028abf8921))
- add all skeleton components ([4ee9e0f](https://github.com/shinokada/svelte-5-ui-lib/commit/4ee9e0f703829add4b5b992a1be012e7ecfcb242))
- add Avatar component ([690fd88](https://github.com/shinokada/svelte-5-ui-lib/commit/690fd88e7cdf98dfda372325f64828a087e86440))
- add Blockquote component and page ([9464203](https://github.com/shinokada/svelte-5-ui-lib/commit/9464203f8b33995f9c5233d524f108ef6443b94c))
- add breadcrumb ([ce7297a](https://github.com/shinokada/svelte-5-ui-lib/commit/ce7297a65758fe3dd8d58e91209f6e270c6601eb))
- add Button ([b58554f](https://github.com/shinokada/svelte-5-ui-lib/commit/b58554f69daf90d231693cd995029283fd1b2074))
- add darkmode ([4d54e6e](https://github.com/shinokada/svelte-5-ui-lib/commit/4d54e6e28c90738205e27c76ba5caa539418c0be))
- add DescriptionList, List, Li components ([2dbd24c](https://github.com/shinokada/svelte-5-ui-lib/commit/2dbd24c62a39284a7b121465356e24f8647ce24e))
- add gen:exports to package.json ([7dc8667](https://github.com/shinokada/svelte-5-ui-lib/commit/7dc866780a998c961881daa10a905ff7f79bd2f0))
- add Hr component and page ([1edfc62](https://github.com/shinokada/svelte-5-ui-lib/commit/1edfc621463ab8fe18bb6f3780def330fa69fce1))
- add Indicator component ([9f26ca6](https://github.com/shinokada/svelte-5-ui-lib/commit/9f26ca630ee7bd1c1c4e571f2e2b271dd27428e8))
- add installation to home ([6709385](https://github.com/shinokada/svelte-5-ui-lib/commit/6709385007fd721c43487c4f4732f0a661883f5c))
- add kbd ([a0c9fd3](https://github.com/shinokada/svelte-5-ui-lib/commit/a0c9fd355d56634c0dcce70ebe656d9a06069333))
- add P component ([6628e5b](https://github.com/shinokada/svelte-5-ui-lib/commit/6628e5bb805a77b7c3c3d825f4ad7b86b096b82c))
- add Select and Label ([264e1cd](https://github.com/shinokada/svelte-5-ui-lib/commit/264e1cd38f010071430df86e3968d5ea1770dd9c))
- add SidebarDropdownWrapper and doc page ([1496b6f](https://github.com/shinokada/svelte-5-ui-lib/commit/1496b6f03b7c5d32eecbcd3daf998423ac8702e8))
- add skeleton ([493e67d](https://github.com/shinokada/svelte-5-ui-lib/commit/493e67d5ac6bb6e95f610eea0c7a4350e2ac8d66))
- add tests ([f3cff31](https://github.com/shinokada/svelte-5-ui-lib/commit/f3cff316159c1e55973c6a5b541561d099152c06))
- add video component ([eed2b81](https://github.com/shinokada/svelte-5-ui-lib/commit/eed2b819885b387151cfab8ff95e6b7c00035e04))
- adding Sidebar compos ([7b6b443](https://github.com/shinokada/svelte-5-ui-lib/commit/7b6b443e324ef0b0cd5e0bc97a400ed6ad05f08b))
- banner ([6cb2905](https://github.com/shinokada/svelte-5-ui-lib/commit/6cb2905a924596227199c539e4ba1575783cb1b4))
- ButtonGroup component ([c416d36](https://github.com/shinokada/svelte-5-ui-lib/commit/c416d3666576ab0fa84759423749aebf05c33275))
- Card update ([1a93ae5](https://github.com/shinokada/svelte-5-ui-lib/commit/1a93ae53b884648e390f5fbf2b8656e2e8eef343))
- classes update ([7dc26f6](https://github.com/shinokada/svelte-5-ui-lib/commit/7dc26f6b04662d79bb7ba80fa3085e2c376626f5))
- complete drawer compo ([110dbaa](https://github.com/shinokada/svelte-5-ui-lib/commit/110dbaab071b5d36b517b439f6e75268414d040c))
- drawer update ([005b3ee](https://github.com/shinokada/svelte-5-ui-lib/commit/005b3eeaa61b78395ffd967b94539d81c0ee6eb7))
- progressbar ([0a0c40e](https://github.com/shinokada/svelte-5-ui-lib/commit/0a0c40e4518d4e4f59eb6dcc8bdc4b14c9a08e7b))
- spinner ([5c7de96](https://github.com/shinokada/svelte-5-ui-lib/commit/5c7de96c2c10a3f729db25ca6a2722ee20de2074))
- use import.meta.glob for md files ([c15c9f8](https://github.com/shinokada/svelte-5-ui-lib/commit/c15c9f8971b50f995b91b78dd0ccea3505bb535b))

### Bug Fixes

- 2xl to xxl ([9967420](https://github.com/shinokada/svelte-5-ui-lib/commit/99674200830818fa8d5417c41164b7c5a37b6fb0))
- class to proper names ([61ddb7a](https://github.com/shinokada/svelte-5-ui-lib/commit/61ddb7acda8c2425a6c6bd0a52a699ee36d3e9a1))
- class update for drawer and dropdown ([583eddf](https://github.com/shinokada/svelte-5-ui-lib/commit/583eddfe8000a1843c2fc3d021712995a387ab21))
- class update in Darkmode and Drawer ([2f01cd2](https://github.com/shinokada/svelte-5-ui-lib/commit/2f01cd2b7f969d44a7312351482167bbfd6698f1))
- Darkmode, cleanup Button ([9f2c5fa](https://github.com/shinokada/svelte-5-ui-lib/commit/9f2c5fa867a2d779ca207ea3f3081298604f84bd))
- dropdown add classes ([5d31d80](https://github.com/shinokada/svelte-5-ui-lib/commit/5d31d8023a08669595928b69818ca63626be2ba0))
- HighlightCompo ([8906fab](https://github.com/shinokada/svelte-5-ui-lib/commit/8906fab15825b70634797e30ab53ff2dd4af576b))
- Label ([62f5245](https://github.com/shinokada/svelte-5-ui-lib/commit/62f52459f2676fd89f8b2c5d9da0ab6bb02af1f0))
- Label ([2b7b645](https://github.com/shinokada/svelte-5-ui-lib/commit/2b7b6456cf0b8b2c374a4b7955284f3d74aed5a2))
- Nav and Sidemenu style ([a027d54](https://github.com/shinokada/svelte-5-ui-lib/commit/a027d5443e1bf0f32112223d5977670fc82256dc))
- Nav sidebar update ([4374cac](https://github.com/shinokada/svelte-5-ui-lib/commit/4374cacb86cdac09e30f518e2e3bfab5183bdc82))
- nav update ([52c16f4](https://github.com/shinokada/svelte-5-ui-lib/commit/52c16f43ee683c90c94460232b72a4d3f6c18181))
- navbar breakpoint css ([fc544e2](https://github.com/shinokada/svelte-5-ui-lib/commit/fc544e27cf4f5701832873e6ece33faa4ada6e6d))
- NavUl update ([af6b733](https://github.com/shinokada/svelte-5-ui-lib/commit/af6b733bfc5d1058e633c4dcb3800fea363e7e80))
- NavUl update ([0473a4e](https://github.com/shinokada/svelte-5-ui-lib/commit/0473a4ef4799770b12a741f12b3c71b40bde0113))
- progress sidebar menu ([81a106d](https://github.com/shinokada/svelte-5-ui-lib/commit/81a106d463c52df6051e80fd147d07f687557b4b))
- SidebarDropdownWrapper opens update ([b82f584](https://github.com/shinokada/svelte-5-ui-lib/commit/b82f58499b5a0eddb80944d29a2d7f7762b7ce0c))
- typo ([0abaa14](https://github.com/shinokada/svelte-5-ui-lib/commit/0abaa1480b12088451505df9219cd5d8e124be97))
- typo ([45d88a0](https://github.com/shinokada/svelte-5-ui-lib/commit/45d88a029059f802799d8e4e8a36904538256f87))

### [0.2.10](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.9...v0.2.10) (2024-01-27)

### Bug Fixes

- SidebarDropdownWrapper opens update ([b82f584](https://github.com/shinokada/svelte-5-ui-lib/commit/b82f58499b5a0eddb80944d29a2d7f7762b7ce0c))

### [0.2.9](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.8...v0.2.9) (2024-01-26)

### [0.2.8](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.7...v0.2.8) (2024-01-25)

### Features

- add Avatar component ([690fd88](https://github.com/shinokada/svelte-5-ui-lib/commit/690fd88e7cdf98dfda372325f64828a087e86440))

### [0.2.7](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.6...v0.2.7) (2024-01-25)

### [0.2.6](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.5...v0.2.6) (2024-01-25)

### Features

- ButtonGroup component ([c416d36](https://github.com/shinokada/svelte-5-ui-lib/commit/c416d3666576ab0fa84759423749aebf05c33275))

### [0.2.5](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.4...v0.2.5) (2024-01-25)

### Features

- add video component ([eed2b81](https://github.com/shinokada/svelte-5-ui-lib/commit/eed2b819885b387151cfab8ff95e6b7c00035e04))

### [0.2.4](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.3...v0.2.4) (2024-01-24)

### Features

- add DescriptionList, List, Li components ([2dbd24c](https://github.com/shinokada/svelte-5-ui-lib/commit/2dbd24c62a39284a7b121465356e24f8647ce24e))

### [0.2.3](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.2...v0.2.3) (2024-01-24)

### Features

- add A/link component ([61fe4fe](https://github.com/shinokada/svelte-5-ui-lib/commit/61fe4fe0281ce8e4912e54e4dee8e3028abf8921))
- add Hr component and page ([1edfc62](https://github.com/shinokada/svelte-5-ui-lib/commit/1edfc621463ab8fe18bb6f3780def330fa69fce1))

### Bug Fixes

- Nav sidebar update ([4374cac](https://github.com/shinokada/svelte-5-ui-lib/commit/4374cacb86cdac09e30f518e2e3bfab5183bdc82))

### [0.2.2](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.2.1...v0.2.2) (2024-01-24)

### Features

- add Blockquote component and page ([9464203](https://github.com/shinokada/svelte-5-ui-lib/commit/9464203f8b33995f9c5233d524f108ef6443b94c))
- add P component ([6628e5b](https://github.com/shinokada/svelte-5-ui-lib/commit/6628e5bb805a77b7c3c3d825f4ad7b86b096b82c))

### [0.2.1](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.35...v0.2.1) (2024-01-23)

### Features

- Card update ([1a93ae5](https://github.com/shinokada/svelte-5-ui-lib/commit/1a93ae53b884648e390f5fbf2b8656e2e8eef343))
- classes update ([7dc26f6](https://github.com/shinokada/svelte-5-ui-lib/commit/7dc26f6b04662d79bb7ba80fa3085e2c376626f5))

### Bug Fixes

- class to proper names ([61ddb7a](https://github.com/shinokada/svelte-5-ui-lib/commit/61ddb7acda8c2425a6c6bd0a52a699ee36d3e9a1))
- class update for drawer and dropdown ([583eddf](https://github.com/shinokada/svelte-5-ui-lib/commit/583eddfe8000a1843c2fc3d021712995a387ab21))
- class update in Darkmode and Drawer ([2f01cd2](https://github.com/shinokada/svelte-5-ui-lib/commit/2f01cd2b7f969d44a7312351482167bbfd6698f1))
- Nav and Sidemenu style ([a027d54](https://github.com/shinokada/svelte-5-ui-lib/commit/a027d5443e1bf0f32112223d5977670fc82256dc))
- progress sidebar menu ([81a106d](https://github.com/shinokada/svelte-5-ui-lib/commit/81a106d463c52df6051e80fd147d07f687557b4b))

### [0.1.35](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.34...v0.1.35) (2024-01-22)

### [0.1.34](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.33...v0.1.34) (2024-01-22)

### Features

- complete drawer compo ([110dbaa](https://github.com/shinokada/svelte-5-ui-lib/commit/110dbaab071b5d36b517b439f6e75268414d040c))
- drawer update ([005b3ee](https://github.com/shinokada/svelte-5-ui-lib/commit/005b3eeaa61b78395ffd967b94539d81c0ee6eb7))

### [0.1.33](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.32...v0.1.33) (2024-01-21)

### Bug Fixes

- Label ([62f5245](https://github.com/shinokada/svelte-5-ui-lib/commit/62f52459f2676fd89f8b2c5d9da0ab6bb02af1f0))

### [0.1.32](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.31...v0.1.32) (2024-01-20)

### Bug Fixes

- NavUl update ([af6b733](https://github.com/shinokada/svelte-5-ui-lib/commit/af6b733bfc5d1058e633c4dcb3800fea363e7e80))

### [0.1.31](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.30...v0.1.31) (2024-01-20)

### Features

- use import.meta.glob for md files ([c15c9f8](https://github.com/shinokada/svelte-5-ui-lib/commit/c15c9f8971b50f995b91b78dd0ccea3505bb535b))

### Bug Fixes

- Label ([2b7b645](https://github.com/shinokada/svelte-5-ui-lib/commit/2b7b6456cf0b8b2c374a4b7955284f3d74aed5a2))
- NavUl update ([0473a4e](https://github.com/shinokada/svelte-5-ui-lib/commit/0473a4ef4799770b12a741f12b3c71b40bde0113))
- typo ([0abaa14](https://github.com/shinokada/svelte-5-ui-lib/commit/0abaa1480b12088451505df9219cd5d8e124be97))

### [0.1.30](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.29...v0.1.30) (2024-01-18)

### Features

- add Select and Label ([264e1cd](https://github.com/shinokada/svelte-5-ui-lib/commit/264e1cd38f010071430df86e3968d5ea1770dd9c))

### [0.1.29](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.28...v0.1.29) (2024-01-17)

### Features

- add kbd ([a0c9fd3](https://github.com/shinokada/svelte-5-ui-lib/commit/a0c9fd355d56634c0dcce70ebe656d9a06069333))

### Bug Fixes

- navbar breakpoint css ([fc544e2](https://github.com/shinokada/svelte-5-ui-lib/commit/fc544e27cf4f5701832873e6ece33faa4ada6e6d))

### [0.1.28](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.27...v0.1.28) (2024-01-15)

### Features

- progressbar ([0a0c40e](https://github.com/shinokada/svelte-5-ui-lib/commit/0a0c40e4518d4e4f59eb6dcc8bdc4b14c9a08e7b))

### [0.1.27](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.26...v0.1.27) (2024-01-15)

### Features

- spinner ([5c7de96](https://github.com/shinokada/svelte-5-ui-lib/commit/5c7de96c2c10a3f729db25ca6a2722ee20de2074))

### Bug Fixes

- Darkmode, cleanup Button ([9f2c5fa](https://github.com/shinokada/svelte-5-ui-lib/commit/9f2c5fa867a2d779ca207ea3f3081298604f84bd))
- nav update ([52c16f4](https://github.com/shinokada/svelte-5-ui-lib/commit/52c16f43ee683c90c94460232b72a4d3f6c18181))

### [0.1.26](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.25...v0.1.26) (2024-01-14)

### Features

- add Indicator component ([9f26ca6](https://github.com/shinokada/svelte-5-ui-lib/commit/9f26ca630ee7bd1c1c4e571f2e2b271dd27428e8))

### [0.1.25](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.24...v0.1.25) (2024-01-14)

### Features

- banner ([6cb2905](https://github.com/shinokada/svelte-5-ui-lib/commit/6cb2905a924596227199c539e4ba1575783cb1b4))

### [0.1.24](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.23...v0.1.24) (2024-01-14)

### Features

- add darkmode ([4d54e6e](https://github.com/shinokada/svelte-5-ui-lib/commit/4d54e6e28c90738205e27c76ba5caa539418c0be))

### Bug Fixes

- 2xl to xxl ([9967420](https://github.com/shinokada/svelte-5-ui-lib/commit/99674200830818fa8d5417c41164b7c5a37b6fb0))
- typo ([45d88a0](https://github.com/shinokada/svelte-5-ui-lib/commit/45d88a029059f802799d8e4e8a36904538256f87))

### [0.1.23](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.22...v0.1.23) (2024-01-13)

### Features

- add all skeleton components ([4ee9e0f](https://github.com/shinokada/svelte-5-ui-lib/commit/4ee9e0f703829add4b5b992a1be012e7ecfcb242))
- add breadcrumb ([ce7297a](https://github.com/shinokada/svelte-5-ui-lib/commit/ce7297a65758fe3dd8d58e91209f6e270c6601eb))

### [0.1.22](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.21...v0.1.22) (2024-01-12)

### Features

- add gen:exports to package.json ([7dc8667](https://github.com/shinokada/svelte-5-ui-lib/commit/7dc866780a998c961881daa10a905ff7f79bd2f0))
- add skeleton ([493e67d](https://github.com/shinokada/svelte-5-ui-lib/commit/493e67d5ac6bb6e95f610eea0c7a4350e2ac8d66))

### [0.1.21](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.20...v0.1.21) (2024-01-12)

### [0.1.20](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.19...v0.1.20) (2024-01-12)

### [0.1.19](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.18...v0.1.19) (2024-01-12)

### [0.1.18](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.17...v0.1.18) (2024-01-12)

### [0.1.17](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.16...v0.1.17) (2024-01-12)

### Features

- add installation to home ([6709385](https://github.com/shinokada/svelte-5-ui-lib/commit/6709385007fd721c43487c4f4732f0a661883f5c))
- add SidebarDropdownWrapper and doc page ([1496b6f](https://github.com/shinokada/svelte-5-ui-lib/commit/1496b6f03b7c5d32eecbcd3daf998423ac8702e8))
- add tests ([f3cff31](https://github.com/shinokada/svelte-5-ui-lib/commit/f3cff316159c1e55973c6a5b541561d099152c06))
- adding Sidebar compos ([7b6b443](https://github.com/shinokada/svelte-5-ui-lib/commit/7b6b443e324ef0b0cd5e0bc97a400ed6ad05f08b))

### [0.1.16](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.15...v0.1.16) (2024-01-11)

### Features

- add ...attributes ([d5f6801](https://github.com/shinokada/svelte-5-ui-lib/commit/d5f68017255db97c944578d19f85512e4dea02ff))

### [0.1.15](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.14...v0.1.15) (2024-01-11)

### [0.1.14](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.13...v0.1.14) (2024-01-11)

### 0.1.13 (2024-01-11)

### Features

- add breakPoint prop ([02cb5a2](https://github.com/shinokada/svelte-5-ui-lib/commit/02cb5a2b76973b81c3f4acd7c26022fdbbdd0c6b))
- add breakPoint prop ([49f8d25](https://github.com/shinokada/svelte-5-ui-lib/commit/49f8d254bda9e1c6f18b3eafead9254d44d5a5e1))
- add Button ([b58554f](https://github.com/shinokada/svelte-5-ui-lib/commit/b58554f69daf90d231693cd995029283fd1b2074))
- add dropdown components and page ([0013f22](https://github.com/shinokada/svelte-5-ui-lib/commit/0013f229d490d0930295df1b9427f67a6acc1853))
- add footer ([801a59e](https://github.com/shinokada/svelte-5-ui-lib/commit/801a59e120a0a6083f122b9f5a3e4d910d214a02))
- add package tools ([cb06870](https://github.com/shinokada/svelte-5-ui-lib/commit/cb0687043fb11dada1f9fe3c388b554ad95162a1))

### Bug Fixes

- add children to NavBrand ([51b141d](https://github.com/shinokada/svelte-5-ui-lib/commit/51b141de2f086a8234c041812d630cbc8ad8a6e9))
- add keywords to package ([6388216](https://github.com/shinokada/svelte-5-ui-lib/commit/6388216fea2d7b0b68b432be63cbb4b4ad1bd8ea))
- add peerDependencies ([d5b27d1](https://github.com/shinokada/svelte-5-ui-lib/commit/d5b27d17fbd602abe8c19c8c5809e8fdc0dce15b))
- add types ([e315f88](https://github.com/shinokada/svelte-5-ui-lib/commit/e315f88c20d596dfbbd01d2d49cb4a71471ec512))
- FooterBrand ([b572aec](https://github.com/shinokada/svelte-5-ui-lib/commit/b572aecf4347ecb54393ad9444f52fe7366a11a4))
- HighlightCompo ([8906fab](https://github.com/shinokada/svelte-5-ui-lib/commit/8906fab15825b70634797e30ab53ff2dd4af576b))
- update peerDependencies in package.json ([951b391](https://github.com/shinokada/svelte-5-ui-lib/commit/951b3910b84f7a21946f8e760814dedc1d6b90af))

### [0.1.12](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.11...v0.1.12) (2024-01-08)

### [0.1.11](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.10...v0.1.11) (2024-01-08)

### Features

- add dropdown components and page ([0013f22](https://github.com/shinokada/svelte-5-ui-lib/commit/0013f229d490d0930295df1b9427f67a6acc1853))

### [0.1.10](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.9...v0.1.10) (2024-01-08)

### Features

- add breakPoint prop ([02cb5a2](https://github.com/shinokada/svelte-5-ui-lib/commit/02cb5a2b76973b81c3f4acd7c26022fdbbdd0c6b))

### [0.1.9](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.8...v0.1.9) (2024-01-08)

### [0.1.8](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.7...v0.1.8) (2024-01-08)

### Features

- add breakPoint prop ([49f8d25](https://github.com/shinokada/svelte-5-ui-lib/commit/49f8d254bda9e1c6f18b3eafead9254d44d5a5e1))

### [0.1.7](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.6...v0.1.7) (2024-01-08)

### Bug Fixes

- add children to NavBrand ([51b141d](https://github.com/shinokada/svelte-5-ui-lib/commit/51b141de2f086a8234c041812d630cbc8ad8a6e9))

### [0.1.6](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.5...v0.1.6) (2024-01-08)

### Bug Fixes

- add keywords to package ([6388216](https://github.com/shinokada/svelte-5-ui-lib/commit/6388216fea2d7b0b68b432be63cbb4b4ad1bd8ea))

### [0.1.5](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.4...v0.1.5) (2024-01-08)

### [0.1.4](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.3...v0.1.4) (2024-01-08)

### Bug Fixes

- add types ([e315f88](https://github.com/shinokada/svelte-5-ui-lib/commit/e315f88c20d596dfbbd01d2d49cb4a71471ec512))

### [0.1.3](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.2...v0.1.3) (2024-01-08)

### Bug Fixes

- update peerDependencies in package.json ([951b391](https://github.com/shinokada/svelte-5-ui-lib/commit/951b3910b84f7a21946f8e760814dedc1d6b90af))

### [0.1.2](https://github.com/shinokada/svelte-5-ui-lib/compare/v0.1.1...v0.1.2) (2024-01-08)

### Bug Fixes

- add peerDependencies ([d5b27d1](https://github.com/shinokada/svelte-5-ui-lib/commit/d5b27d17fbd602abe8c19c8c5809e8fdc0dce15b))

### 0.1.1 (2024-01-08)

### Features

- add footer ([801a59e](https://github.com/shinokada/svelte-5-ui-lib/commit/801a59e120a0a6083f122b9f5a3e4d910d214a02))
- add package tools ([cb06870](https://github.com/shinokada/svelte-5-ui-lib/commit/cb0687043fb11dada1f9fe3c388b554ad95162a1))

### Bug Fixes

- FooterBrand ([b572aec](https://github.com/shinokada/svelte-5-ui-lib/commit/b572aecf4347ecb54393ad9444f52fe7366a11a4))
