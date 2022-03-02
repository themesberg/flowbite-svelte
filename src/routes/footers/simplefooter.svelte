<script>
  import {
    SimpleFooter,
    LogoFooter,
    SocialMediaFooter,
    SitemapFooter,
  } from "$lib/index";
  let link = undefined;
  let siteName = "Flowbite Svelte";
  let links = [
    { name: "About", link: "/about", rel: undefined },
    { name: "Privacy Policy", link: "/", rel: undefined },
    { name: "Licensing", link: "/", rel: undefined },
    { name: "Contact", link: "/", rel: undefined },
  ];
  let footerClass =
    "p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800";
  let siteNameClass = "text-sm text-gray-500 sm:text-center dark:text-gray-400";
  let ulClass = "flex flex-wrap items-center mt-3 sm:mt-0";
  let aClass =
    "mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400";
  let siteNameLinkClass = "hover:underline";
  import {
    FacebookIcon,
    GithubIcon,
    TwitterIcon,
    InstagramIcon,
  } from "@codewithshin/svelte-simpleicons";
  let socialMedia = [
    {
      link: "/",
      icon: FacebookIcon,
    },
    {
      link: "/",
      icon: GithubIcon,
    },
    {
      link: "/",
      icon: TwitterIcon,
    },
    {
      link: "/",
      icon: InstagramIcon,
    },
  ];
</script>

<SimpleFooter />

<LogoFooter />

<SocialMediaFooter {socialMedia} />

<SitemapFooter {socialMedia} />
