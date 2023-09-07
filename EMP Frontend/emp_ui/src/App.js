
import './App.css';
import Navbar from './Components/Navbar';
import { Router,Routes,Route} from 'react-router-dom';
import Addemp from './Components/Addemp';
import Updateemp from './Components/Updateemp';

import Home from './Components/Home';
import Search from './Components/Search';
import React from 'react'

function App() {
  return (
    <div className="App">
      
     
      <Navbar/>
        <Routes>
     
          <Route  exact path='/' element={<Home/>}></Route>
          <Route   exact path='/addEmployee' element={<Addemp/>}></Route>
          <Route   exact path='/updateEmployee/:id' element={<Updateemp/>}></Route>
          <Route  exact path='/searchbyquery/:searchquery' element={<Search/>}></Route>

        </Routes>
       
        
    </div>
  );
}

export default App;
