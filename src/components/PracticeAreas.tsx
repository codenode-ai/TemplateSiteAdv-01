import { Building, Users, FileText, Shield, DollarSign, Scale } from "lucide-react";

const practiceAreas = [
  {
    icon: Building,
    title: "Direito Empresarial",
    description: "Consultoria jurídica para constituição, reorganização societária, contratos empresariais e governança corporativa.",
    services: [
      "Constituição de empresas",
      "Contratos empresariais",
      "Fusões e aquisições"
    ]
  },
  {
    icon: Users,
    title: "Direito Trabalhista",
    description: "Assessoria completa em relações trabalhistas, prevenção de passivos e defesa em ações judiciais.",
    services: [
      "Compliance trabalhista",
      "Defesa em ações judiciais",
      "Auditoria de folha de pagamento"
    ]
  },
  {
    icon: FileText,
    title: "Contratos e Negociações",
    description: "Elaboração e análise de contratos comerciais, negociações estratégicas e resolução de conflitos.",
    services: [
      "Contratos comerciais",
      "Mediação e arbitragem",
      "Recuperação de créditos"
    ]
  },
  {
    icon: Shield,
    title: "Compliance Jurídico",
    description: "Implementação de programas de compliance e adequação às normas regulamentares vigentes.",
    services: [
      "Programas de compliance",
      "Auditoria jurídica",
      "LGPD e proteção de dados"
    ]
  },
  {
    icon: DollarSign,
    title: "Direito Tributário",
    description: "Planejamento tributário estratégico e defesa em processos administrativos e judiciais fiscais.",
    services: [
      "Planejamento tributário",
      "Defesa fiscal",
      "Recuperação de tributos"
    ]
  },
  {
    icon: Scale,
    title: "Recuperação Judicial",
    description: "Assessoria em processos de recuperação judicial e extrajudicial para reestruturação empresarial.",
    services: [
      "Recuperação judicial",
      "Recuperação extrajudicial",
      "Reestruturação societária"
    ]
  }
];

export default function PracticeAreas() {
  return (
    <section id="areas" className="py-20 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-areas-title">
            Áreas de Atuação
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto" data-testid="text-areas-description">
            Oferecemos soluções jurídicas completas e especializadas para atender todas as demandas do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={area.title}
                className="bg-dark-gray p-8 rounded-xl border border-golden/20 hover:border-golden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                data-testid={`card-area-${index}`}
              >
                <div className="w-16 h-16 bg-golden/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-golden/20 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-golden" />
                </div>
                
                <h3 className="font-serif text-2xl font-bold mb-4 text-white group-hover:text-golden transition-colors duration-300">
                  {area.title}
                </h3>
                
                <p className="text-light-gray leading-relaxed mb-4">
                  {area.description}
                </p>
                
                <ul className="text-light-gray space-y-2">
                  {area.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center" data-testid={`service-${index}-${serviceIndex}`}>
                      <svg className="w-4 h-4 text-golden mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
