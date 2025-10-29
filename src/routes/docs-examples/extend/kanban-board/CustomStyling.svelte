<script lang="ts">
  import { type KanbanColumnType, KanbanBoard } from 'flowbite-svelte';

  let columns = $state<KanbanColumnType[]>([
    {
      id: 'backlog',
      title: 'Backlog',
      color: '#6b7280',
      cards: [
        { id: 1, title: 'Research user feedback', tags: ['research'] }
      ]
    },
    {
      id: 'active',
      title: 'Active Sprint',
      color: '#3b82f6',
      cards: [
        { id: 2, title: 'Build feature X', description: 'Sprint 24', tags: ['dev', 'high-priority'] }
      ]
    },
    {
      id: 'done',
      title: 'Completed',
      color: '#22c55e',
      cards: []
    }
  ]);

  function handleMove() {
    columns = [...columns];
  }

  function handleAddCard(col: KanbanColumnType) {
    const title = prompt(`Add card to ${col.title}:`);
    if (!title) return;
    
    columns = columns.map((column) =>
      column.id === col.id
        ? { ...column, cards: [...column.cards, { id: Date.now(), title }] }
        : column
    );
  }
</script>

<KanbanBoard 
  bind:columns 
  onMove={handleMove} 
  onAddCard={handleAddCard}
  classes={{
    column: 'bg-white shadow-lg',
    card: 'hover:shadow-xl transition-shadow',
    cardTitle: 'text-blue-600 font-bold',
    addButton: 'bg-blue-500 hover:bg-blue-600 text-white'
  }}
/>