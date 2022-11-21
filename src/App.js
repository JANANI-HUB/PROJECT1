import "./App.css";
import React from 'react';
import Page3 from './Page3';
import Page4 from './Page4';
import{BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
return (
  <BrowserRouter>
  <div>
<Routes>
<Route path='/' element={<Page4/>}></Route>
  <Route path='/Page3' element={<Page3/>}></Route>
  
</Routes>
  </div>
</BrowserRouter>
);
}

export default  App

