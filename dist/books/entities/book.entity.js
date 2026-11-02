export class Book {
    id;
    title;
    author;
    isbn;
    publishedYear;
    createdAt;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
//# sourceMappingURL=book.entity.js.map