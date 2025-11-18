import { useEffect, useRef } from 'react';

const BOOKING_ORIGIN = 'https://booky.buzz';
const BOOKING_URL = 'https://booky.buzz/widget/book/wesleyscpr';
const PUBLIC_BOOKING_URL = 'https://booky.buzz/book/wesleyscpr';

export default function Booking() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Security: only accept messages from the trusted booking origin
      if (event.origin !== BOOKING_ORIGIN) return;

      const data = event.data || {};
      if (data?.type !== 'buzz:widget:height') return;

      const newHeight = Math.max(480, Number(data.height) || 720);
      if (iframeRef.current) {
        iframeRef.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section id="booking" className="bg-cream text-navy py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Book a Class Online</h2>
        <p className="mb-6 text-navy/80">
          Choose your preferred date/time. You can also select an instructor: Jacqueline, Debbie, Tim. We prefer no same-day bookings; if you need today, contact us to check availability. If the widget does not load, <a
            href={PUBLIC_BOOKING_URL}
            className="text-red font-semibold underline underline-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            open the booking page directly.
          </a>
        </p>
        <div className="rounded-xl overflow-hidden border border-navy/10 bg-white">
          <iframe
            ref={iframeRef}
            src={BOOKING_URL}
            id="buzz-widget"
            style={{ width: '100%', minWidth: 320, border: 0, height: 720 }}
            loading="lazy"
            sandbox="allow-scripts allow-forms allow-popups allow-same-origin"
            allow="payment"
          />
        </div>
        <p className="mt-4 text-xs text-navy/70 text-center">
          Payment is due within 24 hours to hold your seat. 20% deposit is non-refundable. AHA e-card provided upon completion. Secure payments are processed by Troute.
        </p>
      </div>
    </section>
  );
}


