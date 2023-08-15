import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8000/books"});

async function getBooks() {
    const response = await api.get('/')

    return response.data;
}

async function getBook(id) {
    const response = await api.get(`${id}`);

    return response.data;
}

export {
    getBooks,
    getBook
}