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

export type {
    Book,
    BookItemProps,
    SidebarProps
};
