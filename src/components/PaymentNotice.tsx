/**
 * Reusable banner/snippet stating payment fee policy.
 * High-contrast version that works on dark backgrounds.
 * Displays: "Online/card payments add 3.00% + $0.15; cash has no fee."
 */
type Props = { className?: string };

export default function PaymentNotice({ className = '' }: Props) {
  return (
    <p
      className={[
        'mt-4 text-sm leading-relaxed text-center',
        '!text-white',
        className,
      ].join(' ')}
    >
      <span className="font-semibold !text-white">Payment Processing:</span>{' '}
      Online/card payments add <span className="font-semibold">3.00% + $0.15</span> processing fee; cash has{' '}
      <span className="font-semibold">no fee</span>. You'll see any fee and your grand total before paying online.
    </p>
  );
}

