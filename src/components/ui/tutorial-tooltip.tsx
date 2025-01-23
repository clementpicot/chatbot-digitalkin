import { XIcon } from "lucide-react";
import { TooltipRenderProps } from "react-joyride";
import { Button } from "@/components/ui/button";

export default function TutorialTooltip(props: TooltipRenderProps) {
  const {
    backProps,
    closeProps,
    continuous,
    index,
    primaryProps,
    skipProps,
    step,
    tooltipProps,
    size,
  } = props;

  return (
    <div
      className="relative max-w-md bg-foreground text-background border border-muted-foreground rounded-xl p-4"
      {...tooltipProps}
    >
      <div className="flex justify-between gap-4">
        {step.title && <h4 className="text-2xl font-bold">{step.title}</h4>}
        <button
          className="bg-muted-foreground/20 hover:bg-muted-foreground/40 h-6 p-1 rounded-md"
          {...closeProps}
        >
          <XIcon width={16} height={16} />
        </button>
      </div>
      <div className="mt-4 text-background/80">{step.content}</div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-background text-sm">
          <p>
            {index + 1} of {size}
          </p>
        </div>
        <div className="space-x-2">
          {index === 0 && (
            <Button className="border border-background/50" {...skipProps}>
              {skipProps.title}
            </Button>
          )}
          {index > 0 && (
            <Button className="border border-background/50" {...backProps}>
              {backProps.title}
            </Button>
          )}
          {continuous && (
            <Button variant="secondary" className="border" {...primaryProps}>
              {primaryProps.title}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
