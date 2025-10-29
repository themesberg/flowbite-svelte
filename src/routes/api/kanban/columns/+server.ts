// src/routes/api/kanban/columns/+server.ts
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { mockColumns } from "../mockData";

export const GET: RequestHandler = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return json(mockColumns);
};
