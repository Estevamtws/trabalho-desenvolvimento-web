/* ==========================================================
   SOFTBYKE - JAVASCRIPT PRINCIPAL
   Funcionalidades: pré-carregamento, transição entre páginas,
   cabeçalho dinâmico, menu mobile, revelação ao rolar,
   botão voltar ao topo, formulário de contato, orçamento
   de serviços e filtro de produtos.
   ========================================================== */

/* 1. PRÉ-CARREGAMENTO */
const preCarregamento = document.querySelector("#pre-carregamento");

if (preCarregamento) {
  window.addEventListener("load", function () {
    setTimeout(function () {
      preCarregamento.classList.add("escondido");
      document.body.classList.remove("carregando");
    }, 350);
  });
}

/* 2. TRANSIÇÃO ENTRE PÁGINAS (efeito ao navegar pelo site) */
const transicaoPagina = document.querySelector("#transicao-pagina");

if (transicaoPagina) {
  const linksInternos = document.querySelectorAll('a[href*=".html"]');

  linksInternos.forEach(function (link) {
    if (link.target === "_blank") return;

    link.addEventListener("click", function (evento) {
      const destino = link.getAttribute("href");
      if (!destino || destino.startsWith("http")) return;

      evento.preventDefault();
      transicaoPagina.classList.add("ativa");
      setTimeout(function () {
        window.location.href = destino;
      }, 420);
    });
  });
}

// Garante que a tela de transição/carregamento não fique presa ao voltar pelo histórico
window.addEventListener("pageshow", function () {
  document.body.classList.remove("carregando");
  if (preCarregamento) preCarregamento.classList.add("escondido");
  if (transicaoPagina) transicaoPagina.classList.remove("ativa");
});

/* 3. CABEÇALHO DINÂMICO (encolhe e ganha destaque ao rolar) */
const cabecalho = document.querySelector(".cabecalho");

if (cabecalho) {
  const alternarEstiloCabecalho = function () {
    cabecalho.classList.toggle("rolado", window.scrollY > 30);
  };

  window.addEventListener("scroll", alternarEstiloCabecalho, { passive: true });
  alternarEstiloCabecalho();
}

/* 4. MENU MOBILE (abre e fecha o menu no celular) */
const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

if (botaoMenu && menuPrincipal) {
  botaoMenu.addEventListener("click", function () {
    const aberto = menuPrincipal.classList.toggle("aberto");
    botaoMenu.textContent = aberto ? "✕" : "☰";
    botaoMenu.setAttribute("aria-expanded", aberto ? "true" : "false");
  });

  menuPrincipal.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      menuPrincipal.classList.remove("aberto");
      botaoMenu.textContent = "☰";
      botaoMenu.setAttribute("aria-expanded", "false");
    });
  });
}

/* 5. REVELAÇÃO DE CONTEÚDO AO ROLAR A PÁGINA */
const elementosRevelados = document.querySelectorAll(
  "main section, .caixa-conteudo, .formulario, .tabela-wrapper, .lista-parceiros, .grade-unidades, .rodape-conteudo"
);

if (elementosRevelados.length && "IntersectionObserver" in window) {
  elementosRevelados.forEach(function (elemento) {
    elemento.classList.add("reveal");
  });

  const observadorRevelacao = new IntersectionObserver(
    function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observadorRevelacao.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  elementosRevelados.forEach(function (elemento) {
    observadorRevelacao.observe(elemento);
  });
}

/* 6. BOTÃO VOLTAR AO TOPO */
const botaoTopo = document.querySelector(".botao-topo");

if (botaoTopo) {
  // mostra o botão só depois de rolar um pouco a página
  window.addEventListener(
    "scroll",
    function () {
      botaoTopo.classList.toggle("visivel", window.scrollY > 300);
    },
    { passive: true }
  );

  botaoTopo.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* 7. FORMULÁRIO DE CONTATO -> ENCAMINHA PARA O WHATSAPP DA FILIAL ESCOLHIDA */
const formularioContato = document.querySelector("#form-contato");
const modalContatoFilial = document.querySelector("#modal-contato-filial");

if (formularioContato && modalContatoFilial) {
  const status = document.querySelector("#status-formulario");
  const botaoFecharModalContato = modalContatoFilial.querySelector(".modal-orcamento-fechar");
  const botoesFilialContato = modalContatoFilial.querySelectorAll(".filial-botao");
  let dadosFormularioContato = null;

  const abrirModalContato = function () {
    modalContatoFilial.classList.add("aberto");
    modalContatoFilial.setAttribute("aria-hidden", "false");
  };

  const fecharModalContato = function () {
    modalContatoFilial.classList.remove("aberto");
    modalContatoFilial.setAttribute("aria-hidden", "true");
  };

  formularioContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const assunto = document.querySelector("#assunto").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();

    // validação básica dos campos obrigatórios
    if (nome === "" || email === "" || telefone === "" || assunto === "" || mensagem === "") {
      status.textContent = "Por favor, preencha todos os campos obrigatórios.";
      status.className = "mensagem-status erro";
      return;
    }

    dadosFormularioContato = { nome: nome, email: email, telefone: telefone, assunto: assunto, mensagem: mensagem };
    status.textContent = "";
    status.className = "mensagem-status";
    abrirModalContato();
  });

  if (botaoFecharModalContato) {
    botaoFecharModalContato.addEventListener("click", fecharModalContato);
  }

  modalContatoFilial.addEventListener("click", function (evento) {
    if (evento.target === modalContatoFilial) fecharModalContato();
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fecharModalContato();
  });

  botoesFilialContato.forEach(function (botao) {
    botao.addEventListener("click", function () {
      if (!dadosFormularioContato) return;

      const telefoneFilial = botao.dataset.telefone;
      const mensagemWhatsapp = [
        "Olá! Meu nome é " + dadosFormularioContato.nome + ".",
        "Assunto: " + dadosFormularioContato.assunto,
        "Mensagem: " + dadosFormularioContato.mensagem,
        "E-mail: " + dadosFormularioContato.email,
        "Telefone: " + dadosFormularioContato.telefone
      ].join("\n");

      const url = "https://wa.me/" + telefoneFilial + "?text=" + encodeURIComponent(mensagemWhatsapp);
      window.open(url, "_blank", "noopener");

      fecharModalContato();
      formularioContato.reset();
      status.textContent = "Mensagem encaminhada para o WhatsApp da filial escolhida.";
      status.className = "mensagem-status sucesso";
      dadosFormularioContato = null;
    });
  });
}

