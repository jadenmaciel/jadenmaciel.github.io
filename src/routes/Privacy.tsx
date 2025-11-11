import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Wesley's CPR</title>
        <meta name="description" content="Privacy and data handling policy for Wesley's CPR." />
      </Helmet>
      <main className="bg-cream text-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy & Data Handling</h1>
          <div className="prose prose-lg max-w-none">
            <p className="lead">This document outlines how Wesley's CPR handles personal information.</p>
            <p><strong>Note:</strong> Waiver capture is currently disabled. The waiver submission flow has been removed from the UI. Any Lambda/infra code in the repo (<code>src/lambda/</code>, <code>infra/</code>) exists for future use but is not currently active or called by the application.</p>

            <h2>Data Minimization</h2>
            <p>We collect only the information necessary for:</p>
            <ul>
              <li>Training administration and certification records</li>
              <li>Emergency contact during training sessions</li>
              <li>Legal compliance (waiver requirements)</li>
              <li>Communication about training sessions</li>
            </ul>

            <h2>Data Collected (Future Waiver Implementation)</h2>
            <p>If waiver capture is re-enabled in the future, the form would collect:</p>
            <ul>
              <li><strong>Participant Information:</strong> Name, email, phone number</li>
              <li><strong>Emergency Contact:</strong> Name and phone number</li>
              <li><strong>Class Information:</strong> Course name, date/time, location</li>
              <li><strong>Legal Acknowledgments:</strong> Assumption of risk, release/indemnity, photo consent (optional)</li>
              <li><strong>Minor Information:</strong> Guardian name and signature (if participant is under 18)</li>
              <li><strong>Electronic Signature:</strong> Typed name as signature</li>
              <li><strong>Payment Acknowledgment:</strong> Confirmation of fee disclosure understanding</li>
            </ul>
            <p><strong>Current Status:</strong> No waiver data is currently collected. Waiver UI has been removed from the site.</p>

            <h2>Data Storage (Future Implementation)</h2>
            <p>If waiver capture is re-enabled:</p>
            <ul>
              <li><strong>Location:</strong> AWS S3 (private bucket, encrypted at rest)</li>
              <li><strong>Format:</strong> JSON files organized by date (<code>{'waivers/YYYY/MM/DD/{uuid}.json'}</code>)</li>
              <li><strong>Access:</strong> Private bucket with no public access; only authorized AWS services can write</li>
              <li><strong>Versioning:</strong> Enabled for audit trail and recovery</li>
            </ul>
            <p><strong>Current Status:</strong> No data storage active. Infrastructure code exists but is not deployed or used.</p>

            <h2>Data Retention</h2>
            <ul>
              <li><strong>Default Retention:</strong> 3 years (1095 days)</li>
              <li><strong>Rationale:</strong> Required for certification records and potential legal compliance</li>
              <li><strong>Lifecycle Policy:</strong> Automatic deletion after retention period</li>
              <li><strong>Version History:</strong> Non-current versions retained for 30 days</li>
            </ul>

            <h2>Data Access</h2>
            <ul>
              <li><strong>Owner Access:</strong> Via AWS S3 console or CLI (requires AWS credentials)</li>
              <li><strong>No Public Access:</strong> Bucket is private; no public URLs or web access</li>
              <li><strong>Export Procedure:</strong> Contact owner to request data export (see below)</li>
            </ul>

            <h2>Data Export</h2>
            <p>To request a copy of your waiver data:</p>
            <ol>
              <li>Contact: <a href="mailto:j.wes@wesleyscpr.com">j.wes@wesleyscpr.com</a> or <a href="tel:5593601016">(559) 360-1016</a></li>
              <li>Provide: Your name, email, and approximate submission date</li>
              <li>Timeline: Export provided within 5 business days</li>
              <li>Format: JSON or PDF (as requested)</li>
            </ol>

            <h2>Data Security</h2>
            <ul>
              <li><strong>Encryption:</strong> AES-256 server-side encryption in S3</li>
              <li><strong>Transmission:</strong> HTTPS/TLS for all API requests</li>
              <li><strong>Access Control:</strong> IAM roles with least-privilege permissions</li>
              <li><strong>Logging:</strong> No PII logged in CloudWatch; only masked identifiers</li>
              <li><strong>CORS:</strong> Restricted to authorized origin (GitHub Pages domain)</li>
            </ul>

            <h2>Email Communications</h2>
            <ul>
              <li><strong>Owner Notifications:</strong> Sent via AWS SES to verified email address</li>
              <li><strong>Participant Receipts:</strong> Optional confirmation email sent to participant</li>
              <li><strong>Email Content:</strong> Includes class details and contact information</li>
              <li><strong>Email Storage:</strong> Not stored separately; only in S3 waiver records</li>
            </ul>

            <h2>Third-Party Services</h2>
            <ul>
              <li><strong>Current:</strong> Booky.buzz booking widget (iframe integration)</li>
              <li><strong>Future (if waiver re-enabled):</strong> AWS Services - S3 (storage), Lambda (processing), SES (email), SSM (configuration)</li>
              <li><strong>No Analytics:</strong> No tracking, cookies, or marketing pixels</li>
              <li><strong>No Data Sharing:</strong> No personal data is currently shared with third parties</li>
            </ul>

            <h2>Compliance</h2>
            <ul>
              <li><strong>Legal Basis:</strong> Waiver required for participation in training</li>
              <li><strong>Retention Compliance:</strong> 3-year retention aligns with certification record requirements</li>
              <li><strong>Access Rights:</strong> Participants can request data export or deletion (subject to retention requirements)</li>
            </ul>

            <h2>Contact</h2>
            <p>For privacy questions or data requests:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:j.wes@wesleyscpr.com">j.wes@wesleyscpr.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:5593601016">(559) 360-1016</a></li>
              <li><strong>Address:</strong> 1477 E. Shaw Ave. Suite 126D, Fresno, CA 93710</li>
            </ul>

            <h2>Updates</h2>
            <p>This policy may be updated to reflect changes in data handling practices. Last updated: 2024.</p>
          </div>
        </div>
      </main>
    </>
  );
}