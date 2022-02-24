
import './App.css';
import Table from './components/Table';
import {useState,useEffect} from 'react';
import {Route,Switch} from 'react-router-dom'
import Posts from './components/Posts';
//import Userpost from './components/userposts';
import Postdetails from './components/postdetails';

function App() {
  const [data,setdata] = useState([])
  const [childdata,setchilddata] = useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res)=>{
      return res.json();
    }).then((resp)=>{
      setdata(resp)
    })
  },[])
  const cdata =(index)=>{
    setchilddata(index)
  }


  return (
    <div>
     
     <Switch>
        <Route path="/" exact ><Table data={data}/></Route>
        <Route path="/:id"  exact><Posts childdata={cdata}/></Route>
        <Route path="/:id/comments"><Postdetails childdata={childdata} /></Route>
        <Route path="/:id" component={Postdetails} />
      </Switch>

      
    </div>
  );
}

export default App;