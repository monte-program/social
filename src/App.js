import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profiel from './components/Profiel/Profiel'
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/Friends/Friends'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="we"> 
      <Navbar />
     <Routes>
        <Route path='/message' element={ <Dialogs /> } />
        <Route path='/' element={ <Profiel /> } />
        <Route path='/profile' element={ <Profiel /> } />
        <Route path='/users' element={ <Friends /> } />
          </Routes>
      </div>
      </BrowserRouter>





    </div>
  );
}








export default App;