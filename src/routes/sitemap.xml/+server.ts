interface Page {
  loc: string;
  changefreq?: string;
	priority?: string;
	lastmod?: string;
}

const site = 'https://svelte-5-ui-lib.codewithshin.com'; 
const pages: Page[] = [
	{
		loc: '',
		changefreq: 'weekly',
		priority: '0.5',
		lastmod: '2024-05-20'
	},
	{
		loc: 'components/alert',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/avatar',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/badge',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/banner',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/bottom-navigation',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/bredcrumb',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/button',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/button-group',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/card',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/darkmode',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/device-mockups',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/drawer',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/dropdown',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/footer',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/gallery',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/indicators',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/kbd',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/list-group',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/navbar',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/progress',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/rating',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/sidebar',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/skeleton',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/spinner',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/tab',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/table',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/toast',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'components/video',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/checkbox',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/floating-label',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/radio',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/range',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/select',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'forms/toggle',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'pages/about',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'plugins/chart',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/blockquote',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/heading',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/hr',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/link',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/list',
		changefreq: 'weekly',
		priority: '0.5',
	},
	{
		loc: 'typography/paragraph',
		changefreq: 'weekly',
		priority: '0.5',
	}
];

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const body = sitemap(pages);
	const response = new Response(body);
	response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
	response.headers.set('Content-Type', 'application/xml');
	return response;
}

const sitemap = (pages: Page[]) => `<?xml version="1.0" encoding="UTF-8" ?>
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
		({ loc, changefreq, priority, lastmod }) => `
  <url>
    <loc>${site}/${loc}</loc>
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
		${priority ? `<priority>${priority}</priority>` : ''}
		${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
  </url>
  `
	)
	.join('')}
</urlset>`;