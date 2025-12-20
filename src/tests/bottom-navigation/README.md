# Unit Tests for Bottom Navigation Components

## Created Test Files

### Bottom Navigation Tests (`src/tests/bottom-navigation/`)

**Helper Components:**
- `basic-bottom-nav.test.svelte` - Basic bottom navigation with three items
- `bottom-nav-with-header.test.svelte` - Bottom navigation with header tabs
- `bottom-nav-static.test.svelte` - Bottom navigation with static positioning
- `bottom-nav-app-type.test.svelte` - Application-style bottom navigation with middle button
- `bottom-nav-item-button.test.svelte` - Bottom navigation item as button with click handler
- `bottom-nav-item-link.test.svelte` - Bottom navigation items as links with active URL
- `bottom-nav-item-active.test.svelte` - Bottom navigation items with manual active state
- `bottom-nav-header.test.svelte` - Bottom navigation header with items
- `bottom-nav-header-item-clickable.test.svelte` - Clickable header item with state

**Test Suite (`bottom-navigation.test.ts`):**

#### BottomNav Component Tests (4 tests)
- ✅ Basic rendering with navigation items
- ✅ Rendering with header section
- ✅ Static positioning variant
- ✅ Application nav type with middle button

#### BottomNavItem Component Tests (6 tests)
- ✅ Renders as button by default
- ✅ Button click event handling
- ✅ Renders as link when href is provided
- ✅ Displays button name correctly
- ✅ Active state application (manual and URL-based)
- ✅ Accessibility attributes (aria-label)

#### BottomNavHeader Component Tests (2 tests)
- ✅ Renders header items correctly
- ✅ Contains proper role="group" for accessibility

#### BottomNavHeaderItem Component Tests (3 tests)
- ✅ Renders as button element
- ✅ Click event handling
- ✅ Displays item name correctly

#### Integration Tests (2 tests)
- ✅ Header and navigation items work together
- ✅ Active URL affects link rendering

**Total: 17 test cases across 4 components**

## Component Coverage

### BottomNav Component
The main container for bottom navigation that provides context to child components.

**Tested Features:**
- Default fixed positioning
- Static positioning option
- Different nav types (default, application)
- Header slot integration
- Context propagation (activeUrl, navType, activeClass)

**Props Tested:**
- `position` - "fixed" (default), "static"
- `navType` - "default", "application"
- `header` - Snippet for header content
- `activeUrl` - Active URL for link matching
- `class` - Custom styling
- `classes` - Slot-specific styling (inner, active)

### BottomNavItem Component
Navigation items that can be rendered as buttons or links with active state detection.

**Tested Features:**
- Renders as button when no href
- Renders as link when href provided
- Manual active state via `active` prop
- Automatic active state via URL matching
- Click event handling
- Icon and label display
- Application button positioning (middle app button)
- Accessibility (aria-label from btnName)

**Props Tested:**
- `btnName` - Button label (required)
- `href` - URL for link mode
- `active` - Manual active state
- `appBtnPosition` - Position for app-style buttons
- `activeClass` - Custom active styling
- `class` - Custom styling
- `classes.span` - Label styling
- Event handlers (onclick, etc.)

**Active State Logic:**
- Manual: `active={true}` explicitly sets active
- URL-based: Matches `href` against `activeUrl` from context
  - Exact match for home route ("/")
  - Prefix match for other routes
  - Handles absolute URLs by stripping protocol/domain

### BottomNavHeader Component
Container for header items with proper grouping semantics.

**Tested Features:**
- Renders header items container
- Proper accessibility (role="group")
- Custom styling support

**Props Tested:**
- `class` - Custom styling
- `classes.innerDiv` - Inner container styling
- Children (header items)

### BottomNavHeaderItem Component
Individual header items for filtering or tabbed navigation.

**Tested Features:**
- Renders as button element
- Active state styling
- Click event handling
- Text content display

**Props Tested:**
- `itemName` - Button text (required)
- `active` - Active state styling
- `class` - Custom styling
- Event handlers (onclick, etc.)

## Running the Tests

### Run All Bottom Navigation Tests
```bash
pnpm test:unit -- bottom-navigation
```

### Run Tests in Watch Mode
```bash
pnpm test:unit -- bottom-navigation --watch
```

### Run with Coverage
```bash
pnpm test:unit -- bottom-navigation --coverage
```

## Test Structure Pattern

Each component follows this established pattern:

