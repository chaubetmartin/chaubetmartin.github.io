// CONFIGURATION DES CONTENUS (collections)
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const actualites = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/actualites' }),
  schema: z.object({
    titre: z.string(),
    titreSeo: z.string(),
    resume: z.string(),
    description: z.string(),
    categorie: z.string(),
    date: z.coerce.date(),
    ordre: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

export const collections = { actualites };
