type Book = {
    id_book: number;
    id_user: number;
    title: string;
    author: string;
    photo: string;
    price: number;
    type: string;
};

type BookItemProps = {
    book: Book
};

type SidebarProps = {
    isOpenSidebar?: boolean;
};

type User = {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    password: string;
};

export type {
    Book,
    BookItemProps,
    SidebarProps,
    User
};
