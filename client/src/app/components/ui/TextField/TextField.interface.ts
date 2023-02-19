import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types";

export interface ITextFieldInterface
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: FieldError;
  assistive?: string;
  isPassword?: boolean;
}
