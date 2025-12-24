// src/routes/api/posts/+server.ts
import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../../utils";

// Disable prerendering for this endpoint since it uses import.meta.glob
export const prerender = false;

export const GET = async () => {
  const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardPosts()]);

  return json({
    posts,
    blocks,
    builders,
    dashboard
  });
};
