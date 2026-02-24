import { Container, Wrapper } from "@/components";

const TermsConditionsPage = () => {
  return (
    <section className="w-full relative flex items-center justify-center flex-col px-4 md:px-0 py-8">
      <Wrapper>
        <Container>
          <div className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Terms and Conditions
            </h1>
            <p className="text-center text-muted-foreground mb-12">
              Effective Date: 31 January 2025
            </p>

            <div className="prose prose-invert max-w-none">
              <p className="mb-8">
                Welcome to ViewR Private Limited ("we," "us," or "our"). These
                Terms and Conditions ("Terms") govern your access to and use of
                our Software-as-a-Service (SaaS) platform specializing in CCTV
                surveillance and analytics (the "Platform") and all related
                services (collectively, the "Services"). By accessing or using
                the Platform, you agree to be bound by these Terms. If you do
                not agree with any part of these Terms, you must not access or
                use the Platform.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Definitions
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>"User":</strong> Refers to any individual,
                  organization, or entity accessing or using the Platform.
                </li>
                <li>
                  <strong>"Customer":</strong> Refers to a paying subscriber of
                  our Services.
                </li>
                <li>
                  <strong>"Account":</strong> Refers to the unique profile
                  created by a User to access the Platform.
                </li>
                <li>
                  <strong>"Content":</strong> Includes all data, video footage,
                  analytics, text, graphics, and other materials provided
                  through the Platform.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Eligibility
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  To use the Platform, you must be at least 18 years old or the
                  age of majority in your jurisdiction.
                </li>
                <li>
                  By using the Platform, you represent and warrant that you have
                  the legal capacity to enter into a binding agreement.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Account Registration
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Users must create an Account to access certain features of the
                  Platform.
                </li>
                <li>
                  You agree to provide accurate, complete, and up-to-date
                  information during registration and to update it as necessary.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your Account credentials and for all activities that occur
                  under your Account.
                </li>
                <li>
                  Notify us immediately if you suspect unauthorized access to
                  your Account.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Use of the Platform
              </h2>
              <p className="mb-4">
                You agree to use the Platform solely for lawful purposes and in
                compliance with these Terms. You must not:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Use the Platform to upload, store, or distribute content that
                  violates any laws, regulations, or third-party rights.
                </li>
                <li>
                  Interfere with the operation or security of the Platform.
                </li>
                <li>
                  Reverse-engineer, decompile, or attempt to extract the source
                  code of the Platform.
                </li>
              </ul>
              <p className="mb-4">
                We reserve the right to suspend or terminate your access if you
                violate these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Customer Responsibilities
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Customers must ensure that their use of the Platform complies
                  with applicable laws, including privacy and data protection
                  laws.
                </li>
                <li>
                  Customers are responsible for obtaining the necessary consents
                  from individuals whose data is captured through CCTV
                  surveillance.
                </li>
                <li>
                  Customers agree not to misuse analytics derived from the
                  Platform.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                6. Fees and Payment
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Customers must pay the subscription fees specified in the
                  applicable order form or agreement.
                </li>
                <li>
                  All payments are non-refundable unless otherwise agreed in
                  writing.
                </li>
                <li>
                  We may suspend access to the Platform if fees remain unpaid
                  beyond the due date.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  The Platform, including its software, design, and Content, is
                  owned by us or our licensors and is protected by intellectual
                  property laws.
                </li>
                <li>
                  You may not use our trademarks, logos, or other proprietary
                  materials without prior written consent.
                </li>
                <li>
                  You retain ownership of Content you upload to the Platform. By
                  uploading Content, you grant us a non-exclusive, royalty-free
                  license to use it for the purpose of providing Services.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                8. Data Protection and Privacy
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  We process personal data in accordance with our Privacy
                  Policy, which is incorporated into these Terms by reference.
                </li>
                <li>
                  Customers are responsible for ensuring their compliance with
                  applicable data protection laws, including obtaining necessary
                  consents.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                9. Disclaimer of Warranties
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  The Platform and Services are provided "as is" and "as
                  available" without warranties of any kind, express or implied.
                </li>
                <li>
                  We do not warrant that the Platform will be uninterrupted,
                  error-free, or completely secure.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                10. Limitation of Liability
              </h2>
              <p className="mb-4">
                To the fullest extent permitted by law, we are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Indirect, incidental, special, or consequential damages.
                </li>
                <li>
                  Loss of data, profits, or revenue arising from your use of the
                  Platform.
                </li>
              </ul>
              <p className="mb-4">
                Our total liability is limited to the amount paid by the
                Customer in the twelve (12) months preceding the claim.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                11. Indemnification
              </h2>
              <p className="mb-4">
                You agree to indemnify, defend, and hold us harmless from any
                claims, liabilities, damages, losses, and expenses (including
                legal fees) arising out of:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your use of the Platform.</li>
                <li>Your violation of these Terms.</li>
                <li>Your breach of applicable laws or third-party rights.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                12. Suspension and Termination
              </h2>
              <p className="mb-4">
                We may suspend or terminate your access to the Platform if:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>You breach these Terms.</li>
                <li>Required by law or a regulatory authority.</li>
              </ul>
              <p className="mb-4">
                Customers may terminate their subscription by providing written
                notice in accordance with their agreement.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                13. Governing Law and Dispute Resolution
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>These Terms are governed by the laws of India.</li>
                <li>
                  Any disputes will be resolved through arbitration under the
                  Arbitration and Conciliation Act, 1996. The seat of
                  arbitration will be Gurgaon, India, and proceedings will be
                  conducted in English.
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                14. Force Majeure
              </h2>
              <p className="mb-4">
                We are not liable for any failure or delay in performance due to
                circumstances beyond our reasonable control, including natural
                disasters, government actions, or technical failures.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                15. Changes to the Terms
              </h2>
              <p className="mb-4">
                We may update these Terms from time to time. Changes will be
                effective upon posting on the Platform. Your continued use of
                the Platform constitutes acceptance of the updated Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                16. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions or concerns regarding these Terms,
                please contact us at:
              </p>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="font-semibold">ViewR Private Limited</p>
                <p>
                  2nd Floor, Spandana Building, Whitefield, Bangalore, Karnataka 560066
                </p>
                <p>Email: prabal@sudocodes.com</p>
                <p>Phone: +91 8770877703</p>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default TermsConditionsPage;
