// DONNÉES DES PRESTATIONS : les trois pôles de N7 Consulting.
// Chaque pôle a une page (voir src/pages/digital-data.astro, etc.) et une carte
// sur l'accueil. Les trois pages utilisent le même composant (PagePole.astro) :
// seules les données changent.

const CDN = 'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/';

export interface Service {
  titre: string;
  points: string[];
}

export interface Section {
  titre: string;
  intro: string;
  services: Service[];
}

export interface Realisation {
  client: string;
  texte: string;
}

export interface Pole {
  slug: string;
  href: string;
  emoji: string;
  nom: string;
  resume: string; // texte court de la carte d'accueil
  image: string;
  imageAlt: string;
  titrePage: string; // <title> de la page
  description: string; // meta description
  h1: string;
  accroche: string;
  sections: Section[];
  realisations?: Realisation[];
}

export const digital: Pole = {
  slug: 'digital-data',
  href: '/digital-data',
  emoji: '💻',
  nom: 'Digital & Data',
  resume:
    "À l'ère du tout-connecté, exploitez la puissance des données et du digital pour faire évoluer votre entreprise. Nos étudiants ingénieurs vous guident à chaque étape de votre transition numérique.",
  image: CDN + '68320aa7188508d45dc74399_Capture%20d%E2%80%99%C3%A9cran%202025-05-24%20200210.png',
  imageAlt: 'Ordinateur Digital et data',
  titrePage: 'Développement web, IA et data – N7 Consulting Toulouse',
  description:
    "Sites, applications web et mobiles, logiciels, IA et traitement de données réalisés par les étudiants ingénieurs de l'ENSEEIHT. Demandez un devis.",
  h1: 'Transformez vos idées digitales en solutions innovantes',
  accroche:
    "Explorez nos services Digital & Data : des sites web élégants aux applications sur mesure, jusqu'à l'IA et l'analyse de données.",
  sections: [
    {
      titre: 'Découvrez nos services Digitaux',
      intro:
        "Aujourd’hui, le digital est un moteur essentiel pour votre entreprise, permettant d'atteindre des objectifs variés à chaque étape de votre parcours, de leur lancement à leur pérennisation. Vous avez une idée à développer ? Pourquoi ne pas la concrétiser avec une application web ou un site pour la promouvoir ? Votre entreprise manque de visibilité et votre développement commercial stagne ? Un site internet pourrait être la solution. Votre site actuel est obsolète ? Il est temps de le moderniser et de le remettre au goût du jour. Alors, prêt à passer à l’action ?",
      services: [
        {
          titre: 'Application web',
          points: [
            'Conception d’applications web sur mesure pour aller au-delà du simple site vitrine',
            'Fonctionnalités avancées : gestion de compte, personnalisation, collecte de données',
            'Expérience utilisateur optimisée pour engager et fidéliser vos clients',
            'Un outil puissant pour concrétiser votre idée et accompagner la croissance de votre entreprise',
          ],
        },
        {
          titre: 'Site vitrine',
          points: [
            'Créez votre vitrine numérique pour renforcer votre visibilité et votre crédibilité',
            'Présentez efficacement votre activité, vos produits et vos services à vos clients',
            'Répondez aux attentes du marché : 63 % des TPE/PME estiment leur présence en ligne indispensable',
            'Faites le premier pas vers le digital avec un site professionnel, accessible et impactant',
          ],
        },
        {
          titre: 'Application mobile',
          points: [
            'Restez en contact avec vos clients à tout moment grâce à une application mobile dédiée',
            'Soyez présent sur leur smartphone, l’outil le plus utilisé au quotidien',
            'Renforcez l’engagement client avec une expérience fluide, accessible et personnalisée',
            'Faites de votre application un levier de croissance pour votre activité',
          ],
        },
        {
          titre: 'Logiciels',
          points: [
            'Développement de logiciels sur mesure pour répondre précisément à vos besoins',
            'Optimisation de vos processus grâce à des solutions parfaitement adaptées à votre activité',
            'Un outil qui s’adapte à vous, et non l’inverse : fini les compromis avec les solutions standards',
            'Gain en efficacité, en fluidité et en performance au quotidien',
          ],
        },
      ],
    },
    {
      titre: 'Découvrez nos services Datas',
      intro:
        "Les données vous sont essentielles pour prendre des décisions éclairées et vous développer efficacement. L'analyse de vos données, renforcée par l'intelligence artificielle, vous permet de recueillir des informations précieuses sur vos clients, processus et opérations. Grâce à l'IA, vous pouvez détecter des tendances invisibles, optimiser vos processus en temps réel et prédire des résultats avec précision. En intégrant l'IA, vous transformez l'information brute en actions concrètes, améliorant ainsi la performance et la croissance de votre entreprise.",
      services: [
        {
          titre: 'Traitement de BDD',
          points: [
            'Analysez en profondeur votre entreprise grâce à un outil de traitement de données sur mesure',
            'Identifiez vos leviers de croissance et anticipez vos risques avant qu’ils ne surviennent',
            'Prenez des décisions éclairées au quotidien, basées sur des données fiables et pertinentes',
            'Libérez tout le potentiel de vos données pour piloter efficacement votre activité',
          ],
        },
        {
          titre: 'Intelligence artificielle',
          points: [
            'Intégrez l’intelligence artificielle dans votre projet, même sans expertise préalable',
            'Exploitez vos données intelligemment avec des modèles d’analyse et de prédiction sur mesure',
            'Développez des solutions innovantes adaptées à vos objectifs métier',
            'Bénéficiez d’un accompagnement personnalisé à chaque étape du projet',
          ],
        },
      ],
    },
  ],
  realisations: [
    {
      client: 'Vinci Facilities',
      texte:
        'Nous avons développé pour Vinci une application ergonomique, afin de renforcer sa communication interne. L’application permet de publier des podcasts qui sont disponibles pour tous les employés. Elle dispose de la fonction kit main libre (commande vocale) ainsi que d’une mesure du taux d’écoute.',
    },
    {
      client: 'Water Horizon',
      texte:
        'Jean-Emmanuel Faure, le jeune entrepreneur à la tête de la start-up toulousaine Water Horizon nous a contacté pour la refonte de son site internet. Nous avons alors développé un site qui constitue la vitrine de sa marque, un appui et un outil pour faire connaître ses services et ses produits au plus grand nombre.',
    },
    {
      client: 'CertiPair',
      texte:
        'Certipair a fait appel à nous concernant le développement d’un programme en langage C. Ce programme permet la récupération des informations de la carte Vitale des patients, leur stockage dans un fichier JSON puis une transmission sécurisée au site de Certipair, en utilisant notamment la solution informatique d’intercommunication d’applications (API).',
    },
    {
      client: 'Oncopole – Institut Universitaire du Cancer de Toulouse',
      texte:
        'L’Institut Universitaire du Cancer de Toulouse Oncopole a fait appel à nous pour développer une application web ludique afin de sensibiliser le personnel médical, les patients et leurs proches aux précautions d’emploi de leurs médicaments. Cette application web a en plus été adaptée en application mobile.',
    },
  ],
};

