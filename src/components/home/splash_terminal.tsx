"use client"

import { cn } from "@/lib/utils"

import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal"

export interface SplashTerminalProps {
  /** Which edge the terminal sits on; controls which way it angles inward */
  side?: "left" | "right"
  children: React.ReactNode
}

/** Glass terminal shell, angled inward from whichever edge it sits on. */
export function SplashTerminal({ side = "left", children }: SplashTerminalProps) {
  return (
    <div className="perspective-midrange">
      {/* Rotation lives on the wrapper, not on the blurred surface: Firefox
          drops backdrop-filter when the same element carries a 3D transform. */}
      <div className={side === "left" ? "rotate-y-30" : "-rotate-y-30"}>
        <Terminal
          className={cn(
            "h-auto max-h-none min-h-104 w-full max-w-172 rounded-2xl",
            "border-white/15 bg-white/10 font-mono",
            "backdrop-blur-sm"
          )}
        >
          {children}
        </Terminal>
      </div>
    </div>
  )
}

/** Blank output row — keeps the sequence pacing between blocks. */
const Blank = () => <AnimatedSpan>&nbsp;</AnimatedSpan>

export function InstallTerminal({ side }: Pick<SplashTerminalProps, "side">) {
  return (
    <SplashTerminal side={side}>
      <TypingAnimation className="text-nord-4">
        zak@portfolio:~$ ./bootstrap
      </TypingAnimation>
      <Blank />
      <AnimatedSpan className="text-nord-14">
        &gt; Booting portfolio
      </AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-5 inline">
        <span className="text-nord-14">&#x2714;</span> Initializing...
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-5 inline">
        <span className="text-nord-14">&#x2714;</span> Loading projects...
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-5 inline">
        <span className="text-nord-14">&#x2714;</span> Fetching experience...
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-5 inline">
        <span className="text-nord-14">&#x2714;</span> Lorem ipsuming...
      </AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-14">
        Ready.
      </AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-13">
        Welcome!
      </AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-4 inline">
        &gt; <span className="animate-wiggle">_</span>
      </AnimatedSpan>
    </SplashTerminal>
  )
}

export function ReactCodeTerminal({ side }: Pick<SplashTerminalProps, "side">) {
  return (
    <SplashTerminal side={side}>
      <TypingAnimation className="text-nord-4">
        zak@portfolio:~/app$ cat pages/home.tsx
      </TypingAnimation>
      <Blank />
      <AnimatedSpan className="text-nord-14">{'"use client"'}</AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-8">
        {"const Home: FC<HomeProps> = ({ title }) => {"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-4">
        {"  const [ready, setReady] = useState(false)"}
      </AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-8">
        {"  useEffect(() => {"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-4">
        {"    const t = setTimeout(() => setReady(true), 300)"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-15">
        {"    return () => clearTimeout(t)"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-4">{"  }, [])"}</AnimatedSpan>
      <Blank />
      <AnimatedSpan className="text-nord-8">{"  return ("}</AnimatedSpan>
      <AnimatedSpan className="text-nord-7">
        {"    <motion.section"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-13">
        {"      animate={ready ? show : hide}"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-14">
        {'      className="grid place-items-center"'}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-7">{"    >"}</AnimatedSpan>
      <AnimatedSpan className="text-nord-7">
        {"      <h1>{title}</h1>"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-7">
        {"    </motion.section>"}
      </AnimatedSpan>
      <AnimatedSpan className="text-nord-8">{"  )"}</AnimatedSpan>
      <AnimatedSpan className="text-nord-8">{"}"}</AnimatedSpan>
      <Blank />
        <AnimatedSpan className="text-nord-4">
            {"export default Home;"}
        </AnimatedSpan>
    </SplashTerminal>
  )
}
