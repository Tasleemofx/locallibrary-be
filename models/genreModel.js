import mongoose from "mongoose";


const genreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Genre name is required"],
        maxLength: 100,
        minLength: 3
    }
})

genreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`
}) 


const Genre = mongoose.model("Genre", genreSchema)

export default Genre