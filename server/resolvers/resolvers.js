module.exports = {
    Query:{
        info: () => 'This is Forge',
        feed: (parent, args, context) => {
            return context.prisma.book.findMany()
        },
    },

    Mutation: {
        post: (parent, args, context, info) => {
            const newBook = context.prisma.book.create({
                data: {
                    user: args.user,
                    description: args.description,
                    body: args.body
                },
            })
            return newBook
        }
    }
}