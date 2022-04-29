const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const Users = require("./data/users")
const Books = require('./data/books')

async function runSeed() {

    await Promise.all(
        Users.map(async (user) =>
            prisma.user.upsert({
                where: {id: user.id},
                update: {},
                create: user,
            })
        )
    );

    await Promise.all(
        Books.map(async (book) =>
            prisma.book.upsert({
                where: {id: book.id},
                update: {},
                create: book,
            })
        )
    )

}

runSeed()
    .catch((e)=>{
        console.log(e)
        process.exit(1)
    })
    .finally(async ()=>{
        console.log('Successfully seeded database')
        await prisma.$disconnect()
    })