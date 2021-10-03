import React from "react";
export class Student extends React.Component{
    render(){
        var style = {
            fontSize: 30,
            color: 'orange',
            
         }
        return<h3 style={style} >Hi.I am Student..</h3>
    }
}
 
export class Student1  extends React.Component{
    render(){
        var style1 ={
             fontSize: 20,
             color:'red'
             
        }
        return<p style={style1} >I am studing React.js..</p>
    }
}
