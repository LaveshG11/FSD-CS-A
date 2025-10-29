import REACTDOM from "react-dom/client";
import "./App.css";
import Book1 from "./Book1.jpg";

function App(){
  return(
    <>
      <h1><center>Book Store</center></h1>
      <div className="booklist">
        <Book/>
        <Book/>
        <Book/>
        <Book/>
        <Book/>
      </div>
      
    </>
  );
}

function Book(){
  return(
    <div className="card">
      <img src={Book1} width="200px" height = "200" alt="Book Image" />
      <h3>Title: Physics</h3>
      <h4>Price : ₹200</h4>
      <button>Add To Cart</button>
    </div>
  );
}

const parent = document.getElementById("root");
const root = REACTDOM.createRoot(parent);
root.render(<App/>);