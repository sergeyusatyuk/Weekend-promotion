import React, { useRef } from "react";
import toast from "siiimple-toast";

import { usePlaceholder } from "../../hooks";
import "./Input.css";

interface ComponentProps {
  value: string;
  placeholder: string;
  onFieldChange: Function;
  type: string;
  inputType: string;
  errors?: Array<string>;
  className?: string;
}
export default function Input({
  value,
  placeholder,
  onFieldChange,
  type,
  inputType,
  errors,
  className
}: ComponentProps) {
  const ref = useRef(null);
  const {
    onBlurPlaceholder,
    onFocusPlaceholder,
    placeholderVisible
  } = usePlaceholder(placeholder, value, onFieldChange);

  function onBlur() {
    onBlurPlaceholder();

    if (errors) {
      errors.forEach((error: string) =>
        toast.message(error, { position: "bottom|right" })
      );
    }
  }

  if (placeholder === "Number of tickets") {
    return (
      <>
        <input
          className={`${className} Input-placeholder`}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => onFieldChange(event.target.value)}
          onFocus={onFocusPlaceholder}
          onBlur={onBlur}
          value={value}
          type={type}
        />
        <span className="numberOfTicketsLabel">x {placeholder}</span>
      </>
    );
  }

  const Element = inputType === "textarea" ? "textarea" : "input";

  return (
    <Element
      className={`${className} Input-placeholder`}
      ref={ref}
      onChange={(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => onFieldChange(event.target.value)}
      onFocus={onFocusPlaceholder}
      onBlur={onBlur}
      value={value}
      type={type}
      data-placeholder-visible={placeholderVisible}
      {...(inputType === "textarea" ? { rows: 1 } : {})}
    />
  );
}
