import React from 'react'
import { useParams } from 'react-router-dom'
import {useState,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
//import Userpost from './userposts'
// import {Route,Switch} from 'react-router-dom'
// import Postdetails from './postdetails';



export default function Posts(props) {
    const [postdata,setpostdata] = useState([])
    const [Term,setTerm] = useState("")
    const params = useParams()
    //console.log(params.id)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            return res.json();
        }).then((resp)=>{
            const data=resp.filter(user=>{
                
                return user.userId===Number(params.id)
            })
            setpostdata(data)
            
        })
    },[params.id])
  return ( <div>
    <div style={{backgroundColor:"rgb(0,179,227)",display:"flex",alignItems:"center",borderRadius:"5px"}} className="container" >
        <h1 style={{flex:1,color:"white",fontFamily:"-moz-initial"}}>Posts</h1>
        <input type="text"
         placeholder="Search For Post" 
         style={{height:"40px",marginLeft:"55%",width:"30%",borderRadius:"5px",color:"blue",
         boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",border:"0.5px",fontSize:"20px"}}
         onChange={(e)=>setTerm(e.target.value)}/>
    </div>
    {
        postdata.filter(product=>product.title.includes(Term)).map((item)=>{
            return (
                <div style={{display:"flex",maxWidth:"70%",margin:"auto",height:"40px",marginTop:"20px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",alignItems:"center"}}>
                    <div  style={{flex:1,fontSize:"20px",fontFamily:"-moz-initial", marginLeft:"20px"}}><li key={item.title} style={{listStyleType:"none"}}>{item.title}</li></div>
                    <div style={{marginRight:"20px",fontSize:"20px"}}>
                        <button style={{backgroundColor:"rgb(0,179,227)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",
                        border:"none",color:"white",borderRadius:"5px"}}
                         onClick={()=>{props.childdata(postdata)}}><NavLink style={{color:"white",fontFamily:"-moz-initial"}} to={item.id+'/comments'}>See More</NavLink></button>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}