import SEO from "@/components/SEO"

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms and Conditions"
        description="Read Moradabads' Terms and Conditions to understand the rules and regulations for using our platform."
        keywords="terms and conditions, terms of service, user agreement, legal"
      />
      <div className="flex flex-col min-h-screen bg-background">
        <section className="w-full py-12 md:py-20 lg:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Terms and Conditions - Moradabads User Agreement
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Read our terms and conditions to understand the rules and regulations for using the Moradabads platform and services.
              </p>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link to="/privacy" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Privacy Policy</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/about" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">About Us</Link>
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
                  <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing or using Moradabads ("the Service"), you agree to be bound by these Terms 
                    and Conditions. If you disagree with any part of these terms, you may not access the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Use License</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Permission is granted to temporarily access the materials on Moradabads for personal, 
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer 
                    of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or for any public display</li>
                    <li>Attempt to reverse engineer any software contained on the website</li>
                    <li>Remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When you create an account with us, you must provide information that is accurate, 
                    complete, and current at all times. You are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Maintaining the security of your account and password</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree not to use the Service:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>In any way that violates any applicable law or regulation</li>
                    <li>To transmit any malicious code or harmful content</li>
                    <li>To impersonate or attempt to impersonate another user or entity</li>
                    <li>To engage in any automated use of the system</li>
                    <li>To interfere with or disrupt the Service or servers</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Service and its original content, features, and functionality are owned by Moradabads 
                    and are protected by international copyright, trademark, patent, trade secret, and other 
                    intellectual property laws.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">User Content</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our Service may allow you to post, link, store, share, and otherwise make available 
                    certain information, text, or other material. You are responsible for the content that 
                    you post on or through the Service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials on Moradabads are provided on an 'as is' basis. Moradabads makes no 
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties 
                    including, without limitation, implied warranties or conditions of merchantability, 
                    fitness for a particular purpose, or non-infringement of intellectual property or other 
                    violation of rights.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Limitations</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    In no event shall Moradabads or its suppliers be liable for any damages (including, 
                    without limitation, damages for loss of data or profit, or due to business interruption) 
                    arising out of the use or inability to use the materials on Moradabads, even if 
                    Moradabads or a Moradabads authorized representative has been notified orally or in writing 
                    of the possibility of such damage.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Accuracy of Materials</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The materials appearing on Moradabads could include technical, typographical, or 
                    photographic errors. Moradabads does not warrant that any of the materials on its 
                    website are accurate, complete, or current.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Links</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Moradabads has not reviewed all of the sites linked to its website and is not 
                    responsible for the contents of any such linked site. The inclusion of any link does 
                    not imply endorsement by Moradabads of the site.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Modifications</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Moradabads may revise these terms of service for its website at any time without notice. 
                    By using this website you are agreeing to be bound by the then current version of these 
                    terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with applicable 
                    laws, and you irrevocably submit to the exclusive jurisdiction of the courts in that 
                    state or location.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms and Conditions, please contact us at 
                    <Link to="/contact" className="text-primary hover:underline ml-1 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">support@moradabads.com</Link> 
                    or visit our <Link to="/contact" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">contact page</Link>. 
                    For more information about our platform, check out our <Link to="/about" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">About page</Link> or 
                    browse our <Link to="/articles" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-1">learning resources</Link>.
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

