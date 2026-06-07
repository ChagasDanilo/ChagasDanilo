interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <span className={`font-bold font-mono tracking-wider text-white ${className ?? ''}`}>
      DC<span className="text-violet-400">.</span>
    </span>
  );
}
