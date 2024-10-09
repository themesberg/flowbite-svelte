import Fileupload from "./Fileupload.svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { InputProps } from "$lib";
import { fileupload } from "./theme";

interface FileuploadProps extends Omit<HTMLInputAttributes, "size"> {
  files?: FileList;
  size?: InputProps<never>["size"];
  color?: InputProps<never>["color"];
  clearable?: boolean;
}

export { Fileupload, fileupload, type FileuploadProps };
