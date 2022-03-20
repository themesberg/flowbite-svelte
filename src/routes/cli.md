---
layout: doc
---

<h1 class="text-3xl w-full dark:text-white">Flowbite-Svelte-CLI (fsc)</h1>

<p class="dark:text-white py-4 text-lg">This a Shell script CLI that allows you to find compoent default props from your command line.</p>

<h2 class="text-2xl w-full mt-8 dark:text-white">Installation</h2>

<h3 class="text-xl w-full mt-8 dark:text-white">Homebrew</h3>

```sh
brew tap shinokada/fsc
brew install fsc
```

<h3 class="text-xl w-full mt-8 dark:text-white">Awesome Package Manager</h3>
<p class="dark:text-white py-4 text-lg"><a href="https://github.com/shinokada/awesome" class="text-blue-600 hover:underline dark:text-blue-500">The Awesome package manager</a> is a simple shell script package manager. Awesome installs a shell script package from a GitHub repo on your macOS/Linux.</p>

<p class="dark:text-white py-4 text-lg">Let's install the Awesome package manager:</p>

```sh
curl -s https://raw.githubusercontent.com/shinokada/awesome/main/install | bash -s install
```

<p class="dark:text-white py-4 text-lg">Add the following to your terminal config file, such as .zshrc or .bashrc.</p>

```sh
export PATH=$HOME/.local/share/bin:$PATH
```

<p class="dark:text-white py-4 text-lg">Then source the config file or open a new terminal tab.</p>

```sh
. ~/.zshrc
```

<p class="dark:text-white py-4 text-lg">Now you can install fsc.</p>

```sh
awesome install shinokada/fsc
```

<h2 class="text-2xl w-full dark:text-white py-8">How to use it</h2>

<h3 class="text-xl w-full dark:text-white py-8">List components</h3>

```sh
fsc
```

<img src="/images/fsc.png" alt="fsc list" />

<h3 class="text-xl w-full dark:text-white py-8">List component props</h3>

<p class="dark:text-white py-4 text-lg">For example, displaying navbar component props:

```sh
fsc navbar
```

<img src="/images/fsc-component.png" alt="fsc component" />

<h2 class="text-2xl w-full dark:text-white py-8">Related topics</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/detting-started" class="text-blue-600 hover:underline dark:text-blue-500">Getting started</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cli" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite-Svelte-CLI</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/about" class="text-blue-600 hover:underline dark:text-blue-500">About</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white pt-4 w-full">Read more about <a href="https://github.com/shinokada/fsc" class="text-blue-600 hover:underline dark:text-blue-500">Flowbite-Svelte-CLI GitHub</a></p>
