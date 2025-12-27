type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
};

export function SectionTitle({ eyebrow, title, subtitle, center }: Props) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow ? (
        <div className="text-xs font-semibold tracking-widest text-black/50">{eyebrow}</div>
      ) : null}
      <h2 className="mt-1 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-black/60">{subtitle}</p> : null}
    </div>
  );
}
