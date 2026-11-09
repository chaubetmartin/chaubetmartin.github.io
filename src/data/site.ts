// DONNÉES GÉNÉRALES DU SITE
// Toutes les informations qui reviennent sur plusieurs pages sont rassemblées ici :
// pour changer l'adresse, l'e-mail ou un lien, on ne modifie qu'une seule fois.

export const site = {
  nom: 'N7 Consulting',
  description:
    "Junior-Entreprise de l'ENSEEIHT depuis 1977 : nos étudiants ingénieurs réalisent vos projets digital, ingénierie et éco-ingénierie à Toulouse.",
  adresse: '2 Rue Charles Camichel, 31000 Toulouse',
  lienCarte: 'https://maps.app.goo.gl/FfJGui8JWUYhUUGC7',
  email: 'contact@n7consulting.fr',
  linkedin: 'https://fr.linkedin.com/company/n7-consulting',
  instagram: 'https://www.instagram.com/n7consulting',
  siret: '344 162 490 00017',

  // ⚠ À METTRE À JOUR après la mise en ligne : c'était "Webflow" sur l'ancien site.
  // Indiquez ici le nom de votre nouvel hébergeur (Netlify, Vercel, OVH...).
  hebergeur: 'Webflow',

  // Ces fichiers sont pour l'instant hébergés sur l'ancien site (Webflow).
  // Pensez à les télécharger dans le dossier "public/" avant de fermer l'ancien site.
  logo: 'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/67a9fe01c0749a737a00f77e_Logo_N7C_classic_fond_bleu.png',
  brochure:
    'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/699e0eb658bbef180d016e90_plaquette_commerciale_n7_consulting_compressed%20(1).pdf',
  lienVideo: 'https://www.dailymotion.com/video/x8fig11',
};

export const videos = [
  {
    plateforme: 'YouTube',
    titre: 'N7 Consulting : accélérateur de talents',
    url: 'https://www.youtube.com/watch?v=AJJbEshowC8',
    miniature: 'https://img.youtube.com/vi/AJJbEshowC8/hqdefault.jpg',
  },
  {
    plateforme: 'Dailymotion',
    titre: 'N7 Consulting : accélérateur de talents',
    url: site.lienVideo,
    miniature: 'https://www.dailymotion.com/thumbnail/video/x8fig11',
  },
];

// Les liens du menu principal (le bouton "Nous contacter" est géré à part).
export const navigation = [
  { href: '/', texte: 'Accueil' },
  { href: '/qui-sommes-nous', texte: 'Qui sommes-nous ?' },
  { href: '/actualites', texte: 'Actualités' },
];

// (Les trois pôles d'expertise sont décrits dans src/data/prestations.ts.)
const cdn = 'https://cdn.prod.website-files.com/67a9fca34d150f14e73d9ba7/';

// Logos des partenaires affichés dans le pied de page (versions blanches).
export const partenaires = [
  { nom: 'Société Générale', lien: 'https://particuliers.sg.fr', logo: cdn + '67c0852826dd15160d215ae7_Societe%20generale_blanc.png' },
  { nom: 'VINCI Energies', lien: 'https://www.vinci-energies.com', logo: cdn + '67c085286f5365d8a9e7cd83_Vinci%20energies_blanc.png' },
  { nom: 'Wavestone', lien: 'https://www.wavestone.com/fr', logo: cdn + '67d8a5bc4529e90eb63623a5_Wavestone_Logo_Blanc.png' },
  { nom: 'ALTEN', lien: 'https://www.alten.fr', logo: cdn + '68d4333652e8a997d5be2fe6_ALTEN_White.png' },
  { nom: 'PwC', lien: 'https://www.pwc.fr/fr.html', logo: cdn + '67c08af84a1d883205d094a7_pwc.png' },
];
