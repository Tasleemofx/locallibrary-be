import mongoose, { Schema } from "mongoose"


const storySchema = new mongoose.Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author"
    },
    title: String
})


const Story = mongoose.model("Story", storySchema)

export default Story