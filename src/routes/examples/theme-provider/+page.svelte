<script lang="ts">
  import { ThemeProvider, Accordion, AccordionItem, Alert, Avatar, Badge, Heading, Banner, P, BottomNav, BottomNavItem, Breadcrumb, BreadcrumbItem, ButtonGroup, Button, GradientButton, Card } from "$lib";
  // theme types
  import type { ThemeConfig, AccordionTheme, AccordionItemTheme, AlertTheme, AvatarTheme, BadgeTheme, BannerTheme, BottomNavTheme, BottomNavItemTheme, BreadcrumbTheme, BreadcrumbItemTheme, ButtonGroupTheme, ButtonTheme, GradientButtonTheme, CardTheme, ParagraphTheme, HeadingTheme } from "$lib";

  import { HomeSolid, WalletSolid, AdjustmentsVerticalOutline, UserCircleSolid } from "flowbite-svelte-icons";

  const theme: ThemeConfig = {
    accordion: "w-96 text-green-500" as AccordionTheme,
    accordionitem: {
      button: "text-purple-500"
    } as AccordionItemTheme,
    alert: "bg-green-500 text-white w-48" as AlertTheme,
    avatar: "bg-blue-50 text-green-700 ring-red-400 dark:ring-red-300" as AvatarTheme,
    badge: {
      base: "bg-purple-400 text-white"
    } as BadgeTheme,
    banner: {
      base: "mx-auto bg-yellow-400 border-blue-600"
    } as BannerTheme,
    bottomNav: {
      outer: "border-red-500"
    } as BottomNavTheme,
    bottomNavItem: {
      base: "bg-blue-200",
      span: "bg-green-400"
    } as BottomNavItemTheme,
    breadcrumb: {
      list: "bg-blue-100"
    } as BreadcrumbTheme,
    breadcrumbItem: {
      separator: "text-green-500"
    } as BreadcrumbItemTheme,
    buttonGroup: "shadow-lg *:ring-primary-700!" as ButtonGroupTheme,
    button: {
      base: "w-48",
      outline: "",
      shadow: ""
    } as ButtonTheme,
    gradientButton: {
      base: "",
      outlineWrapper: ""
    } as GradientButtonTheme,
    card: {
      base: "bg-red-50 w-72 p-4 sm:p-6 md:p-8",
      image: ""
    } as CardTheme,
    heading: 'my-8' as HeadingTheme
  };
  const theme2 = {
    p: 'me-8 flex items-center text-lg font-normal text-blue-500 md:me-0 dark:text-blue-400' as ParagraphTheme
  }
  const theme3 = {
    heading: 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'
  }
</script>

<Heading tag="h1">ThemeProvider</Heading>
<ThemeProvider {theme}>
  <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur doloremque, est corrupti animi beatae sunt quos esse corporis voluptatum modi architecto nam nihil odit? Consectetur numquam ab nisi ex autem!</P>
  <Heading tag="h2">Accordion</Heading>
  <Accordion flush>
    <AccordionItem>
      {#snippet header()}
        <span>Section 1</span>
      {/snippet}
      <p>Content for section 1</p>
    </AccordionItem>
    <AccordionItem>
      {#snippet header()}
        <span>Section 2</span>
      {/snippet}
      <p>Content for section 2</p>
    </AccordionItem>
  </Accordion>
  <Heading tag="h2">Alert</Heading>
  <Alert dismissable>Danger!</Alert>
  <Heading tag="h2">Avatar</Heading>
  <Avatar dot={{ color: "red" }} border />
  <Heading tag="h2">Badge</Heading>
  <Badge dismissable rounded>Default</Badge>
  <Heading tag="h2">Banner</Heading>
  <div class="relative h-96 w-96 border p-4">
    <Banner class="absolute">
      <ThemeProvider theme={theme2}>
      <P>Content</P>
      </ThemeProvider>
    </Banner>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde ratione voluptatibus ex nobis nostrum eum aliquid sit vitae odio tempora a impedit ducimus omnis, itaque illo? Illo, voluptas natus!</P>
  </div>
  <Heading tag="h2">Bottom Navigation</Heading>
  <div class="relative h-96 w-96 border p-4">
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus unde ratione voluptatibus ex nobis nostrum eum aliquid sit vitae odio tempora a impedit ducimus omnis, itaque illo? Illo, voluptas natus!</P>
    <BottomNav position="absolute" innerClass="grid-cols-4">
      <BottomNavItem btnName="Home">
        <HomeSolid/>
      </BottomNavItem>
      <BottomNavItem btnName="Wallet">
        <WalletSolid />
      </BottomNavItem>
      <BottomNavItem btnName="Settings">
        <AdjustmentsVerticalOutline />
      </BottomNavItem>
      <BottomNavItem btnName="Profile">
        <UserCircleSolid />
      </BottomNavItem>
    </BottomNav>
  </div>
  <Heading tag="h2">Breadcrumb</Heading>
  <Breadcrumb aria-label="Solid background breadcrumb example" solid>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/">Projects</BreadcrumbItem>
    <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
  </Breadcrumb>
  <Heading tag="h2">Button Group</Heading>
  <ButtonGroup>
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  </ButtonGroup>
  <Heading tag="h2">Buttons</Heading>
  <Button pill>Default</Button>
  <GradientButton shadow color="blue">Blue</GradientButton>
  <Heading tag="h2">Card</Heading>
  <Card href="/cards">
    <ThemeProvider theme={theme3}>
    <Heading tag="h5">Noteworthy technology</Heading>
    </ThemeProvider>
    <P>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</P>
  </Card>
</ThemeProvider>
