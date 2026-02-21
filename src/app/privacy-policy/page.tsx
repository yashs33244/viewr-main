import { Container, Wrapper } from "@/components";

const PrivacyPolicyPage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Wrapper>
        <Container>
          <div className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Privacy Policy
            </h1>
            <p className="text-center text-muted-foreground mb-12">
              Effective Date: 31 January 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="mb-6">
                ViewR Private Limited("we," "us," or "our") operates a
                Software-as-a-Service (SaaS) platform specializing in CCTV
                surveillance and analytics (the "Platform"). We are committed to
                protecting the privacy of our customers, users, and stakeholders
                in compliance with the applicable laws in India, including the
                Information Technology Act, 2000 and the Personal Data
                Protection Bill, 2019 (as amended or replaced).
              </p>
              <p className="mb-8">
                This Privacy Policy explains how we collect, use, disclose, and
                protect personal information in connection with our services.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="mb-4">
                We may collect the following types of information:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                1.1 Personal Information
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Name, email address, phone number, organization details, and
                  other contact details.
                </li>
                <li>
                  User credentials, including usernames and passwords for
                  accessing the Platform.
                </li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">1.2 CCTV Data</h3>
              <p className="mb-4">
                Video footage, images, and metadata collected from CCTV cameras
                integrated with our Platform.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                1.3 Analytics Data
              </h3>
              <p className="mb-4">
                Behavioral patterns, heatmaps, object detection, and other
                analytics derived from CCTV footage.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                1.4 Automatically Collected Data
              </h3>
              <p className="mb-4">
                Device information, IP address, browser type, operating system,
                and usage data collected through cookies, log files, and other
                tracking technologies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. How We Use the Information
              </h2>
              <p className="mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  To provide, maintain, and improve our Platform and services.
                </li>
                <li>To analyze video footage and generate insights.</li>
                <li>
                  To enhance security and monitor compliance with safety
                  protocols.
                </li>
                <li>To manage user accounts and provide customer support.</li>
                <li>
                  To comply with legal obligations and respond to lawful
                  requests from law enforcement.
                </li>
                <li>
                  To communicate updates, promotional offers, and other
                  information (subject to user consent).
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Sharing and Disclosure of Information
              </h2>
              <p className="mb-4">
                We do not sell, trade, or rent your personal information. We may
                share information under the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.1 With Service Providers
              </h3>
              <p className="mb-4">
                We may share information with third-party service providers who
                assist in delivering our services, such as cloud storage
                providers, analytics partners, and IT service providers.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.2 With Law Enforcement Authorities
              </h3>
              <p className="mb-4">
                We may disclose information to comply with applicable laws,
                regulations, or legal processes, or to respond to lawful
                requests by public authorities.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.3 Business Transfers
              </h3>
              <p className="mb-4">
                In the event of a merger, acquisition, or sale of assets, your
                information may be transferred to the acquiring entity.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">
                3.4 With Consent
              </h3>
              <p className="mb-4">
                We may share information with third parties when we have your
                explicit consent.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Data Retention
              </h2>
              <p className="mb-4">
                We retain personal information and CCTV data for as long as
                necessary to fulfill the purposes outlined in this policy, or as
                required by law. CCTV footage and analytics data are stored for
                a specific retention period agreed upon with the customer.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Security Measures
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures
                to safeguard your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encryption of data during transmission and at rest.</li>
                <li>
                  Role-based access controls and multi-factor authentication.
                </li>
                <li>Regular audits and vulnerability assessments.</li>
                <li>
                  Secure data storage in compliance with Indian data protection
                  laws.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. User Rights
              </h2>
              <p className="mb-4">
                Under applicable Indian laws, you have the following rights:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Access and Correction:</strong> Request access to or
                  correction of your personal information.
                </li>
                <li>
                  <strong>Data Portability:</strong> Receive your data in a
                  portable format.
                </li>
                <li>
                  <strong>Consent Withdrawal:</strong> Withdraw your consent to
                  data processing, where applicable.
                </li>
                <li>
                  <strong>Erasure:</strong> Request the deletion of personal
                  data, subject to legal retention requirements.
                </li>
              </ul>
              <p className="mb-4">
                To exercise your rights, contact us at help@viewr.in
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance user
                experience and analyze Platform usage. You can manage cookie
                preferences through your browser settings.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                8. Third-Party Links
              </h2>
              <p className="mb-4">
                Our Platform may contain links to third-party websites. We are
                not responsible for the privacy practices of these external
                sites. We encourage users to review their privacy policies.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                9. Compliance with Indian Laws
              </h2>
              <p className="mb-4">
                This Privacy Policy complies with the Information Technology
                Act, 2000 and its associated rules, as well as any relevant
                provisions under the Personal Data Protection Bill, 2019. We
                will update this policy as necessary to reflect changes in the
                legal landscape.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                10. Updates to the Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. We will notify
                users of significant changes through the Platform or via email.
                Continued use of our services constitutes acceptance of the
                updated policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                11. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or concerns regarding this Privacy
                Policy, please contact us at:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">ViewR Private Limited</p>
                <p>
                  2114-17, Tower 4, DLF CORPORATE GREENS, Sector 74A, Gurugram,
                  Haryana 122004
                </p>
                <p>Email: help@viewr.in</p>
                <p>Phone: +91 98913 67183</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default PrivacyPolicyPage;
