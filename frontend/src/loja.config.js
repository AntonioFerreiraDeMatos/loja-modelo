// =====================================================
// CONFIGURAÇÃO DA LOJA — edite SÓ este arquivo para cada cliente.
// Depois de alterar, rode `npm run build` e publique `frontend/dist`.
// Nada aqui é secreto: tudo vai para o JavaScript público do site.
// =====================================================

export const LOJA = {
  // Identidade
  nome: 'Minha Loja',                 // nome completo (título, rodapé, alt da logo)
  nomeCurto: 'Minha Loja',            // aparece no menu do painel
  pessoa: 'a loja',                   // como o cliente se refere: "a Ana", "a equipe", "a loja"
  segmento: 'Moda & estilo',          // etiqueta acima do título principal

  // Logo: troque o arquivo em src/assets/images/logo.svg (pode ser .png/.jpg/.webp;
  // se mudar a extensão, ajuste o import em main.js e admin.js).

  // Textos do topo da página inicial
  hero: {
    titulo: 'Seu estilo,',
    destaque: 'seu momento.',
    texto: 'Descubra produtos escolhidos para valorizar o seu dia a dia.',
    notas: ['Qualidade e cuidado', 'Atendimento próximo'],
  },

  // Faixa com vídeo/imagem logo abaixo do topo
  banner: {
    etiqueta: 'Conheça a loja',
    titulo: 'Feito para fazer parte da sua rotina.',
    texto: 'Produtos selecionados com carinho para você.',
    // Opcional: coloque um .mp4 em src/assets/videos/ e importe em main.js.
  },

  destaquesEtiqueta: 'Escolhas especiais da loja',
  produtosTexto: 'Escolhas especiais para o seu dia a dia.',
  // As categorias e os produtos vêm do painel administrativo (não ficam aqui).

  // Contato (WhatsApp só com números: 55 + DDD + número)
  whatsapp: '5500000000000',
  instagramUrl: 'https://www.instagram.com/',
  // Mostra "+X seguidores" no topo. Use null para esconder (não invente números).
  instagramSeguidores: null,
  endereco: 'Rua Exemplo, 100 - Bairro, Cidade - UF, 00000-000',

  // Endereços publicados
  dominio: 'https://www.minhaloja.com.br',
  apiUrl: 'https://api.minhaloja.com.br/api',

  // Prefixo para dados salvos no navegador (carrinho, sessão). Sem espaços.
  prefixo: 'loja',

  anoInicio: 2026,

  // Crédito no rodapé (quem desenvolveu o site)
  credito: { nome: 'Raster Digital', url: 'https://www.rasterdigital.com.br/' },
}

/** Mensagens que citam quem atende: "Falar com a loja no WhatsApp". */
export const comPessoa = (texto) => texto.replace('{pessoa}', LOJA.pessoa)
