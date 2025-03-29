type Book = {
    id_book: number;
    id_user: number;
    title: string;
    author: string;
    photo: string;
    price: number;
    type: string;
    rating?: number;
};

type BookItemProps = {
    book: Book;
    getBooks: () => void;
};

type BookListProps = {
    books: Book[];
    getBooks: () => void;
};

type SidebarProps = {
    isOpenSidebar?: boolean;
    setIsOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
};

type User = {
    id_user?: number;
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
    password?: string;
};

type AvatarProps = {
    user: User;
};

type QuoteType = {
    // _id: string;
    quote: string;
    author: string;
};

export type {
    Book,
    BookItemProps,
    BookListProps,
    SidebarProps,
    User,
    AvatarProps,
    QuoteType,
};
