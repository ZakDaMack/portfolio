"use client"

import { cn } from "@/lib/utils"

import { AnimatedSpan, Terminal, TypingAnimation } from "../ui/terminal"

export interface SplashTerminalProps {
  side?: "left" | "right"
  children: React.ReactNode
}

export function SplashTerminal({ side = "left", children }: SplashTerminalProps) {
  return (
    <div className="perspective-midrange">
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

const Blank = () => <AnimatedSpan>&nbsp;</AnimatedSpan>

type TokenProps = { children: React.ReactNode }

const Kw = ({ children }: TokenProps) => (
  <span className="text-nord-9">{children}</span>
)

const Fn = ({ children }: TokenProps) => (
  <span className="text-nord-8">{children}</span>
)

const Ty = ({ children }: TokenProps) => (
  <span className="text-nord-7">{children}</span>
)
const Str = ({ children }: TokenProps) => (
  <span className="text-nord-14">{children}</span>
)

const Num = ({ children }: TokenProps) => (
  <span className="text-nord-15">{children}</span>
)

const Pun = ({ children }: TokenProps) => (
  <span className="text-nord-6">{children}</span>
)

const Line = ({ children }: TokenProps) => (
  <AnimatedSpan className="inline text-nord-4">{children}</AnimatedSpan>
)

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
        &gt; <span className="animate-blink">_</span>
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
      <Line>
        <Str>{'"use client"'}</Str>
      </Line>
      <Blank />
      <Line>
        <Kw>const</Kw>{" "}<Ty>Home</Ty><Pun>:</Pun>{" "}<Ty>FC</Ty>
        <Pun>{"<"}</Pun><Ty>HomeProps</Ty><Pun>{">"}</Pun>{" = "}
        <Pun>{"({"}</Pun>{" title "}<Pun>{"})"}</Pun>{" "}<Kw>{"=>"}</Kw>{" "}
        <Pun>{"{"}</Pun>
      </Line>
      <Line>
        {"  "}<Kw>const</Kw>{" "}<Pun>[</Pun>{"ready, setReady"}<Pun>]</Pun>
        {" = "}<Fn>useState</Fn><Pun>(</Pun><Kw>false</Kw><Pun>)</Pun>
      </Line>
      <Blank />
      <Line>
        {"  "}<Fn>useEffect</Fn><Pun>{"(()"}</Pun>{" "}<Kw>{"=>"}</Kw>{" "}
        <Pun>{"{"}</Pun>
      </Line>
      <Line>
        {"    "}<Kw>const</Kw>{" t = "}<Fn>setTimeout</Fn><Pun>{"(()"}</Pun>
        {" "}<Kw>{"=>"}</Kw>{" "}<Fn>setReady</Fn><Pun>(</Pun><Kw>true</Kw>
        <Pun>{"),"}</Pun>{" "}<Num>300</Num><Pun>)</Pun>
      </Line>
      <Line>
        {"    "}<Kw>return</Kw>{" "}<Pun>{"()"}</Pun>{" "}<Kw>{"=>"}</Kw>{" "}
        <Fn>clearTimeout</Fn><Pun>(</Pun>{"t"}<Pun>)</Pun>
      </Line>
      <Line>
        {"  "}<Pun>{"}, [])"}</Pun>
      </Line>
      <Blank />
      <Line>
        {"  "}<Kw>return</Kw>{" "}<Pun>(</Pun>
      </Line>
      <Line>
        {"    "}<Pun>{"<"}</Pun><Ty>motion.section</Ty>
      </Line>
      <Line>
        {"      animate="}<Pun>{"{"}</Pun>{"ready "}<Kw>?</Kw>{" show "}
        <Kw>:</Kw>{" hide"}<Pun>{"}"}</Pun>
      </Line>
      <Line>
        {"      className="}<Str>{'"grid place-items-center"'}</Str>
      </Line>
      <Line>
        {"    "}<Pun>{">"}</Pun>
      </Line>
      <Line>
        {"      "}<Pun>{"<"}</Pun><Ty>h1</Ty><Pun>{">{"}</Pun>{"title"}
        <Pun>{"}</"}</Pun><Ty>h1</Ty><Pun>{">"}</Pun>
      </Line>
      <Line>
        {"    "}<Pun>{"</"}</Pun><Ty>motion.section</Ty><Pun>{">"}</Pun>
      </Line>
      <Line>
        {"  "}<Pun>)</Pun>
      </Line>
      <Line>
        <Pun>{"}"}</Pun>
      </Line>
      <Blank />
      <Line>
        <Kw>export default</Kw>{" "}<Ty>Home</Ty><Pun>;</Pun>
      </Line>
    </SplashTerminal>
  )
}