export const ingenierie: Pole = {
  slug: 'ingenierie-it',
  href: '/ingenierie-it',
  emoji: '⚙️',
  nom: 'Ingénierie & IT',
  resume:
    "Besoin d'expertise en conception électronique et systèmes embarqués ? Nous vous accompagnons dans le développement de vos projets technologiques.",
  image: CDN + '68320eded0a1d1885e3cc6d0_vecteezy_gear-icon-3d_17339000.webp',
  imageAlt: 'Ingénierie et IT prestation',
  titrePage: 'Systèmes embarqués et électronique – N7 Consulting',
  description:
    "Conception électronique, systèmes embarqués, réseaux et logiciel : la Junior-Entreprise de l'ENSEEIHT réalise vos projets d'ingénierie à Toulouse.",
  h1: "Transformez vos défis industriels en solutions d'ingénierie sur mesure",
  accroche:
    'Explorez nos expertises en ingénierie : de la conception électronique à la mécanique des fluides pour vos projets les plus complexes',
  sections: [
    {
      titre: 'Découvrez nos services Ingénierie',
      intro:
        'Conception électronique, systèmes embarqués, objets connectés et expertise en sciences appliquées : nous développons des solutions sur mesure, innovantes et adaptées à vos besoins.',
      services: [
        {
          titre: 'Conception électronique',
          points: [
            'Conception sur mesure de cartes électroniques à partir de votre cahier des charges',
            'Adaptation de vos contraintes : environnement, taille, consommation',
          ],
        },
        {
          titre: 'Systèmes embarqués',
          points: [
            'Développement complet de systèmes embarqués autonomes à partir de votre besoin ou d’une simple idée',
            'Intégration intelligente de l’électronique, de l’informatique et de la mécatronique',
            'Création d’IHM sur mesure pour une interaction fluide et intuitive avec l’utilisateur',
          ],
        },
        {
          titre: 'Objets connectés et IoT',
          points: [
            'Développement logiciel sur mesure pour connecter votre objet à tout type d’appareil (PC, smartphone, tablette…)',
            'Compatibilité multi-plateforme assurée grâce à notre expertise en communication embarquée',
            'Maîtrise des protocoles de communication locaux : Bluetooth, BLE, ZigBee, Wi-Fi',
            'Connexion à distance facilitée via Sigfox, LoRa, GSM, 3G, 4G pour l’Internet des objets (IoT)',
          ],
        },
        {
          titre: 'Sciences appliquées',
          points: [
            'Compétences solides alliant théorie rigoureuse et pratique concrète en sciences fondamentales',
            'Maîtrise du traitement du signal et des algorithmes avancés pour répondre aux défis industriels',
            'Savoir-faire en analyse statistique pour une prise de décision basée sur les données',
            'Connaissances pointues en IA et machine learning pour développer des solutions intelligentes et innovantes',
          ],
        },
      ],
    },
  ],
};

