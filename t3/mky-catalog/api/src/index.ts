import express from 'express'
import { z } from 'zod'
import { prisma } from './utils/prisma';
import cors from 'cors'
import * as trpcExpress from '@trpc/server/adapters/express';
import superjson from 'superjson'
import { initTRPC, TRPCError } from '@trpc/server';

const app = express();

app.use(express.json())
app.use(cors({
    origin: [
        "http://localhost:5173"
    ]
}))

const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({ shape }) {
      return shape;
    },
});

const createAnimeScheme = z.object({
    name: z.string(),
    year: z.string()
})

const appRouter = t.router({
    allAnime: t.procedure.query(async () => {
        try {
            const allAnimes = await prisma.anime.findMany()
            return { allAnimes }
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                cause: error,
                message: "Failed to get all animes"
            })
        }
    }),
    createAnime: t.procedure
    .input(createAnimeScheme)
    .mutation(async ({ input }) => {
        try {
            const createAnime = await prisma.anime.create({
                data: {
                    name: input.name,
                    year: input.year
                }
            })
            return {
                createAnime
            }
        } catch (error) {
            throw new TRPCError({
                code: "INTERNAL_SERVER_ERROR",
                cause: error,
                message: "Failed to create anime"
            })
        }
    }),
    example: t.procedure.query(() => {
        return "zimbas"
    })
});

export type AppRouter = typeof appRouter;

app.use(
    '/trpc',
    trpcExpress.createExpressMiddleware({
      router: appRouter,
    }),
);

app.get("/", (req, res) => {
    return res.json({ message: "Deu certo" })
})

app.get("/anime", async (req, res) => {
    const animes = await prisma.anime.findMany()
    return res.json({ message: "Deu certo", animes })
})

app.post("/anime", async (req, res) => {
    console.log("body da request:", req.body);
    try {
        const anime = createAnimeScheme.parse(req.body);
        const createdAnime = await prisma.anime.create({
            data: anime
        })
        return res.json({ message: "Deu certo", anime: createdAnime })
    } catch (error) {
        return res.status(400).json({ message: "Deu errado", error })
    }
})

app.listen(3000, () => {
    console.log("Server running in port 3000")
})
