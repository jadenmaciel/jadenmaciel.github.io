# Email Copy Blocks for Booky.buzz

Copy-paste ready email templates for Booky.buzz booking confirmations and communications.

## Booking Confirmation Email

**Subject**: You're booked for {{class_datetime}} at {{location}}

**Body**:

```
You're booked for {{class_datetime}} at {{location}}.

Fee disclosure: Online/card payments add 3.00% + $0.15; cash has no fee. You'll see any fee and your grand total before paying online.

What to bring:
- Valid ID
- Comfortable clothing for hands-on practice
- Any required pre-course materials (if applicable)

Payment is due within 24 hours to hold your seat. 20% deposit is non-refundable. AHA e-card provided upon completion.

If you have any questions, please contact us:
Phone: (559) 360-1016
Email: j.wes@wesleyscprfresno.com

We look forward to training with you!

Wesley's CPR
1477 E. Shaw Ave. Suite 126D
Fresno, CA 93710
```

**Variables to replace**:
- `{{class_datetime}}` - Class date and time (e.g., "January 15, 2024 at 6:00 PM")
- `{{location}}` - Training location (e.g., "1477 E. Shaw Ave. Suite 126D, Fresno, CA 93710")
- `{{frontend_base_url}}` - Frontend URL (e.g., "https://jadenmaciel.github.io/wesleys-cpr")

## Payment Reminder Email (Optional)

**Subject**: Payment Reminder for {{class_datetime}}

**Body**:

```
This is a reminder that payment is due within 24 hours to hold your seat for:

Class: {{class_datetime}} at {{location}}

Payment Options:
- Online/Card: Processed securely via Troute. A processing fee of 3.00% + $0.15 applies.
- Cash: No processing fee. Pay at the training location.

You'll see any fee and your grand total before paying online.

20% deposit is non-refundable. AHA e-card provided upon completion.

If you have questions or need to make payment arrangements, please contact us:
Phone: (559) 360-1016
Email: j.wes@wesleyscprfresno.com

Wesley's CPR
```

## Usage Notes

1. **Booky.buzz Integration**: These templates can be added to Booky.buzz email templates
2. **Variable Replacement**: Booky.buzz should handle variable replacement automatically
3. **Fee Disclosure**: Always include fee disclosure language in payment-related emails
4. **Consistency**: Use consistent contact information and branding across all emails
5. **Accessibility**: Keep emails simple, clear, and mobile-friendly

