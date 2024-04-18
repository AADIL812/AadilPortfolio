
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { createSearchParams,useSearchParams,useNavigate } from 'react-router-dom';
import H from './components/home';
import P from './components/proj';
import S from './components/skills';
import Hobby from './components/hobbies';
import Proj from './components/projects';
import Contact from './components/contact';
function App() {
  let n = useNavigate();
  let move_to_project_list = ()=>{
    n({
        pathname:'/proj'
    });


}

let move_to_skills = ()=>{
    n({
        pathname:'/skills'
    });

}
let move_to_home = ()=>{
  n({
    pathname:'/home'
  })
}

let move_to_hobbies = ()=>{
  n({
    pathname:'/hobbies'
  })
}

let move_to_prj = ()=>{
  n({
    pathname:'/pj'
  })
}

let move_to_contact = ()=>{
  n(
    {
      pathname:'/contact'
    }
  );
}
  return (
    <div className="App">
      <Tabs>
  <TabList>
    <Tab onClick={move_to_home} >HOME</Tab>
    <Tab onClick={move_to_project_list}>EDUCATION</Tab>
    <Tab onClick={move_to_skills}>SKILLS</Tab>
    <Tab onClick={move_to_hobbies}>HOBBIES</Tab>
    <Tab onClick={move_to_prj}>PROJECTS</Tab>
    <Tab onClick={move_to_contact}>CONTACT</Tab>
  </TabList>
</Tabs>
      <Routes>
        <Route index element={<H/>}/>
        <Route path='/proj' element = {<P/>}/>
        <Route path='/skills' element = {<S/>}/>
        <Route path='/home' element = {<H/>}/>
        <Route path='/hobbies' element = {<Hobby/>} />
        <Route path='/pj' element = {<Proj/>} />
        <Route path='/contact' element = {<Contact/>} />

      </Routes>


      
    </div>
  );
}

export default App;
