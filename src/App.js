  import react,{useState, useContext} from 'react'
import HeaderTop from "./Components/HeaderTop";
import {MyContext} from  './MyContext'
import {createBrowserRouter, Routes, BrowserRouter, Route} from "react-router-dom"
import Login from './Components/Login';
function App() {

    const [login,setLogin] = useState([])
    
  return (
      <>
      <MyContext.Provider value={{login,setLogin}}>
      <HeaderTop></HeaderTop>
      <Login></Login>
      <BrowserRouter>
      <div>
        <Routes>
          <Route/>
        </Routes>
      </div>
      </BrowserRouter>
      </MyContext.Provider>
    
      </>
     
    
    
  );
}

export default App;
