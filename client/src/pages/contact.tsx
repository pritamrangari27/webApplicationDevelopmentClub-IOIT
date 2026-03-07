import { useState } from 'react';
import Head from 'next/head';
import { Mail, MapPin, Phone, Send, Clock, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree endpoint
      const response = await fetch('https://formspree.io/f/meezydjw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Formspree Error:', error);
      alert('Failed to send message. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Head>
        <title>Contact Us | Web Application Development Club</title>
        <meta name="description" content="Get in touch with the Web Application Development Club." />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent-300 font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Get in <span className="text-accent-200">Touch</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Have questions, suggestions, or want to collaborate? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                Contact Information
              </h2>
              <p className="text-secondary-600 mb-8">
                Reach out to us through any of the following channels. We typically respond within 24-48 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Address</h3>
                    <p className="text-secondary-600 text-sm">
                      AISSMS Institute of Information Technology,<br />
                      Kennedy Road, Near RTO,<br />
                      Pune - 411001, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                    <a href="mailto:info.wadclub@gmail.com" className="text-primary-600 hover:text-primary-700 text-sm">
                      info.wadclub@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Phone</h3>
                    <p className="text-secondary-600 text-sm">
                      +91 20 2612 8983
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Office Hours</h3>
                    <p className="text-secondary-600 text-sm">
                      Monday - Friday<br />
                      8:00 AM - 4:30 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-secondary-100">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-secondary-900 mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-secondary-500">We'd love to hear from you. Fill out the form below.</p>
                </div>

                {isSubmitted ? (
                  <div className="py-12">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <CheckCircle className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-secondary-900 mb-3">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-secondary-700 text-lg mb-6 leading-relaxed">
                          Thank you for reaching out to us. We appreciate you taking the time to contact the <span className="font-semibold text-primary-600">Web Application Development Club</span>.
                        </p>
                        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
                          <div className="flex items-center justify-center gap-3 text-secondary-600">
                            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className="text-left">
                              <p className="font-semibold text-secondary-900">Expected Response Time</p>
                              <p className="text-sm text-secondary-600">We typically respond within 24-48 hours</p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setIsSubmitted(false)}
                          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="Enter Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="Enter Email Address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="Enter Subject"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all resize-none placeholder:text-secondary-400"
                        placeholder="Enter your message here"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
