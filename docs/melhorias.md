# Melhorias planejadas

Lista de evolução do modelo. Melhorias gerais entram primeiro aqui no
`loja-modelo` e depois podem ser levadas aos clientes (ver
[novo-cliente.md](novo-cliente.md#levar-melhorias-do-modelo-para-um-cliente-antigo)).

Legenda: ⬜ a fazer · 🟨 em andamento · ✅ feito

## Já incluído no modelo

- ✅ Vitrine responsiva, categorias automáticas, carrinho e checkout em etapas
- ✅ Pix com QR Code e "copia e cola" calculados no servidor; pedido pelo WhatsApp
- ✅ Login de clientes com Google
- ✅ Painel: pedidos, confirmação e correção de Pix, cancelamento com devolução ao
  estoque, exclusão, clientes, produtos, categorias, estoque auditado,
  faturamento, histórico, CSV, "Baixar tudo em Excel" e "Zerar dados de teste"
- ✅ Segurança: JWT, limites de tentativas, CORS por domínio, validação de ambiente
- ✅ Identidade em `loja.config.js` e variáveis de ambiente
- ✅ Testes automáticos de backend e frontend

## Prioridade alta: aumentam o valor de venda

| # | Melhoria | Observação |
|---|---|---|
| ⬜ 1 | Cores no `loja.config.js` | Trocar a identidade visual sem editar CSS |
| ⬜ 2 | Configurações pelo painel | WhatsApp, textos, Pix e endereço editáveis pelo cliente, sem novo build (tabela `configuracoes_sistema` já existe) |
| ⬜ 3 | Cupons de desconto | Tabela `cupons` já existe; faltam telas, regras e aplicação no checkout |
| ⬜ 4 | Frete | Tabela por bairro/cidade ou cálculo pelos Correios |
| ⬜ 5 | Confirmação automática do Pix | Integração com Mercado Pago, Efí ou outro PSP; pedido vira "pago" sozinho |

## Prioridade média: ajudam no dia a dia

| # | Melhoria | Observação |
|---|---|---|
| ⬜ 6 | Vários administradores | Permissões por papel (dona, funcionária) |
| ⬜ 7 | Aviso de pedido novo | E-mail ou WhatsApp para a loja |
| ⬜ 8 | Backup automático | Cópia semanal do banco |
| ⬜ 9 | Página de cada produto | Várias fotos e link próprio para compartilhar |
| ⬜ 10 | SEO | Título e descrição por produto, sitemap, dados estruturados |

## Novos segmentos (viram modelos separados)

| # | Modelo | O que precisa além da loja |
|---|---|---|
| ⬜ 11 | Restaurante / delivery | Cardápio com adicionais, horário de funcionamento, taxa por bairro, retirada ou entrega |
| ⬜ 12 | Barbearia / salão / estética | Agenda por profissional, serviços com duração, bloqueio de horários, lembrete pelo WhatsApp |

## Técnicas: facilitam a manutenção

| # | Melhoria | Observação |
|---|---|---|
| ⬜ 13 | Publicação automática | GitHub Actions publica site e API ao enviar para `main` |
| ⬜ 14 | Ambiente de teste online | `teste.dominio.com.br` com banco próprio para aprovação do cliente |
| ⬜ 15 | Um sistema para vários clientes | Uma instalação atendendo várias lojas; compensa a partir de ~10 clientes |

## Ordem sugerida

1. **Antes do próximo cliente:** itens 1 e 2 (personalização mais rápida e menos suporte).
2. **Primeiros pedidos dos clientes:** itens 3 e 4 (cupom e frete).
3. **Novo segmento:** item 11 ou 12 como repositório-modelo próprio.

## Lições do primeiro projeto

- O site redireciona para `www`: os dois domínios (com e sem `www`) precisam
  estar autorizados no CORS, senão o login do painel falha.
- O HTML deve ir com `Cache-Control: no-cache` (já no `.htaccess`), senão o
  navegador mostra a versão antiga depois de publicar.
- A Hostinger exige que a API chame `listen()` em até 3 segundos: as migrations
  rodam depois, com a API respondendo 503 até terminar (já implementado).
- O `.env` do computador deve apontar para um banco **local**, nunca para produção.
- Commits para o GitHub devem usar o e-mail `noreply` da conta (privacidade de e-mail).
