 import * as React from "react"
 import PropTypes from "prop-types"
 
 
 const Project = ({ children, backgroundColor, top, left }) => {
 
   return (
     <>
       <div
         style={{
           position: `absolute`,
           top: `${top}px`,
           left: `${left}px`,
           width: `100vw`,
           height: `100vh`,
           padding: `50px`,
           backgroundColor: `${backgroundColor}`
         }}
       >
         <main>{children}</main>
       </div>
     </>
   )
 }
 
 Project.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Project
 