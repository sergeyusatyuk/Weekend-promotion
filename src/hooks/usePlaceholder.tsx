import { useState } from "react";

export default function usePlaceholder(
  placeholder: string,
  value: string,
  setValue: Function
) {
  const [placeholderVisible, setPlaceholderVisible] = useState(true);

  const shouldDisplayPlaceholder = value === "" || value === placeholder;

  function onFocusPlaceholder() {
    if (shouldDisplayPlaceholder) {
      setPlaceholderVisible(false);
      setValue("");
    }
  }

  function onBlurPlaceholder() {
    if (shouldDisplayPlaceholder) {
      setPlaceholderVisible(true);
      setValue(placeholder);
    } else {
      setPlaceholderVisible(false);
    }
  }

  return {
    onFocusPlaceholder,
    onBlurPlaceholder,
    placeholderVisible
  };
}
