export default function PrivacyPolicyPage() {
  return (
    <main className="py-24">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">
              Last Updated: {new Date().toLocaleDateString('en-CA', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="mb-0">
                At ProWeb Marketing, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you visit our website or use our services in compliance with Canadian privacy laws.
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our website.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
              <p className="mb-6">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
                  <p>
                    Information such as your name, email address, and phone number that you voluntarily provide when you:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• Contact us through our website forms</li>
                    <li>• Request information about our services</li>
                    <li>• Subscribe to our newsletter</li>
                    <li>• Engage with our customer support</li>
                  </ul>
                  <p className="mt-3 text-sm text-muted-foreground">
                    You are under no obligation to provide personal information, however, refusing to do so may prevent you from using certain features of our website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Information</h3>
                  <p>
                    Information automatically collected when you visit our website, including:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li>• IP address and browser type</li>
                    <li>• Operating system and device information</li>
                    <li>• Pages visited and time spent on our website</li>
                    <li>• Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to provide you with the best possible service experience. Specifically, we may use your information to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li>• Respond to your inquiries and requests</li>
                  <li>• Provide quotes and service information</li>
                  <li>• Send important updates about our services</li>
                  <li>• Improve our website and user experience</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Analyze website usage and trends</li>
                  <li>• Send marketing communications (with your consent)</li>
                  <li>• Comply with legal obligations</li>
                  <li>• Protect our rights and prevent fraud</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Information Sharing</h2>
              <p className="mb-4">
                We respect your privacy and do not sell your personal information. We may share your information only in the following limited circumstances:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Legal Requirements</h3>
                  <p className="text-sm">
                    When required by Canadian law or to protect our rights, property, and safety or that of others.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Service Providers</h3>
                  <p className="text-sm">
                    With trusted third-party service providers who assist us in operating our website and providing services, under strict confidentiality agreements.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold">Business Transfers</h3>
                  <p className="text-sm">
                    In the event of a merger, acquisition, or sale of business assets, your information may be transferred as part of that transaction.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
              <p className="mb-4">
                Under Canadian privacy laws, you have the right to:
              </p>
              <div className="bg-muted/20 p-4 rounded-lg">
                <ul className="space-y-2">
                  <li>• <strong>Access:</strong> Request information about what personal data we have about you</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate personal information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li>• <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access,
                alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                If you become aware that we have collected personal information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page
                and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="bg-primary/5 p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your privacy rights, please contact us at:
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
