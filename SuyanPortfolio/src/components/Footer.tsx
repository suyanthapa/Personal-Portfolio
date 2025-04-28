import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="Footer">
      {/* Top Section */}
      <div className="bg-pink-100 text-black text-center p-10">
        <h1 className="text-4xl font-extrabold">Let's make something great together.</h1>
        <p className="mt-6 text-lg font-semibold">
          Have a project you would like to discuss?{' '}
          <span className="underline cursor-pointer hover:text-pink-600">Get in touch</span>
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#0a2340] text-white text-center p-8 flex flex-col gap-6">
        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://www.facebook.com/suyan.thapa.2025/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/suyantm_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/suyan-thapa-8b6895291/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaLinkedin />
          </a>
          <a href="https://github.com/suyanthapa" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaGithub />
          </a>
        </div>
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
