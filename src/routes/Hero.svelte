<script lang="ts">
  import Button from '$lib/buttons/Button.svelte';
  import Input from '$lib/forms/Input.svelte';
  import Tooltip from '$lib/tooltips/Tooltip.svelte';

  const text_copied = 'Copied!';
  const text_not_copied = 'Copy to clipboard';

  let placeholder: string = 'npm i flowbite flowbite-svelte';
  let tooltip_text: string = text_not_copied;
  let open: boolean | undefined = undefined;

  function set_tooltip(copied: boolean) {
    tooltip_text = copied ? text_copied : text_not_copied;
    open = copied || undefined;
  }

  const copyToClipboard = async (e: MouseEvent) => {
    if (tooltip_text === text_copied) return;

    const REG_HEX = /&#x([a-fA-F0-9]+);/g;
    const decodedText = placeholder.replace(REG_HEX, function (_match, group1) {
      const num = parseInt(group1, 16);
      return String.fromCharCode(num);
    });

    open = false; // must be before `await`
    await window.navigator.clipboard.writeText(decodedText);

    // (e?.target as HTMLButtonElement)?.blur();
    set_tooltip(true);
  };

  const show = ({ detail }: { detail: boolean }) => detail || set_tooltip(false);
</script>

<div class="overflow-hidden flex flex-col pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-24 px-4 lg:px-20">
  <div class="flex flex-col gap-20">
    <div class="flex items-center1 justify-end gap-16">
      <div class="flex flex-col justify-start gap-10">
        <div class="flex flex-col gap-4 lg:gap-6 text-left">
          <h1 class="text-4xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-white">
            <span class="block xl:inline">Speed up your web development with</span>
            <span class="block text-primary-700 dark:text-primary-700 xl:inline">Flowbite Svelte</span>
          </h1>
          <p class="text-lg lg:text-xl leading-normal text-gray-500 dark:text-gray-400">
            Flowbite Svelte is an official Flowbite component library for Svelte. All interactivities are
            handled by Svelte.
          </p>
          <div class="mt-4 md:mt-5 sm:flex justify-center sm:justify-start">
            <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center max-w-lg">
              <Input size="lg" {placeholder} readonly class="!text-sm">
                <div slot="right" class="flex items-center pl-32">
                  <button on:click={copyToClipboard} class="hover:text-primary-700 py-2 px-1">
                    {#if tooltip_text == text_not_copied}
                      <svg
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.49984 3.16667H2.83317C2.39114 3.16667 1.96722 3.34226 1.65466 3.65482C1.3421 3.96738 1.1665 4.39131 1.1665 4.83333V14.8333C1.1665 15.2754 1.3421 15.6993 1.65466 16.0118C1.96722 16.3244 2.39114 16.5 2.83317 16.5H11.1665C11.6085 16.5 12.0325 16.3244 12.345 16.0118C12.6576 15.6993 12.8332 15.2754 12.8332 14.8333V4.83333C12.8332 4.39131 12.6576 3.96738 12.345 3.65482C12.0325 3.34226 11.6085 3.16667 11.1665 3.16667H9.49984M4.49984 3.16667C4.49984 3.60869 4.67543 4.03262 4.98799 4.34518C5.30055 4.65774 5.72448 4.83333 6.1665 4.83333H7.83317C8.2752 4.83333 8.69912 4.65774 9.01168 4.34518C9.32424 4.03262 9.49984 3.60869 9.49984 3.16667M4.49984 3.16667C4.49984 2.72464 4.67543 2.30072 4.98799 1.98816C5.30055 1.67559 5.72448 1.5 6.1665 1.5H7.83317C8.2752 1.5 8.69912 1.67559 9.01168 1.98816C9.32424 2.30072 9.49984 2.72464 9.49984 3.16667"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    {:else}
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.99992 8.29289L4.64637 7.93934L1.35697 4.64995C1.26295 4.56044 1.13776 4.51096 1.00786 4.51209C0.876764 4.51323 0.751358 4.56582 0.658654 4.65852C0.56595 4.75122 0.513365 4.87663 0.512226 5.00773C0.511097 5.13763 0.560568 5.26282 0.650079 5.35684L4.64642 9.35318C4.64644 9.3532 4.64645 9.35322 4.64647 9.35323C4.74023 9.44693 4.86736 9.49957 4.99992 9.49957C5.13248 9.49957 5.25961 9.44693 5.35337 9.35323L4.99992 8.29289ZM4.99992 8.29289L5.35347 7.93934L12.6464 0.646393C12.6464 0.646376 12.6465 0.646358 12.6465 0.64634C12.7402 0.552638 12.8674 0.5 12.9999 0.5C13.1325 0.5 13.2597 0.552658 13.3534 0.646393C13.4471 0.740146 13.4997 0.867253 13.4997 0.999786C13.4997 1.13234 13.4471 1.25947 13.3534 1.35323C13.3533 1.35325 13.3533 1.35327 13.3533 1.35329L5.35342 9.35318L4.99992 8.29289Z"
                          stroke="#EB4F27" />
                      </svg>
                    {/if}
                  </button>

                  <Tooltip bind:open on:show={show}>{tooltip_text}</Tooltip>
                </div>
              </Input>

              <Button
                size="lg"
                class="gap-2 w-full md:w-fit whitespace-nowrap"
                href="'/pages/getting-started'"
                color="primary">
                Get started
                <svg
                  width="16"
                  height="11"
                  viewBox="0 0 16 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.293 0.792787C10.4805 0.605316 10.7348 0.5 11 0.5C11.2652 0.5 11.5195 0.605316 11.707 0.792787L15.707 4.79279C15.8945 4.98031 15.9998 5.23462 15.9998 5.49979C15.9998 5.76495 15.8945 6.01926 15.707 6.20679L11.707 10.2068C11.5184 10.3889 11.2658 10.4897 11.0036 10.4875C10.7414 10.4852 10.4906 10.38 10.3052 10.1946C10.1198 10.0092 10.0146 9.75838 10.0123 9.49619C10.01 9.23399 10.1108 8.98139 10.293 8.79279L12.586 6.49979H1C0.734784 6.49979 0.48043 6.39443 0.292893 6.20689C0.105357 6.01936 0 5.765 0 5.49979C0 5.23457 0.105357 4.98022 0.292893 4.79268C0.48043 4.60514 0.734784 4.49979 1 4.49979H12.586L10.293 2.20679C10.1055 2.01926 10.0002 1.76495 10.0002 1.49979C10.0002 1.23462 10.1055 0.980314 10.293 0.792787Z"
                    fill="white" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="p-0 hidden lg:block">
        <div class="relative dark:hidden">
          <img class="max-w-2xl" src="/images/gallery.png" alt="Header" />
        </div>
        <div class="hidden relative dark:block">
          <img class="max-w-2xl" src="/images/gallery-dark.png" alt="Header" />
        </div>
      </div>
    </div>
  </div>
</div>
