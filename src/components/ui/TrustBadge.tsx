/**
 * TrustBadge - Reusable trust indicator badge component
 * Displays as a small pill-style badge with subtle backdrop
 */
interface TrustBadgeProps {
  label: string;
}

export default function TrustBadge({ label }: TrustBadgeProps) {
  return (
    <span className="bg-navy/40 text-cream text-sm px-3 py-1 rounded-full border border-cream/10 backdrop-blur">
      {label}
    </span>
  );
}

