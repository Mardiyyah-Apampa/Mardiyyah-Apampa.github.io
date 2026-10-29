import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projects: one Markdown file per project in src/content/projects/
// Add "Robotics" to `categories` and it also appears on the Robotics page.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    categories: z.array(z.enum(['AI', 'Robotics', 'Software', 'Data'])),
    tools: z.array(z.string()),
    date: z.coerce.date(),
    cover: z.enum(['robot', 'chart', 'code', 'chat']).default('code'),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});


export const collections = { projects };
