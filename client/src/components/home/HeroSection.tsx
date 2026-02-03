import Link from 'next/link';
import { ArrowRight, Globe, Users, Rocket, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-800/50 to-primary-900/90" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative container-custom py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>Building the future of web technology</span>
            
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
            Web Application
            <span className="block mt-2 bg-gradient-to-r from-accent-300 to-accent-100 bg-clip-text text-transparent">
              Development Club
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Empowering students to build innovative web applications through 
            hands-on learning, collaborative projects, and industry-standard practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link href="/events" className="btn-primary bg-white text-primary-700 hover:bg-gray-100 shadow-xl">
              Explore Events
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/join" className="btn-outline border-white text-white hover:bg-white hover:text-primary-700">
              Join Our Club
            </Link>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Globe className="w-6 h-6 text-accent-300" />
              <span className="text-white font-medium">7+ Projects</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Users className="w-6 h-6 text-accent-300" />
              <span className="text-white font-medium">50+ Members</span>
            </div>
            <div className="flex items-center justify-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <Rocket className="w-6 h-6 text-accent-300" />
              <span className="text-white font-medium">20+ Events</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
