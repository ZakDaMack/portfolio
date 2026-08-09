import { motion } from "motion/react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"

import { useDarkMode } from "@/hooks/use_dark_mode";

import * as SwitchPrimitives from "@radix-ui/react-switch"
import { MoonIcon, SunIcon } from "@phosphor-icons/react";

const ThemeToggler = forwardRef<
    ElementRef<typeof SwitchPrimitives.Root>,
    ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className }, ref) => {
    const { theme, toggleMode, setTheme } = useDarkMode()
    const isDark = theme === "dark";

    return (
      <motion.div
        initial={{
          opacity: 0,
          y: -20,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      >
      <div className="flex rounded-full border border-white/15 bg-white/10 p-1 backdrop-blur-2xl">
        {["light", "dark"].map((mode) => (
          <button
            key={mode}
            onClick={() => setTheme(mode as 'light'|'dark')}
            className="relative flex h-8 w-8 items-center justify-center cursor-pointer"
          >
            {theme === mode && (
              <motion.div
                layoutId="theme-indicator"
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 30,
                }}
                className="absolute inset-0 rounded-full border border-white/20 bg-white/20 backdrop-blur-xl shadow-lg"
              />
            )}

            <span className="relative z-10">
              {mode === "light" ? (
                <SunIcon size={14} />
              ) : (
                <MoonIcon size={14} />
              )}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
});

ThemeToggler.displayName = 'ThemeToggler';
export default ThemeToggler;
