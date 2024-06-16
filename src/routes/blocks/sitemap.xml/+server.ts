const site = 'https://flowbite-svelte-blocks.codewithshin.com/'; 
const pages: string[] = [
  '',
	'application',
	'application/advanced-tables',
	'application/crud-create-drwawers',
	'application/crud-create-forms',
	'application/crud-create-modals',
  'application/crud-delete-confirm',
'application/crud-read-drawers',
'application/crud-read-modals',
'application/crud-read-sections',
'application/crud-success-message',
'application/crud-update-drawers',
'application/crud-update-forms',
'application/crud-update-modals',
'application/dashboard-footer',
'application/faceted-search-drawers',
'application/faceted-search-modals',
'application/filter',
'application/navbar',
'application/sidenav',
'application/table-footers',
'application/table-headers',
'example',
'marketing',
'marketing/404',
'marketing/500',
'marketing/account-recovery',
'marketing/banner',
'marketing/blog',
'marketing/contact',
'marketing/content',
'marketing/cookie',
'marketing/cta',
'marketing/customer-logos',
'marketing/event-schedule',
'marketing/faq',
'marketing/feature',
'marketing/footer',
'marketing/header',
'marketing/hero',
'marketing/login',
'marketing/maintenance',
'marketing/newsletter',
'marketing/popup',
'marketing/portfolio',
'marketing/pricing',
'marketing/register',
'marketing/reset-password',
'marketing/social-proof',
'marketing/team',
'marketing/testimonial',
'marketing/user-onboarding',
'quickstart',
'publisher/blog-templates',
'publisher/comments',
'publisher/related-articles',
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