<script lang="ts">
  import { ThemeProvider, Heading, P, Card } from "$lib";

  const theme1a = {
    card: {
      base: "bg-blue-50 border-blue-200 p-4"
    },
    heading: "text-3xl text-blue-500",
    p: "text-blue-500 text-lg"
  };

  const theme1b = {
    heading: "text-lg text-purple-600 font-bold"
  };

  const theme1c = {
    paragraph: "text-gray-600 italic text-md"
  };
</script>

<ThemeProvider theme={theme1a}>
  <Heading tag="h1">Blue Heading</Heading>
  <P>Card example</P>
  <Card href="/cards">
    <ThemeProvider theme={theme1b}>
      <Heading tag="h2">Purple Heading</Heading>
      <Heading tag="h3" class="text-green-400">Green heading</Heading>
    </ThemeProvider>
    <ThemeProvider theme={theme1c}>
      <P>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</P>
    </ThemeProvider>
  </Card>
</ThemeProvider>
