import { Target, Lightbulb, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To foster a community of passionate developers who create impactful web solutions while learning cutting-edge technologies.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace new technologies and methodologies, encouraging members to experiment and push the boundaries of web development.',
  },
  {
    icon: Users,
    title: 'Collaborative Learning',
    description: 'Through workshops, hackathons, and pair programming sessions, we learn together and grow as a community.',
  },
  {
    icon: Award,
    title: 'Industry Ready',
    description: 'Our projects follow industry standards, preparing members for real-world challenges and career opportunities.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="section-heading mt-3">
            Shaping the Future of
            <span className="gradient-text"> Web Development</span>
          </h2>
          <p className="section-subheading mx-auto mt-4">
            The Web Application Development Club at IOIT is a student-driven initiative 
            dedicated to nurturing the next generation of web developers and digital innovators.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-4xl font-bold text-white">WAD</span>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-2">Web Application Development</h3>
                  <p className="text-secondary-600">Since 2020</p>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-200 rounded-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <p className="text-lg text-secondary-700 leading-relaxed">
              Founded with a vision to bridge the gap between academic learning and 
              industry requirements, the Web Application Development Club has grown into a thriving ecosystem 
              of developers, designers, and tech enthusiasts.
            </p>
            <p className="text-lg text-secondary-700 leading-relaxed">
              Our members work on real-world projects, participate in hackathons, 
              and engage with industry professionals to stay ahead of the curve. 
              From beginners to advanced developers, we provide a supportive 
              environment for everyone to grow.
            </p>
            <div className="pt-4">
              <h4 className="text-xl font-bold text-secondary-900 mb-4">What We Offer:</h4>
              <ul className="space-y-3">
                {['Hands-on project experience', 'Weekly coding workshops', 'Industry mentorship programs', 'Hackathon participation', 'Networking opportunities'].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    <span className="text-secondary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-secondary-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <feature.icon className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
