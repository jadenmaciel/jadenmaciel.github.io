import { Helmet } from 'react-helmet-async';
import ContactInfo from '../components/ContactInfo';
import '../styles/privacy.css';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Wesley's CPR</title>
        <meta name="description" content="Privacy and data handling policy for Wesley's CPR." />
      </Helmet>
      <main className="bg-cream text-dark py-16">
        <div className="privacy-page">
          {/* (A) ContactInfo */}
          <ContactInfo />

          {/* (B) Main heading */}
          <h1 className="section-title">Privacy & Data Handling</h1>

          {/* (C) Intro sentence */}
          <p className="intro">We respect your privacy. This page explains what we collect, why we collect it, and how to reach us with questions.</p>

          {/* (D) Two-column cards: "What We Collect" and "What We DON'T Collect" */}
          <div className="grid-2">
            <div className="card">
              <h2 className="section-title" style={{ fontSize: '1.5rem', margin: '0 0 12px 0', textAlign: 'left' }}>What We Collect</h2>
              <ul className="list">
                <li>Basic contact details you choose to share (name, email, phone)</li>
                <li>Class/booking details (course type, date/time, location)</li>
                <li>Communications you send us (questions or requests)</li>
              </ul>
            </div>

            <div className="card">
              <h2 className="section-title" style={{ fontSize: '1.5rem', margin: '0 0 12px 0', textAlign: 'left' }}>What We DON'T Collect</h2>
              <ul className="list">
                <li>No marketing tracking pixels or ad networks</li>
                <li>No selling or sharing of personal data with third parties for marketing</li>
                <li>No sensitive medical records</li>
              </ul>
            </div>
          </div>

          {/* (E) Card: "How We Use Your Information" */}
          <div className="card">
            <h2 className="section-title" style={{ fontSize: '1.5rem', margin: '0 0 12px 0', textAlign: 'left' }}>How We Use Your Information</h2>
            <ul className="list">
              <li>Schedule and run training sessions</li>
              <li>Send confirmations or respond to messages</li>
              <li>Keep basic records required for certification and administration</li>
            </ul>
          </div>

          {/* (G) Card: "Your Choices" */}
          <div className="card">
            <h2 className="section-title" style={{ fontSize: '1.5rem', margin: '0 0 12px 0', textAlign: 'left' }}>Your Choices</h2>
            <p>You may request a copy or deletion of your information (subject to training/certification record requirements).</p>
          </div>

          {/* (I) Muted footer line */}
          <p className="muted">Last updated: 2025.</p>
        </div>
      </main>
    </>
  );
}