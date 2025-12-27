import type { LayoutLoad } from "./$types";
import type { MarkdownEntry } from "../utils";

type BlocksData = Record<string, MarkdownEntry[]>;

/**
 * Builder entry for navigation or UI elements
 */
interface BuilderEntry {
  id: string;
  name: string;
  href?: string;
  icon?: string;
  [key: string]: unknown; // Allow additional properties
}

/**
 * Dashboard entry for dashboard-related data
 */
interface DashboardEntry {
  id: string;
  title: string;
  description?: string;
  data?: unknown;
  [key: string]: unknown; // Allow additional properties
}

interface ApiPostsResponse {
  posts: Record<string, MarkdownEntry[]>;
  blocks: BlocksData;
  builders: BuilderEntry[];
  dashboard: DashboardEntry[];
}

export const prerender = false;

export const load: LayoutLoad = async ({ fetch, parent }) => {
  const parentData = await parent();

  try {
    const response = await fetch("/api/posts");
    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }
    const data = (await response.json()) as ApiPostsResponse;

    return {
      ...parentData,
      posts: data.posts,
      blocks: data.blocks,
      builders: data.builders,
      dashboard: data.dashboard
    };
  } catch (error) {
    console.error(`Error in load function for /blocks: ${error}`);
    return {
      ...parentData,
      posts: {},
      blocks: {},
      builders: [],
      dashboard: []
    };
  }
};
