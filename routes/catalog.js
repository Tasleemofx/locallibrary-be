import express from "express";
import { GetAllAuthors, GetSingleAuthor, AuthorCreateGet, AuthorCreatePost,
AuthorDeletePost, AuthorDeleteGet, AuthorUpdateGet, AuthorUpdatePost } from "../controllers/authorController.js";
import {
    BookIndex, GetAllBooks, GetSingleBook, BookCreateGet, BookCreatePost,
    BookDeletePost, BookDeleteGet, BookUpdateGet, BookUpdatePost
} from "../controllers/bookController.js";
import {
    GetAllBookInstances, GetSingleBookInstance, BookInstanceCreateGet, BookInstanceCreatePost,
    BookInstanceDeletePost, BookInstanceDeleteGet, BookInstanceUpdateGet, BookInstanceUpdatePost
} from "../controllers/bookInstanceController.js";
import {
    GetAllGenres, GetSingleGenre, GenreCreateGet, GenreCreatePost,
    GenreDeletePost, GenreDeleteGet, GenreUpdateGet, GenreUpdatePost
} from "../controllers/genreController.js";

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
router.get("/books", GetAllBooks)


// AUTHOR ROUTES

router.get("/author/create", AuthorCreateGet)

router.post("/author/create", AuthorCreatePost)


router.get("/author/:id/delete", AuthorDeleteGet)

router.post("/author/:id/delete", AuthorDeletePost)

router.get("/author/:id/update", AuthorUpdateGet)

router.post("/author/:id/delete", AuthorDeletePost)

router.get("/author/:id", GetSingleAuthor)

router.get("/authors", GetAllAuthors)


// GENRE ROUTES

router.get("/genre/create", GenreCreateGet)

router.post("/genre/create", GenreCreatePost)

router.get("/genre/:id/delete", GenreDeleteGet)

router.post("/genre/:id/delete", GenreDeletePost)

router.get("/genre/:id/update", GenreUpdateGet)

router.post("/genre/:id/update", GenreUpdatePost)

router.get("/genre/:id/", GetSingleGenre)

router.get("/genres", GetAllGenres)


// BOOKINSTANCE ROUTES
router.get("/bookinstance/create", BookInstanceCreateGet)

router.post("/bookinstance/create", BookInstanceCreatePost)

router.get("/bookinstance/:id/delete", BookInstanceDeleteGet)

router.post("/bookinstance/:id/delete", BookInstanceDeletePost)

router.get("/bookinstance/:id/update", BookInstanceUpdateGet)

router.post("/bookinstance/:id/update", BookInstanceUpdatePost)

router.get("/bookinstance/:id/", GetSingleBookInstance)

router.get("/bookinstances", GetAllBookInstances)


export default router;