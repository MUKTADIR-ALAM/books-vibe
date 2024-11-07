import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function BookDetails() {

    const {bookId} = useParams();
    const id = parseInt(bookId);
    const books = useLoaderData();
    const book = books.find((book)=> book.bookId === id);
    const {image} = book
    
  return (
    <div className='my-12'>
        book details {bookId}
        <img className='w-36' src={image} alt="" />
        <br />
        <button className="btn btn-outline mr-4 btn-info">Mark as Read</button>
        <button className="btn btn-info">Add to wishlist</button>
    </div>
  )
}
