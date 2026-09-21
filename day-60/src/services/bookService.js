import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/data.json");

async function readBooks() {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
}


export async function getAllBooks(author, limit) {

    let result = await readBooks();

    if (author) {
        result = result.filter(book => 
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    if (limit !== undefined) {
        result = result.slice(0, limit);
    }

    return result;
}

export async function getBookById(id) {
    const books = await readBooks();

    return books.find(book => book.id === Number(id));
}

async function writeBooks(books) {
    await writeFile(filePath, JSON.stringify(books, null, 4), "utf-8");
}

export async function createBook(book) {
    const books = await readBooks();

    const newBook = {
        id: books.length + 1,
        title: book.title,
        author: book.author,
        year: book.year
    };
    books.push(newBook);

    await writeBooks(books);

    return newBook;
    }

    export async function deleteBook(id) {
        const books = await readBooks();
        const bookIndex = books.findIndex(book => book.id === Number(id));

        if (bookIndex === -1) {
            return false;
        }

        books.splice(bookIndex, 1);

        await writeBooks(books);

        return true;
    }