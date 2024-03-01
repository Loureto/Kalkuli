"use client";

import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface IButtonActionSidebar extends ComponentProps<"button"> {
  icon: ReactNode;
}

export const ButtonActionSidebar = ({
  icon,
  className,
  type = "button",
  ...rest
}: IButtonActionSidebar) => {
  return (
    <button
      type={type}
      className={clsx("-m-2.5 p-2.5 text-gray-700 lg:hidden", className)}
      {...rest}
    >
      <span className="sr-only">Open sidebar</span>
      {icon}
    </button>
  );
};
