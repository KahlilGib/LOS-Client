import React from "react";
import { useId } from "react";

export default function Input({
  type,
  name,
  placeholder,
  autocomplete,
  value,
  handleChange,
  label,
  required,
  className,
  options,
  disabledSelected,
}) {
  const id = useId();
  return (
    <>
      <label className="mb-1" htmlFor="CIF-No">
        {label}
      </label>
      {type === "select" ? (
        <select
          id={name}
          class={className}
          required={required}
          onChange={handleChange}
          value={value}
        >
          <option value="" selected disabled>
            -- Select {disabledSelected} --
          </option>
          {options.map((item, index) => (
            <option key={id} value={item}>
              {item}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={`form-control ${type === "date" ? "rounded" : ""}`}
          id={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
          value={value}
          onChange={handleChange}
          required={required}
        />
      )}
    </>
  );
}
