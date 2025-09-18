// src/routes/api/posts/+server.ts
import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardMarkdownPosts } from "../../utils";

export const GET = async () => {
  const [posts, blocks, builders, dashboard] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders(), fetchDashboardMarkdownPosts()]);

  return json({
    posts,
    blocks,
    builders,
    dashboard
  });
};
