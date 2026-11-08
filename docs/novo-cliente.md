# Novo cliente — passo a passo

Tempo estimado: 1 a 2 dias (sem contar o cadastro de produtos pelo cliente).

## 1. Criar o repositório do cliente

1. No GitHub, abra o `loja-modelo` e clique em **Use this template → Create a new repository**.
2. Nome sugerido: `loja-nome-do-cliente` (privado).
3. Baixe para o computador:
   ```powershell
   git clone https://github.com/SEU-USUARIO/loja-nome-do-cliente.git
   ```

## 2. Coletar com o cliente

- [ ] Nome da loja e como ela quer ser chamada nas mensagens ("a Ana", "a equipe")
- [ ] Logo (de preferência SVG ou PNG com fundo transparente)
- [ ] Cores da marca
- [ ] WhatsApp, Instagram e endereço (ou se é só online)
- [ ] Domínio (ex.: `www.loja.com.br`)
- [ ] Chave Pix, nome e cidade que aparecem no Pix
- [ ] E-mail de quem vai administrar o painel
- [ ] Textos do topo e da faixa (ou deixe os sugeridos)
- [ ] Lista de categorias e produtos, com fotos (o cliente pode cadastrar depois)

## 3. Personalizar

- [ ] `frontend/src/loja.config.js`: todos os campos
- [ ] `frontend/src/assets/images/logo.svg`: logo do cliente
- [ ] `frontend/index.html` e `frontend/admin.html`: `<title>` e descrição
- [ ] Cores em `style.css` / `admin.css` (variáveis no início dos arquivos)
- [ ] Opcional: vídeo da faixa em `src/assets/videos/` e import em `main.js`
- [ ] Rodar localmente com banco de teste e conferir celular, tablet e computador
- [ ] `npm test` no backend e `node --test test/` no frontend

## 4. Hospedagem (Hostinger)

- [ ] Site principal com o domínio do cliente e HTTPS
- [ ] Subdomínio `api.` como aplicativo Node.js
- [ ] Banco MySQL (usuário e senha fortes)
- [ ] Variáveis do app Node.js (ver `backend/.env.example`):
      `NODE_ENV=production`, `DB_*`, `JWT_SECRET` (gerado), `STORE_NAME`,
      `STORE_DOMAINS`, `PIX_KEY`, `PIX_MERCHANT_NAME`, `PIX_MERCHANT_CITY`,
      `GOOGLE_CLIENT_ID`, `ADMIN_NAME`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`
- [ ] Publicar `backend` (sem `node_modules` e sem `.env`) e conferir `/api/health`
- [ ] `npm run build` no frontend e publicar o conteúdo de `frontend/dist`
- [ ] Google Login: adicionar o domínio do cliente às origens autorizadas do Client ID

## 5. Entrega

- [ ] Entrar no painel e trocar/confirmar a senha do administrador
- [ ] Remover `ADMIN_PASSWORD` das variáveis da hospedagem
- [ ] Cadastrar categorias e produtos (ou orientar o cliente)
- [ ] Pedido de teste pelo celular até o Pix; confirmar no painel; cancelar e excluir
- [ ] Ensinar: pedidos, confirmar Pix, estoque, "Baixar tudo em Excel" e backup no hPanel

## Levar melhorias do modelo para um cliente antigo

```powershell
git remote add modelo https://github.com/SEU-USUARIO/loja-modelo.git
git fetch modelo
git merge modelo/main --allow-unrelated-histories   # só na 1ª vez precisa da opção
```

Resolva conflitos mantendo os arquivos de identidade do cliente
(`loja.config.js`, logo, cores) e teste antes de publicar.
