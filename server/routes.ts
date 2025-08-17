import type { Express } from "express";
import { createServer, type Server } from "http";

interface ContactForm {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  area: string;
  mensagem: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const formData: ContactForm = req.body;
      
      // Basic validation
      if (!formData.nome || !formData.email || !formData.mensagem) {
        return res.status(400).json({ 
          message: "Nome, e-mail e mensagem são obrigatórios" 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        return res.status(400).json({ 
          message: "Por favor, insira um e-mail válido" 
        });
      }

      // Here you would typically integrate with an email service
      // For now, we'll just log the submission and return success
      console.log("Contact form submission:", {
        nome: formData.nome,
        empresa: formData.empresa || "Não informado",
        email: formData.email,
        telefone: formData.telefone || "Não informado",
        area: formData.area || "Não especificada",
        mensagem: formData.mensagem,
        timestamp: new Date().toISOString()
      });

      // In a real application, you would send an email here using a service like:
      // - Nodemailer with SMTP
      // - SendGrid
      // - AWS SES
      // - Resend
      // 
      // Example with nodemailer (commented out):
      // const transporter = nodemailer.createTransporter({...});
      // await transporter.sendMail({
      //   from: '"Website Contact" <noreply@vjradvocacia.com.br>',
      //   to: 'contato@vjradvocacia.com.br',
      //   subject: `Nova mensagem do site - ${formData.nome}`,
      //   html: `
      //     <h2>Nova mensagem do formulário de contato</h2>
      //     <p><strong>Nome:</strong> ${formData.nome}</p>
      //     <p><strong>Empresa:</strong> ${formData.empresa || 'Não informado'}</p>
      //     <p><strong>E-mail:</strong> ${formData.email}</p>
      //     <p><strong>Telefone:</strong> ${formData.telefone || 'Não informado'}</p>
      //     <p><strong>Área de interesse:</strong> ${formData.area || 'Não especificada'}</p>
      //     <p><strong>Mensagem:</strong></p>
      //     <p>${formData.mensagem.replace(/\n/g, '<br>')}</p>
      //   `
      // });

      res.status(200).json({ 
        message: "Mensagem enviada com sucesso! Entraremos em contato em breve." 
      });

    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Erro interno do servidor. Tente novamente mais tarde." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
