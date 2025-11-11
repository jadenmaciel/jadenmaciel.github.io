import React from "react";

type Props = {
  email?: string;
  phone?: string;
  address?: string;
  showHoursNote?: boolean;
};

export default function ContactInfo({
  email = "j.wes@wesleyscpr.com",
  phone = "(559) 360-1016",
  address = "1477 E. Shaw Ave, Suite 126D, Fresno, CA 93710",
  showHoursNote = true,
}: Props) {
  // Format phone number for tel: link (remove non-digits, add country code if needed)
  const phoneLink = `tel:+1${phone.replace(/\D/g, '')}`;
  
  return (
    <section aria-labelledby="contact-heading" className="contact-block">
      <h2 id="contact-heading">Contact</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
      </p>
      <p>
        <strong>Phone:</strong> <a href={phoneLink}>{phone}</a>
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
      {showHoursNote && (
        <p className="hours-note">Hours vary by class schedule. For same-day availability, please call.</p>
      )}
    </section>
  );
}

