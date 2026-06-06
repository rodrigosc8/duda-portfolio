# 📖 Guia de Manutenção - Portfolio Duda Terra

## 🔄 Atualizar Informações

### Contactos
Ficheiro: `src/data/siteContent.js`

```javascript
export const contactLinks = [
  {
    label: "Instagram",
    handle: "@_dudaterra_",
    href: "https://instagram.com/_dudaterra_",  // ← Atualiza aqui
    icon: "instagram",
  },
  {
    label: "Email",
    handle: "dudaterra05@gmail.com",              // ← Atualiza aqui
    href: "mailto:dudaterra05@gmail.com",        // ← Atualiza aqui
    icon: "mail",
  },
];
```

### Bio e Conteúdo
Ficheiro: `src/data/siteContent.js`

```javascript
export const aboutParagraphs = [
  "Sou a Maria Eduarda, mas quase toda a gente me conhece por Duda!",
  "Sou estudante...", // ← Edita aqui
  // ... mais paragrafos
];
```

## 🎨 Adicionar Novo Projeto

Ficheiro: `src/data/projects.js`

### Exemplo:

```javascript
{
  id: "novo-projeto",
  title: "Novo Projeto",
  category: "social-media", // ou outro
  type: "Tipo de trabalho",
  year: "2026",
  accent: "#dd1c5d", // cor única do projeto
  image: "/assets/Portfólio/pasta/imagem.jpg",
  modalImage: "/assets/Portfólio/pasta/imagem-modal.jpg",
  gallery: [
    "/assets/Portfólio/pasta/img1.jpg",
    "/assets/Portfólio/pasta/img2.jpg",
  ],
  modalFit: "contain", // ou "cover"
  selected: false, // true se em destaque
  skills: ["Skill 1", "Skill 2", "Skill 3"],
  summary: "Resumo curto do projeto",
  description: "Descrição completa do projeto",
  role: "O meu papel no projeto",
  objective: "Objetivo do projeto",
  deliverables: ["Entrega 1", "Entrega 2"],
  result: "Resultado/impacto",
  credits: "Nomes de colaboradores (opcional)",
}
```

### Categorias Disponíveis:
- `design-programming` - Design e Programação
- `social-media` - Estratégia para Redes Sociais
- `video-photo` - Vídeo e Fotografia
- `graphic-design` - Design Gráfico

## 📸 Adicionar Imagens

### Estrutura de Pastas:
```
public/assets/
├── collage/              # Elementos decorativos
├── Portfólio/
│   ├── [projeto]/        # Uma pasta por projeto
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   └── ...
│   └── eu/              # Fotos da Duda
├── Fotografias/
│   ├── desporto/
│   ├── editorial/
│   └── Eventos/
└── reference/           # Imagens de referência
```

### Otimizar Imagens:
1. Redimensiona para ~1200px de largura
2. Comprime com TinyPNG ou ImageOptim
3. Usa formatos: JPG (fotos), PNG (transparência)
4. Coloca em pasta apropriada

## 🎯 Filtros e Categorias

Para alterar categorias de projetos, edita `src/data/projects.js`:

```javascript
export const projectCategories = [
  { id: "all", label: "Todos" },
  { id: "design-programming", label: "Design e Programação" },
  // ← Adiciona/remove categorias aqui
];
```

## 🎨 Customizar Cores

Ficheiro: `tailwind.config.js`

```javascript
colors: {
  blush: "#f7d9de",      // ← Edita cores aqui
  cherry: "#dd1c5d",
  cherryDark: "#a51446",
  ink: "#5b2b45",
  paper: "#fffaf8",
  vanilla: "#fff6ef",
  mint: "#d9e5da",
},
```

## 📝 Editar Texto da Página

| Secção | Ficheiro | Campo |
|--------|----------|-------|
| Hero | `siteContent.js` | `heroHighlights` |
| Sobre | `siteContent.js` | `aboutParagraphs` |
| Porque Crio | `siteContent.js` | `whyCreateCopy` |
| Obsessões | `siteContent.js` | `obsessionItems` |
| Ferramentas | `siteContent.js` | `toolPlateItems` |
| Contacto | `siteContent.js` | `contactLinks` |

## 🚀 Deploy após Alterações

### Se usas Vercel:
```bash
git add .
git commit -m "Atualiza projectos e conteúdo"
git push origin main
```
Vercel faz deploy automático!

### Se usas Netlify:
Mesmo processo - faz push para GitHub

### Servidor próprio:
```bash
npm run build
# Faz upload da pasta dist/ via FTP/SFTP
```

## 🐛 Troubleshooting

### Imagem não aparece
1. Verifica o caminho em `projects.js`
2. Certifica-se que ficheiro existe em `public/assets/`
3. Recarrega a página com Ctrl+F5 (clear cache)

### Projeto não aparece
1. Verifica se `category` é válido
2. Verifica se `id` é único
3. Recarrega com `npm run dev`

### Estilos estranhos
1. Limpa cache: `rm -rf .vite dist/`
2. Reinstala: `npm install`
3. Reconstruir: `npm run build`

## 📱 Testar Responsividade

### Sizes para testar:
- **Mobile**: 375px (iPhone SE)
- **Tablet**: 768px (iPad)
- **Desktop**: 1024px+
- **Ultra-wide**: 1920px+

### DevTools:
```
Chrome/Firefox → F12 → Toggle Device Toolbar (Ctrl+Shift+M)
```

## 🔐 Segurança

- ✅ Não adiciones chaves API ao código
- ✅ Usa `.env` para variáveis secretas
- ✅ Não commites ficheiros sensíveis
- ✅ Mantém dependências atualizadas: `npm update`

## 📊 Monitorar Performance

### Lighthouse Score:
1. Abre DevTools (F12)
2. Lighthouse tab
3. "Analyze page load"
4. Alvo: 90+

### Google PageSpeed:
https://pagespeed.web.dev

## 🔄 Backup & Versionamento

```bash
# Ver histórico
git log --oneline

# Reverter mudança
git revert <commit-hash>

# Fazer backup
git push origin main
```

## 📚 Recursos Úteis

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Vite Docs](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 🆘 Suporte Rápido

Se algo quebra:

1. **Ler erro na consola** (F12 → Console)
2. **Google o erro**
3. **Verificar branch main está OK**: `git status`
4. **Fazer revert se necessário**: `git revert HEAD`
5. **Contactar dev** se não consegue resolver

## ✅ Checklist Antes de Deploy

- [ ] Testei localmente com `npm run dev`
- [ ] Corri `npm run build` sem erros
- [ ] Verifiquei imagens carregam
- [ ] Testei em mobile
- [ ] Testei links de navegação
- [ ] Atualizei contactos se necessário
- [ ] Lighthouse score OK (90+)
- [ ] Sem console errors (F12)

---

**Última atualização**: 6 de Junho de 2026  
**Versão**: 1.0 Stable
