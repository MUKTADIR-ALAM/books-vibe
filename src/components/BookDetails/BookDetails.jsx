import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    const books = useLoaderData();
    const book = books.find((book)=> book.bookId === id);
    console.log(book);
    
  return (
    <div>
        book details {bookId}
    </div>
  )
}
