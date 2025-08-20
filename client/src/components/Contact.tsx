import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    area: "",
    mensagem: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.nome || !formData.email || !formData.mensagem) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha pelo menos nome, e-mail e mensagem.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pela sua mensagem! Entraremos em contato em breve.",
        });
        
        // Reset form
        setFormData({
          nome: "",
          empresa: "",
          email: "",
          telefone: "",
          area: "",
          mensagem: ""
        });
      } else {
        throw new Error("Falha ao enviar mensagem");
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar sua mensagem. Tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-graphite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-serif text-4xl font-bold mb-6 text-golden" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-xl text-light-gray max-w-3xl mx-auto" data-testid="text-contact-description">
            Estamos prontos para atender suas necessidades jurídicas. Entre em contato e solicite uma consulta
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="form-contact">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">Nome *</label>
                  <Input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    className="bg-dark-gray border-golden/20 text-white placeholder-light-gray focus:border-golden"
                    placeholder="Seu nome completo"
                    data-testid="input-nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">Empresa</label>
                  <Input
                    type="text"
                    value={formData.empresa}
                    onChange={(e) => handleInputChange("empresa", e.target.value)}
                    className="bg-dark-gray border-golden/20 text-white placeholder-light-gray focus:border-golden"
                    placeholder="Nome da empresa"
                    data-testid="input-empresa"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">E-mail *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-dark-gray border-golden/20 text-white placeholder-light-gray focus:border-golden"
                    placeholder="seu@email.com"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-light-gray mb-2">Telefone</label>
                  <Input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => handleInputChange("telefone", e.target.value)}
                    className="bg-dark-gray border-golden/20 text-white placeholder-light-gray focus:border-golden"
                    placeholder="(00) 00000-0000"
                    data-testid="input-telefone"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">Área de Interesse</label>
                <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
                  <SelectTrigger className="bg-dark-gray border-golden/20 text-white focus:border-golden" data-testid="select-area">
                    <SelectValue placeholder="Selecione uma área" />
                  </SelectTrigger>
                  <SelectContent className="bg-dark-gray border-golden/20">
                    <SelectItem value="empresarial">Direito Empresarial</SelectItem>
                    <SelectItem value="trabalhista">Direito Trabalhista</SelectItem>
                    <SelectItem value="contratos">Contratos e Negociações</SelectItem>
                    <SelectItem value="compliance">Compliance Jurídico</SelectItem>
                    <SelectItem value="tributario">Direito Tributário</SelectItem>
                    <SelectItem value="recuperacao">Recuperação Judicial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-light-gray mb-2">Mensagem *</label>
                <Textarea
                  rows={5}
                  value={formData.mensagem}
                  onChange={(e) => handleInputChange("mensagem", e.target.value)}
                  className="bg-dark-gray border-golden/20 text-white placeholder-light-gray focus:border-golden resize-none"
                  placeholder="Descreva sua necessidade jurídica ou dúvida..."
                  data-testid="textarea-mensagem"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-golden text-graphite font-semibold hover:bg-yellow-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="button-submit"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-dark-gray p-8 rounded-xl border border-golden/20" data-testid="card-contact-info">
              <h3 className="font-serif text-2xl font-bold mb-6 text-golden">Informações de Contato</h3>

              <div className="space-y-6">
                <div className="flex items-start" data-testid="contact-address">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Endereço</h4>
                    <p className="text-light-gray">
                      Av. Afonso Pena, 247, Sala 01<br />
                      Centro - Centralina-MG<br />
                      CEP: 88010-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-phone">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telefone</h4>
                    <p className="text-light-gray">
                      (34) 2222-3333<br />
                      (34) 99999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-email">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">E-mail</h4>
                    <p className="text-light-gray">
                      contato@vjradvocacia.com.br<br />
                      vilmondes@vjradvocacia.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start" data-testid="contact-hours">
                  <div className="w-12 h-12 bg-golden/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="w-6 h-6 text-golden" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Horário de Atendimento</h4>
                    <p className="text-light-gray">
                      Segunda a Sexta: 08:00 às 18:00<br />
                      Sábado: 08:00 às 12:00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-golden/20">
                <h4 className="font-semibold text-white mb-4">Nos siga nas redes sociais</h4>
                <div className="flex space-x-4" data-testid="social-links">
                  <a href="#" className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center text-golden hover:bg-golden hover:text-graphite transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center text-golden hover:bg-golden hover:text-graphite transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-golden/10 rounded-lg flex items-center justify-center text-golden hover:bg-golden hover:text-graphite transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