/* 8. BOTÃO "SOLICITAR ORÇAMENTO" (página de serviços) */
const botoesOrcamento = document.querySelectorAll(".botao-orcamento");
const modalOrcamento = document.querySelector("#modal-orcamento");

if (botoesOrcamento.length && modalOrcamento) {
  const botaoFecharModal = modalOrcamento.querySelector(".modal-orcamento-fechar");
  const botoesFilial = modalOrcamento.querySelectorAll(".filial-botao");
  let servicoSelecionado = "";

  const abrirModalOrcamento = function (servico) {
    servicoSelecionado = servico;
    modalOrcamento.classList.add("aberto");
    modalOrcamento.setAttribute("aria-hidden", "false");
  };

  const fecharModalOrcamento = function () {
    modalOrcamento.classList.remove("aberto");
    modalOrcamento.setAttribute("aria-hidden", "true");
  };

  botoesOrcamento.forEach(function (botao) {
    botao.addEventListener("click", function () {
      abrirModalOrcamento(botao.dataset.servico);
    });
  });

  if (botaoFecharModal) {
    botaoFecharModal.addEventListener("click", fecharModalOrcamento);
  }

  modalOrcamento.addEventListener("click", function (evento) {
    if (evento.target === modalOrcamento) fecharModalOrcamento();
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") fecharModalOrcamento();
  });

  botoesFilial.forEach(function (botao) {
    botao.addEventListener("click", function () {
      const telefone = botao.dataset.telefone;
      const mensagem = "Bom dia, queria fazer um orçamento de " + servicoSelecionado + ".";
      const url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem);
      window.open(url, "_blank", "noopener");
      fecharModalOrcamento();
    });
  });
}

/* 9. ATALHOS DE CATEGORIA (Todos / Bicicletas / Acessórios / Roupas) */
/* Todos os produtos ficam sempre visíveis na página; os botões apenas rolam até a seção. */
const filtroBotoes = document.querySelectorAll(".filtro-botao");

const mapaFiltroParaSecao = {
  bicicletas: "bicicletas",
  acessorios: "acessorios",
  roupas: "vestuario"
};

filtroBotoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // marca visualmente o botão ativo
    filtroBotoes.forEach(function (b) {
      b.classList.remove("ativo");
    });
    botao.classList.add("ativo");

    const idSecao = mapaFiltroParaSecao[botao.dataset.filtro];
    const secaoAlvo = idSecao ? document.getElementById(idSecao) : null;

    if (secaoAlvo) {
      secaoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});

/* 10. VIR DIRETO PARA UMA CATEGORIA (link "Ver mais" da página inicial) */
const secoesProdutos = document.querySelectorAll("#bicicletas, #acessorios, #vestuario");

if (secoesProdutos.length) {
  const irDireitoParaCategoria = function () {
    const idSecao = window.location.hash.replace("#", "");
    const secaoAlvo = document.getElementById(idSecao);
    if (!secaoAlvo) return;

    setTimeout(function () {
      secaoAlvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 400);
  };

  window.addEventListener("load", irDireitoParaCategoria);
}
