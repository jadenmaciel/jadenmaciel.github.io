/**
 * Fee calculation utility for online/card payment processing.
 * Business rule: Online/card payments add 3.00% + $0.15 processing fee.
 * Cash payments have no fee.
 */

export function calcOnlineFee(amount: number) {
  const pct = 0.03;
  const flat = 0.15;
  const fee = +(amount * pct + flat).toFixed(2);
  const total = +(amount + fee).toFixed(2);
  return { fee, total };
}

