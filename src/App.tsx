import React, { useState, useMemo, FormEvent } from "react";
import toast from "siiimple-toast";
import { checkErrors, formatData } from "./helpers";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import "./App.css";

import {
  IS_REQUIRED,
  MAX_LENGTH,
  MIN_LENGTH,
  PATTERN,
  MAX_VALUE,
  MIN_VALUE
} from "./constants";

export interface iRule {
  name: string;
  value: boolean | RegExp | number;
  message: string | Function;
}

export interface iField {
  value: string;
  placeholder: string;
  inputType: string;
  type: string;
  isTouched: boolean;
  rules?: Array<iRule>;
  errors?: Array<string>;
  className?: string;
}
export interface iRadioOption {
  value: string;
  label: string;
}
export interface iFieldRadio {
  value: string;
  options: Array<iRadioOption>;
  inputType: string;
  isTouched: boolean;
  rules?: Array<iRule>;
  errors?: Array<string>;
  className?: string;
  type: string;
  placeholder: string;
}

export interface iFields {
  tickets: iFieldRadio;
  firstName: iField;
  lastName: iField;
  textArea1: iField;
  textArea2: iField;
  email: iField;
  password: iField;
  vidNumber: iField;
  numberOfTickets: iField;
  [key: string]: iField | iFieldRadio;
}

