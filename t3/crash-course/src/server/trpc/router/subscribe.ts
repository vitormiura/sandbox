import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const subscribeRouter = router({
  sub: publicProcedure
  .input(z.object({text: z.string().min(5, {message: "must be 5 or more chars"})}))
  .query(({input})=>{ 
    return{
      bololohaha: `bin laden: ${input?.text}`
    }
  })
})