const site = 'https://svelte-5-ui-lib.codewithshin.com'; 
const pages: string[] = [
	'components/alert',
	'components/avatar',
	'components/badge',
	'components/banner',
	'components/bottom-navigation',
	'components/bredcrumb',
	'components/button',
	'components/button-group',
	'components/card',
	'components/darkmode',
	'components/device-mockups',
	'components/drawer',
	'components/dropdown',
	'components/footer',
	'components/gallery',
	'components/indicator',
	'components/kbd',
	'components/list-group',
	'components/progress',
	'components/rating',
	'components/sidebar',
	'components/skeleton',
	'components/spinner',
	'components/tab',
	'components/table',
	'components/toast',
	'components/video',
	'forms/checkbox',
	'forms/floating-label',
	'forms/radio',
	'forms/range',
	'forms/select',
	'forms/toggle',
	'pages/about',
	'plugins/chart',
	'typography/blockquote',
	'typography/heading',
	'typography/hr',
	'typography/link',
	'typography/list',
	'typography/paragraph',
];

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
	.map(
		(page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
	)
	.join('')}
</urlset>`;