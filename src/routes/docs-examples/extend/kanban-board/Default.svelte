<script lang="ts">
	import { type KanbanCard, type KanbanColumn, KanbanBoard } from  'flowbite-svelte';

	let columns = $state<KanbanColumn[]>([
		{
			id: 'todo',
			title: 'To Do',
			color: '#ef4444',
			cards: [
				{
					id: 1,
					title: 'Design new landing page',
					description: 'Create mockups for the homepage redesign',
					tags: ['design', 'urgent']
				},
				{
					id: 2,
					title: 'Update documentation',
					description: 'Add API examples to the docs',
					tags: ['docs']
				}
			]
		},
		{
			id: 'in-progress',
			title: 'In Progress',
			color: '#f59e0b',
			cards: [
				{
					id: 3,
					title: 'Implement authentication',
					description: 'Add JWT-based auth system',
					tags: ['backend', 'security']
				}
			]
		},
		{
			id: 'review',
			title: 'Review',
			color: '#8b5cf6',
			cards: [
				{
					id: 4,
					title: 'Code review: Payment flow',
					tags: ['review']
				}
			]
		},
		{
			id: 'done',
			title: 'Done',
			color: '#10b981',
			cards: [
				{
					id: 5,
					title: 'Setup CI/CD pipeline',
					description: 'Configure GitHub Actions',
					tags: ['devops']
				},
				{
					id: 6,
					title: 'Database migration',
					tags: ['backend', 'completed']
				}
			]
		}
	]);

	function handleMove(card: KanbanCard, from: KanbanColumn, to: KanbanColumn) {
		console.log(`Moved "${card.title}" from "${from.title}" to "${to.title}"`);
		
		// The KanbanBoard component already mutated the columns.
		// We just need to trigger reactivity by creating a new reference
		columns = [...columns];
		
		// Here you could make an API call to persist the change
		// await fetch('/api/cards/move', { method: 'POST', body: JSON.stringify({ cardId: card.id, fromId: from.id, toId: to.id }) })
	}

	function handleAddCard(col: KanbanColumn) {
		const cardTitle = prompt(`Add a new card to "${col.title}":`);
		if (!cardTitle?.trim()) return;

		const newCard: KanbanCard = {
			id: Date.now(),
			title: cardTitle.trim(),
			tags: ['new']
		};

		columns = columns.map((column) =>
			column.id === col.id
				? { ...column, cards: [...column.cards, newCard] }
				: column
		);

		// Here you could make an API call to persist the new card
		// await fetch('/api/cards', { method: 'POST', body: JSON.stringify(newCard) })
	}
</script>

<div class="bg-gray-100 py-4 md:py-8">
	<div class="max-w-7xl mx-auto px-2 sm:px-4">
		<div class="mb-4 md:mb-6">
			<h1 class="text-2xl md:text-3xl font-bold text-gray-900">Project Kanban Board</h1>
			<p class="text-sm md:text-base text-gray-600 mt-1 md:mt-2">Drag cards between columns to update their status</p>
		</div>

		<KanbanBoard bind:columns onMove={handleMove} onAddCard={handleAddCard} />

		<!-- Optional: Show stats -->
		<div class="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
			{#each columns as col}
				<div class="bg-white rounded-lg p-3 md:p-4 shadow-sm">
					<div class="text-xs md:text-sm text-gray-600">{col.title}</div>
					<div class="text-xl md:text-2xl font-bold text-gray-900 mt-1">{col.cards.length}</div>
				</div>
			{/each}
		</div>
	</div>
</div>