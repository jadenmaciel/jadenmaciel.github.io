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
          Use the booking widget below to reserve your CPR, BLS, or First Aid session with Wesley&apos;s CPR. If the widget does not load,
          <a
            href={PUBLIC_BOOKING_URL}
            className="text-red font-semibold underline underline-offset-2 ml-1"
            target="_blank"
            rel="noreferrer"
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
          />
        </div>
        <p className="mt-4 text-sm text-navy/70 text-center">
          Secure payments are processed by Troute.
        </p>
      </div>
    </section>
  );
}


