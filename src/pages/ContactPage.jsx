import { useState } from "react"
import { Link } from "react-router-dom"
import SEO from "@/components/SEO"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react'
import { toast } from "sonner"
import emailjs from '@emailjs/browser'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Email.js configuration - these should be set in environment variables
    const serviceId = 'service_x4scqdq'
    const templateId = 'template_zpmprqd'
    const publicKey = 'T2vQJZfmq4dXRIFGQ'

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      toast.error('Email service is not configured. Please contact the administrator.')
      setIsSubmitting(false)
      return
    }

    try {
      // Initialize Email.js with public key
      emailjs.init(publicKey)

      // Send email using Email.js
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Moradabads Team',
        }
      )

      if (result.text === 'OK') {
        toast.success('Thank you for your message! We\'ll get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email.js error:', error)
      toast.error('Failed to send message. Please try again later or contact us directly at support@moradabads.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Moradabads. We'd love to hear from you - whether you have questions, feedback, or just want to say hello."
        keywords="contact, support, help, feedback, get in touch"
      />
      <div className="flex flex-col min-h-screen bg-background">
        <section className="w-full py-12 md:py-20 lg:py-24 border-b">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Contact Moradabads - Get in Touch With Us
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question or feedback? We'd love to hear from you. Whether you need support, want to share ideas, or are interested in joining our team, we're here to help.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link to="/about" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">About Us</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/careers" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Careers</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/articles" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Articles</Link>
                <span className="text-muted-foreground">•</span>
                <Link to="/editor" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1">Code Editor</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
            <div className="grid gap-8 md:gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Whether you have a question about our platform, need technical support, 
                    or want to share feedback, we're here to help. Before reaching out, you might find 
                    answers in our <Link to="/articles" className="text-primary hover:underline mx-1">helpful articles</Link> or 
                    explore our <Link to="/quizzes" className="text-primary hover:underline mx-1">interactive quizzes</Link> to 
                    learn more about what we offer.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Link to="/about" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">About Us</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/articles" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Articles</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/editor" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Code Editor</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/careers" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Careers</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/dsa" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">DSA Problems</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/interview" className="text-sm text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 rounded px-2 py-1 transition-all">Interview Prep</Link>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@moradabads.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Available worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

