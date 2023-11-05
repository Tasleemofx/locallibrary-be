import BookInstance from "../models/bookInstance.js"
import asyncHandler from "express-async-handler"


export const GetAllBookInstances = asyncHandler(async (req, res, next) => {
    const BookInstances = await BookInstance.find({})

    res.status(200).json(BookInstances)
})

export const GetSingleBookInstance = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Single BookInstance")
})

export const BookInstanceCreateGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create Get")
})

export const BookInstanceCreatePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance create Post")
})

export const BookInstanceDeleteGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete Get")
})

export const BookInstanceDeletePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: BookInstance delete Post")
})

export const BookInstanceUpdateGet = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: BookInstance update get')
})

export const BookInstanceUpdatePost = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: BookInstance update post')
})