# 🌟 Portfolio Giancarlo Salomone

<div align="center">

![Portfolio Banner](https://img.shields.io/badge/Portfolio-Desenvolvedor%20Back%20End-00f0ff?style=for-the-badge&logo=react&logoColor=white)

**Portfolio profissional interativo com tema Dark Gamer Neon**

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.14-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

[🚀 Deploy](#deploy) | [📖 Documentação](#features)

</div>

---

## ✨ Features

### 🎨 Design & UX
- **🌈 Tema Dark Gamer Neon** com cores vibrantes (cyan, pink, purple)
- **🌓 Light/Dark Mode** com toggle e persistência no localStorage
- **✨ Animações suaves** com efeitos de glow, float e gradientes
- **🎭 Background animado** com grid neon dinâmico
- **🖱️ Custom cursors** (grab/grabbing) para interatividade
- **📱 100% Responsivo** otimizado para mobile, tablet e desktop

### 🎡 Navegação
- **📚 Carousel interativo** (Swiper) com 9 seções
- **👆 Drag & Swipe** para navegação fluida
- **⌨️ Suporte a teclado** e mousewheel
- **📊 Contador de slides** (Slide X/Y)
- **♿ Acessibilidade** com aria-labels

### 📄 Seções do Portfolio

#### 1. **Resumo** 
Apresentação profissional com destaques de stack e info cards

#### 2. **Projetos** 
Showcase de projetos com tech stack, links GitHub e demo

#### 3. **Habilidades Técnicas**
- Stack Principal (.NET, Python, React, Docker)
- IA & Automação (OpenAI, GitHub Copilot, LangChain)
- Databases (PostgreSQL, MongoDB, Redis)
- DevOps & Infra (Docker, RabbitMQ, Keycloak, OpenTelemetry)
- Ferramentas (Git, VS Code, Postman, Jira)

#### 4. **Experiência Profissional**
Timeline de experiências com bullets detalhados

#### 5. **Formação Acadêmica**
Informações de graduação e instituição

#### 6. **Treinamentos**
Lista de cursos em andamento com badges visuais

#### 7. **Galeria de Badges** 🆕
- Exibição visual de certificados/cursos
- **Filtros por categoria**: Todas, IA, Back-end, Cloud, Front-end
- Grid responsivo com placeholders 🏆
- Status "Em andamento" para cursos ativos

#### 8. **Certificados**
Lista de certificações conquistadas

#### 9. **Idiomas** 🆕
Cards visuais com bandeiras e níveis de proficiência
- 🇧🇷 Português - Nativo
- 🇺🇸 Inglês - Intermediário/Avançado (B2)
- 🇪🇸 Espanhol - Básico (A2)

#### 10. **Contato**
- 📧 Email com link direto
- 💬 WhatsApp integrado
- 🐙 GitHub profile
- 🔗 LinkedIn profile
- 📝 Formulário de contato (mailto)

### 🔧 Features Técnicas
- **SEO Completo**: Meta tags, Open Graph, Twitter Cards, Schema.org
- **Analytics**: Vercel Analytics integrado
- **Favicon customizado**: Gradiente neon cyan
- **Lazy loading**: Otimização de imagens
- **Deploy ready**: Configurações Vercel e Netlify incluídas

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Gian-UC/portfolio.git

# Entre no diretório
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173)

### Build para Produção

```bash
npm run build
npm run preview
```

---

## 📁 Estrutura do Projeto

```
portfolio/
├── public/
│   ├── badges/          # Imagens de badges (certificados)
│   ├── cv.pdf           # CV para download
│   └── favicon.svg      # Ícone do site
├── src/
│   ├── components/
│   │   ├── BadgesGallery.tsx   # Galeria de badges com filtros
│   │   ├── Carousel.tsx        # Wrapper do Swiper
│   │   ├── ContactLinks.tsx    # Botões de contato
│   │   ├── Section.tsx         # Component de seção
│   │   └── ThemeToggle.tsx     # Toggle light/dark
│   ├── data/
│   │   └── cv.ts              # Dados do CV (tipados)
│   ├── types/
│   │   └── declarations.d.ts  # Declarações TypeScript
│   ├── App.tsx                # Componente principal
│   ├── index.css              # Estilos globais + animações
│   └── main.tsx               # Entry point
├── index.html                 # HTML base com SEO
├── tailwind.config.js         # Configuração Tailwind (cores neon)
├── vite.config.ts             # Configuração Vite
├── vercel.json                # Config deploy Vercel
├── netlify.toml               # Config deploy Netlify
└── DEPLOY.md                  # Instruções de deploy
```

---

## 🎨 Customização

### Atualizar Dados do CV

Edite o arquivo [src/data/cv.ts](src/data/cv.ts):

```typescript
export const cv: CV = {
  name: "Seu Nome",
  email: "seu@email.com",
  github: "https://github.com/seu-usuario",
  // ... outros dados
}
```

### Adicionar Badges

1. Coloque imagens em `public/badges/`
2. Atualize `cv.trainings` em `src/data/cv.ts`:

```typescript
trainings: [
  {
    name: "Curso Exemplo",
    badge: "/badges/curso-exemplo.png",
    inProgress: true // ou false
  }
]
```

### Customizar Tema

Edite [tailwind.config.js](tailwind.config.js):

```js
colors: {
  neon: {
    cyan: '#00f0ff',    // Cor principal
    pink: '#ff2bd6',    // Cor secundária
    purple: '#a855f7'   // Cor terciária
  }
}
```

---

## 🚀 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Gian-UC/portfolio)

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Gian-UC/portfolio)

