import React from 'react'


function Form() {
  return (
    <div>
        
        
        <h1>List</h1>
        <div className="popup" id="myform">
            <div className="popup-content">
                <div className="pop">
                    
                    
                    
                  <div className="first">
                      
                      <label >Title:-</label>
                      <input type="text"></input>
                  </div>
                  <br/>
                  <div className="second">
                      
                    <label >Description:-</label><br/>
                    <textarea></textarea>
                </div>
                <br/>
                <div className="third">
                      
                    <label >Priority:-</label>
                    <select>
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
                
            <button className="button2">Submit</button>
            <button className="button2">Cancel</button>
                      
                  
                
                </div>
</div>
</div>

        
    
    </div>
    
  )
}

export default Form