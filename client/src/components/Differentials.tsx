import { Zap, Shield, Users, BookOpen } from "lucide-react";

const differentials = [
  {
    icon: Zap,
    title: "Agilidade",
    description: "Respostas rápidas e soluções eficientes para suas demandas jurídicas."
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Histórico comprovado de sucesso e ética profissional inabalável."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada cliente recebe atenção exclusiva e soluções sob medida."
  },
  {
    icon: BookOpen,
    title: "Expertise Especializada",
    description: "Conhecimento profundo em direito empresarial e trabalhista."
  }
];

export default function Differentials() {
  return (
    <section className="py-20 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-differentials-title">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto" data-testid="text-differentials-description">
            O que nos torna únicos na prestação de serviços jurídicos empresariais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((differential, index) => {
            const IconComponent = differential.icon;
            return (
              <div
                key={differential.title}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                data-testid={`card-differential-${index}`}
              >
                <div className="w-20 h-20 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-golden/20 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-golden" />
                </div>
                
                <h3 className="font-serif text-xl font-bold mb-3 text-white" data-testid={`text-differential-title-${index}`}>
                  {differential.title}
                </h3>
                
                <p className="text-light-gray" data-testid={`text-differential-description-${index}`}>
                  {differential.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
