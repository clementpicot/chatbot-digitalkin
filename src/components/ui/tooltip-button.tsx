"use client";

import { Button, ButtonProps } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

type VariantType = ButtonProps["variant"]
type SizeType = ButtonProps["size"]

export default function TooltipButton({
  variant,
  size,
  buttonContent,
  tooltip,
  ...delegated
}: {
  variant?: VariantType;
  size: SizeType;
  buttonContent: string | React.ReactNode;
  tooltip: string;
} & ButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={variant} size={size} {...delegated}>
            {buttonContent}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
