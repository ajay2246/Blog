
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
function Table(props){
    const data = props.data
    const [value,setValue] = useState("")
    
    return(
      <div>
         <div style={{backgroundColor:"rgb(0,179,227)",display:"flex",alignItems:"center",borderRadius:"5px"}} className="container" >
        <h1 style={{flex:1,color:"white",fontFamily:"-moz-initial"}}> UserDetails</h1>
        <input type="text"
         placeholder="Search by username" 
         style={{height:"40px",marginLeft:"55%",width:"30%",borderRadius:"5px",color:"blue",
         boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",border:"0.5px",fontSize:"20px"}}
         onChange={(e)=>setValue(e.target.value)}/>
      </div>
                
    <div className="table-responsive container" >          
  <table className="table">
    <thead>
      <tr>
        <th>id</th>
        <th>Username</th>
        <th>Companyname</th>
        <th>posts</th>
      </tr>
    </thead>
    <tbody>
      {
          data.filter(product => product.name.includes(value)).map((item,index)=>{
              return (
                  <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.company.name}</td>
                      <td><button style={{backgroundColor:"rgb(0,179,227)",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.26)",
                        border:"none",borderRadius:"5px",width:"80px"}}><NavLink style={{color:"white"}} to={"/"+item.id}>Posts</NavLink></button></td>
                  </tr>
              )
          })
      }
    </tbody>
  </table>
  </div>
      </div>
    )
}

export default Table;