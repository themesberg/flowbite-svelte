import Home from "./components/Home.svelte";
import Article from "./components/Article.svelte";
import About from "./components/About.svelte";
import NotFound from "./components/NotFound.svelte";

export const routes = {
  // Exact path
  "/": Home,
  "/about": About,
  // Exact path + parameter
  "/article/:title": Article,
  // Wildcard
  "*": NotFound
};