  import react,{useState, useContext} from 'react'
import HeaderTop from "./Components/HeaderTop";
import {MyContext} from  './MyContext'
import {createBrowserRouter, Routes, BrowserRouter, Route} from "react-router-dom"
import Login from './Components/Login';
import Clients from './Components/Clients';
import UpdateClient from './Components/UpdateClient';
function App() {

    const [login,setLogin] = useState([])
    
  return (
      <>
      <MyContext.Provider value={{login,setLogin}}>
     
    
      <BrowserRouter>
       <HeaderTop></HeaderTop>
      <div>
        <Routes>
          <Route index path='/login' element={<Login/>} />
          <Route  path='/clientes' element={<Clients/>} />
          <Route  path='/updateClients/:id' element={<UpdateClient/>} />
         
        </Routes>
      </div>
      </BrowserRouter>
      </MyContext.Provider>
    
      </>
     
    
    
  );
}

export default App;
