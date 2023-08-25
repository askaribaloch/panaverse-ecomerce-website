import Link from 'next/link';
import { LogoText } from '../ui/logoText';
import { Facebook, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-12 relative mt-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p className="text-sm text-gray-500">
              Small, artisan label that offers a thoughtfully curated collection
              of high quality everyday essentials made.
            </p>
            <div className="mt-4">
              <div className="flex space-x-2">
                <Twitter className="w-6 h-6 text-gray-500" />
                <Facebook className="w-6 h-6 text-gray-500" />
                <Linkedin className="w-6 h-6 text-gray-500" />
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">Products</Link>
              </li>
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm text-gray-500">
              1234 Street, City, Country
              <br />
              Email: info@example.com
            </p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 flex justify-between items-center">
          <LogoText />
          <div className="text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Dine Market</p>
            <p>
              Created by.{' '}
              <span className="font-semibold">Askari Design Studio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
