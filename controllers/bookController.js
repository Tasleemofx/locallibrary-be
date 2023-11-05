import Book from "../models/bookModel.js"
import asyncHandler from "express-async-handler"


export const BookIndex = asyncHandler((req, res, next)=>{
    res.send("NOT IMPLEMENTED: Book index")
})

export const GetAllBooks = asyncHandler(async (req, res, next) => {
    const Books = await Book.find({})
    res.status(200).json(Books)
    
})

export const GetSingleBook = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Single Book")
})

export const BookCreateGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create Get")
})

export const BookCreatePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book create Post")
})

export const BookDeleteGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete Get")
})

export const BookDeletePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Book delete Post")
})

export const BookUpdateGet = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Book update get')
})

export const BookUpdatePost = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Book update post')
})