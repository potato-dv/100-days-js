import { 
    getAllBooks,
    getBookById,
    createBook,
    deleteBook } from "../services/bookService.js";

import { sendError } from "../utils/sendError.js";

export async function getBooks(req, res) {
    const author = req.query.author;
    const limit = req.query.limit;

    if (limit !== undefined) {
        const limitNumber = Number(limit);

        if (!Number.isInteger(limitNumber) || limitNumber <= 0) {
            return sendError(
                res, 
                400,
                "INVALID_LIMIT",
                "Limit must be a positive integer"
            );
            }
        }
        const books = await getAllBooks(
            author,
            limit !== undefined ? Number(limit) : undefined
        );

        if (author && books.length === 0) {
            return sendError(
                res,
                404,
                "BOOKS_NOT_FOUND",
                `No books found for author: ${author}`
            )
        }

        res.status(200).json({ data: books });
}


export async function getBook(req, res) {
    const book = await getBookById(req.params.id);

    if (!book) {
        return sendError(
            res, 
            404,
            "BOOK_NOT_FOUND",
            `Book with ID ${req.params.id} not found`
        );
    }

    res.status(200).json({ data: book });
}

export async function createBookController(req, res) {
    const data = req.body;  

    if(!data || Object.keys(data).length === 0) {
        return sendError(
            res,
            400,
            "INVALID_BOOK",
            "Failed to create book"
        );
    }

    const details = []

    if (!data.title) {
        details.push("Title is required");
    }

    if (!data.author) {
        details.push("Author is required");
    }

    if (!data.year) {
        details.push("Year is required");
    }

    if (details.length > 0) {
        return sendError(
            res, 
            400,
            "INVALID_BOOK",
            "Book data is invalid",
            details
        );
    }

    const book = await createBook(data);

    res.location(`/books/${book.id}`);

    return res.status(201).json({ data: book });
}

export async function deleteBookController(req, res) {
    const deleted = await deleteBook(req.params.id);

    if (!deleted) {
        return sendError(
            res,
            404,
            "BOOK_NOT_FOUND",
            `Book with ID ${req.params.id} not found`
        );
    }
    res.status(204).send();
}