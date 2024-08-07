import { tv } from 'tailwind-variants';

const footer = tv({
  base: 'bg-white dark:bg-gray-800',
  variants: {
    footerType: {
      default:
        'p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6',
      sitemap: 'bg-gray-800',
      socialmedia: 'p-4 sm:p-6',
      logo: 'p-4 rounded-lg shadow md:px-6 md:py-8',
      sticky:
        'fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'
    }
  }
});

const footerBrand = tv({
  slots: {
    base: 'flex items-center',
    span: 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
    img: 'me-3 h-8'
  }
});

const footerCopyright = tv({
  slots: {
    base: 'block text-sm text-gray-500 sm:text-center dark:text-gray-400',
    link: 'hover:underline',
    bySpan: 'ms-1'
  }
});

const footerIcon = tv({
  base: 'text-gray-500 hover:text-gray-900 dark:hover:text-white'
});

const footerUl = tv({
  base: 'text-gray-600 dark:text-gray-400'
});

const footerLi = tv({
  slots: {
    base: 'me-4 last:me-0 md:me-6',
    link: 'hover:underline'
  }
});

export { footer, footerBrand, footerCopyright, footerIcon, footerUl, footerLi };
