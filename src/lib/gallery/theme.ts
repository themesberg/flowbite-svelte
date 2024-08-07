import {  tv } from 'tailwind-variants';
const gallery = tv({
  slots: {
    image: 'h-auto max-w-full rounded-lg',
    div: 'grid'
  }
});


export { gallery };
