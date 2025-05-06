import { CircleInfo, TriangleWarning2 } from "@unkey/icons";
import * as React from "react";
import { cn } from "../../lib/utils";
import {
  type DocumentedSelectProps,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { OptionalTag, RequiredTag } from "./form-textarea";

// Hack to populate fumadocs' AutoTypeTable
export type DocumentedFormSelectProps = DocumentedSelectProps & {
  label?: string;
  description?: string | React.ReactNode;
  required?: boolean;
  optional?: boolean;
  error?: string;
  options: Array<{ value: string; label: string }>;
  id?: string;
  className?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  disabled?: boolean;
};

// Simplify type to avoid dependency on internal Radix types
export type FormSelectProps = DocumentedFormSelectProps;

export const FormSelect = React.forwardRef<HTMLButtonElement, FormSelectProps>(
  (
    {
      label,
      description,
      error,
      required,
      optional,
      id,
      className,
      variant,
      leftIcon,
      wrapperClassName,
      options,
      value,
      defaultValue,
      onValueChange,
      name,
      disabled,
      ...props
    },
    ref,
  ) => {
    const selectVariant = error ? "error" : variant;
    const selectId = id || React.useId();
    const descriptionId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    return (
      <fieldset className={cn("flex flex-col gap-1.5 border-0 m-0 p-0", className)}>
        {label && (
          <label
            id={`${selectId}-label`}
            htmlFor={selectId}
            className="text-gray-11 text-[13px] flex items-center"
          >
            {label}
            {required && <RequiredTag hasError={Boolean(error)} />}
            {optional && <OptionalTag />}
          </label>
        )}
        <Select {...props} onValueChange={onValueChange}>
          <SelectTrigger
            disabled={disabled}
            ref={ref}
            id={selectId}
            variant={selectVariant}
            leftIcon={leftIcon}
            wrapperClassName={wrapperClassName}
            aria-describedby={error ? errorId : description ? descriptionId : undefined}
            aria-invalid={!!error}
            aria-required={required}
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {options.map((option: { value: string; label: string }) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {(description || error) && (
          <div className="text-[13px] leading-5">
            {error ? (
              <div id={errorId} role="alert" className="text-error-11 flex gap-2 items-center">
                <TriangleWarning2 className="flex-shrink-0" aria-hidden="true" />
                <span className="flex-1">{error}</span>
              </div>
            ) : description ? (
              <output
                id={descriptionId}
                className={cn(
                  "text-gray-9 flex gap-2 items-start",
                  variant === "success"
                    ? "text-success-11"
                    : variant === "warning"
                      ? "text-warning-11"
                      : "",
                )}
              >
                {variant === "warning" ? (
                  <TriangleWarning2
                    size="md-regular"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                ) : (
                  <CircleInfo
                    size="md-regular"
                    className="flex-shrink-0 mt-[3px]"
                    aria-hidden="true"
                  />
                )}
                <span className="flex-1">{description}</span>
              </output>
            ) : null}
          </div>
        )}
      </fieldset>
    );
  },
);

FormSelect.displayName = "FormSelect";
