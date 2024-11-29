import { Evento } from "../evento/models/evento";

export const eventos: Evento[] = [
  {
    id: "4e3156b8-9ca7-4ac3-9ada-5477ece91620",
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: new Date("2024-12-01T10:00:00Z"),
    local: "São Paulo, SP",
    descricao:
      "Um evento completo para aprender desenvolvimento fullstack do zero.",
    image:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    imageBackground:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: "h1g2x30pglq-2qy7mc3nd8h-qq494djtbcq",
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 1,
      },
      {
        id: "unzgczdy0gp-uqljtf756de-ibfnezyz5f",
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
      {
        id: "hqzmy1wi9gl-rgmibulirh-1k2twwu6waj",
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 2,
      },
    ],
  },
  {
    id: "bfb21b1f-fa30-459e-a423-e89578d2d880",
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avançado de JavaScript",
    data: new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avançado para programadores JavaScript.",
    image:
      "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imageBackground:
      "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: "epy7dvzdn-h5ffojxd8xf-4u3dbflvkcs",
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
      {
        id: "q5pb671a0e-3a1txyighat-sbu67d47s8",
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 1,
      },
    ],
  },
  {
    id: "e0e0c3ae-0ccd-46ca-84ac-d1abff4ec8bc",
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incríveis e responsivas.",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imageBackground:
      "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "8tpp19ouoqi-6nm51io1n5a-lw6itbwufu",
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 1,
      },
      {
        id: "a22ufkd5y2-6quz4dv5wln-qbbzwq551zs",
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
      {
        id: "cyy99oylu4w-s6c387plg5k-uyieywntrh",
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
    ],
  },
  {
    id: "af791892-44e6-47fd-8c9d-2d3febcb015a",
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: new Date("2024-11-25T16:00:00Z"),
    local: "Florianópolis, SC",
    descricao:
      "Celebração do casamento de Alberto e Marina com amigos e familiares.",
    image:
      "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imageBackground:
      "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: "6odwyyikpiu-4rm8d4upd7a-2ve4yb8dq2",
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 1,
      },
      {
        id: "eg7lxxznuva-d4cnx48ijqt-iz6xznoo5ts",
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
    ],
  },
  {
    id: "816de463-0aa0-4ac7-9a66-d530d0c99c8c",
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Aniversário do João - 30 Anos",
    data: new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao:
      "Comemoração dos 30 anos de João com amigos próximos e familiares.",
    image:
      "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imageBackground:
      "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: "ir1r1ucu2od-461dkhc72tm-ydo4met07uj",
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 2,
      },
      {
        id: "95qacnirxwr-ffuhv3s0nd9-nsu3rl4djee",
        nome: "José Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
    ],
  },
  {
    id: "801fdbb9-7530-4c6e-9da8-cb6d857419b5",
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inauguração da Loja Estrela",
    data: new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao:
      "Evento de inauguração da nova loja Estrela com brindes e promoções.",
    image:
      "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imageBackground:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: "c1a5x0qgus-cfswa77ods5-z4nn6bezylp",
        nome: "Cláudia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 3,
      },
      {
        id: "npsgd64c31a-c30fsot6cpk-sbsuwwahdda",
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
    ],
  },
  {
    id: "37916f28-fa80-4a2e-b0ce-ff1846beb630",
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reunião da Família Oliveira",
    data: new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reunião de fim de ano da família Oliveira.",
    image:
      "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imageBackground:
      "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: "oqsjw6lyayh-q9b8sxtkvu-9cmebgi34ru",
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdAcompanhate: 4,
      },
      {
        id: "1wrml69nqd7-re2ywt674ic-vw5dbfxoj4q",
        nome: "Letícia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdAcompanhate: 0,
      },
    ],
  },
];
