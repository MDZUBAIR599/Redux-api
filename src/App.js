
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Todoitems from './Pages/Todoitems';
import Navbar from './Components/Navbar';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
        <Route path='/todo/:id' element={<Todoitems/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
