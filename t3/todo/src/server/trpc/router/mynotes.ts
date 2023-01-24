import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const notesRouter = router({
  //fetch all notes
  allNotes: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma?.notes?.findMany({
        select: {
          title: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log(`Cannot fetch your notes ${error}`);
    }
  }),
  //create a new note
  newNote: publicProcedure
    .input(
      z.object({
        title: z
          .string()
          .min(5, { message: "Must be 5 or more characters of length!" })
          .max(200, {
            message: "Must not be more than 200 characters of length!",
          })
          .trim(),
        description: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.notes.create({
          data: {
            title: input.title,
            description: input.description,
          },
        });
      } catch (error) {
        console.log(`Note cannot be created ${error}`);
      }
    }),
  //fetch a single note
  detailNote: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const { id } = input;
      try {
        return await ctx.prisma.notes.findUnique({
          where: {
            id,
          },
        });
      } catch (error) {
        console.log(`Note detail not found ${error}`);
      }
    }),
  //update a note
  updateNote: publicProcedure
    .input(
      z.object({
        title: z
          .string()
          .min(5, { message: "Must be 5 or more characters of length!" })
          .max(200, {
            message: "Must not be more than 200 characters of length!",
          })
          .trim(),
        description: z.string(),
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      try {
        return await ctx.prisma.notes.update({
          where: {
            id,
          },
          data: {
            title: input.title,
            description: input.description,
          },
        });
      } catch (error) {
        console.log(`Note cannot be updated ${error}`);
      }
    }),
  //delete a note
  deleteNote: publicProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      try {
        return await ctx.prisma.notes.delete({
          where: {
            id,
          },
        });
      } catch (error) {
        console.log(`Note cannot be deleted ${error}`);
      }
    }),
});
