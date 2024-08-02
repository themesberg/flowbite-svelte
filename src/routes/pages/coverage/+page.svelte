<script lang="ts">
  import { List, Li, Heading } from '$lib';
  import {
    CheckCircleSolid,
    CloseCircleSolid,
    QuestionCircleSolid
  } from 'flowbite-svelte-icons';
  import H1 from '../../utils/H1.svelte';
  import H2 from '../../utils/H2.svelte';
  function convertStringToKebabCase(text: string) {
    return text.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
  }
  interface Component {
    checked: boolean;
    problems?: string | undefined | null;
    notes?: string | undefined | null;
  }

  interface ListType {
    [key: string]: Component;
  }
  const components: ListType = {
    accordion: {
      checked: true,
      notes: 'Variants'
    },
    alert: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    avatar: {
      checked: true,
      problems: 'Avatar tooltip',
      notes: 'Variants, reactive examples'
    },
    badge: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    banner: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    bottomNavigation: {
      checked: true,
      problems:
        '(Tooltip) Application bar example, Example with pagination, Button group bottom bar, Card with bottom bar',
      notes: 'Variants'
    },
    breadcrumb: {
      checked: true,
      notes: 'Variants'
    },
    buttonGroup: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    buttons: {
      checked: true,
      notes: 'Updated: class names'
    },
    card: {
      checked: true
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
      checked: true,
      notes: 'Variants'
    },
    drawer: {
      checked: true,
      problems: 'Contact form, Form elements'
    },
    dropdown: {
      checked: true,
      problems:
        'Multi-level dropdown, Programatic open/close, Dropdown with checkbox, Background hover, Helper text, Dropdown with radio, Dropdown with toggle switch, Dropdown navbar, Dropdown with scrolling, Dropdown with search, Menu icon, Notification bell, User avatar, Avatar with name, Sizes, Placement, Double placement, Events, Adding links and active class'
    },
    footer: {
      checked: true,
      notes: 'Updated: class names'
    },
    forms: {
      checked: false
    },
    gallery: {
      checked: true,
      notes: 'Variants'
    },
    indicators: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    kbd: {
      checked: true,
      notes: 'Varants checked'
    },
    listGroup: {
      checked: true,
      problems: 'Advanced'
    },
    megaMenu: {
      checked: false
    },
    modal: {
      checked: false
    },
    navbar: {
      checked: true,
      problems:
        'Navbar container, Active class, Navbar with dropdown, Navbar with search, Navbar with CTA button, User menu dropdown, Solid background'
    },
    pagination: {
      checked: false
    },
    popover: {
      checked: false
    },
    progress: {
      checked: true
    },
    rating: {
      checked: true
    },
    sidebar: {
      checked: true,
      problems: 'CTA button, Logo branding, Transition'
    },
    skeleton: {
      checked: true,
      notes: 'Variants, reactive examples'
    },
    spinner: {
      checked: true,
      notes: 'Variants'
    },
    speedDial: {
      checked: false
    },
    table: {
      checked: true,
      problems: 'Sorting by column'
    },
    tabs: {
      checked: true,
      problems: 'Full width tabs, Components in tab contents'
    },
    timeline: {
      checked: false
    },
    toast: {
      checked: true,
      problems: 'Icons, Autohide example'
    },
    tooltip: {
      checked: false
    },
    typography: {
      checked: false
    },
    video: {
      checked: true,
      notes: 'Variants'
    }
  };

  const forms: ListType = {
    checkbox: {
      checked: true,
      problems:
        'Checkbox dropdown, Colors, CheckboxButton, Advanced layout, Group variable',
      notes: 'Updated: class names'
    },
    fileInput: {
      checked: false
    },
    floatingLabel: {
      checked: true,
      problems:
        'Disabled state - disabled outlined, Validation -  Outlined, Sized - outlined',
      notes: 'Updated: class names'
    },
    inputField: {
      checked: true,
      problems: 'Group examples add rounded radius'
    },
    radio: {
      checked: true,
      problems: 'Alternative syntax, Radio in dropdown, Colors, RadioButton'
    },
    range: {
      checked: true,
      problems: 'Sizes - blob sizes'
    },
    searchInput: {
      checked: false
    },
    select: {
      checked: true,
      problems: 'Select with dropdown, Sizes, Custom options, MultiSelect'
    },
    textarea: {
      checked: false
    },
    toggle: {
      checked: true,
      notes: 'Variants'
    }
  };

  const typography: ListType = {
    blockquote: {
      checked: true,
      notes: 'Variants'
    },
    heading: {
      checked: true,
      notes: 'Variants'
      // problems: 'Highlighted heading, Heading underline, Breadcrumb context, Badge context, Secondary text, Sizes'
    },
    hr: {
      checked: true,
      notes: 'Variants'
      // problems: 'Icon HR - icon size,'
    },
    image: {
      checked: true,
      notes: 'Variants'
    },
    link: {
      checked: true,
      notes: 'Variants'
      // problems: 'Button, CTA link, Card link, Image link '
    },
    list: {
      checked: true,
      notes: 'Variants'
    },
    paragraph: {
      checked: true,
      problems: 'Paragraph popover',
      notes: 'Variants'
    },
    text: {
      checked: true,
      problems: 'Opacity',
      notes: 'Variants'
    }
  };

  const othercomponents: ListType = {
    helper: {
      checked: true,
      notes: 'Updated: class names'
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
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  <Li># of pages: {componentsAnalysis.total}</Li>
  <Li># of components/pages checked: {componentsAnalysis.pageChecked}</Li>
  <Li
    ># of components/pages to be completed: {componentsAnalysis.pageUnchecked}</Li
  >
  <Li class="text-green-500"
    ># of pages without problems: {componentsAnalysis.pageWithoutProblems}</Li
  >
  <Li class="text-red-500"
    ># of examples to be completed: {componentsAnalysis.exampleProblems}</Li
  >
</List>

<H2>Forms</H2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  <Li># of pages: {formsAnalysis.total}</Li>
  <Li># of components/pages checked: {formsAnalysis.pageChecked}</Li>
  <Li># of components/pages to be completed: {formsAnalysis.pageUnchecked}</Li>
  <Li class="text-green-500"
    ># of pages without problems: {formsAnalysis.pageWithoutProblems}</Li
  >
  <Li class="text-red-500"
    ># of examples to be completed: {formsAnalysis.exampleProblems}</Li
  >
</List>

<H2>Typography</H2>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  <Li># of pages: {typographyAnalysis.total}</Li>
  <Li># of components/pages checked: {typographyAnalysis.pageChecked}</Li>
  <Li
    ># of components/pages to be completed: {typographyAnalysis.pageUnchecked}</Li
  >
  <Li class="text-green-500"
    ># of pages without problems: {typographyAnalysis.pageWithoutProblems}</Li
  >
  <Li class="text-red-500"
    ># of examples to be completed: {typographyAnalysis.exampleProblems}</Li
  >
</List>

<Heading
  tag="h2"
  class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white"
  >Components</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  {#each Object.entries(components) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid
          class="me-2 h-8 w-8 text-green-500 dark:text-green-400"
        />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid
          class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
        />
      {/if}
      <a
        href="/components/{convertStringToKebabCase(key)}"
        class="text-blue-800 underline hover:text-blue-500">{key}</a
      >
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span
        >{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span
        >
      {/if}
    </Li>
  {/each}
</List>

<Heading
  tag="h2"
  class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white"
  >Forms</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  {#each Object.entries(forms) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid
          class="me-2 h-8 w-8 text-green-500 dark:text-green-400"
        />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid
          class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
        />
      {/if}
      <a href="/forms/{convertStringToKebabCase(key)}" class="hover:underline"
        >{key}</a
      >
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span
        >{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span
        >
      {/if}
    </Li>
  {/each}
</List>

<Heading
  tag="h2"
  class="mb-2 py-4 text-2xl font-semibold text-gray-900 dark:text-white"
  >Typography</Heading
>
<List tag="ul" class="space-y-1 text-gray-500 dark:text-gray-400" list="none">
  {#each Object.entries(typography) as [key, { checked, problems, notes }]}
    <Li icon>
      {#if checked && !problems}
        <CheckCircleSolid
          class="me-2 h-8 w-8 text-green-500 dark:text-green-400"
        />
      {:else if problems}
        <CloseCircleSolid class="me-2 h-8 w-8 text-red-500 dark:text-red-400" />
      {:else}
        <QuestionCircleSolid
          class="me-2 h-8 w-8 text-gray-500 dark:text-gray-400"
        />
      {/if}
      <a
        href="/typography/{convertStringToKebabCase(key)}"
        class="hover:underline">{key}</a
      >
      {#if problems}
        <span class="ml-4 text-red-500">( {problems})</span
        >{/if}{#if notes}<span class="ml-4 text-green-500">(DONE: {notes})</span
        >
      {/if}
    </Li>
  {/each}
</List>
