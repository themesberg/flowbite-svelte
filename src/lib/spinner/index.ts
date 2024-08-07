import { type VariantProps, tv } from 'tailwind-variants';
import Spinner from './Spinner.svelte';
import type { SVGAttributes } from 'svelte/elements';
import { spinner } from './theme';

type ColorType = VariantProps<typeof spinner>['color'];
type SizeType = VariantProps<typeof spinner>['size'];

interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: ColorType;
  bg?: string | undefined | null;
  size?: SizeType;
  currentFill?: string | undefined | null;
  currentColor?: string | undefined | null;
}

export { Spinner, spinner, type SpinnerProps };
