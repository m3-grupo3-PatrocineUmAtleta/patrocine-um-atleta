import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldsetInput } from "../Input/styles";

interface iInputTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string;
  type: string;
  register: UseFormRegisterReturn;
  message?: string;
  valid?: boolean;
  placeholder?: string;
  height?: string;
}

export const TextArea = ({
  text,
  type,
  register,
  message,
  valid,
  placeholder,
  rows,
  height,
  ...rest
}: iInputTextareaProps) => {
  return (
    <>
      <FieldsetInput
        borderColor={message ? "--color-negative" : "--color-secundary-50"}
        validColor={!message ? "--color-sucess" : "--color-negative"}
        type={type}
      >
        <label htmlFor="bio" className="caption">
          {text}
        </label>
        <textarea
          rows={rows}
          cols={31}
          id="bio"
          {...register}
          {...rest}
          className="headline"
          placeholder={placeholder}
        />
      </FieldsetInput>
    </>
  );
};
