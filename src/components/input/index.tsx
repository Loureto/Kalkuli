import { Input, extendVariants } from "@nextui-org/react";

export const InputCustom = extendVariants(Input, {
  variants: {
    variant: {
      bordered: {
        inputWrapper: [
          "data-[hover=true]:border-custom-lightGreen/50",
          "group-data-[focus=true]:border-custom-lightGreen",
        ],
      },
    },
  },
});
