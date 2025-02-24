import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profiel from './components/Profiel/Profiel'
import Dialogs from './components/Dialogs/Dialogs'
import Friends from './components/Friends/Friends'
import { BrowserRouter, Route, Routes } from 'react-router-dom';



import './App.css';

function App({state, addPost}) {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="we"> 
      <Navbar friend={state.friend}/>
     <Routes>
        <Route path='/message' element={ <Dialogs dialogNames={state.dialogNames} messagesItemps={state.messagesItemps} /> } />
        <Route path='/' element={ <Profiel heart={state.heart} addPost={addPost}/> } />
        <Route path='/profile' element={ <Profiel heart={state.heart} addPost={addPost} /> } />
        <Route path='/users' element={ <Friends friend={state.friend} /> } />
          </Routes>
      </div>
      </BrowserRouter>





    </div>
  );
}








export default App;