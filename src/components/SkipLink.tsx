export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only fixed top-2 left-2 z-[100] bg-cream text-navy px-4 py-2 rounded shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-navy"
    >
      Skip to main content
    </a>
  );
}

