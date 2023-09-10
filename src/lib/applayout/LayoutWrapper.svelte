<script lang="ts">
  import { twMerge } from "tailwind-merge";
	// Base Classes
	const baseAppLayout = 'w-full h-full flex flex-col overflow-hidden';
	const contentDiv = 'w-full h-full flex overflow-hidden';
	// Reactive Classes
	$: baseClass = twMerge(baseAppLayout, $$props.class);
</script>

<div id="layout wrapper" class={baseClass} {...$$restProps} >
  <!-- Add LayoutHeader component here -->
	<slot name="layoutHeader" />
	<div class="flex-auto {contentDiv}">
    <!-- Add SidebarLeft here -->
		<!-- Add PageContent here -->
    <slot />
    <!-- Add SidebarRight here -->
	</div>
  <!-- Add Footer component here-->
	<slot name="layoutFooter" />
</div>