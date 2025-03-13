<script lang="ts">
	import { RatingComment } from '$lib';
	let comment = {
		id: '1',
		user: {
			name: 'Jese Leos',
			img: {
				src: '/images/profile-picture-2.webp',
				alt: 'Jese Leos'
			},
			joined: 'Joined on August 2014'
		},
		total: 5,
		rating: 4.5,
		heading: 'Thinking to buy another one!',
		address: 'the UK',
		datetime: '2022-03-25'
	};
</script>

<RatingComment {comment} helpfullink="/" abuselink="/">
	<p class="mb-2 font-light text-gray-500 dark:text-gray-400">
		This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived
		yesterday and the first thing I did was set the time, popped on an identical strap from another
		Invicta and went in the shower with it to test the waterproofing.... No problems.
	</p>
	<p class="mb-3 font-light text-gray-500 dark:text-gray-400">
		It is obviously not the same build quality as those very expensive watches. But that is like
		comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.
	</p>
	<a
		href="/"
		class="text-primary-600 dark:text-primary-500 mb-5 block text-sm font-medium hover:underline"
		>Read more</a
	>
	{#snippet evaluation()}
		19 people found this helpful
	{/snippet}
</RatingComment>
