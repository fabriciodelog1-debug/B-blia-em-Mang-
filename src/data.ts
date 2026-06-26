export interface CharacterStats {
  fe: number;       // Fé (Faith) - Out of 100
  coragem: number;  // Coragem (Courage)
  sabedoria: number;// Sabedoria (Wisdom)
  impacto: number;  // Impacto Épico (Epic Impact / Power)
  alianca: number;  // Aliança / Destino (Covenant / Destiny)
}

export interface Character {
  id: string;
  name: string;
  title: string;
  era: string;
  specialMove: string;
  specialMoveDesc: string;
  stats: CharacterStats;
  bio: string;
  keyVerse: string;
  keyVerseRef: string;
  illustrationUrl: string;
}

export interface ComicDialog {
  speaker: string;
  text: string;
  type: "speech" | "thought" | "narrator" | "shout";
}

export interface ComicPanel {
  id: number;
  title: string;
  verseText: string;
  verseRef: string;
  actionDescription: string;
  dialogs: ComicDialog[];
  soundEffect: string; // e.g. "FWOSH", "DODODO", "KABUM"
  soundEffectTranslation: string; // Translation or meaning
  historicalNote: string; // Border note specifically for this panel
}

export interface Chapter {
  id: string;
  number: number;
  characterId: string;
  title: string;
  summary: string;
  panels: ComicPanel[];
  extraHistoryNote: {
    title: string;
    content: string;
  };
  theologicalContext: string;
  imageUrl?: string; // Optional custom generated image URL
}