```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

### GitHub Pages

```bash
# Adicione base no vite.config.ts
base: '/portfolio/'

# Build e deploy
npm run build
npm i -D gh-pages
npx gh-pages -d dist
```

📖 **Instruções completas**: [DEPLOY.md](DEPLOY.md)

---

## 🛠️ Stack Tecnológico

| Categoria | Tecnologias |
|-----------|-------------|
| **Framework** | React 19.2.0, TypeScript 5.9.3 |
| **Build Tool** | Vite 7.3.1 |
| **Styling** | Tailwind CSS 3.4.14, PostCSS |
| **Carousel** | Swiper 12.0.3 |
| **Fonts** | Orbitron (display), Inter (body) |
| **Analytics** | Vercel Analytics |
| **SEO** | Open Graph, Twitter Cards, Schema.org |

---

## 📊 Performance

- ⚡ **HMR** (Hot Module Replacement)
- 🎯 **Code splitting** automático
- 🖼️ **Lazy loading** de imagens
- 📦 **Tree shaking** com Vite
- 🎨 **CSS purging** com Tailwind

---

## 🗺️ Roadmap

- [ ] **GitHub API Integration** - Listar repos automaticamente
- [ ] **PWA Support** - Service Worker + offline mode
- [ ] **Internacionalização** - Toggle pt/en
- [ ] **Otimização de Imagens** - WebP/AVIF conversion
- [ ] **Print Styles** - CV otimizado para PDF
- [ ] **Animações avançadas** - Framer Motion
- [ ] **Blog integrado** - MDX posts
- [ ] **CMS Headless** - Sanity/Strapi integration

---

## 📝 License

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Giancarlo Salomone**

- 💼 LinkedIn: [dev-giancarlo-salomone](https://www.linkedin.com/in/dev-giancarlo-salomone)
- 🐙 GitHub: [@Gian-UC](https://github.com/Gian-UC)
- 📧 Email: g.salomone@live.com
- 💬 WhatsApp: [11 99236-4776](https://wa.me/5511992364776)

---

<div align="center">

### ⭐ Se este projeto te ajudou, deixe uma estrela!

**Desenvolvido com 💙 e muito ☕**

![Made with Love](https://img.shields.io/badge/Made%20with-Love-ff2bd6?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open-Source-00f0ff?style=for-the-badge)

</div>
