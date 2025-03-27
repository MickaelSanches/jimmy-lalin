const Footer = () => {
    return (
      <footer className="bg-gradient-to-r from-[#3F2876] via-[#2A1B56] to-transparent py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-around text-center md:text-left">
            
            {/* Section Entreprise */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-secondary text-lg font-bold mb-4">Jimmy Lalin</h3>
              <ul>
                <li>
                  <a href="/legalpage" className="text-white hover:text-[#D1BB34] transition">
                    Conditions d'utilisation & Politique de confidentialité
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:text-[#D1BB34] transition">
                    Nous contacter
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Section Ressources */}
            <div className="mb-8 md:mb-0">
              <h3 className="text-secondary text-lg font-bold mb-4">Ressources</h3>
              <ul>
                <li>
                  <a href="/faq" className="text-white hover:text-secondary transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Section Réseaux Sociaux */}
            <div className="mb-8 md:mb-0 text-center">
              <h3 className="text-secondary text-lg font-bold mb-4">Suivez-moi</h3>
              <ul className="flex justify-center space-x-4">
                <li>
                  <a href="https://www.instagram.com/jimmylalin/" target="_blank" rel="noopener noreferrer" className="text-white">
                    <img src="/icons/insta.webp" alt="Logo Instagram" className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Section Logo */}
            <div className="text-white flex justify-center md:justify-start items-center">
              <a href="#" className="text-white">
                <img src="/img/JL.webp" alt="Logo" className="w-32 h-32 rounded-full" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  