// src/routes/api/posts/+server.ts
import { json } from "@sveltejs/kit";
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts } from "../../utils";

export const GET = async () => {
  const [posts, blocks, builders] = await Promise.all([fetchMarkdownPosts(), fetchBlocksMarkdownPosts(), fetchBuilders()]);

  return json({
    posts,
    blocks,
    builders
  });
};
