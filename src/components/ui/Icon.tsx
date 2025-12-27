export function Icon({ label }: { label: string }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-white/70 text-sm text-black/70"
      title={label}
    >
      {label.slice(0, 1)}
    </span>
  );
}
