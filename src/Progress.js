import React from 'react'

function Progress(props) {

    console.log("data",props.data);
    const clicked=()=>{
        alert("i need more time to complete because almost 12:33 pm and i haveto submit 1 pm thats why i need time to pass data only ");

    }
  return (
    <div>
         <div >
        <table style={{border :"1px solid blue",width:"100%"}} >
  <tr>
    <th style={{border :"1px solid blue"}}>Titles</th>
    <th style={{border :"1px solid blue"}}>Todolist</th>
   
  </tr>
  
 
{
    
    props.data.map((dta)=>{
        return (
        <tr>
        
        <td style={{border :"1px solid blue"}}>{dta.title}</td>
        <button>Todo</button>
         <button>In Prograss</button>
         <button  onClick={clicked}>Completed</button>

        
        </tr>)
    })}
  
    
  
  
</table>

</div>
    </div>
  )
}

export default Progress