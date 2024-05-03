const {PrismaClient} = require ("@prisma/client");
const database = new PrismaClient();

async function main(){
    try{
        await database.category.createMany({
            data:[
                { name: "Accounting"},
                { name: "Computer Science"},
                { name: "Engineering"},
                { name: "Filming"},
                { name: "Fitness"},
                { name: "Music"},
                { name: "Photography"},
            ]
        });
        console.log("Success");
    } catch (error) {
        console.log("error seeding the database categories",error);
    } finally {
        await database.$disconnect();
    }
}

main ();