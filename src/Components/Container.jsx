 import React, { Children } from 'react'
 
 const Container = ({children,className}) => {
   return (
     
       <div className={`w-full max-w-310 mx-auto ${className}`}>
        {children}

       </div>
     
   )
 }
 
 export default Container
 