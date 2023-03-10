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
