import { tv } from 'tailwind-variants';

const coloredShadowClasses = {
  blue: 'shadow-blue-500/50 dark:shadow-blue-800/80',
  green: 'shadow-green-500/50 dark:shadow-green-800/80',
  cyan: 'shadow-cyan-500/50 dark:shadow-cyan-800/80',
  teal: 'shadow-teal-500/50 dark:shadow-teal-800/80',
  lime: 'shadow-lime-500/50 dark:shadow-lime-800/80',
  red: 'shadow-red-500/50 dark:shadow-red-800/80',
  pink: 'shadow-pink-500/50 dark:shadow-pink-800/80',
  purple: 'shadow-purple-500/50 dark:shadow-purple-800/80',
  purpleToBlue: 'shadow-blue-500/50 dark:shadow-blue-800/80',
  cyanToBlue: 'shadow-cyan-500/50 dark:shadow-cyan-800/80',
  greenToBlue: 'shadow-green-500/50 dark:shadow-green-800/80',
  purpleToPink: 'shadow-purple-500/50 dark:shadow-purple-800/80',
  pinkToOrange: 'shadow-pink-500/50 dark:shadow-pink-800/80',
  tealToLime: 'shadow-lime-500/50 dark:shadow-teal-800/80',
  redToYellow: 'shadow-red-500/50 dark:shadow-red-800/80'
};

export const gradientButton = tv({
  slots: {
    base: 'inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-gradient-to-r ',
    outlineWrapper: 'inline-flex items-center justify-center w-full !border-0'
  },
  variants: {
    color: {
      blue: {
        base: 'from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800'
      },
      green: {
        base: 'from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800'
      },
      cyan: { base: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800' },
      teal: { base: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800' },
      lime: { base: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800' },
      red: { base: 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800' },
      pink: { base: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800' },
      purple: { base: 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800' },
      purpleToBlue: { base: 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800' },
      cyanToBlue: { base: 'text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800' },
      greenToBlue: { base: 'text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800' },
      purpleToPink: { base: 'text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800' },
      pinkToOrange: { base: 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800' },
      tealToLime: { base: 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700' },
      redToYellow: { base: 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400' }
    },
    outline: {
      true: {
        base: 'p-0.5',
        outlineWrapper: 'bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white hover:bg-transparent hover:!text-inherit group-hover:!bg-opacity-0 group-hover:!text-inherit'
      }
    },
    pill: {
      true: {
        base: 'rounded-full',
        outlineWrapper: 'rounded-full'
      },
      false: {
        base: 'rounded-lg',
        outlineWrapper: 'rounded-lg'
      }
    },
    shadow: {
      true: {
        base: 'shadow-lg'
      }
    },
    // group: {
    //   true: {},
    // },
    disabled: {
      true: { base: 'opacity-50 cursor-not-allowed' }
    }
  },
  compoundVariants: [
    // {
    //   group: true,
    //   pill: true,
    //   class: { base: 'first:rounded-s-full last:rounded-e-full' },
    // },
    // {
    //   group: true,
    //   pill: false,
    //   class: { base: 'first:rounded-s-lg last:rounded-e-lg' },
    // },
    {
      shadow: true,
      color: 'blue',
      class: { base: 'shadow-blue-500/50 dark:shadow-blue-800/80' }
    },
    {
      shadow: true,
      color: 'green',
      class: { base: 'shadow-green-500/50 dark:shadow-green-800/80' }
    },
    {
      shadow: true,
      color: 'cyan',
      class: { base: 'shadow-cyan-500/50 dark:shadow-cyan-800/80' }
    },
    {
      shadow: true,
      color: 'teal',
      class: { base: 'shadow-teal-500/50 dark:shadow-teal-800/80' }
    },
    {
      shadow: true,
      color: 'lime',
      class: { base: 'shadow-lime-500/50 dark:shadow-lime-800/80' }
    },
    {
      shadow: true,
      color: 'red',
      class: { base: 'shadow-red-500/50 dark:shadow-red-800/80' }
    },
    {
      shadow: true,
      color: 'pink',
      class: { base: 'shadow-pink-500/50 dark:shadow-pink-800/80' }
    },
    {
      shadow: true,
      color: 'purple',
      class: { base: 'shadow-purple-500/50 dark:shadow-purple-800/80' }
    },
    {
      shadow: true,
      color: 'purpleToBlue',
      class: { base: 'shadow-blue-500/50 dark:shadow-blue-800/80' }
    },
    {
      shadow: true,
      color: 'cyanToBlue',
      class: { base: 'shadow-cyan-500/50 dark:shadow-cyan-800/80' }
    },
    {
      shadow: true,
      color: 'greenToBlue',
      class: { base: 'shadow-green-500/50 dark:shadow-green-800/80' }
    },
    {
      shadow: true,
      color: 'purpleToPink',
      class: { base: 'shadow-purple-500/50 dark:shadow-purple-800/80' }
    },
    {
      shadow: true,
      color: 'pinkToOrange',
      class: { base: 'shadow-pink-500/50 dark:shadow-pink-800/80' }
    },
    {
      shadow: true,
      color: 'tealToLime',
      class: { base: 'shadow-lime-500/50 dark:shadow-teal-800/80' }
    },
    {
      shadow: true,
      color: 'redToYellow',
      class: { base: 'shadow-red-500/50 dark:shadow-red-800/80' }
    }
  ]
});
