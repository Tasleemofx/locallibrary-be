import mongoose from "mongoose";

mongoose.set("strictQuery", false)
const mongourl = "mongodb://localhost:27017/library"

main()


async function main() {
    console.log("trying to connect to database")
    mongoose.connect(mongourl)
    .then(res=>{
        console.log("now connected to mongodb database")
    })
    .catch(error=>{
        console.log(error)
    })
    
}

export default main;