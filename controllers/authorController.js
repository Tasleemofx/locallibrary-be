import Author from "../models/authorModel.js"
import asyncHandler from "express-async-handler"


export const GetAllAuthors =asyncHandler(async (req, res, next)=>{
    const Authors = await Author.find({})
    res.status(200).json(Authors)
})

export const GetSingleAuthor = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Single Author")
})

export const AuthorCreateGet = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author create Get")
})

export const AuthorCreatePost = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author create Post")
})

export const AuthorDeleteGet = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author delete Get")
})

export const AuthorDeletePost = asyncHandler(async (req, res, next)=>{
    res.send("NOT IMPLEMENTED: Author delete Post")
})

export const AuthorUpdateGet = asyncHandler(async (req, res, next)=>{
    res.send('NOT IMPLEMENTED: Author update get')
})

export const AuthorUpdatePost = asyncHandler(async (req, res, next)=>{
    res.send('NOT IMPLEMENTED: Author update post')
})