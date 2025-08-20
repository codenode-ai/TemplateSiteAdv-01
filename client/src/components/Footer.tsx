import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-dark-gray border-t border-golden/20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div data-testid="footer-company">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-serif font-bold text-golden mr-3">VJR</div>
              <div>
                <div className="text-lg font-serif font-bold text-white">Vilmondes José da Rosa</div>
                <div className="text-sm text-light-gray">Advocacia Empresarial</div>
              </div>
            </div>
            
            <p className="text-light-gray mb-4">
              Soluções jurídicas estratégicas para o sucesso do seu negócio com experiência e credibilidade.
            </p>
            
            <div className="text-light-gray text-sm">
              <p>OAB/SC 00000</p>
              <p>CNPJ: 00.000.000/0001-90</p>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-links">
            <h3 className="font-serif text-lg font-bold text-golden mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { href: "inicio", label: "Início" },
                { href: "sobre", label: "Sobre o Escritório" },
                { href: "areas", label: "Áreas de Atuação" },
                { href: "advogado", label: "O Advogado" },
                { href: "contato", label: "Contato" },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-light-gray hover:text-golden transition-colors duration-300"
                    data-testid={`footer-link-${item.href}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div data-testid="footer-services">
            <h3 className="font-serif text-lg font-bold text-golden mb-4">Serviços</h3>
            <ul className="space-y-2 text-light-gray">
              <li>Direito Empresarial</li>
              <li>Direito Trabalhista</li>
              <li>Contratos e Negociações</li>
              <li>Compliance Jurídico</li>
              <li>Direito Tributário</li>
              <li>Recuperação Judicial</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-testid="footer-contact">
            <h3 className="font-serif text-lg font-bold text-golden mb-4">Contato</h3>
            <div className="space-y-3 text-light-gray">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-golden mr-2 mt-1 flex-shrink-0" />
                <span>
                  Av. Afonso Pena, 247, Sala 01<br />
                  Centro - Centralina-MG
                </span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-golden mr-2" />
                <span>(34) 99900-7944</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-golden mr-2" />
                <span>contato@vjradvocacia.com.br</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-golden/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-light-gray text-sm mb-4 md:mb-0" data-testid="footer-copyright">
            © 2025 Vilmondes José da Rosa - Advocacia Empresarial.
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex space-x-6 text-light-gray text-sm" data-testid="footer-legal-links">
              <a href="#" className="hover:text-golden transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-golden transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-golden transition-colors duration-300">
                LGPD
              </a>
            </div>
            <div className="flex space-x-4" data-testid="footer-social-icons">
              <a href="#" className="text-light-gray hover:text-golden transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-light-gray hover:text-golden transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-light-gray hover:text-golden transition-colors duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
