import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-gradient-to-r from-transparent via-[#3F2876] to-[#3F2876] p-4 lg:px-16 flex justify-between items-center w-full fixed top-0 z-50 h-32 md:h-40 shadow-md">
      <a href="/" className="flex items-center">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg flex items-center justify-center overflow-hidden absolute -bottom-16 left-16">
          <img
            src="/img/jlheader.webp"
            alt="Jimmy Lalin"
            className="object-cover w-full h-full"
          />
        </div>
      </a>

      <h1 className="hidden md:block text-4xl md:text-5xl font-bold bg-gradient-to-r from-black to-[#D1BB34] text-transparent bg-clip-text tracking-widest absolute left-1/2 transform -translate-x-1/2">
        JIMMY LALIN
      </h1>

      <nav className="hidden md:flex space-x-4 text-sm">
        <ul className="flex space-x-4">
          <li>
            <a
              href="/"
              className="bg-black text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="/combat"
              className="bg-black text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
            >
              Combats
            </a>
          </li>
          <li>
            <a
              href="/biographie"
              className="bg-black text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
            >
              Biographie
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="bg-black text-secondary px-4 py-2 rounded-lg hover:bg-secondary hover:text-black transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* MENU BURGER MOBILE */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* NAVIGATION MOBILE + ANIMATION */}
      <nav
        className={`absolute top-full right-4 w-2/3 bg-black text-white flex flex-col space-y-4 py-6 px-8 shadow-md md:hidden rounded-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <h1 className="text-center text-2xl font-bold bg-gradient-to-r from-[#3F2876] to-[#FFD700] text-transparent bg-clip-text tracking-wide">
          JIMMY LALIN
        </h1>
        <a href="/" className="text-center hover:text-[#D1BB34] transition">
          Accueil
        </a>
        <a
          href="/combat"
          className="text-center hover:text-[#D1BB34] transition"
        >
          Combats
        </a>
        <a
          href="/biographie"
          className="text-center hover:text-[#D1BB34] transition"
        >
          Biographie
        </a>
        <a
          href="/contact"
          className="text-center hover:text-[#D1BB34] transition"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
