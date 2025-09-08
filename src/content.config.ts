import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export const collections = {
    portfolio: defineCollection({
        loader: glob({ base: "./src/content/portfolio", pattern: "**/*.json" }),
        schema: z.object({
            path: z.string(),
            name: z.string(),
            type: z.enum(["Спортивные", "Учебные", "Общественные"]),
            level: z.enum(["Местные", "Районные", "Региональные", "Всероссийские"]),
            place: z.enum(["1 место", "2 место", "3 место", "Участие"]).nullable(),
            year: z.number(),
        })
    }),
    motivation: defineCollection({
        loader: glob({ base: "./src/content/motivation", pattern: "**/*.md" }),
        schema: z.object({})
    })
};