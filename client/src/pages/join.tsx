import { useState } from 'react';
import Head from 'next/head';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    track: '',
    experience: '',
    motivation: '',
    portfolio: '',
    github: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mykpawbo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Club Membership Application: ${formData.name}`,
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <>
        <Head>
          <title>Application Submitted | Web Application Development Club</title>
        </Head>
        <section className="min-h-screen flex items-center justify-center bg-secondary-50 pt-20">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-secondary-900 mb-4">
                Application Submitted Successfully!
              </h1>
              <p className="text-xl text-secondary-600 mb-8">
                Thank you for your interest in joining the Web Application Development Club. Our team will review your application and get back to you within 3-5 business days.
              </p>
              <div className="bg-white rounded-2xl p-8 shadow-lg text-left">
                <h3 className="font-semibold text-secondary-900 mb-4">What's Next?</h3>
                <ol className="space-y-3 text-secondary-600">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm flex-shrink-0">1</span>
                    <span>Our team will review your application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm flex-shrink-0">2</span>
                    <span>You may be invited for a brief interaction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm flex-shrink-0">3</span>
                    <span>Upon acceptance, you'll receive a welcome email with next steps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-semibold text-sm flex-shrink-0">4</span>
                    <span>Join our onboarding session and start your journey!</span>
                  </li>
                </ol>
              </div>
              <a href="/" className="inline-flex items-center gap-2 mt-8 text-primary-600 hover:text-primary-700 font-medium">
                ← Back to Home
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Join the Club | Web Application Development Club</title>
        <meta name="description" content="Apply to join the Web Application Development Club." />
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
              Join Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Become a <span className="text-accent-200">Member</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Join our community of passionate developers and start your journey 
              towards becoming an industry-ready web developer.
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-secondary-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-secondary-900 mb-2">
                  Application Form
                </h2>
                <p className="text-secondary-500">
                  Fill out the form below to apply for membership
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Info */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4 pb-2 border-b border-secondary-100">
                    Personal Information
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Branch *
                      </label>
                      <select
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Branch</option>
                        <option value="cs">Computer Science (CS)</option>
                        <option value="it">Information Technology (IT)</option>
                        <option value="aids">AI & Data Science (AIDS)</option>
                        <option value="entc">Electronics & Telecom (ENTC)</option>
                        <option value="electrical">Electrical</option>
                        <option value="instrumentation">Instrumentation</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Academic Info */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4 pb-2 border-b border-secondary-100">
                    Academic & Experience
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Current Year *
                      </label>
                      <select
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Final Year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Preferred Track *
                      </label>
                      <select
                        name="track"
                        required
                        value={formData.track}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Track</option>
                        <option value="developer">Developer Track</option>
                        <option value="design">Design Track</option>
                        <option value="management">Management Track</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-secondary-700 mb-2">
                      Programming Experience Level *
                    </label>
                    <select
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                    >
                      <option value="">Select Experience Level</option>
                      <option value="beginner">Beginner - Just starting out</option>
                      <option value="intermediate">Intermediate - Built some projects</option>
                      <option value="advanced">Advanced - Experienced developer</option>
                    </select>
                  </div>
                </div>

                {/* Additional Info */}
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4 pb-2 border-b border-secondary-100">
                    Additional Information
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Why do you want to join Web Application Development Club? *
                      </label>
                      <textarea
                        name="motivation"
                        required
                        rows={4}
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all resize-none placeholder:text-secondary-400"
                        placeholder="Tell us about your motivation and what you hope to achieve..."
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Portfolio URL (optional)
                        </label>
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          GitHub Profile (optional)
                        </label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="https://github.com/username"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-6">
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
                        Submitting Application...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Submit Application
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </button>
                  <p className="text-center text-sm text-secondary-500 mt-4">
                    By submitting, you agree to our terms and conditions.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
