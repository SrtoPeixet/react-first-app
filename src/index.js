import React from 'react'
import ReactDOM from 'react-dom';

// CSS
import './index.css'
//setup vars
const firstBook = {
  img : "https://images-na.ssl-images-amazon.com/images/I/81tq0E85YeL.jpg";,
  title : "La insoportable levedad del ser",
  author : "Milan Kundera"
}


function BookList(){
  return <section className="booklist">
    <Book/>
    <Book/>
  </section>;
}
const Book = (props) => {

  return (<article className='book'>
    <img width="150px" src={img} alt="" />
    <h1>{title}</h1>
    <h4>{article.toUpperCase()}</h4>
   </article>);
}

ReactDOM.render(<BookList/>,document.getElementById('root'));