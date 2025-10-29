import Book from "./Book";
function App(){
    return(
        <div>
        <h1><center>Book Store</center></h1>
        <div className='booklist'>
          <Book/>
          <Book/>
          <Book/>
        </div>
        </div>
    );
}
export default App;