// This endpoint has been removed. Nav data is served from src/lib/generated/nav.json.
// Safe to delete this file: git rm src/routes/api/posts/+server.js
import { error } from "@sveltejs/kit";
export const GET = () => error(404, "Not found");
