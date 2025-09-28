<script lang="ts">
  import type { ModalProps } from "$lib";
  import Dialog from "$lib/dialog/Dialog.svelte";
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { sineIn } from "svelte/easing";
  import { fade } from "svelte/transition";
  import { modal as modalStyle } from "./theme";
  import { onMount } from "svelte";

  let {
    children,
    header,
    footer,
    title,
    open = $bindable(false),
    permanent = false,
    dismissable = true,
    closeBtnClass,
    headerClass,
    bodyClass,
    footerClass,
    size = "md",
    placement,
    class: className,
    classes,
    transitionParams,
    transition = fade,
    fullscreen = false,
    countdown: countdownConfig = {
      number: 0,
      text: "You can close this in {count} seconds"
    },
    ...restProps
  }: ModalProps = $props();

  warnThemeDeprecation("Modal", { headerClass, bodyClass, footerClass, closeBtnClass }, { bodyClass: "body", headerClass: "header", footerClass: "footer", closeBtnClass: "close" });
  const styling = $derived(classes ?? { header: headerClass, body: bodyClass, footer: footerClass, close: closeBtnClass });

  const theme = getTheme("modal");
  const paramsDefault = { duration: 100, easing: sineIn };
  const paramsOptions = $derived(transitionParams ?? paramsDefault);
  const { base, header: headerCls, footer: footerCls, body } = $derived(modalStyle({ placement, size }));

  // Countdown logic
  let countdownRemaining = $state(countdownConfig.number);
  let countdownActive = $state(countdownConfig.number > 0);
  let outsideclose = $derived(countdownRemaining > 0 ? false : true);
  let countdownInterval: NodeJS.Timeout | null = null;

  // Reset countdown when modal opens
  $effect(() => {
    if (open && countdownConfig.number > 0) {
      countdownRemaining = countdownConfig.number;
      countdownActive = true;
      startCountdown();
    } else if (!open) {
      stopCountdown();
    }
  });

  function startCountdown() {
    stopCountdown(); // Clear any existing interval
    countdownInterval = setInterval(() => {
      countdownRemaining--;
      if (countdownRemaining <= 0) {
        countdownActive = false;
        stopCountdown();
      }
    }, 1000);
  }

  function stopCountdown() {
    if (countdownInterval) {
      clearInterval(countdownInterval);
      countdownInterval = null;
    }
  }

  // Cleanup on destroy
  onMount(() => {
    return () => stopCountdown();
  });

  // Determine if close button should be shown
  const shouldShowCloseButton = $derived(dismissable && !permanent && !countdownActive);
  const shouldShowCountdownMessage = $derived(countdownActive && countdownRemaining > 0);

  // Countdown display text
  const displayCountdownText = $derived(() => {
    if (typeof countdownConfig.text === "function") {
      return countdownConfig.text(countdownRemaining);
    } else {
      return (countdownConfig.text ?? "").replace("{count}", countdownRemaining.toString());
    }
  });
</script>

<Dialog bind:open {transition} dismissable={dismissable && !title && !permanent && !countdownActive} transitionParams={paramsOptions} {classes} count={countdownRemaining} {outsideclose} {...restProps} class={base({ fullscreen, class: clsx(theme?.base, className) })}>
  {#if title || header}
    <div class={headerCls({ class: clsx(theme?.header, styling.header) })}>
      {#if title}
        <div class="flex w-full items-center justify-between">
          <h3 class="flex-1">{title}</h3>
          <div class="flex items-center gap-2">
            {#if shouldShowCountdownMessage}
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {displayCountdownText()}
              </span>
            {/if}
            {#if shouldShowCloseButton}
              <CloseButton type="submit" formnovalidate class={clsx(styling.close)} />
            {/if}
          </div>
        </div>
      {:else if header}
        {@render header()}
      {/if}
    </div>
  {/if}

  <div class={body({ class: clsx(theme?.body, styling.body) })}>
    {@render children?.()}
  </div>

  {#if footer}
    <div class={footerCls({ class: clsx(theme?.footer, styling.footer) })}>
      {@render footer()}
    </div>
  {/if}
</Dialog>
