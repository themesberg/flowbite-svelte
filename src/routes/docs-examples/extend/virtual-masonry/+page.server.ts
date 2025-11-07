import type { PageServerLoad } from './$types';

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
  alt: string;
  author: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const res = await fetch('/api/images');
    if (!res.ok) throw new Error('Failed to fetch images');

    const data = await res.json();
    if (!Array.isArray(data)) {
      throw new Error('Unexpected image payload');
    }

    type PicsumImage = {
      id: string;
      download_url: string;
      width: number;
      height: number;
      author: string;
    };

    const images: Image[] = (data as PicsumImage[]).map((img) => ({
      id: img.id,
      url: img.download_url,
      width: img.width,
      height: img.height,
      alt: `Photo by ${img.author}`,
      author: img.author,
    }));

    return { images };
  } catch (err) {
    console.error('Error fetching images:', err);
    return { images: [] };
  }
};
