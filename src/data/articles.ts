// UTILITAIRE : récupère tous les articles d'actualité, du plus récent au plus ancien.
// À date égale, le champ "ordre" (défini dans chaque fichier .md) départage.
// Utilisé par l'accueil et par la page /actualites.

import { getCollection } from 'astro:content';

export async function articlesTries() {
  const articles = await getCollection('actualites');
  return articles.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf() || a.data.ordre - b.data.ordre,
  );
}
