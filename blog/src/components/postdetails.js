import React from 'react'
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
//import {NavLink} from 'react-router-dom'

function Postdetails(props) {
    const details = props.childdata
    const [postdetails,setpostdetails] = useState([])
    const [btndetails,setBtnDetails] = useState([])
    const params = useParams()
    //console.log(params)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments`)
        .then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp)
            setpostdetails(resp)
        })
    },[params.id])
  return (
    <div style={{backgroundColor:"lightgrey"}}>
        {
            details.map(item =>{
                return (
                    <div style={{maxWidth:"30%",margin:"auto",marginTop:"20px",borderRadius:"20px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",
                    border:"none",backgroundColor:"white"}}>
                        <div style={{margin:"10px 15px",fontSize:"22px",textAlign:"center",fontFamily:"cursive",color:"red",fontWeight:"bold"}}>{item.title}</div>
                        <div style={{fontSize:"18px",margin:"0px 10px",textAlign:"center"}}>{item.body}</div>
                        
                        <div><button onClick={()=>setBtnDetails(postdetails)} style={{marginLeft:"78%",fontSize:"18x",fontWeight:"bold",backgroundColor:"rgb(0,179,227)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",
                        border:"none",color:"white",borderRadius:"5px",marginRight:"10px"}}>comments:</button></div>
                        
                        <div>{btndetails.map(item=> {
                              return(
                                <div>
                                    <div style={{margin:"8px",fontSize:"18px",fontWeight:"bold",color:"grey"}}>{item.name}:</div>
                                    <div style={{margin:"8px"}}>{item.body}</div>
                                </div>
                              )
                        })}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Postdetails