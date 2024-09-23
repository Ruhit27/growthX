import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-medium">
            growth<span className="text-blue-600 text-3xl md:text-4xl">X</span>
          </h1>
          <p className="mt-4 text-gray-400">
            We help your business grow with the best SEO and digital marketing
            strategies tailored to your needs.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold">Our Services</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                SEO Optimization
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Content Marketing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                PPC Campaigns
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Social Media Management
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Web Design & Development
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <FaMapMarkerAlt className="inline-block mr-2" /> 123 Digital Road,
              City, Country
            </li>
            <li>
              <FaPhoneAlt className="inline-block mr-2" /> +123 456 7890
            </li>
            <li>
              <FaEnvelope className="inline-block mr-2" /> contact@growthx.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="mt-4 flex">
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white mr-4">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} growthX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
