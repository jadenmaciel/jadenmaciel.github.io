/// <reference types="../vitest.d.ts" />
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import 'vitest-axe/extend-expect';
import PoliciesSection from './PoliciesSection';
import { FEES } from '../lib/fees';

describe('PoliciesSection', () => {
  it('renders the Policies & FAQ heading', () => {
    render(<PoliciesSection />);
    const heading = screen.getByRole('heading', { name: /policies & faq/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders all four section titles', () => {
    render(<PoliciesSection />);
    expect(screen.getByText('Privacy & Data Handling')).toBeInTheDocument();
    expect(screen.getByText('Class Logistics')).toBeInTheDocument();
    expect(screen.getByText('Payment Policy')).toBeInTheDocument();
    expect(screen.getByText('Refund & Reschedule Policy')).toBeInTheDocument();
  });

  it('has Privacy & Data Handling expanded by default', () => {
    render(<PoliciesSection />);
    const privacyHeader = screen.getByRole('button', { name: /privacy & data handling/i });
    expect(privacyHeader).toHaveAttribute('aria-expanded', 'true');

    const privacyContent = screen.getByRole('region', { name: /privacy & data handling/i });
    expect(privacyContent).toBeVisible();
  });

  it('has other sections collapsed by default', () => {
    render(<PoliciesSection />);
    const logisticsHeader = screen.getByRole('button', { name: /class logistics/i });
    const paymentHeader = screen.getByRole('button', { name: /payment policy/i });
    const refundHeader = screen.getByRole('button', { name: /refund & reschedule policy/i });

    expect(logisticsHeader).toHaveAttribute('aria-expanded', 'false');
    expect(paymentHeader).toHaveAttribute('aria-expanded', 'false');
    expect(refundHeader).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens a section when clicking its header', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    const logisticsHeader = screen.getByRole('button', { name: /class logistics/i });
    expect(logisticsHeader).toHaveAttribute('aria-expanded', 'false');

    await user.click(logisticsHeader);

    expect(logisticsHeader).toHaveAttribute('aria-expanded', 'true');
    const logisticsContent = screen.getByRole('region', { name: /class logistics/i });
    expect(logisticsContent).toBeVisible();
  });

  it('closes the previous section when opening a new one (single-open behavior)', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    // Privacy should be open by default
    const privacyHeader = screen.getByRole('button', { name: /privacy & data handling/i });
    expect(privacyHeader).toHaveAttribute('aria-expanded', 'true');

    // Click on Payment Policy
    const paymentHeader = screen.getByRole('button', { name: /payment policy/i });
    await user.click(paymentHeader);

    // Privacy should now be closed
    expect(privacyHeader).toHaveAttribute('aria-expanded', 'false');
    // Payment should be open
    expect(paymentHeader).toHaveAttribute('aria-expanded', 'true');
  });

  it('toggles a section closed when clicking its open header', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    const privacyHeader = screen.getByRole('button', { name: /privacy & data handling/i });
    expect(privacyHeader).toHaveAttribute('aria-expanded', 'true');

    await user.click(privacyHeader);

    expect(privacyHeader).toHaveAttribute('aria-expanded', 'false');
  });

  it('supports keyboard interaction with Enter key', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    const paymentHeader = screen.getByRole('button', { name: /payment policy/i });
    expect(paymentHeader).toHaveAttribute('aria-expanded', 'false');

    paymentHeader.focus();
    await user.keyboard('{Enter}');

    expect(paymentHeader).toHaveAttribute('aria-expanded', 'true');
  });

  it('supports keyboard interaction with Space key', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    const refundHeader = screen.getByRole('button', { name: /refund & reschedule policy/i });
    expect(refundHeader).toHaveAttribute('aria-expanded', 'false');

    refundHeader.focus();
    await user.keyboard(' ');

    expect(refundHeader).toHaveAttribute('aria-expanded', 'true');
  });

  it('displays fee text using FEES config values', async () => {
    const user = userEvent.setup();
    render(<PoliciesSection />);

    // Open Payment Policy section
    const paymentHeader = screen.getByRole('button', { name: /payment policy/i });
    await user.click(paymentHeader);

    // Get the payment content region
    const paymentContent = screen.getByRole('region', { name: /payment policy/i });

    // Calculate expected fee text based on FEES config
    const expectedPercent = (FEES.card_fee_percent * 100).toFixed(2);
    const expectedFixed = FEES.card_fee_fixed.toFixed(2);

    // Check that the fee text appears in the content (using regex for flexible matching)
    expect(paymentContent.textContent).toMatch(new RegExp(`${expectedPercent.replace('.', '\\.')}%\\s*\\+\\s*\\$${expectedFixed.replace('.', '\\.')}`));
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes on headers', () => {
      render(<PoliciesSection />);

      const privacyHeader = screen.getByRole('button', { name: /privacy & data handling/i });
      expect(privacyHeader).toHaveAttribute('aria-expanded');
      expect(privacyHeader).toHaveAttribute('aria-controls', 'privacy-content');
      expect(privacyHeader).toHaveAttribute('id', 'privacy-header');

      const logisticsHeader = screen.getByRole('button', { name: /class logistics/i });
      expect(logisticsHeader).toHaveAttribute('aria-expanded');
      expect(logisticsHeader).toHaveAttribute('aria-controls', 'logistics-content');
      expect(logisticsHeader).toHaveAttribute('id', 'logistics-header');

      const paymentHeader = screen.getByRole('button', { name: /payment policy/i });
      expect(paymentHeader).toHaveAttribute('aria-expanded');
      expect(paymentHeader).toHaveAttribute('aria-controls', 'payment-content');
      expect(paymentHeader).toHaveAttribute('id', 'payment-header');

      const refundHeader = screen.getByRole('button', { name: /refund & reschedule policy/i });
      expect(refundHeader).toHaveAttribute('aria-expanded');
      expect(refundHeader).toHaveAttribute('aria-controls', 'refund-content');
      expect(refundHeader).toHaveAttribute('id', 'refund-header');
    });

    it('has proper ARIA attributes on content panels', () => {
      render(<PoliciesSection />);

      const privacyContent = screen.getByRole('region', { name: /privacy & data handling/i });
      expect(privacyContent).toHaveAttribute('id', 'privacy-content');
      expect(privacyContent).toHaveAttribute('aria-labelledby', 'privacy-header');

      const logisticsContent = screen.getByRole('region', { name: /class logistics/i });
      expect(logisticsContent).toHaveAttribute('id', 'logistics-content');
      expect(logisticsContent).toHaveAttribute('aria-labelledby', 'logistics-header');

      const paymentContent = screen.getByRole('region', { name: /payment policy/i });
      expect(paymentContent).toHaveAttribute('id', 'payment-content');
      expect(paymentContent).toHaveAttribute('aria-labelledby', 'payment-header');

      const refundContent = screen.getByRole('region', { name: /refund & reschedule policy/i });
      expect(refundContent).toHaveAttribute('id', 'refund-content');
      expect(refundContent).toHaveAttribute('aria-labelledby', 'refund-header');
    });

    it('has no basic accessibility violations', async () => {
      const { container } = render(<PoliciesSection />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});

