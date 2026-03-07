import { Code, Users, Calendar, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Code,
    value: '7+',
    label: 'Live Projects',
    description: 'Student-built web applications',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Active Members',
    description: 'Passionate developers & designers',
  },
  {
    icon: Calendar,
    value: '20+',
    label: 'Events Hosted',
    description: 'Workshops, hackathons & talks',
  },
  {
    icon: Trophy,
    value: '15+',
    label: 'Awards Won',
    description: 'In various tech competitions',
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 gradient-bg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
