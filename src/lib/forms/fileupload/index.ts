import Fileupload from "./Fileupload.svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { InputProps } from '$lib'
import { fileupload } from './theme';

interface FileuploadProps extends Omit<HTMLInputAttributes, 'size'> {
  files?: FileList;
  value?: any;
  size?: InputProps['size'];
  color?: InputProps['color'];
}

export { Fileupload, fileupload, type FileuploadProps }