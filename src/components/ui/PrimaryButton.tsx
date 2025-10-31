/**
 * PrimaryButton - Reusable red CTA button component
 * Supports both anchor links and button interactions
 */
interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function PrimaryButton({
  children,
  href,
  className = '',
  onClick,
}: PrimaryButtonProps) {
  const baseStyles =
    'bg-red text-cream px-5 py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2 transition-colors hover:opacity-90';

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

