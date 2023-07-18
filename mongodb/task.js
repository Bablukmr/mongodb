const {dbCunnection} = require('./db');

async function main(){
    try{
        const db = await dbCunnection()
        const collection= db.collection('Users');
        const findResult = await collection.find().toArray();
        console.log(findResult);
    }
    catch (error) {
        console.error('Error performing the task', error)
    }
}

main()