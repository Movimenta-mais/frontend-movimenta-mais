import type { Equipament } from "@/types/equipamentTypes";

/**
 * Dados provisórios dos aparelhos, até existir uma API.
 * Os passos e os cuidados seguem o catálogo de exercícios. Precisam de revisão de
 * um profissional de educação física, por não estarem no design nem no catálogo:
 * as descrições de "Abdução de pernas" e "Simulador de caminhada", o resumo e a
 * descrição de "Simulador de remo" e "Elíptico", o resumo e a descrição dos
 * aparelhos 7 a 14 e os títulos dos passos.
 */
export const EQUIPAMENTS: Equipament[] = [
  {
    id: 1,
    name: "Pressão de pernas duplo",
    summary: "Fortalece os membros inferiores e melhora o condicionamento.",
    description:
      "Este aparelho trabalha os músculos das pernas e ajuda a melhorar a força e o equilíbrio.",
    bodyPart: "pernas",
    illustration: "leg-press",
    video: { url: "/videos/pressao-de-pernas-duplo.mp4", durationInSeconds: 10 },
    steps: [
      {
        title: "Posição inicial",
        description: "Apoie os pés na plataforma e mantenha as costas firmes.",
      },
      {
        title: "Movimento",
        description:
          "Flexione os joelhos lentamente e, em seguida, empurre a plataforma até quase estender as pernas.",
      },
      {
        title: "Retorno",
        description: "Retorne de forma controlada.",
      },
    ],
    precautions: [
      "Evite fechar os joelhos.",
      "Mantenha os pés bem apoiados durante todo o movimento.",
      "Mantenha a coluna apoiada no banco.",
    ],
  },
  {
    id: 2,
    name: "Simulador de cavalgada",
    summary: "Melhora o equilíbrio e a coordenação motora.",
    description:
      "Este aparelho fortalece as pernas e o abdômen, além de melhorar o equilíbrio e a coordenação.",
    bodyPart: "pernas",
    illustration: "horse-rider",
    video: { url: "/videos/simulador-de-cavalgada.mp4", durationInSeconds: 13 },
    steps: [
      {
        title: "Posição inicial",
        description:
          "Sente-se no aparelho, apoie os pés nos pedais e segure as barras.",
      },
      {
        title: "Movimento",
        description:
          "Empurre os pedais com as pernas enquanto movimenta as barras com os braços, simulando o movimento de cavalgar.",
      },
    ],
    precautions: [
      "Mantenha as mãos e pés firmes nas plataformas.",
      "Evite movimentos rápidos ou bruscos.",
      "Não estenda completamente os joelhos.",
      "Respeite seus limites e interrompa o exercício em caso de dor ou tontura.",
    ],
  },
  {
    id: 3,
    name: "Abdução de pernas",
    summary: "Trabalha a parte interna e externa das coxas.",
    description:
      "Este aparelho fortalece a parte interna e externa das coxas e ajuda na estabilidade do quadril.",
    bodyPart: "pernas",
    illustration: "leg-abduction",
    steps: [
      {
        title: "Posição inicial",
        description: "Suba nas plataformas e segure firmemente as barras.",
      },
      {
        title: "Movimento",
        description: "Mantenha o corpo ereto e afaste as pernas lateralmente.",
      },
      {
        title: "Retorno",
        description: "Aproxime-as lentamente, retornando à posição inicial.",
      },
    ],
    precautions: [
      "Mantenha as mãos e os pés apoiados nas plataformas.",
      "Evite inclinar excessivamente o tronco.",
      "Não faça movimentos bruscos ou rápidos.",
      "Respeite sua amplitude de movimento.",
    ],
  },
  {
    id: 4,
    name: "Simulador de caminhada",
    summary: "Auxilia na mobilidade e no condicionamento físico.",
    description:
      "Este aparelho simula a caminhada e ajuda a melhorar a mobilidade, a circulação e o condicionamento.",
    bodyPart: "caminhada",
    illustration: "walker",
    steps: [
      {
        title: "Posição inicial",
        description:
          "Suba nas plataformas, segure as barras e mantenha o corpo ereto.",
      },
      {
        title: "Movimento",
        description:
          "Movimente as pernas alternadamente para frente e para trás, simulando uma caminhada.",
      },
      {
        title: "Ritmo",
        description:
          "Realize o movimento de forma contínua e controlada, mantendo os pés apoiados nas plataformas.",
      },
    ],
    precautions: [
      "Mantenha as mãos e os pés apoiados nas plataformas.",
      "Evite movimentos muito rápidos ou bruscos.",
      "Mantenha a postura ereta e olhe para frente.",
      "Pare se sentir dor, tontura ou desconforto.",
    ],
  },
  {
    id: 5,
    name: "Simulador de remo",
    summary: "Fortalece os braços, os ombros e as costas.",
    description:
      "Este aparelho simula o movimento de remar e ajuda a fortalecer os braços, os ombros e as costas.",
    bodyPart: "bracos",
    illustration: "rower",
    steps: [
      {
        title: "Posição inicial",
        description: "Sente-se, apoie os pés e segure as alças.",
      },
      {
        title: "Movimento",
        description:
          "Puxe-as em direção ao corpo, mantendo as costas alinhadas, e retorne lentamente à posição inicial.",
      },
    ],
    precautions: [
      "Mantenha as costas alinhadas durante o exercício.",
      "Não faça movimentos rápidos ou bruscos.",
      "Mantenha as mãos e os pés firmes nos apoios.",
      "Respeite sua amplitude e capacidade de movimento.",
    ],
  },
  {
    id: 6,
    name: "Elíptico",
    summary: "Movimenta braços e pernas e melhora o condicionamento.",
    description:
      "Este aparelho movimenta braços e pernas ao mesmo tempo e ajuda a melhorar o condicionamento e a coordenação.",
    bodyPart: "corpo-todo",
    illustration: "elliptical",
    video: { url: "/videos/simulador-de-esqui.mp4", durationInSeconds: 16 },
    steps: [
      {
        title: "Posição inicial",
        description:
          "Suba nas plataformas, segure as barras e mantenha o corpo ereto.",
      },
      {
        title: "Movimento",
        description:
          "Movimente braços e pernas de forma alternada, simulando uma caminhada, mantendo os pés apoiados e o movimento contínuo e controlado.",
      },
    ],
    precautions: [
      "Mantenha as mãos e pés firmes nos apoios.",
      "Não faça movimentos bruscos ou muito rápidos.",
      "Respeite seus limites e interrompa o exercício se sentir dor, tontura ou desconforto.",
    ],
  },
  {
    id: 7,
    name: "Puxador duplo c/ articulação superior",
    summary: "Fortalece as costas, os ombros e os braços.",
    description:
      "Este aparelho simula o movimento de puxada e ajuda a fortalecer as costas, os ombros e os braços.",
    bodyPart: "bracos",
    illustration: "lat-pulldown",
    steps: [
      {
        title: "Movimento",
        description:
          "Segure as manoplas com as duas mãos e realize o movimento de puxada de forma simultânea, conduzindo os braços para baixo e em direção ao corpo.",
      },
      {
        title: "Postura",
        description:
          "Mantenha o tronco ereto e os movimentos controlados, evitando compensações.",
      },
    ],
    precautions: [
      "Não faça movimentos bruscos.",
      "Mantenha a coluna em posição alinhada, encostada no banco.",
    ],
  },
  {
    id: 8,
    name: "Peitoral duplo c/ articulação superior",
    summary: "Fortalece o peitoral, os ombros e os braços.",
    description:
      "Este aparelho trabalha o movimento de empurrar e ajuda a fortalecer o peitoral, os ombros e os braços.",
    bodyPart: "bracos",
    illustration: "chest-press",
    steps: [
      {
        title: "Movimento",
        description:
          "Segure as manoplas e empurre os braços à frente de forma simultânea, aproximando as mãos até uma posição segura, com movimento controlado.",
      },
      {
        title: "Retorno",
        description:
          "Retorne lentamente à posição inicial, mantendo o tronco estável e a postura alinhada.",
      },
    ],
    precautions: [
      "Evite estender demais os cotovelos.",
      "Evite movimentos bruscos e amplitudes que causem dor ou desconforto nos ombros.",
    ],
  },
  {
    id: 9,
    name: "Rotação vertical duplo",
    summary: "Melhora a mobilidade dos ombros.",
    description:
      "Este aparelho trabalha a rotação dos braços e ajuda a melhorar a mobilidade das articulações dos ombros.",
    bodyPart: "bracos",
    illustration: "shoulder-wheel",
    steps: [
      {
        title: "Movimento",
        description:
          "Segure as manoplas e realize o movimento de rotação dos braços no plano vertical, de forma simultânea e controlada, promovendo a mobilidade das articulações dos ombros.",
      },
      {
        title: "Postura",
        description: "Mantenha o tronco ereto durante toda a execução.",
      },
    ],
    precautions: [
      "Utilize uma amplitude confortável.",
      "Evite movimentos bruscos ou forçados.",
      "Interrompa o exercício caso sinta dor ou desconforto.",
    ],
  },
  {
    id: 10,
    name: "Barras paralelas I",
    summary: "Fortalece os braços, os ombros e o peitoral.",
    description:
      "Este aparelho usa o peso do próprio corpo e ajuda a fortalecer os braços, os ombros e o peitoral.",
    bodyPart: "bracos",
    illustration: "parallel-bars",
    steps: [
      {
        title: "Posição inicial",
        description:
          "Apoie as mãos sobre as barras e, mantendo os braços estendidos, eleve o corpo retirando os pés do chão.",
      },
      {
        title: "Movimento",
        description:
          "Em seguida, flexione os cotovelos para descer o corpo e estenda-os novamente para retornar à posição inicial.",
      },
    ],
    precautions: [
      "Mantenha o tronco estabilizado.",
      "Evite descer além de uma amplitude confortável.",
      "Realize o movimento de forma controlada para não sobrecarregar ombros e cotovelos.",
    ],
  },
  {
    id: 11,
    name: "Barras paralelas II",
    summary: "Melhora a mobilidade do tronco.",
    description:
      "Este aparelho trabalha a rotação do tronco e ajuda a melhorar a mobilidade da coluna e da cintura.",
    bodyPart: "corpo-todo",
    illustration: "twist-bars",
    steps: [
      {
        title: "Posição inicial",
        description:
          "Posicione-se de frente para o equipamento, segure as barras com as duas mãos e mantenha os pés firmes no chão.",
      },
      {
        title: "Movimento",
        description:
          "Realize uma rotação controlada do tronco, conduzindo o corpo para um dos lados enquanto utiliza as barras como apoio.",
      },
      {
        title: "Retorno",
        description:
          "Retorne lentamente à posição inicial e repita para o outro lado.",
      },
    ],
    precautions: [
      "Mantenha o quadril e os pés estáveis.",
      "Evite movimentos bruscos.",
      "Não force a rotação além de uma amplitude confortável.",
    ],
  },
  {
    id: 12,
    name: "Abdominal declinado",
    summary: "Fortalece o abdômen.",
    description:
      "Este aparelho trabalha a flexão do tronco e ajuda a fortalecer o abdômen e a estabilidade do corpo.",
    bodyPart: "corpo-todo",
    illustration: "sit-up-bench",
    steps: [
      {
        title: "Posição inicial",
        description:
          "Posicione-se no equipamento com os pés firmemente apoiados e o corpo estabilizado.",
      },
      {
        title: "Movimento",
        description:
          "Realize a flexão do tronco de forma controlada, aproximando o peito da região do quadril, e retorne lentamente à posição inicial.",
      },
    ],
    precautions: [
      "Evite puxar o pescoço.",
      "Não realize movimentos bruscos.",
      "Respeite seus limites para não sobrecarregar a coluna.",
    ],
  },
  {
    id: 13,
    name: "Barra fixa",
    summary: "Fortalece as costas e os braços.",
    description:
      "Este aparelho usa o peso do próprio corpo e ajuda a fortalecer as costas, os ombros e os braços.",
    bodyPart: "bracos",
    illustration: "pull-up-bar",
    steps: [
      {
        title: "Posição inicial",
        description:
          "Segure a barra com as mãos afastadas aproximadamente na largura dos ombros.",
      },
      {
        title: "Movimento",
        description:
          "Realize a elevação do corpo por meio da flexão dos cotovelos, aproximando o queixo da barra.",
      },
      {
        title: "Retorno",
        description: "Retorne de forma lenta e controlada à posição inicial.",
      },
    ],
    precautions: [
      "Mantenha o tronco estabilizado.",
      "Evite balanços excessivos.",
      "Respeite sua capacidade física para prevenir sobrecarga nos ombros e cotovelos.",
    ],
  },
  {
    id: 14,
    name: "Jogo de barras",
    summary: "Alongamento, equilíbrio e fortalecimento em um só lugar.",
    description:
      "Este conjunto de barras permite alongar, treinar o equilíbrio e fortalecer o corpo todo com vários exercícios.",
    bodyPart: "corpo-todo",
    illustration: "bar-set",
    steps: [
      {
        title: "Alongamento da cadeia posterior",
        description:
          "Apoie uma das pernas em uma barra e incline suavemente o tronco em direção à perna elevada. Evite forçar a amplitude.",
      },
      {
        title: "Alongamento de ombros e peitoral",
        description:
          "Segure uma das barras com a mão e realize uma leve rotação do tronco para o lado oposto. Não force a articulação.",
      },
      {
        title: "Alongamento lateral do tronco",
        description:
          "Segure a barra acima da altura dos ombros e incline o tronco lentamente para o lado oposto. Mantenha os pés firmes no chão.",
      },
      {
        title: "Apoio para exercícios de equilíbrio",
        description:
          "Utilize as barras laterais como suporte para exercícios de equilíbrio, como permanecer em apoio unipodal (uma perna). Segure o equipamento sempre que necessário para evitar quedas.",
      },
      {
        title: "Flexão inclinada na barra",
        description:
          "Apoie as mãos em uma barra na altura adequada, mantenha o corpo alinhado e flexione os cotovelos, aproximando o peito da barra. Em seguida, empurre o corpo para retornar à posição inicial.",
      },
      {
        title: "Remada invertida",
        description:
          "Segure uma barra horizontal com as mãos, posicione o corpo inclinado e puxe o peito em direção à barra por meio da flexão dos cotovelos.",
      },
      {
        title: "Agachamento com apoio",
        description:
          "Segure a barra à frente para auxiliar no equilíbrio e realize a flexão dos joelhos e quadris, descendo o corpo de forma controlada.",
      },
    ],
    precautions: [
      "Nos alongamentos, não force a amplitude nem as articulações.",
      "Segure o equipamento sempre que necessário para evitar quedas.",
      "Na flexão inclinada, mantenha o corpo alinhado e evite deixar o quadril instável.",
      "Na remada invertida, mantenha o tronco firme.",
      "No agachamento, mantenha os pés firmes no chão e evite que os joelhos se movimentem para dentro.",
    ],
  },
];
