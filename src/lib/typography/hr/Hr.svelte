<script lang="ts">
  import { type HrProps as Props, hrVariants, hrContainerVariants, hrInnerDivVariants } from './index';

  let {
    children,
    icon,
    divClass,
    hrClass,
    innerDivClass,
    ...attributes
  }: Props = $props();

  let horizontalCls = hrVariants({ withChildren: !!children, class: hrClass });
  let containerCls = hrContainerVariants({ withChildren: !!children, class: divClass });
  let innerDivCls = hrInnerDivVariants({ icon, class: innerDivClass });
</script>

{#if children}
  <div {...attributes} class={containerCls}>
    <hr class={horizontalCls} />
    <div class={innerDivCls}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr class={horizontalCls} {...attributes} />
{/if}

