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
        </div>
      </div>
    </footer>
  );
}
