# Troubleshooting TypeScript Errors

## If you're seeing "validation does not exist in type FloatingLabelInputProps"

This is a TypeScript caching issue. The types ARE correct in `src/lib/types.ts` (lines 772-786), but TypeScript/Svelte language server may need to reload.

### Solutions (try in order):

1. **Restart TypeScript Server in VS Code**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type: "TypeScript: Restart TS Server"
   - Press Enter

2. **Reload VS Code Window**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - Type: "Developer: Reload Window"
   - Press Enter

3. **Clear node_modules and reinstall**
   ```bash
   rm -rf node_modules
   npm install
   ```

4. **Clear Svelte language server cache**
   ```bash
   rm -rf ~/.vscode/extensions/svelte.svelte-vscode-*/
   ```

5. **Build the project**
   ```bash
   npm run build
   ```

## What was changed?

### FloatingLabelInputProps (in `src/lib/types.ts`)
**Removed:**
- `color?: FloatingLabelInputVaratiants["color"]`

**Added:**
- `validation?: FloatingLabelInputVaratiants["validation"]` - New semantic validation states (none, success, error)
- `disabled?: FloatingLabelInputVaratiants["disabled"]` - Explicit disabled state
- `withIcon?: FloatingLabelInputVaratiants["withIcon"]` - Icon support flag

### Theme changes (in `src/lib/forms/floating-label/theme.ts`)
**Removed:**
- All individual color variants (primary, red, green, blue, etc.)

**Added:**
- `validation` variant with three semantic states:
  - `none` - Default state
  - `success` - Success state with green colors
  - `error` - Error state with red colors
- `disabled` variant for proper disabled styling
- `withIcon` variant for icon alignment

### Component changes (in `FloatingLabelInput.svelte`)
**Updated props:**
```typescript
// OLD
color = "brand"

// NEW
validation = "none"
disabled = false
withIcon = false
```

## Usage Examples

```svelte
<!-- Default -->
<FloatingLabelInput>Label</FloatingLabelInput>

<!-- Success -->
<FloatingLabelInput validation="success">Success Label</FloatingLabelInput>

<!-- Error -->
<FloatingLabelInput validation="error">Error Label</FloatingLabelInput>

<!-- Disabled -->
<FloatingLabelInput disabled={true}>Disabled Label</FloatingLabelInput>

<!-- With icon -->
<FloatingLabelInput withIcon={true}>
  <EnvelopeOutline class="w-4 h-4 me-1.5" />
  Email
</FloatingLabelInput>
```
