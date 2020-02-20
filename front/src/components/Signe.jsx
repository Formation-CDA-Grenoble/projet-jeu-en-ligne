import React from 'react';
//import Axios from 'axios';



function Signe (player) {
    
    if (Signe.props.id_user==1) 
      return ("X")
 
    else
       return ("O")

         }

  /*  Axios.post("//localhost:3000\State")
    .then(response => {
        this.props({ data: response.data });
      })*/
      
      
         
export default Signe;