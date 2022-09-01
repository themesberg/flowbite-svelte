<script>
  import {
    Htwo,
    ExampleDiv,
    GitHubSource,
    CompoDescription,
    TableProp,
    TableDefaultRow
  } from '../../../utils';
  import { Ul, Li, Ol, Span, A, P, Button, Card, Heading, Breadcrumb, BreadcrumbItem } from '$lib';
</script>

<ExampleDiv>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >Password requirements</Heading>
  <Ul class="space-y-1">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </Ul>
</ExampleDiv>

<ExampleDiv>
  <Heading tag="h2" class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
    >Password requirements</Heading>
  <Ul class="space-y-1" list="none">
    <Li class="flex items-center">
      <svg
        class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd" /></svg>
      At least 10 characters (and up to 100 characters)
    </Li>
    <Li class="flex items-center">
      <svg
        class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clip-rule="evenodd" /></svg>
      At least one lowercase character
    </Li>
    <Li class="flex items-center">
      <svg
        class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        ><path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clip-rule="evenodd" /></svg>
      Inclusion of at least one special character, e.g., ! @ # ?
    </Li>
  </Ul>
</ExampleDiv>

<ExampleDiv>
  <Ul class="space-y-4">
    <Li
      >List item one
      <Ol class="pl-5 mt-2 space-y-1">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </Ol>
    </Li>
    <Li
      >List item two
      <Ol class="pl-5 mt-2 space-y-1">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </Ol>
    </Li>
    <Li
      >List item three
      <Ol class="pl-5 mt-2 space-y-1">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </Ol>
    </Li>
  </Ul>
</ExampleDiv>

<Htwo label="Unstyled" />

<ExampleDiv>
  <Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white"
    >Password requirements</Heading>
  <Ul class="space-y-1" list="none">
    <Li>At least 10 characters (and up to 100 characters)</Li>
    <Li>At least one lowercase character</Li>
    <Li>Inclusion of at least one special character, e.g., ! @ # ?</Li>
  </Ul>
</ExampleDiv>

<ExampleDiv>
  <Heading tag="h2" class="mb-2 text-lg font-semibold  text-gray-900 dark:text-white"
    >Top students:</Heading>
  <Ul class="space-y-1">
    <Li><Span>Bonnie Green</Span> with <Span>70</Span> points</Li>
    <Li><Span>Jese Leos</Span> with <Span>63</Span> points</Li>
    <Li><Span>Leslie Livingston</Span> with <Span>57</Span> points</Li>
  </Ul>
</ExampleDiv>

Nested

<ExampleDiv>
  <Ol>
    <Li
      >List item one
      <Ul class="pl-5 mt-2 space-y-1">
        <Li>You might feel like you are being really "organized" o</Li>
        <Li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</Li>
        <Li>Nesting tons of folders in your source code is also not helpful.</Li>
      </Ul>
    </Li>
    <Li
      >List item two
      <Ul class="pl-5 mt-2 space-y-1">
        <Li>I'm not sure if we'll bother styling more than two levels deep.</Li>
        <Li>Two is already too much, three is guaranteed to be a bad idea.</Li>
        <Li>If you nest four levels deep you belong in prison.</Li>
      </Ul>
    </Li>
    <Li
      >List item three
      <Ul class="pl-5 mt-2 space-y-1">
        <Li>Again please don't nest lists if you want</Li>
        <Li>Nobody wants to look at this.</Li>
        <Li>I'm upset that we even have to bother styling this.</Li>
      </Ul>
    </Li>
  </Ol>
</ExampleDiv>
