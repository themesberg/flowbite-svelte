import { fetchMarkdownPosts } from '../utils/fetchPost';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  // console.log('allPosts', allPosts);
  return json(allPosts);
};
