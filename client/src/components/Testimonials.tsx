import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Eduardo Silva",
    position: "CEO - Silva & Associados Ltda.",
    content: "O Dr. Vilmondes transformou a gestão jurídica da nossa empresa. Sua expertise em direito empresarial e a rapidez na resolução de questões complexas nos deram a segurança que precisávamos para expandir nossos negócios. Recomendo sem hesitação.",
    rating: 5
  },
  {
    name: "Marina Oliveira Santos",
    position: "Diretora Jurídica - Tecnologia Avançada S.A.",
    content: "Trabalhar com o Dr. Vilmondes foi uma experiência excepcional. Ele demonstrou profundo conhecimento em compliance e nos ajudou a implementar políticas que fortaleceram nossa governança corporativa. Profissionalismo e qualidade incomparáveis.",
    rating: 5
  },
  {
    name: "Roberto Ferreira",
    position: "Proprietário - Construtora Ferreira & Cia",
    content: "O atendimento do Dr. Vilmondes superou todas as expectativas. Ele resolveu uma questão trabalhista complexa que estava comprometendo nossos projetos. Sua dedicação e expertise fizeram toda a diferença. Agora temos um parceiro jurídico de confiança.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-dark-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-testimonials-title">
            Depoimentos de Clientes
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto" data-testid="text-testimonials-description">
            A satisfação dos nossos clientes é o nosso maior indicador de sucesso
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Carousel */}
          <div className="overflow-hidden" data-testid="testimonials-carousel">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-graphite p-8 rounded-xl border border-golden/20 max-w-4xl mx-auto" data-testid={`testimonial-${index}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-golden/10 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-8 h-8 text-golden" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-4v-10h10z"/>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg" data-testid={`testimonial-name-${index}`}>
                          {testimonial.name}
                        </h4>
                        <p className="text-light-gray text-sm" data-testid={`testimonial-position-${index}`}>
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-light-gray text-lg leading-relaxed italic mb-4" data-testid={`testimonial-content-${index}`}>
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex text-golden">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <svg key={starIndex} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-golden/10 hover:bg-golden/20 border border-golden/20 rounded-full flex items-center justify-center text-golden hover:text-golden transition-all duration-300"
            data-testid="button-prev-testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-golden/10 hover:bg-golden/20 border border-golden/20 rounded-full flex items-center justify-center text-golden hover:text-golden transition-all duration-300"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2" data-testid="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-golden" : "bg-golden/30 hover:bg-golden"
                }`}
                data-testid={`dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