export const ecoIngenierie: Pole = {
  slug: 'eco-ingenierie',
  href: '/eco-ingenierie',
  emoji: '🍃',
  nom: 'Éco-ingénierie',
  resume:
    'Optimisez vos modèles, réduisez vos coûts énergétiques et minimisez votre impact environnemental grâce à nos solutions sur mesure. Ensemble, construisons un avenir plus responsable',
  image: CDN + '68320aa7700597d66a3d2208_Capture%20d%E2%80%99%C3%A9cran%202025-05-24%20200225.png',
  imageAlt: 'Eco-ingénierie Mécanique des fluides RSE',
  titrePage: 'Éco-ingénierie et mécanique des fluides – N7 Consulting',
  description:
    "Optimisation énergétique, écoconception, mécanique des fluides et RSE : des études d'ingénierie durables menées par les étudiants de l'ENSEEIHT.",
  h1: "Soyez acteur de la révolution énergétique : optez pour l'Éco-Ingénierie !",
  accroche:
    "Explorez nos expertises en Éco-Ingénierie : de la gestion de l'eau à la sobriété énergétique pour des projets durables et innovants",
  sections: [
    {
      titre: 'Découvrez nos services Éco-Ingénierie',
      intro:
        'Innovation et durabilité : notre approche intégrée pour des solutions éco-responsables et performantes.',
      services: [
        {
          titre: "Gestion de l'eau",
          points: [
            'Savoir-faire en hydrologie appliquée à vos enjeux de gestion de l’eau',
            'Solutions sur mesure pour la prévention des risques naturels et l’optimisation des ouvrages hydrauliques',
            'Modélisation avancée pour anticiper et mieux piloter vos projets',
            'Accompagnement stratégique pour améliorer l’efficacité et la durabilité de vos infrastructures hydrauliques',
          ],
        },
        {
          titre: 'RSE',
          points: [
            'Accompagnement stratégique en RSE pour développer votre activité de manière engagée ou intégrer la RSE au cœur de votre activité',
            'Compréhension des enjeux climatiques et adaptation aux nouvelles attentes sociétales',
            'Mise en place d’actions concrètes pour réduire votre impact environnemental',
            'Conformité aux obligations réglementaires et valorisation de votre image d’entreprise responsable',
          ],
        },
        {
          titre: 'Dépenses énergétiques',
          points: [
            'Accompagnement vers la sobriété énergétique, enjeu clé de la transition actuelle',
            'Optimisation de vos projets pour réduire à la fois consommation énergétique et coûts',
            'Analyse rigoureuse grâce aux compétences scientifiques de nos intervenants',
            'Solutions durables et innovantes adaptées aux nouvelles exigences du secteur énergétique',
          ],
        },
        {
          titre: 'Mécanique des fluides',
          points: [
            'Modélisation précise de phénomènes physiques pour mieux les comprendre et les anticiper',
            'Savoir-faire dédié en conception et simulation grâce à une filière spécialisée de notre école',
            'Stratégies de maillage intelligentes pour optimiser votre temps de calcul et la précision de vos résultats',
            'Solutions sur mesure pour répondre à vos besoins industriels ou de recherche',
          ],
        },
      ],
    },
  ],
};

export const poles = [digital, ingenierie, ecoIngenierie];
