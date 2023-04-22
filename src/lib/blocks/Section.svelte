<script lang="ts">
  import classNames from 'classnames';
  export let sectionClass: string = 'bg-white dark:bg-gray-900';
  export let name:
    | 'blog'
    | 'cta'
    | 'ctawithimg'
    | 'contact'
    | 'content'
    | 'contentwithimg'
    | 'crudcreatedrawer'
    | 'crudcreateform'
    | 'crudreadsection'
    | 'default'
    | 'faq'
    | 'feature'
    | 'forgotpassword'
    | 'headingwithctabutton'
    | 'heroDefault'
    | 'heroVisual'
    | 'login'
    | 'logos'
    | 'maintenance'
    | 'newsletter'
    | 'none'
    | 'page500'
    | 'page404'
    | 'portfolio'
    | 'pricing'
    | 'register'
    | 'reset'
    | 'schedule'
    | 'social'
    | 'tableheader'
    | 'team'
    | 'testimonial' = 'default';
  const sectionClasses = {
    blog: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    crudcreateform: {
      div: 'py-8 px-4 mx-auto max-w-2xl lg:py-16'
    },
    crudcreatedrawer: {
      div: 'h-80'
    },
    crudreadsection: {
      div: 'py-8 px-4 mx-auto max-w-2xl lg:py-16'
    },
    cta: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
    },
    ctawithimg: {
      div: 'gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6'
    },
    contact: {
      div: 'py-8 lg:py-16 px-4 mx-auto max-w-screen-md'
    },
    content: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    contentwithimg: {
      div: 'gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'
    },
    default: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    faq: { div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6' },
    feature: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
    },
    forgotpassword: {
      div: 'flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0'
    },
    headingwithctabutton: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'
    },
    heroDefault: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12'
    },
    heroVisual: {
      div: 'grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'
    },
    login: {
      div: 'flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'
    },
    logos: {
      div: 'py-8 lg:py-16 mx-auto max-w-screen-xl px-4'
    },
    maintenance: {
      div: 'py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12'
    },
    newsletter: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    none: {
      div: ''
    },
    page500: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    page404: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    portfolio: {
      div: 'max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'
    },
    pricing: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    register: {
      div: 'flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'
    },
    reset: {
      div: 'flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0'
    },
    schedule: {
      div: 'max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24'
    },
    social: {
      div: 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'
    },
    tableheader: {
      div: 'max-w-screen-xl px-4 mx-auto lg:px-12 w-full'
    },
    team: {
      div: 'py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'
    },
    testimonial: {
      div: 'max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'
    }
  };
</script>

<section class={classNames(sectionClass, $$props.classSection)}>
  <div class={classNames(sectionClasses[name]['div'], $$props.classDiv)}>
    <slot />
  </div>
</section>
