<script lang="ts" module>
  import type { KanbanColumnType, KanbanCardType } from "$lib/types";

  // Define specific types for the call logs instead of using 'any'
  interface MoveCall {
    card: KanbanCardType;
    from: KanbanColumnType;
    to: KanbanColumnType;
  }

  interface AddCardCall {
    column: KanbanColumnType;
  }

  export const testState = $state({
    onMoveCalls: [] as MoveCall[],
    onAddCardCalls: [] as AddCardCall[]
  });
</script>

<script lang="ts">
  import { KanbanBoard } from "$lib";

  let columns: KanbanColumnType[] = $state([
    {
      id: "col-1",
      title: "Column 1",
      cards: [{ id: "cb-card-1", title: "Callback Test Card 1" }]
    },
    {
      id: "col-2",
      title: "Column 2",
      cards: []
    }
  ]);

  function handleMove(card: KanbanCardType, from: KanbanColumnType, to: KanbanColumnType) {
    testState.onMoveCalls.push({ card, from, to });
  }

  function handleAddCard(col: KanbanColumnType) {
    testState.onAddCardCalls.push({ column: col });
  }
</script>

<KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} data-testid="callbacks-board" />
