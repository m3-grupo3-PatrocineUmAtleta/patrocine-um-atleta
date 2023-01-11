import { TextareaHTMLAttributes } from "react";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldsetInput } from "./styles";

interface iInputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  text: string;
  type: string;
  register: UseFormRegisterReturn;
  message?: string;
  valid?: boolean;
  placeholder?: string;
}

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

export const Input = ({
  id,
  text,
  type,
  register,
  message,
  valid,
  placeholder,
  ...rest
}: iInputTextProps) => {
  return (
    <>
      <FieldsetInput
        borderColor={message ? "--color-negative" : "--color-secundary-50"}
        validColor={!message ? "--color-sucess" : "--color-negative"}
        type={type}
      >
        <label htmlFor={id} className="caption">
          {text}
        </label>
        <input
          id={id}
          type={type}
          {...register}
          {...rest}
          className="headline"
          autoComplete="off"
          placeholder={placeholder}
        />

        {message ? <p className="body-600">{message}</p> : null}
      </FieldsetInput>
    </>
  );
};

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
