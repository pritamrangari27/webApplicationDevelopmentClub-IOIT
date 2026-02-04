import { useState } from 'react';
import Head from 'next/head';
import { CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function JoinPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    branch: '',
    year: '',
    division: '',
    motivation: '',
    linkedin: '',
    github: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS Configuration
      const serviceId = 'service_ixgszfs';
      const adminTemplateId = 'template_gjupefu';
      const autoReplyTemplateId = 'template_9w8ppaa';
      const publicKey = 'RA-0v0dIP3b3MhmJ9';

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        phone: formData.phone,
        branch: formData.branch,
        year: formData.year,
        division: formData.division,
        motivation: formData.motivation,
        linkedin: formData.linkedin || 'Not provided',
        github: formData.github || 'Not provided',
        to_email: 'info.wadclub@gmail.com',
      };

      // Send admin notification
      await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);
      
      // Send auto-reply to user
      await emailjs.send(serviceId, autoReplyTemplateId, templateParams, publicKey);
      
      // Save to Google Sheets
      const googleSheetsUrl = 'https://script.google.com/macros/s/AKfycbzD4T_TF0-ZVFD6bxYgXNCXaLoZuKcF9cCzEUHU7RKGmL7uLigBYd0gVzlMKxIvW12Z/exec';
      
      // Create form data for Google Sheets
      const formDataForSheets = new FormData();
      formDataForSheets.append('user_name', formData.name);
      formDataForSheets.append('user_email', formData.email);
      formDataForSheets.append('phone', formData.phone);
      formDataForSheets.append('branch', formData.branch);
      formDataForSheets.append('year', formData.year);
      formDataForSheets.append('division', formData.division);
      formDataForSheets.append('linkedin', formData.linkedin || 'Not provided');
      formDataForSheets.append('github', formData.github || 'Not provided');
      
      fetch(googleSheetsUrl, {
        method: 'POST',
        body: formDataForSheets,
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to submit application. Please try again.');
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
        <section className="min-h-screen flex items-center justify-center gradient-bg pt-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Success Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-12 text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    Application Submitted Successfully!
                  </h1>
                  <p className="text-green-50 text-lg">
                    Welcome to the journey of becoming a club member
                  </p>
                </div>

                {/* Content */}
                <div className="px-8 py-10">
                  <div className="text-center mb-8">
                    <p className="text-lg text-secondary-700 leading-relaxed">
                      Thank you for your interest in joining the <span className="font-semibold text-primary-600">Web Application Development Club</span>. Our team will carefully review your application and get back to you within <span className="font-semibold">3-5 business days</span>.
                    </p>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-bold text-secondary-900 mb-6 flex items-center gap-2">
                      <span className="w-8 h-8 bg-primary-600 text-white rounded-lg flex items-center justify-center text-sm">📋</span>
                      What Happens Next?
                    </h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">1</div>
                        <div className="pt-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">Application Review</h4>
                          <p className="text-secondary-600 text-sm">Our team will carefully evaluate your application and qualifications</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">2</div>
                        <div className="pt-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">Interview (If Required)</h4>
                          <p className="text-secondary-600 text-sm">You may be invited for a brief interaction to learn more about you</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">3</div>
                        <div className="pt-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">Acceptance Notification</h4>
                          <p className="text-secondary-600 text-sm">Upon acceptance, you'll receive a welcome email with next steps</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">4</div>
                        <div className="pt-1">
                          <h4 className="font-semibold text-secondary-900 mb-1">Onboarding Session</h4>
                          <p className="text-secondary-600 text-sm">Join our onboarding session and officially start your journey with us!</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="/" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg hover:shadow-xl"
                    >
                      ← Back to Home
                    </a>
                    <a 
                      href="/events" 
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-50 transition-all"
                    >
                      Explore Projects
                    </a>
                  </div>
                </div>
              </div>
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
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="Enter Full Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="Enter Email Address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Branch
                      </label>
                      <select
                        name="branch"
                        required
                        value={formData.branch}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Branch</option>
                        <option value="CS">Computer Science (CS)</option>
                        <option value="IT">Information Technology (IT)</option>
                        <option value="AIDS">AI & Data Science (AIDS)</option>
                        <option value="ENTC">Electronics & Telecom (ENTC)</option>
                        <option value="ELECTRICAL">Electrical</option>
                        <option value="INSTRUMENTATION">Instrumentation</option>
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
                        Current Year
                      </label>
                      <select
                        name="year"
                        required
                        value={formData.year}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Year</option>
                        <option value="FIRST">First Year</option>
                        <option value="SECOND">Second Year</option>
                        <option value="THIRD">Third Year</option>
                        <option value="FOURTH">Final Year</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Division
                      </label>
                      <select
                        name="division"
                        required
                        value={formData.division}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all"
                      >
                        <option value="">Select Division</option>
                        <option value="A">Division A</option>
                        <option value="B">Division B</option>
                      </select>
                    </div>
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
                        Why do you want to join Web Application Development Club?
                      </label>
                      <textarea
                        name="motivation"
                        required
                        rows={4}
                        value={formData.motivation}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all resize-none placeholder:text-secondary-400"
                        placeholder="Enter your motivation and what you hope to achieve"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="Enter LinkedIn Profile URL"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          GitHub Profile
                        </label>
                        <input
                          type="url"
                          name="github"
                          value={formData.github}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-secondary-50 border-2 border-secondary-100 rounded-xl focus:outline-none focus:ring-0 focus:border-primary-500 focus:bg-white transition-all placeholder:text-secondary-400"
                          placeholder="Enter GitHub Profile URL"
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
