<script>
	import { Card, EcommerceCard } from '$lib/index';
	let divClass =
		'max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700';
</script>

<Card img="/images/image-1.jpeg" header="Card with link and image" link="/">
	<span slot="paragraph">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequatur modi ab
		nisi perferendis placeat natus repellendus officiis ipsa.
	</span>
</Card>

<EcommerceCard img="/images/image-1.jpeg" title="Card with link and image">
	<span slot="paragraph">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequatur modi ab
		nisi perferendis placeat natus repellendus officiis ipsa.
	</span>
</EcommerceCard>
