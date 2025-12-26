import type { LayoutLoad } from "./$types";
import type { MarkdownEntry } from "../utils";

type BlocksData = Record<string, MarkdownEntry[]>;

interface ApiPostsResponse {
  posts: Record<string, MarkdownEntry[]>;
  blocks: BlocksData;
  builders: any[];
  dashboard: any[];
}

export const prerender = false;

export const load: LayoutLoad = async ({ fetch, parent }) => {
  const parentData = await parent();

  try {
    const response = await fetch("/api/posts");
    const data = (await response.json()) as ApiPostsResponse;

    return {
      ...parentData,
      posts: data.posts,
      blocks: data.blocks,
      builders: data.builders,
      dashboard: data.dashboard
    };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
    return {
      ...parentData,
      posts: {},
      blocks: {},
      builders: [],
      dashboard: []
    };
  }
};
