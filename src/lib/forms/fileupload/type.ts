import type { HTMLInputAttributes } from "svelte/elements";
import type { InputProps } from "$lib";
import type { FileuploadViariants } from "./theme";

interface FileuploadProps extends Omit<HTMLInputAttributes, "size"> {
  files?: FileList;
  size?: FileuploadViariants["size"];
  color?: InputProps<never>["color"];
  clearable?: boolean;
}

export { type FileuploadProps };
