import React from "react";

const Input = ({
  name,
  value,
  lable,
  textarea = false,
  onChange,
  type,
  placeholder,
  children,
  errors,
  lableClass,
  onKeyDown,
  className,
  ...rest
}) => {
  return (
    <>
      <label htmlFor={name} className="lable">
        {lable}
      </label>
      <div>
        {!textarea && (
          <input
            name={name}
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
            type={type}
            className={className}
            id={lable}
            placeholder={placeholder}
            {...rest}
          />
        )}
        {textarea && (
          <textarea
            name={name}
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
            type={type}
            className={className}
            id={lable}
            placeholder={placeholder}
            {...rest}
            width={"20px"}
          />
        )}
      </div>
    </>
  );
};

export default Input;
