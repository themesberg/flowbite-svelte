---
layout: componentLayout
title: Svelte Cards - Flowbite
breadcrumb_title: Svelte Card
component_title: Cards
dir: Components
description: Get started with a large variety of Tailwind CSS card examples for your web project
thumnailSize: w-36
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = 'card'
  const relatedLinks = [
    '/docs/components/badge',
    '/docs/components/buttons',
    '/docs/components/avatar',
    '/docs/components/list-group',
    '/docs/components/modal'
  ];
</script>

Use these responsive card components to show data entries and information to your users in multiple forms and contexts such as for your blog, application, user profiles, and more.

Cards are one of the most versatile UI components, perfect for:
- **Blog posts** - article previews with images and excerpts
- **Product listings** - e-commerce product displays
- **User profiles** - team members, social profiles, contact cards
- **Dashboards** - metrics, statistics, and data widgets
- **Portfolios** - project showcases and case studies
- **Pricing tables** - service plans and subscription tiers
- **Testimonials** - customer reviews and feedback
- **Feature highlights** - product features and benefits
- **Media galleries** - image and video collections
- **Notifications** - alerts, updates, and messages

Cards provide a contained, organized way to present related information and actions, making them essential for modern web interfaces.

## Set up

Import Card in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Card } from "flowbite-svelte";
</script>
```

## Default card

Use the following simple card component with a title and description. Notice the `href` prop set, as that card is one big `<a/>` element.

This pattern is ideal for:
- **Clickable content cards** - entire card acts as navigation
- **Article previews** - linking to full articles
- **Product cards** - navigating to product details
- **Category tiles** - browsing different sections

When the entire card is clickable, it provides a larger, more accessible target area and clearer user intent.

```svelte example class="flex justify-center flex-wrap gap-2" hideScript
{#include Default.svelte}
```

## Card with action button

Use the following example of a card element if you also want to have an action button. This pattern separates:
- **Information display** - card content remains non-interactive
- **Specific actions** - clear, focused call-to-action button

This is better than full-card links when:
- Multiple actions are possible per card
- You want to emphasize a specific action
- The card contains selectable text or other interactive elements
- Users need to preview content without navigating away

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Action.svelte}
```

## Card with link

This example can be used to show a CTA as a link instead of a button inside the card. Link-style CTAs are appropriate when:
- **Secondary actions** - less emphasis than button CTAs
- **Inline navigation** - naturally flowing with text content
- **Multiple navigation options** - several links within one card
- **Subtle calls-to-action** - when a button feels too heavy

Links provide a lighter visual weight while still offering clear navigation.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Link.svelte}
```

## Card with image

Use <code>reverse={true}</code> to reverse the position of an image.

You can use the following example of a card element with an image for blog posts, user cards, and many more. Images in cards:
- **Provide visual context** - quickly communicate topic or subject
- **Increase engagement** - visual content attracts attention
- **Improve scannability** - help users identify content faster
- **Create visual hierarchy** - break up text-heavy interfaces
- **Support branding** - reinforce visual identity

Best practices:
- Use consistent aspect ratios across cards
- Optimize images for web performance
- Provide meaningful alt text for accessibility
- Consider lazy loading for better performance

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Image.svelte}
```

## Horizontal card

If you want to spice up your cards you can use the following card which has its child elements aligned horizontally.

Horizontal cards work particularly well for:
- **Featured content** - spotlight important items
- **List views** - compact display of multiple items
- **Media objects** - combining images with substantial text
- **Mobile layouts** - better use of horizontal space
- **Author bylines** - profile info with content

The horizontal layout provides visual variety and can make better use of wide viewports.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Horizontal.svelte}
```

## User profile card

Use this user profile card example if you want to show a dropdown menu and buttons to enable multiple actions from your user.

Profile cards are essential for:
- **Team pages** - displaying staff members
- **User directories** - browsing community members
- **Social platforms** - user profiles and connections
- **Contact management** - organizing people and relationships
- **Admin panels** - user management interfaces

This pattern combines information display with action controls in a cohesive package.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Profile.svelte}
```

## Card with form inputs

Use this card example where you can add form input elements that can be used for authentication actions or any other context where you need to receive information from your users.

Form cards are perfect for:
- **Login/signup** - authentication flows
- **Settings panels** - configuration options
- **Quick actions** - inline editing or updates
- **Search filters** - refined data queries
- **Comment forms** - user-generated content
- **Contact forms** - inquiry submissions

Cards provide visual containment that makes forms feel less intimidating and more approachable.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Form.svelte}
```

## E-commerce card

Use this card for your e-commerce websites and show information about the products and enable actions such as adding a review and adding the product to the cart.

E-commerce cards should include:
- **Product images** - high-quality visuals
- **Pricing information** - clear, prominent prices
- **Key details** - specifications, ratings, availability
- **Action buttons** - add to cart, wishlist, compare
- **Status indicators** - sale, new, out of stock

This comprehensive pattern balances information display with purchase actions.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Ecommerce.svelte}
```

