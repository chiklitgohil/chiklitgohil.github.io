import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
      /** Preview image used when the post is shared (Open Graph / X cards). */
      cover: image().optional(),
    }),
});

export const collections = { blog };
