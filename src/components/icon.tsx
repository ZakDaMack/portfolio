import { motion } from "motion/react";
import { FC } from "react";

const Icon: FC = () => (
    <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          opacity: { duration: 0.6 },
          scale: { duration: 0.6 },
        }}
        whileHover={{
          scale: 1.08,
          rotate: 3,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="group relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-nord-0"
    >
        {/* Animated glow */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 8px rgba(56,189,248,0.15)",
              "0 0 18px rgba(56,189,248,0.35)",
              "0 0 8px rgba(56,189,248,0.15)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full"
        />

        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-full p-px">
          <div className="relative flex h-full w-full items-center justify-center rounded-full backdrop-blur-3xl">
            {/* Glass reflection */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-white/20 to-transparent" />
            </div>

            {/* Electric edge */}
            <div className="absolute inset-0 rounded-full border border-cyan-300/40" />

            {/* Hover glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400/0 transition-all duration-300 group-hover:bg-cyan-400/10" />

            {/* Logo */}
            <motion.div
                whileHover="hover"
                className="relative flex items-end gap-0.5"
            >
                <span className="text-xl font-bold text-white">
                    Z
                </span>

                <motion.div
                    variants={{
                        hover: {
                            x: 2,
                            y: -2,
                            scale: 1.2,
                        },
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 20,
                    }}
                    className="
                        mb-1.5
                        size-1
                        rounded-[1px]
                        bg-cyan-400
                        shadow-[0_0_12px_rgba(34,211,238,.8)]
                    "
                />
            </motion.div>
          </div>
        </div>
      </motion.div>
);

export default Icon;