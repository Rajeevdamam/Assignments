export class Book{
    book_id:string;
    book_name:string;
    book_author:string;
    book_rating:string;
    constructor(book_id:string,book_name:string,book_author:string,book_rating:string){
        this.book_id=book_id;
        this.book_name=book_name;
        this.book_author=book_author;
        this.book_rating=book_rating;
    }
}