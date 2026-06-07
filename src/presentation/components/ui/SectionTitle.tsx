interface Props {
  label: string;
  title: string;
}

export function SectionTitle({ label, title }: Props) {
  return (
    <div className="mb-14">
      <span className="text-xs font-mono tracking-[0.25em] uppercase text-violet-400">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-white">{title}</h2>
      <div className="mt-4 h-px w-12 bg-violet-500" />
    </div>
  );
}
