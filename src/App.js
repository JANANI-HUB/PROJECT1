import "./App.css";
import React from 'react';
import Project1login from './project1login';
import './project1login.css';
import Project1signup from './project1signup';
import './project1signup.css';
import Project1post from './Project1post';
import './Project1post.css';
import Project1Details from './project1Details';
import './project1Details.css';
import Project1bconfirm from './project1bconfirm';
import './project1bconfirm.css';
import Project1crud from './project1crud';
import './project1crud.css';
import Project1delete from './project1delete';
import './project1delete.css';
import Project1cancel from './project1cancel';
import './project1cancel.css';
import Project1get from './project1get';
import './project1get.css';
import Project1update from './project1update';
import './project1update.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
return (
<Router>
      <Routes>
        <Route  path="/" element={<Project1login/>}/>
        <Route path="/project1signup" element={<Project1signup/>}/>
        <Route path="/project1login" element={<Project1login/>}/>
        <Route path="/project1post" element={<Project1post/>}/>
        <Route path="/project1Details" element={<Project1Details/>}/> 
        <Route path="/project1bconfirm" element={<Project1bconfirm/>}/>
        <Route path="/project1crud" element={<Project1crud/>}/>
        <Route path="/project1delete" element={<Project1delete/>}/>
        <Route path="/project1cancel" element={<Project1cancel/>}/>
        <Route path="/project1get" element={<Project1get/>}/>
        <Route path="/project1update" element={<Project1update/>}/>
      </Routes>
    </Router>
);
}
export default App;


