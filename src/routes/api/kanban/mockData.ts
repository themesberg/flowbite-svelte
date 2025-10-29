// src/routes/api/kanban/mockData.ts
export let mockColumns = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#ef4444',
    cards: [
      { id: 1, title: 'Design landing page', tags: ['design'] },
      { id: 2, title: 'Write documentation', tags: ['docs'] }
    ]
  },
  {
    id: 'doing',
    title: 'In Progress',
    color: '#f59e0b',
    cards: [
      { id: 3, title: 'Implement API', tags: ['backend'] }
    ]
  },
  {
    id: 'done',
    title: 'Done',
    color: '#10b981',
    cards: []
  }
];