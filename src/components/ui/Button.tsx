import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 disabled:opacity-60 disabled:cursor-not-allowed";

  const styles =
    variant === "primary"
      ? "bg-brand-700 text-white hover:bg-brand-800 shadow-soft"
      : variant === "outline"
      ? "border border-black/15 bg-white/60 hover:bg-white/80"
      : "bg-transparent hover:bg-black/5";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
