import type { RequestHandler } from './$types';

const errorResponse = () => new Response(JSON.stringify({ images: [] }), {
  status: 502,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'public, max-age=60'
  }
});

export const GET: RequestHandler = async ({ fetch }) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch('https://picsum.photos/v2/list?page=1&limit=50', {
      signal: controller.signal
    });

    if (!res.ok) {
      return errorResponse();
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400' // cache for 1 day
      }
    });
  } catch (error) {
    console.error('Failed to fetch images from picsum.photos', error);

    return errorResponse();
  } finally {
    clearTimeout(timeoutId);
  }
};
