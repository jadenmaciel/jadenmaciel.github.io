import { calcOnlineFee } from '../lib/fees';

type PricingCardProps = {
  name: string;
  price: number; // numeric price for fee calculation
  description: string;
  badge?: string;
  className?: string;
};

/**
 * Pricing card component with fee disclosure and example online payment total.
 * Shows base price, fee disclosure, and calculated total with fee.
 */
export default function PricingCard({ name, price, description, badge, className = '' }: PricingCardProps) {
  const { fee, total } = calcOnlineFee(price);

  return (
    <div className={`rounded-xl p-6 border border-navy/10 bg-white ${className}`}>
      {badge && (
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-red text-cream mb-3">
          {badge}
        </span>
      )}
      <h3 className="text-xl font-bold mb-2 text-navy">{name}</h3>
      <p className="text-sm text-navy/80 mb-4">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-navy mb-1">${price.toFixed(2)}</div>
        <p className="text-xs text-navy/70">Base price</p>
      </div>
      <div className="mb-4 p-3 rounded-lg bg-cream/50 border border-navy/10">
        <p className="text-xs text-navy">
          <strong>Payment Processing:</strong> Online/card payments add <strong>3.00% + $0.15</strong> processing fee; cash has <strong>no fee</strong>. You'll see any fee and your grand total before paying online.
        </p>
      </div>
      <div className="pt-4 border-t border-navy/10">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-navy/80">If paying online/card:</span>
          <span className="text-lg font-semibold text-navy">${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-xs text-navy/60">
          <span>Processing fee (3.00% + $0.15):</span>
          <span>${fee.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

