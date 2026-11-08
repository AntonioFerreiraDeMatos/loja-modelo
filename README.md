# Loja Modelo

Modelo de loja virtual pronto para personalizar e publicar para novos clientes:
vitrine responsiva, carrinho, checkout com Pix, pedidos pelo WhatsApp, login de
clientes com Google e um painel administrativo completo.

> Este repositório é um **template**. Para um cliente novo, use o botão
> **"Use this template"** no GitHub e siga [docs/novo-cliente.md](docs/novo-cliente.md).

## O que já vem pronto

**Loja (cliente final)**
- Página inicial com topo, faixa de destaque, produtos por categoria e ofertas.
- Categorias e produtos carregados do banco; os filtros se montam sozinhos.
- Carrinho, checkout em etapas, QR Code e "copia e cola" Pix calculados no servidor.
- Mensagem do pedido pronta para o WhatsApp da loja.
- Login com Google; layout ajustado para celular, tablet e computador.

**Painel administrativo**
- Resumo com indicadores e pedidos: lista, detalhes, status, confirmação e
  correção de Pix, cancelamento com devolução ao estoque e exclusão.
- Produtos com foto, preço, promoção, estoque e destaque; categorias.
- Clientes com histórico de compras, valores pagos e anotações.
- Estoque com entradas, saídas e ajustes auditados; faturamento por período.
- Exportação em CSV e **"Baixar tudo em Excel"** (uma aba por assunto).
- "Zerar dados de teste" para iniciar a operação real (exige senha).
- Histórico de tudo o que foi alterado e por quem.

**Segurança**
- JWT, limites de tentativas, CORS restrito aos domínios da loja, cabeçalhos de
  segurança, validação de ambiente e proteção contra injeção de fórmulas no Excel.

## Personalização (por cliente)

| O quê | Onde |
|---|---|
| Nome, textos, WhatsApp, Instagram, endereço, domínio, crédito do rodapé | `frontend/src/loja.config.js` |
| Logo | `frontend/src/assets/images/logo.svg` |
| Vídeo da faixa (opcional) | `frontend/src/assets/videos/` + import em `main.js` |
| Título da aba do navegador | `frontend/index.html` e `frontend/admin.html` |
| Cores | variáveis no início de `frontend/src/style.css` e `frontend/src/admin.css` |
| Nome no Pix, domínios, chave Pix, banco, administrador | variáveis de ambiente do backend (ver `backend/.env.example`) |
| Categorias e produtos | painel administrativo, depois de publicado |

## Tecnologias

- Frontend: Vite, JavaScript e CSS (sem framework).
- Backend: Node.js, Express e MySQL, com migrations automáticas.
- Hospedagem testada: Hostinger (site estático + app Node.js).

## Rodar no computador

Requisitos: Node.js 20.19+ (ou 22.12+), MySQL e npm.

```powershell
Copy-Item backend\.env.example backend\.env      # preencha com um banco LOCAL
Copy-Item frontend\.env.example frontend\.env

Set-Location backend;  npm ci; npm start          # cria as tabelas na 1ª vez
Set-Location ..\frontend; npm ci; npm run dev     # http://localhost:5173
```

Painel: `http://localhost:5173/admin.html`. O administrador é criado a partir de
`ADMIN_EMAIL` e `ADMIN_PASSWORD` no `.env`.

## Testes

```powershell
Set-Location backend;  npm test
Set-Location ..\frontend; node --test test/
```

## Publicação

Planos de evolução em [docs/melhorias.md](docs/melhorias.md).

Passo a passo em [docs/deploy-hostinger.md](docs/deploy-hostinger.md) e lista de
conferência em [docs/novo-cliente.md](docs/novo-cliente.md).

## Segurança

- Nunca versione `.env`, senhas, chaves, backups do banco ou uploads.
- `.env.example` contém apenas nomes e valores de exemplo.
- Valores em `loja.config.js` e `VITE_*` são públicos: não coloque segredos neles.
- Cada cliente tem banco, repositório e hospedagem próprios.
