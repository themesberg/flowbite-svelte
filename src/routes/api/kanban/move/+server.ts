// src/routes/api/kanban/move/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { mockColumns } from '../mockData';

export const POST: RequestHandler = async ({ request }) => {
  const { cardId, fromColumnId, toColumnId } = await request.json();

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  const fromCol = mockColumns.find(c => c.id === fromColumnId);
  const toCol = mockColumns.find(c => c.id === toColumnId);
  
  if (!fromCol || !toCol) {
    return json({ error: 'Column not found' }, { status: 404 });
  }

  const cardIndex = fromCol.cards.findIndex(c => c.id === cardId);
  if (cardIndex === -1) {
    return json({ error: 'Card not found' }, { status: 404 });
  }

  // Move the card
  const [card] = fromCol.cards.splice(cardIndex, 1);
  toCol.cards.push(card);

  return json({ success: true });
};