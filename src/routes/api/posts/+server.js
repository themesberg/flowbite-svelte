import { fetchMarkdownPosts, fetchApiCheck } from "../../utils";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  const allApicheck = await fetchApiCheck();
  return json({
    posts: allPosts,
    apicheck: allApicheck
  });
};
