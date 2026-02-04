import Head from 'next/head';
import { Globe, Users, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'IOIT Timetable & Attendance Tracker',
    url: 'https://ioit-tt.netlify.app/',
    team: [
      { name: 'Swaroop Patil', role: 'Developer' },
      { name: 'Ashish Kharde', role: 'Contributor' },
    ],
    description: 'A minimalist timetable and attendance tracker designed for quick daily use. It provides today and week views, attendance tracking via a calendar, keyboard shortcuts, and offline-first storage using localStorage, with no backend or frameworks.',
    experience: 'The project focused on simplicity, performance, and clean UI. Building without frameworks improved understanding of core JavaScript, browser APIs, and efficient state management.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    title: 'AI Graveyard',
    url: 'https://ai-graveyard.netlify.app/',
    team: [
      { name: 'Swaroop Patil', role: 'Developer' },
    ],
    description: 'AI Graveyard is a curated collection showcasing failed or abandoned AI projects. The website presents these projects in a simple, readable format to highlight common mistakes, overhyped ideas, and lessons learned in AI development.',
    experience: 'The focus was on content clarity and presentation rather than complex functionality. The project helped improve layout design, content structuring, and the ability to communicate technical failures clearly and honestly.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    id: 3,
    title: 'Jeevan Utsav',
    url: 'https://jeevan-utsav-web.vercel.app/',
    team: [
      { name: 'Swaroop Patil', role: 'Developer' },
      { name: 'Bhumi Shinde', role: 'Contributor' },
    ],
    description: 'Jeevan Utsav is a community service project website aimed at promoting social initiatives and community participation through clear presentation of events and objectives.',
    experience: 'The project focused on accessibility and clear communication. It strengthened skills in designing interfaces that align with social impact goals.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 4,
    title: 'Devrai',
    url: 'https://devrai-web.vercel.app/',
    team: [
      { name: 'Sarvesh Kolte', role: 'Developer' },
    ],
    description: 'Devrai is a community service website focused on environmental awareness and social responsibility, serving as an informational platform for initiatives and outreach.',
    experience: 'The development emphasized clean design and usability for public audiences, reinforcing the importance of clarity in community-oriented platforms.',
    color: 'from-orange-500 to-yellow-400',
  },
  {
    id: 5,
    title: 'Sahabhag',
    url: 'https://sahabhag-web.vercel.app/',
    team: [
      { name: 'Swaroop Patil', role: 'Developer' },
    ],
    description: 'Sahabhag is a volunteer–education matching platform connecting volunteers with educational institutes across India to support learning and outreach initiatives.',
    experience: 'This project involved designing clear user flows for a purpose-driven platform and strengthened skills in scalable frontend structure and real-world problem solving.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    id: 6,
    title: 'MLSA IOIT',
    url: 'https://mlsa-ioit.vercel.app/',
    team: [
      { name: 'Pritam Rangari', role: 'Developer' },
      { name: 'Amol Waghmare', role: 'Contributor' },
      { name: 'Niraj Shevade', role: 'Contributor' },
    ],
    description: 'mlsa-ioit is the website that connects student with the microsoft.',
    experience: 'Developing the MLSA website was a hands-on learning experience that strengthened my skills in web development, teamwork, and real-world problem solving.',
    color: 'from-teal-500 to-cyan-400',
  },
  {
    id: 7,
    title: 'Philants',
    url: 'https://philants.netlify.app/',
    team: [
      { name: 'Anushka Gaikwad', role: 'Developer' },
      { name: 'Sarthak Deochake', role: 'Developer' },
      { name: 'Akshat Bhosale', role: 'Developer' },
      { name: 'Ashish Kharde', role: 'Developer' },
      { name: 'Chinmay Nakwa', role: 'Developer' },
      { name: 'Swaroop Patil', role: 'Developer' },
    ],
    description: 'Philants is a community-focused platform designed to connect philanthropic initiatives with volunteers and supporters.',
    experience: 'This project enhanced collaboration skills and emphasized the importance of teamwork in building impactful web applications.',
    color: 'from-rose-500 to-pink-400',
  },
];

export default function EventsPage() {
  return (
    <>
      <Head>
        <title>Projects | Web Application Development Club</title>
        <meta name="description" content="Explore the projects built by our club members." />
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
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Built by <span className="text-accent-200">Students</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Explore the websites and applications created by our talented club members 
              through hands-on learning and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-3 bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  {/* Title & Link */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-secondary-900">
                      {project.title}
                    </h3>
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Team Members */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.team.map((member, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-100 text-secondary-700 rounded-full text-sm">
                        <Users className="w-3.5 h-3.5" />
                        {member.name} <span className="text-secondary-400">• {member.role}</span>
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Experience */}
                  <div className="p-4 bg-secondary-50 rounded-xl border-l-4 border-primary-500">
                    <p className="text-sm font-medium text-secondary-900 mb-1">Development Experience</p>
                    <p className="text-sm text-secondary-600">
                      {project.experience}
                    </p>
                  </div>

                  {/* Visit Button */}
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 w-full btn-primary inline-flex items-center justify-center"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
