// with the proper shortcut you could do rfce + enter to have the following code snippet 

import React {useState, useEffect} from 'react'
import './Nav.css'; 




function Nav(){
    //piece of code that should be executed given a certain condition 
    //we also wanna attach a list here 
    
    const [show, handleShow] = useState(false); 
    
    
    useEffect(() => {
        
        window.addEventListener("scroll", () => {
          
            if (window.scrollY >100) {
                
                handleShow(true);
                }
            else handleShow(false);
            
            
            
        });
        
        return () => {
            window.removeEventListener("scroll"); 
        }
           
    }, []);
    
    
    
    return ( 
    //string concatenation
        
    <div className={`nav  ${show && "nav__black"}`> 
        
        //i need netflix logo and user avatar 
        
<Image
        className="nav__logo"
        src="http://upload.wikimedia.org/wikipedia/commons"
        alt="Netflix Logo"
    />
      
        
        <img 
        
        className="nav__avatar"
        
        src="https://pbs.twing.com/profile_image/...."
        alt="avatar img"
        >
    
        </div> 

    );
}

export default Nav