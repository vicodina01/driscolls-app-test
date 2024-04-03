
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { UsersCreate } from './users/UsersCreate';
import { UsersUpdate } from './users/UsersUpdate';
import { UsersList}  from './users/UsersList';
import { NewsList}  from './news/NewsList';
import { NewsView}  from './news/NewsView';
import "./i18n";

function App() {
  return (
    <>
    <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/' element={<UsersList />} />
          <Route path='/users/create' element={<UsersCreate />} />
          <Route path='/users/:id' element={<UsersUpdate />} />
          <Route path='/news/' element={<NewsList />} />
          <Route path='/news/:id' element={<NewsView />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
