# Flowbite Svelte Design System

## Anatomical Selectors: data-scope and data-part
To provide a consistent API for styling, testing, and DOM inspection, every component uses a standardized data-attribute pattern.

1. `data-scope`
Definition: Identifies the component boundary.

Format: Always kebab-case (e.g., breadcrumb-item for BreadcrumbItem, button-group for ButtonGroup).

Usage: Applied to the root element of the component. It acts as a namespace to prevent CSS leakage and helps in end-to-end testing (Playwright/Vitest).

2. `data-part`
Definition: Identifies a specific sub-element (slot) within the component.

Requirement: The value must strictly match a key defined in the component's theme.ts slots.

Usage: Acts as a stable "Public API" for CSS selectors. Instead of targeting unstable utility classes, consumers can target:

```css
/* Targeted styling without touching component internals */
[data-scope="breadcrumb-item"] [data-part="link"]:hover {
  text-decoration: underline;
}
```

## Slot Naming

In Flowbite-Svelte, we use `camelCase` for slot names.

Each slot represents a distinct part of a component and follows standard JavaScript naming conventions to ensure consistency and readability across the codebase.

### Example

```ts
const card = tv({
  slots: {
    base: '...',
    columnHeader: '...',
    infoWrapper: '...',
    monthButton: '...',
  }
});
```
Using camelCase makes slot names predictable, easy to reference, and consistent with how component APIs are written throughout Flowbite-Svelte.

| Usage context          | Example                   | Naming style | Notes                                                           |
| ---------------------- | ------------------------- | ------------ | --------------------------------------------------------------- |
| Slot name              | `leftTop`                 | camelCase    | Used in component APIs and `tailwind-variants` slot definitions |
| theme access           | `theme.component.leftTop` | camelCase    | Follows standard JavaScript property naming                     |
| classes/styling access | `classes={{leftTop: ""}}` | camelCase    | Follows standard JavaScript property naming                     |
| HTML data attribute    | `data-part="left-top"`    | kebab-case   | Follows HTML attribute conventions                              |
| CSS selector           | `[data-part="left-top"]`  | kebab-case   | Matches HTML and Tailwind conventions                           |


## **✅ The 5 most common `data-part` categories**

These show up across almost all well-designed component libraries (Radix, Ark, Shoelace, Adobe Spectrum, etc.)

When a data-part name matches a component prop, rename it while destructuring.
This prevents naming conflicts and makes it clear which value comes from the variant system.

```ts
const { base, title: _title } = $derived(timelineItem());
```
---

### **1️⃣ Structural parts (layout / grouping)**

| Name        | Meaning                                       |
| :---------- | :-------------------------------------------- |
| `base`      | Root element of the component                 |
| `content`   | Main content area                             |
| `container` | Layout wrapper (less semantic than `content`) |
| `wrapper`   | Structural wrapper (use sparingly)            |
| `body`      | Main content body (dialogs, cards)            |

---

### **2️⃣ Interactive parts**

| Name      | Use case                  |
| :-------- | :------------------------ |
| `trigger` | Opens/toggles something   |
| `button`  | Clickable control         |
| `item`    | Repeated interactive item |
| `option`  | Selectable option         |
| `tab`     | Tab element               |

Example:

`<button data-part="trigger">`

---

### **3️⃣ Textual parts**

| Name          | Use case                  |
| :------------ | :------------------------ |
| `label`       | Visible text label        |
| `title`       | Heading or title          |
| `description` | Supporting text           |
| `value`       | Dynamic or selected value |

You already used this correctly:

`<span data-part="label">Home</span>`

---

### **4️⃣ Icon & media parts**

| Name     | Use case        |
| :------- | :-------------- |
| `icon`   | Icon glyph      |
| `avatar` | User image      |
| `image`  | Generic image   |
| `badge`  | Small indicator |

Example:

`<Icon data-part="icon" />`

---

### **5️⃣ State / utility parts**

| Name        | Use case           |
| :---------- | :----------------- |
| `overlay`   | Backdrop / overlay |
| `backdrop`  | Modal background   |
| `indicator` | Status indicator   |
| `separator` | Divider line       |

