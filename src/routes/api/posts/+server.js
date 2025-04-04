import { fetchBuilders, fetchMarkdownPosts } from "../../utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const allBuilders = await fetchBuilders();
  return json({
    posts: allPosts,
    builders: allBuilders
  });
};
