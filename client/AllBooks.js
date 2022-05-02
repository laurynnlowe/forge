import React from 'react';
import books from '../server/bookdata'

// const books = [
//     {
//         id: 1,
//         title: 'Five Nights at Freddys',
//         content: 'More of the those beloved animatronics',
//         authorId: 1,
//         image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
//     },
//     {
//         id: 2,
//         title: 'Cat Time',
//         content: 'Learn more about your pet',
//         authorId: 1,
//         image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
//     },
//     {
//         id: 3,
//         title: 'Robot Empires',
//         content: 'Where do they get those crazy toys',
//         authorId: 2,
//         image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg"
//     },
// ]
const AllBooks = () =>{

    return (
        <div>
            <h1 className='title'>Search Books</h1>
            <div className='booksContainer'>
                {books.map((book, index)=>(
                    <div key={index} className='singleBook'>
                        <img src={book.image} className='singleBookImage' />
                        <p>{book.title}</p>
                    </div>)
                )}
            </div>
        </div>
    )
}

export default AllBooks;
