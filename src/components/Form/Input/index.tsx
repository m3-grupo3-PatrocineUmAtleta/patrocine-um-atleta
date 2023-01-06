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
}

interface iInputTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  text: string;
  type: string;
  register: UseFormRegisterReturn;
  message?: string;
  valid?: boolean;
}

export const Input = ({
  id,
  text,
  type,
  register,
  message,
  valid,
  ...rest
}: iInputTextProps) => {
  return (
    <>
      <FieldsetInput
        borderColor={message ? "--color-negative" : "--color-secundary-50"}
        validColor={!message ? "--color-sucess" : "--color-negative"}
        type={type}
      >
        <input
          id={id}
          type={type}
          {...register}
          {...rest}
          className="headline"
          autoComplete="off"
        />

        <label htmlFor={id} className="caption">
          {text}
        </label>
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
  ...rest
}: iInputTextareaProps) => {
  return (
    <>
      <FieldsetInput
        borderColor={message ? "--color-negative" : "--color-secundary-50"}
        validColor={!message ? "--color-sucess" : "--color-negative"}
        type={type}
      >
        <textarea
          rows={5}
          cols={31}
          id="bio"
          {...register}
          {...rest}
          className="headline"
        />

        <label htmlFor="bio" className="caption">
          {text}
        </label>
      </FieldsetInput>
    </>
  );
};
