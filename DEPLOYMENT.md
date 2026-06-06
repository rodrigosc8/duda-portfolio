# Guia de Deployment

## Opções de Deployment

### 1. Vercel (Recomendado)

A forma mais simples e rápida de fazer deploy.

#### Passos:

1. Faz um fork ou push do projeto para GitHub
2. Acede a [vercel.com](https://vercel.com)
3. Clica em "New Project"
4. Seleciona o repositório GitHub
5. Vercel detecta automaticamente Vite
6. Clica em "Deploy"

#### Variáveis de Ambiente:
Não há variáveis de ambiente necessárias neste momento.

### 2. Netlify

Outra excelente opção com deploys contínuos.

#### Passos:

1. Faz push do código para GitHub
2. Acede a [netlify.com](https://netlify.com)
3. Clica em "New site from Git"
4. Conecta o teu repositório GitHub
5. Definições:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Clica em "Deploy"

### 3. GitHub Pages

Para deployment gratuito direto do GitHub.

#### Passos:

1. Confirma que o `vite.config.js` tem `base: "/duda-portfolio/"`.
2. Faz commit e push para a branch `main`.
3. Vai ao GitHub: `Settings > Pages`.
4. Em `Build and deployment`, escolhe `GitHub Actions`.
5. O workflow `.github/workflows/deploy.yml` faz automaticamente:
   - instala dependências com `npm ci`
   - gera o site com `npm run build`
   - publica a pasta `dist`

Depois do primeiro deploy, o site fica disponível em:

```text
https://rodrigosc8.github.io/duda-portfolio/
```

### 4. Servidor Próprio (VPS/Hosting Tradicional)

Para controle total do servidor.

#### Passos:

1. Faz `npm run build` localmente
2. Faz upload da pasta `dist/` via FTP/SFTP
3. Configura o servidor web (Nginx/Apache) para servir a pasta dist
4. Exemplo nginx.conf:

```nginx
server {
    listen 80;
    server_name seu-dominio.com;
    
    location / {
        root /var/www/duda-terra;
        try_files $uri $uri/ /index.html;
    }
}
```

## Domínios

### Registar um Domínio:

1. **Namecheap** - Económico e confiável
2. **Google Domains** - Integração com Google
3. **Hostinger** - Bom preço e suporte
4. **GoDaddy** - Mais caro mas popular

### Configurar DNS:

Depois de registar o domínio, aponta os servidores DNS para:

- **Vercel**: Adiciona no dashboard do Vercel
- **Netlify**: Adiciona no dashboard do Netlify  
- **GitHub Pages**: Cria records CNAME para `username.github.io`

## CI/CD com GitHub Actions

Exemplo de workflow automático:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## Otimizações Pós-Deploy

### 1. SSL/TLS (HTTPS)

- Vercel e Netlify têm HTTPS automático
- Para outros: usa Let's Encrypt (gratuito)

### 2. CDN

- Vercel e Netlify incluem CDN automático
- Alternativa: Cloudflare (gratuito)

### 3. Analytics

- Google Analytics
- Vercel Analytics
- Plausible (privacy-focused)

### 4. Monitoramento

- Vercel Monitoring
- Sentry para erros
- UptimeRobot para uptime checks

## Dicas de Performance

1. ✅ **Imagens Otimizadas**: Já estão otimizadas
2. ✅ **CSS Minificado**: Vite faz automaticamente
3. ✅ **JS Minificado**: Vite faz automaticamente
4. ✅ **Lazy Loading**: Framer Motion + React otimizam isto
5. ✅ **Caching**: Vercel/Netlify fazem isto automaticamente

## Troubleshooting

### Erro: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro: "Port já em uso"

```bash
npm run dev -- --host 0.0.0.0 --port 3000
```

### Erro: Imagens não aparecem

Verifica que o caminho `public/assets/` existe e tem os arquivos.

### Erro: Estilos não carregam

Limpa o cache:
```bash
rm -rf dist .vite
npm run build
```

## Checklist Pré-Deploy

- [ ] npm run build - sem erros
- [ ] npm run preview - funciona localmente
- [ ] Todos os links de navegação funcionam
- [ ] Imagens carregam corretamente
- [ ] Responsividade em mobile OK
- [ ] Sem erros na consola do browser
- [ ] Meta tags corretas
- [ ] Links de contacto funcionam (mailto, sociais)
- [ ] Animações funcionam bem
- [ ] Performance acceptable

## Suporte

Para dúvidas sobre deployment, consulta:
- [Vite Docs](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
