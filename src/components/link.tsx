import { FC } from "react";

import NextLink from "next/link";
import { CaretRightIcon } from "@phosphor-icons/react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  element?: React.ElementType;
  target?: string;
}

const Link: FC<LinkProps> = ({ href, children, element: Element = NextLink, target }) => {
  return (
    <Element href={href} target={target} className='text-nord-10 font-light **:inline'>
      <span>{children}</span><CaretRightIcon size={18} weight="bold" className="pb-1 pl-1" />
    </Element>
  );
}

export default Link;
export type { LinkProps };