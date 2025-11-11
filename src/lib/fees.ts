/**
 * Fee calculation utility for online/card payment processing.
 * Business rule: Online/card payments add a processing fee.
 * Cash payments have no fee.
 */

export const FEES = {
  card_fee_percent: 0.03,
  card_fee_fixed: 0.15,
};

export function calcOnlineFee(amount: number) {
  const pct = FEES.card_fee_percent;
  const flat = FEES.card_fee_fixed;
  const fee = +(amount * pct + flat).toFixed(2);
  const total = +(amount + fee).toFixed(2);
  return { fee, total };
}