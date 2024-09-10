import { tv } from 'tailwind-variants';

export const tooltip = tv({
  slots: {
    base: 'tooltip absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50 pointer-events-none',
    arrowBase: 'absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit'
  },
  variants: {
    color: {
      default: { base: 'bg-gray-800' },
      primary: { base: 'bg-primary-600' },
      secondary: { base: 'bg-secondary-600' },
      gray: { base: 'bg-gray-600' },
      red: { base: 'bg-red-600' },
      orange: { base: 'bg-orange-600' },
      amber: { base: 'bg-amber-600' },
      yellow: { base: 'bg-yellow-400' },
      lime: { base: 'bg-lime-600' },
      green: { base: 'bg-green-600' },
      emerald: { base: 'bg-emerald-600' },
      teal: { base: 'bg-teal-600' },
      cyan: { base: 'bg-cyan-600' },
      sky: { base: 'bg-sky-600' },
      blue: { base: 'bg-blue-600' },
      indigo: { base: 'bg-indigo-600' },
      violet: { base: 'bg-violet-600' },
      purple: { base: 'bg-purple-600' },
      fuchsia: { base: 'bg-fuchsia-600' },
      pink: { base: 'bg-pink-600' },
      rose: { base: 'bg-rose-800' }
    },
    arrow: {
      true: '',
      false: ''
    },
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  }
  // compoundVariants: [
  //   {
  //     arrow: true,
  //     position: 'top',
  //     class: { arrowBase:'border-t border-s'}
  //   },
  //   {
  //     arrow: true,
  //     position: 'bottom',
  //     class: { arrowBase: 'border-b border-e' }
  //   },
  //   {
  //     arrow: true,
  //     position: 'left',
  //     class: { arrowBase: 'border-b border-s' }
  //   },
  //   {
  //     arrow: true,
  //     position: 'right',
  //     class: { arrowBase: 'border-t border-e' }
  //   }
  // ]
});
