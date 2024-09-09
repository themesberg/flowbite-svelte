<script lang="ts">
  import { type TooltipProps as Props, tooltip } from '.';

  let { children, color, arrow = true, offset = 0, triggeredBy, position = 'top', class: className, reference, ...restProps }: Props = $props();

  let {base, arrowBase} = $derived(tooltip({ color, arrow, position }));
  $inspect('base: ', base);

  let tooltipElement: HTMLElement | null = $state(null);
  let triggerElement: HTMLElement | null = null;
  let referenceElement: HTMLElement | null = null;
  let arrowEl: HTMLElement | null = $state(null);
  let visible = $state(false);

  const showTooltip = () => {
    visible = true;
    // if (tooltipElement && referenceElement) {
    //   positionTooltip();
    // }
  };
  const hideTooltip = () => {
    visible = false;
  };
 
  const positionTooltip = () => {
    if (!tooltipElement || !triggerElement ) return;
    const triggerRect = triggerElement.getBoundingClientRect();
    let referenceRect;
    if (reference && referenceElement) {
      referenceRect = referenceElement.getBoundingClientRect();
    }
    const tooltipRect = tooltipElement.getBoundingClientRect();
    let arrowRect;
    if ( arrow && arrowEl ){
      arrowRect = arrowEl.getBoundingClientRect();
    }

    let top, left, arrowTop, arrowLeft;
    
    // when the offset prop is 0, then arrow is shown.
    switch (position) {
      case 'top':
        if (referenceRect) {
          top = referenceRect.top - referenceRect.height - 20 + offset;
          left = referenceRect.left + (referenceRect.width / 2) - (tooltipRect.width / 2);
          if(arrowRect && offset === 0){
            arrowTop = tooltipRect.height - 5;
            arrowLeft = (tooltipRect.width / 2) - (arrowRect.width / 2);
          }
        } else {
          top = triggerRect.top - tooltipRect.height - 10 + offset;
          left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
          if(arrowRect && offset === 0){
            arrowTop = tooltipRect.height - 5;
            arrowLeft = (tooltipRect.width / 2) - (arrowRect.width / 2);
          }
        }
        break;
      case 'bottom':
      if (referenceRect) {
        top = referenceRect.bottom + 10 + offset;
        left = referenceRect.left + (referenceRect.width / 2) - (tooltipRect.width / 2);
        if(arrowRect && offset === 0){
          arrowTop = -arrowRect.height + 10;
          arrowLeft = (tooltipRect.width / 2) - (arrowRect.width / 2);
        }
      } else {
        top = triggerRect.bottom + 10 + offset;
        left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2);
        if(arrowRect && offset === 0){
          arrowTop = -arrowRect.height + 10;
          arrowLeft = (tooltipRect.width / 2) - (arrowRect.width / 2);
        }
      }
        break;
      case 'left':
      if (referenceRect) {
        top = referenceRect.top + (referenceRect.height / 2) - (tooltipRect.height / 2);
        left = referenceRect.left - tooltipRect.width - 10 + offset;
        if(arrowRect && offset === 0){
          arrowTop = (tooltipRect.height / 2) - (arrowRect.height / 2) + 1;
          arrowLeft = tooltipRect.width - 5;
        }
      } else {
        top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.left - tooltipRect.width - 10 + offset;
        if(arrowRect && offset === 0){
          arrowTop = (tooltipRect.height / 2) - (arrowRect.height / 2) + 1;
          arrowLeft = tooltipRect.width - 5;
        }
      }
        break;
      case 'right':
      if (referenceRect) {
        top = referenceRect.top + (referenceRect.height / 2) - (tooltipRect.height / 2);
        left = referenceRect.right + 10 + offset;
        if(arrowRect && offset === 0){
          arrowTop = (tooltipRect.height / 2) - (arrowRect.height / 2) + 1;
          arrowLeft =  -arrowRect.width / 2 + 2;
        }
      } else {
        top = triggerRect.top + (triggerRect.height / 2) - (tooltipRect.height / 2);
        left = triggerRect.right + 10 + offset;
        if(arrowRect && offset === 0){
          arrowTop = (tooltipRect.height / 2) - (arrowRect.height / 2) + 1;
          arrowLeft =  -arrowRect.width / 2 + 2 ;
        }
      }
        break;
    }

    tooltipElement.style.top = `${top}px`;
    tooltipElement.style.left = `${left}px`;

    if (arrowEl) {
      arrowEl.style.top = `${arrowTop}px`;
      arrowEl.style.left = `${arrowLeft}px`;
    }
  };

  $effect(() => {
    triggerElement = document.querySelector(triggeredBy);
    referenceElement = reference ? document.querySelector(reference) : triggerElement;

    if (triggerElement) {
      triggerElement.addEventListener('mouseenter', showTooltip);
      triggerElement.addEventListener('mouseleave', hideTooltip);
    }
    positionTooltip();
 
    window.addEventListener('resize', positionTooltip);
    window.addEventListener('scroll', positionTooltip);
  });

</script>

{#if visible}
  <div 
    bind:this={tooltipElement}
    class={base({className})}
    {...restProps}
  >
    {@render children()}
    {#if arrow}<div bind:this={arrowEl} class={arrowBase({arrow, position})}></div>{/if}

  </div>
{/if}