/**
 * WARNING: This is a simple in-memory mock data store for demonstration purposes only.
 *
 * LIMITATIONS:
 * - Data resets when server restarts
 * - Not safe for concurrent requests (race conditions possible)
 * - Not suitable for production use
 *
 * For production, use a proper database with transactions (PostgreSQL, MongoDB, etc.)
 */
export const mockColumns = [
  {
    id: "todo",
    title: "To Do",
    color: "#ef4444",
    cards: [
      { id: 1, title: "Design landing page", tags: ["design"] },
      { id: 2, title: "Write documentation", tags: ["docs"] }
    ]
  },
  {
    id: "doing",
    title: "In Progress",
    color: "#f59e0b",
    cards: [{ id: 3, title: "Implement API", tags: ["backend"] }]
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    cards: []
  }
];