export interface QuizQuestion {
  id: number;
  characterId: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export const CHARACTERS: Record<string, Character> = {
  adao_eva: {
    id: "adao_eva",
    name: "Adão e Eva",
    title: "Os Primeiros Guardiões",
    era: "Primórdios da Criação (Idade Pré-Histórica Bíblica)",
    specialMove: "Sopro da Vida (Neshama)",
    specialMoveDesc: "O sopro divino direto que confere consciência e espírito vivo do próprio Criador.",
    stats: { fe: 80, coragem: 65, sabedoria: 60, impacto: 85, alianca: 95 },
    bio: "Criados à imagem e semelhança do Criador para governar e zelar pelo Jardim do Éden. Enfrentaram o primeiro teste moral da humanidade diante da Serpente e do Fruto do Conhecimento, resultando no exílio, mas também na promessa de redenção futura.",
    keyVerse: "Criou Deus o homem à sua imagem, à imagem de Deus o criou; homem e mulher os criou.",
    keyVerseRef: "Gênesis 1:27",
    illustrationUrl: "/src/assets/images/manga_adao_eva_1782499164526.jpg",
  },
  noe: {
    id: "noe",
    name: "Noé",
    title: "O Construtor do Novo Mundo",
    era: "Época Antediluviana / Bronze Antigo",
    specialMove: "Arca da Salvação (Tevah)",
    specialMoveDesc: "Construção inspirada de uma cidadela flutuante capaz de resistir ao maior cataclismo hidráulico do planeta.",
    stats: { fe: 95, coragem: 90, sabedoria: 80, impacto: 95, alianca: 90 },
    bio: "O único homem justo e íntegro em uma geração corrompida pela violência. Obedeceu fielmente às instruções divinas exatas para construir uma arca colossal de madeira de gofer no meio da terra firme, salvaguardando a criação física e reiniciando a humanidade.",
    keyVerse: "Noé fez tudo exatamente como Deus lhe havia ordenado.",
    keyVerseRef: "Gênesis 6:22",
    illustrationUrl: "",
  },
  abraao: {
    id: "abraao",
    name: "Abraão",
    title: "O Pai da Fé",
    era: "Idade do Bronze Médio (c. 2000 a.C.)",
    specialMove: "Sacrifício da Aliança (Akedah)",
    specialMoveDesc: "Uma fé tão inabalável que está disposta a entregar o seu maior tesouro físico de volta ao Criador.",
    stats: { fe: 100, coragem: 85, sabedoria: 90, impacto: 90, alianca: 100 },
    bio: "Chamado a sair de sua terra natal, Ur dos Caldeus, para uma terra desconhecida. Deus prometeu que sua descendência seria tão numerosa quanto as estrelas do céu. Provado ao extremo no Monte Moriá, tornou-se o patriarca da aliança monoteísta.",
    keyVerse: "Olhe para o céu e conte as estrelas, se é que pode contá-las. Assim será a sua descendência.",
    keyVerseRef: "Gênesis 15:5",
    illustrationUrl: "",
  },
  jose: {
    id: "jose",
    name: "José do Egito",
    title: "O Senhor dos Sonhos",
    era: "Idade do Bronze Médio / Período Hicsor (c. 1700 a.C.)",
    specialMove: "Visão dos Anos de Fartura",
    specialMoveDesc: "Uma mente profética avançada capaz de ler códigos divinos em sonhos e planejar a sobrevivência econômica de impérios inteiros.",
    stats: { fe: 96, coragem: 80, sabedoria: 100, impacto: 85, alianca: 92 },
    bio: "O filho favorito de Jacó, traído e vendido como escravo por seus próprios irmãos devido a seus sonhos proféticos. No Egito, subiu da masmorra ao trono como Vizir de Faraó devido à sua sabedoria divinamente concedida, salvando o Oriente Médio da fome extrema.",
    keyVerse: "Vocês planejaram o mal contra mim, mas Deus o tornou em bem, para salvar muitas vidas.",
    keyVerseRef: "Gênesis 50:20",
    illustrationUrl: "",
  },
  moises: {
    id: "moises",
    name: "Moisés",
    title: "O Libertador e Legislador",
    era: "Idade do Bronze Tardio (c. 1440 ou 1250 a.C.)",
    specialMove: "Fenda do Mar Vermelho (Kriaat Yam Suf)",
    specialMoveDesc: "O estender do cajado que canaliza o forte vento oriental do Criador para abrir uma trincheira seca de salvação no oceano.",
    stats: { fe: 98, coragem: 95, sabedoria: 95, impacto: 100, alianca: 98 },
    bio: "Criado na corte do Faraó, fugiu para o deserto após defender um irmão hebreu. Do meio de uma sarça ardente que não se consumia, Deus o comissionou para confrontar o maior império da época, libertar Israel da escravidão e receber a Lei (Torá) no Monte Sinai.",
    keyVerse: "Moisés estendeu a mão sobre o mar, e o Senhor afastou o mar com um forte vento oriental.",
    keyVerseRef: "Êxodo 14:21",
    illustrationUrl: "/src/assets/images/manga_moses_color_1782506122152.jpg", // NEW BEAUTIFUL COLOR SPREAD
  },
  josue: {
    id: "josue",
    name: "Josué",
    title: "O General da Conquista",
    era: "Idade do Bronze Tardio / Início do Ferro (c. 1200 a.C.)",
    specialMove: "Toque do Shofar da Ruína",
    specialMoveDesc: "Sincronização de brados de guerra e sopros de trombetas sacerdotais que geram ressonância sísmica divina destruidora de muralhas.",
    stats: { fe: 92, coragem: 100, sabedoria: 85, impacto: 95, alianca: 85 },
    bio: "Sucessor escolhido de Moisés e comandante das forças de Israel. Conhecido por sua bravura inabalável, liderou a travessia milagrosa do rio Jordão e a campanha militar lendária contra as cidades fortificadas de Canaã, a começar pelos muros intransponíveis de Jericó.",
    keyVerse: "Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, pois o Senhor estará com você.",
    keyVerseRef: "Josué 1:9",
    illustrationUrl: "",
  },
  david: {
    id: "david",
    name: "Davi",
    title: "O Campeão Ungido",
    era: "Idade do Ferro Inicial (c. 1010-970 a.C.)",
    specialMove: "Arremesso da Rocha Justa",
    specialMoveDesc: "Aceleração cinética pura de um único seixo de ribeiro guiado pela autoridade espiritual para derrubar orgulho gigante.",
    stats: { fe: 97, coragem: 98, sabedoria: 88, impacto: 96, alianca: 95 },
    bio: "Pastor de ovelhas, tocador de harpa e o menor dos filhos de Jessé. Ungido secretamente pelo profeta Samuel, ganhou fama imediata ao derrubar o guerreiro filisteu gigante Golias com uma funda. Tornou-se o maior rei guerreiro de Israel, estabelecendo a dinastia messiânica.",
    keyVerse: "Você vem contra mim com espada e lança, mas eu vou contra você em nome do Senhor dos Exércitos.",
    keyVerseRef: "1 Samuel 17:45",
    illustrationUrl: "/src/assets/images/manga_david_1782499191963.jpg",
  },
  salomao: {
    id: "salomao",
    name: "Salomão",
    title: "O Rei da Glória e do Templo",
    era: "Idade do Ferro (c. 970-931 a.C.)",
    specialMove: "Sentença da Verdade Profunda",
    specialMoveDesc: "Discernimento psicológico e judicial absoluto que expõe a intenção oculta do coração humano instantaneamente.",
    stats: { fe: 88, coragem: 70, sabedoria: 100, impacto: 90, alianca: 90 },
    bio: "Filho e sucessor de Davi. Diante do privilégio de pedir qualquer coisa a Deus, pediu sabedoria e discernimento para governar seu povo. Governou em uma era de paz e riqueza sem precedentes, construindo o majestoso Primeiro Templo de Jerusalém e escrevendo Provérbios e Eclesiastes.",
    keyVerse: "Dei-lhe um coração sábio e capaz de discernir, de modo que nunca houve nem haverá ninguém como você.",
    keyVerseRef: "1 Reis 3:12",
    illustrationUrl: "",
  },
  jesus_vida: {
    id: "jesus_vida",
    name: "Jesus: Nascimento e Ministério",
    title: "O Verbo Encarnado",
    era: "Século I d.C. (Império Romano - Judeia)",
    specialMove: "Voz do Comando Supremo (Acalma o Mar)",
    specialMoveDesc: "Uma autoridade existencial que se dirige aos elementos criados e impõe silêncio e ordem absolutos.",
    stats: { fe: 100, coragem: 100, sabedoria: 100, impacto: 100, alianca: 100 },
    bio: "Nascido humildemente em uma manjedoura em Belém, cumpriu centenas de profecias messiânicas. Liderou um ministério revolucionário anunciando o Reino de Deus, curando doentes, ressuscitando mortos, demonstrando amor radical e chamando discípulos comuns para pescar homens.",
    keyVerse: "Hoje, na cidade de Davi, nasceu o Salvador, que é Cristo, o Senhor.",
    keyVerseRef: "Lucas 2:11",
    illustrationUrl: "/src/assets/images/manga_jesus_color_1782506101211.jpg", // NEW BEAUTIFUL COLOR SPREAD
  },
  jesus_ressurreicao: {
    id: "jesus_ressurreicao",
    name: "Jesus: Morte e Ressurreição",
    title: "O Leão Vitorioso da Tribo de Judá",
    era: "Século I d.C. (c. 30 ou 33 d.C. - Jerusalém)",
    specialMove: "Quebra das Correntes da Morte (Anastasis)",
    specialMoveDesc: "Vitória absoluta sobre o túmulo e o pecado, desarmando impérios espirituais e estendendo vida eterna a toda a humanidade.",
    stats: { fe: 100, coragem: 100, sabedoria: 100, impacto: 100, alianca: 100 },
    bio: "A maior narrativa dramática e redentora da história humana. Traído por trinta moedas, julgado injustamente por tribunais humanos, foi crucificado para assumir a culpa de toda a humanidade. Três dias após seu sepultamento, ressuscitou em glória física eterna, abrindo o caminho para a eternidade.",
    keyVerse: "Ele não está aqui; ressuscitou, como tinha dito. Venham ver o lugar onde ele jazia.",
    keyVerseRef: "Mateus 28:6",
    illustrationUrl: "/src/assets/images/manga_jesus_ressurreicao_1782499203519.jpg",
  }
};

export const CHAPTERS: Chapter[] = [
  {
    id: "cap1_adao_eva",
    number: 1,
    characterId: "adao_eva",
    title: "Gênesis: O Jardim e o Começo do Destino",
    summary: "A saga completa da criação humana: do sopro de vida ao cultivo do Éden, a criação de Eva, o teste moral da serpente e a expulsão rumo à esperança de resgate.",
    panels: [
      {
        id: 1,
        title: "O Sopro Primordial",
        verseText: "Então o Senhor Deus formou o homem do pó da terra e soprou em suas narinas o fôlego de vida; e o homem se tornou um ser vivente.",
        verseRef: "Gênesis 2:7",
        actionDescription: "Uma mão de pura luz divina molda a silhueta de Adão a partir do solo fértil. Ondas circulares de energia cósmica entram em seu peito, ativando seu espírito sob um céu estrelado primordial.",
        dialogs: [
          { speaker: "Narrador", text: "Nasce o primeiro guardião da terra, dotado de fôlego divino...", type: "narrator" },
          { speaker: "Adão", text: "*(Inalando o sopro sagrado)* Eu existo! Este ar... Sinto a força da vida divina vibrar em mim!", type: "shout" }
        ],
        soundEffect: "FWOOOOOOSHH!",
        soundEffectTranslation: "O sopro da vida preenchendo o vazio.",
        historicalNote: "Na antiga língua hebraica, pó da terra é 'Adama', ligada à terra fértil vermelha, de onde se origina o termo Adão."
      },
      {
        id: 2,
        title: "O Guardião do Éden",
        verseText: "O Senhor Deus tomou o homem e o colocou no jardim do Éden para o cultivar e o guardar.",
        verseRef: "Gênesis 2:15",
        actionDescription: "Adão caminha entre árvores gigantescas, examinando a flora intocada e nomeando animais heróicos com autoridade calma sob rios cristalinos que correm pelo vale.",
        dialogs: [
          { speaker: "Adão", text: "Cada ser vivo tem seu nome e propósito. Este jardim é o santuário da presença divina!", type: "speech" },
          { speaker: "Narrador", text: "Adão governa a criação com sabedoria sem mácula física ou moral.", type: "narrator" }
        ],
        soundEffect: "ZUMM-GLOW!",
        soundEffectTranslation: "A perfeita harmonia da natureza.",
        historicalNote: "A palavra 'Éden' significa prazer ou delícia no hebraico antigo, representando um oásis ideal cercado por desertos áridos."
      },
      {
        id: 3,
        title: "A União de Carne e Osso",
        verseText: "Disse o homem: 'Esta, sim, é osso dos meus ossos e carne da minha carne! Ela será chamada mulher'.",
        verseRef: "Gênesis 2:23",
        actionDescription: "Adão desperta de um sono profundo e vê Eva diante de si sob raios de sol perfeitos. Ele estende a mão com reverência e alegria pura.",
        dialogs: [
          { speaker: "Adão", text: "Osso dos meus ossos! Você é a companheira perfeita criada sob a luz do Criador!", type: "shout" },
          { speaker: "Eva", text: "*(Sorrindo com paz)* Juntos, guardaremos este legado eterno em perfeita aliança.", type: "speech" }
        ],
        soundEffect: "TUM-TUM... TUM-TUM...",
        soundEffectTranslation: "Batidas do coração em perfeito sincronismo.",
        historicalNote: "A fórmula 'osso dos meus ossos' era usada no antigo Oriente Médio para ratificar um pacto de lealdade indissolúvel e mútua."
      },
      {
        id: 4,
        title: "O Sussurro da Dúvida",
        verseText: "A serpente disse à mulher: 'Foi isto mesmo que Deus disse: Não comereis de nenhuma árvore do jardim?'",
        verseRef: "Gênesis 3:1",
        actionDescription: "Uma serpente imensa e reluzente se enrola nos galhos da Árvore do Conhecimento, sussurrando perto do ouvido de Eva com olhos hipnotizantes.",
        dialogs: [
          { speaker: "Serpente", text: "*(Sussurro sibilante)* Vocês não morrerão! Comer do fruto abrirá seus olhos e serão como o próprio Deus!", type: "speech" },
          { speaker: "Eva", text: "*(Hesitante, olhando o brilho enigmático do fruto)* Conhecimento... Ser igual ao Criador?", type: "thought" }
        ],
        soundEffect: "SHHHH-SSSS...",
        soundEffectTranslation: "O som sibilante da tentação semeando dúvida.",
        historicalNote: "A palavra 'Nachash' (serpente) está ligada ao bronze reluzente e ao sussurro, indicando astúcia hipnótica extrema."
      },
      {
        id: 5,
        title: "A Escolha Trágica",
        verseText: "E viu a mulher que aquela árvore era boa... tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu.",
        verseRef: "Gênesis 3:6",
        actionDescription: "Em um painel de alta tensão, Eva morde o fruto proibido sob sombras profundas que invadem o jardim. Ela entrega o fruto a Adão, cujo olhar expressa profundo conflito.",
        dialogs: [
          { speaker: "Adão", text: "*(Pensamento dramático)* Se ela cair na escuridão, eu não ficarei sozinho. Compartilharemos o destino!", type: "thought" },
          { speaker: "Narrador", text: "O primeiro ato de desobediência rompe a comunhão primordial da terra.", type: "narrator" }
        ],
        soundEffect: "CRUNCH!",
        soundEffectTranslation: "A quebra do pacto original.",
        historicalNote: "O fruto proibido não é identificado como maçã nas escrituras; na antiguidade mesopotâmica, figos ou romãs eram associados a árvores sagradas."
      },
      {
        id: 6,
        title: "A Expulsão e a Promessa do Resgate",
        verseText: "O Senhor Deus o expulsou do jardim... e pôs querubins ao oriente, e uma espada flamejante para guardar o caminho.",
        verseRef: "Gênesis 3:23-24",
        actionDescription: "Adão e Eva caminham para um deserto sob o entardecer, vestidos com túnicas de peles fornecidas por Deus. Atrás deles, na entrada do Éden, um Querubim colossal ergue uma espada de fogo que rasga o céu com raios azuis.",
        dialogs: [
          { speaker: "Adão", text: "A terra será dura, mas carregamos a promessa de que a semente da mulher esmagará a cabeça da serpente!", type: "speech" },
          { speaker: "Eva", text: "O Criador nos deu roupas de sacrifício... Há esperança de retorno!", type: "thought" },
          { speaker: "Narrador", text: "Assim começa a longa jornada da fé humana sob o sol da história.", type: "narrator" }
        ],
        soundEffect: "KRAAASH-BOOOM!",
        soundEffectTranslation: "O fechamento do Éden com justiça e fogo.",
        historicalNote: "A promessa da semente da mulher (Gênesis 3:15) é conhecida teologicamente como o 'Protoevangelho', o primeiro anúncio messiânico da Bíblia."
      }
    ],
    extraHistoryNote: {
      title: "O Contexto Geográfico do Éden",
      content: "As escrituras conectam o Éden a quatro rios reais, incluindo o Tigre e o Eufrates, localizando o berço da humanidade no Crescente Fértil da Mesopotâmia antiga."
    },
    theologicalContext: "Este capítulo estabelece que a humanidade foi criada para a imortalidade e comunhão, mas o pecado trouxe a fratura. No entanto, Deus imediatamente providencia o sacrifício de peles e a promessa de vitória messiânica."
  },
  {
    id: "cap2_noe",
    number: 2,
    characterId: "noe",
    title: "Gênesis: Noé e o Renascimento da Terra",
    summary: "O retrato detalhado da corrupção antediluviana, a ordem matemática para a Arca colossal, a entrada dos animais e a sobrevivência gloriosa sob o arco da aliança.",
    panels: [
      {
        id: 1,
        title: "O Chamado na Escuridão",
        verseText: "A terra estava corrompida diante de Deus e cheia de violência... Mas Noé achou graça aos olhos do Senhor.",
        verseRef: "Gênesis 6:11-18",
        actionDescription: "Noé ajoelha-se no topo de uma colina à noite, enquanto relâmpagos cruzam o céu. Abaixo, cidades rebeldes brilham com fogueiras de orgulho e violência.",
        dialogs: [
          { speaker: "Voz Divina", text: "O fim de toda a carne é chegado diante de mim. Mas contigo estabelecerei a minha aliança!", type: "shout" },
          { speaker: "Noé", text: "*(Determinado)* Senhor meu Deus, meu lar e minha vida obedecerão à Tua voz de justiça!", type: "speech" }
        ],
        soundEffect: "ZUUUUMMMM!",
        soundEffectTranslation: "A revelação divina rompendo as trevas morais.",
        historicalNote: "Noé é descrito como 'justo e íntegro em suas gerações', destacando-se de uma sociedade mergulhada em anarquia no Bronze Antigo."
      },
      {
        id: 2,
        title: "Construindo o Gigante de Madeira",
        verseText: "Faça para você uma arca de madeira de gofer... De trezentos côvados será o comprimento da arca.",
        verseRef: "Gênesis 6:14-15",
        actionDescription: "Noé e seus filhos trabalham duro sob o sol escaldante, serrando toras maciças de cipreste e aplicando betume fervente sobre a imensa estrutura que se assemelha a uma fortaleza naval.",
        dialogs: [
          { speaker: "Noé", text: "Alinhem as vigas e apliquem o piche! Cada compartimento salvará uma centelha de vida criada!", type: "shout" },
          { speaker: "Sem", text: "Os moradores vizinhos zombam de nós, mas nossas ferramentas continuarão batendo firme!", type: "speech" }
        ],
        soundEffect: "TOC! TOC! CLANK!",
        soundEffectTranslation: "O som rítmico da construção da fé.",
        historicalNote: "A arca media cerca de 135 metros de comprimento, uma escala monumental equivalente a porta-aviões modernos, ideal para estabilidade em mar agitado."
      },
      {
        id: 3,
        title: "A Marcha da Criação",
        verseText: "De tudo o que vive, de toda a carne, dois de cada espécie meterás na arca, para os conservar vivos contigo.",
        verseRef: "Gênesis 6:19",
        actionDescription: "Uma cena majestosa. Casais de animais majestosos (leões, águias, cervos, elefantes) caminham em fila indonésia subindo a enorme rampa de madeira em direção ao interior da Arca.",
        dialogs: [
          { speaker: "Noé", text: "Eles marcham guiados por um instinto superior... É a soberania divina preservando o amanhã!", type: "thought" },
          { speaker: "Narrador", text: "A biodiversidade terrestre encontra refúgio no santuário flutuante da promessa.", type: "narrator" }
        ],
        soundEffect: "RUUUUU-MBLLE!",
        soundEffectTranslation: "A marcha solene dos animais protegidos.",
        historicalNote: "No antigo Oriente Médio, as lendas de heróis do dilúvio salvando sementes de vida eram abundantes, mas a Arca de Noé destaca-se pela preservação ecológica sistemática."
      },
      {
        id: 4,
        title: "O Cataclismo Total",
        verseText: "Romperam-se todas as fontes do grande abismo, e as comportas dos céus se abriram... e as águas cresceram sobremaneira.",
        verseRef: "Gênesis 7:11-19",
        actionDescription: "Cena apocalíptica extrema. Muralhas titânicas de água do abismo oceânico se colidem com torrentes que caem do céu nublado. A Arca colossal flutua erguendo-se sobre ondas gigantescas.",
        dialogs: [
          { speaker: "Noé", text: "*(Segurando-se firmemente no leme)* O antigo mundo foi submerso... Senhor, preserva as almas dentro deste madeiro!", type: "shout" },
          { speaker: "Narrador", text: "As comportas da criação se fecham e a terra volta ao estado aquático caótico primordial.", type: "narrator" }
        ],
        soundEffect: "KRA-KAAAABUUUUMM!",
        soundEffectTranslation: "O estrondo do colapso hidráulico global.",
        historicalNote: "O dilúvio é apresentado como uma 'des-criação', onde as águas de cima e de baixo (separadas em Gênesis 1) voltam a se unir."
      },
      {
        id: 5,
        title: "O Voo da Esperança",
        verseText: "Noé soltou uma pomba... e a pomba voltou a ele à tarde; e eis, no seu bico, uma folha verde de oliveira.",
        verseRef: "Gênesis 8:10-11",
        actionDescription: "Noé abre a janela superior da Arca sob raios de sol suaves. Uma linda pomba branca pousa em seus dedos estendidos, segurando uma folha verde de oliveira molhada.",
        dialogs: [
          { speaker: "Noé", text: "*(Lágrimas escorrendo)* A terra voltou a respirar! Há vida germinando sob o lodo!", type: "speech" },
          { speaker: "Filhos", text: "As águas secaram totalmente! Nós sobrevivemos!", type: "shout" }
        ],
        soundEffect: "FLAP! FLAP! FLAP!",
        soundEffectTranslation: "O bater de asas que anuncia a nova era.",
        historicalNote: "A oliveira é uma planta resistente que consegue brotar sob condições severas de inundação, tornando-se o símbolo supremo da paz e regeneração."
      },
      {
        id: 6,
        title: "O Altar e o Arco Cósmico",
        verseText: "Deus disse: 'Este é o sinal da aliança... Pus o meu arco nas nuvens, e ele será o sinal da aliança entre mim e a terra'.",
        verseRef: "Gênesis 9:12-13",
        actionDescription: "Noé e sua família oferecem sacrifício ao redor de um altar de pedra rústica. No céu limpo e espetacular, um imenso arco-íris de sete cores brilhantes coroa a terra restaurada.",
        dialogs: [
          { speaker: "Noé", text: "Nunca mais a terra será destruída pelas águas! Tu és o Deus fiel de geração em geração!", type: "shout" },
          { speaker: "Voz Divina", text: "Enquanto a terra durar, semeadura e colheita, frio e calor, verão e inverno, dia e noite não cessarão.", type: "speech" }
        ],
        soundEffect: "SHIIIIIIIINNNN...",
        soundEffectTranslation: "A luz divina colorindo o céu com a promessa de fidelidade.",
        historicalNote: "O termo hebraico para o arco-íris é 'Keshet', que também significa arco de guerra. Deus pendura Seu arco nas nuvens, simbolizando o fim da ira."
      }
    ],
    extraHistoryNote: {
      title: "As Montanhas de Ararat",
      content: "As escrituras registram que a Arca pousou sobre as montanhas de Ararat, localizadas na atual Turquia oriental, uma região montanhosa vulcânica de grande altitude."
    },
    theologicalContext: "Noé prefigura a preservação da fé em meio ao julgamento do pecado. O arco-íris estabelece a aliança de preservação cósmica até a consumação dos séculos."
  },
  {
    id: "cap3_abraao",
    number: 3,
    characterId: "abraao",
    title: "Gênesis: Abraão e as Estrelas do Pacto",
    summary: "O chamado patriarcal de Abraão para deixar a sofisticada Ur dos Caldeus, sua fé testada na esterilidade, a promessa estelar e a prova máxima no Monte Moriá.",
    panels: [
      {
        id: 1,
        title: "A Partida do Zigurate",
        verseText: "O Senhor disse a Abrão: 'Saia da sua terra, do meio dos seus parentes... e vá para a terra que eu lhe mostrarei'.",
        verseRef: "Gênesis 12:1",
        actionDescription: "Abrão segura firme seu cajado de madeira sob o vento arenoso, olhando de costas para os grandiosos Zigurates e templos de Ur dos Caldeus que desaparecem na poeira do deserto.",
        dialogs: [
          { speaker: "Abrão", text: "Deixo para trás os deuses falsos de pedra e argila. Seguirei a voz do único Deus invisível que governa as eras!", type: "shout" },
          { speaker: "Sara", text: "Caminharemos com fé, Abrão. Nosso destino está nas mãos do Altíssimo.", type: "speech" }
        ],
        soundEffect: "ZUUUUUMMM!",
        soundEffectTranslation: "O sopro do deserto iniciando a maior jornada monoteísta.",
        historicalNote: "Ur era uma metrópole suméria avançada c. 2000 a.C. Sair de lá significava renunciar à segurança urbana para viver em tendas nômades em Canaã."
      },
      {
        id: 2,
        title: "O Altar do Encontro",
        verseText: "E edificou ali um altar ao Senhor, que lhe aparecera.",
        verseRef: "Gênesis 12:7",
        actionDescription: "Abrão constrói seu primeiro altar de pedras brutas na terra de Siquém, sob o grande carvalho de Moré. Um fogo celestial consome as ofertas em sinal de aceitação divina.",
        dialogs: [
          { speaker: "Abrão", text: "Aqui estabeleço o memorial! Esta terra pertence ao Senhor que me chamou!", type: "speech" },
          { speaker: "Narrador", text: "O altar marca a possessão espiritual da terra prometida pela adoração sincera.", type: "narrator" }
        ],
        soundEffect: "CRACKLE-GLOW!",
        soundEffectTranslation: "A chama da aceitação consumindo o sacrifício.",
        historicalNote: "Construir altares era o meio pelo qual os patriarcas reivindicavam legal e espiritualmente um local em nome do Deus de Israel."
      },
      {
        id: 3,
        title: "O Firmamento da Aliança",
        verseText: "Levou-o para fora e disse: 'Olhe para o céu e conte as estrelas, se é que pode... Assim será a sua descendência'.",
        verseRef: "Gênesis 15:5",
        actionDescription: "Abrão ajoelha-se no deserto escuro, olhando fascinado para cima. O céu noturno é desenhado com uma espiral maravilhosa de constelações que se refletem em seus olhos cheios de luz.",
        dialogs: [
          { speaker: "Voz de Deus", text: "Não tema, Abrão! Eu sou o seu escudo, seu galardão será extremamente grande. Conte as estrelas!", type: "shout" },
          { speaker: "Abrão", text: "*(Olhos brilhando de fé)* Não posso contá-las... Mas creio na Tua promessa de paternidade!", type: "thought" }
        ],
        soundEffect: "SHIIIIIIING-GLOW!",
        soundEffectTranslation: "As promessas divinas iluminando a noite escura da esterilidade.",
        historicalNote: "Gênesis 15:6 registra: 'Abrão creu no Senhor, e isso lhe foi creditado como justiça', o texto fundador do conceito de justificação pela fé."
      },
      {
        id: 4,
        title: "O Riso da Promessa",
        verseText: "E o Senhor visitou a Sara, como tinha dito... e Sara concebeu, e deu a Abraão um filho na sua velhice.",
        verseRef: "Gênesis 21:1-2",
        actionDescription: "Sara, idosa mas com rosto radiante de alegria materna, segura nos braços o bebê Isaque rindo de pura felicidade, enquanto Abraão chora de gratidão ao seu lado.",
        dialogs: [
          { speaker: "Sara", text: "Deus me deu motivo de riso! Todos os que ouvirem rirão comigo de pura admiração!", type: "shout" },
          { speaker: "Abraão", text: "*(Segurando a mão do pequeno)* Isaque... O filho do milagre, o herdeiro da promessa divina!", type: "speech" }
        ],
        soundEffect: "HAHAHA-CHIME!",
        soundEffectTranslation: "O riso de pura vitória contra as leis biológicas impossíveis.",
        historicalNote: "O nome Isaque (em hebraico 'Yitzhak') significa literalmente 'ele ri' ou 'riso', aludindo ao riso de dúvida anterior de Abraão e Sara que foi transformado em riso de pura vitória."
      },
      {
        id: 5,
        title: "A Amarração do Milagre (Akedah)",
        verseText: "Abraão estendeu a mão e tomou o cutelo para imolar o seu filho... Mas o anjo do Senhor o chamou do céu.",
        verseRef: "Gênesis 22:10-11",
        actionDescription: "Abraão, com expressão cheia de agonia e fé extrema, levanta uma faca de bronze sobre Isaque amarrado no altar do Monte Moriá. No céu escuro, um anjo imponente de asas brilhantes bloqueia a lâmina com luz intensa.",
        dialogs: [
          { speaker: "Anjo", text: "ABRAÃO! ABRAÃO! Não estendas a mão sobre o rapaz! Agora sei que temes a Deus, pois não me negaste seu único filho!", type: "shout" },
          { speaker: "Isaque", text: "*(Olhando para o pai com confiança)* Eu sabia... Deus providenciou a Sua redenção!", type: "thought" }
        ],
        soundEffect: "SHIIIIIIIINNGGG!",
        soundEffectTranslation: "O bloqueio celestial da lâmina sacrificial.",
        historicalNote: "Este evento é o 'Akedah' (a amarração). O local tradicional é o Monte Moriá, onde Salomão ergueria o templo e Jesus seria crucificado nas proximidades."
      },
      {
        id: 6,
        title: "O Provedor no Monte",
        verseText: "Olhou Abraão e viu atrás de si um carneiro preso pelos chifres num arbusto... e ofereceu-o em holocausto em lugar de seu filho.",
        verseRef: "Gênesis 22:13-14",
        actionDescription: "Abraão abraça Isaque solto do altar, enquanto aponta para um lindo carneiro preso nos galhos de um arbusto espinhoso. A luz solar brilha imponente por trás da montanha.",
        dialogs: [
          { speaker: "Abraão", text: "O Senhor Proverá! No monte do Senhor se proverá o Cordeiro definitivo!", type: "shout" },
          { speaker: "Narrador", text: "O pacto é jurado de forma incondicional: em Abraão todas as nações serão abençoadas para sempre.", type: "narrator" }
        ],
        soundEffect: "GLOW-CHIME!",
        soundEffectTranslation: "A provisão divina que liberta o herdeiro legítimo.",
        historicalNote: "Abraão chamou o local de 'Yahweh Jireh' (O Senhor Proverá), prefigurando o sacrifício de Jesus Cristo como o Cordeiro substituto final."
      }
    ],
    extraHistoryNote: {
      title: "Arqueologia dos Pactos de Suserania",
      content: "Os pactos de Abraão seguem o padrão dos tratados bilaterais do Bronze Médio, onde o suserano (Deus) assume obrigações perpétuas de proteção sobre o vassalo (Abraão)."
    },
    theologicalContext: "Abraão demonstra que a fé confia no caráter de Deus mesmo quando as circunstâncias parecem contraditórias, tornando-se o pai de todos os que creem na ressurreição."
  },
  {
    id: "cap4_jose",
    number: 4,
    characterId: "jose",
    title: "Gênesis: José e as Viradas do Destino",
    summary: "A fascinante história de José: de herdeiro odiado e vendido por seus irmãos a escravo próspero, intérprete de sonhos nas masmorras e Vizir supremo do Império Egípcio.",
    panels: [
      {
        id: 1,
        title: "O Sonhador da Túnica",
        verseText: "Israel amava mais a José... e fez-lhe uma túnica de várias cores. Seus irmãos, vendo que o pai o amava mais, o odiavam.",
        verseRef: "Gênesis 37:3-4",
        actionDescription: "O jovem José exibe orgulhoso sua túnica real ricamente tecida com mangas longas e fios dourados e vermelhos. Ao fundo, seus irmãos de braços cruzados lançam olhares furiosos sob o rebanho.",
        dialogs: [
          { speaker: "José", text: "Eu tive um sonho! Nossos feixes de trigo se curvavam diante do meu feixe central! E as estrelas faziam o mesmo!", type: "speech" },
          { speaker: "Levi", text: "*(Murmurando com inveja)* Ele se acha o nosso rei! Vamos ver o que será de seus sonhos de grandeza!", type: "speech" }
        ],
        soundEffect: "SHIN-GLOW!",
        soundEffectTranslation: "A beleza da túnica despertando a cobiça dos irmãos.",
        historicalNote: "A 'Ketonet Passim' (túnica de várias cores ou mangas longas) era um traje de privilégio dado ao primogênito ou herdeiro escolhido."
      },
      {
        id: 2,
        title: "Traído e Vendido",
        verseText: "Venderam José aos ismaelitas por vinte siclos de prata; e estes levaram José ao Egito.",
        verseRef: "Gênesis 37:28",
        actionDescription: "José é amarrado com cordas grossas, chorando e implorando aos irmãos, enquanto Judá recebe moedas de prata de mercadores nômades de camelos no Vale de Dotã.",
        dialogs: [
          { speaker: "José", text: "Irmãos, por favor, não façam isso! Eu sou seu sangue! Socorro!", type: "shout" },
          { speaker: "Simeão", text: "Adeus, sonhador insignificante! Governe sobre a poeira do deserto agora!", type: "speech" },
          { speaker: "Narrador", text: "Vendido por prata, José desce ao Egito, alheio ao plano oculto de Deus.", type: "narrator" }
        ],
        soundEffect: "CLINK-CLANK!",
        soundEffectTranslation: "O tilintar das moedas de prata selando a traição familiar.",
        historicalNote: "Vinte siclos de prata era o preço médio de mercado de um jovem escravo homem na Idade do Bronze Médio, conforme atestado nas tábuas de Mari."
      },
      {
        id: 3,
        title: "Fidelidade e Exílio",
        verseText: "O Senhor estava com José, que se tornou homem próspero... Mas Potifar o lançou no cárcere devido a falsas acusações.",
        verseRef: "Gênesis 39:2-20",
        actionDescription: "José é jogado com violência na masmorra subterrânea úmida de uma prisão egípcia, com os braços acorrentados a pilares de pedra rústica.",
        dialogs: [
          { speaker: "José", text: "*(Ajoelhado na cela)* Eu preferi a prisão a pecar contra o meu Deus e a honra de Potifar! Senhor, Tu és o meu refúgio!", type: "thought" },
          { speaker: "Narrador", text: "Mesmo nas profundezas do cárcere imperial, a presença divina acompanha o hebreu fiel.", type: "narrator" }
        ],
        soundEffect: "SLAM-CLANG!",
        soundEffectTranslation: "Os portões da masmorra se fechando sobre o inocente.",
        historicalNote: "A prisão descrita ficava no palácio do capitão da guarda ('Soar'), usada para prisioneiros políticos do Estado sob o governo do Faraó."
      },
      {
        id: 4,
        title: "O Intérprete das Sombras",
        verseText: "Eles disseram: 'Tivemos um sonho e ninguém há que o interprete'. José disse: 'Não pertencem a Deus as interpretações?'",
        verseRef: "Gênesis 40:8",
        actionDescription: "José aponta para as dunas visíveis pela fresta do teto da masmorra, enquanto o copeiro real e o padeiro o escutam fascinados pelo brilho de sua revelação.",
        dialogs: [
          { speaker: "Copeiro", text: "Eu vi três ramos de videira que floresceram e eu espremia a uva na taça de Faraó!", type: "speech" },
          { speaker: "José", text: "Os três ramos são três dias! Em três dias, Faraó restaurará você ao seu cargo. Lembre-se de mim!", type: "speech" }
        ],
        soundEffect: "GLOW...",
        soundEffectTranslation: "A sabedoria profética iluminando as trevas da prisão.",
        historicalNote: "Os egípcios mantinham 'manuais de interpretação de sonhos' complexos, mas a interpretação direta e inspirada de José ignorava esses rituais pagãos."
      },
      {
        id: 5,
        title: "Elevado à Glória Imperial",
        verseText: "Faraó disse a José: 'Uma vez que Deus lhe revelou tudo isso, não há ninguém tão sábio... Tu governarás a minha casa'.",
        verseRef: "Gênesis 41:39-40",
        actionDescription: "O Faraó egípcio coloca seu anel de sinete de ouro no dedo de José. José está vestido com roupas de linho finíssimo brilhante e um colar peitoral majestoso de ouro.",
        dialogs: [
          { speaker: "Faraó", text: "Somente no trono eu serei maior do que você! Eu te estabeleço hoje como Governador de todo o Egito!", type: "shout" },
          { speaker: "José", text: "*(Olhando ao alto)* O Senhor me levantou do pó para salvar vidas durante os sete anos de fome que virão!", type: "thought" }
        ],
        soundEffect: "FLASH-CHINK!",
        soundEffectTranslation: "O selo da autoridade suprema passando para as mãos do sonhador.",
        historicalNote: "O cargo de Vizir ('Tjaty' no antigo Egito) era o cargo executivo máximo, supervisionando a agricultura, tesouraria, justiça e armazenagem de grãos."
      },
      {
        id: 6,
        title: "O Reencontro e o Perdão",
        verseText: "José disse a seus irmãos: 'Aproximai-vos... Eu sou José, vosso irmão, que vendestes... Deus me enviou adiante de vós para vos conservar vivos'.",
        verseRef: "Gênesis 45:4-5",
        actionDescription: "José chora abraçado ao seu irmão mais novo Benjamin, enquanto seus outros irmãos caem de joelhos em lágrimas de arrependimento profundo diante do trono.",
        dialogs: [
          { speaker: "José", text: "Não se aflijam nem se irrem por me terem vendido! Vocês planejaram o mal, mas o Criador o transformou em bem!", type: "shout" },
          { speaker: "Irmãos", text: "*(Chorando)* Que misericórdia incomparável! Nosso irmão é o nosso salvador!", type: "speech" }
        ],
        soundEffect: "TUM-TUM-GLOW!",
        soundEffectTranslation: "A reconciliação da família e o triunfo da soberania divina.",
        historicalNote: "José providenciou a vinda de toda a sua família para viver na fértil terra de Gósen, no delta do Nilo, garantindo a sobrevivência de Israel."
      }
    ],
    extraHistoryNote: {
      title: "José e os Reis Hicsos",
      content: "A ascensão rápida de um estrangeiro semita como José se encaixa perfeitamente no período Hicsor (Dinastias XV-XVI), quando governantes estrangeiros controlavam o Egito."
    },
    theologicalContext: "José é um dos tipos mais precisos de Cristo: traído por prata, descartado, caluniado, jogado à cova e posteriormente elevado ao trono para salvar o próprio povo que o rejeitou."
  },
  {
    id: "cap5_moises",
    number: 5,
    characterId: "moises",
    title: "Êxodo: Moisés e a Força da Libertação",
    summary: "O nascimento milagroso nas águas do Nilo, o encontro face a face na sarça ardente, o confronto contra o império, a travessia épica do mar e a descida da lei sagrada.",
    panels: [
      {
        id: 1,
        title: "O Resgate do Rio",
        verseText: "A filha de Faraó desceu a banhar-se no rio... viu a arca no meio dos juncos, e mandou a sua criada buscá-la. E viu o menino chorando.",
        verseRef: "Êxodo 2:5-6",
        actionDescription: "A princesa egípcia, ricamente vestida com ouro e linho, segura nos braços o bebê Moisés em um cesto de papiro impermeável entre os juncos do rio Nilo sob o sol da manhã.",
        dialogs: [
          { speaker: "Princesa", text: "Este é um dos filhos dos hebreus! Eu o adotarei, pois das águas o tirei e seu nome será Moisés!", type: "speech" },
          { speaker: "Miriã", text: "*(Escondida ao longe)* Ele foi poupado da espada do Faraó! O Criador guardou a sua vida preciosa!", type: "thought" }
        ],
        soundEffect: "SWOOSH-SPLASH...",
        soundEffectTranslation: "O suave deslizar das águas do Nilo protegendo o futuro libertador.",
        historicalNote: "O nome Moisés é bilingue: em hebraico significa 'tirado das águas' e em egípcio antigo ('Mes' ou 'Mose') significa 'filho' ou 'nascido'."
      },
      {
        id: 2,
        title: "O Fogo que não Consome",
        verseText: "Apareceu-lhe o anjo do Senhor numa chama de fogo, no meio de uma sarça... a sarça ardia no fogo, e a sarça não se consumia.",
        verseRef: "Êxodo 3:2",
        actionDescription: "Moisés, idoso vestindo túnica de pastor, cobre o rosto com os braços diante de um arbusto retorcido que queima com chamas de fogo de luz dourada intensa que não carbonizam suas folhas.",
        dialogs: [
          { speaker: "Moisés", text: "Que visão magnífica é esta?! Por que a sarça brilha tanto e não se desintegra em cinzas?!", type: "thought" },
          { speaker: "Voz de Deus", text: "Moisés! Moisés! Eu sou o Deus de teu pai, o Deus de Abraão. Eu te enviarei a Faraó para libertar o meu povo!", type: "shout" }
        ],
        soundEffect: "FWOOOOOOOOO!",
        soundEffectTranslation: "O som místico do fogo da presença divina habitando na sarça.",
        historicalNote: "A sarça (espinheiro seco) representa o povo hebreu humilde e oprimido, que queima com o sofrimento mas não é destruído devido à habitação de Deus."
      },
      {
        id: 3,
        title: "O Cajado e a Serpente",
        verseText: "O Senhor lhe perguntou: 'O que é isso na sua mão?' Ele respondeu: 'Um cajado'. Disse Deus: 'Jogue-o no chão'. Ele o jogou, e o cajado virou uma serpente.",
        verseRef: "Êxodo 4:2-3",
        actionDescription: "Moisés recua em choque quando seu simples cajado de pastor de madeira rústica se transforma no ar em uma cobra cobra gigante ativa de escamas reluzentes de bronze.",
        dialogs: [
          { speaker: "Moisés", text: "*(Olhos arregalados)* Meu cajado de pastoreio virou uma fera viva! O poder divina é indescritível!", type: "shout" },
          { speaker: "Voz de Deus", text: "Estenda a mão e pegue-a pela cauda! Ela voltará a ser cajado na tua mão para manifestar prodígios!", type: "speech" }
        ],
        soundEffect: "HIIIIISSSSSSS-SNAP!",
        soundEffectTranslation: "A rápida transformação da matéria sob o comando do Criador.",
        historicalNote: "A cobra cobra ('Ureu') era o símbolo de poder monárquico máximo na coroa dos Faraós. Transformar o cajado em serpente desafiava a autoridade mágica do império."
      },
      {
        id: 4,
        title: "As Muralhas de Água (Yam Suf)",
        verseText: "Moisés estendeu a mão sobre o mar... e as águas foram divididas, e os filhos de Israel entraram pelo meio do mar em seco.",
        verseRef: "Êxodo 14:21-22",
        actionDescription: "Uma das maiores cenas coloridas da Bíblia! Moisés posicionado sobre a rocha, de braços abertos erguendo seu cajado luminoso. Duas muralhas monumentais de água azul em turbilhão abrem uma imensa trincheira seca.",
        dialogs: [
          { speaker: "Moisés", text: "NÃO TEMAM! Vejam o livramento do Senhor! O mar que os ameaçava será o caminho da nossa salvação definitiva!", type: "shout" },
          { speaker: "Faraó ao longe", text: "*(Em pânico em sua biga de guerra)* Impossível! As águas estão se curvando diante do comando deles!", type: "shout" }
        ],
        soundEffect: "ZUUUUUUUMMM-KRAAAAAASH!",
        soundEffectTranslation: "O mar aberto gerando trincheiras intransponíveis de salvação.",
        historicalNote: "O local provável da travessia é a região norte do golfo de Suez ou lagos amargos adjacentes, canais profundos e pantanosos na Idade do Bronze."
      },
      {
        id: 5,
        title: "A Lei de Pedra no Sinai",
        verseText: "E deu a Moisés... as duas tábuas do testemunho, tábuas de pedra, escritas pelo dedo de Deus.",
        verseRef: "Êxodo 31:18",
        actionDescription: "Moisés no cume do Monte Sinai, sob tempestade azulada de raios e fumaça de glória, segura duas pesadas tábuas de pedra cinza gravadas com caracteres de paleo-hebraico flamejantes.",
        dialogs: [
          { speaker: "Moisés", text: "Estes são os Dez Mandamentos! A constituição de santidade e justiça para o povo livre viver em aliança!", type: "shout" },
          { speaker: "Narrador", text: "A verdade moral objetiva é gravada na rocha intocável da história humana.", type: "narrator" }
        ],
        soundEffect: "CLINK-KRAASH!",
        soundEffectTranslation: "A escrita do fogo divino gravando mandamentos morais na rocha.",
        historicalNote: "O alfabeto paleo-hebraico antigo simplificava a escrita em relação aos hieróglifos, permitindo que toda a população de escravos libertos aprendesse a ler a lei."
      },
      {
        id: 6,
        title: "A Visão de Nebo e a Passagem",
        verseText: "Moisés subiu... ao monte Nebo... e o Senhor lhe mostrou toda a terra... Disse-lhe o Senhor: 'Eu te permiti vê-la com os teus olhos'.",
        verseRef: "Deuteronômio 34:1-4",
        actionDescription: "Moisés, em sua gloriosa velhice espiritual, com olhos brilhantes e sem fadiga corporal, contempla do topo de um monte o lindo e fértil Vale do Jordão brilhando sob os raios de sol dourados.",
        dialogs: [
          { speaker: "Moisés", text: "*(Sorrindo com lágrimas de paz)* Eu vejo o lar da promessa! Meu trabalho está cumprido. Josué guiará o povo na vitória final!", type: "speech" },
          { speaker: "Narrador", text: "Morre o maior dos profetas do Antigo Testamento, enterrado pelo próprio Criador em glória secreta.", type: "narrator" }
        ],
        soundEffect: "SHIIIIIIIIIN...",
        soundEffectTranslation: "A transição gloriosa do servo de Deus rumo ao descanso eterno.",
        historicalNote: "Moisés viveu 120 anos. O texto bíblico destaca que 'sua vista não se havia escurecido, nem se havia abatido o seu vigor', indicando vitalidade milagrosa."
      }
    ],
    extraHistoryNote: {
      title: "Geografia Bíblica do Sinai",
      content: "O Monte Sinai (Jabal Musa na península do Sinai) é cercado por cadeias de montanhas de granito vermelho que refletem o calor do deserto, fornecendo o cenário imponente das escrituras."
    },
    theologicalContext: "Moisés aponta teologicamente para Jesus como o Libertador superior que nos resgata do Egito espiritual do pecado e nos dá a nova lei inscrita no coração."
  },
  {
    id: "cap6_josue",
    number: 6,
    characterId: "josue",
    title: "Josué: O General e as Muralhas de Jericó",
    summary: "O comissionamento de Josué como comandante militar, a travessia do Jordão, o confronto com o Príncipe das Hostes e a ressonância acústica que derrubou os muros de Jericó.",
    panels: [
      {
        id: 1,
        title: "Esforça-te e Tem Bom Ânimo",
        verseText: "Ninguém te poderá resistir todos os dias da tua vida... Sê forte e corajoso, não te atemorizes.",
        verseRef: "Josué 1:5-9",
        actionDescription: "O jovem general Josué ajoelha-se diante da tenda da Congregação, segurando sua espada, enquanto uma coluna de nuvem brilhante derrama raios dourados de autoridade espiritual sobre ele.",
        dialogs: [
          { speaker: "Voz Divina", text: "Como fui com Moisés, assim serei contigo! Não te deixarei nem te desampararei. Esforça-te e sê corajoso!", type: "shout" },
          { speaker: "Josué", text: "*(Olhar destemido e firme)* Sinto a Tua força preencher minha alma! Liderarei Israel na posse da terra prometida!", type: "shout" }
        ],
        soundEffect: "ZUUUUMMMMM-POWER!",
        soundEffectTranslation: "A unção de liderança e guerra sendo transferida ao sucessor.",
        historicalNote: "Josué era o assistente militar de Moisés e um dos dois únicos espias que acreditaram na vitória de Deus 40 anos antes."
      },
      {
        id: 2,
        title: "As Águas Paradas do Jordão",
        verseText: "Quando os sacerdotes que carregavam a arca... molharam os pés na beira da água, as águas que vinham de cima pararam.",
        verseRef: "Josué 3:15-16",
        actionDescription: "Sacerdotais de branco carregando a Arca de ouro pisam na margem do rio Jordão em cheia. Imediatamente, as correntes de água se acumulam em uma imensa represa invisível ao longe, secando o leito.",
        dialogs: [
          { speaker: "Sacerdote", text: "O rio parou de correr! O caminho foi aberto pelo toque do trono sagrado do Deus vivo!", type: "speech" },
          { speaker: "Povo de Israel", text: "*(Marchando em seco)* Outro milagre das águas! O Deus de Moisés está ativo com Josué!", type: "shout" }
        ],
        soundEffect: "FWOSSSHHH-HALT!",
        soundEffectTranslation: "As correntes de água parando sob o peso da aliança.",
        historicalNote: "A travessia ocorreu na época da colheita da cevada, quando o rio Jordão transborda suas margens devido ao derretimento de neve do monte Hermom."
      },
      {
        id: 3,
        title: "O Príncipe das Hostes Celestes",
        verseText: "Viu um homem em pé diante de si, que tinha na mão uma espada desembainhada... e disse: 'Sou o príncipe do exército do Senhor'.",
        verseRef: "Josué 5:13-14",
        actionDescription: "Josué saca metade de sua espada ao ver um guerreiro celestial colossal vestindo armadura reluzente segurando uma espada de pura luz estelar apontada para o solo.",
        dialogs: [
          { speaker: "Josué", text: "És tu dos nossos ou dos nossos adversários?! Quem és tu, guerreiro imponente?", type: "speech" },
          { speaker: "Príncipe Celeste", text: "Não! Venho agora como comandante do exército do Senhor! Tira as sandálias dos pés!", type: "shout" }
        ],
        soundEffect: "SHIIIIIIIINNGG!",
        soundEffectTranslation: "A luz imaculada da espada do comandante celestial.",
        historicalNote: "Esta manifestação é considerada teologicamente uma 'teofania' ou 'cristofania' (aparição de Cristo pré-encarnado como guerreiro)."
      },
      {
        id: 4,
        title: "A Marcha do Silêncio",
        verseText: "Rodiai a cidade, todos os homens de guerra... por seis dias marcharão em silêncio absoluto.",
        verseRef: "Josué 6:3-10",
        actionDescription: "Fileiras de milhares de soldados armados marcham em fila solene e silenciosa ao redor das imensas muralhas escuras de Jericó. Sacerdotes seguram shofares prontos sem emitir som.",
        dialogs: [
          { speaker: "Josué", text: "Nenhum homem dê um grito de guerra! Guardem o som nos seus corações e andem sob as ordens da Arca sagrada!", type: "speech" },
          { speaker: "Sentinelas de Jericó", text: "*(Rindo de nervosismo nas muralhas)* Apenas caminham em silêncio... O que esses hebreus pretendem?", type: "thought" }
        ],
        soundEffect: "TUMP... TUMP... TUMP...",
        soundEffectTranslation: "A batida sincronizada de milhares de pés levantando poeira sob o sol.",
        historicalNote: "Marchar em silêncio quebrava a psicologia de guerra antiga, acumulando tensão psicológica imensa dentro dos defensores de Jericó."
      },
      {
        id: 5,
        title: "O Toque dos Shofares da Queda",
        verseText: "Ao soar longo do chifre de carneiro... todo o povo gritará com grande grito; e o muro da cidade cairá.",
        verseRef: "Josué 6:5",
        actionDescription: "Sete sacerdotes com vestes brilhantes sopram com força total os Shofares curvados, enquanto Josué aponta sua espada desembainhada contra as defesas inimigas com um grito colossal.",
        dialogs: [
          { speaker: "Josué", text: "GRITEM COM FORÇA MÁXIMA! Pois o Senhor entregou esta grande cidade em nossas mãos!", type: "shout" },
          { speaker: "Guerreiros de Israel", text: "*(Um brado massivo que faz o chão tremer)* AAAAAAHHHHHHH!!! YAWEH!!!", type: "shout" }
        ],
        soundEffect: "TOOOOOOOOOOOOOOT!!!",
        soundEffectTranslation: "O estrondo agudo do Shofar de carneiro penetrando o ar.",
        historicalNote: "O toque do shofar era associado à presença direta de Deus que descia para lutar em favor de Seu povo ungido."
      },
      {
        id: 6,
        title: "O Colapso Monumental dos Muros",
        verseText: "O povo gritou, os sacerdotes tocaram as trombetas... o muro caiu por terra, e o povo subiu à cidade, cada um em frente de si.",
        verseRef: "Josué 6:20",
        actionDescription: "Uma das ilustrações de ação mais épicas! As gigantescas muralhas de pedra de Jericó se rompem com enormes trincas longitudinais, caindo para fora e abrindo rampas de terra para a invasão.",
        dialogs: [
          { speaker: "Guerreiro de Jericó", text: "*(Em pânico sob os escombros)* Os deuses de pedra falharam! As muralhas estão desabando do nada!", type: "shout" },
          { speaker: "Narrador", text: "A invencível fortaleza antiga ruiu, não por engenhos de cerco humanos, mas pela fé inabalável e ativa de Israel.", type: "narrator" }
        ],
        soundEffect: "KRA-KRAAAAASH-BOOOOMM!",
        soundEffectTranslation: "O estrondo sísmico da queda das muralhas de barro e pedra.",
        historicalNote: "Arqueólogos descobriram que as muralhas de Jericó ruíram para fora das fundações, permitindo que invasores avançassem direto para cima da cidade."
      }
    ],
    extraHistoryNote: {
      title: "Arqueologia de Tell es-Sultan",
      content: "As ruínas de Jericó exibem vestígios de muralhas duplas de tijolos de barro sobre uma fundação maciça de contenção de pedra calcária polida."
    },
    theologicalContext: "A queda de Jericó demonstra que as barreiras intransponíveis da vida humana caem pela fé, louvor espiritual e obediência total ao plano soberano divino."
  },
  {
    id: "cap7_david",
    number: 7,
    characterId: "david",
    title: "1 Samuel: Davi e o Trono Eterno",
    summary: "O humilde pastor de ovelhas ungido no campo, seu confronto épico com o gigante Golias e o estabelecimento do trono de Judá de onde descenderia o Messias.",
    panels: [
      {
        id: 1,
        title: "Ungido no Campo de Belém",
        verseText: "Samuel tomou o chifre do azeite e o ungiu no meio de seus irmãos; e, daquele dia em diante, o Espírito do Senhor se apoderou de Davi.",
        verseRef: "1 Samuel 16:13",
        actionDescription: "O profeta Samuel derrama óleo perfumado de um chifre de carneiro sobre a cabeça do jovem e expressivo pastor Davi, cujo cabelo ruivo brilha com um suave halo espiritual de ouro.",
        dialogs: [
          { speaker: "Samuel", text: "O homem vê a aparência, mas o Senhor olha o coração! Tu és o escolhido para liderar Israel como rei guerreiro!", type: "speech" },
          { speaker: "Davi", text: "*(Ajoelhado com simplicidade)* Sou apenas o menor da casa de meu pai Jessé... Que se cumpra a Tua soberana vontade!", type: "thought" }
        ],
        soundEffect: "GLOW-CHIME...",
        soundEffectTranslation: "O fluir do óleo sagrado que consagra o herdeiro legítimo.",
        historicalNote: "Ungir com óleo simbolizava a capacitação divina direta do Espírito para exercer autoridade governamental e espiritual em Israel."
      },
      {
        id: 2,
        title: "A Harpa da Paz",
        verseText: "E sucedia que, quando o espírito mau... vinha sobre Saul, Davi tomava a harpa e a tangia com a sua mão; então, Saul sentia alívio.",
        verseRef: "1 Samuel 16:23",
        actionDescription: "Davi toca uma harpa clássica de madeira entalhada no palácio escuro de Saul, dedilhando as cordas com delicadeza enquanto ondas de harmonia calma purificam a mente atormentada do rei.",
        dialogs: [
          { speaker: "Davi", text: "*(Cantando com suavidade)* O Senhor é o meu pastor, nada me faltará... Ele guia meus passos em caminhos de justiça...", type: "speech" },
          { speaker: "Saul", text: "*(Rosto relaxando das dores espirituais)* Esta melodia... afasta o peso de minha alma. Há paz neste jovem!", type: "thought" }
        ],
        soundEffect: "PLUCK-PLUCK-SWOOSH...",
        soundEffectTranslation: "As notas melódicas curando a perturbação mental do monarca.",
        historicalNote: "A terapia musical era respeitada na corte. Davi, sendo poeta refinado, compôs mais de 70 salmos de adoração nas escrituras."
      },
      {
        id: 3,
        title: "O Desafio do Campeão",
        verseText: "Um campeão chamado Golias, que era de Gate, saiu do acampamento... Tinha seis côvados e um palmo de altura.",
        verseRef: "1 Samuel 17:4",
        actionDescription: "Perspectiva dinâmica dramática de baixo para cima. O gigante filisteu Golias ergue sua colossal lança de ponta de ferro e elmo de bronze, rindo com desprezo das fileiras assustadas de Israel.",
        dialogs: [
          { speaker: "Golias", text: "Escolham um homem que lute comigo! Se ele vencer, seremos seus servos; se eu vencer, vocês nos servirão! Eu desafio Israel hoje!", type: "shout" },
          { speaker: "Soldado Hebreu", text: "*(Escondido atrás de escudos)* Ele tem quase três metros de armadura impenetrável! Nenhum guerreiro pode tocá-lo!", type: "speech" }
        ],
        soundEffect: "DODODODODODO!",
        soundEffectTranslation: "Os passos pesados do gigante que abalam as estruturas do vale de Elá.",
        historicalNote: "Golias usava uma panóplia pesada de bronze estilo micênico que pesava cerca de 57 kg, representando o avanço tecnológico da Idade do Ferro filisteia."
      },
      {
        id: 4,
        title: "Funda contra Espada",
        verseText: "Davi disse ao filisteu: 'Tu vens contra mim com espada... mas eu vou contra ti em nome do Senhor dos Exércitos, o Deus de Israel'.",
        verseRef: "1 Samuel 17:45",
        actionDescription: "Davi corre em direção ao gigante no vale, recusando a armadura pesada do rei Saul. Ele veste apenas roupas de pastor, segurando uma simples funda de couro com 5 seixos lisos no bolso.",
        dialogs: [
          { speaker: "Davi", text: "Hoje mesmo o Senhor entregará você! Toda a terra saberá que há Deus em Israel e que Ele salva, não com espada!", type: "shout" },
          { speaker: "Golias", text: "*(Rindo alto com desprezo)* Sou eu algum cão para vir contra mim com pedras e paus?! Vou rasgar sua carne!", type: "shout" }
        ],
        soundEffect: "SHIIIIINNNGG!",
        soundEffectTranslation: "O brilho destemido do olhar do jovem pastor movido pelo zelo divino.",
        historicalNote: "A funda militar antiga lançava projéteis de calcário a velocidades superiores a 150 km/h, agindo com precisão letal comparável a armas modernas."
      },
      {
        id: 5,
        title: "O Seixo Supersônico",
        verseText: "Davi meteu a mão no alforje, tomou dali uma pedra, e com a funda a atirou, e feriu o filisteu na testa; a pedra penetrou-lhe a testa, e ele caiu.",
        verseRef: "1 Samuel 17:49",
        actionDescription: "Uma cena de ação extrema em quadrinhos shonen! Davi gira a funda com linhas de velocidade circular perfeitas. A pedra sai como um feixe de luz azul e atinge o meio da testa de Golias, quebrando a resistência craniana. Seus olhos viram com o choque.",
        dialogs: [
          { speaker: "Narrador", text: "A rocha da fé guiada pelo Espírito quebra o império do orgulho carnal.", type: "narrator" },
          { speaker: "Golias", text: "*(Pensamento final interrompido)* Como... uma simples pedra... quebrou meu bronze...", type: "thought" }
        ],
        soundEffect: "VROOOOOOOM-ZAP! SQUASH!",
        soundEffectTranslation: "O projétil de calcário atingindo com precisão cirúrgica a testa do guerreiro.",
        historicalNote: "O vale de Elá é repleto de ribeiros sazonais com pedras arredondadas de calcário denso, que serviam de projéteis ideais na Idade do Ferro."
      },
      {
        id: 6,
        title: "O Trono Messiânico",
        verseText: "O Senhor te diz... 'Eu estabelecerei o trono do teu reino para sempre... A tua casa e o teu reino serão firmes para sempre'.",
        verseRef: "2 Samuel 7:12-16",
        actionDescription: "Davi, já coroado Rei com uma coroa de ouro majestosa, senta-se no trono de Jerusalém segurando seu cetro. Ele olha para o horizonte onde a silhueta da futura Jerusalém brilha sob raios solares.",
        dialogs: [
          { speaker: "Davi", text: "*(Braços estendidos)* De minha linhagem surgirá o Rei Eterno que governará as nações com justiça verdadeira! Obrigado, Senhor!", type: "shout" },
          { speaker: "Narrador", text: "Sela-se a aliança davídica que aponta para o Messias, o Filho de Davi que governará para sempre.", type: "narrator" }
        ],
        soundEffect: "ZUMM-GLOW-CHIME!",
        soundEffectTranslation: "A consagração do trono eterno que nunca conhecerá fim.",
        historicalNote: "Davi conquistou a fortaleza de Sião dos jebuseus c. 1000 a.C. e estabeleceu Jerusalém como a capital política e espiritual de Israel."
      }
    ],
    extraHistoryNote: {
      title: "Guerreiros e Fundidores da Antiguidade",
      content: "Fundidores eram snipers táticos temidos na Idade do Ferro, mencionados em inscrições assírias e romanas devido ao seu alcance de longo alcance superior ao dos arqueiros."
    },
    theologicalContext: "Davi vs Golias mostra que a verdadeira força pertence ao Senhor. O trono de Davi é o protótipo do reinado messiânico espiritual eterno que se cumpre em Jesus Cristo."
  },
  {
    id: "cap8_salomao",
    number: 8,
    characterId: "salomao",
    title: "1 Reis: Salomão e o Santuário da Sabedoria",
    summary: "O pedido sábio em sonho, a sentença judicial lendária que desvendou o amor de mãe, o projeto detalhado do templo de Jerusalém e a descida da Shekinah divina.",
    panels: [
      {
        id: 1,
        title: "O Pedido Sábio",
        verseText: "Em Gibeão apareceu o Senhor a Salomão em sonho... e disse Deus: 'Pede o que quiseres que eu te dê'.",
        verseRef: "1 Reis 3:5",
        actionDescription: "Salomão dorme calmamente em seus aposentos, envolto em fumaça de incenso dourado que forma a visão celestial de Deus segurando uma balança de ouro e um pergaminho de leis eternas.",
        dialogs: [
          { speaker: "Salomão", text: "*(Sonhando com humildade)* Sou apenas um menino, não sei como governar! Dá-me um coração sábio e inteligente para julgar o Teu povo!", type: "speech" },
          { speaker: "Voz Divina", text: "Porque pediste sabedoria e não riquezas ou a vida de inimigos, dou-te um coração sábio como ninguém antes ou depois de ti terá!", type: "shout" }
        ],
        soundEffect: "ZUUUUUUMM-GLOW!",
        soundEffectTranslation: "A infusão espiritual da inteligência divina que excede a ciência humana.",
        historicalNote: "Gibeão era o principal santuário de adoração central antes da construção do templo de Jerusalém na Idade do Ferro."
      },
      {
        id: 2,
        title: "O Julgamento da Espada",
        verseText: "O rei disse: 'Dividi em duas partes o menino vivo; e dai metade a uma, e metade a outra'.",
        verseRef: "1 Reis 3:25",
        actionDescription: "Um guarda real musculoso segura uma grande espada de ferro polido erguida sobre um bebê no palácio. Uma mulher cai de joelhos chorando e implorando, enquanto outra observa friamente.",
        dialogs: [
          { speaker: "Verdadeira Mãe", text: "Não, meu senhor! Dai-lhe o menino vivo! Não o matem de forma alguma, dechem que ela fique com ele!", type: "shout" },
          { speaker: "Falsa Mãe", text: "Não será meu nem seu! Dividi-o de forma igual como o rei ordenou!", type: "speech" },
          { speaker: "Salomão", text: "*(Apontando com autoridade calma)* Guardem a espada! Entreguem o bebê à primeira mulher. Ela é a mãe, pois seu amor preferiu perdê-lo a vê-lo morrer!", type: "speech" }
        ],
        soundEffect: "CLANG-SHIN!",
        soundEffectTranslation: "O guarda embainhando a lâmina sob o veredito da verdadeira justiça.",
        historicalNote: "A sentença de Salomão revelou instantaneamente a psicologia materna antiga, provando a eficácia da sabedoria prática dada a ele."
      },
      {
        id: 3,
        title: "O Plano do Templo",
        verseText: "E propus-me a edificar uma casa ao nome do Senhor meu Deus, como falou o Senhor a Davi, meu pai.",
        verseRef: "1 Reis 5:5",
        actionDescription: "Salomão examina grandes pergaminhos com desenhos arquitetônicos do templo, enquanto artesãos descarregam enormes vigas de cedro do Líbano enviadas por navios do rei Hirão de Tiro.",
        dialogs: [
          { speaker: "Salomão", text: "Cada detalhe deve refletir a ordem e a beleza da criação sagrada! Utilizaremos o melhor cedro e ouro purificado!", type: "speech" },
          { speaker: "Hirão de Tiro", text: "*(Sorrindo)* Minhas frotas trouxeram madeira rara e ourives habilidosos para apoiar este santuário glorioso!", type: "speech" }
        ],
        soundEffect: "SAW-HAMMER-CLANG!",
        soundEffectTranslation: "O trabalho vigoroso dos carpinteiros e pedreiros preparando o templo.",
        historicalNote: "Nenhum som de martelos de ferro ou ferramentas foi ouvido no cume do monte durante a construção do templo, pois as pedras eram talhadas prontas na pedreira."
      },
      {
        id: 4,
        title: "A Dedicação Solene",
        verseText: "Salomão se pôs em pé diante do altar do Senhor, na presença de toda a congregação de Israel, e estendeu as mãos para os céus.",
        verseRef: "1 Reis 8:22",
        actionDescription: "Salomão, vestindo mantos sacerdotais brancos, está de joelhos em uma plataforma de bronze diante do grande altar externo, de braços abertos para o céu nublado com o povo reunido ao fundo.",
        dialogs: [
          { speaker: "Salomão", text: "Céus dos céus não podem Te conter, quanto menos este templo! Ouve as preces de Teu povo quando orarem voltados para este local!", type: "shout" },
          { speaker: "Povo de Israel", text: "*(Ajoelhado na poeira)* Ouve nos céus, perdoa e restaura a nossa terra!", type: "shout" }
        ],
        soundEffect: "HUMMMMMMM-CHIME...",
        soundEffectTranslation: "A vibração solene da prece nacional de dedicação.",
        historicalNote: "A oração de Salomão é um dos textos teológicos mais profundos, expressando o monoteísmo absoluto: Deus habita no céu espiritual, não na pedra física."
      },
      {
        id: 5,
        title: "A Fumaça da Glória (Shekinah)",
        verseText: "E sucedeu que, saindo os sacerdotes do santuário, uma nuvem encheu a casa do Senhor... pois a glória do Senhor tinha enchido a casa.",
        verseRef: "1 Reis 8:10-11",
        actionDescription: "Uma espessa, pesada e brilhante fumaça branca sobrenatural preenche as colunas internas de cedro e ouro do templo, forçando os sacerdotes de branco a caírem de joelhos fora das portas.",
        dialogs: [
          { speaker: "Sacerdote", text: "A Shekinah! A nuvem de glória desceu sobre as asas dos querubins de ouro! O Criador aceitou Sua habitação!", type: "shout" },
          { speaker: "Salomão", text: "*(Prostrado de rosto em terra)* O Senhor disse que habitaria na escuridão espessa... Ele está presente entre nós!", type: "thought" }
        ],
        soundEffect: "HUMMMMMMM-FWOOOOSH!",
        soundEffectTranslation: "A descida física da nuvem invisível de glória divina.",
        historicalNote: "O interior do santuário ('Santo dos Santos') continha a Arca da Aliança protegida por dois gigantescos Querubins de madeira de oliveira revestidos de ouro."
      },
      {
        id: 6,
        title: "A Sabedoria que Conquista o Mundo",
        verseText: "A rainha de Sabá... veio provar a Salomão com perguntas difíceis... e vendo toda a sabedoria de Salomão... ficou sem fôlego.",
        verseRef: "1 Reis 10:1-5",
        actionDescription: "A bela Rainha de Sabá, vestida com joias reais africanas e acompanhada por camelos carregados de especiarias e ouro, olha pasma para Salomão que explica mistérios de forma calma em seu trono.",
        dialogs: [
          { speaker: "Rainha de Sabá", text: "O que eu ouvi em minha terra era verdade! A tua sabedoria e riqueza excedem em muito a fama que me chegou!", type: "speech" },
          { speaker: "Salomão", text: "Toda a inteligência e ciência que possuo provêm do Senhor que criou os céus e os oceanos!", type: "speech" },
          { speaker: "Narrador", text: "O reino atinge o topo de sua glória e paz, tornando-se o farol espiritual da antiguidade.", type: "narrator" }
        ],
        soundEffect: "GLOW-CHIME-FLASH!",
        soundEffectTranslation: "A glória diplomática e científica reconhecida internacionalmente.",
        historicalNote: "Sabá localizava-se no atual Iêmen e Eritreia, controlando as ricas rotas de comércio de incenso e mirra do sul da península arábica."
      }
    ],
    extraHistoryNote: {
      title: "Riquezas e o Comércio de Ofir",
      content: "Salomão construiu frotas marítimas no Mar Vermelho aliadas aos fenícios de Tiro, estabelecendo a primeira grande era industrial e comercial de Jerusalém."
    },
    theologicalContext: "Salomão prefigura Cristo como o Príncipe da Paz e a própria Sabedoria encarnada. O Templo de pedra é o tipo da habitação espiritual que se cumpre na Igreja e no cristão fiel."
  },
  {
    id: "cap9_jesus_vida",
    number: 9,
    characterId: "jesus_vida",
    title: "Evangelho: Jesus e o Reino que se Aproxima",
    summary: "O nascimento messiânico humilde em Belém, o batismo profético no Jordão, a chamada épica dos pescadores comuns e o momento glorioso onde Ele impõe ordem e silêncio à tempestade.",
    panels: [
      {
        id: 1,
        title: "O Nascimento na Estribaria de Pedra",
        verseText: "E ela deu à luz o seu filho primogênito, enfaixou-o e o deitou numa manjedoura, porque não havia lugar para eles na hospedaria.",
        verseRef: "Lucas 2:7",
        actionDescription: "O bebê Jesus dorme sereno deitado em palha macia dentro de uma manjedoura de pedra calcária. Maria e José o contemplam com rostos iluminados por uma suave luz dourada. Pelo teto, um raio azul de uma estrela brilha imponente.",
        dialogs: [
          { speaker: "Maria", text: "*(Sussurrando com lágrimas de amor)* Emanuel... Deus conosco. O Verbo que se fez carne para nos resgatar da dor e do pecado!", type: "speech" },
          { speaker: "Anjos ao longe", text: "Glória a Deus nas maiores alturas e paz na terra aos homens aos quais Ele concede o Seu favor!", type: "shout" }
        ],
        soundEffect: "SHIIIIIIIIN...",
        soundEffectTranslation: "A luz divina de salvação encontrando a sua morada mais humilde na terra.",
        historicalNote: "As manjedouras antigas na Judeia eram comumente escavadas em blocos únicos de pedra calcária, usadas para alimentar os rebanhos protegidos em cavernas contra o frio."
      },
      {
        id: 2,
        title: "O Batismo no Rio Jordão",
        verseText: "E, sendo Jesus batizado... eis que se lhe abriram os céus, e viu o Espírito de Deus descendo como pomba.",
        verseRef: "Mateus 3:16",
        actionDescription: "Jesus está em pé no leito d'água do rio Jordão, com os braços estendidos, enquanto o profeta João Batista o batiza. No céu aberto, um raio de luz branca desce sobre Ele em forma de pomba radiante.",
        dialogs: [
          { speaker: "Voz do Céu", text: "Este é o meu Filho amado, em quem me comprazo! Escutai-o!", type: "shout" },
          { speaker: "João Batista", text: "*(Ajoelhado em reverência)* Eis o Cordeiro de Deus, que tira o pecado do mundo! Eu vi e dou testemunho!", type: "speech" }
        ],
        soundEffect: "ZUMMMMMMM-GLOW!",
        soundEffectTranslation: "A descida do Espírito consagrando o Messias para o ministério público.",
        historicalNote: "O batismo por imersão no rio Jordão ligava Jesus aos ritos de purificação do antigo sacerdócio levítico, iniciando oficialmente Sua obra messiânica."
      },
      {
        id: 3,
        title: "Pescar de Homens",
        verseText: "Disse-lhes Jesus: 'Vinde após mim, e eu vos farei pescadores de homens'. E eles, deixando imediatamente as redes, o seguiram.",
        verseRef: "Mateus 4:19-20",
        actionDescription: "Jesus caminha na areia da praia da Galileia, estendendo a mão para Pedro e André que estão no barco remendando redes. Suas expressões mudam de cansaço para pura inspiração.",
        dialogs: [
          { speaker: "Jesus", text: "Não tenham medo! Sigam Meus passos e farei de vocês pescadores de almas para o Reino de luz!", type: "speech" },
          { speaker: "Pedro", text: "*(Deixando a rede cair)* Sinto uma autoridade indescritível em Suas palavras... Eu irei contigo, Mestre!", type: "shout" }
        ],
        soundEffect: "SWOOSH-LIGHT!",
        soundEffectTranslation: "O chamado imediato que transforma a rotina comum em missão eterna.",
        historicalNote: "Pescadores na Galileia eram trabalhadores prósperos e autônomos. Deixar barcos e redes significava desprendimento financeiro real pela causa do Evangelho."
      },
      {
        id: 4,
        title: "O Sermão do Monte da Luz",
        verseText: "Vendo Jesus as multidões, subiu ao monte... e ensinava-os, dizendo: 'Bem-aventurados os limpos de coração, porque verão a Deus'.",
        verseRef: "Mateus 5:1-8",
        actionDescription: "Jesus sentado no topo de um outeiro verdejante, cercado por milhares de ouvintes absortos. Suas mãos explicam conceitos de paz com gestos de carinho e profundidade sob uma brisa suave.",
        dialogs: [
          { speaker: "Jesus", text: "Vocês são o sal da terra e a luz do mundo! Ame os seus inimigos e orem pelos que perseguem vocês!", type: "speech" },
          { speaker: "Ouvinte", text: "*(Sussurrando fascinado)* Ele ensina com autoridade real, não como os escribas de nossa lei religiosa!", type: "thought" }
        ],
        soundEffect: "FLOW-SWOOSH...",
        soundEffectTranslation: "A brisa do monte espalhando a constituição moral do Reino de Deus.",
        historicalNote: "O Sermão do Monte foi proferido nas colinas próximas a Cafarnaum, com acústica natural que permitia que milhares ouvissem sem microfones."
      },
      {
        id: 5,
        title: "Multiplicando a Provisão",
        verseText: "Tomando os cinco pães e os dois peixes, olhou para o céu, deu graças, partiu os pães e os deu aos discípulos... e todos comeram.",
        verseRef: "Mateus 14:19-20",
        actionDescription: "Jesus levanta uma pequena cesta de vime contendo pães de cevada e peixes cozidos, orando de olhos fechados sob o entardecer. Do cesto saem incontáveis pães adicionais em fileiras de luz brilhante.",
        dialogs: [
          { speaker: "Filipe", text: "Tínhamos apenas o lanche de um menino... Mas os cestos continuam transbordando sem cessar!", type: "shout" },
          { speaker: "Jesus", text: "Distribuam com alegria! A generosidade divina preenche todo o vazio e escassez moral da humanidade!", type: "speech" }
        ],
        soundEffect: "CHIME-GLOW-CHIME!",
        soundEffectTranslation: "A multiplicação milagrosa da matéria sob o agradecimento espiritual.",
        historicalNote: "Cinco pães de cevada representavam o alimento básico dos camponeses pobres da Galileia antiga, enfatizando a provisão amorosa divina."
      },
      {
        id: 6,
        title: "A Voz que Calma a Tempestade",
        verseText: "E, levantando-se, repreendeu o vento, e disse ao mar: 'Cala-te, emudece'. E o vento se aquietou, e houve grande bonança.",
        verseRef: "Marcos 4:39",
        actionDescription: "Uma das imagens coloridas mais lindas! Jesus em pé na popa do barco açoitado pelas ondas escuras. Ele estende a mão espalmada contra os ventos e raios, impondo ordem com olhar de rei cósmico.",
        dialogs: [
          { speaker: "Jesus", text: "CALA-TE! EMUDECE! Haja paz e ordem sob o Meu comando sobre as águas!", type: "shout" },
          { speaker: "Discípulos", text: "*(Em choque sagrado de joelhos)* Quem é este homem que até os ventos furiosos e o oceano obedecem de imediato?!", type: "thought" }
        ],
        soundEffect: "FROOOOOOSH-SHUUUUU...",
        soundEffectTranslation: "A tempestade desintegrando-se e cedendo lugar ao céu estrelado límpido.",
        historicalNote: "O Mar da Galileia é conhecido por tempestades violentas repentinas causadas por ventos frios colidindo sobre a depressão do lago."
      }
    ],
    extraHistoryNote: {
      title: "O Barco da Galileia e Detalhes Arqueológicos",
      content: "Arqueólogos descobriram na lama do lago de Genesaré um barco pesqueiro real do século I com 8 metros, confirmando a escala das narrativas bíblicas."
    },
    theologicalContext: "Jesus demonstra autoridade divina sobre a natureza, enfermidades, escassez e demônios, provando que Ele é o Rei cuja soberania é exercida por amor abnegado."
  },
  {
    id: "cap10_jesus_ressurreicao",
    number: 10,
    characterId: "jesus_ressurreicao",
    title: "Evangelho: Jesus e a Vitória Completa sobre a Morte",
    summary: "O sacrifício voluntário no Calvário para levar sobre si as dores, o sepultamento sob selo imperial romano, o abalo sísmico do selo rompido e a gloriosa ressurreição ao terceiro dia.",
    panels: [
      {
        id: 1,
        title: "A Agonia no Jardim do Getsêmani",
        verseText: "E, posto em agonia, orava mais intensamente. E o seu suor tornou-se em grandes gotas de sangue que corriam até ao chão.",
        verseRef: "Lucas 22:44",
        actionDescription: "Jesus ajoelha-se sob antigas oliveiras retorcidas à noite no Getsêmani, suando gotas brilhantes de suor sanguinolento enquanto segura a cabeça em profunda agonia espiritual.",
        dialogs: [
          { speaker: "Jesus", text: "Meu Pai! Se for possível, passe de mim este cálice de ira... Contudo, não se faça a minha vontade, mas a Tua!", type: "shout" },
          { speaker: "Narrador", text: "Na escuridão do jardim, inicia-se o embate espiritual supremo contra as forças das trevas.", type: "narrator" }
        ],
        soundEffect: "THUD-THUD-THUD...",
        soundEffectTranslation: "As gotas de suor misturadas a sangue caindo na poeira escura.",
        historicalNote: "O Getsêmani (literalmente 'prensa de azeite' em aramaico) situava-se no Monte das Oliveiras, local onde as uvas e azeitonas eram prensadas."
      },
      {
        id: 2,
        title: "O Julgamento Injusto e a Coroa",
        verseText: "E os soldados, tecendo uma coroa de espinhos, lha puseram na cabeça... e diziam: 'Salve, Rei dos Judeus!'",
        verseRef: "João 19:2-3",
        actionDescription: "Jesus, amarrado a um pilar sob o palácio romano de Pilatos, é coroado com espinhos afiados que perfuram Sua testa. Ele está calmo e em silêncio de pura dignidade régia.",
        dialogs: [
          { speaker: "Pilatos", text: "Tu és o Rei dos Judeus?! De onde és Tu? Não sabes que tenho poder para te libertar ou te crucificar?", type: "speech" },
          { speaker: "Jesus", text: "Nenhum poder terias contra mim se do céu não te fosse concedido. Meu Reino não é deste mundo!", type: "speech" }
        ],
        soundEffect: "WHIP-SNAP!",
        soundEffectTranslation: "A violência dos chicotes romanos caindo sobre o corpo do inocente.",
        historicalNote: "Soldados romanos usavam espinhos da espécie 'Ziziphus spina-christi' para fabricar coroas de deboche imitando as folhas de louro dos imperadores."
      },
      {
        id: 3,
        title: "O Véu Rasgado no Calvário",
        verseText: "Jesus clamou outra vez com grande voz, e entregou o espírito. E eis que o véu do templo se rasgou em dois, de alto a baixo.",
        verseRef: "Mateus 27:50-51",
        actionDescription: "Jesus na cruz sob céu totalmente preto no cume do Gólgota. Ao fundo, o gigantesco e impenetrável véu bordado do Templo rasga com precisão geométrica sob um feixe de luz azul divina.",
        dialogs: [
          { speaker: "Jesus", text: "*(Grito vitorioso)* ESTÁ CONSUMADO! Pai... nas Tuas mãos... entrego o meu espírito!", type: "shout" },
          { speaker: "Centurião Romano", text: "*(Caindo de joelhos)* Verdadeiramente... este homem justo era o Filho de Deus!", type: "shout" }
        ],
        soundEffect: "KRA-KRAAAAASH-CRACK!",
        soundEffectTranslation: "A terra sacudindo violentamente e o templo tremendo sob o peso da expiação.",
        historicalNote: "O véu tinha espessura equivalente a uma palma de mão e dividia o Lugar Santo do Santo dos Santos, simbolizando a separação entre Deus e o homem."
      },
      {
        id: 4,
        title: "O Túmulo Selado",
        verseText: "E, tomando o corpo, José o envolveu num lençol limpo de linho... e rolou uma grande pedra para a porta do sepulcro.",
        verseRef: "Mateus 27:59-60",
        actionDescription: "Soldados romanos aplicam lacres de argila e cordas sobre a imensa pedra circular que veda a entrada de um sepulcro cavado na rocha, garantindo a guarda do local.",
        dialogs: [
          { speaker: "Guarda Romano", text: "O selo imperial está posto! Ninguém ousará violar a segurança do sepulcro deste líder judeu!", type: "speech" },
          { speaker: "Narrador", text: "A escuridão tenta prender a Vida, guardando-a sob o túmulo de pedra calcária.", type: "narrator" }
        ],
        soundEffect: "ROLL-CLANK-SLAM!",
        soundEffectTranslation: "A enorme rocha de selamento fechando a entrada da morte.",
        historicalNote: "Túmulos de famílias ricas do século I tinham sulcos na rocha onde uma pedra circular de toneladas deslizava para vedar a porta."
      },
      {
        id: 5,
        title: "O Romper do Selo e o Relâmpago",
        verseText: "E eis que houvera um grande terremoto; porque um anjo do Senhor... removeu a pedra da porta, e sentou-se sobre ela.",
        verseRef: "Mateus 28:2",
        actionDescription: "O selo imperial racha enquanto a imensa pedra redonda é rolada com facilidade por um feixe de energia brilhante. Um anjo majestoso com veste branca brilha como relâmpago, sentado no topo da rocha.",
        dialogs: [
          { speaker: "Anjo", text: "Não temam! Sei que buscam Jesus que foi crucificado. Ele não está aqui! Ressuscitou triunfante!", type: "shout" },
          { speaker: "Soldados Romanos", text: "*(Tremendo de pânico e caindo desmaiados)* Que poder é este?! A morte não pôde retê-lo!", type: "shout" }
        ],
        soundEffect: "KRAAAAASH-ZAP-SHIIIIN!",
        soundEffectTranslation: "O abalo sísmico sobrenatural abrindo o sepulcro vazio.",
        historicalNote: "O terremoto e a descida do anjo demonstram que as leis físicas terrestres foram dobradas pelo poder supremo da ressurreição corporal."
      },
      {
        id: 6,
        title: "O Leão da Tribo de Judá Glorioso",
        verseText: "Aproximando-se Jesus, falou-lhes, dizendo: 'Foi-me dada toda a autoridade no céu e na terra...'.",
        verseRef: "Mateus 28:18",
        actionDescription: "Jesus Cristo ressuscitado em pé no topo do monte com Suas mãos estendidas, marcas gloriosas curadas brilhando em Seus pulsos. Seus discípulos o adoram com sorrisos expressivos e lágrimas de vitória. O sol nasce majestoso ao fundo.",
        dialogs: [
          { speaker: "Jesus", text: "Eis que estou convosco todos os dias, até a consumação dos séculos! Vão e façam discípulos de todas as nações!", type: "shout" },
          { speaker: "Discípulos", text: "*(Em adoração)* MARANATA! Tu venceste o túmulo! O Reino de Deus triunfou para sempre!", type: "shout" },
          { speaker: "Narrador", text: "A Aliança Eterna é confirmada em carne gloriosa, mudando o rumo da história da terra para sempre.", type: "narrator" }
        ],
        soundEffect: "ZUMMM-GLOW-CHIME!",
        soundEffectTranslation: "A aurora eterna da ressurreição inaugurando a nova criação.",
        historicalNote: "As aparições pós-ressurreição de Jesus por 40 dias para mais de 500 testemunhas consolidaram o nascimento do movimento de fé global."
      }
    ],
    extraHistoryNote: {
      title: "O Testemunho de Flávio Josefo",
      content: "Josefo, o mais famoso historiador judeu do século I, registra em seu livro 'Antiguidades Judaicas' a condenação de Jesus por Pilatos e os relatos persistentes de Sua ressurreição ao terceiro dia."
    },
    theologicalContext: "A ressurreição corporal de Cristo é a espinha dorsal de toda a teologia bíblica, desarmando o império da morte biológica e espiritual e assegurando o resgate e reestruturação final de toda a criação."
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    characterId: "adao_eva",
    question: "O que significa a palavra hebraica 'Adama', da qual se deriva o nome de Adão?",
    options: [
      "Sopro Espiritual",
      "Terra Vermelha / Pó da Terra",
      "Fruto Proibido",
      "Rei do Jardim"
    ],
    answerIndex: 1,
    explanation: "'Adão' está intimamente ligado a 'Adama' (a terra vermelha fértil), indicando que o homem foi formado do pó da terra e carrega uma conexão física essencial com o planeta criado."
  },
  {
    id: 2,
    characterId: "abraao",
    question: "De qual grande metrópole suméria Deus chamou Abraão para iniciar a sua jornada de fé?",
    options: [
      "Babilônia",
      "Ur dos Caldeus",
      "Nínive",
      "Tiro"
    ],
    answerIndex: 1,
    explanation: "Abraão foi chamado de Ur dos Caldeus, uma cidade-estado altamente desenvolvida e sofisticada no sul da Mesopotâmia antiga, demonstrando desapego material em favor do chamado divino."
  },
  {
    id: 3,
    characterId: "noe",
    question: "De acordo com o texto bíblico, qual tipo de madeira exata Noé usou para construir a Arca?",
    options: [
      "Cedro do Líbano",
      "Madeira de Gofer (Cipreste)",
      "Carvalho de Basã",
      "Madeira de Acácia"
    ],
    answerIndex: 1,
    explanation: "Gênesis 6:14 especifica que a Arca deveria ser feita de 'madeira de gofer' (provavelmente cipreste), selecionada por sua alta resistência à putrefação e durabilidade na água."
  },
  {
    id: 4,
    characterId: "moises",
    question: "Qual era o nome hebraico do mar aberto por Moisés, traduzido tradicionalmente como Mar de Juncos?",
    options: [
      "Yam Suf",
      "Galileia",
      "Mar Morto",
      "Grande Rio"
    ],
    answerIndex: 0,
    explanation: "Em hebraico, o mar é denominado 'Yam Suf', que significa literalmente 'Mar de Juncos' ou 'Mar das Algas', correspondendo ao Mar Vermelho oriental e suas bacias."
  },
  {
    id: 5,
    characterId: "josue",
    question: "Qual instrumento rústico sagrado feito de chifre de carneiro foi tocado na queda de Jericó?",
    options: [
      "Harpa de bronze",
      "Lira fenícia",
      "Shofar",
      "Flauta de bambu"
    ],
    answerIndex: 2,
    explanation: "O 'Shofar' é o chifre de carneiro sagrado usado para dar sinal de batalha, anunciar jejuns solenes ou proclamar o ano do jubileu no antigo Israel."
  },
  {
    id: 6,
    characterId: "jose",
    question: "A qual alta posição administrativa José do Egito foi elevado por Faraó após interpretar seus sonhos?",
    options: [
      "General de infantaria",
      "Vizir (Governador Geral)",
      "Sacerdote de Rá",
      "Escriba chefe"
    ],
    answerIndex: 1,
    explanation: "José tornou-se Vizir, a posição administrativa mais alta do Egito logo abaixo do próprio Faraó, conferindo-lhe controle completo sobre a tesouraria, agricultura e provisões."
  },
  {
    id: 7,
    characterId: "david",
    question: "Qual era o nome do vale geográfico onde Davi enfrentou o gigante filisteu Golias?",
    options: [
      "Vale de Elá",
      "Vale de Cedrom",
      "Deserto de Judá",
      "Monte Moriá"
    ],
    answerIndex: 0,
    explanation: "A batalha histórica entre Davi e Golias ocorreu no Vale de Elá, um vale estratégico que liga as planícies filisteias às colinas montanhosas da Judeia."
  },
  {
    id: 8,
    characterId: "salomao",
    question: "Em qual monte geográfico Salomão construiu o majestoso Primeiro Templo de Jerusalém?",
    options: [
      "Monte Sinai",
      "Monte Moriá",
      "Monte das Oliveiras",
      "Monte Nebo"
    ],
    answerIndex: 1,
    explanation: "Salomão construiu o Templo no Monte Moriá, conectando-o geograficamente ao local do sacrifício oferecido por Abraão e à eira comprada por seu pai Davi."
  },
  {
    id: 9,
    characterId: "jesus_vida",
    question: "Onde o menino Jesus foi deitado ao nascer devido à falta de vagas nas hospedarias de Belém?",
    options: [
      "Em um berço de ouro",
      "Em uma manjedoura de pedra",
      "Sobre um tapete de lã",
      "Em um barco de pesca"
    ],
    answerIndex: 1,
    explanation: "Jesus foi deitado em uma 'manjedoura' (um cocho para animais), que na Judeia antiga era comumente entalhada na pedra calcária, representando Sua humildade incomparável."
  },
  {
    id: 10,
    characterId: "jesus_ressurreicao",
    question: "Qual historiador judeu do século I d.C. registra explicitamente a existência, morte e ressurreição relatada de Jesus?",
    options: [
      "Tácito",
      "Flávio Josefo",
      "Plínio, o Moço",
      "Suetônio"
    ],
    answerIndex: 1,
    explanation: "Flávio Josefo descreve Jesus em seu livro 'Antiguidades Judaicas' (século I d.C.), atestando Seu status de sábio, Sua execução sob Pilatos e a devoção inabalável de Seus seguidores."
  }
];
