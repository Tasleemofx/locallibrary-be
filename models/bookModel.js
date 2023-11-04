import mongoose, { Schema } from "mongoose";


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required"]
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: [true, "Book author is required"]
    },
    summary:{
        type: String,
        required: [true, "Book summary is required"]

    },
    isbn:{
        type: String,
        required: [true, "Book isbn is required"]
    },
    genre:[{
        type: Schema.Types.ObjectId,
        ref: "Genre"
    }]
})

bookSchema.virtual("url").get(function(){
    return `/catalog/book/${this._id}`
})


const Book = mongoose.model("Book", bookSchema)

export default Book;