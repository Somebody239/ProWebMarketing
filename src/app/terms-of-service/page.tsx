export default function TermsOfServicePage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-2">
                Please read these Terms of Service ("Terms") carefully before using the ProWeb Marketing website and services.
              </p>
              <p className="mb-2">
                Your access to and use of our services is conditioned on your acceptance of and compliance with these Terms.
                These Terms apply to all visitors, users, and clients who access or use our services.
              </p>
              <p className="mb-0 font-semibold">
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of these terms,
                you may not access our services.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Our Services</h2>
              <p>
                ProWeb Marketing provides digital marketing and web development services including:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <ul className="space-y-2">
                  <li>• Web design and development</li>
                  <li>• Search engine optimization (SEO)</li>
                  <li>• Pay-per-click (PPC) advertising</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Social media marketing</li>
                  <li>• Content creation and marketing</li>
                  <li>• Brand identity and design services</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Our Property</h3>
                  <p className="text-sm">
                    Our website, original content, features, and functionality are the exclusive property of ProWeb Marketing and its licensors.
                    This content is protected by copyright, trademark, and other laws of Canada and international jurisdictions.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-2">Your Content</h3>
                  <p className="text-sm">
                    You retain ownership of any content you provide to us. By working with us, you grant ProWeb Marketing a license to use,
                    reproduce, and adapt your content solely for the purpose of providing our services to you.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Service Terms & Payment</h2>
              <div className="bg-muted/20 p-4 rounded-lg space-y-3">
                <div>
                  <h3 className="font-semibold">Payment Requirements</h3>
                  <p className="text-sm">
                    Services requiring payment will have terms clearly outlined in your service agreement or invoice.
                    You agree to provide accurate billing information when purchasing services.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Payment Terms</h3>
                  <p className="text-sm">
                    Payment terms, including due dates and accepted payment methods, will be specified in your service agreement.
                    All payments are due as outlined in your specific agreement.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold">Service Delivery</h3>
                  <p className="text-sm">
                    Project timelines, deliverables, and specifications will be detailed in your service agreement.
                    We commit to delivering services according to the agreed-upon terms.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Client Responsibilities</h2>
              <p className="mb-4">To ensure successful project delivery, clients agree to:</p>
              <ul className="space-y-2">
                <li>• Provide accurate and complete information required for services</li>
                <li>• Respond to requests for feedback and approvals in a timely manner</li>
                <li>• Ensure all content provided is legally owned or properly licensed</li>
                <li>• Make payments according to the agreed-upon terms</li>
                <li>• Communicate any concerns or changes promptly</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Service Termination</h2>
              <div className="space-y-4">
                <p>
                  Either party may terminate services under the following conditions:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">By ProWeb Marketing</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Breach of payment terms</li>
                      <li>• Violation of these Terms</li>
                      <li>• Inappropriate client conduct</li>
                    </ul>
                  </div>
                  <div className="border border-muted p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">By Client</h3>
                    <ul className="text-sm space-y-1">
                      <li>• Written notice as per agreement</li>
                      <li>• Completion of current project phase</li>
                      <li>• Settlement of outstanding payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-4 rounded-lg">
                <p className="text-sm">
                  ProWeb Marketing's liability is limited to the amount paid for the specific service in question.
                  We are not liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to
                  loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the Province of Ontario, Canada,
                without regard to conflict of law provisions. Any disputes will be resolved in the courts of Ontario, Canada.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated with at least 30 days' notice.
                Continued use of our services after changes take effect constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-center">
                <p className="font-semibold">ProWeb Marketing</p>
                <p>Email: <a href="mailto:prowebmarketing2025@gmail.com" className="text-primary hover:underline">prowebmarketing2025@gmail.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