export default function App() {
  const fields: iFields = {
    tickets: {
      value: "1 ticket",
      placeholder: "",
      options: [
        { value: "1 ticket", label: "1 ticket €109" },
        { value: "5 tickets", label: "5 tickets €495 " }
      ],
      inputType: "App-form__radio",
      type: "radio",
      isTouched: false,
      className: "Input App-form__radio"
    },
    firstName: {
      value: "First name",
      placeholder: "First name",
      inputType: "text",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "First name: nie może być puste"
        },
        {
          name: PATTERN,
          value: /^[^0-9]*$/,
          message: "First name: nie może zawierać cyfr z zakresu 0-9"
        }
      ],
      errors: [],
      className: "Input firstName"
    },
    lastName: {
      value: "Last name",
      placeholder: "Last name",
      inputType: "text",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Last name: nie może być puste"
        },
        {
          name: PATTERN,
          value: /^[^0-9]*$/,
          message: "Last name: nie może zawierać cyfr z zakresu 0-9"
        }
      ],
      errors: [],
      className: "Input lastName"
    },
    textArea1: {
      value: "Textarea 1",
      placeholder: "Textarea 1",
      inputType: "textarea",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Textarea 1: nie może być puste"
        },
        {
          name: MAX_LENGTH,
          value: 10,
          message: (param: string) =>
            `Textarea 1: maksymalnie 10 dowolnych znaków, ponad: ${param}`
        }
      ],
      errors: [],
      className: "Input textarea1"
    },
    textArea2: {
      value: "Textarea 2",
      placeholder: "Textarea 2",
      inputType: "textarea",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Textarea 2: nie może być puste"
        },
        {
          name: MAX_LENGTH,
          value: 20,
          message: (param: string) =>
            `Textarea 2: maksymalnie 10 dowolnych znaków, ponad: ${param}`
        }
      ],
      errors: [],
      className: "Input textarea2"
    },
    email: {
      value: "Email",
      placeholder: "Email",
      inputType: "text",
      type: "email",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Email: nie może być puste"
        },
        {
          name: PATTERN,
          value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          message: "Email: adres e-mail musi mieć prawidłowy format"
        }
      ],
      errors: [],
      className: "Input email"
    },
    password: {
      value: "Password",
      placeholder: "Password",
      inputType: "text",
      type: "password",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Password: nie może być puste"
        },
        {
          name: MIN_LENGTH,
          value: 8,
          message: "Password: hasło musi mieć minimum 8 znaków"
        },
        {
          name: PATTERN,
          value: /[0-9]+/,
          message: "Password: hasło musi mieć minimum jedną liczbę"
        },
        {
          name: PATTERN,
          value: /[a-zA-Z]+/,
          message: "Password: hasło musi mieć minimum jedną literę"
        },
        {
          name: PATTERN,
          value: /[@$!%*#?&/,/.]+/,
          message: "Password: hasło musi mieć minimum jeden znak specjalny"
        }
      ],
      errors: [],
      className: "Input password"
    },
    vidNumber: {
      value: "VID Number",
      placeholder: "VID Number",
      inputType: "text",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "VID Number: nie może być puste"
        },
        {
          name: PATTERN,
          value: /^[0-9]*$/,
          message: "VID Number: może przyjąc tylko cyfry z zakresu 0-9"
        },
        {
          name: MAX_LENGTH,
          value: 5,
          message: (param: string) =>
            `VID Number: może przyjąc maksymalnie 5 znaków, ponad: ${param}`
        }
      ],
      errors: [],
      className: "Input vidNumber"
    },
    numberOfTickets: {
      value: "1",
      placeholder: "Number of tickets",
      inputType: "text",
      type: "text",
      isTouched: false,
      rules: [
        {
          name: IS_REQUIRED,
          value: true,
          message: "Number of tickets: nie może być puste"
        },
        {
          name: PATTERN,
          value: /^[0-9]*$/,
          message: "Number of tickets: może przyjąc tylko cyfry z zakresu 0-9"
        },
        {
          name: MAX_VALUE,
          value: 20,
          message: "Number of tickets: nie przyjmuje wartości większych niż 20"
        },
        {
          name: MIN_VALUE,
          value: 1,
          message: "Number of tickets: nie przyjmuje wartości mniejszych niż 1"
        }
      ],
      errors: [],
      className: "Input numberOfTickets"
    }
  };
  const [values, setValues] = useState<iFields>(fields);

  const hasErrors = useMemo(() => {
    for (const field in values) {
      const { errors, isTouched } = values[field];

      if (Array.isArray(errors) && (errors.length || !isTouched)) {
        return true;
      }
    }
    return false;
  }, [values]);

  function handleFieldChange(field: string) {
    return (eventValue: string) => {
      const { value: previousValue, placeholder, rules } = values[field];

      if (eventValue !== previousValue) {
        const errors = checkErrors(eventValue, placeholder, rules);
        if (["textArea1", "textArea2", "vidNumber"].includes(field)) {
          errors.forEach((error: string) =>
            toast.message(error, { position: "bottom|right" })
          );
        }
        setValues({
          ...values,
          [field]: {
            ...values[field],
            value: eventValue,
            isTouched: true,
            errors
          }
        });
      }
    };
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    toast.message("Wysłano", { position: "bottom|right" });
    localStorage.setItem("test-form-data", formatData(values));
  }

  return (
    <div className="App">
      <div className="logo">
        <Logo />
      </div>
      <div className="App-headline">Weekend promotion</div>
      <form onSubmit={onSubmit}>
        <div className="radio-container">
          {values.tickets.options.map(({ value, label }) => (
            <span key={label} className="App-form__radio">
              <label className="radio-label">
                <input
                  type="radio"
                  name="tickets"
                  value={value}
                  defaultChecked={value === values.tickets.value}
                  onClick={event =>
                    // @ts-ignore
                    handleFieldChange("tickets")(event.target.value)
                  }
                />
                {label}
              </label>
            </span>
          ))}
        </div>
        <div className="App-form">
          {Object.keys(values)
            .filter(key => key !== "numberOfTickets" && key !== "vidNumber")
            .map(key => {
              const {
                placeholder,
                value,
                type,
                inputType,
                errors,
                className
              } = values[key];
              return (
                inputType !== "App-form__radio" && (
                  <Input
                    key={key}
                    className={className}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    inputType={inputType}
                    errors={errors}
                    onFieldChange={handleFieldChange(key)}
                  />
                )
              );
            })}
          <div className="App-form-bottom-container">
            <Input
              className={values.vidNumber.className}
              placeholder={values.vidNumber.placeholder}
              value={values.vidNumber.value}
              type={values.vidNumber.type}
              inputType={values.vidNumber.inputType}
              errors={values.vidNumber.errors}
              onFieldChange={handleFieldChange("vidNumber")}
            />
            <Input
              className={values.numberOfTickets.className}
              placeholder={values.numberOfTickets.placeholder}
              value={values.numberOfTickets.value}
              type={values.numberOfTickets.type}
              inputType={values.numberOfTickets.inputType}
              errors={values.numberOfTickets.errors}
              onFieldChange={handleFieldChange("numberOfTickets")}
            />
          </div>
        </div>
        <div>
          <button
            className="App-form__submit-button"
            type="submit"
            disabled={hasErrors}
          >
            register
          </button>
        </div>
      </form>
    </div>
  );
}
