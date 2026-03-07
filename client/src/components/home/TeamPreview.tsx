import Link from 'next/link';
import { ArrowRight, Users2 } from 'lucide-react';

export default function TeamPreview() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Decorative Visual */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Team illustration circles */}
              <div className="grid grid-cols-3 gap-4">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className={`aspect-square rounded-2xl flex items-center justify-center text-2xl font-bold text-white ${
                      i % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-400' :
                      i % 3 === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-400' :
                      'bg-gradient-to-br from-amber-500 to-orange-400'
                    } ${i % 2 === 0 ? 'translate-y-2' : '-translate-y-2'} shadow-lg hover:scale-105 transition-transform`}
                  >
                    <Users2 className="w-8 h-8 opacity-50" />
                  </div>
                ))}
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-secondary-100">
                <p className="text-3xl font-bold text-primary-600">15+</p>
                <p className="text-sm text-secondary-500">Team Members</p>
              </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-accent-500 font-semibold text-sm uppercase tracking-wider">
              Our Team
            </span>
            <h2 className="section-heading mt-3">
              Meet the <span className="gradient-text">Innovators</span>
            </h2>
            <p className="section-subheading mt-4">
              A dedicated team of student leaders and tech enthusiasts driving 
              innovation and excellence in web development.
            </p>
            
            {/* CTA Button */}
            <Link
              href="/team"
              className="btn-primary inline-flex mt-8"
            >
              View Full Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
