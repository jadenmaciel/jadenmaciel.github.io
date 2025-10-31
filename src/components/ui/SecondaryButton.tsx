/**
 * SecondaryButton - Reusable cream CTA button component
 * Supports both anchor links and button interactions
 */
interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function SecondaryButton({
  children,
  href,
  className = '',
  onClick,
}: SecondaryButtonProps) {
  const baseStyles =
    'bg-cream text-navy px-5 py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2 border border-cream/60 transition-colors hover:opacity-90';

  const combinedClasses = `${baseStyles} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}

