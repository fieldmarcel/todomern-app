import mongoose, { Schema } from "mongoose"

const todoSchema=  new Schema({

task:{
    type:String,
    required:true,
},
id:{
    type:Number
}


},{timestamps:true})

export const todo= mongoose.model("todo",todoSchema)