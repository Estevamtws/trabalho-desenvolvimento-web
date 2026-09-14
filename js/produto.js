/* ==========================================================
   SOFTBYKE - PÁGINA DE DETALHES DO PRODUTO
   Lê o identificador do produto a partir do hash da URL
   (ex.: produto.html#bike-01), busca em PRODUTOS_SOFTBYKE
   (js/produtos-dados.js) e monta a página: imagem grande,
   descrição e produtos similares da mesma categoria.

   Usa o hash (e não ?query=) porque a navegação entre
   produtos similares troca só o identificador, sem precisar
   recarregar a página inteira.
   ========================================================== */

function renderizarPaginaDeProduto() {
  const idProduto = decodeURIComponent(window.location.hash.replace(/^#/, ""));
  const produto = idProduto ? PRODUTOS_SOFTBYKE[idProduto] : null;

  const secaoDetalhe = document.querySelector("#produto-detalhe");
  const secaoNaoEncontrado = document.querySelector("#produto-nao-encontrado");
  const secaoSimilares = document.querySelector("#similares");

  if (!produto) {
    if (secaoDetalhe) secaoDetalhe.classList.add("oculto");
    if (secaoSimilares) secaoSimilares.classList.add("oculto");
    if (secaoNaoEncontrado) secaoNaoEncontrado.classList.remove("oculto");
    document.title = "SoftByke - Produto não encontrado";
    return;
  }

  if (secaoDetalhe) secaoDetalhe.classList.remove("oculto");
  if (secaoSimilares) secaoSimilares.classList.remove("oculto");
  if (secaoNaoEncontrado) secaoNaoEncontrado.classList.add("oculto");

  document.title = "SoftByke - " + produto.nome;

  const elMigalha = document.querySelector("#produto-migalha-atual");
  const elImagem = document.querySelector("#produto-imagem");
  const elBadge = document.querySelector("#produto-badge");
  const elNome = document.querySelector("#produto-nome");
  const elDescricaoCurta = document.querySelector("#produto-descricao-curta");
  const elPreco = document.querySelector("#produto-preco");
  const elDescricaoLonga = document.querySelector("#produto-descricao-longa");
  const elSpecs = document.querySelector("#produto-specs");
  const elWhatsapp = document.querySelector("#produto-whatsapp");

  if (elMigalha) elMigalha.textContent = produto.nome;
  if (elImagem) {
    elImagem.src = produto.imagem;
    elImagem.alt = produto.nome;
  }
  if (elBadge) elBadge.textContent = produto.badge;
  if (elNome) elNome.textContent = produto.nome;
  if (elDescricaoCurta) elDescricaoCurta.textContent = produto.descricaoCurta;
  if (elPreco) elPreco.textContent = produto.preco;
  if (elDescricaoLonga) elDescricaoLonga.textContent = produto.descricaoLonga;

  if (elSpecs) {
    elSpecs.innerHTML = "";
    produto.especificacoes.forEach(function (texto) {
      const li = document.createElement("li");
      li.textContent = texto;
      elSpecs.appendChild(li);
    });
  }

  if (elWhatsapp) {
    const mensagem =
      "Olá! Tenho interesse no produto " + produto.nome + " (" + produto.preco + "). Poderia me passar mais informações?";
    elWhatsapp.href = "https://wa.me/5561984472207?text=" + encodeURIComponent(mensagem);
  }

  /* PRODUTOS SIMILARES: mesma categoria, excluindo o produto atual */
  const grade = document.querySelector("#produtos-similares-grade");
  const tituloSimilares = document.querySelector("#similares-titulo");

  if (grade) {
    const similares = Object.keys(PRODUTOS_SOFTBYKE)
      .filter(function (chave) {
        return chave !== idProduto && PRODUTOS_SOFTBYKE[chave].categoria === produto.categoria;
      })
      .map(function (chave) {
        return Object.assign({ id: chave }, PRODUTOS_SOFTBYKE[chave]);
      })
      .slice(0, 4);

    if (tituloSimilares) {
      tituloSimilares.textContent = "Outros produtos em " + produto.categoriaLabel;
    }

    grade.innerHTML = similares
      .map(function (item) {
        return (
          '<div class="card">' +
          '<img src="' + item.imagem + '" alt="' + item.nome + '">' +
          '<div class="card-conteudo">' +
          '<span class="card-categoria">' + item.badge + "</span>" +
          "<h3>" + item.nome + "</h3>" +
          "<p>" + item.descricaoCurta + "</p>" +
          '<span class="card-preco">' + item.preco + "</span>" +
          '<a href="produto.html#' + item.id + '" class="botao">Ver detalhes</a>' +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  window.scrollTo(0, 0);

  // Se a troca de produto veio de um clique interceptado pela transição de
  // página (js/script.js), a tela de transição fica coberta aguardando um
  // "load" que não acontece em uma troca de hash na mesma página — remove
  // aqui para não deixar a tela travada.
  const overlayTransicao = document.querySelector("#transicao-pagina");
  if (overlayTransicao) overlayTransicao.classList.remove("ativa");
}

renderizarPaginaDeProduto();
window.addEventListener("hashchange", renderizarPaginaDeProduto);
