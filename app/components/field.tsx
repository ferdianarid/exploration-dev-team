export default function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-xl px-4 py-3 transition-colors hover:bg-white/5">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
        {icon} {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}