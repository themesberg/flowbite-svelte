import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
  try {
    const res = await fetch('https://picsum.photos/v2/list?page=1&limit=50');
    if (!res.ok) {
      return new Response(JSON.stringify({ images: [] }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=86400' // cache for 1 day
      }
    });
  } catch (error) {
    console.error('Failed to fetch images from picsum.photos', error);
    return new Response(JSON.stringify({ images: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