```
src/tests/bottom-navigation/
├── bottom-navigation.test.ts              # Main test file
├── basic-bottom-nav.test.svelte          # Helper: basic usage
├── bottom-nav-with-header.test.svelte    # Helper: with header
├── bottom-nav-static.test.svelte         # Helper: static position
├── bottom-nav-app-type.test.svelte       # Helper: app-style nav
├── bottom-nav-item-button.test.svelte    # Helper: item as button
├── bottom-nav-item-link.test.svelte      # Helper: items as links
├── bottom-nav-item-active.test.svelte    # Helper: active state
├── bottom-nav-header.test.svelte         # Helper: header container
└── bottom-nav-header-item-clickable.test.svelte # Helper: header item
```

## Key Testing Patterns

### Context Testing
Bottom navigation uses Svelte context to share state:
```typescript
// BottomNav provides context
setBottomNavContext({
  activeUrl,
  navType,
  activeClass
});

// BottomNavItem consumes context
const context = getBottomNavContext();
```

Tests verify that:
- Context values propagate correctly
- Active URL matching works
- Nav type affects item rendering

### Conditional Rendering
BottomNavItem renders differently based on props:
```svelte
{#if restProps.href === undefined}
  <button>...</button>  <!-- Button mode -->
{:else}
  <a>...</a>            <!-- Link mode -->
{/if}
```

Tests verify both rendering modes and proper tag selection.

### Active State Detection
Two ways to set active state:
1. **Manual**: `<BottomNavItem active={true} />`
2. **Automatic**: URL matching via context

```typescript
let isActive = $derived.by(() => {
  return manualActive !== undefined
    ? !!manualActive
    : // URL matching logic
});
```

Tests verify both mechanisms work correctly.

### Accessibility Testing
Tests verify proper ARIA attributes:
```typescript
expect(button).toHaveAttribute("aria-label", "Home");
expect(container).toHaveAttribute("role", "group");
```

## Usage Examples

### Basic Bottom Navigation
```svelte
<BottomNav>
  <BottomNavItem btnName="Home">
    <Home />
  </BottomNavItem>
  <BottomNavItem btnName="Profile">
    <User />
  </BottomNavItem>
</BottomNav>
```

### With Header Tabs
```svelte
<BottomNav>
  {#snippet header()}
    <BottomNavHeader>
      <BottomNavHeaderItem itemName="Recent" active={tab === 0} />
      <BottomNavHeaderItem itemName="Popular" active={tab === 1} />
    </BottomNavHeader>
  {/snippet}
  
  <BottomNavItem btnName="Home">
    <Home />
  </BottomNavItem>
</BottomNav>
```

### With Active URL Matching
```svelte
<BottomNav activeUrl={$page.url.pathname}>
  <BottomNavItem btnName="Home" href="/">
    <Home />
  </BottomNavItem>
  <BottomNavItem btnName="Profile" href="/profile">
    <User />
  </BottomNavItem>
</BottomNav>
```

### Application Style (with middle button)
```svelte
<BottomNav navType="application">
  <BottomNavItem btnName="Home">
    <Home />
  </BottomNavItem>
  <BottomNavItem btnName="Add" appBtnPosition="middle">
    <Plus />
  </BottomNavItem>
  <BottomNavItem btnName="Settings">
    <Settings />
  </BottomNavItem>
</BottomNav>
```

## Component Relationships

```
BottomNav (Context Provider)
├── header snippet (optional)
│   └── BottomNavHeader
│       └── BottomNavHeaderItem (button)
└── children snippet
    └── BottomNavItem (button or link, consumes context)
```

## Testing Technology Stack

- **Vitest** - Fast unit test framework
- **@testing-library/svelte** - Svelte component testing utilities
- **@testing-library/user-event** - User interaction simulation
- **@testing-library/jest-dom** - DOM assertion matchers

## Notes

### URL Matching Logic
The `BottomNavItem` component implements smart URL matching:
- Exact match for home route (`/`)
- Prefix matching for other routes
- Handles absolute URLs by stripping protocol/domain
- Supports nested routes (e.g., `/blog` matches `/blog/post`)

### Deprecation Support
The component supports deprecated props with fallbacks:
- `btnClass` → `class`
- `spanClass` → `classes.span`

Tests use the new props, but old props are still supported.

### Application Nav Type
When `navType="application"`, the middle button can be styled differently using `appBtnPosition="middle"` for a prominent action button (e.g., "Add" or "Create").

## Future Test Additions

Potential areas for expanded coverage:
- Custom active class styling
- Multiple active items
- Keyboard navigation (arrow keys)
- Touch gestures on mobile
- Transition animations
- Dark mode theming
- RTL language support
