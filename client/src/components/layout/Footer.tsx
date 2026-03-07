import Link from 'next/link';
import { 
  Globe, 
  Mail, 
  MapPin
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Events', href: '/events' },
  { name: 'Team', href: '/team' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center space-x-3 group mb-5">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">
                WAD Club
              </span>
            </Link>
            <p className="text-secondary-400 text-sm leading-relaxed">
              Web Application Development Club at AISSMS IOIT, Pune. Building the next generation of web developers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:text-right">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 md:justify-end text-sm text-secondary-400">
                <MapPin className="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>AISSMS IOIT, Kennedy Road,<br />Pune - 411001, Maharashtra</span>
              </div>
              <a 
                href="mailto:info.wadclub@gmail.com" 
                className="flex items-center gap-2 text-secondary-400 hover:text-primary-400 transition-colors text-sm md:justify-end"
              >
                <Mail className="w-4 h-4 text-primary-400" />
                <span>info.wadclub@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-secondary-500">
            <p>
              © {currentYear} Web Application Development Club. All rights reserved.
            </p>
            <p className="text-secondary-400">
              Made by{' '}
              <a 
                href="https://www.linkedin.com/in/pritamrangari/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 font-medium hover:text-primary-300 hover:underline transition-colors"
              >
                Pritam Rangari
              </a>
              {' '}&{' '}
              <a 
                href="https://www.linkedin.com/in/amolwaghmare05/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 font-medium hover:text-primary-300 hover:underline transition-colors"
              >
                Amol Waghmare
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
