import Head from 'next/head';
import Image from 'next/image';

const teamMembers = [
  // Faculty
  {
    id: 0,
    name: 'Dr. Reshma Totare',
    role: 'Faculty Co-ordinator',
    category: 'leadership',
    bio: 'Faculty coordinator guiding and mentoring the Web Application Development Club.',
    color: 'from-purple-600 to-purple-800',
     image:'/images/team/TotareMam.jpg',
  },
  // Leadership
  {
    id: 1,
    name: 'Ganesh Shejul',
    role: 'Advisor',
    category: 'leadership',
    bio: 'Guiding the club with academic excellence and industry insights.',
    color: 'from-slate-600 to-slate-800',
    image: '/images/team/Ganesh.jpeg',
  },
  {
    id: 2,
    name: 'Pritam Rangari',
    role: 'President',
    category: 'leadership',
    bio: 'Leading the Web Application Development Club with vision and passion for technology.',
    color: 'from-primary-600 to-primary-800',
    image: '/images/team/Pritam.jpg',
  },
  {
    id: 3,
    name: 'Amol Waghmare',
    role: 'Vice-President',
    category: 'leadership',
    bio: 'Supporting club initiatives and fostering innovation across all teams.',
    color: 'from-primary-500 to-accent-500',
    image: '/images/team/Amol.jpg',
  },
  
  // Event Team
  {
    id: 4,
    name: 'Prathmesh Bagbande',
    role: 'Head - Event Team',
    category: 'event',
    bio: 'Orchestrating memorable tech events, workshops, and hackathons.',
    color: 'from-orange-500 to-red-400',
    image: '/images/team/PrathmeshB.jpg',
  },
  {
    id: 5,
    name: 'Sahil Ghate',
    role: 'Joint Head - Event Team',
    category: 'event',
    bio: 'Co-leading event planning and seamless execution.',
    color: 'from-red-500 to-orange-400',
    image:'/images/team/Sahil.jpg',
  },
  
  // Tech Team
  {
    id: 6,
    name: 'Sarthak Deochake',
    role: 'Head - Tech Team',
    category: 'tech',
    bio: 'Driving technical excellence and innovation in web development.',
    color: 'from-blue-500 to-cyan-400',
    image:'/images/team/Sarthak.png',
  },
  {
    id: 7,
    name: 'Yash Inamdar',
    role: 'Joint Head - Tech Team',
    category: 'tech',
    bio: 'Building robust applications and mentoring developers.',
    color: 'from-cyan-500 to-blue-400',
     image:'/images/team/Yash.jpeg',
  },
  
  // Media Team
  {
    id: 8,
    name: 'Prathmesh Dawkar',
    role: 'Head - Media Team',
    category: 'media',
    bio: 'Creating stunning visuals and managing digital presence.',
    color: 'from-pink-500 to-rose-400',
    image: '/images/team/PrathmeshD.jpg',
  },
  
  // Documentation Team
  {
    id: 9,
    name: 'Sandesh Shinde',
    role: 'Head - Documentation Team',
    category: 'documentation',
    bio: 'Ensuring comprehensive documentation and knowledge management.',
    color: 'from-amber-500 to-orange-400',
    image: '/images/team/Sandesh.jpg',
  },
  {
    id: 10,
    name: 'Niraj Shevade',
    role: 'Joint Head - Documentation Team',
    category: 'documentation',
    bio: 'Maintaining records and creating technical documentation.',
    color: 'from-orange-500 to-amber-400',
    image: '/images/team/Niraj.jpg',
  },
];

export default function TeamPage() {

  return (
    <>
      <Head>
        <title>Our Team | Web Application Development Club</title>
        <meta name="description" content="Meet the dedicated team behind the Web Application Development Club." />
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
              Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
              Meet the <span className="text-accent-200">Innovators</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              A passionate group of student leaders and tech enthusiasts dedicated to 
              fostering innovation and excellence in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="card card-hover group"
              >
                {/* Avatar */}
                <div className={`h-52 bg-gradient-to-br ${member.color} relative overflow-hidden`}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-28 h-28 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-5xl font-bold text-white">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                  )}
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize">
                      {member.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium text-sm mt-1">
                    {member.role}
                  </p>
                  <p className="text-secondary-600 text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
