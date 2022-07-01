<script lang="ts">
  import classNames from 'classnames';
  // social media
	export let footerClass: string = 'p-4 bg-white sm:p-6 dark:bg-gray-800';
// logo footer
// export let footerClass: string =	'p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800';
// simple footer
// export let footerClass: string =	'p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800';
// sitemap
// export let footerClass: string = 'bg-white dark:bg-gray-800';
export let footerType:'sitemap'|'simple'|'logo'|'socialmedia'='sitemap'
const footerClasses={
  sitemap:{},
  simple:
}
</script>
