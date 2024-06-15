const site = 'https://flowbite-svelte-admin-dashboard.vercel.app/'; 
const pages: string[] = [
  '',
  'dashboard',
  'layouts/stacked',
  'layouts/sidebar',
  'crud/products',
  'crud/users',
  'settings',
  'pages/pricing',
  'errors/400',
  'errors/404',
  'errors/500',
  'authentication/sign-in',
  'authentication/sign-up',
  'authentication/forgot-password',
  'authentication/reset-password',
  'authentication/profile-lock',
  'playground/stacked',
  'playground/sidebar',
]

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