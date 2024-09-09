import { tv } from 'tailwind-variants';

export const tooltip = tv({
  slots: {
    base: 'tooltip absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50 pointer-events-none',
    arrowBase: 'absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit',
  }
  ,
  variants: {
    color: {
      primary: {base: 'bg-primary-700'},
      secondary: {base: 'bg-secondary-700'},
      gray: {base: 'bg-gray-700'},
      red: {base: 'bg-red-700'},
      orange: {base: 'bg-orange-700'},
      amber: {base: 'bg-amber-700'},
      yellow: {base: 'bg-yellow-400'},
      lime: {base: 'bg-lime-700'},
      green: {base: 'bg-green-700'},
      emerald: {base: 'bg-emerald-700'},
      teal: {base: 'bg-teal-700'},
      cyan: {base: 'bg-cyan-700'},
      sky: {base: 'bg-sky-700'},
      blue: {base: 'bg-blue-700'},
      indigo: {base: 'bg-indigo-700'},
      violet: {base: 'bg-violet-700'},
      purple: {base: 'bg-purple-700'},
      fuchsia: {base: 'bg-fuchsia-700'},
      pink: {base: 'bg-pink-700'},
      rose: {base: 'bg-rose-800'},
    },
    arrow: {
      true:'',
      false:''
    },
    position: {
      top: '',
      bottom: '',
      left: '',
      right:''
    }
  },
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
