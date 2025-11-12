<script lang="ts">
  import type { ToastContainerProps } from "$lib/types";
  import clsx from "clsx";
  import { toastContainer } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  
  let { children, position = "top-right", class: className, ...restProps }: ToastContainerProps = $props();

  const theme = getTheme("toastContainer");
  
  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
  };

  const base = toastContainer({class: clsx(positionClasses[position], theme, className)})

</script>

<div {...restProps} class={base}>
  {@render children()}
</div>