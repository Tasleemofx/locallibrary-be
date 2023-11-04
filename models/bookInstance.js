import mongoose, { Schema } from "mongoose"


const bookInstanceSchema = new mongoose.Schema({
    book:{
        type: Schema.Types.ObjectId,
        required: [true, "Book required"]
    },
    imprint:{
        type: String,
        required: [true, "Imprint required"]
    },
    status: {
        type: String,
        required: [true, "book status required"],
        enum : ["Available", "Maintenance", "Loaned", "Reserved"],
        default: "Maintenance"
    },
    dueBack: {
        type: Date,
        default: Date.now
    }
})


bookInstanceSchema.virtual("url").get(function(){
    return `/catalog/bookinstance/${this._id}`
})


const BookInstance = mongoose.model("BookInstance", bookInstanceSchema)

export default BookInstance;