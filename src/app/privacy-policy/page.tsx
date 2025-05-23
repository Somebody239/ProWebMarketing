export default function PrivacyPolicyPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

            <p>
              At ProWeb Marketing, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully.
              If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the Website includes:
            </p>

            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and mailing address,
              that you voluntarily give to us when you register with the Website, contact us, or when you choose to participate
              in various activities related to the Website, such as online chat, newsletter subscriptions, and form submissions.
              You are under no obligation to provide us with personal information of any kind, however, your refusal to do so may
              prevent you from using certain features of the Website.
            </p>

            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Website, such as your IP address, your browser type,
              your operating system, your access times, and the pages you have viewed directly before and after accessing the Website.
            </p>

            <h3>Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card brand,
              expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services.
              We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by
              our payment processor and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>

            <h2>Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:</p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Process your transactions.</li>
              <li>Send you administrative information, including updates to our terms, conditions, and policies.</li>
              <li>Respond to your comments, questions, and requests.</li>
              <li>Request feedback and contact you about your use of our services.</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our Website.</li>
              <li>Improve our Website, products or services, marketing, and user experience.</li>
              <li>Send you marketing and promotional communications.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to our services.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy
              potential violations of our policies, or to protect the rights, property, and safety of others, we may share your
              information as permitted or required by any applicable law, rule, or regulation.
            </p>

            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment
              processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>

            <h3>Business Transfers</h3>
            <p>
              If we or our subsidiaries are involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we
              have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our
              efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against
              any interception or other type of misuse.
            </p>

            <h2>Policy for Children</h2>
            <p>
              We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data
              we have collected from children under age 13, please contact us using the contact information provided below.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
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
