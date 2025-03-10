import type { ButtonProps } from "$lib/buttons";
import type { HTMLAttributes } from "svelte/elements";

type DateOrRange = Date | { from?: Date, to?: Date };

interface DatepickerProps extends Omit<HTMLAttributes<HTMLDivElement>, "onselect"> {
  value?: Date;
  defaultDate?: Date | null;
  range: boolean;
  rangeFrom?: Date;
  rangeTo?: Date;
  locale: string;
  firstDayOfWeek: number;
  dateFormat: Intl.DateTimeFormatOptions;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  inputClass: string;
  color: ButtonProps['color'];
  inline: boolean;
  autohide: boolean;
  showActionButtons: boolean;
  title: string;
  onselect?: (x: DateOrRange) => void,
  onclear?: () => void,
  onapply?: (x: DateOrRange) => void
}

export { type DatepickerProps };
