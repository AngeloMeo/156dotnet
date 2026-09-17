import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const techtips = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/techtips' }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    description: z.string(),
    description_en: z.string().optional(),
    category: z.string(),
    category_en: z.string().optional(),
    difficulty: z.enum(['Facile', 'Medio', 'Avanzato']),
    difficulty_en: z.string().optional(),
    timeRequired: z.string(),
    timeRequired_en: z.string().optional(),
    toolsNeeded: z.array(z.string()).default([]),
    toolsNeeded_en: z.array(z.string()).default([]),
    partsNeeded: z.array(z.string()).default([]),
    partsNeeded_en: z.array(z.string()).default([]),
    applicableModels: z.array(z.string()).default(['Alfa 156']),
    applicableModels_en: z.array(z.string()).default([]),
    author: z.string().default('Alfa 156 Community / Anders & Jeff'),
    publishDate: z.string().optional(),
    featuredImage: z.string(),
    stepsCount: z.number().default(1),
    tags: z.array(z.string()).default([]),
    gallery: z.array(
      z.object({
        src: z.string(),
        caption: z.string(),
        caption_en: z.string().optional(),
      })
    ).default([]),
  }),
});

export const collections = { techtips };
