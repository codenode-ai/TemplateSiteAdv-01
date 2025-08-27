# Template de Site Institucional

Template para criação de websites institucionais modernos e responsivos.

## Descrição

Este projeto é um template de site institucional desenvolvido com tecnologias modernas como React, Vite, TypeScript e TailwindCSS. Ele foi criado para facilitar a construção de websites profissionais com uma aparência limpa e funcional.

## Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm (geralmente vem com o Node.js)

## Instalação

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd TemplateSiteAdv-01
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Executando o Projeto Localmente

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta indicada no terminal).

## Construção para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos construídos estarão disponíveis no diretório `dist`.

## Implantação na Vercel

O projeto está configurado para implantação fácil na plataforma [Vercel](https://vercel.com/):

1. Faça login na sua conta Vercel.
2. Crie um novo projeto e conecte-o ao seu repositório Git.
3. A Vercel detectará automaticamente as configurações do Vite e fará o deploy do seu site.

## Estrutura do Projeto

```
src/
  ├── components/       # Componentes reutilizáveis
  ├── pages/            # Páginas da aplicação
  ├── assets/           # Imagens, ícones e outros recursos
  ├── styles/           # Arquivos CSS/Tailwind personalizados
  ├── App.tsx           # Componente principal da aplicação
  └── main.tsx          # Ponto de entrada da aplicação

public/
  └── favicon.ico       # Ícone do site

index.html              # Ponto de entrada HTML
vite.config.ts          # Configuração do Vite
tailwind.config.ts      # Configuração do TailwindCSS
tsconfig.json           # Configuração do TypeScript
```

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue neste repositório.