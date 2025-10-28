<script lang="ts">
  import type { KanbanBoardProps, KanbanCard, KanbanColumn } from "$lib/types";
  import clsx from "clsx";
  import { kanbanBoard } from './theme';
  import { getTheme } from "$lib/theme/themeUtils";

	let {
		columns = $bindable([]),
		onMove = (_card: KanbanCard, _from: KanbanColumn, _to: KanbanColumn) => {},
		onAddCard = (_col: KanbanColumn) => {}, class:className, classes, ...restProps
	}: KanbanBoardProps = $props();

  const theme = getTheme("kanbanBoard");

	let draggedCard = $state<KanbanCard | null>(null);
	let sourceColumnId = $state<string | number | null>(null);
	let dragOverColumnId = $state<string | number | null>(null);

	const styles = kanbanBoard();

	function handleDragStart(card: KanbanCard, colId: string | number) {
		draggedCard = card;
		sourceColumnId = colId;
	}

	function handleDragOver(e: DragEvent, colId: string | number) {
		e.preventDefault();
		dragOverColumnId = colId;
	}

	function handleDragLeave() {
		dragOverColumnId = null;
	}

	function handleDrop(e: DragEvent, targetColId: string | number) {
		e.preventDefault();
		dragOverColumnId = null;

		if (draggedCard === null || sourceColumnId === null) return;
		if (sourceColumnId === targetColId) {
			draggedCard = null;
			sourceColumnId = null;
			return;
		}

		const fromCol = columns.find((c) => c.id === sourceColumnId);
		const toCol = columns.find((c) => c.id === targetColId);
		if (!fromCol || !toCol) return;

		fromCol.cards = fromCol.cards.filter((c) => c.id !== draggedCard!.id);
		toCol.cards = [...toCol.cards, draggedCard!];

		onMove(draggedCard, fromCol, toCol);

		draggedCard = null;
		sourceColumnId = null;
	}

	function handleDragEnd() {
		draggedCard = null;
		sourceColumnId = null;
		dragOverColumnId = null;
	}
</script>

<div class={styles.container({ class: clsx(theme?.container, className) })}>
	{#each columns as col (col.id)}
		<div
			role="group"
      {...restProps}
			aria-label={`${col.title} column drop zone`}
			class={styles.column({ isDragOver: dragOverColumnId === col.id, class: clsx(theme?.column, classes?.column) })}
			ondragover={(e) => handleDragOver(e, col.id)}
			ondragleave={handleDragLeave}
			ondrop={(e) => handleDrop(e, col.id)}
			style={`border-top: 4px solid ${col.color ?? 'var(--color-primary)'}`}
		>
			<h2 class={styles.columnTitle({ class: clsx(theme?.columnTitle, classes?.columnTitle)})}>{col.title}</h2>

			<div 
				class={styles.cardList({ class: clsx(theme?.cardList, classes?.cardList) })}
				role="list"
				aria-label={`${col.title} cards`}
			>
				{#each col.cards as card (card.id)}
					<article
						role="listitem"
						draggable="true"
						ondragstart={() => handleDragStart(card, col.id)}
						ondragend={handleDragEnd}
						class={styles.card({ isDragging: draggedCard?.id === card.id, class: clsx(theme?.card, classes?.card) })}
					>
						<p class={styles.cardTitle({ class: clsx(theme?.cardTitle, classes?.cardTitle) })}>{card.title}</p>

						{#if card.description}
							<p class={styles.cardDescription({ class: clsx(theme?.cardDescription, classes?.cardDescription)})}>{card.description}</p>
						{/if}

						{#if card.tags?.length}
							<div class={styles.cardTags({ class: clsx(theme?.cardTags, classes?.cardTags) })}>
								{#each card.tags as tag}
									<span class={styles.cardTag({ class: clsx(theme?.cardTag, classes?.cardTag) })}>{tag}</span>
								{/each}
							</div>
						{/if}
					</article>
				{/each}
			</div>

			<button
				class={styles.addButton({ class: clsx(theme?.addButton, classes?.addButton) })}
				onclick={() => onAddCard(col)}
				aria-label={`Add card to ${col.title}`}
			>
				+ Add card
			</button>
		</div>
	{/each}
</div>