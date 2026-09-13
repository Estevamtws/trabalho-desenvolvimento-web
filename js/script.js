/* ==========================================================
   SOFTBIKE - JAVASCRIPT PRINCIPAL
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

/* 7. FORMULÁRIO DE CONTATO (sem backend - apenas demonstração) */
const formularioContato = document.querySelector("#form-contato");

if (formularioContato) {
  formularioContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefone = document.querySelector("#telefone").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    const status = document.querySelector("#status-formulario");

    // validação básica dos campos obrigatórios
    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
      status.textContent = "Por favor, preencha todos os campos obrigatórios.";
      status.className = "mensagem-status erro";
      return;
    }

    // como não existe backend, apenas simulamos o envio
    status.textContent = "Mensagem registrada para demonstração.";
    status.className = "mensagem-status sucesso";
    formularioContato.reset();
  });
}

/* 8. BOTÃO "SOLICITAR ORÇAMENTO" (página de serviços) */
const botoesOrcamento = document.querySelectorAll(".botao-orcamento");

botoesOrcamento.forEach(function (botao) {
  botao.addEventListener("click", function () {
    const servico = botao.dataset.servico;
    alert("Orçamento solicitado para o serviço: " + servico + ". Em breve entraremos em contato!");
  });
});

/* 9. FILTRO DE PRODUTOS (Todos / Bicicletas / Acessórios / Roupas) */
const filtroBotoes = document.querySelectorAll(".filtro-botao");
const cardsProdutos = document.querySelectorAll(".produto-card");

filtroBotoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    // marca visualmente o filtro ativo
    filtroBotoes.forEach(function (b) {
      b.classList.remove("ativo");
    });
    botao.classList.add("ativo");

    const categoria = botao.dataset.filtro;

    cardsProdutos.forEach(function (card) {
      if (categoria === "todos" || card.dataset.categoria === categoria) {
        card.classList.remove("oculto");
      } else {
        card.classList.add("oculto");
      }
    });
  });
});
