import React from "react"
import './App.css';
//icons
import {BladesHorizontal,FormDown } from "grommet-icons"
import {AiFillBell} from "react-icons/ai"
import SideNavLinks from "./components/SideNavLink"
import EmptyState from "./components/EmptyState"
import Search from "./Search"

import { createApi } from "unsplash-js";
import FaceCard from './FaceCard';

const unsplash = createApi({
  accessKey: "MYITu_PH87BCU2-PmZccQa_jANeRJqM4ICJuE5363hw",
});


const {useState} = React;
function App() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();
    console.log(query)
    unsplash.search
      .getPhotos({
        query: query,
        page: 1
      })
      .then((json) => {
        console.log(json.response)
        setPics(json.response.results);
      });
  };


  return (
    <div className="flex flex-row App">
      <SideNav />
      <div id="main" className="flex flex-column" style={{gap:"2rem"}}>

        <div className="flex flex-row align-center navheader">
          <Search 
            onChange={(e) => setQuery(e.target.value)}
            query={query}
            searchPhotos={searchPhotos}
          />
          <Notification />
          <Avatar />
        </div>

        <div className="flex flex-column body " style={{gap:"2rem"}}>
          <div className="flex flex-row flex-grow justify-space-between wrap">
            {["World", "Following","Popular", "Post", "Gender", 'Location', 'Profession'].map(e=> <Flag key={e} elname={e} />)}
          </div>
          <div className="flex flex-row align-center wrap" style={{gap:"3rem"}}>
            {pics.length === 0 ? <EmptyState />:pics.map(e=><FaceCard key={e.id} photo={e} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

const Flag = ({elname})=><div className="flex flex-row  align-center justify-center" style={{gap:"0.5em", border: "1px solid #fff", backgroundColor: "white", borderRadius:'5px', width:"6rem", color: "rgb(56, 47, 157)", padding:"0.2em 0.8em", marginBottom:"4px"}}>
  <span>{elname}</span>
  <div className="relate-icon"><FormDown color="rgb(56, 47, 157)" /></div>
</div> 

const SideNav = ()=> <div className="sidenavWrapper">
  <div className="brand">
    <BladesHorizontal color="rgb(56, 47, 157)"/>
    <span>bluecube</span>
  </div>
  <SideNavLinks />
</div>

const Avatar = ()=> <div 
className="flex flex-row align-center avatar">
  <div className="flex flex-row align-baseline">
    <div className="border-round" style={{width:'2rem', height:'2rem'}}>
      <img src={`https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80`} alt="avatar" className="border-round" />
    </div>
    <div className="border-round" style={{width:"0.6rem", height:"0.6rem", background:"#28CC53", position:"relative", left:"-0.5em", border:"1px solid white"}}/>
  </div>


  <div className="flex flex-row align-center">
    <span style={{fontWeight:"600"}}>Abigail</span> 
    <FormDown 
      className="relate-icon" 
      size="14rem" 
    />
  </div>
</div>

const Notification = ()=><div className="flex flex-row align-baseline">
   <AiFillBell size="2rem" color="rgb(56, 47, 157)" />
  <span className="flex flex-row align-center justify-center pin">2</span>
</div>

export default App;
