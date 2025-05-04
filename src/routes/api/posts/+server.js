import { fetchBuilders, fetchMarkdownPosts, fetchApiCheck } from "../../utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const allBuilders = await fetchBuilders();
  const allApicheck = await fetchApiCheck();
  return json({
    posts: allPosts,
    builders: allBuilders,
    apicheck: allApicheck
  });
};
