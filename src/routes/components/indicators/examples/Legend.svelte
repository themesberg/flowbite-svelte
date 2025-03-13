<script lang="ts">
	import { Indicator } from '$lib';
</script>

<div class="flex flex-wrap justify-start gap-4 md:justify-center">
	<div class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</div>
	<div class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</div>
	<div class="flex items-center">
		<Indicator size="sm" color="indigo" class="me-1.5" />Customers
	</div>
	<div class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</div>
</div>
