import { forwardRef } from "react";
import { useButton, Ripple, Spinner } from "@nextui-org/react";
import clsx from "clsx";

export const MyButton = forwardRef<HTMLButtonElement, any>((props, ref) => {
  const {
    domRef,
    children,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    styles,
    getButtonProps,
    getRippleProps,
  } = useButton({
    ref,
    ...props,
  });

  const { ripples } = getRippleProps();

  return (
    <button
      ref={domRef}
      className={clsx(styles, props.className)}
      {...getButtonProps()}
    >
      {startContent}
      {isLoading && spinnerPlacement === "start" && spinner}
      {children}
      {isLoading && spinnerPlacement === "end" && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} ripples={ripples} />}
    </button>
  );
});

MyButton.displayName = "MyButton";
