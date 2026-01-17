# Portfolio - Giancarlo Salomone

Portfolio profissional desenvolvido em React + TypeScript + Vite com tema dark gamer neon.

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI da Vercel:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Para produção:
```bash
vercel --prod
```

**Configuração automática**: O arquivo `vercel.json` já está configurado.

### Netlify

1. Instale a CLI do Netlify:
```bash
npm i -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy
```

4. Para produção:
```bash
netlify deploy --prod
```

**Configuração automática**: O arquivo `netlify.toml` já está configurado.

### GitHub Pages (Manual)

1. Adicione o base path no `vite.config.ts`:
```ts
export default defineConfig({
  base: '/portfolio/', // nome do repositório
  // ...
})
```

2. Build:
```bash
npm run build
```

3. Deploy usando gh-pages:
```bash
npm i -D gh-pages
npx gh-pages -d dist
```

## 📊 Analytics

O projeto já está configurado com **Vercel Analytics** (script adicionado no `index.html`).

Se preferir Google Analytics:
1. Crie uma propriedade em [analytics.google.com](https://analytics.google.com)
2. Adicione o tracking code no `index.html` antes do `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🎨 Badges

As imagens dos badges devem ser adicionadas em `public/badges/`:

- `python-developer.png`
- `backend-python.png`
- `fullstack-developer.png`
- `analise-dados-grafos.png`
- `dotnet-github-copilot.png`
- `docker-fundamentals.png`
- `ia-pratica-caixa.png`
- `codigo-pratica.png`
- `microsoft-challenge-ai102.png`
- `angular-developer.png`
- `genai-dados.png`

## 🛠️ Desenvolvimento

```bash
npm install
npm run dev
```

## 📱 Responsividade

O projeto foi otimizado para:
- Mobile (< 640px): Layout em coluna, textos menores, botões compactos
- Tablet (640px - 1024px): Grid adaptativo, navegação otimizada
- Desktop (> 1024px): Layout completo com todas as funcionalidades

## ✨ Features

- ✅ Carousel com drag/swipe (Swiper)
- ✅ Tema light/dark com toggle
- ✅ Galeria de badges com filtros por categoria
- ✅ Formulário de contato
- ✅ SEO completo (Open Graph, Twitter Cards, Schema.org)
- ✅ Analytics (Vercel)
- ✅ Totalmente responsivo
- ✅ Animações neon e background dinâmico

## 📝 Próximos Passos

- [ ] Projetos via GitHub API
- [ ] PWA com Service Worker
- [ ] Otimização de imagens (WebP/AVIF)
- [ ] Internacionalização (pt/en)
- [ ] Página de CV para impressão
