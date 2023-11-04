import mongoose, { Schema } from "mongoose";


const AuthorSchema = new mongoose.Schema({
   firstName: { 
    type: String,
    required: [true, "Please provide a firstname to continue"],
    maxLength: [100, "Maximum length of firstname exceeded"]   
},
    lastName: {
    type: String,
    required: [true, "Please provide a lastname to continue"],
    maxLength: [100, "Maximum length of lastname exceeded"]
    },
    dateOfBirth: { type: Date},
    dateOfDeath: { type: Date}

})

AuthorSchema.virtual("name").get(function(){
    let fullName = ""
    if(this.firstName && this.lastName){
    fullName = `${this.firstName} + ${this.lastName}`
    }
    return fullName
})

AuthorSchema.virtual("url").get(function(){
    return `/catalog/author/${this._id}`
})

const Author = mongoose.model("Author", AuthorSchema);


export default Author;