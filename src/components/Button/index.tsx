import React, { PropsWithChildren } from "react";
import "./style.css";

export const Button = ({
  children,
  ...props
}: PropsWithChildren<React.DOMAttributes<HTMLButtonElement>>) => {
  return <button {...props}>{children}</button>;
};
