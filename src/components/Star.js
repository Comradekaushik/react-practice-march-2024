// import React from "react";
export default function Star(props){
    let starimg="";
    if(props.isFilled){
        starimg = "../images/star-filled.png";
        return(<><img src={require("../images/star-filled.png")} alt="star"/></>)
        
        
    }
    else{
        starimg = "../images/Star-empty.png";
        return(<><img src={require("../images/Star-empty.png")} alt="star"/></>)
    }
    



}