// src/routes/api/posts/+server.ts
import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts, fetchApiCheck, fetchBuilders, fetchBlocksMarkdownPosts } from "../../utils";

export const GET = async () => {
  const [posts, apicheck, blocks, builders] = await Promise.all([
    fetchMarkdownPosts(),
    fetchApiCheck(),
    fetchBlocksMarkdownPosts(),
    fetchBuilders()
  ]);

  return json({
    posts,
    apicheck,
    blocks,
    builders
  });
};

