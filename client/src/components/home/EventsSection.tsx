import Link from 'next/link';
import { ArrowRight, CalendarDays } from 'lucide-react';

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-400/10 rounded-full translate-y-1/2 translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
            <CalendarDays className="w-8 h-8 text-white" />
          </div>
          
          {/* Header */}
          <span className="text-accent-300 font-semibold text-sm uppercase tracking-wider">
            Events
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-3 mb-4">
            Upcoming Events
          </h2>
          
          {/* No Events Message */}
          <div className="mt-8 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            <p className="text-white/90 text-lg">
              No upcoming event details yet
            </p>
            <p className="text-white/60 text-sm mt-2">
              Stay tuned for announcements about our workshops, hackathons, and tech talks!
            </p>
          </div>
          
          {/* CTA Button */}
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-8 py-4 mt-8 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl"
          >
            View All Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
