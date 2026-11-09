// Fichier de configuration d'Astro.
// C'est ici que l'on déclare les intégrations (sitemap, React...),
// l'URL finale du site, etc. Pour un site simple, il reste presque vide.
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Adresse réelle du site : elle sert à générer les liens absolus
  // (balise "canonical", réseaux sociaux) et le futur sitemap.
  site: 'https://n7consulting.fr',
});
