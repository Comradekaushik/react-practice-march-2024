import React from "react";
import SquareBox from "./box";
import './square-styles.css';
import initialNamesArray from "./initialnames";

export default function Boxescontainer(props){
    
    const[initialNames,setInitialNames] = React.useState(initialNamesArray);

    // const Boxelements = initialNames.map((input)=>{
    //     return(<SquareBox valueChild={input.name} key={input.id}/>)
    // });


    // const Boxelements = initialNames.map((input,index)=>{return(<SquareBox key={index} {...input}/>)});

    const Boxelements = initialNames.map((input,index)=>{return(<SquareBox key={input.id} {...input}/>)});

    return(<>{Boxelements}</>)


    // return(<SquareBox valueChild={props.valueParent}/>);

    



}