## Call to action card

Use this CTA card example to encourage your users to visit a certain page such as downloading the iOS or Android application for your project.

CTA cards are effective for:
- **App downloads** - mobile app promotion
- **Newsletter signups** - email list growth
- **Free trials** - service conversions
- **Account upgrades** - premium features
- **Content downloads** - ebooks, whitepapers, resources
- **Event registration** - webinars, conferences

CTA cards should be visually distinct and clearly communicate value proposition.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Action.svelte}
```

## Card with list

Use this card example if you want to show a list of data. Lists within cards work well for:
- **Feature comparisons** - product capabilities
- **Step-by-step guides** - instructions or processes
- **Menu items** - navigation or options
- **Specifications** - technical details
- **Todo lists** - tasks and checkboxes
- **Recent activity** - feeds and timelines

The card boundary creates clear grouping for related list items.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include List.svelte}
```

## Pricing card

Show detailed information to potential customers about your product's pricing plan, list of features, and a purchase button.

Effective pricing cards include:
- **Clear pricing** - prominent price display
- **Feature lists** - what's included
- **Emphasis** - highlighting recommended plans
- **CTA buttons** - clear purchase/signup actions
- **Billing terms** - monthly, annual options
- **Trial information** - free trial details if applicable

Design pricing cards to facilitate easy comparison between tiers.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Pricing.svelte}
```

## Testimonial card

Use this example to split cards into multiple sections such as for testimonials or reviews.

Testimonial cards build trust by showcasing:
- **Customer quotes** - authentic feedback
- **Author information** - name, photo, title, company
- **Ratings** - star ratings or scores
- **Context** - use case or industry
- **Results** - specific outcomes or metrics

Social proof is powerful; testimonial cards make it scannable and credible.

```svelte example class="flex justify-center flex-wrap gap-2"
{#include Testimonial.svelte}
```

## Custom size

Use `class="max-w-[250px]` to create a custom-sized card. Custom sizing allows:
- **Flexible layouts** - adapting to different contexts
- **Grid systems** - consistent column-based layouts
- **Responsive design** - different sizes at different breakpoints
- **Specialized displays** - sidebar widgets, compact lists
- **Visual hierarchy** - varying card sizes for emphasis

Always consider content requirements when constraining card dimensions.

```svelte example
{#include Size.svelte}
```

## Accessibility

The Card component follows accessibility best practices:

- **Semantic HTML**: Uses appropriate elements (article, section, div)
- **Keyboard Navigation**: Interactive cards are keyboard accessible
- **Focus Indicators**: Clear focus states for clickable cards
- **Alt Text**: Images should have descriptive alt attributes
- **Heading Hierarchy**: Use proper heading levels within cards
- **Color Contrast**: Text meets WCAG contrast requirements
- **Link Purpose**: Clear indication when entire card is clickable
- **Touch Targets**: Adequate size for mobile interaction (44x44px minimum)

## Best Practices

When implementing cards, consider these guidelines:

- **Consistent Sizing**: Use uniform card heights within groups (or justify content strategy)
- **Clear Hierarchy**: Title, description, action in logical order
- **Whitespace**: Adequate padding and spacing for readability
- **Loading States**: Show skeletons or placeholders while loading
- **Error States**: Handle missing images or data gracefully
- **Responsive Layout**: Stack on mobile, grid on desktop
- **Image Aspect Ratios**: Maintain consistency across similar cards
- **Action Clarity**: Make it obvious what happens when clicking
- **Information Density**: Don't overcrowd; prioritize key information
- **Visual Balance**: Distribute content weight evenly

## Design Considerations

- **Elevation**: Use shadows to create depth and hierarchy
- **Borders**: Subtle borders or shadows for definition
- **Hover States**: Provide feedback on interactive cards
- **Card Spacing**: Consistent gaps between cards in grids
- **Mobile Adaptation**: Single column on small screens
- **Content Overflow**: Handle long titles and descriptions gracefully
- **Empty States**: Design for when cards have minimal content
- **Skeleton Screens**: Show loading structure before content arrives

## Common Card Layouts

**Grid Layout**: Equal-height cards in responsive grid
**Masonry Layout**: Variable-height cards in Pinterest-style layout
**List Layout**: Full-width cards stacked vertically
**Carousel**: Horizontally scrolling cards
**Featured + Grid**: Large featured card with smaller cards
**Sidebar**: Narrow cards in sidebar context

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Card](https://flowbite.com/docs/components/card/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
