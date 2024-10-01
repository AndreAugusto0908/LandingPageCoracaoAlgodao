import { Users } from "lucide-react";
import { Target } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Award } from "lucide-react";

export const navItems = [
  { label: "Sobre nós", section: "sobreNosRef" },
  { label: "Recursos", section: "recursosRef" },
  { label: "Público de interesse", section: "publicoAlvoRef" },
  { label: "Protótipo", section: "prototipoRef" },
];

  export const features = [
    {
      icon: <Users />,
      text: "Equipe Multidisciplinar",
      description:
        "O projeto foi desenvolvido por quatro estudantes da PUC Minas de diferentes cursos: André Augusto, Victor Hugo, Vitor Abreu e Lucas Simplicio. Cada um trouxe suas habilidades únicas para criar uma solução inovadora.",
    },
    {
      icon: <Target />,
      text: "Objetivo",
      description:
        "Desenvolver uma plataforma que facilite a doação de roupas, conectando pessoas e empresas a instituições sociais, garantindo que as roupas cheguem aos necessitados de maneira eficiente e organizada.",
    },
    {
      icon: <TrendingUp />,
      text: "Impacto Social Esperado",
      description:
        "Promover um impacto positivo através da redistribuição de roupas, contribuindo para reduzir o desperdício e auxiliar comunidades vulneráveis, gerando resultados mensuráveis através de parcerias com ONGs e empresas.",
    },
    {
      icon: <GlobeLock />,
      text: "Contribuição para as ODS 1 e 10",
      description:
        "Nosso projeto está alinhado com as ODS 1 (Erradicação da Pobreza) e 10 (Redução das Desigualdades). Facilitando a doação de roupas, buscamos contribuir para a redução da pobreza ao fornecer vestuário para pessoas em situação de vulnerabilidade, enquanto promovemos a igualdade ao criar uma ponte entre doadores e beneficiários de diferentes contextos sociais.",
    },
    {
      icon: <ShieldCheck />,
      text: "Transparência e Responsabilidade",
      description:
        "O projeto prioriza a transparência no destino das doações, garantindo que os doadores possam acompanhar o caminho das roupas e confirmar que elas estão chegando a quem realmente precisa.",
    },
    {
      icon: <Award />,
      text: "Métricas e Resultados",
      description:
        "Utilizamos métricas de impacto social e ambiental para medir o sucesso do projeto, como o número de peças doadas, famílias beneficiadas e o impacto ambiental positivo gerado pela reutilização de roupas.",
    },
  ];

  export const checklistItems = [
    {
      title: "Verificação de Usuário",
      description:
        "Implementação de um sistema robusto para garantir que não haja duplicação de perfis, assegurando a autenticidade de cada usuário registrado.",
    },
    {
      title: "Disponibilização de Roupas para Doação",
      description:
        "Os usuários poderão disponibilizar suas roupas de forma fácil e rápida, organizando as doações por categorias e condições das peças.",
    },
    {
      title: "Recebimento de Roupas pelas Empresas",
      description:
        "As empresas parceiras poderão receber as doações diretamente através da plataforma, garantindo a distribuição correta para quem mais precisa.",
    },
    {
      title: "Verificação de CNPJ",
      description:
        "Um sistema de verificação de CNPJ será implementado para assegurar que todas as empresas cadastradas sejam legítimas e comprometidas com o bem-estar social.",
    },
  ];

  export const publicoAlvo = [
    {
      title: "Indivíduos",
      features: [
        "Doadores que desejam contribuir com roupas em bom estado para pessoas necessitadas.",
        "Usuários que querem impactar positivamente suas comunidades ao realizar doações regulares.",
        "Pessoas interessadas em uma solução prática e rápida para doar roupas."
      ],
    },
    {
      title: "Empresas",
      features: [
        "Empresas que desejam contribuir com doações em grande escala.",
        "Organizações que buscam fortalecer sua responsabilidade social corporativa.",
        "Companhias comprometidas em ajudar comunidades vulneráveis por meio de doações de roupas."
      ],
    },
    {
      title: "ONGs e Instituições",
      features: [
        "Organizações não governamentais que distribuem roupas para pessoas em situação de vulnerabilidade.",
        "Instituições que precisam receber doações de roupas para manter seus projetos sociais ativos.",
        "Grupos focados em causas humanitárias."
      ],
    },
  ];
  
  