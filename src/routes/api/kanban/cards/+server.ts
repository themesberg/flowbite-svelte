// src/routes/api/kanban/cards/+server.ts
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { mockColumns } from "../mockData";

export const POST: RequestHandler = async ({ request }) => {
  const { title, columnId } = await request.json();

  if (!title?.trim() || !columnId) {
    return json({ error: "Missing required fields" }, { status: 400 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));

  const column = mockColumns.find((c) => c.id === columnId);
  if (!column) {
    return json({ error: "Column not found" }, { status: 404 });
  }

  const newCard = {
    id: Date.now(),
    title,
    tags: ["new"]
  };

  column.cards.push(newCard);

  return json(newCard, { status: 201 });
};
