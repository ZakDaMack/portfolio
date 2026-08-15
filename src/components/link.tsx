import { FC } from "react";

import { cn } from "@/lib/utils";

import NextLink from "next/link";
import { CaretRightIcon } from "@phosphor-icons/react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  element?: React.ElementType;
  target?: string;
  className?: string;
}

const Link: FC<LinkProps> = ({ href, children, element: Element = NextLink, target, className }) => {
  return (
    <Element href={href} target={target} className={cn('text-nord-10 font-light **:inline', className)}>
      <span>{children}</span><CaretRightIcon size={18} weight="bold" className="pb-1 pl-1" />
    </Element>
  );
}

export default Link;
export type { LinkProps };