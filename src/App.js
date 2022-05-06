import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from './Shared/NotFound/NotFound';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Books from './Pages/Home/Books/Books';
import BookDetails from './Pages/Home/BookDetails/BookDetails'
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import AllBooks from './Pages/AllBooks/AllBooks';
import AddBook from './Pages/AddBook/AddBook';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/book/:id' element={<RequireAuth>
            <BookDetails></BookDetails>
          </RequireAuth>}></Route>
          <Route path='/allbooks' element={<RequireAuth>
            <AllBooks></AllBooks>
          </RequireAuth>}></Route>
          <Route path='/addbook' element={<RequireAuth>
            <AddBook></AddBook>
          </RequireAuth>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
