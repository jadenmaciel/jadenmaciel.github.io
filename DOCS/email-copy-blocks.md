# Email Copy Blocks for Booky.buzz

Copy-paste ready email templates for Booky.buzz booking confirmations and communications.

## Booking Confirmation Email

**Subject**: You're booked for {{class_datetime}} at {{location}}

**Body**:

```
You're booked for {{class_datetime}} at {{location}}.

Fee disclosure: Online/card payments add {{card_fee_percent}}% + ${{card_fee_fixed}}; cash has no fee. You'll see any fee and your grand total before paying online.

What to bring:
- Valid ID
- Comfortable clothing for hands-on practice
- Any required pre-course materials (if applicable)

Payment is due within 24 hours to hold your seat. 20% deposit is non-refundable. AHA e-card provided upon completion.

If you have any questions, please contact us:
Phone: (559) 360-1016
Email: j.wes@wesleyscpr.com

We look forward to training with you!

Wesley's CPR
1477 E. Shaw Ave. Suite 126D
Fresno, CA 93710
```

**Variables to replace**:
- `{{class_datetime}}` - Class date and time (e.g., "January 15, 2024 at 6:00 PM")
- `{{location}}` - Training location (e.g., "1477 E. Shaw Ave. Suite 126D, Fresno, CA 93710")
- `{{frontend_base_url}}` - Frontend URL (e.g., "https://jadenmaciel.github.io/wesleys-cpr")
- `{{card_fee_percent}}` - The credit card processing fee percentage (source: `FEES.card_fee_percent * 100` from `src/lib/fees.ts`, e.g., "3.00")
- `{{card_fee_fixed}}` - The fixed credit card processing fee (source: `FEES.card_fee_fixed` from `src/lib/fees.ts`, e.g., "0.15")

## Payment Reminder Email (Optional)

**Subject**: Payment Reminder for {{class_datetime}}

**Body**:

```
This is a reminder that payment is due within 24 hours to hold your seat for:

Class: {{class_datetime}} at {{location}}

Payment Options:
- Online/Card: Processed securely via Troute. A processing fee of {{card_fee_percent}}% + ${{card_fee_fixed}} applies.
- Cash: No processing fee. Pay at the training location.

You'll see any fee and your grand total before paying online.

20% deposit is non-refundable. AHA e-card provided upon completion.

If you have questions or need to make payment arrangements, please contact us:
Phone: (559) 360-1016
Email: j.wes@wesleyscpr.com

Wesley's CPR
```

## Usage Notes

1. **Booky.buzz Integration**: These templates can be added to Booky.buzz email templates
2. **Variable Replacement**: Booky.buzz should handle variable replacement automatically
3. **Fee Disclosure**: Always include fee disclosure language in payment-related emails
4. **Consistency**: Use consistent contact information and branding across all emails
5. **Accessibility**: Keep emails simple, clear, and mobile-friendly
6. **Fee Values Source**: Fee values (`{{card_fee_percent}}` and `{{card_fee_fixed}}`) are sourced from `src/lib/fees.ts` (`FEES.card_fee_percent * 100` and `FEES.card_fee_fixed`). When updating fees, modify the `FEES` constant in `src/lib/fees.ts` and update these email templates accordingly to reflect the new values.
