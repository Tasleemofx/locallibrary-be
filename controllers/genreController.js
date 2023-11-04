import Genre from "../models/genreModel"
import asyncHandler from "express-async-handler"


export const GetAllGenres = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre list")
})

export const GetSingleGenre = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Single Genre")
})

export const GenreCreateGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create Get")
})

export const GenreCreatePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre create Post")
})

export const GenreDeleteGet = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete Get")
})

export const GenreDeletePost = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: Genre delete Post")
})

export const GenreUpdateGet = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Genre update get')
})

export const GenreUpdatePost = asyncHandler(async (req, res, next) => {
    res.send('NOT IMPLEMENTED: Genre update post')
})