import { Link } from "react-router-dom"
import SEO from "@/components/SEO"

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read jiocoder' Privacy Policy to understand how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, privacy, user data"
      />
      <div className="flex flex-col min-h-screen bg-background">
        <section className="w-full py-12 md:py-20 lg:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Privacy Policy - jiocoder Data Protection
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Learn how jiocoder collects, uses, and protects your personal information. Your privacy is important to us.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link to="/about" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">About Us</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/terms" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Terms & Conditions</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/contact" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At jiocoder ("we," "our," or "us"), we are committed to protecting your privacy. 
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                    when you use our website and services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                        <li>Register for an account</li>
                        <li>Use our services</li>
                        <li>Contact us for support</li>
                        <li>Subscribe to our newsletter</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We automatically collect certain information when you visit our website, including 
                        your IP address, browser type, device information, and usage patterns.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Process your transactions and manage your account</li>
                    <li>Send you updates, newsletters, and promotional materials</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your 
                    personal information. However, no method of transmission over the Internet or electronic 
                    storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar tracking technologies to track activity on our website and 
                    store certain information. You can instruct your browser to refuse all cookies or to 
                    indicate when a cookie is being sent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may use third-party services that collect, monitor, and analyze information. These 
                    services have their own privacy policies addressing how they use such information.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>The right to access your personal information</li>
                    <li>The right to rectify inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to object to processing of your information</li>
                    <li>The right to data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services are not intended for children under the age of 13. We do not knowingly 
                    collect personal information from children under 13.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We may update our Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at 
                    <Link to="/contact" className="text-primary hover:underline ml-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">support@jiocoder.com</Link> 
                    or visit our <Link to="/contact" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">contact page</Link>. 
                    You can also learn more about us on our <Link to="/about" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">About page</Link> or 
                    explore our <Link to="/articles" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">educational content</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

