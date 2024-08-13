import React from "react";
import StringsArray from "./initial-array";

export default function ArrayStrings(){
    const[StringArray,SetStringArray] = React.useState(StringsArray);
    function Additem(){
        let stringtoadd = `thing ${StringArray.length}`;
        SetStringArray((previousArray)=>{return([...previousArray,stringtoadd])});

    }
    const renderthis = StringArray.map((input)=><div>{input}</div>)
    
    return(<>
        <button onClick={Additem}>Add </button>
        
        {renderthis}
    </>)
} 