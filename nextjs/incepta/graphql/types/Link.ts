import { objectType, extendType } from "nexus";
import { User } from './User';

export const Link = objectType({
    name: 'Link',
    definition(t){
        t.string('id')
        t.string('title')
        t.string('url')
        t.string('description')
        t.string('imageUrl')
        t.string('category')
        t.list.field('users', {
            type: User,
            async resolve(_parent, _args, ctx){
                return await ctx.prisma.link
                    .findUnique({
                        where:{
                            id:_parent.id
                        },
                    })
                .users()
            },   
        })
    },
})