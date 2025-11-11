export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-8 text-center text-dark">
          Contact
        </h2>
        <div className="max-w-2xl mx-auto space-y-4 text-dark">
          <p>
            Email: <a href="mailto:j.wes@wesleyscpr.com" className="text-red underline underline-offset-2 hover:opacity-80">j.wes@wesleyscpr.com</a>
          </p>
          <p>
            Phone: <a href="tel:+15593601016" className="text-red underline underline-offset-2 hover:opacity-80">(559) 360-1016</a>
          </p>
          <p>
            Address: 1477 E. Shaw Ave, Suite 126D, Fresno, CA 93710
          </p>
          <p className="text-sm opacity-75">
            Hours vary by class schedule. For same-day availability, please call.
          </p>
        </div>
      </div>
    </section>
  );
}
