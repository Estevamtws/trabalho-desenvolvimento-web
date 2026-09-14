/* ==========================================================
   SOFTBYKE - BASE DE DADOS DOS PRODUTOS
   Usada pela página produto.html para montar a página de
   detalhes e a seção de produtos similares dinamicamente.
   ========================================================== */

const PRODUTOS_SOFTBYKE = {
  "bike-01": {
    nome: "Bike Infantil Aro 16",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Infantil",
    imagem: "assets/produtos/bike-01.jpg",
    preco: "R$ 599,00",
    descricaoCurta: "Segura, leve e colorida para os primeiros pedais.",
    descricaoLonga:
      "A Bike Infantil Aro 16 foi criada para dar às crianças mais confiança e liberdade nos primeiros pedais. Com quadro leve, rodas de apoio removíveis e freios de fácil acionamento, é a escolha ideal para pais que buscam segurança sem abrir mão da diversão. O acabamento colorido e resistente garante uma bike pronta para brincadeiras no quintal, na pracinha ou na calçada de casa.",
    especificacoes: [
      "Aro 16 com rodinhas de apoio removíveis",
      "Quadro em aço reforçado, leve e resistente",
      "Freios de fácil acionamento para mãos pequenas",
      "Selim ajustável que acompanha o crescimento da criança",
      "Indicada para crianças de 4 a 7 anos"
    ]
  },
  "bike-02": {
    nome: "Bike Urbana Confort",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Urbana",
    imagem: "assets/produtos/bike-02.jpg",
    preco: "R$ 1.299,00",
    descricaoCurta: "Perfeita para o trajeto do dia a dia na cidade.",
    descricaoLonga:
      "Pensada para quem pedala todos os dias, a Bike Urbana Confort une praticidade e conforto em qualquer trajeto. O selim ergonômico, a postura ereta de pedalada e o quadro resistente tornam essa bike perfeita para ir ao trabalho, à faculdade ou passear pela cidade sem dor nas costas no fim do dia.",
    especificacoes: [
      "Selim ergonômico com amortecimento extra",
      "Guidão alto para uma postura confortável",
      "Quadro em aço com pintura resistente a arranhões",
      "Compatível com bagageiro traseiro (acessório opcional)",
      "Ideal para trajetos urbanos e ciclovias"
    ]
  },
  "bike-03": {
    nome: "Mountain Bike Aro 29",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Mountain Bike",
    imagem: "assets/produtos/bike-03.jpg",
    preco: "R$ 2.590,00",
    descricaoCurta: "Resistente, ideal para trilhas e terrenos irregulares.",
    descricaoLonga:
      "A Mountain Bike Aro 29 foi desenvolvida para encarar trilhas, subidas e terrenos irregulares sem perder estabilidade. O quadro reforçado, a suspensão dianteira e os pneus com cravos agressivos garantem tração e segurança em qualquer aventura, seja na trilha do fim de semana ou no treino pesado durante a semana.",
    especificacoes: [
      "Aro 29 para maior estabilidade em terrenos irregulares",
      "Suspensão dianteira com curso de 100 mm",
      "Câmbio de 21 marchas para qualquer subida",
      "Pneus com cravos para maior tração em trilhas",
      "Freios a disco mecânicos"
    ]
  },
  "bike-04": {
    nome: "Speed Road Pro",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Speed",
    imagem: "assets/produtos/bike-04.jpg",
    preco: "R$ 3.450,00",
    descricaoCurta: "Leve e aerodinâmica, feita para longas distâncias.",
    descricaoLonga:
      "A Speed Road Pro foi construída para quem busca velocidade e performance no asfalto. Seu quadro leve e a geometria aerodinâmica reduzem o esforço em longas distâncias, enquanto o conjunto de transmissão de precisão entrega trocas de marcha suaves em qualquer ritmo de pedalada.",
    especificacoes: [
      "Quadro em alumínio leve e aerodinâmico",
      "Rodas de baixo peso para maior velocidade",
      "Câmbio de precisão com múltiplas marchas",
      "Guidão speed em formato drop para posições variadas",
      "Ideal para provas e treinos de longa distância"
    ]
  },
  "bike-05": {
    nome: "Bike Profissional Elite",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Profissional",
    imagem: "assets/produtos/bike-05.jpg",
    preco: "R$ 5.990,00",
    descricaoCurta: "Alto desempenho para competições e treinos intensos.",
    descricaoLonga:
      "Desenvolvida para atletas exigentes, a Bike Profissional Elite entrega o máximo em performance, resposta e leveza. Cada componente foi selecionado para competições e treinos intensos, garantindo rigidez no pedal, precisão nas trocas de marcha e controle total em qualquer velocidade.",
    especificacoes: [
      "Quadro de alta rigidez para máxima transferência de potência",
      "Componentes de grupo profissional",
      "Rodas de alta performance e baixo peso",
      "Freios a disco hidráulicos",
      "Recomendada para atletas e competidores"
    ]
  },
  "bike-06": {
    nome: "Bike Mais Vendida",
    categoria: "bicicletas",
    categoriaLabel: "Bicicletas",
    badge: "Mais vendida",
    imagem: "assets/produtos/bike-06.jpg",
    preco: "R$ 1.890,00",
    descricaoCurta: "O modelo preferido dos clientes SoftByke.",
    descricaoLonga:
      "Eleita pelos clientes como a favorita da loja, esta bicicleta equilibra conforto, durabilidade e um ótimo custo-benefício. É a escolha certa para quem quer uma bike versátil, tanto para o dia a dia quanto para pedais de fim de semana, com a qualidade e a confiança que os clientes SoftByke já conhecem.",
    especificacoes: [
      "Equilíbrio perfeito entre conforto e desempenho",
      "Quadro durável para uso diário",
      "Ótimo custo-benefício",
      "Indicada para cidade e passeios",
      "O modelo mais recomendado pelos nossos clientes"
    ]
  },

  "item-01": {
    nome: "Capacete",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-01.jpg",
    preco: "R$ 129,00",
    descricaoCurta: "Capacete ventilado com ajuste de tamanho.",
    descricaoLonga:
      "Proteção é prioridade em qualquer pedalada. Este capacete conta com ventilação eficiente, sistema de ajuste de tamanho e acabamento leve, garantindo conforto mesmo em pedais longos, sem abrir mão da segurança.",
    especificacoes: [
      "Ventilação eficiente para dias quentes",
      "Sistema de ajuste de tamanho na parte traseira",
      "Espuma interna removível e lavável",
      "Casco em EPS de alta absorção de impacto",
      "Indicado para uso urbano e esportivo"
    ]
  },
  "item-02": {
    nome: "Luvas",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-02.jpg",
    preco: "R$ 59,00",
    descricaoCurta: "Luvas com proteção para as mãos durante o pedal.",
    descricaoLonga:
      "Estas luvas oferecem proteção e conforto para as mãos durante toda a pedalada. O acolchoamento na palma reduz o impacto em trajetos mais longos, enquanto o tecido respirável evita o suor nas mãos em dias quentes.",
    especificacoes: [
      "Acolchoamento na palma para reduzir impacto",
      "Tecido respirável e de secagem rápida",
      "Fechamento em velcro para ajuste perfeito",
      "Reforço nos dedos para maior durabilidade",
      "Disponível em diferentes tamanhos"
    ]
  },
  "item-03": {
    nome: "Cadeado",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-03.jpg",
    preco: "R$ 79,00",
    descricaoCurta: "Cadeado resistente para maior segurança da bike.",
    descricaoLonga:
      "Deixe sua bike estacionada com tranquilidade. Este cadeado conta com estrutura reforçada resistente a cortes, protegendo sua bicicleta contra furtos em qualquer lugar que você precise deixá-la.",
    especificacoes: [
      "Estrutura em aço temperado resistente a cortes",
      "Revestimento externo que protege a pintura da bike",
      "Chave com sistema antifalsificação",
      "Fácil de transportar preso ao quadro",
      "Indicado para uso diário em ambientes urbanos"
    ]
  },
  "item-04": {
    nome: "Garrafa",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-04.jpg",
    preco: "R$ 39,00",
    descricaoCurta: "Garrafa com suporte para hidratação durante o percurso.",
    descricaoLonga:
      "Manter a hidratação em dia é essencial em qualquer pedalada. Esta garrafa acompanha suporte de fácil instalação no quadro da bike, permitindo acesso rápido à água sem precisar parar de pedalar.",
    especificacoes: [
      "Material atóxico e livre de BPA",
      "Suporte de fácil instalação no quadro",
      "Bico de vedação que evita vazamentos",
      "Capacidade ideal para pedais longos",
      "Fácil de higienizar"
    ]
  },
  "item-05": {
    nome: "Luzes",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-05.jpg",
    preco: "R$ 49,00",
    descricaoCurta: "Sinalização de LED para pedalar com segurança à noite.",
    descricaoLonga:
      "Ser visto no trânsito é fundamental para pedalar com segurança. Este kit de luzes de LED oferece sinalização dianteira e traseira com diferentes modos de piscar, aumentando sua visibilidade em pedais noturnos ou em dias de pouca luz.",
    especificacoes: [
      "Kit com luz dianteira e traseira",
      "Vários modos de iluminação, incluindo piscante",
      "Fixação rápida e sem ferramentas",
      "Bateria recarregável via USB",
      "Resistente a respingos de água"
    ]
  },
  "item-06": {
    nome: "Bomba de ar",
    categoria: "acessorios",
    categoriaLabel: "Acessórios",
    badge: "Acessório",
    imagem: "assets/produtos/item-06.jpg",
    preco: "R$ 69,00",
    descricaoCurta: "Bomba portátil para calibrar os pneus onde estiver.",
    descricaoLonga:
      "Nunca fique na mão com um pneu murcho. Esta bomba portátil é compacta o suficiente para levar em qualquer pedal, permitindo calibrar os pneus rapidamente onde quer que você esteja.",
    especificacoes: [
      "Compacta e leve para levar em qualquer pedal",
      "Compatível com válvulas Presta e Schrader",
      "Manômetro para conferir a pressão dos pneus",
      "Suporte de fixação para o quadro da bike",
      "Construção resistente em alumínio"
    ]
  },

  "item-07": {
    nome: "Camisa",
    categoria: "roupas",
    categoriaLabel: "Vestuário",
    badge: "Vestuário",
    imagem: "assets/produtos/item-07.jpg",
    preco: "R$ 99,00",
    descricaoCurta: "Camisa respirável, ideal para pedaladas longas.",
    descricaoLonga:
      "Feita com tecido respirável e de secagem rápida, esta camisa de ciclismo acompanha o corpo durante toda a pedalada, mantendo o conforto térmico mesmo em treinos longos ou dias quentes.",
    especificacoes: [
      "Tecido respirável e de secagem rápida",
      "Modelagem ergonômica que acompanha os movimentos",
      "Zíper frontal para ventilação extra",
      "Bolsos traseiros para pequenos itens",
      "Proteção UV"
    ]
  },
  "item-08": {
    nome: "Bermuda",
    categoria: "roupas",
    categoriaLabel: "Vestuário",
    badge: "Vestuário",
    imagem: "assets/produtos/item-08.jpg",
    preco: "R$ 119,00",
    descricaoCurta: "Bermuda com forro confortável para longos trajetos.",
    descricaoLonga:
      "Esta bermuda de ciclismo conta com forro acolchoado que reduz o desconforto em longos trajetos, além de um tecido com boa elasticidade que acompanha os movimentos durante toda a pedalada.",
    especificacoes: [
      "Forro acolchoado para maior conforto no selim",
      "Tecido com alta elasticidade",
      "Cintura com ajuste elástico",
      "Costuras planas que evitam atrito na pele",
      "Secagem rápida"
    ]
  },
  "item-09": {
    nome: "Jaqueta",
    categoria: "roupas",
    categoriaLabel: "Vestuário",
    badge: "Vestuário",
    imagem: "assets/produtos/item-09.jpg",
    preco: "R$ 189,00",
    descricaoCurta: "Jaqueta corta-vento para dias mais frios.",
    descricaoLonga:
      "Ideal para pedalar em dias mais frios ou ventosos, esta jaqueta corta-vento protege do frio sem pesar na hora de pedalar. Leve e compacta, pode ser facilmente guardada na mochila quando não estiver em uso.",
    especificacoes: [
      "Tecido corta-vento e resistente a respingos",
      "Leve e fácil de dobrar e guardar",
      "Zíper frontal com proteção emborrachada",
      "Punhos ajustáveis para vedar o frio",
      "Detalhes refletivos para maior visibilidade"
    ]
  },
  "item-10": {
    nome: "Luvas de ciclismo",
    categoria: "roupas",
    categoriaLabel: "Vestuário",
    badge: "Vestuário",
    imagem: "assets/produtos/item-10.jpg",
    preco: "R$ 45,00",
    descricaoCurta: "Modelo em tecido leve para dias quentes.",
    descricaoLonga:
      "Uma opção mais leve de luva para dias quentes, feita em tecido respirável que protege as mãos sem pesar na pedalada. Ideal para quem busca praticidade sem abrir mão de um mínimo de proteção durante os treinos.",
    especificacoes: [
      "Tecido leve e respirável",
      "Ideal para dias quentes",
      "Ajuste confortável ao punho",
      "Boa aderência ao guidão",
      "Fácil de lavar e guardar"
    ]
  }
};
