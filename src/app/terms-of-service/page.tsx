export default function TermsOfServicePage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p>
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ProWeb Marketing website
              (the "Service") operated by ProWeb Marketing ("us", "we", or "our").
            </p>

            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <p>
              <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</strong>
            </p>

            <h2>Service Description</h2>
            <p>
              ProWeb Marketing provides digital marketing services including but not limited to web design and development,
              search engine optimization, pay-per-click advertising, social media marketing, content creation, and branding services.
            </p>

            <h2>Accounts</h2>
            <p>
              When you create an account with us, you must provide us information that is accurate, complete, and current at all times.
              Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <p>
              You are responsible for safeguarding the password that you use to access the Service and for any activities or actions
              under your password, whether your password is with our Service or a third-party service.
            </p>

            <p>
              You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any
              breach of security or unauthorized use of your account.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of
              ProWeb Marketing and its licensors. The Service is protected by copyright, trademark, and other laws of both the
              United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product
              or service without the prior written consent of ProWeb Marketing.
            </p>

            <h2>Client Content</h2>
            <p>
              You retain all of your rights to any content you submit, post or display on or through the Service. By submitting,
              posting or displaying content on or through the Service, you grant us a worldwide, non-exclusive, royalty-free license
              to use, reproduce, adapt, publish, translate and distribute such content in connection with providing the Service.
            </p>

            <p>
              You represent and warrant that: (i) the content is yours or you have the right to use it and grant us the rights and
              license as provided in these Terms, and (ii) the posting of your content on or through the Service does not violate the
              privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Certain services offered by ProWeb Marketing may require payment. You agree to provide accurate and complete billing
              information, including legal name, address, telephone number, and valid payment method information.
            </p>

            <p>
              By submitting such payment information, you automatically authorize ProWeb Marketing to charge all fees incurred
              through your account to any such payment instruments.
            </p>

            <p>
              All payments are due upon receipt. If we do not receive payment from your credit card provider or other payment
              method, you agree to pay all amounts due upon demand. You agree to pay all costs of collection, including attorney's
              fees and costs, on any outstanding balance.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever,
              including without limitation if you breach the Terms.
            </p>

            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account,
              you may simply discontinue using the Service.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall ProWeb Marketing, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or
              inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any
              content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content,
              whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have
              been informed of the possibility of such damage.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of New York,
              United States, without regard to its conflict of law provisions.
            </p>

            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
              these Terms will remain in effect.
            </p>

            <h2>Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material
              we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material
              change will be determined at our sole discretion.
            </p>

            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
              If you do not agree to the new terms, please stop using the Service.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              ProWeb Marketing<br />
              123 Marketing Street, Suite 456<br />
              New York, NY 10001<br />
              (123) 456-7890<br />
              hello@prowebmarketing.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
