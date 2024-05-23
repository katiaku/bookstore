import { Book } from "../config/types";

const books: Book[] =  [
    {
        id_book: 1,
        id_user: 1,
        title: "El Perfume",
        author: "Patrick Suskind",
        photo: "https://imagessl2.casadellibro.com/a/l/s7/32/9788432228032.webp",
        price: 19.9,
        type: "Tapa dura"
    },
    {
        id_book: 2,
        id_user: 1,
        title: "Hábitos Atómicos",
        author: "James Clear",
        photo: "https://m.media-amazon.com/images/I/81rK6XgdrKL._SY522_.jpg",
        price: 20,
        type: "Tapa blanda"
    },
    {
        id_book: 3,
        id_user: 2,
        title: "Universo Mafalda",
        author: "Quino",
        photo: "https://imagessl5.casadellibro.com/a/l/s7/75/9788426426475.webp",
        price: 22.7,
        type: "Tapa dura"
    }
];

export default books;
