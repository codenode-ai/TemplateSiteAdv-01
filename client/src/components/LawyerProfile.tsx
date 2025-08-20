export default function LawyerProfile() {
  return (
    <section id="advogado" className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-lawyer-title">
              O Advogado
            </h2>
            
            <h3 className="font-serif text-2xl font-semibold mb-4 text-white" data-testid="text-lawyer-name">
              Dr. Valter José Rezende
            </h3>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed" data-testid="text-lawyer-bio-1">
              Advogado especialista em Direito Empresarial e Trabalhista, com mais de 15 anos de experiência na advocacia. Graduado em Direito pela Universidade Federal, com pós-graduação em Direito Empresarial e MBA em Gestão Jurídica.
            </p>
            
            <p className="text-lg text-light-gray mb-6 leading-relaxed" data-testid="text-lawyer-bio-2">
              Reconhecido por sua atuação estratégica e resultados expressivos na defesa dos interesses empresariais, Dr. Vilmondes combina conhecimento técnico profundo com uma abordagem humanizada no atendimento aos clientes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-graphite p-6 rounded-lg" data-testid="card-education">
                <h4 className="font-semibold text-golden mb-2">Formação Acadêmica</h4>
                <ul className="text-light-gray space-y-1 text-sm">
                  <li>• Graduação em Direito - UFSC</li>
                  <li>• Pós-graduação em Direito Empresarial</li>
                  <li>• MBA em Gestão Jurídica</li>
                </ul>
              </div>
              
              <div className="bg-graphite p-6 rounded-lg" data-testid="card-specializations">
                <h4 className="font-semibold text-golden mb-2">Especializações</h4>
                <ul className="text-light-gray space-y-1 text-sm">
                  <li>• Direito Empresarial</li>
                  <li>• Direito Trabalhista</li>
                  <li>• Compliance Jurídico</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-oab">
                OAB/SC 12345
              </span>
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-experience">
                15+ Anos de Experiência
              </span>
              <span className="px-4 py-2 bg-golden/10 text-golden rounded-full text-sm border border-golden/20" data-testid="badge-cases">
                200+ Casos Bem-sucedidos
              </span>
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group mb-8">
              <img
                src="https://i.ibb.co/nNFVk2Jj/Dr-Valter-Jos-Rezende.png"
                alt="Dr. Vilmondes José da Rosa - Advogado"
                className="rounded-xl shadow-2xl w-full h-auto group-hover:scale-105 transition-transform duration-500"
                data-testid="img-lawyer-portrait"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-golden transition-all duration-500"></div>
              
              {/* Achievements Badge - positioned on the image */}
              <div className="absolute -bottom-4 -right-4 bg-dark-gray p-4 rounded-xl border border-golden/20 shadow-2xl" data-testid="card-achievement">
                <div className="text-center">
                  <div className="text-2xl font-bold text-golden">15+</div>
                  <div className="text-xs text-light-gray">Anos de</div>
                  <div className="text-xs text-light-gray">Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
