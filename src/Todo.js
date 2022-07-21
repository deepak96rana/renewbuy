import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Progress from './Progress';



// const dummdata =[{title:"deepak",description:"deppepkajjajjajaja",status:"1"},
//             {title:"deepak",description:"deppepkajjajjajaja",status:"1"}]
function Todo() {
    const[data,setdata]=useState([]);
    const[status,setStatus] = useState(false);
    const[title,setTitle]= useState("");
    const [description,setDescription] = useState("");
    const[priority,setPriority] = useState();

   
    function openForm() {
        console.log("ddddd");
        document.getElementById("myform").style.display = "flex";
      }
      
      function closeForm() {
        document.getElementById("myform").style.display = "none";
      }
      const titleChangeHandler = (e)=>{
        setTitle(e.target.value);
      }
      const descriptionChangeHandler = (e)=>{
        setDescription(e.target.value);
      }
      const priorityChangeHandler = (e)=>{
        setPriority(e.target.value);
      }
     


      const handleSubmit = (e)=>{
        e.preventDefault();
        let info = {title : title,description : description,priority : priority,status:1}
        setdata([...data,info]);
        closeForm();

      }


      const progressHandler = ()=>{
        setStatus(!status);
      }


  return (

    <div>
        <Container>
        <h1>TodoList</h1>
        <Row>
        <Col sm style={{border:"1px solid red"}}>
           <div >Todo</div> 
           <button class="open-button" onClick={openForm}>+</button>
           <div>
            {data.map((dta)=>{
               if(dta.status==1){
               return <>
                
                <h3>{dta.title}</h3>
                <p>{dta.description}</p>
            
                </>
               }
            })}
           </div>
        </Col>
        <Col sm style={{border:"1px solid green"}}><div>InProgress
            
        </div>
        <button class="open-button" onClick={progressHandler}  >+</button>
       
{status && <Progress data={data} />}
        
           {/* <div>
            {data.map((dta)=>{
               if(dta.status==2){
               return <>
                
                <h3>{dta.title}</h3>
                <p>{dta.description}</p>
            
                </>
               }
            })}
           </div> */}
           
        </Col>
        <Col sm style={{border:"1px solid black"}}>Completed
        </Col>
      </Row>
      </Container>
      
        <div className="popup" id="myform">
            <div className="popup-content">
                <div className="pop">
                    
                    
                <a href="#"><img class="close" src="close.png" alt="closer" onClick={closeForm}/></a>
                  <div className="first">
                    
                      
                      <label >Title:-</label>
                      <input type="text" onChange={titleChangeHandler}></input>
                  </div>
                  <br/>
                  <div className="second">
                      
                    <label >Description:-</label><br/>
                    <textarea onChange={descriptionChangeHandler}></textarea>
                </div>
                <br/>
                <div className="third">
                      
                    <label >Priority:-</label>
                    <select onChange={priorityChangeHandler} >
                        <option>Select</option>
                        <option>High</option>
                        <option>low</option>
                        <option>critical</option>
                    </select>
                </div>
                <br/>
                <div className="fourth">
                      
                <label for="img">Select image:</label>
                <input type="file"  accept="image/*"></input>
                </div>
                <br/>
                
            <button className="button2" onClick={handleSubmit} >Submit</button>
            <button className="button2" onClick={closeForm}>Cancel</button>
                      
                  
                
                </div>
            
</div>
</div>

</div>
    
  )
}

export default Todo