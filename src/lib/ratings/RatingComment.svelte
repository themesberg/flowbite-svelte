<script lang="ts">
	export let comment: {
		id: string;
		user: {
			name: string;
			img: {
				src: string;
				alt: string;
			};
			desc: string;
		};
		rating: number;
		comment: string;
	};
</script>

<article>
	<div class="flex items-center mb-4 space-x-4">
		<img class="w-10 h-10 rounded-full" src={comment.user.img.src} alt={comment.user.img.alt} />
		<div class="space-y-1 font-medium dark:text-white">
			<p>{comment.user.name} {comment.user.desc}</p>
		</div>
	</div>
	<div class="flex items-center mb-1">
		<svg
			class="w-5 h-5 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/></svg
		>
		<svg
			class="w-5 h-5 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/></svg
		>
		<svg
			class="w-5 h-5 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/></svg
		>
		<svg
			class="w-5 h-5 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/></svg
		>
		<svg
			class="w-5 h-5 text-yellow-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
			/></svg
		>
		<h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
			Thinking to buy another one!
		</h3>
	</div>
	<footer class="mb-5 text-sm text-gray-500 dark:text-gray-400">
		<p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
	</footer>
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
		class="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
		>Read more</a
	>
	<aside>
		<p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
		<div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
			<a
				href="/"
				class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
				>Helpful</a
			>
			<a href="/" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
				>Report abuse</a
			>
		</div>
	</aside>
</article>
