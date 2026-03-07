import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-12 md:p-16 lg:p-20">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-accent-400/20 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Join 50+ passionate developers</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build the Future
              <span className="block mt-2 text-accent-200">of Web Development?</span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the Web Application Development Club and be part of a community 
              that's shaping the digital landscape. Learn, build, and grow with us.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100 shadow-xl px-8 py-4 text-lg"
              >
                Join the Club
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary-700 px-8 py-4 text-lg"
              >
                Get in Touch
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Open for new members</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>No prior experience required</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Free to join</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
