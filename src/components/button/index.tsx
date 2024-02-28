import { Button, extendVariants } from "@nextui-org/react";

export const ButtonCustom = extendVariants(Button, {
  variants: {
    color: {
      primary: "bg-custom-accentGreen text-white",
      secondary: "bg-white text-custom-accentGreen",
    },
  },
});
