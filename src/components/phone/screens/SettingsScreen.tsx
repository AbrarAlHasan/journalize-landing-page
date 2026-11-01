function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <span className="text-[13px] text-[#e5e5e5]">{label}</span>
      <span className="text-[12px] text-[#a3a3a3]">{value}</span>
    </div>
  );
}

export function SettingsScreen() {
  return (
    <div className="flex h-full flex-col overflow-y-auto px-4 pt-4 [scrollbar-width:none]">
      <h3 className="mb-3 text-lg font-bold">Settings</h3>
      <div className="mb-3 text-[12px] font-semibold text-[#e5e5e5]">Appearance</div>
      <div className="app-surface mb-4 rounded-2xl px-3">
        <div className="flex gap-1.5 py-3">
          {["System", "Light", "Dark"].map((label, index) => (
            <span
              key={label}
              className={`flex-1 rounded-lg px-2 py-1.5 text-center text-[11px] font-medium ${
                index === 2
                  ? "bg-[#2563eb] text-white"
                  : "bg-[#0a0a0a] text-[#a3a3a3]"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="mb-3 text-[12px] font-semibold text-[#e5e5e5]">Calendar</div>
      <div className="app-surface mb-4 rounded-2xl px-3">
        <Row label="Show weekends" value="On" />
      </div>
      <div className="mb-3 text-[12px] font-semibold text-[#e5e5e5]">Backup</div>
      <div className="app-surface mb-4 rounded-2xl p-3">
        <div className="text-[13px] font-semibold">Google Drive</div>
        <div className="mt-1 text-[11px] text-[#9ca3af]">
          Nov 1, 2026, 7:12 AM · 1.4 MB
        </div>
        <div className="mt-3 flex gap-2">
          <span className="rounded-lg bg-[#2563eb] px-2.5 py-1 text-[10px] font-medium text-white">
            Backup now
          </span>
          <span className="rounded-lg border border-[#262626] px-2.5 py-1 text-[10px] text-[#a3a3a3]">
            Restore
          </span>
        </div>
      </div>
      <div className="app-surface rounded-2xl px-3">
        <Row label="Export zip" value="On device" />
        <Row label="Include archived" value="Off" />
      </div>
    </div>
  );
}
