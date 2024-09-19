<script lang="ts">
  import { List, Li, Heading } from '$lib';
  import { CheckCircleSolid, CloseCircleSolid, QuestionCircleSolid } from 'flowbite-svelte-icons';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  function convertStringToKebabCase(text: string) {
    return text.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
  }
  interface Component {
    checked: boolean;
    problems?: string;
    notes?: string;
  }

  interface ListType {
    [key: string]: Component;
  }
  // const toDos: ListType = {
  //   types: {
  //     checked: false,
  //     problems: 'TransitionParamTypes to FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams, DrawParams, CrossfadeParams'
  //   }
  //   // Button add checked variant for RadioButton
  // };

  const components: ListType = {
    accordion: {
      checked: true
      // notes: 'Variants'
      // problems: 'AlwaysOpen'
    },
    alert: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    avatar: {
      checked: true
      // problems: 'Avatar tooltip',
      // notes: 'Variants, reactive examples'
    },
    badge: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    banner: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    bottomNavigation: {
      checked: true,
      problems: '(Tooltip: current tooltip position does not work within relative div) Application bar example, Example with pagination, Button group bottom bar, Card with bottom bar',
      notes: 'Variants'
    },
    breadcrumb: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    buttonGroup: {
      checked: true
      // notes: 'Variants, reactive examples',
      // problems: 'More examples'
    },
    buttons: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    card: {
      checked: true
      // notes: 'Variants, reactive examples'
      // problems: 'Shadow,User profile card, Card with form inputs, E-commerce card, Card with list, Pricing card, Testimonial card.'
    },
    carousel: {
      checked: false
    },
    darkmode: {
      checked: true,
      problems: 'Switcher style'
    },
    deviceMockups: {
      checked: true
      // notes: 'Variants checked'
    },
    drawer: {
      checked: true
      // problems: 'Contact form, Form elements'
      // notes: 'Variants checked'
    },
    dropdown: {
      checked: true
      // problems:
      //   'Sizes, Placement, Double placement, Events'
      // notes: 'Variants checked'
    },
    footer: {
      checked: true
      // notes: 'Variants checked'
    },
    gallery: {
      checked: true
      // notes: 'Variants checked'
    },
    indicators: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    kbd: {
      checked: true
      // notes: 'Varants checked'
    },
    listGroup: {
      checked: true
      // problems: 'Advanced',
      // notes: 'Variants checked'
    },
    megaMenu: {
      checked: false
    },
    modal: {
      checked: false
    },
    navbar: {
      checked: true,
      problems: 'Navbar with search, Navbar with CTA button, User menu dropdown, Solid background'
    },
    pagination: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    popover: {
      checked: true
      // problems: 'Paragraph popover'
    },
    progress: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    rating: {
      checked: true
    },
    sidebar: {
      checked: true
      // problems: ''
    },
    skeleton: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    spinner: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    speedDial: {
      checked: false
    },
    table: {
      checked: true,
      problems: 'Sorting by column, Click and double-click on row'
    },
    tabs: {
      checked: true
      // problems: 'Full width tabs, Components in tab contents'
      // notes: 'Variants checked'
    },
    timeline: {
      checked: true
      // notes: 'Variants checked'
    },
    toast: {
      checked: true,
      problems: 'Icons, Autohide example'
      // notes: 'Variants, reactive examples'
    },
    tooltip: {
      checked: true,
      problems: 'apply floating-ui'
    },
    video: {
      checked: true
      // notes: 'Variants, reactive examples'
    }
  };

  const forms: ListType = {
    checkbox: {
      checked: true
      // problems: 'Group variable',
      // notes: 'Variants, reactive examples'
    },
    fileInput: {
      checked: true,
      problems: 'Dropzone'
      // notes: 'Variants, reactive examples'
    },
    floatingLabel: {
      checked: true
      // problems:
      //   'Disabled state - disabled outlined, Validation -  Outlined, Sized - outlined',
      // notes: 'Variants, reactive examples'
    },
    inputField: {
      checked: true
      // problems: 'Group examples add rounded radius'
      // notes: 'Variants, reactive examples'
    },
    label: {
      checked: true
    },
    radio: {
      checked: true
      // problems: 'Radio in dropdown',
      // notes: 'Variants, reactive examples'
    },
    range: {
      checked: true
      // problems: 'Sizes - blob sizes',
      // notes: 'Variants, reactive examples'
    },
    searchInput: {
      checked: true,
      problems: 'Location search, Voice search, Event example',
      notes: 'Variants checked'
    },
    select: {
      checked: true,
      problems: 'MultiSelect',
      notes: 'Variants, reactive examples'
    },
    textarea: {
      checked: true
      // notes: 'Variants checked'
    },
    toggle: {
      checked: true
      // notes: 'Variants, reactive examples'
    }
  };

  const typography: ListType = {
    blockquote: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    heading: {
      checked: true
      // notes: 'Variants, reactive examples'
      // problems: 'Highlighted heading, Heading underline, Breadcrumb context, Badge context, Secondary text, Sizes'
    },
    hr: {
      checked: true
      // notes: 'Variants, reactive examples'
      // problems: 'Icon HR - icon size,'
    },
    image: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    layout: {
      checked: true
    },
    link: {
      checked: true
      // notes: 'Variants, reactive examples'
      // problems: 'Button, CTA link, Card link, Image link '
    },
    list: {
      checked: true
      // notes: 'Variants, reactive examples'
    },
    paragraph: {
      checked: true
      // problems: 'Paragraph popover',
      // notes: 'Variants, reactive examples'
    },
    span: {
      checked: true
      // problems: 'Opacity',
      // notes: 'Variants, reactive examples'
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

  // console.log("Components:", componentsAnalysis);
  // console.log("Forms:", formsAnalysis);
  // console.log("Typography:", typographyAnalysis);
</script>

<H1>Component and example checks</H1>

<H2>Components</H2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {componentsAnalysis.total}</Li>
  <Li># of components/pages checked: {componentsAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {componentsAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {componentsAnalysis.pageWithoutProblems}</Li>
  {#if componentsAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {componentsAnalysis.exampleProblems}</Li>
  {/if}
</List>

<H2>Forms</H2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {formsAnalysis.total}</Li>
  <Li># of components/pages checked: {formsAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {formsAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {formsAnalysis.pageWithoutProblems}</Li>
  {#if formsAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {formsAnalysis.exampleProblems}</Li>
  {/if}
</List>

<H2>Typography</H2>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  <Li># of pages: {typographyAnalysis.total}</Li>
  <Li># of components/pages checked: {typographyAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {typographyAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"># of pages without problems: {typographyAnalysis.pageWithoutProblems}</Li>
  {#if typographyAnalysis.exampleProblems > 0}
    <Li class="text-red-500"># of examples to be completed: {typographyAnalysis.exampleProblems}</Li>
  {/if}
</List>

<Heading tag="h2" class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Components</Heading>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(components) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/components/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>

<Heading tag="h2" class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Forms</Heading>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(forms) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/forms/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>

<Heading tag="h2" class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white">Typography</Heading>
<List class="space-y-1 text-gray-500 dark:text-gray-400">
  {#each Object.entries(typography) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid class="me-2 h-8 w-8 text-green-500 dark:text-green-400" />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400" />
      {/if}
      <a href="/typography/{convertStringToKebabCase(key)}" class="text-blue-800 underline hover:text-blue-500 dark:text-blue-300 hover:dark:text-blue-200">{key}</a>
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span>{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span>
      {/if}
    </Li>
  {/each}
</List>
