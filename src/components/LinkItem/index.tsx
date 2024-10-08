import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../variants";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "default" | "shiny";
}

export default function LinkItem({
  children,
  href,
  className = "",
  variant = "default",
  ...props
}: Props) {return (
  <Link
    {...props}
    href={href}
    className={cn(`${buttonVariants[variant]} ${className}`)}
  >
    {children}
  </Link>
);}