import express from "express";
import { GetAllAuthors, GetSingleAuthor, AuthorCreateGet, AuthorCreatePost,
AuthorDeletePost, AuthorDeleteGet, AuthorUpdateGet, AuthorUpdatePost } from "../controllers/authorController";
import {
    BookIndex, GetAllBooks, GetSingleBook, BookCreateGet, BookCreatePost,
    BookDeletePost, BookDeleteGet, BookUpdateGet, BookUpdatePost
} from "../controllers/bookController";
import {
    GetAllBookInstances, GetSingleBookInstance, BookInstanceCreateGet, BookInstanceCreatePost,
    BookInstanceDeletePost, BookInstanceDeleteGet, BookInstanceUpdateGet, BookInstanceUpdatePost
} from "../controllers/bookInstanceController";
import {
    GetAllGenres, GetSingleGenre, GenreCreateGet, GenreCreatePost,
    GenreDeletePost, GenreDeleteGet, GenreUpdateGet, GenreUpdatePost
} from "../controllers/genreController";

let router = express.Router();

// BOOK ROUTES


// book index
router.get("/", BookIndex)

// Create book
router.get("/book/create", BookCreateGet)
router.post("/book/create", BookCreatePost)

// Delete book

router.get("/book/:id/delete", BookDeleteGet)
router.post("/book/:id/delete", BookDeletePost)

// Update Book

router.get("/book/:id/update", BookUpdateGet)
router.post("/book/:id/update", BookUpdatePost)

// Get single Book
router.get("/book/:id", GetSingleBook)

// list all books
router.get("/book", GetAllBooks)


// AUTHOR ROUTES

