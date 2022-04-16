---
layout: docLayout
---

<h1 class="text-3xl w-full dark:text-white pt-16">Flowbite-Svelte-CLI (fsc)</h1>

<p>This a Shell script CLI that allows you to find compoent default props from your command line.</p>

<h2 class="text-2xl w-full mt-8 dark:text-white">Installation</h2>

<h3 class="text-xl w-full mt-8 dark:text-white">Homebrew</h3>

```sh
brew tap shinokada/fsc
brew install fsc
```

<h3 class="text-xl w-full mt-8 dark:text-white">Awesome Package Manager</h3>
<p><a href="https://github.com/shinokada/awesome" class="text-blue-600 hover:underline dark:text-blue-500">Awesome package manager</a> is a shell script package manager. Awesome installs a shell script package from a GitHub repo on your macOS/Linux.</p>

<p>Let's install the Awesome package manager:</p>

```sh
curl -s https://raw.githubusercontent.com/shinokada/awesome/main/install | bash -s install
```

<p>Add the following to your terminal config file, such as .zshrc or .bashrc.</p>

```sh
export PATH=$HOME/.local/share/bin:$PATH
```

<p>Then source the config file or open a new terminal tab.</p>

```sh
. ~/.zshrc
```

<p>Now you can install fsc.</p>

```sh
awesome install shinokada/fsc
```

<h2 class="text-2xl w-full dark:text-white py-8">How to use it</h2>

<h3>List components</h3>

```sh
fsc
```

<img src="/images/fsc.png" alt="fsc list" />

<h3>List component props</h3>

<p>For example, displaying navbar component props:

```sh
fsc navbar
```

<img src="/images/fsc-component.png" alt="fsc component" />

