import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: Props) {
  return (
    <input
      className={`h-10 w-full rounded-xl border border-black/15 bg-white/70 px-3 text-sm outline-none transition placeholder:text-black/40 focus:border-brand-600 focus:ring-2 focus:ring-brand-500/20 ${className}`}
      {...props}
    />
  );
}
