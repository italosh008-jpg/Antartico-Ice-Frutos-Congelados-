import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ice-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ice-600 text-white shadow-lg shadow-ice-600/25 hover:bg-ice-700 hover:shadow-xl hover:shadow-ice-600/30 active:scale-[0.98]",
  secondary:
    "bg-white text-ice-800 shadow-lg shadow-ice-900/10 hover:bg-ice-50 active:scale-[0.98]",
  outline:
    "border-2 border-ice-200 text-ice-800 hover:border-ice-400 hover:bg-ice-50 active:scale-[0.98]",
  ghost: "text-ice-700 hover:bg-ice-50 active:scale-[0.98]",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className = "",
): string {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonProps) {
  return <button className={buttonClasses(variant, size, className)} {...rest} />;
}

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  ...rest
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, size, className)} {...rest} />;
}
