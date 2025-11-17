import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"

import { cn } from "@/lib/utils";
import { useDarkMode } from "@/hooks/use_dark_mode";

import * as SwitchPrimitives from "@radix-ui/react-switch"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

const ThemeToggler = forwardRef<
    ElementRef<typeof SwitchPrimitives.Root>,
    ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className }, ref) => {
    const { theme, toggleMode } = useDarkMode()
    return (
        <SwitchPrimitives.Root
            ref={ref}
            checked={theme === 'dark'}
            onCheckedChange={(_) => toggleMode()}
            className={cn(
              "peer inline-flex p-1 h-12 w-20 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-nord-4 shadow-lg",
              className
            )}
          >
            <SwitchPrimitives.Thumb
              className={cn(
                "pointer-events-none h-10 w-10 rounded-full bg-background shadow-2xl ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 grid"
              )}
            >
                <FontAwesomeIcon className="place-self-center" fontSize={20} icon={theme === 'light' ? faSun : faMoon} />
            </SwitchPrimitives.Thumb>
          </SwitchPrimitives.Root>
    );
});

export default ThemeToggler;
