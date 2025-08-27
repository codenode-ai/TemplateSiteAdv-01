import { Shield, Users } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img
              src="https://i.ibb.co/RGMWh1Zh/Escrit-rio-Dr-Valter-Jos-Rezende.png"
              alt="Escritório moderno de advocacia"
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="img-office"
            />
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-about-title">
              Sobre o Escritório
            </h2>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed" data-testid="text-about-description">
              O escritório <strong className="text-white">Valter José Rezende – Advocacia Empresarial</strong> atua há mais de 15 anos no mercado jurídico, oferecendo soluções especializadas em direito empresarial e trabalhista.
            </p>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed">
              Nossa missão é proporcionar segurança jurídica e estratégias eficazes para empresas de todos os portes, garantindo o cumprimento das obrigações legais e a proteção dos interesses empresariais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center" data-testid="card-expertise">
                <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Expertise Comprovada</h3>
                  <p className="text-light-gray text-sm">Mais de 15 anos de experiência</p>
                </div>
              </div>
              
              <div className="flex items-center" data-testid="card-service">
                <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-golden" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Atendimento Personalizado</h3>
                  <p className="text-light-gray text-sm">Foco nas necessidades do cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
