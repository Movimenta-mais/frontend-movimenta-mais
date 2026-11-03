import type { Equipament } from "@/types/equipamentTypes";

/**
 * Dados provisórios dos aparelhos, até existir uma API.
 * Os passos e os cuidados seguem o catálogo de exercícios. Precisam de revisão de
 * um profissional de educação física, por não estarem no design nem no catálogo:
 * as descrições de "Abdução de pernas" e "Simulador de caminhada", o resumo e a
 * descrição de "Simulador de remo" e "Elíptico" e os títulos dos passos.
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
];
