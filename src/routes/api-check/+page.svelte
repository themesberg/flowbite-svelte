<script lang="ts">
  import { List, Li } from "$lib";
  import { CheckCircleSolid, CloseCircleSolid, QuestionCircleSolid } from "flowbite-svelte-icons";
  let { data } = $props();
  function convertStringToKebabCase(text: string) {
    return text.replace(/[A-Z]/g, (match) => "-" + match.toLowerCase());
  }
  interface Component {
    checked: boolean;
    problems?: string;
    notes?: string;
  }

  interface ListType {
    [key: string]: Component;
  }

  const components: ListType = {
    accordion: {
      checked: true
    },
    alert: {
      checked: true
    },
    avatar: {
      checked: true
    },
    badge: {
      checked: true
    },
    banner: {
      checked: true
    },
    bottomNavigation: {
      checked: true
    },
    breadcrumb: {
      checked: true
    },
    buttonGroup: {
      checked: true
    },
    buttons: {
      checked: true
    },
    card: {
      checked: true
    },
    carousel: {
      checked: true
    },
    darkmode: {
      checked: true
    },
    datepicker: {
      checked: true,
      notes: "style update"
    },
    deviceMockups: {
      checked: true
    },
    drawer: {
      checked: true
    },
    dropdown: {
      checked: true
    },
    footer: {
      checked: true
    },
    forms: {
      checked: true
    },
    gallery: {
      checked: true
    },
    indicators: {
      checked: true
    },
    kbd: {
      checked: true
    },
    listGroup: {
      checked: true
    },
    megaMenu: {
      checked: true
    },
    modal: {
      checked: true
    },
    navbar: {
      checked: true
    },
    pagination: {
      checked: true
    },
    popover: {
      checked: true,
      notes: "Animation"
    },
    progress: {
      checked: true
    },
    rating: {
      checked: true
    },
    sidebar: {
      checked: true
    },
    skeleton: {
      checked: true
    },
    speedDial: {
      checked: true
    },
    spinner: {
      checked: true
    },
    table: {
      checked: true,
      notes: "Sorting by column"
    },
    tabs: {
      checked: true
    },
    timeline: {
      checked: true
    },
    toast: {
      checked: true
    },
    tooltip: {
      checked: true
    },
    video: {
      checked: true
    }
  };

  const forms: ListType = {
    checkbox: {
      checked: true
    },
    fileInput: {
      checked: true
    },
    floatingLabel: {
      checked: true
    },
    inputField: {
      checked: true
    },
    label: {
      checked: true
    },
    radio: {
      checked: true
    },
    range: {
      checked: true
    },
    searchInput: {
      checked: true
    },
    select: {
      checked: true
    },
    textarea: {
      checked: true
    },
    timepicker: {
      checked: true
    },
    toggle: {
      checked: true
    }
  };

  const typography: ListType = {
    blockquote: {
      checked: true
    },
    heading: {
      checked: true
    },
    hr: {
      checked: true
    },
    image: {
      checked: true
    },
    layout: {
      checked: true
    },
    link: {
      checked: true
    },
    list: {
      checked: true
    },
    paragraph: {
      checked: true
    },
    span: {
      checked: true
    },
    text: {
      checked: true
    }
  };

  function analyzeComponents(components: ListType) {
    let total = 0;
    let pageChecked = 0;
    let pageUnchecked = 0;
    let pageWithProblems = 0;
    let pageWithoutProblems = 0;
    let exampleProblems = 0;

    for (const component in components) {
      total++;
      pageChecked += components[component].checked ? 1 : 0;
      pageUnchecked += !components[component].checked ? 1 : 0;
      pageWithProblems += components[component].problems ? 1 : 0;
      // exampleProblems += components[component].problems ? 1 : 0;

      // count the number of example problems
      let numberOfProblemsForComponent = 0;
      if (components[component].problems) {
        // Split the problems string by commas (ignoring whitespaces)
        const problemsArray = components[component].problems.split(/\s*,\s*/);
        // Count the number of elements in the array (number of problems)
        numberOfProblemsForComponent = problemsArray.length;
      }
      // Add the number of problems for this component to the total count
      exampleProblems += numberOfProblemsForComponent;
    }
    pageWithoutProblems = pageChecked - pageWithProblems;

    return {
      total,
      pageChecked,
      pageUnchecked,
      pageWithProblems,
      pageWithoutProblems,
      exampleProblems
    };
  }

  const componentsAnalysis = analyzeComponents(components);
  const formsAnalysis = analyzeComponents(forms);
  const typographyAnalysis = analyzeComponents(typography);
</script>

<h1 class="my-4 text-3xl">API check</h1>

<h2 class="my-4 text-2xl">Components</h2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {componentsAnalysis.total}</Li>
  <Li># of components/pages checked: {componentsAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {componentsAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {componentsAnalysis.pageWithoutProblems}</Li>
  {#if componentsAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {componentsAnalysis.exampleProblems}</Li>
  {/if}
</List>

<List class="my-8 space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(components) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/api-check/components/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-yellow-500">(Todos: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>

<h2 class="my-4 text-2xl">Forms</h2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {formsAnalysis.total}</Li>
  <Li># of components/pages checked: {formsAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {formsAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {formsAnalysis.pageWithoutProblems}</Li>
  {#if formsAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {formsAnalysis.exampleProblems}</Li>
  {/if}
</List>

<List class="my-8 space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(forms) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/api-check/forms/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>

<h2 class="my-4 text-2xl">Typography</h2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {typographyAnalysis.total}</Li>
  <Li># of components/pages checked: {typographyAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {typographyAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {typographyAnalysis.pageWithoutProblems}</Li>
  {#if typographyAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {typographyAnalysis.exampleProblems}</Li>
  {/if}
</List>

<List class="my-8 space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(typography) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/api-check/typography/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>
